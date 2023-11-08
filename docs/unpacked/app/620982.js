var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paramsJsonToOrderStatusInfo = exports.getOrderStatusInfo = exports.getDefaultOrderStatus = exports.findOrderStatusMessage = exports.findOrderStatus = exports.findOrderDetailsMessage = exports.OrderStatus = undefined;
var i = r(require("../vendor/530988.js"));
var a = require("./72696.js");
var o = r(require("./753110.js"));
var s = r(require("./182394.js"));
var l = require("./373070.js");
var u = require("./706197.js");
var c = require("./903373.js");
const d = require("../vendor/76672.js")({
  Pending: "pending",
  Processing: "processing",
  PartiallyShipped: "partially_shipped",
  Shipped: "shipped",
  Complete: "completed",
  Canceled: "canceled",
  PaymentRequested: "payment_requested",
  PreparingToShip: "preparing_to_ship",
  Delivered: "delivered"
});
exports.OrderStatus = d;
const p = e => {
  if (e == null) {
    return null;
  }
  try {
    const {
      order: t,
      reference_id: n
    } = JSON.parse(e);
    const r = d.cast(t == null ? undefined : t.status);
    if (r == null || n == null) {
      return null;
    } else {
      return {
        refId: n,
        status: r
      };
    }
  } catch (e) {
    return null;
  }
};
exports.paramsJsonToOrderStatusInfo = p;
const f = e => {
  var t;
  if (!(0, c.isOrderNativeFlow)(e.nativeFlowName)) {
    return null;
  }
  if (e.type === l.MSG_TYPE.INTERACTIVE && e.interactiveType === s.default.NATIVE_FLOW && ((t = e.interactivePayload) === null || t === undefined ? undefined : t.buttons)) {
    const {
      buttonParamsJson: t
    } = e.interactivePayload.buttons[0];
    return p(t);
  }
  if (e.type === l.MSG_TYPE.NATIVE_FLOW) {
    var n;
    const {
      nativeFlowInfo: t
    } = ((n = e.nativeFlowButtons) !== null && n !== undefined ? n : [])[0];
    return p(t == null ? undefined : t.paramsJson);
  }
};
exports.getOrderStatusInfo = f;
exports.findOrderDetailsMessage = (e, t) => {
  var n;
  const r = e.msgs.getModelsArray().slice(-1000);
  if ((n = (0, i.default)(r, e => {
    var n;
    return e.nativeFlowName === o.default.ORDER_DETAILS && ((n = (0, u.getOrderInfo)(e)) === null || n === undefined ? undefined : n.referenceId) === t;
  })) === null || n === undefined) {
    return undefined;
  } else {
    return n.safe();
  }
};
const _ = (e, t) => {
  var n;
  const r = e.msgs.getModelsArray().slice(-1000);
  if ((n = (0, i.default)(r, e => {
    var n;
    return (0, c.isOrderNativeFlow)(e.nativeFlowName) && ((n = f(e)) === null || n === undefined ? undefined : n.refId) === t;
  })) === null || n === undefined) {
    return undefined;
  } else {
    return n.safe();
  }
};
exports.findOrderStatusMessage = _;
const g = () => (0, a.isOrderStatusM1Enabled)() ? d.PaymentRequested : d.Pending;
exports.getDefaultOrderStatus = g;
exports.findOrderStatus = (e, t) => {
  var n;
  const r = _(e, t);
  const i = r != null ? f(r) : null;
  if ((n = i == null ? undefined : i.status) !== null && n !== undefined) {
    return n;
  } else {
    return g();
  }
};