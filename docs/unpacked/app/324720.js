var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseWebMsgInfoPinInChat = function (e, t) {
  const n = [];
  try {
    if (e == null || e.pinInChat == null) {
      return n;
    }
    if (t == null || t.pinInChat == null) {
      return n;
    }
    const {
      pinInChat: r
    } = t;
    const {
      key: s,
      type: l,
      senderTimestampMs: u,
      serverTimestampMs: c,
      messageAddOnContextInfo: d
    } = r;
    const {
      msgKey: p,
      sender: f
    } = (0, i.default)((0, a.buildAddOnMsgKey)(s), "buildAddOnMsgKey(key)");
    if (f == null) {
      __LOG__(4, undefined, new Error())`parseWebMsgInfoPinInChat: pinInChat sender should be a wid.`;
    } else {
      n.push({
        msgKey: p,
        parentMsgKey: t.id,
        chatId: (0, o.toChatWid)(p.remote),
        senderTimestampMs: u,
        t: c,
        pinType: l,
        sender: f,
        pinExpiryDuration: d == null ? undefined : d.messageAddOnDurationInSecs
      });
    }
  } catch (e) {
    __LOG__(4, undefined, new Error())`[history sync] parseWebMsgInfoPinInChat failed with error ${e == null ? undefined : e.name} and stack ${e == null ? undefined : e.stack}`;
  }
  return n;
};
var i = r(require("./670983.js"));
var a = require("./767897.js");
var o = require("./669050.js");