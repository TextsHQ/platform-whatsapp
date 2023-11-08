var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    currency: t,
    subtype: n,
    paymentStatus: a,
    paymentTxnStatus: d,
    isCompact: f
  } = e;
  const p = (0, o.formatLocalSymbol)(t);
  const m = d != null ? function (e) {
    switch (e != null ? e : s.PaymentInfo$TxnStatus.UNKNOWN) {
      case s.PaymentInfo$TxnStatus.SUCCESS:
      case s.PaymentInfo$TxnStatus.COMPLETED:
        return l.default.success;
      case s.PaymentInfo$TxnStatus.FAILED:
      case s.PaymentInfo$TxnStatus.FAILED_RISK:
      case s.PaymentInfo$TxnStatus.FAILED_DA_FINAL:
      case s.PaymentInfo$TxnStatus.REFUNDED_TXN:
      case s.PaymentInfo$TxnStatus.REFUND_FAILED:
      case s.PaymentInfo$TxnStatus.REFUND_FAILED_PROCESSING:
      case s.PaymentInfo$TxnStatus.REFUND_FAILED_DA:
      case s.PaymentInfo$TxnStatus.AUTH_CANCELED:
      case s.PaymentInfo$TxnStatus.AUTH_CANCEL_FAILED_PROCESSING:
      case s.PaymentInfo$TxnStatus.AUTH_CANCEL_FAILED:
      case s.PaymentInfo$TxnStatus.COLLECT_FAILED:
      case s.PaymentInfo$TxnStatus.COLLECT_FAILED_RISK:
        return l.default.failed;
      default:
        return l.default.pending;
    }
  }(d) : function (e) {
    switch (e != null ? e : s.PaymentInfo$Status.UNKNOWN_STATUS) {
      case s.PaymentInfo$Status.COMPLETE:
        return l.default.success;
      case s.PaymentInfo$Status.CANCELLED:
      case s.PaymentInfo$Status.COULD_NOT_COMPLETE:
      case s.PaymentInfo$Status.REFUNDED:
      case s.PaymentInfo$Status.EXPIRED:
      case s.PaymentInfo$Status.REJECTED:
        return l.default.failed;
      default:
        return l.default.pending;
    }
  }(a);
  const h = n === "send" ? c.default.createElement(u.PaymentSendIcon, null) : c.default.createElement(i.PaymentRequestIcon, null);
  return c.default.createElement("div", {
    className: (0, r.classnamesConvertMeToStylexPlease)(l.default.icon, m, {
      [l.default.compact]: f
    })
  }, c.default.createElement("div", {
    className: (0, r.classnamesConvertMeToStylexPlease)(l.default.iconSymbol, l.default[t])
  }, p), h);
};
var r = require("../app/396574.js");
var o = require("../app/27578.js");
var l = a(require("./759820.js"));
var i = require("./104105.js");
var u = require("./17254.js");
var s = require("../app/968923.js");
var c = a(require("../vendor/667294.js"));