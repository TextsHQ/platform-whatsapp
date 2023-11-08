var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendTcToken = function () {
  return c.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./632157.js");
var o = require("./351053.js");
var s = require("./61229.js");
var l = require("./67081.js");
var u = require("./147034.js");
function c() {
  return (c = (0, i.default)(function* (e) {
    if (!e.isUserNotPSA() || e.isBot()) {
      return;
    }
    const t = o.ChatCollection.get(e);
    if (t != null && (0, u.shouldSendNewToken)(t.tcTokenSenderTimestamp)) {
      try {
        const n = (0, a.unixTime)();
        yield (0, l.setPrivacyTokens)(e, [l.TokenType.TrustedContact], n);
        const r = {
          tcTokenSenderTimestamp: n
        };
        t.set(r);
        yield (0, s.getChatTable)().merge(e.toString(), r);
      } catch (e) {
        __LOG__(3, true, undefined, true)`sendTcToken failed - ${e}`;
        SEND_LOGS("send-tc-token-failed");
      }
    }
  })).apply(this, arguments);
}