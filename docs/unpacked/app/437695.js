var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postSenderKeyExpiredMetric = function (e) {
  let {
    chatId: t,
    expiryReason: n,
    deviceCount: r
  } = e;
  const l = new a.SenderKeyExpiredWamEvent();
  if (n != null) {
    l.expiryReason = n;
  }
  if (t != null) {
    const e = (0, s.createWidFromWidLike)(t);
    l.chatType = (0, i.getMessageChatTypeFromWid)(e);
  }
  if (r != null && r > 0) {
    l.deviceSizeBucket = (0, o.default)(r);
  }
  l.commit();
};
var i = require("./859458.js");
var a = require("./615077.js");
var o = r(require("./342310.js"));
var s = require("./669050.js");