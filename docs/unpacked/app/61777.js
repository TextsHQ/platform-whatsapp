var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "LinkDeviceMethodType", {
  enumerable: true,
  get: function () {
    return a.PairingType;
  }
});
exports.errorAltLinking = function () {
  l.WAWebLinkDeviceEvents.trigger("link_device_events:error_alt_linking");
};
exports.forceManualRefresh = function () {
  l.WAWebLinkDeviceEvents.trigger("link_device_events:force_manual_refresh");
};
exports.genLinkDeviceCodeForPhoneNumber = function (e, t) {
  return (0, a.startAltLinkingFlow)(e, t);
};
exports.getIsAltLinkingEnabledByServer = function () {
  return (0, o.genDoesServerEnableAltDeviceLinking)();
};
exports.primaryHelloReceivedAltLinking = function () {
  l.WAWebLinkDeviceEvents.trigger("link_device_events:primary_hello_received");
};
exports.refreshAltLinkingCode = function () {
  l.WAWebLinkDeviceEvents.trigger("link_device_events:refresh_alt_linking_code");
};
exports.resetLinkDeviceState = function () {
  return u.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./518043.js");
var o = require("./511761.js");
var s = require("./780549.js");
var l = require("./12940.js");
function u() {
  return (u = (0, i.default)(function* (e) {
    s.Cmd.refreshQR();
    if (e.linkDeviceMethod === a.PairingType.ALT_DEVICE_LINKING) {
      yield (0, a.initializeAltDeviceLinking)();
      (0, a.setPairingType)(a.PairingType.ALT_DEVICE_LINKING);
    } else {
      yield (0, a.initializeQRLinking)();
      (0, a.setPairingType)(a.PairingType.QR_CODE);
    }
  })).apply(this, arguments);
}