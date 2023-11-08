var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLatestPrivateStatsIdValueFromKey = function (e) {
  if (e === "regular") {
    throw (0, f.default)("tried to get psId for regular channel event");
  }
  if (h == null) {
    throw (0, f.default)("can't call getLatestPrivateStatsIdValueFromKey without initializing");
  }
  return m[e].value;
};
exports.getPrivateStatsIdsForCoreWam = E;
exports.getPrivateStatsKeyFromInt = function (e) {
  if (h == null) {
    throw (0, f.default)("can't call getPrivateStatsKeyFromInt without initializing");
  }
  return _[e];
};
exports.initPrivateStats = function () {
  return y.apply(this, arguments);
};
exports.maybeRotatePsIds = function () {
  return S.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./390934.js");
var o = require("./950376.js");
var s = require("./632157.js");
var l = require("./323321.js");
var u = require("./216391.js");
var c = require("./130945.js");
var d = r(require("./32223.js"));
var p = require("./965259.js");
var f = r(require("./556869.js"));
const _ = {};
const g = {};
const m = {};
c.PrivateStatsAllIds.map(e => {
  _[e.keyHashInt] = e.key;
  g[e.key] = e.keyHashInt;
  m[e.key] = {
    value: e.keyHashInt,
    rotationPeriodDays: e.rotationPeriodDays
  };
});
_[0] = "none";
g.none = 0;
m.none = {
  value: "none",
  rotationPeriodDays: -1
};
let h = null;
function y() {
  return (y = (0, i.default)(function* () {
    if (h != null) {
      return h.promise;
    }
    const e = new o.Resolvable();
    h = e;
    yield M();
    const t = [];
    const n = yield d.default.getPsMeta();
    const r = new Set();
    n.map(e => {
      r.add(e.key);
      if (m[e.key] === undefined) {
        t.push(e.key);
      } else {
        m[e.key].value = e.value;
      }
    });
    const i = Object.keys(m).filter(e => !r.has(e)).map(e => {
      if (e !== "none") {
        m[e].value = (0, a.randomHex)(16);
      }
      return {
        key: e,
        value: m[e].value,
        rotateInDays: m[e].rotationPeriodDays,
        creationTs: (0, s.unixTime)()
      };
    });
    yield d.default.addPsMeta(i);
    yield d.default.removePsMeta(t);
    i.map(e => (0, p.logPsIdUpdate)(u.PS_ID_ACTION.CREATED, g[e.key], e.rotateInDays));
    t.map(e => (0, p.logPsIdUpdate)(u.PS_ID_ACTION.DELETED, g[e], m[e].rotationPeriodDays));
    e.resolve();
  })).apply(this, arguments);
}
function E() {
  const e = new Map();
  c.PrivateStatsAllIds.forEach(t => {
    e.set(t.keyHashInt, String(m[t.key].value));
  });
  return e;
}
function S() {
  return (S = (0, i.default)(function* () {
    const e = [];
    if (h == null) {
      throw (0, f.default)("can't call maybeRotatePsIds without initializing");
    }
    try {
      yield h.promise;
      const t = yield d.default.getPsMeta();
      yield Promise.all(t.map(function () {
        var t = (0, i.default)(function* (t) {
          try {
            const {
              key: n,
              rotateInDays: r,
              creationTs: i
            } = t;
            if (b(i, r)) {
              e.push(n);
              yield v(n);
            }
          } catch (e) {
            __LOG__(3)`error while rotating PS id for key ${t.key}`;
          }
        });
        return function () {
          return t.apply(this, arguments);
        };
      }()));
    } catch (e) {
      __LOG__(3)`error while rotating PS ids ${e}`;
    }
    try {
      if (e.length > 0) {
        (0, l.updatePrivateStatIdsToCore)(E());
      }
    } catch (e) {}
    return e;
  })).apply(this, arguments);
}
function v() {
  return T.apply(this, arguments);
}
function T() {
  return (T = (0, i.default)(function* (e) {
    const t = (0, a.randomHex)(16);
    m[e].value = t;
    yield d.default.updatePsMeta({
      key: e,
      rotateInDays: m[e].rotationPeriodDays,
      value: t,
      creationTs: (0, s.unixTime)()
    });
    (0, p.logPsIdUpdate)(u.PS_ID_ACTION.ROTATED, g[e], m[e].rotationPeriodDays);
  })).apply(this, arguments);
}
function M() {
  return A.apply(this, arguments);
}
function A() {
  return (A = (0, i.default)(function* () {
    const e = [];
    (yield d.default.getPsMeta()).map(t => {
      if (t.lastRotationTimeUtc != null) {
        e.push(t.key);
      }
    });
    yield d.default.removePsMeta(e);
  })).apply(this, arguments);
}
function b(e, t) {
  if (t === -1 || e == null) {
    return false;
  }
  const n = t * s.DAY_SECONDS;
  return e < Math.floor((0, s.unixTime)() / n) * n;
}