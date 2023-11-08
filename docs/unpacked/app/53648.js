var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyAppStateSyncResponse = function () {
  return U.apply(this, arguments);
};
exports.applyIndividualMutations = function () {
  return G.apply(this, arguments);
};
var i = r(require("../vendor/73982.js"));
var a = r(require("../vendor/311504.js"));
var o = require("./819416.js");
var s = require("./31549.js");
var l = r(require("./415227.js"));
var u = require("./377380.js");
var c = require("./822144.js");
var d = require("./526835.js");
var p = require("./229079.js");
var f = r(require("./670983.js"));
var _ = require("./679905.js");
var g = require("./527796.js");
var m = require("./291774.js");
var h = require("./202038.js");
var y = require("./411907.js");
var E = require("./122393.js");
var S = require("./303184.js");
var v = require("./256764.js");
var T = require("./361438.js");
var M = require("./902941.js");
var A = require("./751691.js");
var b = require("./787685.js");
var C = require("./220816.js");
var P = require("./140098.js");
var O = require("./393502.js");
var I = require("./851209.js");
var R = r(require("./603370.js"));
var N = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = L(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("./123647.js"));
var D = require("./632157.js");
var w = require("./394629.js");
function L(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (L = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const k = new ArrayBuffer(128);
function G() {
  return (G = (0, a.default)(function* (e) {
    if (e.length === 0) {
      return Promise.resolve();
    }
    const t = e.sort((e, t) => e.timestamp - t.timestamp);
    __LOG__(2)`syncd: start applyIndividualMutations`;
    const n = (0, h.syncActionsToDecryptedMutation)(t).reduce((e, t) => {
      var n;
      const r = (n = e.get(t.collection)) !== null && n !== undefined ? n : [];
      r.push(t);
      e.set(t.collection, r);
      return e;
    }, new Map());
    const r = Array.from(n.keys()).map(function () {
      var e = (0, a.default)(function* (e) {
        __LOG__(2)`syncd: apply individual mutations for collection ${e}`;
        const t = n.get(e);
        if (t === undefined) {
          return;
        }
        const {
          setMutationsToPersist: r,
          pendingMutationsToDrop: i
        } = yield ne(e, t, E.SyncDataType.Local, null);
        const s = r.map(e => ({
          action: e.action,
          actionState: e.actionState,
          binarySyncData: e.binarySyncData,
          collection: e.collection,
          index: e.index,
          keyId: e.keyId,
          modelId: e.modelId,
          modelType: e.modelType,
          timestamp: e.timestamp,
          version: e.version
        }));
        __LOG__(2)`syncd: end apply individual mutations for collection ${e}`;
        yield (0, o.runInTransaction)({
          SyncActionStore: true,
          PendingMutationStore: true
        }, function () {
          var e = (0, a.default)(function* (e) {
            let {
              SyncActionStore: t,
              PendingMutationStore: n
            } = e;
            yield t.bulkUpdate(s);
            yield n.bulkRemove(i);
          });
          return function () {
            return e.apply(this, arguments);
          };
        }());
        __LOG__(2)`syncd: end update db after apply individual mutations for collection ${e}`;
      });
      return function () {
        return e.apply(this, arguments);
      };
    }());
    yield Promise.all(r);
    __LOG__(2)`syncd: end applyIndividualMutations`;
  })).apply(this, arguments);
}
function U() {
  return (U = (0, a.default)(function* (e, t, n) {
    const {
      name: r,
      version: i,
      patches: a,
      snapshot: s,
      syncedPendingMutationsId: l,
      syncedEncryptedMutations: d
    } = e;
    __LOG__(2)`syncd: start applying collection ${r}`;
    yield (0, o.getDbImpls)().writeSyncdLog(r, "start applyAppStateSyncResponse");
    try {
      var p;
      var f;
      if (!(n == null)) {
        n.mark("external_mutations_download_start", {
          patchCount: (p = e.patches) === null || p === undefined ? undefined : p.length,
          snapshotSizeBytes: (f = e.snapshot) === null || f === undefined ? undefined : f.fileSizeBytes
        });
      }
      const [_, g] = yield W(r, a, s, t);
      yield (0, o.getDbImpls)().writeSyncdLog(r, "after getExternalMutations");
      if (!(n == null)) {
        n.mark("external_mutations_download_end", {
          patchesWithMutationsCount: g == null ? undefined : g.length,
          snapshotRecordsCount: _ == null ? undefined : _.records.length
        });
      }
      const h = performance.now();
      if (_ != null) {
        yield z(r, _, g, n);
        __LOG__(2)`syncd: ${r} snapshot and patches applied successfully`;
      } else if (g != null) {
        const e = Math.min.apply(Math, g.map(e => e.version.version));
        if (t != null && e > t + 1 && g.length > 0) {
          yield (0, o.getDbImpls)().writeSyncdLog(r, "has missing patches");
          const n = yield (0, c.getAllMissingKeysInTransaction)();
          __LOG__(2)`syncd: missing keys: [${n.map(e => e.keyHex + ":" + e.timestamp)}]`;
          __LOG__(2)`syncd: has missing patches. collection: ${r}, localVersion: ${t},
minPatch: ${e}`;
          yield x(r, g[0]);
          yield (0, o.getDbImpls)().printSyncdLog();
          yield F();
          __LOG__(4, undefined, new Error(), true)`syncd: has missing patches`;
          SEND_LOGS("syncd: has missing patches");
          if ((0, o.getConfig)().syncdShouldFatalOnMissingPatch()) {
            (0, b.reportSyncdFatalError)(b.SyncdFatalErrorType.SERVER_DID_NOT_SEND_ALL_PATCHES, r, undefined, t != null ? t : 0);
            throw new v.SyncdFatalError("syncd: has missing patches");
          }
        }
        yield X(r, g, n);
        __LOG__(2)`syncd: ${r} patches applied successfully`;
      } else if (i != null) {
        yield (0, o.getDbImpls)().writeSyncdLog(r, `start upload patches. version: ${i}. mutation count: ${d.length}`);
        yield Y(r, i, l, d);
        yield (0, o.getDbImpls)().writeSyncdLog(r, "end upload patches");
        __LOG__(2)`syncd: ${r} v${i} uploaded successfully`;
      } else {
        if ((0, y.isBootstrap)(t)) {
          yield (0, u.updateCollectionVersionAndLtHashInTransaction)(r, 0, k);
        }
        __LOG__(2)`syncd: sync ${r} but there are no updates`;
      }
      const E = Math.floor(performance.now() - h);
      __LOG__(2)`syncd: applyAppStateSyncResponse: finished applying ${r} in ${E}ms`;
      if ((g || _) && (0, y.isBootstrap)(t) && !(0, y.isCriticalCollection)(r)) {
        (0, C.reportSyncdBootstrapDataApplied)(r, _ != null ? C.SyncdBootstrapDataAppliedSnapshotUsed.SNAPSHOT_USED : C.SyncdBootstrapDataAppliedSnapshotUsed.SNAPSHOT_NOT_USED, E);
      }
      yield (0, m.logMacsInSnapshot)(e.name);
      return e;
    } catch (e) {
      const t = e.message;
      yield (0, o.getDbImpls)().writeSyncdLog(r, `error (maybe retryable): ${e}`);
      if (e instanceof v.SyncdMissingKeyError) {
        __LOG__(3)`syncd: key error: ${r} missing keys`;
        return {
          name: r,
          state: E.CollectionState.Blocked
        };
      } else if (e instanceof v.SyncdFatalError) {
        __LOG__(4, undefined, new Error(), true)`syncd: fatal error: ${r} throws ${t}`;
        SEND_LOGS(`syncd: fatal error: ${String(r)} throws ${t}`);
        return {
          name: r,
          state: E.CollectionState.ErrorFatal
        };
      } else {
        __LOG__(3, undefined, undefined, true)`syncd: retryable error: ${r} throws ${t}`;
        SEND_LOGS(`syncd: retryable error: ${String(r)} throws ${t}`);
        return {
          name: r,
          state: E.CollectionState.ErrorRetry
        };
      }
    }
  })).apply(this, arguments);
}
function x() {
  return B.apply(this, arguments);
}
function B() {
  return (B = (0, a.default)(function* (e, t) {
    try {
      const n = (yield (0, S.tryDecryptPatch)(e, t)).filter(e => e.operation === _.SyncdMutation$SyncdOperation.SET);
      const r = (0, I.validateAndTypeSetMutations)(e, n);
      const i = r.length > 0 ? r[0].timestamp : null;
      const a = i == null ? null : (0, D.daysDiff)((0, D.unixTimeMs)(), i);
      yield (0, o.getDbImpls)().writeSyncdLog(e, `max timestamp in first patch: ${a != null ? a : "n/a"} days ago`);
    } catch (e) {
      __LOG__(3)`syncd: could not log max timestamp: ${e}`;
    }
  })).apply(this, arguments);
}
function F() {
  return j.apply(this, arguments);
}
function j() {
  return (j = (0, a.default)(function* () {
    __LOG__(2)`syncd: missing patch info:`;
    (yield (0, u.getAllCollectionVersionsInTransaction)()).forEach(e => {
      var t;
      const n = ((t = e.lastSyncAttemptStartTimes) !== null && t !== undefined ? t : []).map(e => (0, D.daysDiff)((0, D.unixTimeMs)(), e));
      const r = e.lastSuccessfulSyncEndTime;
      const i = r == null ? null : (0, D.daysDiff)((0, D.unixTimeMs)(), r);
      __LOG__(2)`${e.collection}:
lastSuccessfulSyncEndTime = ${e.lastSuccessfulSyncEndTime} (${i} days ago))
lastSyncAttemptStartTimes = ${e.lastSyncAttemptStartTimes}
lastSyncAttemptStartTimes by days ago: ${n}`;
    });
  })).apply(this, arguments);
}
function Y() {
  return K.apply(this, arguments);
}
function K() {
  return (K = (0, a.default)(function* (e, t, n, r) {
    var i;
    yield (0, m.logMacsInSnapshot)(e);
    const s = r.map(e => ({
      indexMac: e.indexMac,
      valueMac: e.valueMac,
      operation: e.operation
    }));
    const l = yield (0, m.computeLtHash)(e, s);
    const c = (0, h.encryptedUploadMutationsToSyncActions)(r.filter(e => e.operation === _.SyncdMutation$SyncdOperation.SET), E.SyncActionState.Success);
    const d = (i = yield (0, u.getCollectionVersionInTransaction)(e).then(e => e == null ? undefined : e.version)) !== null && i !== undefined ? i : 0;
    if (t !== d + 1) {
      __LOG__(4, undefined, new Error(), true)`syncd: _uploadSuccessful: unexpected server version (${t}) after patch upload, expected ${d + 1}`;
      SEND_LOGS("syncd: unexpected server version after patch upload");
    }
    __LOG__(2)`syncd: _uploadSuccessful: write to db for ${e}`;
    yield (0, o.runInTransaction)({
      SyncActionStore: true,
      PendingMutationStore: true,
      CollectionVersionStore: true
    }, function () {
      var r = (0, a.default)(function* (r) {
        let {
          SyncActionStore: i,
          PendingMutationStore: a,
          CollectionVersionStore: o
        } = r;
        yield i.bulkSet(c);
        yield a.bulkRemove(n);
        yield o.update(e, {
          version: t,
          ltHash: l
        });
      });
      return function () {
        return r.apply(this, arguments);
      };
    }());
    __LOG__(2)`syncd: end _uploadSuccessful for ${e}`;
  })).apply(this, arguments);
}
function W() {
  return V.apply(this, arguments);
}
function V() {
  return (V = (0, a.default)(function* (e, t, n, r) {
    let i = Promise.resolve();
    let o = 0;
    const s = (0, D.unixTimeMs)();
    if (n != null) {
      var l;
      const t = R.default.validateExternalBlobReference(e, n);
      o += (0, p.numberOrThrowIfTooLarge)((l = t.fileSizeBytes) !== null && l !== undefined ? l : 0);
      __LOG__(2)`syncd: download snapshot for ${e}`;
      i = (0, P.downloadSnapshot)(e, t);
    }
    let u;
    let c;
    let d = Promise.resolve();
    if (t != null && t.length > 0) {
      const n = t.map(t => R.default.validatePatchProtobuf(e, t));
      d = Promise.all(n.map(function () {
        var t = (0, a.default)(function* (t) {
          let n = t.mutations || [];
          const r = t.externalMutations;
          var i;
          if (r) {
            __LOG__(2)`syncd: download patch for ${e}`;
            n = yield (0, P.downloadExternalPatch)(e, r);
            __LOG__(2)`syncd: ${e}'s external patch downloaded`;
            o += (0, p.numberOrThrowIfTooLarge)((i = r.fileSizeBytes) !== null && i !== undefined ? i : 0);
          }
          return {
            mutations: n,
            version: t.version,
            snapshotMac: t.snapshotMac,
            patchMac: t.patchMac,
            keyId: t.keyId,
            exitCode: t.exitCode,
            deviceIndex: t.deviceIndex
          };
        });
        return function () {
          return t.apply(this, arguments);
        };
      }()));
    }
    try {
      [u, c] = yield Promise.all([i, d]);
      if ((0, y.isBootstrap)(r)) {
        (0, C.reportSyncdBootstrapAppStateDownloadMetric)({
          collection: e,
          downloadStartTs: s,
          downloadSize: o,
          isSuccess: "success"
        });
      }
    } catch (t) {
      if ((0, y.isBootstrap)(r)) {
        (0, C.reportSyncdBootstrapAppStateDownloadMetric)({
          collection: e,
          downloadStartTs: s,
          downloadSize: o,
          isSuccess: "failure"
        });
      }
      throw t;
    }
    return [u, c];
  })).apply(this, arguments);
}
function H(e) {
  return {
    measuredComputeLtHashAndValidateSnapshot: function () {
      var t = (0, a.default)(function* (t, n) {
        if (!(e == null)) {
          e.mark("anti_tampering_start", {
            source: E.SyncDataType.Snapshot
          });
        }
        const r = yield (0, m.computeLtHashAndValidateSnapshot)(t, n);
        if (!(e == null)) {
          e.mark("anti_tampering_end", {
            source: E.SyncDataType.Snapshot
          });
        }
        return r;
      });
      return function () {
        return t.apply(this, arguments);
      };
    }(),
    measuredTryDecryptSnapshot: function () {
      var t = (0, a.default)(function* (t, n) {
        if (!(e == null)) {
          e.mark("decryption_start", {
            source: E.SyncDataType.Snapshot
          });
        }
        const r = yield (0, S.tryDecryptSnapshot)(t, n);
        if (!(e == null)) {
          e.mark("decryption_end", {
            source: E.SyncDataType.Snapshot
          });
        }
        return r;
      });
      return function () {
        return t.apply(this, arguments);
      };
    }()
  };
}
function $(e) {
  return {
    measuredComputeLtHashAndValidatePatch: function () {
      var t = (0, a.default)(function* (t, n, r) {
        if (!(e == null)) {
          e.mark("anti_tampering_start", {
            source: E.SyncDataType.Patch
          });
        }
        const i = yield (0, m.computeLtHashAndValidatePatch)(t, n, r);
        if (!(e == null)) {
          e.mark("anti_tampering_end", {
            source: E.SyncDataType.Patch
          });
        }
        return i;
      });
      return function () {
        return t.apply(this, arguments);
      };
    }(),
    measuredTryDecryptPatch: function () {
      var t = (0, a.default)(function* (t, n) {
        if (!(e == null)) {
          e.mark("decryption_start", {
            source: E.SyncDataType.Patch
          });
        }
        const r = yield (0, S.tryDecryptPatch)(t, n);
        if (!(e == null)) {
          e.mark("decryption_end", {
            source: E.SyncDataType.Patch
          });
        }
        return r;
      });
      return function () {
        return t.apply(this, arguments);
      };
    }()
  };
}
function z() {
  return q.apply(this, arguments);
}
function q() {
  return (q = (0, a.default)(function* (e, t, n, r) {
    yield (0, o.getDbImpls)().writeSyncdLog(e, `start _applySnapshotAndPatches. mutation count: ${t.records.length}, version: ${t.version.version}`);
    yield (0, m.logMacsInSnapshot)(e);
    try {
      const {
        measuredComputeLtHashAndValidateSnapshot: n,
        measuredTryDecryptSnapshot: i
      } = H(r);
      if (!(r == null)) {
        r.mark("apply_start", {
          source: E.SyncDataType.Snapshot,
          snapshotRecordsCount: t.records.length
        });
      }
      __LOG__(2)`syncd: start validate ${e}'s snapshot`;
      const s = yield n(e, t);
      yield (0, o.getDbImpls)().writeSyncdLog(e, "after validate lthash for snapshot");
      __LOG__(2)`syncd: collection ${e}'s snapshot validated`;
      const l = yield i(e, t);
      __LOG__(2)`syncd: collection ${e}'s snapshot decrypted`;
      yield (0, o.getDbImpls)().writeSyncdLog(e, "after decryption of snapshot");
      N.addMutationCount(t.records.length);
      (0, A.reportSyncdDecryptedMutations)(A.SyncdDecryptMutationsType.SNAPSHOT_MUTATIONS, l);
      (0, I.validateNoSameIndexForMultipleMutations)(e, l, E.SyncDataType.Snapshot);
      const u = t.version.version;
      const {
        setMutationsToPersist: c,
        pendingMutationsToDrop: d
      } = yield ne(e, l, E.SyncDataType.Snapshot, r);
      __LOG__(2)`syncd: processed ${l.length} mutations in snapshot of collection ${e} v${u}`;
      __LOG__(2)`syncd: collection ${e}'s snapshot v${u} applied`;
      yield (0, o.getDbImpls)().writeSyncdLog(e, "after _applySetMutations for snapshot");
      if (!(r == null)) {
        r.mark("update_DB_start", {
          source: E.SyncDataType.Snapshot,
          setMutationsToPersistCount: c.length,
          pendingMutationsToDropCount: d.length
        });
      }
      yield (0, o.runInTransaction)({
        SyncActionStore: true,
        PendingMutationStore: true,
        CollectionVersionStore: true
      }, function () {
        var t = (0, a.default)(function* (t) {
          let {
            SyncActionStore: n,
            PendingMutationStore: r,
            CollectionVersionStore: i
          } = t;
          yield n.bulkSet(c);
          yield r.bulkRemove(d);
          yield i.update(e, {
            version: u,
            ltHash: s
          });
        });
        return function () {
          return t.apply(this, arguments);
        };
      }());
      yield (0, o.getDbImpls)().writeSyncdLog(e, "after transaction for snapshot");
      if (!(r == null)) {
        r.mark("update_DB_end", {
          source: E.SyncDataType.Snapshot
        });
      }
      __LOG__(2)`syncd: completed applying snapshot for ${e}`;
      if (!(r == null)) {
        r.mark("apply_end", {
          source: E.SyncDataType.Snapshot,
          decryptedMutationsCount: l.length
        });
      }
    } catch (n) {
      yield (0, o.getDbImpls)().writeSyncdLog(e, "exception " + n.message);
      if (n instanceof v.SyncdMissingKeyError) {
        yield (0, M.handleMissingKeysInSnapshot)(e, t);
      }
      throw n;
    }
    yield (0, o.getDbImpls)().writeSyncdLog(e, "done applying snapshot");
    if (n) {
      if (!(r == null)) {
        r.mark("apply_start", {
          source: E.SyncDataType.Patch,
          patchCount: n.length
        });
      }
      yield X(e, n, r);
      if (!(r == null)) {
        r.mark("apply_end", {
          source: E.SyncDataType.Patch,
          patchCount: n.length
        });
      }
    }
  })).apply(this, arguments);
}
function J() {
  return Q.apply(this, arguments);
}
function Q() {
  return (Q = (0, a.default)(function* (e) {
    if (e > (0, o.getConfig)().syncdMaxMutationsToProcessDuringResume()) {
      const t = Date.now();
      __LOG__(2)`syncd: patches have ${e} mutations, wait for UI unblock`;
      yield (0, o.getDbImpls)().handleSyncDelayApplyingPatchUntilUIUnblocks();
      __LOG__(2)`syncd: UI is unblocked, waited for ${Date.now() - t}ms`;
    }
  })).apply(this, arguments);
}
function X() {
  return Z.apply(this, arguments);
}
function Z() {
  return (Z = (0, a.default)(function* (e, t, n) {
    const r = t.length === 0 ? "n/a" : t[t.length - 1].version.version;
    yield (0, o.getDbImpls)().writeSyncdLog(e, `start apply patches. count: ${t.length}, last patch version: ${r}`);
    if (t.length === 0) {
      __LOG__(2)`syncd: no patches for collection ${e}`;
      return Promise.resolve();
    }
    (0, I.validateNoDuplicatePatchVersionInCollection)(e, t);
    t.sort((e, t) => e.version.version > t.version.version ? 1 : -1);
    try {
      const r = t.reduce((e, t) => e + t.mutations.length, 0);
      yield J(r);
      for (let r = 0; r < t.length; r++) {
        if (r <= 4 || r % 5 == 0) {
          yield (0, o.getDbImpls)().writeSyncdLog(e, `start applying patch ${t[r].version.version} with ${t[r].mutations.length} mutations`);
        }
        yield ee(e, t[r], n, r <= 2);
        if (r <= 4 || r % 5 == 0) {
          yield (0, o.getDbImpls)().writeSyncdLog(e, `finished applying patch ${t[r].version.version} with ${t[r].mutations.length} mutations`);
        }
      }
      yield (0, o.getDbImpls)().writeSyncdLog(e, `after apply patches (total mutations: ${r})`);
    } catch (n) {
      yield (0, o.getDbImpls)().writeSyncdLog(e, "exception" + n.message);
      if (n instanceof v.SyncdMissingKeyError) {
        yield (0, M.handleMissingKeysInPatches)(e, t);
      }
      throw n;
    }
  })).apply(this, arguments);
}
function ee() {
  return te.apply(this, arguments);
}
function te() {
  return (te = (0, a.default)(function* (e, t, n) {
    let r = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
    yield (0, m.logMacsInSnapshot)(e);
    if (t.exitCode) {
      var i;
      const n = t.exitCode.code;
      yield (0, o.getDbImpls)().writeSyncdLog(e, "patch exit code " + (n != null ? n : ""));
      switch (n) {
        case 100:
          (0, b.reportSyncdFatalError)(b.SyncdFatalErrorType.TERMINAL_PATCH_MISSING_DATA, e);
          break;
        case 101:
          (0, b.reportSyncdFatalError)(b.SyncdFatalErrorType.TERMINAL_PATCH_DESERIALIZATION_ERROR, e);
          break;
        default:
          (0, b.reportSyncdFatalError)(b.SyncdFatalErrorType.TERMINAL_PATCH_UNKNOWN, e);
      }
      throw new v.SyncdFatalError(`received terminal patch with exit code:  ${String(n)} text: ${String((i = t.exitCode) === null || i === undefined ? undefined : i.text)}  `);
    }
    yield (0, o.getDbImpls)().handleSyncBeforeApplyPatch(t);
    const l = t.mutations.filter(e => e.operation === _.SyncdMutation$SyncdOperation.SET).length;
    const u = t.mutations.length - l;
    __LOG__(2)`syncd: applying patch ${e} v${t.version.version} from device ${t.deviceIndex}
SET count: ${l}
REMOVE count: ${u}`;
    if (l === 0 && u === 0) {
      __LOG__(3, undefined, undefined, true)`syncd: ${e}: empty patch found`;
      SEND_LOGS(`syncd: ${e}: empty patch found`);
    }
    const {
      measuredComputeLtHashAndValidatePatch: c,
      measuredTryDecryptPatch: p
    } = $(n);
    if (r) {
      yield (0, o.getDbImpls)().writeSyncdLog(e, `before validate lthash for patch ${t.version.version}`);
    }
    const f = yield c(e, t, P);
    __LOG__(2)`syncd: completed computeLtHashAndValidatePatch for ${e} v${t.version.version}`;
    if (r) {
      yield (0, o.getDbImpls)().writeSyncdLog(e, `after validate lthash for patch ${t.version.version}`);
    }
    const g = yield p(e, t);
    (0, A.reportSyncdDecryptedMutations)(A.SyncdDecryptMutationsType.PATCH_MUTATIONS, g);
    if (r) {
      yield (0, o.getDbImpls)().writeSyncdLog(e, `after decrypt patch ${t.version.version}`);
    }
    N.addMutationCount(g.length);
    (0, I.validateNoSameIndexForMultipleMutations)(e, g, E.SyncDataType.Patch);
    const h = se(g);
    const y = h.filter(e => e.operation === _.SyncdMutation$SyncdOperation.REMOVE);
    yield ie(e, y);
    __LOG__(2)`syncd: completed _applyRemoveMutations for ${e} v${t.version.version}`;
    if (r) {
      yield (0, o.getDbImpls)().writeSyncdLog(e, `after apply remove mutations for patch ${t.version.version}`);
    }
    const S = h.filter(e => e.operation === _.SyncdMutation$SyncdOperation.SET);
    const {
      setMutationsToPersist: T,
      pendingMutationsToDrop: M
    } = yield ne(e, S, E.SyncDataType.Patch, n, r);
    __LOG__(2)`syncd: processed ${g.length} mutations in patch version ${t.version.version} of collection ${e}`;
    if (r) {
      yield (0, o.getDbImpls)().writeSyncdLog(e, `after apply set mutations for patch ${t.version.version}`);
    }
    if (!(n == null)) {
      n.mark("update_DB_start", {
        source: E.SyncDataType.Patch,
        setMutationsToPersistCount: T.length,
        pendingMutationsToDropCount: M.length
      });
    }
    const C = t.version.version;
    function P() {
      return O.apply(this, arguments);
    }
    function O() {
      return (O = (0, a.default)(function* (t) {
        var n;
        if ((n = (yield (0, d.getSyncActionsByCollectionsInTransaction)([e])).filter(e => (0, s.arrayBuffersEqual)(t, e.indexMac)).pop()) === null || n === undefined) {
          return undefined;
        } else {
          return n.valueMac;
        }
      })).apply(this, arguments);
    }
    yield (0, o.runInTransaction)({
      SyncActionStore: true,
      PendingMutationStore: true,
      CollectionVersionStore: true
    }, function () {
      var t = (0, a.default)(function* (t) {
        let {
          SyncActionStore: n,
          PendingMutationStore: r,
          CollectionVersionStore: i
        } = t;
        yield n.bulkRemove(y.map(e => e.index));
        yield n.bulkSet(T);
        yield r.bulkRemove(M);
        yield i.update(e, {
          version: C,
          ltHash: f
        });
      });
      return function () {
        return t.apply(this, arguments);
      };
    }());
    if (!(n == null)) {
      n.mark("update_DB_end", {
        source: E.SyncDataType.Patch
      });
    }
    __LOG__(2)`syncd: completed final transaction in _applyPatch for ${e} v${t.version.version}`;
    if (r) {
      yield (0, o.getDbImpls)().writeSyncdLog(e, `after final transaction for patch ${t.version.version}`);
    }
  })).apply(this, arguments);
}
function ne() {
  return re.apply(this, arguments);
}
function re() {
  return (re = (0, a.default)(function* (e, t, n, r) {
    let a = arguments.length > 4 && arguments[4] !== undefined && arguments[4];
    (0, A.reportSyncdCriticalBootstrapStage)(A.SyncdCriticalBootstrapStageType.ABOUT_TO_APPLY_MUTATIONS);
    const s = n === E.SyncDataType.Local ? " (individual mutations)" : "";
    const l = [];
    const u = (0, I.validateAndTypeSetMutations)(e, t);
    const {
      supportedMutations: c,
      unsupportedMutations: d
    } = le(e, u);
    d.forEach(e => l.push((0, h.setMutationToSyncAction)(e, E.SyncActionState.Unsupported)));
    if (a) {
      yield (0, o.getDbImpls)().writeSyncdLog(e, "before resolve conflict");
    }
    if (!(r == null)) {
      r.mark("conflict_resolution_start", {
        source: n,
        collectionName: e,
        count: c.length
      });
    }
    const {
      remoteMutationsToApply: p,
      pendingMutationsToDrop: _
    } = yield (0, O.resolveConflict)(e, c);
    const m = c.filter(e => !p.includes(e));
    if (!(r == null)) {
      r.mark("conflict_resolution_end", {
        source: n,
        collectionName: e,
        apply: p.length,
        drop: m.length
      });
    }
    m.forEach(e => l.push((0, h.setMutationToSyncAction)(e, E.SyncActionState.Skipped, e.actionName)));
    if (!(r == null)) {
      r.mark("apply_set_mutations_start", {
        source: n,
        collectionName: e,
        count: p.length
      });
    }
    const y = ue(p);
    if (a) {
      yield (0, o.getDbImpls)().writeSyncdLog(e, `before main loop. group count: ${y.length}`);
    }
    let S = null;
    for (let t = 0; t < y.length; t++) {
      const n = a && t <= 1;
      const r = y[t][0].actionHandler;
      const i = y[t].map(e => {
        let t;
        t = e.binarySyncData ? (0, f.default)((0, w.decodeProtobuf)(g.SyncActionDataSpec, e.binarySyncData).value, "decodeProtobuf(SyncActionDataSpec, m.binarySyncData).value") : (0, w.decodeProtobuf)(g.SyncActionValueSpec, e.binarySyncAction);
        if (S == null || S < e.timestamp) {
          S = e.timestamp;
        }
        return {
          operation: "set",
          indexParts: e.indexArr,
          value: t,
          timestamp: e.timestamp
        };
      });
      if (n) {
        yield (0, o.getDbImpls)().writeSyncdLog(e, `after deserialize. mutationsToApply length: ${i.length}`);
      }
      let u = [];
      let c = false;
      try {
        __LOG__(2)`syncd: before apply mutation batch for ${e}. mutations count: ${i.length}  ${s}`;
        u = yield r.applyMutations(i, {
          setMutationsPendingToPersist: l,
          allSupportedSetMutations: p
        }, n);
        if (n) {
          yield (0, o.getDbImpls)().writeSyncdLog(e, `after apply. result length: ${u.length}`);
        }
      } catch (t) {
        if (t instanceof v.SyncdFatalError || e === E.CollectionName.CriticalBlock) {
          throw t;
        }
        c = true;
        __LOG__(3)`synd: catching error during _applySetMutations: ${t}`;
      }
      __LOG__(2)`syncd: after apply mutation batch for ${e}  ${s}`;
      for (let e = 0; e < y[t].length; e++) {
        var T;
        var M;
        const n = c ? E.SyncActionState.Failed : u[e].actionState;
        l.push((0, h.setMutationToSyncAction)(y[t][e], n, y[t][e].actionName, c || (T = u[e].orphanModel) === null || T === undefined ? undefined : T.modelId, c || (M = u[e].orphanModel) === null || M === undefined ? undefined : M.modelType));
      }
    }
    const b = S;
    const C = b == null ? null : (0, D.daysDiff)((0, D.unixTimeMs)(), b);
    __LOG__(2)`syncd: max timestamp from recent patch: ${C != null ? C : "n/a"} days agp`;
    if (a) {
      yield (0, o.getDbImpls)().writeSyncdLog(e, `max timestamp from recent patch: ${C != null ? C : "n/a"} days ago`);
    }
    const P = l.reduce((e, t) => {
      const n = t.actionState;
      if (e[n] == null) {
        e[n] = 0;
      }
      e[n]++;
      return e;
    }, {});
    if (!(r == null)) {
      r.mark("apply_set_mutations_end", (0, i.default)({
        source: n,
        collectionName: e,
        count: p.length
      }, P));
    }
    (0, A.reportSyncdCriticalBootstrapStage)(A.SyncdCriticalBootstrapStageType.APPLIED_MUTATIONS);
    __LOG__(2)`syncd: completed apply set mutations for ${e}  ${s}`;
    return {
      setMutationsToPersist: l,
      pendingMutationsToDrop: _
    };
  })).apply(this, arguments);
}
function ie() {
  return ae.apply(this, arguments);
}
function ae() {
  return (ae = (0, a.default)(function* (e, t) {
    const {
      supportedMutations: n
    } = oe(t);
    const r = ue(n);
    __LOG__(2)`syncd: before apply remove mutations for ${e}`;
    for (let t = 0; t < r.length; t++) {
      const n = r[t][0].actionHandler;
      yield n.applyMutations(r[t].map(t => ({
        operation: "remove",
        indexParts: ce(e, t.index)
      })), {
        setMutationsPendingToPersist: [],
        allSupportedSetMutations: []
      });
    }
    __LOG__(2)`syncd: after apply remove mutations for ${e}`;
  })).apply(this, arguments);
}
function oe(e) {
  const t = e.map(e => {
    if (e.version > (0, T.maxSupportedVersion)()) {
      return {
        unsupported: e
      };
    }
    const t = ce(e.collection, e.index);
    const n = E.Actions.cast(t[0]);
    if (!n) {
      __LOG__(3)`syncd: invalid action ${t[0]}`;
      return {
        unsupported: e
      };
    }
    const r = (0, T.getActionHandler)(n);
    if (!r) {
      __LOG__(3)`syncd: no handler for action ${n}`;
      return {
        unsupported: e
      };
    }
    return {
      supported: {
        collection: e.collection,
        index: e.index,
        indexMac: e.indexMac,
        keyId: e.keyId,
        binarySyncData: e.binarySyncData,
        valueMac: e.valueMac,
        version: e.version,
        indexArr: t,
        actionName: n,
        actionHandler: r
      }
    };
  });
  const n = [];
  const r = [];
  t.map(e => {
    let {
      supported: t,
      unsupported: i
    } = e;
    if (t != null) {
      n.push(t);
    } else if (i != null) {
      r.push(i);
    }
  });
  return {
    supportedMutations: n,
    unsupportedMutations: r
  };
}
function se(e) {
  const t = e.filter(e => e.operation === _.SyncdMutation$SyncdOperation.SET);
  const n = new Set(t.map(e => e.index));
  e.filter(e => e.operation === _.SyncdMutation$SyncdOperation.REMOVE).forEach(e => {
    if (!n.has(e.index)) {
      t.push(e);
    }
  });
  return t;
}
function le(e, t) {
  const n = t.map(t => {
    if (t.version > (0, T.maxSupportedVersion)()) {
      return {
        unsupported: t
      };
    }
    const n = ce(e, t.index);
    const r = E.Actions.cast(n[0]);
    if (!r) {
      __LOG__(3)`syncd: invalid action ${n[0]}`;
      return {
        unsupported: t
      };
    }
    const i = (0, T.getActionHandler)(r);
    if (i) {
      return {
        supported: {
          collection: t.collection,
          index: t.index,
          indexMac: t.indexMac,
          keyId: t.keyId,
          timestamp: t.timestamp,
          binarySyncData: t.binarySyncData,
          valueMac: t.valueMac,
          version: t.version,
          indexArr: n,
          actionName: r,
          actionHandler: i
        }
      };
    } else {
      __LOG__(3)`syncd: no handler for action ${r}`;
      return {
        unsupported: t
      };
    }
  });
  const r = [];
  const i = [];
  n.map(e => {
    let {
      supported: t,
      unsupported: n
    } = e;
    if (t != null) {
      r.push(t);
    } else if (n != null) {
      i.push(n);
    }
  });
  return {
    supportedMutations: r,
    unsupportedMutations: i
  };
}
function ue(e) {
  return e.reduce((e, t) => {
    if (e.length !== 0 && t.actionName === e[e.length - 1][0].actionName) {
      e[e.length - 1].push(t);
    } else {
      e.push([t]);
    }
    return e;
  }, []);
}
function ce(e, t) {
  try {
    const e = JSON.parse(t);
    if (e.length < 1) {
      throw (0, l.default)();
    }
    return e;
  } catch (t) {
    (0, b.reportSyncdFatalError)(b.SyncdFatalErrorType.INVALID_ACTION_INDEX, e);
    throw new v.SyncdFatalError("invalid action index");
  }
}