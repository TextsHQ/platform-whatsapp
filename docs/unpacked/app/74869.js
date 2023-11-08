var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearDeviceRecordForIdentityChange = g;
exports.handleNewIdentity = function () {
  return _.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./418987.js");
var o = require("./52866.js");
var s = require("./308772.js");
var l = require("./275909.js");
var u = require("./459387.js");
var c = require("./732011.js");
var d = require("./280464.js");
var p = require("./362327.js");
var f = require("./669050.js");
function _() {
  return (_ = (0, i.default)(function* (e) {
    var t;
    const r = (0, f.widFromSignalAddress)(e);
    const i = (t = r.device) !== null && t !== undefined ? t : a.DEFAULT_DEVICE_ID;
    const s = (0, f.toUserWid)(r);
    if (i === a.DEFAULT_DEVICE_ID) {
      const e = require("./944641.js").addSecurityCodeChangedNotifications;
      yield g(s);
      yield e(s);
      (0, p.sendTcTokenWhenDeviceIdentityChange)(s);
    } else {
      yield (0, o.createAndStoreDeviceNotifications)(s, [i], [i]);
    }
  })).apply(this, arguments);
}
function g() {
  return m.apply(this, arguments);
}
function m() {
  return (m = (0, i.default)(function* (e) {
    let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    const r = [a.DEFAULT_DEVICE_ID];
    const i = [a.DEFAULT_DEVICE_ID];
    if (t) {
      d.OfflinePendingDeviceCache.addOfflinePendingDevice(String(e), null);
      yield (0, c.getStorage)().lock(["participant"], () => (0, s.updateGroupParticipantsInTransaction)(e, i, r));
    } else {
      const t = yield (0, l.getDeviceRecord)(e);
      if (t && !t.deleted) {
        t.devices.forEach(e => {
          if (e.id !== a.DEFAULT_DEVICE_ID) {
            r.push(e.id);
          }
        });
      }
      const o = require("./138706.js").Session;
      Promise.all(r.map(t => t === a.DEFAULT_DEVICE_ID ? Promise.resolve() : o.deleteRemoteInfo((0, f.createDeviceWidFromUserAndDevice)(e.user, e.server, t))));
      yield Promise.all([(0, c.getStorage)().lock(["participant"], () => (0, s.updateGroupParticipantsInTransaction)(e, i, r)), (0, l.createOrReplaceDeviceRecord)({
        id: (0, u.createDeviceListPK)(e),
        deleted: true
      })]);
    }
  })).apply(this, arguments);
}