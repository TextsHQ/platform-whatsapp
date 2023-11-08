var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE = undefined;
exports.genBotTypingIndicatorMessage = function () {
  return c.apply(this, arguments);
};
exports.getBotTypingIndicatorTimeout = function () {
  return (0, a.getABPropConfigValue)("bonsai_ti_timeout_duration_ms");
};
var i = r(require("../vendor/348926.js"));
var a = require("./287461.js");
var o = require("./359987.js");
var s = require("./354458.js");
var l = r(require("./565754.js"));
var u = r(require("./124928.js"));
function c() {
  return (c = (0, i.default)(function* (e) {
    var t;
    if (!(0, s.isBotEnabled)()) {
      return;
    }
    const n = e.id;
    if (n instanceof u.default && !n.isBot() && !((t = e.contact.businessProfile) === null || t === undefined ? undefined : t.isBizBot3p)) {
      return;
    }
    const r = new l.default({
      fromMe: false,
      remote: n,
      id: l.default.newId_DEPRECATED()
    });
    (0, o.frontendFireAndForget)("addInitialBotTypingIndicatorToChat", {
      chatId: n,
      msgKey: r
    });
  })).apply(this, arguments);
}
exports.BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE = "bot_typing_placeholder";