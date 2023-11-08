var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendNewsletterRevokeMsg = E;
exports.sendNewsletterRevokeMsgs = function (e, t, n) {
  return Promise.all(t.map(t => E(e, t, n)));
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/29797.js");
var l = require("../app/632157.js");
var i = require("../app/488300.js");
var u = require("../app/939716.js");
var s = a(require("../app/565754.js"));
var c = require("../app/772358.js");
var d = require("../app/373070.js");
var f = require("../app/397995.js");
var p = require("../app/263318.js");
var m = require("../app/693741.js");
var h = require("../app/628623.js");
var g = require("../app/459857.js");
function E() {
  return v.apply(this, arguments);
}
function v() {
  return (v = (0, r.default)(function* (e, t, n) {
    if (!(0, u.canRevokeNewsletterMsg)(t)) {
      __LOG__(2)`sendNewsletterRevokeMsg: msg cannot be revoked`;
      return {
        messageSendResult: m.SendMsgResult.ERROR_CANCELLED
      };
    }
    const a = t.serverId;
    const r = (0, p.toNewsletterJidOrThrow)(e.id.toJid());
    if (a == null) {
      __LOG__(4, undefined, new Error(), true, ["newsletter"])`[sendNewsletterRevokeMsg] missing serverId`;
      SEND_LOGS("newsletter-revoke-missing-id", 1, "newsletter");
      return {
        messageSendResult: m.SendMsgResult.ERROR_CANCELLED
      };
    }
    const l = _(t, n);
    try {
      const n = yield (0, f.sendNewsletterMessageJob)({
        newsletterJid: r,
        messageId: t.id.id,
        isContentMedia: t.mediaObject != null,
        type: "revoke"
      });
      const a = (0, g.getMeUser)();
      const u = t.ack < o.ACK.SENT;
      if (n.success || u && n.ack.error === "404") {
        yield (0, i.processRevokeMsgs)([{
          revokeMsgKey: t.id,
          newMsgKey: l.id,
          timestamp: t.t,
          revokeTimestamp: l.t,
          subtype: l.subtype,
          sender: a,
          disappearingModeInitiator: t.disappearingModeInitiator,
          ephemeralDuration: t.ephemeralDuration,
          ephemeralSettingTimestamp: t.ephemeralSettingTimestamp
        }]);
        (0, h.updateNewsletterMessageUI)(l, e.id);
        return {
          messageSendResult: m.SendMsgResult.OK
        };
      } else {
        __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter] Failed to send message, ${n.ack.error} from server`;
        SEND_LOGS("newsletter-send-message-fail-server", 1, "newsletter");
        l.updateAck(o.ACK.FAILED, true);
        return {
          messageSendResult: m.SendMsgResult.ERROR_NETWORK
        };
      }
    } catch (e) {
      __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter] Failed to send message`;
      SEND_LOGS("newsletter-send-message-fail-client", 1, "newsletter");
      l.updateAck(o.ACK.FAILED, true);
      return {
        messageSendResult: m.SendMsgResult.ERROR_UNKNOWN
      };
    }
  })).apply(this, arguments);
}
function _(e, t) {
  const n = new s.default({
    id: s.default.newId_DEPRECATED(),
    remote: e.id.remote,
    fromMe: true
  });
  const a = (0, l.unixTime)();
  const r = {
    id: n,
    from: (0, g.getMeUser)(),
    to: e.id.remote,
    t: a,
    type: d.MSG_TYPE.PROTOCOL,
    subtype: "admin_revoke",
    protocolMessageKey: e.id,
    clearMedia: t,
    local: true,
    revokeDuration: a - e.t,
    revokeTimestamp: a,
    serverId: e.serverId
  };
  return new c.Msg(r);
}