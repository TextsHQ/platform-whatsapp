var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdvToSystemBridgeImpl = undefined;
exports.runAdvDeviceInfoCheck = P;
exports.scheduleAdvDeviceInfoCheck = b;
var i = r(require("../vendor/348926.js"));
var a = require("./418987.js");
var o = require("./632157.js");
var s = require("./287461.js");
var l = require("./565150.js");
var u = require("./275909.js");
var c = require("./853670.js");
var d = require("./447465.js");
var p = require("./715118.js");
var f = require("./681349.js");
var _ = require("./332108.js");
var g = require("./314189.js");
var m = require("./459857.js");
var h = require("./669050.js");
const y = o.HOUR_SECONDS * 25;
class E {
  constructor(e) {
    this.advToSystemBridge = e;
  }
  run(e) {
    var t = this;
    return (0, i.default)(function* () {
      const n = t.advToSystemBridge;
      const r = yield n.getUsersForExpiration(e);
      const {
        usersExpired: i,
        usersCloseToExpiration: a
      } = r;
      n.removeCompanions(i);
      n.sendADVStoredTimestampExpiredEvents(i, e);
      const o = Array.from(i.keys()).concat(Array.from(a.keys())).filter(e => !n.canRemoveUserDevices(e));
      n.sendOrQueueDeviceUsyncQuery(o).catch(() => {});
      return n.recordLocalTimestamp();
    })();
  }
}
class S {
  getNumDaysKeyIndexListExpiration() {
    return (0, s.getABPropConfigValue)("num_days_key_index_list_expiration");
  }
  getNumDaysBeforeDeviceExpiryCheck() {
    return (0, s.getABPropConfigValue)("num_days_before_device_expiry_check");
  }
  getUsersForExpiration(e) {
    var t = this;
    return (0, i.default)(function* () {
      const n = yield (0, u.getAllDeviceLists)();
      const r = yield (0, f.getLastADVDeviceInfoCheckTime)();
      const i = t.getNumDaysKeyIndexListExpiration() * o.DAY_SECONDS;
      const s = new Map();
      const l = new Map();
      n.forEach(n => {
        if (!(n.deleted || function (e) {
          return e.devices.length === 1 && e.devices[0].id === a.DEFAULT_DEVICE_ID;
        }(n))) {
          if (!function (e, t, n, r) {
            if (e - n.timestamp >= t) {
              return true;
            }
            if (n.expectedTsUpdateTs != null) {
              return e - n.expectedTsUpdateTs >= y && n.expectedTsLastDeviceJobTs !== r;
            }
            return false;
          }(e, i, n, r)) {
            if (function (e, t, n) {
              if (e - n.timestamp >= t) {
                return true;
              }
              if (n.expectedTs != null) {
                return n.expectedTs > n.timestamp;
              }
              return false;
            }(e, i - t.getNumDaysBeforeDeviceExpiryCheck() * o.DAY_SECONDS, n)) {
              l.set((0, h.createUserWid)(n.id), n);
            }
          } else {
            s.set((0, h.createUserWid)(n.id), n);
          }
        }
      });
      return {
        usersExpired: s,
        usersCloseToExpiration: l
      };
    })();
  }
  sendADVStoredTimestampExpiredEvents(e, t) {
    e.forEach(e => {
      const n = t - (e.timestamp + this.getNumDaysKeyIndexListExpiration() * o.DAY_SECONDS);
      if (n < 0) {
        return;
      }
      const r = Math.round(n / o.HOUR_SECONDS);
      new l.AdvStoredTimestampExpiredWamEvent({
        advExpireTimeInHours: r
      }).commit();
    });
  }
  sendOrQueueDeviceUsyncQuery(e) {
    return (0, i.default)(function* () {
      yield (0, c.addUserToPendingDeviceSync)(e.map(e => e.toString()));
      return (0, c.doPendingDeviceSync)();
    })();
  }
  canRemoveUserDevices() {
    return false;
  }
  removeCompanions(e) {
    if (Array.from(e.entries()).some(e => {
      let [t, n] = e;
      t.user;
      (0, m.getMeUser)().user;
    })) {
      __LOG__(2)`Logging out due to own expired device`;
      (0, g.socketLogout)(_.LogoutReason.InvalidAdvStatus);
      return Promise.resolve();
    } else {
      return Promise.all(Array.from(e.entries()).map(e => {
        let [t, n] = e;
        return (0, p.clearDeviceRecord)(t, n.devices);
      }));
    }
  }
  recordLocalTimestamp() {
    return Promise.resolve();
  }
}
exports.AdvToSystemBridgeImpl = S;
const v = o.DAY_SECONDS;
const T = "advDeviceInfoCheck";
let M;
let A;
function b() {
  return C.apply(this, arguments);
}
function C() {
  return (C = (0, i.default)(function* () {
    if (M != null) {
      self.clearTimeout(M);
      M = null;
    }
    const e = (0, o.unixTimeWithoutClockSkewCorrection)();
    const t = yield (0, f.getLastADVDeviceInfoCheckTime)();
    let n = 0;
    let r = () => Promise.resolve();
    if (t != null) {
      n = Math.max(v - (e - t), 0);
      r = () => P();
    }
    M = self.setTimeout((0, i.default)(function* () {
      try {
        yield r();
      } catch (e) {
        __LOG__(4, undefined, new Error(), undefined, ["automated-device-verification"])`error running the adv device check job`;
      }
      M = null;
      const e = (0, o.unixTimeWithoutClockSkewCorrection)();
      (0, f.setLastADVDeviceInfoCheckTime)(e);
      (0, d.updateTaskScheduledTime)(T, (0, o.castToUnixTime)(e));
      b();
    }), n * 1000);
  })).apply(this, arguments);
}
function P() {
  if (A == null) {
    A = new E(new S());
  }
  return A.run((0, o.unixTimeWithoutClockSkewCorrection)());
}