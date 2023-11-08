var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bulkCreateOrReplaceDeviceRecord = function () {
  return E.apply(this, arguments);
};
exports.bulkGetDeviceRecord = m;
exports.createOrReplaceDeviceRecord = function () {
  return y.apply(this, arguments);
};
exports.doesDeviceHashMatch = function () {
  return A.apply(this, arguments);
};
exports.getAllDeviceLists = function () {
  return (0, c.getDeviceListTable)().all();
};
exports.getDeviceIds = S;
exports.getDeviceInfoForSync = function () {
  return M.apply(this, arguments);
};
exports.getDeviceRecord = g;
exports.getMyDeviceList = function () {
  return b.apply(this, arguments);
};
exports.hasDevice = function () {
  return T.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/594654.js"));
var o = require("./418987.js");
var s = require("./253972.js");
var l = require("./459387.js");
var u = require("./848624.js");
var c = require("./498667.js");
var d = require("./459857.js");
var p = require("./669050.js");
var f = r(require("./556869.js"));
const _ = new s.LruCache({
  sizeLimit: 5000,
  getSize: () => 1
});
function g(e) {
  var t;
  const n = (0, l.createDeviceListPK)(e);
  if (!_.has(n)) {
    const e = (0, c.getDeviceListTable)().get(n);
    _.put(n, e);
  }
  if ((t = _.get(n)) !== null && t !== undefined) {
    return t;
  } else {
    return Promise.resolve(null);
  }
}
function m() {
  return h.apply(this, arguments);
}
function h() {
  return (h = (0, i.default)(function* (e) {
    const t = [];
    e.forEach(e => {
      if (!_.has((0, l.createDeviceListPK)(e))) {
        t.push((0, l.createDeviceListPK)(e));
      }
    });
    if (t.length > 0) {
      (yield (0, c.getDeviceListTable)().bulkGet(t)).forEach((e, n) => {
        _.put(t[n], Promise.resolve(e));
      });
    }
    return Promise.all(e.map(e => _.get((0, l.createDeviceListPK)(e))));
  })).apply(this, arguments);
}
function y() {
  return (y = (0, i.default)(function* (e) {
    yield (0, c.getDeviceListTable)().createOrReplace(e);
    _.put(e.id, Promise.resolve(e));
  })).apply(this, arguments);
}
function E() {
  return (E = (0, i.default)(function* (e) {
    yield (0, c.getDeviceListTable)().bulkCreateOrReplace(e);
    e.forEach(e => {
      _.put(e.id, Promise.resolve(e));
    });
  })).apply(this, arguments);
}
function S() {
  return v.apply(this, arguments);
}
function v() {
  return (v = (0, i.default)(function* (e) {
    return (yield m(e)).map(e => {
      if (e && !e.deleted) {
        const t = e.devices.map(e => ({
          id: e.id,
          isHosted: e.isHosted
        }));
        return {
          id: e.id,
          devices: t
        };
      }
      return null;
    });
  })).apply(this, arguments);
}
function T() {
  return (T = (0, i.default)(function* (e, t) {
    if (t === o.DEFAULT_DEVICE_ID) {
      return true;
    }
    const [n] = yield S([e]);
    return !!n && !!n.devices.some(e => e.id === t);
  })).apply(this, arguments);
}
function M() {
  return (M = (0, i.default)(function* (e) {
    return (yield m(e)).map(e => {
      if (e && !e.deleted) {
        const t = e.devices.map(e => ({
          id: e.id,
          isHosted: e.isHosted
        }));
        return {
          id: e.id,
          devices: t,
          timestamp: e.timestamp,
          expectedTs: e.expectedTs
        };
      }
      return null;
    });
  })).apply(this, arguments);
}
function A() {
  return (A = (0, i.default)(function* (e, t) {
    if (t == null) {
      return true;
    }
    const n = (yield S([e])).map(e => e == null ? [] : e.devices.map(t => (0, p.createDeviceWidFromDeviceListPk)(e.id, t.id, t.isHosted)));
    const r = (0, a.default)(n, e => e);
    return (yield (0, u.phashV2)(r)) !== t;
  })).apply(this, arguments);
}
function b() {
  return (b = (0, i.default)(function* () {
    const e = (0, d.assertGetMe)();
    const t = yield g(e);
    if (!t || t.deleted) {
      throw (0, f.default)("syncd: cannot find my device list");
    }
    return t;
  })).apply(this, arguments);
}