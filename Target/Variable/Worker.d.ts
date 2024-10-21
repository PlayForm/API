import type { Request, ResponseInit } from "@cloudflare/workers-types";
declare const _default: {
    fetch(request: Request, { DISCORD_PUBLIC_KEY }?: {
        DISCORD_APPLICATION_ID: string;
        DISCORD_CLIENT_ID: string;
        DISCORD_CLIENT_SECRET: string;
        DISCORD_PUBLIC_KEY: string;
        DISCORD_TOKENS: string;
    }): Promise<any>;
};
export default _default;
export declare const Environment: import("zod").ZodObject<{
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
export declare const Response: {
    new (body?: import("@cloudflare/workers-types").BodyInit | null, init?: ResponseInit): import("@cloudflare/workers-types").Response;
    prototype: import("@cloudflare/workers-types").Response;
    redirect(url: string, status?: number): import("@cloudflare/workers-types").Response;
    json(any: any, maybeInit?: ResponseInit | import("@cloudflare/workers-types").Response): import("@cloudflare/workers-types").Response;
};
