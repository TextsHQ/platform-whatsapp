var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    msg: t
  } = e;
  const [n, a, s, c, d] = (0, u.useMsgValues)(t.id, [r.getSubtype, r.getPaymentAmount1000, r.getPaymentCurrency, r.getPaymentStatus, r.getPaymentTxnStatus]);
  if (a && s) {
    return i.default.createElement(o.default, {
      currency: s,
      subtype: n,
      paymentStatus: c,
      paymentTxnStatus: d,
      isCompact: true
    });
  }
  return i.default.createElement(l.StatusUnknownIcon, null);
};
var r = require("../app/787742.js");
var o = a(require("./530556.js"));
var l = require("./333856.js");
var i = a(require("../vendor/667294.js"));
var u = require("./871210.js");