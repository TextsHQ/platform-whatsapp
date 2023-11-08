var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let t;
  let n;
  let {
    paymentStatus: a,
    paymentTxnStatus: r,
    expiryTimestamp: i
  } = e;
  (function () {
    const e = (0, c.default)();
    (0, d.default)(e, 1000, {
      immediate: true
    });
  })();
  ({
    str: t,
    themeClassName: n
  } = r != null ? function (e, t) {
    let n = null;
    let a = null;
    if (e != null) {
      switch (e) {
        case o.PaymentInfo$TxnStatus.UNKNOWN:
          n = null;
          a = null;
          break;
        case o.PaymentInfo$TxnStatus.PENDING_SETUP:
          n = p(t);
          a = "pending";
          break;
        case o.PaymentInfo$TxnStatus.PENDING_RECEIVER_SETUP:
        case o.PaymentInfo$TxnStatus.COLLECT_INIT:
          n = l.fbt._("Pending", null, {
            hk: "1bHrjJ"
          });
          a = "pending";
          break;
        case o.PaymentInfo$TxnStatus.INIT:
        case o.PaymentInfo$TxnStatus.FAILED_PROCESSING:
        case o.PaymentInfo$TxnStatus.FAILED_RECEIVER_PROCESSING:
        case o.PaymentInfo$TxnStatus.FAILED_DA:
          n = l.fbt._("Processing", null, {
            hk: "1K7bOb"
          });
          a = "pending";
          break;
        case o.PaymentInfo$TxnStatus.SUCCESS:
        case o.PaymentInfo$TxnStatus.COMPLETED:
          n = l.fbt._("Completed", null, {
            hk: "1q50Hp"
          });
          a = "success";
          break;
        case o.PaymentInfo$TxnStatus.FAILED:
        case o.PaymentInfo$TxnStatus.FAILED_RISK:
        case o.PaymentInfo$TxnStatus.FAILED_DA_FINAL:
        case o.PaymentInfo$TxnStatus.REFUNDED_TXN:
        case o.PaymentInfo$TxnStatus.REFUND_FAILED:
        case o.PaymentInfo$TxnStatus.REFUND_FAILED_PROCESSING:
        case o.PaymentInfo$TxnStatus.REFUND_FAILED_DA:
        case o.PaymentInfo$TxnStatus.AUTH_CANCELED:
        case o.PaymentInfo$TxnStatus.AUTH_CANCEL_FAILED_PROCESSING:
        case o.PaymentInfo$TxnStatus.AUTH_CANCEL_FAILED:
        case o.PaymentInfo$TxnStatus.COLLECT_FAILED:
        case o.PaymentInfo$TxnStatus.COLLECT_FAILED_RISK:
        case o.PaymentInfo$TxnStatus.REVERSAL_SUCCESS:
        case o.PaymentInfo$TxnStatus.REVERSAL_PENDING:
        case o.PaymentInfo$TxnStatus.REFUND_PENDING:
          n = l.fbt._("Failed", null, {
            hk: "3NoLR4"
          });
          a = "failed";
          break;
        case o.PaymentInfo$TxnStatus.EXPIRED_TXN:
        case o.PaymentInfo$TxnStatus.COLLECT_EXPIRED:
          n = l.fbt._("Expired", null, {
            hk: "4AFoGy"
          });
          a = "pending";
          break;
        case o.PaymentInfo$TxnStatus.COLLECT_SUCCESS:
          n = p(t);
          a = "pending";
          break;
        case o.PaymentInfo$TxnStatus.COLLECT_REJECTED:
          n = l.fbt._("Declined", null, {
            hk: "3g28V2"
          });
          a = "pending";
          break;
        case o.PaymentInfo$TxnStatus.COLLECT_CANCELED:
        case o.PaymentInfo$TxnStatus.COLLECT_CANCELLING:
          n = l.fbt._("Canceled", null, {
            hk: "EomV7"
          });
          a = "pending";
          break;
        case o.PaymentInfo$TxnStatus.IN_REVIEW:
          n = l.fbt._("In Review", null, {
            hk: "2JCNVS"
          });
          a = "pending";
      }
    }
    return {
      str: n,
      themeClassName: a
    };
  }(r, i) : function (e, t) {
    let n = null;
    let a = null;
    if (e != null) {
      switch (e) {
        case o.PaymentInfo$Status.PROCESSING:
          n = l.fbt._("Processing", null, {
            hk: "1K7bOb"
          });
          a = "pending";
          break;
        case o.PaymentInfo$Status.COMPLETE:
          n = l.fbt._("Completed", null, {
            hk: "1q50Hp"
          });
          a = "success";
          break;
        case o.PaymentInfo$Status.SENT:
          n = l.fbt._("Pending", null, {
            hk: "1bHrjJ"
          });
          a = "pending";
          break;
        case o.PaymentInfo$Status.NEED_TO_ACCEPT:
          n = p(t);
          a = "pending";
          break;
        case o.PaymentInfo$Status.COULD_NOT_COMPLETE:
        case o.PaymentInfo$Status.REFUNDED:
          n = l.fbt._("Failed", null, {
            hk: "3NoLR4"
          });
          a = "failed";
          break;
        case o.PaymentInfo$Status.EXPIRED:
          n = l.fbt._("Expired", null, {
            hk: "4AFoGy"
          });
          a = "failed";
          break;
        case o.PaymentInfo$Status.REJECTED:
          n = l.fbt._("Declined", null, {
            hk: "3g28V2"
          });
          a = "failed";
          break;
        case o.PaymentInfo$Status.CANCELLED:
          n = l.fbt._("Canceled", null, {
            hk: "EomV7"
          });
          a = "failed";
          break;
        case o.PaymentInfo$Status.WAITING_FOR_PAYER:
        case o.PaymentInfo$Status.WAITING:
          n = p(t);
          a = "pending";
          break;
        case o.PaymentInfo$Status.UNKNOWN_STATUS:
          n = null;
          a = null;
      }
    }
    return {
      str: n,
      themeClassName: a
    };
  }(a, i));
  if (t == null) {
    return null;
  }
  const m = !!n && f[n];
  return u.default.createElement("span", {
    className: (0, s.default)(f.status, m)
  }, t);
};
var r = require("../app/632157.js");
var o = require("../app/968923.js");
var l = require("../vendor/548360.js");
var i = a(require("../vendor/730381.js"));
var u = a(require("../vendor/667294.js"));
var s = a(require("../app/156720.js"));
var c = a(require("../app/969651.js"));
var d = a(require("../app/10617.js"));
const f = {
  status: {
    fontWeight: "hnx8ox4h"
  },
  failed: {
    color: "g0bfn8tw"
  },
  pending: {
    color: "de33c33s"
  },
  success: {
    color: "hb09shpw"
  }
};
function p(e) {
  if (e == null) {
    return l.fbt._("Pending", null, {
      hk: "1bHrjJ"
    });
  }
  const t = (0, r.unixTime)() * 1000;
  const n = e * 1000;
  if (n - t > 60000) {
    const e = (0, i.default)(t).to((0, i.default)(n));
    return l.fbt._("Pending (expires {timeSpan})", [l.fbt._param("timeSpan", e)], {
      hk: "2M7pbc"
    });
  }
  if (n - t > 0) {
    return l.fbt._("Pending (expires in less than 1 minute)", null, {
      hk: "2GaCP1"
    });
  } else {
    return l.fbt._("Pending (expiring)", null, {
      hk: "2YLDil"
    });
  }
}