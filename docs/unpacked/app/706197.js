var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paramsJsonToOrderInfo = exports.getOrderInfo = exports.getCustomItemIdPrefix = undefined;
var i = r(require("../vendor/81109.js"));
var a = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = c(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("./395557.js"));
var o = r(require("./753110.js"));
var s = r(require("./182394.js"));
var l = require("./373070.js");
var u = r(require("./170872.js"));
function c(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (c = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function d(e) {
  var t;
  const n = e == null ? undefined : e.value;
  if (n == null) {
    return;
  }
  const r = (t = e == null ? undefined : e.offset) !== null && t !== undefined ? t : 1;
  return parseFloat(n != null ? n : 0) / parseInt(r, 10);
}
const p = () => "custom-item";
exports.getCustomItemIdPrefix = p;
const f = (e, t) => {
  var n;
  var r;
  if (e !== "review_and_pay" || t == null) {
    return null;
  }
  const o = a.parse(t);
  const {
    order: s,
    currency: l,
    reference_id: c,
    external_payment_configurations: p
  } = o;
  const f = d(o.total_amount);
  const _ = (n = s == null ? undefined : s.items) !== null && n !== undefined ? n : [];
  const g = _.map(e => {
    var t;
    var n;
    var r;
    var i;
    var a;
    var o;
    var s;
    return {
      id: (t = (n = e == null ? undefined : e.product_id) !== null && n !== undefined ? n : e == null ? undefined : e.retailer_id) !== null && t !== undefined ? t : "",
      name: (r = e == null ? undefined : e.name) !== null && r !== undefined ? r : "",
      amount: d(e == null ? undefined : e.amount),
      quantity: parseInt((i = e == null ? undefined : e.quantity) !== null && i !== undefined ? i : 0, 10),
      isCustomItem: (a = e == null ? undefined : e.isCustomItem) !== null && a !== undefined ? a : (e == null || (o = e.retailer_id) === null || o === undefined ? undefined : o.indexOf("custom-item")) === 0,
      isQuantitySet: (s = e == null ? undefined : e.isQuantitySet) === null || s === undefined || s
    };
  });
  const m = g.reduce((e, t) => e + t.quantity, 0);
  const h = (r = _[0]) === null || r === undefined ? undefined : r.name;
  if (h == null || c == null || l == null || f == null) {
    return null;
  }
  const y = d(s == null ? undefined : s.shipping);
  const E = d(s == null ? undefined : s.tax);
  const S = d(s == null ? undefined : s.discount);
  const v = d(s == null ? undefined : s.subtotal);
  const T = function (e) {
    if (e == null) {
      return null;
    } else {
      return (0, u.default)(e.map(e => (e == null ? undefined : e.type) != null ? (0, i.default)({
        type: e.type
      }, e.payment_instruction != null ? {
        paymentInstruction: e.payment_instruction
      } : {}) : null));
    }
  }(p);
  return (0, i.default)({
    title: h,
    referenceId: c,
    currency: l,
    quantity: m,
    shipping: y,
    tax: E,
    discount: S,
    subtotal: v,
    totalAmount: f,
    items: g,
    type: o.type
  }, T != null ? {
    externalPaymentConfigurations: T
  } : {});
};
exports.paramsJsonToOrderInfo = f;
exports.getOrderInfo = e => {
  var t;
  if (e.nativeFlowName !== o.default.ORDER_DETAILS) {
    return null;
  }
  if (e.type === l.MSG_TYPE.INTERACTIVE && e.interactiveType === s.default.NATIVE_FLOW && ((t = e.interactivePayload) === null || t === undefined ? undefined : t.buttons)) {
    const {
      name: t,
      buttonParamsJson: n
    } = e.interactivePayload.buttons[0];
    return f(t, n);
  }
  if (e.type === l.MSG_TYPE.NATIVE_FLOW) {
    var n;
    const {
      nativeFlowInfo: t
    } = ((n = e.nativeFlowButtons) !== null && n !== undefined ? n : [])[0];
    return f(t == null ? undefined : t.name, t == null ? undefined : t.paramsJson);
  }
};