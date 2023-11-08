var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEphemeralFields = function (e) {
  const t = {};
  if ((0, o.isEphemeralSettingOn)(e)) {
    t.ephemeralDuration = (0, o.getEphemeralSetting)(e);
  }
  const n = (0, o.getEphemeralSettingTimestamp)(e);
  if (n != null) {
    t.ephemeralSettingTimestamp = n;
  }
  const r = (0, o.getDisappearingModeInitiator)(e);
  if (r != null) {
    t.disappearingModeInitiator = r;
  }
  if ((0, a.getABPropConfigValue)("dm_initiator_trigger")) {
    const n = (0, o.getDisappearingModeTrigger)(e);
    if (n != null) {
      t.disappearingModeTrigger = n;
    }
    const r = (0, o.getDisappearingModeInitiatedByMe)(e);
    if (r != null) {
      t.disappearingModeInitiatedByMe = r;
    }
  }
  return (0, i.default)({}, t);
};
var i = r(require("../vendor/81109.js"));
var a = require("./287461.js");
var o = require("./738501.js");