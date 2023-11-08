var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prefetchDevices = function (e) {
  if (!(0, l.isDeviceSyncManagerEnabled)() && !(0, l.isDeviceSyncManagerGroupEnabled)()) {
    return Promise.resolve();
  }
  const t = String(e.id);
  let n = i.get(t);
  if (!n) {
    n = (0, l.isDeviceSyncManagerEnabled)() || (0, l.isDeviceSyncManagerGroupEnabled)() ? function () {
      return u.apply(this, arguments);
    }(e) : Promise.resolve();
    i.set(t, n);
  }
  return n;
};
var r = a(require("../vendor/348926.js"));
var o = require("./793803.js");
var l = require("../app/790215.js");
const i = new Map();
function u() {
  return (u = (0, r.default)(function* (e) {
    try {
      let n;
      if (e.isUser) {
        n = [e.id];
      } else if (e.isGroup) {
        var t;
        n = (t = e.groupMetadata) === null || t === undefined ? undefined : t.participants.map(e => e.id);
      }
      if (n == null || n.length === 0) {
        return void __LOG__(3)`prefetchDevices: no wids to sync`;
      }
      yield (0, o.maybeSyncDeviceList)(n);
    } catch (e) {
      __LOG__(4, undefined, new Error(), true)`prefetchDevices: _prefetchDevicesForDeviceManagerExperiment failed: ${e}`;
      SEND_LOGS("device-sync-manager-prefetch-devices-failed");
    }
  })).apply(this, arguments);
}