var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paramsJsonToOrderPaymentInfo = exports.getOrderPaymentStatusInfoFromNativeFlow = exports.getOrderPaymentStatusInfo = exports.getButtonNativeFlowFromInteractiveMsg = exports.findLastOrderPaymentStatusInfo = exports.OrderPaymentStatus = exports.OrderPaymentMethod = exports.MESSAGE_LOOKUP_OFFSET = undefined;
var i = r(require("../vendor/530988.js"));
var a = r(require("./182394.js"));
var o = require("./373070.js");
var s = require("./903373.js");
exports.MESSAGE_LOOKUP_OFFSET = -1000;
const l = require("../vendor/76672.js")({
  Pending: "pending",
  Captured: "captured"
});
exports.OrderPaymentStatus = l;
const u = require("../vendor/76672.js")({
  Confirm: "confirm",
  PaymentInstruction: "payment_instruction"
});
exports.OrderPaymentMethod = u;
const c = e => {
  let t = {};
  try {
    t = JSON.parse(e);
  } catch (e) {
    return null;
  }
  if (t == null) {
    return null;
  }
  const {
    reference_id: n,
    payment_method: r,
    payment_status: i
  } = t;
  if (n == null || i == null && r == null) {
    return null;
  } else {
    return {
      refId: n,
      paymentMethod: r,
      paymentStatus: i
    };
  }
};
exports.paramsJsonToOrderPaymentInfo = c;
const d = e => {
  var t;
  if (e.type === o.MSG_TYPE.INTERACTIVE && e.interactiveType === a.default.NATIVE_FLOW && (0, s.isOrderNativeFlow)(e.nativeFlowName) && ((t = e.interactivePayload) === null || t === undefined ? undefined : t.buttons)) {
    const t = e.interactivePayload;
    const {
      buttonParamsJson: n
    } = t.buttons[0];
    if (n != null) {
      return c(n);
    }
  }
  return null;
};
exports.getOrderPaymentStatusInfo = d;
const p = e => {
  var t;
  if (e.type === o.MSG_TYPE.INTERACTIVE && e.interactiveType === a.default.NATIVE_FLOW && (0, s.isOrderNativeFlow)(e.nativeFlowName) && ((t = e.interactivePayload) === null || t === undefined ? undefined : t.buttons)) {
    return e.interactivePayload.buttons[0];
  } else {
    return null;
  }
};
exports.getButtonNativeFlowFromInteractiveMsg = p;
const f = e => {
  const t = p(e);
  if (t == null) {
    return null;
  }
  const {
    name: n,
    buttonParamsJson: r
  } = t;
  if (n != null && r != null) {
    return c(r);
  } else {
    return null;
  }
};
exports.getOrderPaymentStatusInfoFromNativeFlow = f;
exports.findLastOrderPaymentStatusInfo = (e, t) => {
  const n = e.msgs.getModelsArray().slice(-1000);
  let r = null;
  if ((0, i.default)(n, e => {
    var n;
    if (e.type === o.MSG_TYPE.UNKNOWN && e.subtype === "phone_only_feature" && e.quotedMsg != null) {
      r = d(e.quotedMsg);
      if (((n = r) === null || n === undefined ? undefined : n.refId) === t) {
        return true;
      }
    } else if (e.type === o.MSG_TYPE.INTERACTIVE && e.interactiveType === a.default.NATIVE_FLOW && (0, s.isOrderNativeFlow)(e.nativeFlowName)) {
      var i;
      r = f(e);
      if (((i = r) === null || i === undefined ? undefined : i.refId) === t) {
        return true;
      }
    }
    return false;
  }) != null && r != null) {
    return r;
  } else {
    return null;
  }
};