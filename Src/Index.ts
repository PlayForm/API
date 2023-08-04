import {
	InteractionResponseType,
	InteractionType,
	verifyKey,
} from "discord-interactions";
import { Router } from "itty-router";
import type { ResponseInit } from "@cloudflare/workers-types";
import { Request, Response } from "@cloudflare/workers-types";
import Environment from "./Lib/Environment.js";

class JSONResponse extends Response {
	constructor(
		// rome-ignore lint/suspicious/noExplicitAny:
		body: any,
		init: ResponseInit = {
			headers: {
				"content-type": "application/json;charset=UTF-8",
			},
		}
	) {
		super(JSON.stringify(body), init);
	}
}

const router = Router();

router.post("/discord", async (request, env) => {
	const message = await request["json"]();

	if (message.type === InteractionType.PING) {
		return new JSONResponse({
			type: InteractionResponseType.PONG,
		});
	}

	if (message.type === InteractionType.APPLICATION_COMMAND) {
		switch (message.data.name.toLowerCase()) {
			case "invite": {
				return new JSONResponse({
					type: 4,
					data: {
						content: `https://discord.com/oauth2/authorize?client_id=${env.DISCORD_APPLICATION_ID}&scope=applications.commands`,
						flags: 64,
					},
				});
			}

			default:
				return new JSONResponse(
					{ error: "Unknown Type" },
					{ status: 400 }
				);
		}
	}

	return new JSONResponse({ error: "Unknown Type" }, { status: 400 });
});

router.all("*", () => new Response("404 | Not Found.", { status: 404 }));

export default {
	async fetch(request: Request, _env = Environment) {
		if (request.method === "POST") {
			const isValidRequest = verifyKey(
				await request.clone().arrayBuffer(),
				request["headers"].get("x-signature-ed25519") ?? "",
				request["headers"].get("x-signature-timestamp") ?? "",
				_env.DISCORD_PUBLIC_KEY
			);

			if (!isValidRequest) {
				console.error("Invalid Request");
				return new Response("Bad request signature.", { status: 401 });
			}
		}

		return router.handle(request, Environment);
	},
};
