(await import("dotenv")).config();

export const { string } = await import("zod");

export default (await import("zod")).object({
	DISCORD_APPLICATION_ID: string().optional().default(""),
	DISCORD_CLIENT_ID: string().optional().default(""),
	DISCORD_CLIENT_SECRET: string().optional().default(""),
	DISCORD_PUBLIC_KEY: string().optional().default(""),
	DISCORD_TOKENS: string().optional().default(""),
});
