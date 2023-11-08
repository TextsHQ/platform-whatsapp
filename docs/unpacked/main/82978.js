Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeviceSwitchingBridgeApi = undefined;
var a = require("./286272.js");
const r = {
  showDeviceSwitchOtp(e) {
    let {
      otpCode: t
    } = e;
    (0, a.handleOpenDeviceSwitchCode)(t);
  }
};
exports.DeviceSwitchingBridgeApi = r;