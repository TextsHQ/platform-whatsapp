var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMessageTypeExemptedFromDisappearing = function (e, t, n) {
  return (0, i.inOrderMessagesEphemeralExceptionEnabled)() && e === l.MSG_TYPE.INTERACTIVE && t === s.default.NATIVE_FLOW && (n === o.default.ORDER_DETAILS || n === o.default.ORDER_STATUS || n === o.default.PAYMENT_METHOD || n === o.default.PAYMENT_STATUS);
};
exports.shouldShowOrderExemptionSystemMessage = function (e) {
  let {
    id: t,
    ephemeralDuration: n,
    ephemeralDisplayedExemptions: r
  } = e;
  return t != null && n !== 0 && n != null && a.EphemeralExemptionType.ORDERS_AND_PAYMENTS !== r;
};
exports.shouldUnsetChatEphemeralDisplayedExemption = function (e) {
  let {
    id: t,
    ephemeralDuration: n,
    ephemeralDisplayedExemptions: r
  } = e;
  return t != null && (n === 0 || n == null) && a.EphemeralExemptionType.ORDERS_AND_PAYMENTS === r;
};
var i = require("./72696.js");
var a = require("./446153.js");
var o = r(require("./753110.js"));
var s = r(require("./182394.js"));
var l = require("./373070.js");