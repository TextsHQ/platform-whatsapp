Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleKeyIndexResult = function (e, t, n, l, u, c, d, p) {
  if ((c == null ? undefined : c.timestamp) != null && n < c.timestamp) {
    return null;
  }
  if (u == null) {
    return null;
  }
  const f = (0, s.decodeSignedKeyIndexBytes)(u, l);
  if (!f) {
    return null;
  }
  const _ = f.rawId;
  const g = (0, i.numberOrThrowIfTooLarge)(f.timestamp);
  if (g !== n) {
    return null;
  }
  let m = false;
  let h = null;
  let y = t;
  if (c && !c.deleted) {
    if (y == null) {
      y = c.devices;
    }
    if (c.rawId !== _) {
      m = true;
    } else {
      h = c.devices;
    }
  }
  const E = new Map();
  const S = new Set(f.validIndexes);
  const v = f.currentIndex || 0;
  if (y) {
    y.forEach(e => {
      if (e.keyIndex != null && S.has(e.keyIndex)) {
        E.set(e.id, e.keyIndex);
      }
    });
  }
  if (h != null) {
    h.forEach(e => {
      if (e.keyIndex > v) {
        E.set(e.id, e.keyIndex);
      }
    });
  }
  E.set(r.DEFAULT_DEVICE_ID, 0);
  const T = Array.from(E.entries()).map(e => {
    let [t, n] = e;
    return {
      id: t,
      keyIndex: n
    };
  });
  const M = {
    id: (0, o.createDeviceListPK)(e),
    rawId: _,
    timestamp: g,
    validIndexes: Array.from(S),
    devices: T,
    currentIndex: f.currentIndex,
    deleted: false,
    advAccountType: null
  };
  if (!(m || (0, a.shouldClearExpectedTs)(g, p, c, d))) {
    if (c && !c.deleted) {
      M.expectedTs = c.expectedTs;
      M.expectedTsLastDeviceJobTs = c.expectedTsLastDeviceJobTs;
      M.expectedTsUpdateTs = c.expectedTsUpdateTs;
    }
  }
  return {
    update: M,
    clearRecord: m
  };
};
var r = require("./418987.js");
var i = require("./229079.js");
var a = require("./232262.js");
var o = require("./459387.js");
var s = require("./716151.js");