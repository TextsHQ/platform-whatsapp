Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMaybeSystemMsgForOrderEphemeralExemption = function (e, t) {
  if (!(0, r.inOrderMessagesEphemeralExceptionEnabled)()) {
    return null;
  }
  const n = e.safe();
  const {
    interactiveType: l,
    nativeFlowName: u
  } = e;
  if (!(0, o.isMessageTypeExemptedFromDisappearing)(n.type, l, u)) {
    return null;
  }
  const c = {
    id: t.id.toString(),
    ephemeralDuration: t.ephemeralDuration,
    ephemeralDisplayedExemptions: t.ephemeralDisplayedExemptions
  };
  if ((0, o.shouldShowOrderExemptionSystemMessage)(c)) {
    t.ephemeralDisplayedExemptions = a.EphemeralExemptionType.ORDERS_AND_PAYMENTS;
    (0, i.persistsEphemeralDisplayedExemptions)(t.id, t.ephemeralDuration, a.EphemeralExemptionType.ORDERS_AND_PAYMENTS);
    return (0, s.getOrderEphemeralExemptionSystemMsg)(t.id);
  }
  if ((0, o.shouldUnsetChatEphemeralDisplayedExemption)(c)) {
    t.ephemeralDisplayedExemptions = a.EphemeralExemptionType.UNSET;
    (0, i.persistsEphemeralDisplayedExemptions)(t.id, t.ephemeralDuration, a.EphemeralExemptionType.UNSET);
  }
  return null;
};
var r = require("./72696.js");
var i = require("./933915.js");
var a = require("./446153.js");
var o = require("./931342.js");
var s = require("./545741.js");