import * as e from "dotenv";
import { z as o } from "zod";
e.config();var t=o.object({DISCORD_PUBLIC_KEY:o.string().default("")}).parse(process.env);export { t as default };

