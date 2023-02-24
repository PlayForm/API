import { Router } from "itty-router";
import { Request, Response } from "@cloudflare/workers-types";

import {
	InteractionResponseType,
	InteractionType,
	verifyKey,
} from "discord-interactions";

export interface Env {}

class JsonResponse extends Response {
	// @ts-ignore
	constructor(
		body: any,
		init: any = {
			headers: {
				"content-type": "application/json;charset=UTF-8",
			},
		}
	) {
		super(JSON.stringify(body), init);
	}
}

const router = Router();

/* This is the main route that handles all the requests from Discord. */
router.post("/discord", async (request, env) => {
	const message = await request["json"]();

	if (message.type === InteractionType.PING) {
		return new JsonResponse({
			type: InteractionResponseType.PONG,
		});
	}

	if (message.type === InteractionType.APPLICATION_COMMAND) {
		switch (message.data.name.toLowerCase()) {
			case "invite": {
				return new JsonResponse({
					type: 4,
					data: {
						content: `https://discord.com/oauth2/authorize?client_id=${env.DISCORD_APPLICATION_ID}&scope=applications.commands`,
						flags: 64,
					},
				});
			}

			default:
				return new JsonResponse(
					{ error: "Unknown Type" },
					{ status: 400 }
				);
		}
	}

	return new JsonResponse({ error: "Unknown Type" }, { status: 400 });
});

/* This is a catch-all route that will be called if no other route matches. */
router.all("*", () => new Response("404 | Not Found.", { status: 404 }));

export default {
	async fetch(request: Request, env: any) {
		if (request.method === "POST") {
			const isValidRequest = verifyKey(
				await request.clone().arrayBuffer(),
				request.headers.get("x-signature-ed25519") ?? "",
				request.headers.get("x-signature-timestamp") ?? "",
				env.DISCORD_PUBLIC_KEY
			);

			if (!isValidRequest) {
				console.error("Invalid Request");
				return new Response("Bad request signature.", { status: 401 });
			}
		}

		// Dispatch the request to the appropriate route
		return router.handle(request, env);
	},
};
