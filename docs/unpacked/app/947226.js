var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleDeviceAddNotification = function (e, t, n, r, i, c, d) {
  if (!c || c.deleted) {
    return null;
  }
  if (n < c.timestamp) {
    return null;
  }
  if (i == null) {
    return null;
  }
  const p = (0, u.decodeSignedKeyIndexBytes)(i, r);
  if (!p) {
    return null;
  }
  const f = p.rawId;
  const _ = (0, o.numberOrThrowIfTooLarge)(p.timestamp);
  if (_ !== n) {
    return null;
  }
  let g = false;
  let m = null;
  const h = c.timestamp;
  if (c.rawId !== f) {
    g = true;
  } else {
    m = c.devices;
  }
  const y = new Set(p.validIndexes);
  const E = p.currentIndex || 0;
  const S = m == null ? [] : m.filter(e => e.id !== a.DEFAULT_DEVICE_ID && (y.has(e.keyIndex) || e.keyIndex > E));
  t.forEach(e => {
    const {
      id: t,
      keyIndex: n
    } = e;
    if (t !== a.DEFAULT_DEVICE_ID && n != null && y.has(n)) {
      S.push({
        id: t,
        keyIndex: n
      });
    }
  });
  S.push({
    id: a.DEFAULT_DEVICE_ID,
    keyIndex: 0
  });
  const v = {
    id: (0, l.createDeviceListPK)(e),
    rawId: f,
    timestamp: h,
    validIndexes: Array.from(y),
    devices: S,
    currentIndex: p.currentIndex,
    deleted: false
  };
  const T = (0, s.computeExpectedTsForDeviceRecord)(_, v, d);
  v.expectedTs = T.expectedTs;
  v.expectedTsLastDeviceJobTs = T.expectedTsLastDeviceJobTs;
  v.expectedTsUpdateTs = T.expectedTsUpdateTs;
  return {
    update: v,
    clearRecord: g
  };
};
exports.handleDeviceRemoveNotification = function (e, t, n) {
  if (n == null || n.deleted) {
    return null;
  }
  if (t < n.timestamp) {
    return null;
  }
  const r = new Map(e.map(e => [e.id, e.keyIndex]));
  const o = n.devices.filter(e => {
    if (e.id !== a.DEFAULT_DEVICE_ID) {
      const t = r.get(e.id);
      return t == null || t !== e.keyIndex;
    }
    return false;
  });
  o.push({
    id: a.DEFAULT_DEVICE_ID,
    keyIndex: 0
  });
  return {
    update: (0, i.default)((0, i.default)({}, n), {}, {
      devices: o
    }),
    clearRecord: false
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./418987.js");
var o = require("./229079.js");
var s = require("./232262.js");
var l = require("./459387.js");
var u = require("./716151.js");