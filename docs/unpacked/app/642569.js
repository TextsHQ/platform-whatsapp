var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syncAndGetDeviceList = function () {
  return T.apply(this, arguments);
};
exports.syncDeviceList = h;
exports.syncMyDeviceList = function () {
  return v.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/594654.js"));
var o = require("./798440.js");
var s = require("./275909.js");
var l = require("./459387.js");
var u = require("./369489.js");
var c = require("./848624.js");
var d = require("./459857.js");
var p = require("./692269.js");
var f = require("./328606.js");
var _ = require("./669050.js");
var g = r(require("./556869.js"));
const m = new Map();
function h() {
  return y.apply(this, arguments);
}
function y() {
  return (y = (0, i.default)(function* (e) {
    let {
      wids: t,
      context: n,
      phash: r
    } = e;
    if (r != null) {
      const e = (yield (0, s.getDeviceIds)(t)).map(e => e == null ? [] : e.devices.map(t => (0, _.createDeviceWidFromDeviceListPk)(e.id, t.id, t.isHosted)));
      const n = (0, a.default)(e, e => e);
      if (r === (yield (0, c.phashV2)(n))) {
        return;
      }
    }
    const i = new Set();
    const o = [];
    t.forEach(e => {
      const t = m.get((0, l.createDeviceListPK)(e));
      if (t) {
        i.add(t);
      } else {
        o.push(e);
      }
    });
    if (o.length === 0) {
      return void (yield Promise.all(Array.from(i)));
    }
    const u = E(o, n);
    o.map(e => {
      m.set((0, l.createDeviceListPK)(e), u);
    });
    yield Promise.all([u, ...Array.from(i)]);
  })).apply(this, arguments);
}
function E() {
  return S.apply(this, arguments);
}
function S() {
  return (S = (0, i.default)(function* (e, t) {
    try {
      const n = yield (0, s.getDeviceInfoForSync)(e);
      const r = n.map(e => e == null ? [] : e.devices.map(t => (0, _.createDeviceWidFromDeviceListPk)(e.id, t.id, t.isHosted)));
      const i = yield Promise.all(r.map(e => e.length === 0 ? "" : (0, c.phashV2)(e)));
      return M(e.map((e, t) => {
        var r;
        var a;
        return {
          id: e,
          hash: i[t],
          ts: (r = n[t]) === null || r === undefined ? undefined : r.timestamp,
          expectedTs: (a = n[t]) === null || a === undefined ? undefined : a.expectedTs
        };
      }), t);
    } catch (e) {
      __LOG__(4, undefined, new Error())`Failed to sync device list with error: ${e}`;
    } finally {
      e.map(e => {
        m.delete((0, l.createDeviceListPK)(e));
      });
    }
  })).apply(this, arguments);
}
function v() {
  return (v = (0, i.default)(function* () {
    yield h({
      wids: (0, d.getMePNandLIDWids)(),
      context: null,
      phash: null
    });
  })).apply(this, arguments);
}
function T() {
  return (T = (0, i.default)(function* (e) {
    yield h({
      wids: e,
      context: null,
      phash: null
    });
    return (0, s.getDeviceIds)(e);
  })).apply(this, arguments);
}
function M() {
  return A.apply(this, arguments);
}
function A() {
  return (A = (0, i.default)(function* (e, t) {
    if (e.length === 0) {
      return;
    }
    const n = new p.USyncQuery().withContext(t || "interactive").withDeviceProtocol();
    e.forEach(e => {
      if (e.id.user !== 0) {
        n.withUser(new f.USyncUser().withId(e.id).withDeviceHash(String(e.hash)).withTs(e.ts).withExpectedTs(e.expectedTs));
      }
    });
    const r = yield n.execute();
    if (r.error.all) {
      throw (0, g.default)(`syncDeviceList: error ${r.error.all.errorCode}: ${r.error.all.errorText}`);
    }
    if (r.error.devices) {
      __LOG__(3)`syncDeviceList: error ${r.error.devices.errorCode}: ${r.error.devices.errorText}`;
    }
    let i = r.list.filter(e => !("errorCode" in e.devices));
    i = i.map(e => ({
      wid: e.id,
      devices: e.devices
    }));
    const a = i.filter(e => {
      var t;
      if ((t = e.devices.keyIndex) === null || t === undefined) {
        return undefined;
      } else {
        return t.signedKeyIndexBytes;
      }
    }).map(e => e.wid);
    __LOG__(2)`syncDeviceList: skipping ${r.list.length - a.length} out of ${r.list.length} records`;
    yield (0, u.getAndStoreIdentityKeys)(a);
    return (0, o.handleADVDeviceSyncResult)(i);
  })).apply(this, arguments);
}