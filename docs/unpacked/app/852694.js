var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendReceipt = function () {
  return m.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./400627.js");
var o = require("./883310.js");
var s = require("./763961.js");
var l = require("./257845.js");
var u = require("./790215.js");
var c = require("./267420.js");
var d = require("./967762.js");
var p = require("./124240.js");
var f = require("./259377.js");
var _ = require("./525773.js");
var g = require("./459857.js");
function m() {
  return (m = (0, i.default)(function* (e, t, n) {
    const {
      externalId: r
    } = e;
    const {
      rawTs: i,
      type: m
    } = t;
    const h = (0, c.getFrom)(e);
    const y = e.type === l.MESSAGE_TYPE.CHAT && (0, g.isMeAccount)(e.author) ? e.chat : null;
    const E = e.type === l.MESSAGE_TYPE.CHAT ? null : e.author;
    const S = e.category === o.CATEGORY_PEER;
    const v = !e.chat.isBot() && e.author.isBot();
    switch (n.result) {
      case l.E2EProcessResult.SUCCESS:
      case l.E2EProcessResult.SIGNAL_OLD_COUNTER_ERROR:
        if (v) {
          let t;
          let n;
          let i;
          if (e.type === l.MESSAGE_TYPE.CHAT) {
            t = e.author;
            n = e.chat;
          } else {
            t = e.chat;
            i = e.author;
          }
          return (0, f.sendBotInvokeResponseAcks)([r], t, n, i);
        }
        return (0, p.sendDeliveryReceiptsAfterDecryption)(r, h, y, E, S, n);
      case l.E2EProcessResult.HSM_MISMATCH:
        return;
      case l.E2EProcessResult.RETRY:
        {
          const t = n.retryCount == null ? 1 : n.retryCount + 1;
          yield (0, _.sendRetryReceipt)({
            retryCount: t,
            to: h,
            participant: E,
            recipient: y,
            externalId: r,
            rawTs: i,
            isPeer: S,
            retryReason: n.retryReason
          });
          return void (0, d.maybePostMessageHighRetryCountMetric)(t, e);
        }
      case l.E2EProcessResult.BACKFILL:
        return (0, s.sendAck)(r, h, m, E);
      case l.E2EProcessResult.PARSE_ERROR:
      case l.E2EProcessResult.PARSE_VALIDATION_ERROR:
        if ((0, u.isSendMessageDropNackEnabled)()) {
          return (0, s.sendNack)(r, h, m, E, a.NackReason.InvalidProtobuf);
        } else {
          return (0, s.sendAck)(r, h, m, E);
        }
    }
    __LOG__(4, undefined, new Error(), true)`sendReceipt: invalid e2eProcessResult "${n.result}"`;
    SEND_LOGS("send-receipt-missing-e2e-process-result");
    return (0, s.sendAck)(r, h, m, E);
  })).apply(this, arguments);
}