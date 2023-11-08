Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./287461.js");
var i = require("./650201.js");
require("./937001.js");
var a = {
  isVoiceCallEnabled: function () {
    let e = false;
    e = (0, i.isFeatureEnabled)("web_voip_voice_call");
    return e;
  },
  isVideoCallEnabled: function () {
    let e = false;
    e = (0, i.isFeatureEnabled)("web_voip_video_call");
    return e;
  },
  isGroupCallEnabled: function () {
    let e = false;
    e = false;
    return false;
  },
  isStatefulEnumerationEnabled: function () {
    let e = false;
    e = (0, r.getABPropConfigValue)("web_abprop_stateful_enumeration_enabled");
    return e;
  },
  isDeviceAgnosticVoip: function () {
    let e = false;
    e = (0, r.getABPropConfigValue)("web_abprop_device_agnostic_voip");
    return e;
  }
};
exports.default = a;