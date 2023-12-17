(await import("dotenv")).config();
const { string: t } = await import("zod");
var o = (await import("zod")).object({
	DISCORD_APPLICATION_ID: t().optional().default(""),
	DISCORD_CLIENT_ID: t().optional().default(""),
	DISCORD_CLIENT_SECRET: t().optional().default(""),
	DISCORD_PUBLIC_KEY: t().optional().default(""),
	DISCORD_TOKENS: t().optional().default(""),
});
export { o as default, t as string };
