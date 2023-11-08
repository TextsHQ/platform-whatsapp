var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendChatBlockGetRPC = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./713878.js");
var s = require("./608653.js");
var l = require("./893935.js");
var u = require("./590062.js");
var c = require("./216342.js");
function d() {
  return (d = (0, i.default)(function* (e) {
    const t = (0, l.makeChatBlockGetRequest)();
    const n = yield (0, a.sendSmaxStanza)(t, e);
    const r = (0, s.parseChatBlockGetResponseSuccess)(n, t);
    if (r.success) {
      return {
        name: "ChatBlockGetResponseSuccess",
        value: r.value
      };
    }
    const i = (0, o.parseChatBlockGetResponseServerError)(n, t);
    if (i.success) {
      return {
        name: "ChatBlockGetResponseServerError",
        value: i.value
      };
    }
    throw new u.SmaxParsingFailure((0, c.errorMessageRpcParsing)("ChatBlockGet", {
      Success: r,
      ServerError: i
    }));
  })).apply(this, arguments);
}