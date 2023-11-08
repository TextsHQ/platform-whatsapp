var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNewsletterMessageReactionSenderListAction = function () {
  return i.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("./462941.js");
var l = require("../app/263318.js");
function i() {
  return (i = (0, r.default)(function* (e, t) {
    if (!e.isNewsletter) {
      __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter][getNewsletterMessageReactionSenderListAction] called with a non-newsletter chat`;
      return void SEND_LOGS("get-message-reaction-senders-of-non-newsletter", 1, "newsletter");
    }
    const n = t.serverId;
    if (n == null) {
      __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter][getNewsletterSubscribersAction] cannot get reaction senders for messsage with no server ID, message ${t.id.toString()}`;
      return void SEND_LOGS("get-message-reaction-senders-no-message-server-id", 1, "newsletter");
    }
    try {
      const t = (0, l.toNewsletterJidOrThrow)(e.id.toJid());
      return yield (0, o.getNewsletterMessageReactionSenderList)(t, String(n));
    } catch (n) {
      __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter][getNewsletterMessageReactionSenderListAction] failed to get reaction senders for message ${t.id.toString()} from newsletter ${e.id.toJid()}`;
      SEND_LOGS("get-message-reaction-senders-failed", 1, "newsletter");
    }
  })).apply(this, arguments);
}