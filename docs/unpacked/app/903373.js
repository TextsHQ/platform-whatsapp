var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNativeFlowNameByButtonName = function (e) {
  switch (e) {
    case "review_and_pay":
      return s.default.ORDER_DETAILS;
    case "review_order":
      return s.default.ORDER_STATUS;
    case "payment_status":
      return s.default.PAYMENT_STATUS;
    case "payment_method":
      return s.default.PAYMENT_METHOD;
    case "open_webview":
      return s.default.MESSAGE_WITH_LINK;
    case "message_with_link_status":
      return s.default.MESSAGE_WITH_LINK_STATUS;
    case "cta_url":
      return s.default.CTA_URL;
    case "cta_call":
      return s.default.CTA_CALL;
    case "quick_reply":
      return s.default.QUICK_REPLY;
    case "cta_catalog":
      return s.default.CTA_CATALOG;
  }
};
exports.isOrderNativeFlow = function (e) {
  return e === s.default.ORDER_DETAILS || e === s.default.ORDER_STATUS || e === s.default.PAYMENT_STATUS || e === s.default.PAYMENT_METHOD;
};
exports.isValidNativeFlowMessage = undefined;
var i = require("./72696.js");
var a = require("./729605.js");
var o = require("./960063.js");
var s = r(require("./753110.js"));
var l = require("./706197.js");
var u = require("./458103.js");
var c = require("./620982.js");
exports.isValidNativeFlowMessage = (e, t, n) => {
  if (e.nativeFlowName == null) {
    return false;
  }
  switch (e.nativeFlowName) {
    case s.default.ORDER_DETAILS:
      return (0, l.getOrderInfo)(e) != null;
    case s.default.ORDER_STATUS:
      return (0, c.getOrderStatusInfo)(e) != null;
    case s.default.PAYMENT_STATUS:
    case s.default.PAYMENT_METHOD:
      return (0, u.getOrderPaymentStatusInfoFromNativeFlow)(e) != null;
    case s.default.MESSAGE_WITH_LINK:
      return (0, o.getOpenMessageWithLinkAction)(e) != null;
    case s.default.MESSAGE_WITH_LINK_STATUS:
      return (0, i.isMessageWithLinkNfmEnabled)();
    case s.default.CTA_CALL:
    case s.default.CTA_URL:
    case s.default.QUICK_REPLY:
    case s.default.CTA_CATALOG:
      return (0, i.isInteractiveCtaMessageEnabled)(n, t) && (0, a.getNativeFlowCtasFromInteractiveMsg)(e) != null;
  }
};