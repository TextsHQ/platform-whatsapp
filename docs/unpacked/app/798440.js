var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleADVDeviceNotification = function (e) {
  let {
    wid: t,
    devices: n,
    type: r
  } = e;
  if (r == null) {
    return Promise.reject((0, f.default)("handleADVDeviceNotification: notification without type"));
  }
  return function () {
    return g.apply(this, arguments);
  }(t, n, r);
};
exports.handleADVDeviceSyncResult = function (e) {
  return function () {
    return m.apply(this, arguments);
  }(e);
};
exports.handleADVDeviceUpdateForMessage = function () {
  return _.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./275909.js");
var o = require("./403206.js");
var s = require("./459387.js");
var l = require("./313062.js");
var u = require("./715118.js");
var c = require("./681349.js");
var d = require("./999821.js");
var p = require("./76256.js");
var f = r(require("./556869.js"));
function _() {
  return (_ = (0, i.default)(function* (e, t, n, r, i) {
    let a = arguments.length > 5 && arguments[5] !== undefined && arguments[5];
    let o = arguments.length > 6 ? arguments[6] : undefined;
    const s = yield (0, c.getLastADVDeviceInfoCheckTime)();
    return (0, l.handleADVDeviceUpdateForMessage)(e, t, n, r, i, a, s, o);
  })).apply(this, arguments);
}
function g() {
  return (g = (0, i.default)(function* (e, t, r) {
    let i = null;
    if (r === "add") {
      const t = yield (0, p.getPersistSignalProtocolStore)().loadIdentityKey((0, d.createSignalAddress)(e).toString());
      i = t ? (0, o.toCurveKeyPubKey)((0, d.strToBuffer)(t)) : null;
    }
    const s = yield (0, a.getDeviceRecord)(e);
    const l = yield (0, c.getLastADVDeviceInfoCheckTime)();
    const f = (0, require("./644753.js").handleDeviceNotification)(e, r, t, i, s, l);
    if (f) {
      var _;
      if (f.clearRecord) {
        yield (0, u.clearDeviceRecord)(e, (s == null ? undefined : s.devices) || [], false, s == null ? undefined : s.advAccountType, f == null || (_ = f.update) === null || _ === undefined ? undefined : _.advAccountType);
      }
      return (0, u.bulkApplyDeviceUpdate)([{
        wid: e,
        update: f.update,
        currentRecord: s
      }]);
    }
  })).apply(this, arguments);
}
function m() {
  return (m = (0, i.default)(function* (e) {
    __LOG__(2)`handleADVDeviceSyncResultImpl: start to handling ${e.length} updates`;
    const t = e.map(e => e.wid);
    const r = e.filter(e => {
      var t;
      if ((t = e.devices.keyIndex) === null || t === undefined) {
        return undefined;
      } else {
        return t.signedKeyIndexBytes;
      }
    });
    const i = yield (0, p.getPersistSignalProtocolStore)().bulkLoadIdentityKey(r.map(e => (0, d.createSignalAddress)(e.wid).toString()));
    const l = new Map();
    r.forEach((e, t) => {
      l.set((0, s.createDeviceListPK)(e.wid), i[t]);
    });
    const c = yield (0, a.bulkGetDeviceRecord)(t);
    const f = [];
    const _ = [];
    const g = require("./644753.js").handleADVSyncResult;
    e.forEach((e, t) => {
      const n = l.get((0, s.createDeviceListPK)(e.wid));
      const r = n ? (0, o.toCurveKeyPubKey)((0, d.strToBuffer)(n)) : null;
      const i = c[t];
      const a = g(e.wid, e.devices, r, i);
      var u;
      if (a != null) {
        if (a.clearRecord) {
          f.push({
            wid: e.wid,
            currentList: (i == null ? undefined : i.devices) || [],
            currentAdvAccountType: i == null ? undefined : i.advAccountType,
            incomingAdvAccountType: (u = a.update) === null || u === undefined ? undefined : u.advAccountType
          });
          _.push({
            wid: e.wid,
            currentRecord: {
              id: (0, s.createDeviceListPK)(e.wid),
              deleted: true
            },
            update: a.update
          });
        } else {
          _.push({
            wid: e.wid,
            currentRecord: i,
            update: a.update
          });
        }
      }
    });
    yield Promise.all(f.map(e => {
      let {
        wid: t,
        currentList: n,
        currentAdvAccountType: r,
        incomingAdvAccountType: i
      } = e;
      return (0, u.clearDeviceRecord)(t, n, false, r, i);
    }));
    yield (0, u.bulkApplyDeviceUpdate)(_);
  })).apply(this, arguments);
}