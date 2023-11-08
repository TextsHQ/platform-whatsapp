Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializePREMetrics = function () {
  (0, i.subscribe)(y);
  s.Cmd.on("logout", o.forceCommitAppState);
};
var r = require("./489783.js");
var i = require("./947339.js");
var a = require("./220816.js");
var o = require("./123647.js");
var s = require("./780549.js");
var l = require("./372088.js");
var u = require("./230591.js");
var c = require("./824829.js");
var d = require("./924434.js");
var p = require("./629919.js");
var f = require("./806841.js");
var _ = require("./503451.js");
var g = require("./336897.js");
var m = require("./310899.js");
var h = require("./304954.js");
function y(e) {
  const {
    name: t
  } = e;
  switch (t) {
    case r.PRE_METRIC.SYNCD_FATAL_ERROR:
      (0, f.syncdFatalErrorLogger)(e);
      break;
    case r.PRE_METRIC.APP_STATE_SYNC_DAILY:
      !function (e) {
        const {
          stage: t,
          annotations: n
        } = e;
        if (t !== "SUCCESS") {
          return;
        }
        const r = (0, o.convertAppStateSyncDailyFromAnnotations)(n || {});
        const i = new d.MdAppStateSyncDailyWamEvent();
        if (r.mutationCount > 0) {
          i.mutationCount = r.mutationCount;
        }
        if (r.invalidActionCount > 0) {
          i.invalidActionCount = r.invalidActionCount;
        }
        if (r.unsupportedActionCount > 0) {
          i.unsupportedActionCount = r.unsupportedActionCount;
        }
        if (r.keyRotationRemoveCount > 0) {
          i.keyRotationRemoveCount = r.keyRotationRemoveCount;
        }
        if (r.storedMutationCount > 0) {
          i.storedMutationCount = r.storedMutationCount;
        }
        if (r.uploadConflictCount > 0) {
          i.uploadConflictCount = r.uploadConflictCount;
        }
        if (r.unsetActionCount > 0) {
          i.unsetActionCount = r.unsetActionCount;
        }
        if (r.missingKeyCount > 0) {
          i.missingKeyCount = r.missingKeyCount;
        }
        i.commit();
      }(e);
      break;
    case r.PRE_METRIC.SYNCD_CRITICAL_EVENT:
      !function (e) {
        if (e.stage !== "FAIL") {
          return;
        }
        const t = (0, a.convertSyncdCriticalEventFromAnnotations)(e.annotations);
        if (t == null) {
          return;
        }
        (0, g.uploadCriticalEventMetric)(function (e) {
          switch (e) {
            case a.SyncdCriticalEventType.MISSING_MUTATION_TO_REMOVE:
              return h.MD_SYNCD_CRITICAL_EVENT_CODE.MISSING_MUTATION_TO_REMOVE;
          }
        }(t.type), t.collection);
      }(e);
      break;
    case r.PRE_METRIC.SYNCD_CRITICAL_BOOTSTRAP_STAGE:
      (0, p.syncdCriticalBootstrapStageLogger)(e);
      break;
    case r.PRE_METRIC.SYNCD_BOOTSTRAP_APP_STATE_DOWNLOAD:
      !function (e) {
        if (e.stage !== "FAIL" && e.stage !== "SUCCESS") {
          return;
        }
        const t = (0, a.convertSyncdBootstrapAppStateDownloadFromAnnotations)(e.annotations);
        if (t == null) {
          return;
        }
        (0, u.commitBootstrapAppStateDownloadMetric)(t.collection, t.downloadStartTs, t.downloadSize, t.isSuccess);
      }(e);
      break;
    case r.PRE_METRIC.SYNCD_DECRYPT_MUTATIONS:
      (0, p.syncdDecryptMutationsMetricsLogger)(e);
      break;
    case r.PRE_METRIC.SYNCD_BOOTSTRAP_DATA_APPLIED:
      !function (e) {
        if (e.stage !== "SUCCESS") {
          return;
        }
        const t = (0, a.convertSyncdBootstrapDataAppliedFromAnnotations)(e.annotations);
        if (t == null) {
          return;
        }
        (0, l.logMetricsForDataApplied)(t.collection, t.snapshotUsed, t.durationMs);
      }(e);
      break;
    case r.PRE_METRIC.SYNCD_KEY_ROTATION:
      !function (e) {
        if (e.stage !== "SUCCESS") {
          return;
        }
        const t = (0, a.convertSyncdKeyRotationEventFromAnnotations)(e.annotations);
        if (t == null) {
          return;
        }
        new c.MdAppStateKeyRotationWamEvent({
          mdAppStateKeyRotationReason: E(t.type)
        }).commit();
      }(e);
      break;
    case r.PRE_METRIC.SYNCD:
      !function (e) {
        const {
          instanceKey: t,
          annotations: n
        } = e;
        if (e.stage === "START") {
          const e = new _.SyncdQPL();
          e.start();
          return void S.set(t, e);
        }
        const r = S.get(t);
        if (r == null) {
          return void __LOG__(4, undefined, new Error())`[syncd] Unknown syncd PRE instance key: ${t}`;
        }
        switch (e.stage) {
          case "POINT":
            r.markAnnotations(e.reason, n);
            break;
          case "SUCCESS":
            r.end();
            S.delete(t);
            break;
          case "FAIL":
            r.end(true);
            S.delete(t);
        }
      }(e);
      break;
    case r.PRE_METRIC.WA_JOBS_ORCHESTRATOR:
    case r.PRE_METRIC.WA_JOB_MANAGER:
    case r.PRE_METRIC.STANZA_PROCESSING:
    default:
      __LOG__(4, undefined, new Error())`Unhandled metric event: ${t}`;
  }
}
function E(e) {
  switch (e) {
    case a.SyncdKeyRotationEventType.APP_STATE_SYNC_KEY_EXPIRY:
      return m.MD_APP_STATE_KEY_ROTATION_REASON_CODE.APP_STATE_SYNC_KEY_EXPIRY;
    case a.SyncdKeyRotationEventType.DEVICE_DEREGISTERATION:
      return m.MD_APP_STATE_KEY_ROTATION_REASON_CODE.DEVICE_DEREGISTERATION;
    case a.SyncdKeyRotationEventType.NO_KEYS:
      return m.MD_APP_STATE_KEY_ROTATION_REASON_CODE.NO_KEYS;
  }
}
const S = new Map();