import { Request } from "@cloudflare/workers-types";
export interface Env {
}
declare const _default: {
    fetch(request: Request, env: any): Promise<any>;
};
export default _default;
