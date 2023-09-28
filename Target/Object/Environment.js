"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.string = void 0;
(await Promise.resolve().then(function () { return require("dotenv"); })).config();
exports.string = (await Promise.resolve().then(function () { return require("zod"); })).string;
exports.default = (await Promise.resolve().then(function () { return require("zod"); })).object({
    DISCORD_APPLICATION_ID: (0, exports.string)().optional().default(""),
    DISCORD_CLIENT_ID: (0, exports.string)().optional().default(""),
    DISCORD_CLIENT_SECRET: (0, exports.string)().optional().default(""),
    DISCORD_PUBLIC_KEY: (0, exports.string)().optional().default(""),
    DISCORD_TOKENS: (0, exports.string)().optional().default(""),
});
