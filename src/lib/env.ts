import dotenv from "dotenv";

import { z } from "zod";

dotenv.config();

export default z
	.object({
		DISCORD_APPLICATION_ID: z.string().default(""),
		DISCORD_CLIENT_ID: z.string().default(""),
		DISCORD_CLIENT_SECRET: z.string().default(""),
		DISCORD_PUBLIC_KEY: z.string().default(""),
		DISCORD_TOKENS: z.string().default(""),
	})
	.parse(process.env);
