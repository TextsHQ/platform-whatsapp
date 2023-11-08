var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PRIMARY_DEVICE_ID = undefined;
exports.canUserSeeMessageAttribution = function () {
  return (0, i.isMultiDeviceMessageAttributionEnabled)() && (0, o.isFeatureFlagEnabled)("MD_EXTENSION");
};
exports.getFormattedAgentName = l;
exports.getFormattedAgentNameForAgent = function (e) {
  return l(e.name, e.deviceId);
};
var i = require("./72696.js");
var a = require("./445729.js");
var o = require("./146254.js");
var s = require("../vendor/548360.js");
r(require("../vendor/667294.js"));
function l(e, t) {
  if (t === 0) {
    return s.fbt._("{business-name} (Admin)", [s.fbt._param("business-name", a.Conn.pushname)], {
      hk: "3KT4id"
    }).toString();
  } else {
    return e;
  }
}
exports.PRIMARY_DEVICE_ID = 0;