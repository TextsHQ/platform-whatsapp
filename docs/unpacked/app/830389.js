var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertToBucket = function (e) {
  if (e < 0) {
    throw (0, d.default)("cannot convert negative number to a bucket");
  }
  if (e === 0) {
    return c.MUTATION_COUNT_BUCKET.ZERO;
  } else if (e === 1) {
    return c.MUTATION_COUNT_BUCKET.ONE;
  } else if (e < 10) {
    return c.MUTATION_COUNT_BUCKET.LT10;
  } else if (e < 100) {
    return c.MUTATION_COUNT_BUCKET.LT100;
  } else if (e < 500) {
    return c.MUTATION_COUNT_BUCKET.LT500;
  } else if (e < 1000) {
    return c.MUTATION_COUNT_BUCKET.LT1K;
  } else if (e < 5000) {
    return c.MUTATION_COUNT_BUCKET.LT5K;
  } else {
    return c.MUTATION_COUNT_BUCKET.GTE5K;
  }
};
exports.generateActionStatCounts = function () {
  return p.apply(this, arguments);
};
exports.getKeyStats = function () {
  return g.apply(this, arguments);
};
exports.getKeyStatsInternal = m;
var i = r(require("../vendor/348926.js"));
var a = require("./417405.js");
var o = require("./522815.js");
var s = require("./122393.js");
var l = require("./632157.js");
var u = require("./666545.js");
var c = require("./181680.js");
var d = r(require("./556869.js"));
function p() {
  return (p = (0, i.default)(function* () {
    const e = new Map();
    (yield (0, u.getSyncActionsTable)().all()).map(t => {
      var n;
      const r = JSON.parse(t.index)[0];
      const i = (n = e.get(r)) !== null && n !== undefined ? n : {
        action: r,
        applied: 0,
        invalid: 0,
        orphan: 0,
        unsupported: 0,
        failed: 0
      };
      switch (t.actionState) {
        case s.SyncActionState.Success:
        case s.SyncActionState.Skipped:
          i.applied++;
          break;
        case s.SyncActionState.Malformed:
          i.invalid++;
          break;
        case s.SyncActionState.Orphan:
          i.orphan++;
          break;
        case s.SyncActionState.Unsupported:
          i.unsupported++;
          break;
        case s.SyncActionState.Failed:
          i.failed++;
      }
      e.set(r, i);
    });
    return e;
  })).apply(this, arguments);
}
function f() {
  return _.apply(this, arguments);
}
function _() {
  return (_ = (0, i.default)(function* () {
    const e = yield (0, u.getSyncActionsTable)().get("[\"primary_version\",\"session_start\"]");
    if (e == null) {
      return undefined;
    } else {
      return e.timestamp;
    }
  })).apply(this, arguments);
}
function g() {
  return (g = (0, i.default)(function* () {
    const e = yield (0, o.getAllSyncKeysInTransaction)();
    const t = yield (0, u.getSyncActionsTable)().all();
    const n = yield f();
    return m(e, t, n == null ? undefined : Math.round(((0, l.unixTimeMs)() - n) / 86400000));
  })).apply(this, arguments);
}
function m(e, t, n) {
  const r = t.map(e => (0, a.encodeB64)(e.keyId));
  const i = Array.from(new Set(r));
  const o = new Map();
  for (const e of r) {
    o.set(e, (o.get(e) || 0) + 1);
  }
  const s = Array.from(o.values()).sort();
  const l = s.length;
  const u = Math.floor(l * 0.8) - 1;
  const c = Math.floor(l * 0.95) - 1;
  return {
    totalKeyCount: e.length,
    keysUsedInSnapshotCount: i.length,
    p80MuationsPerKey: s[u],
    p95MuationsPerKey: s[c],
    syncdSessionLengthDays: n
  };
}