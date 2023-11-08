var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let t = null;
  const {
    msg: n
  } = e;
  if (n.nativeFlowName === i.default.ORDER_DETAILS) {
    const e = (0, p.getOrderInfo)(n);
    if (e) {
      var a;
      var u;
      var c;
      const i = ((a = (u = (0, r.getOrdersExpansionAllowedCountries)()) === null || u === undefined ? undefined : u.length) !== null && a !== undefined ? a : 0) > 0 ? (0, m.findLastOrderPaymentStatusInfo)((0, l.getChat)(n.unsafe()), e.referenceId) : null;
      t = E.default.createElement(d.default, {
        amount: (0, o.formatAmount)(e.currency, e.totalAmount),
        quantity: e.quantity,
        orderId: e.referenceId,
        text: (0, f.getOrderDetailProductLabel)(e.items),
        numberOfItems: e.items.length,
        isSentByMe: (0, s.getIsSentByMe)(n),
        thumbnail: (c = v(n)) !== null && c !== undefined ? c : undefined,
        orderPaymentStatusInfo: i
      });
    }
  } else if (!(n.nativeFlowName !== i.default.ORDER_STATUS && n.nativeFlowName !== i.default.PAYMENT_STATUS && n.nativeFlowName !== i.default.PAYMENT_METHOD)) {
    t = E.default.createElement(_, e);
  }
  return t;
};
var r = require("../app/72696.js");
var o = require("../app/27578.js");
var l = require("../app/163755.js");
var i = a(require("../app/753110.js"));
var u = a(require("../app/756680.js"));
var s = require("../app/787742.js");
var c = require("../app/373070.js");
var d = a(require("./515780.js"));
var f = require("./507148.js");
var p = require("../app/706197.js");
var m = require("../app/458103.js");
var h = require("../app/620982.js");
var g = a(require("./666413.js"));
var E = a(require("../vendor/667294.js"));
const v = e => {
  var t;
  if (e.type === c.MSG_TYPE.INTERACTIVE && ((t = e.interactiveHeader) === null || t === undefined ? undefined : t.thumbnail) != null) {
    return `data:image/jpeg;base64,${e.interactiveHeader.thumbnail}`;
  }
  if (e.mediaData) {
    const {
      preview: t
    } = e.mediaData;
    if (t instanceof u.default) {
      return t.url();
    }
  }
};
function _(e) {
  let {
    msg: t,
    quotedMsg: n,
    displayType: a
  } = e;
  const r = (0, l.getChat)(t.unsafe());
  if (n) {
    return n;
  }
  const o = (e => {
    var t;
    const n = (t = (0, h.getOrderStatusInfo)(e)) === null || t === undefined ? undefined : t.refId;
    if (n == null) {
      return null;
    } else {
      return (0, h.findOrderDetailsMessage)((0, l.getChat)(e.unsafe()), n);
    }
  })(t);
  if (o) {
    return E.default.createElement(g.default, {
      msg: o,
      chat: r,
      rootMsg: t,
      displayType: a
    });
  } else {
    return null;
  }
}