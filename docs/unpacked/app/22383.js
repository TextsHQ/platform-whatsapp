var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadFatalErrorMetric = function () {
  return y.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./527796.js");
var s = r(require("./436269.js"));
var l = require("./632157.js");
var u = require("./287461.js");
var c = r(require("./97359.js"));
var d = require("./180581.js");
var p = require("./666545.js");
var f = require("./336897.js");
var _ = require("./960523.js");
var g = require("./673168.js");
var m = require("./394629.js");
const h = (0, l.unixTime)();
function y() {
  return (y = (0, a.default)(function* (e, t, r, a, y, E) {
    const S = (0, c.default)(require("./775410.js"));
    let v = {
      mdFatalErrorCode: e,
      collection: t ? (0, f.collectionNameToMetric)(t) : undefined,
      isBootstrap: S.isSyncDCriticalDataSyncInProcess()
    };
    if ((0, u.getABPropConfigValue)("md_app_state_gate_D34336913")) {
      const e = (0, g.getPairingTimestamp)();
      const t = e != null ? ((0, l.unixTime)() - e) * 1000 : undefined;
      v = (0, i.default)((0, i.default)({}, v), {}, {
        timeSinceRefreshMs: ((0, l.unixTime)() - h) * 1000,
        timeSincePairingMs: t,
        patchSnapshotMutationCount: r,
        patchVersion: a,
        isFatal: y,
        isWebLthashConsistent: E
      });
    }
    if ((0, u.getABPropConfigValue)("web_syncd_fatal_fields_from_L1104589PRV2")) {
      const e = yield (0, g.getRecentMailboxAgeDays)();
      const t = yield (0, _.getLastPeriodicAppStateSyncTs)();
      const n = s.default.getCollectionMinFailureTime();
      v = (0, i.default)((0, i.default)({}, v), {}, {
        mailboxAgeDays: e == null ? undefined : e,
        daysSinceLastPeriodicSync: t == null ? undefined : Math.trunc(((0, l.unixTime)() - t) / 60 / 60 / 24),
        hoursSinceFirstFiniteFailure: n == null ? undefined : Math.trunc(((0, l.unixTimeMs)() - n) / 1000 / 60 / 60)
      });
      const r = yield (0, p.getSyncActionsTable)().get("[\"primary_version\",\"current\"]");
      const a = yield (0, p.getSyncActionsTable)().get("[\"primary_version\",\"session_start\"]");
      if (r || a) {
        var T;
        var M;
        var A;
        var b;
        const e = (0, m.decodeProtobuf)(o.SyncActionDataSpec, r == null ? undefined : r.binarySyncData).value;
        const t = (0, m.decodeProtobuf)(o.SyncActionDataSpec, a == null ? undefined : a.binarySyncData).value;
        v = (0, i.default)((0, i.default)({}, v), {}, {
          currentPrimaryAppVersion: (T = e == null || (M = e.primaryVersionAction) === null || M === undefined ? undefined : M.version) !== null && T !== undefined ? T : undefined,
          sessionStartPrimaryAppVersion: (A = t == null || (b = t.primaryVersionAction) === null || b === undefined ? undefined : b.version) !== null && A !== undefined ? A : undefined
        });
      }
    }
    new d.MdFatalErrorWamEvent(v).commitAndWaitForFlush(true);
  })).apply(this, arguments);
}