class JSONResponse extends Response {
	constructor(
		// biome-ignore lint/suspicious/noExplicitAny:
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

(await import("itty-router")).Router().post("/discord", async (Request) => {
	const Message = await Request["json"]();

	if (
		Message.type ===
		(await import("discord-interactions")).InteractionType.PING
	) {
		return new JSONResponse({
			type: (await import("discord-interactions")).InteractionResponseType
				.PONG,
		});
	}

	if (
		Message.type ===
		(await import("discord-interactions")).InteractionType
			.APPLICATION_COMMAND
	) {
		switch (Message.data.name.toLowerCase()) {
			case "invite": {
				return new JSONResponse({
					type: 4,
					data: {
						content: `https://discord.com/oauth2/authorize?client_id=${
							Environment.parse(process.env)
								.DISCORD_APPLICATION_ID
						}&scope=applications.commands`,
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

(await import("itty-router"))
	.Router()
	.all("*", () => new Response("404 | Not Found.", { status: 404 }));

export default {
	async fetch(
		request: Request,
		{ DISCORD_PUBLIC_KEY } = Environment.parse(process.env)
	) {
		if (request.method === "POST") {
			const isValidRequest = (
				await import("discord-interactions")
			).verifyKey(
				await request.clone().arrayBuffer(),
				request["headers"].get("x-signature-ed25519") ?? "",
				request["headers"].get("x-signature-timestamp") ?? "",
				DISCORD_PUBLIC_KEY
			);

			if (!isValidRequest) {
				console.error("Invalid Request");
				return new Response("Bad request signature.", { status: 401 });
			}
		}

		return (await import("itty-router")).Router().handle(request);
	},
};

import type { Request, ResponseInit } from "@cloudflare/workers-types";

export const { default: Environment } = await import("./Environment.js");

export const { Response } = await import("@cloudflare/workers-types");
