import { Request } from "@cloudflare/workers-types";
declare const _default: {
    fetch(request: Request, _env?: {
        DISCORD_APPLICATION_ID: string;
        DISCORD_CLIENT_ID: string;
        DISCORD_CLIENT_SECRET: string;
        DISCORD_PUBLIC_KEY: string;
        DISCORD_TOKENS: string;
    }): Promise<any>;
};
export default _default;
