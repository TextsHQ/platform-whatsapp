var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLearnMorerderEphemeralExemptionButtonString = function () {
  return u.fbt._("Learn more", null, {
    hk: "j6reA"
  });
};
exports.getOrderEphemeralExemptionInfoString = function () {
  return u.fbt._("Disappearing messages are turned on in this chat. This order will not disappear because it contains purchase information.", null, {
    hk: "4vLF5d"
  });
};
exports.isMessageExemptedFromDisappearing = function (e, t) {
  if (!(0, o.isEphemeralSettingOn)(e)) {
    return false;
  }
  if ((0, l.getIsEphemeral)(t)) {
    return false;
  }
  const n = t.safe();
  const {
    nativeFlowName: a,
    interactiveType: u
  } = t;
  return (0, r.inOrderMessagesEphemeralExceptionEnabled)() && (0, i.isMessageTypeExemptedFromDisappearing)(n.type, u, a);
};
var r = require("../app/72696.js");
var o = require("../app/738501.js");
var l = require("../app/787742.js");
var i = require("../app/931342.js");
var u = require("../vendor/548360.js");
a(require("../vendor/667294.js"));