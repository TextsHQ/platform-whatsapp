var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendTcTokenWhenDeviceIdentityChange = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./632157.js");
var o = require("./287461.js");
var s = require("./35234.js");
var l = require("./359987.js");
var u = require("./755985.js");
var c = require("./67081.js");
var d = require("./147034.js");
function p() {
  return (p = (0, i.default)(function* (e) {
    let t;
    t = (0, u.isWorker)() || (0, o.getABPropConfigValue)("web_tc_token_db_read_enabled") ? yield (0, s.getChatRecord)(e) : yield (0, l.frontendSendAndReceive)("getChat", {
      chatId: e
    });
    if (t == null) {
      return;
    }
    const n = t.tcTokenSenderTimestamp;
    if (n != null && !(0, d.isTokenExpired)(n, d.TcTokenMode.Sender)) {
      try {
        yield (0, c.setPrivacyTokens)(e, [c.TokenType.TrustedContact], (0, a.castToUnixTime)(n));
      } catch (e) {
        __LOG__(3, true, undefined, true)`sendTcTokenWhenDeviceIdentityChange failed - ${e}`;
        SEND_LOGS("send-tc-token-device-identity-change-failed");
      }
    }
  })).apply(this, arguments);
}