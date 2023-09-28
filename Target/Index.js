"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = exports.Environment = void 0;
exports.Environment = (await Promise.resolve().then(function () { return require("./Object/Environment.js"); })).default;
exports.Response = (await Promise.resolve().then(function () { return require("@cloudflare/workers-types"); })).Response;
var JSONResponse = /** @class */ (function (_super) {
    __extends(JSONResponse, _super);
    function JSONResponse(
    // rome-ignore lint/suspicious/noExplicitAny:
    body, init) {
        if (init === void 0) { init = {
            headers: {
                "content-type": "application/json;charset=UTF-8",
            },
        }; }
        return _super.call(this, JSON.stringify(body), init) || this;
    }
    return JSONResponse;
}(exports.Response));
(await Promise.resolve().then(function () { return require("itty-router"); })).Router().post("/discord", function (Request) { return __awaiter(void 0, void 0, void 0, function () {
    var Message, _a, _b, _c;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0: return [4 /*yield*/, Request["json"]()];
            case 1:
                Message = _e.sent();
                _a = Message.type;
                return [4 /*yield*/, Promise.resolve().then(function () { return require("discord-interactions"); })];
            case 2:
                if (!(_a ===
                    (_e.sent()).InteractionType.PING)) return [3 /*break*/, 4];
                _b = JSONResponse.bind;
                _d = {};
                return [4 /*yield*/, Promise.resolve().then(function () { return require("discord-interactions"); })];
            case 3: return [2 /*return*/, new (_b.apply(JSONResponse, [void 0, (_d.type = (_e.sent()).InteractionResponseType
                        .PONG,
                        _d)]))()];
            case 4:
                _c = Message.type;
                return [4 /*yield*/, Promise.resolve().then(function () { return require("discord-interactions"); })];
            case 5:
                if (_c ===
                    (_e.sent()).InteractionType
                        .APPLICATION_COMMAND) {
                    switch (Message.data.name.toLowerCase()) {
                        case "invite": {
                            return [2 /*return*/, new JSONResponse({
                                    type: 4,
                                    data: {
                                        content: "https://discord.com/oauth2/authorize?client_id=".concat(exports.Environment.parse(process.env)
                                            .DISCORD_APPLICATION_ID, "&scope=applications.commands"),
                                        flags: 64,
                                    },
                                })];
                        }
                        default:
                            return [2 /*return*/, new JSONResponse({ error: "Unknown Type" }, { status: 400 })];
                    }
                }
                return [2 /*return*/, new JSONResponse({ error: "Unknown Type" }, { status: 400 })];
        }
    });
}); });
(await Promise.resolve().then(function () { return require("itty-router"); }))
    .Router()
    .all("*", function () { return new exports.Response("404 | Not Found.", { status: 404 }); });
exports.default = {
    fetch: function (request, _a) {
        var _b, _c;
        var _d = _a === void 0 ? exports.Environment.parse(process.env) : _a, DISCORD_PUBLIC_KEY = _d.DISCORD_PUBLIC_KEY;
        return __awaiter(this, void 0, void 0, function () {
            var isValidRequest, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        if (!(request.method === "POST")) return [3 /*break*/, 3];
                        return [4 /*yield*/, Promise.resolve().then(function () { return require("discord-interactions"); })];
                    case 1:
                        _f = (_e = (_g.sent())).verifyKey;
                        return [4 /*yield*/, request.clone().arrayBuffer()];
                    case 2:
                        isValidRequest = _f.apply(_e, [_g.sent(), (_b = request["headers"].get("x-signature-ed25519")) !== null && _b !== void 0 ? _b : "", (_c = request["headers"].get("x-signature-timestamp")) !== null && _c !== void 0 ? _c : "", DISCORD_PUBLIC_KEY]);
                        if (!isValidRequest) {
                            console.error("Invalid Request");
                            return [2 /*return*/, new exports.Response("Bad request signature.", { status: 401 })];
                        }
                        _g.label = 3;
                    case 3: return [4 /*yield*/, Promise.resolve().then(function () { return require("itty-router"); })];
                    case 4: return [2 /*return*/, (_g.sent()).Router().handle(request)];
                }
            });
        });
    },
};
