var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PreviousMsgNotPlaceholderError = exports.DuplicateMessageError = undefined;
exports.processPaymentMessages = function () {
  return f.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./817690.js");
var o = require("./732011.js");
var s = require("./373070.js");
var l = require("./968923.js");
var u = require("./851698.js");
var c = require("./459857.js");
class d extends Error {
  constructor() {
    super(...arguments);
    this.name = "DuplicateMessageError";
  }
}
exports.DuplicateMessageError = d;
class p extends Error {
  constructor() {
    super(...arguments);
    this.name = "PreviousMsgNotPlaceholderError";
  }
}
function f() {
  return (f = (0, i.default)(function* (e) {
    const t = [];
    const n = [];
    const r = e.map(e => e.paymentRequestMessageKey ? e.paymentRequestMessageKey.toString() : "").filter(e => e !== "");
    const d = e.filter(e => e.subtype === "payment_action_request_declined" || e.subtype === "payment_transaction_request_cancelled").map(e => e.id.toString());
    return (0, o.getStorage)().lock(["message"], function () {
      var o = (0, i.default)(function* (i) {
        let [o] = i;
        const p = yield (0, a.getMsgsByMsgKey)(r.concat(d));
        const f = new Map();
        p.forEach(e => {
          if (e != null) {
            f.set(e.id.toString(), e);
          }
        });
        e.forEach(e => {
          var r;
          const i = (r = e.paymentRequestMessageKey) === null || r === undefined ? undefined : r.toString();
          const a = f.get(i || "");
          if (a && i != null) {
            if (e.subtype === "send" && e.paymentTxnStatus != null) {
              t.push({
                id: i,
                paymentTxnStatus: e.paymentTxnStatus
              });
            } else {
              const n = a.from.isGroup() ? a.author : a.from;
              const r = a.paymentMessageReceiverJid.equals((0, c.getMeUser)()) ? n : a.paymentMessageReceiverJid;
              if (e.subtype === "payment_action_request_declined") {
                t.push({
                  id: i,
                  paymentStatus: l.PaymentInfo$Status.REJECTED,
                  paymentTxnStatus: l.PaymentInfo$TxnStatus.COLLECT_REJECTED
                });
              } else if (e.subtype === "payment_transaction_request_cancelled") {
                t.push({
                  id: i,
                  paymentStatus: l.PaymentInfo$Status.CANCELLED,
                  paymentTxnStatus: l.PaymentInfo$TxnStatus.COLLECT_CANCELED
                });
              }
              t.push({
                id: e.id.toString(),
                type: s.MSG_TYPE.NOTIFICATION_TEMPLATE,
                templateParams: [r || "", a.paymentCurrency || "", String(a.paymentAmount1000)]
              });
            }
          } else if (f.get(e.id.toString()) && !e.isMdHistoryMsg) {
            n.push(e.id.toString());
          }
        });
        yield (0, u.getMessageTable)().bulkRemove(n);
        yield (0, u.getMessageTable)().bulkCreateOrMerge(t);
        return t;
      });
      return function () {
        return o.apply(this, arguments);
      };
    }());
  })).apply(this, arguments);
}
exports.PreviousMsgNotPlaceholderError = p;