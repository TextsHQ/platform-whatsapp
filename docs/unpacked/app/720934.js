var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatNFMText = o;
exports.formatNFMTextPreview = function (e) {
  if (e.nativeFlowName === a.default.ORDER_DETAILS) {
    const t = (0, i.formatOrderDetailsMessagePreview)(e);
    if (t != null) {
      return t;
    }
  }
  return o(e);
};
var i = require("./468776.js");
var a = r(require("./753110.js"));
function o(e) {
  if (e.nativeFlowName === a.default.ORDER_STATUS) {
    const t = (0, i.formatOrderStatusMessage)(e);
    if (t != null) {
      return t;
    }
  } else if (e.nativeFlowName === a.default.PAYMENT_STATUS) {
    const t = (0, i.formatOrderPaymentStatusMessage)(e);
    if (t != null) {
      return t;
    }
  } else if (e.nativeFlowName === a.default.PAYMENT_METHOD) {
    const t = (0, i.formatOrderPaymentMethodMessage)(e);
    if (t != null) {
      return t;
    }
  }
  return e.caption || "";
}