var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendBotListRPC = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./699100.js");
var s = require("./280969.js");
var l = require("./549250.js");
var u = require("./372114.js");
var c = require("./590062.js");
var d = require("./216342.js");
function p() {
  return (p = (0, i.default)(function* (e, t) {
    const n = (0, u.makeBotListRequest)(e);
    const r = yield (0, a.sendSmaxStanza)(n, t);
    const i = (0, s.parseBotListResponseSuccessV1)(r, n);
    if (i.success) {
      return {
        name: "BotListResponseSuccessV1",
        value: i.value
      };
    }
    const p = (0, l.parseBotListResponseSuccessV2)(r, n);
    if (p.success) {
      return {
        name: "BotListResponseSuccessV2",
        value: p.value
      };
    }
    const f = (0, o.parseBotListResponseError)(r, n);
    if (f.success) {
      return {
        name: "BotListResponseError",
        value: f.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("BotList", {
      SuccessV1: i,
      SuccessV2: p,
      Error: f
    }));
  })).apply(this, arguments);
}