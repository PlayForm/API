import type Zod from "zod";
/**
 * @module Environment
 *
 */
export type Type = Zod.infer<typeof Environment>;
export type { Type as default };
export declare const Environment: Zod.ZodObject<{
    DISCORD_APPLICATION_ID: Zod.ZodDefault<Zod.ZodOptional<Zod.ZodString>>;
    DISCORD_CLIENT_ID: Zod.ZodDefault<Zod.ZodOptional<Zod.ZodString>>;
    DISCORD_CLIENT_SECRET: Zod.ZodDefault<Zod.ZodOptional<Zod.ZodString>>;
    DISCORD_PUBLIC_KEY: Zod.ZodDefault<Zod.ZodOptional<Zod.ZodString>>;
    DISCORD_TOKENS: Zod.ZodDefault<Zod.ZodOptional<Zod.ZodString>>;
}, "strip", Zod.ZodTypeAny, {
    DISCORD_APPLICATION_ID: string;
    DISCORD_CLIENT_ID: string;
    DISCORD_CLIENT_SECRET: string;
    DISCORD_PUBLIC_KEY: string;
    DISCORD_TOKENS: string;
}, {
    DISCORD_APPLICATION_ID?: string | undefined;
    DISCORD_CLIENT_ID?: string | undefined;
    DISCORD_CLIENT_SECRET?: string | undefined;
    DISCORD_PUBLIC_KEY?: string | undefined;
    DISCORD_TOKENS?: string | undefined;
}>;
