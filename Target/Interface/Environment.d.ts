declare const _Object: import("zod").ZodObject<{
    DISCORD_APPLICATION_ID: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
    DISCORD_CLIENT_ID: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
    DISCORD_CLIENT_SECRET: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
    DISCORD_PUBLIC_KEY: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
    DISCORD_TOKENS: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
}, "strip", import("zod").ZodTypeAny, {
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
export type Type = Zod.infer<typeof _Object>;
export type { Type as default };
