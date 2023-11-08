var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPeerDevices = function () {
  return l.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./275909.js");
var o = require("./459857.js");
var s = require("./669050.js");
function l() {
  return (l = (0, i.default)(function* () {
    const e = [];
    const t = (0, o.assertGetMe)();
    try {
      (yield (0, a.getMyDeviceList)()).devices.forEach(n => {
        if (n.id !== t.getDeviceId()) {
          e.push((0, s.createDeviceWidFromUserAndDevice)(t.user, t.server, n.id));
        }
      });
    } catch (e) {
      __LOG__(3, undefined, undefined, true)`syncd: getPeerDevices: error ${e}. Future key requests will only be sent to primary device.`;
      SEND_LOGS(e.toString());
      return [(0, s.createDeviceWidFromUserAndDevice)(t.user, t.server, 0)];
    }
    return e;
  })).apply(this, arguments);
}