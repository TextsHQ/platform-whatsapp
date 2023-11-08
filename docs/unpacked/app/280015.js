var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearSyncdData = function () {
  return (0, a.runInTransaction)({
    SyncActionStore: true,
    CollectionVersionStore: true,
    PendingMutationStore: true,
    MissingKeyStore: true,
    SyncKeyStore: true
  }, e => {
    let {
      SyncActionStore: t,
      CollectionVersionStore: n,
      PendingMutationStore: r,
      MissingKeyStore: i,
      SyncKeyStore: a
    } = e;
    return Promise.all([t.clear(), n.clear(), r.clear(), i.clear(), a.clear()]).then(() => {
      c.default.clean();
      (0, f.clearSyncKeysCache)();
    });
  });
};
exports.initializeStateMachine = function () {
  return c.default.loadStatesFromDb().then(() => G());
};
exports.logKeysInfoInIntern = function () {
  return D.apply(this, arguments);
};
exports.markCollectionsForSync = P;
exports.processOnAppResume = function () {
  return F.apply(this, arguments);
};
exports.reportWam = function () {
  return N.apply(this, arguments);
};
exports.syncBlockedCollections = function () {
  const e = c.default.getCollectionsInStateBlocked();
  __LOG__(2)`syncd: sync blocked collections: ${e}`;
  c.default.moveCollectionsToDirty(e);
  M = new Set([...Array.from(M), ...Array.from(T)]);
  __LOG__(2)`syncd: syncBlockedCollections:
\tmoving blocked collections to dirty: [${e}]
\tadding inflight collections to pending: [${Array.from(T)}]`;
  return w();
};
var i = r(require("../vendor/311504.js"));
var a = require("./819416.js");
var o = require("./377380.js");
var s = require("./822144.js");
var l = require("./986753.js");
var u = require("./526835.js");
require("./522815.js");
var c = r(require("./436269.js"));
var d = require("./122393.js");
require("./405057.js");
var p = require("./272961.js");
var f = require("./36686.js");
var _ = require("./751691.js");
var g = require("./787685.js");
var m = require("./998667.js");
var h = require("./90347.js");
var y = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = E(t);
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
function E(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (E = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const S = 3600000;
let v;
let T = new Set();
let M = new Set();
let A = false;
let b = 0;
let C = 0;
function P() {
  return O.apply(this, arguments);
}
function O() {
  return (O = (0, i.default)(function* (e, t) {
    const n = t != null ? yield I(e, t) : e;
    __LOG__(2)`syncd: marking for sync: ${n}`;
    n.forEach(e => {
      const t = c.default.getCollectionState(e);
      __LOG__(2)`syncd: ${e} state before sync: ${t}`;
      if (t === d.CollectionSyncState.UpToDate) {
        c.default.moveCollectionsToDirty([e]);
      } else if (t === d.CollectionSyncState.Dirty) {
        M = new Set([...Array.from(M), e]);
      }
    });
    yield c.default.persistToDb();
    return w();
  })).apply(this, arguments);
}
function I() {
  return R.apply(this, arguments);
}
function R() {
  return (R = (0, i.default)(function* (e, t) {
    __LOG__(2)`syncd: start filter collections: ${e}`;
    const n = yield (0, o.bulkGetCollectionVersionsInTransaction)(e);
    const r = new Map(e.map((e, t) => {
      var r;
      return [e, (r = n[t]) === null || r === undefined ? undefined : r.version];
    }));
    return e.filter(e => {
      const n = r.get(e);
      if (n == null) {
        __LOG__(2)`syncd: local version for ${e} missing; will mark for sync.`;
        return true;
      }
      const i = t.get(e);
      if (i == null) {
        __LOG__(2)`syncd: server version for ${e} missing; will mark for sync.`;
        return true;
      } else if (n < i) {
        __LOG__(2)`syncd: local version (${n}) for ${e} less than server version (${i}); will mark for sync.`;
        return true;
      } else {
        __LOG__(2)`syncd: local version (${n})for ${e} >= server version (${i}); will not mark for sync.`;
        return false;
      }
    });
  })).apply(this, arguments);
}
function N() {
  return (N = (0, i.default)(function* () {
    const e = yield (0, u.countSyncActionsInTransaction)();
    y.setStoredMutationCount(e);
    const t = yield (0, u.getSyncActionsByActionStatesInTransaction)([d.SyncActionState.Malformed]);
    y.setInvalidActionCount(t.length);
    const n = yield (0, u.getSyncActionsByActionStatesInTransaction)([d.SyncActionState.Unsupported]);
    y.setUnsupportedActionCount(n.length);
    const r = yield (0, s.getMissingKeyCountTransaction)();
    y.setMissingKeyCount(r);
  })).apply(this, arguments);
}
function D() {
  return (D = (0, i.default)(function* () {})).apply(this, arguments);
}
function w() {
  return L.apply(this, arguments);
}
function L() {
  return (L = (0, i.default)(function* () {
    if ((0, p.isSyncdDisabled)()) {
      return Promise.resolve();
    }
    const e = c.default.getCollectionsInStateDirty();
    __LOG__(2)`syncd: dirty collections: ${e}`;
    const t = new Set(e.filter(e => !T.has(e)));
    if (t.size === 0) {
      __LOG__(2)`syncd: no collections to sync`;
      return Promise.resolve();
    }
    let n = [];
    try {
      T = new Set([...Array.from(T), ...Array.from(t)]);
      __LOG__(2)`syncd: initiate server sync`;
      n = yield (0, h.serverSync)(Array.from(t));
      __LOG__(2)`syncd: server sync successful`;
      const e = n.filter(e => e.state === d.CollectionState.ErrorRetry);
      if (e.length > 0) {
        C = e[0].serverBackoff || 0;
        b = 0;
      }
      U(n);
    } catch (e) {
      __LOG__(2)`syncd: exception during sync(): ${e}`;
      c.default.moveCollectionsToFiniteRetry(Array.from(t));
    } finally {
      __LOG__(2)`syncd: cleanup after sync()`;
      c.default.persistToDb();
      T = new Set(Array.from(T).filter(e => !t.has(e)));
      G();
      yield (0, a.getDbImpls)().handleSyncCompleted(n);
    }
  })).apply(this, arguments);
}
function k() {
  if ((0, p.isSyncdDisabled)()) {
    return;
  }
  const e = new Set(c.default.getCollectionsInStateRetry());
  var t;
  var n;
  if (e.size !== 0) {
    v = setTimeout((0, i.default)(function* () {
      try {
        A = true;
        b += 1;
        __LOG__(2)`syncd: initiate server sync retry`;
        const t = yield (0, h.serverSync)(Array.from(e));
        __LOG__(2)`syncd: server sync retry successful`;
        U(t);
      } catch (t) {
        __LOG__(2)`syncd: exception during handleRetry(): ${t}`;
        c.default.moveCollectionsToFiniteRetry(Array.from(e));
      } finally {
        __LOG__(2)`syncd: cleanup after handleRetry()`;
        (function () {
          const e = c.default.getExpiredCollections();
          if (e.length > 0) {
            c.default.moveCollectionsToFatal(e);
            __LOG__(4, undefined, new Error(), true)`syncd: fatal error: expired collections`;
            SEND_LOGS("syncd: fatal error: expired collections");
            (0, g.reportSyncdFatalError)(g.SyncdFatalErrorType.TOO_MANY_INTERNAL_SERVER_ERRORS_IN_7D);
          }
        })();
        c.default.persistToDb();
        A = false;
        G();
      }
    }), (t = b, n = C, Math.min(Math.max(2 ** t * 1000, n), S)));
  }
}
function G() {
  __LOG__(2)`syncd: state machine tick`;
  if (c.default.getCollectionsInStateDirty().length > 0) {
    M = new Set(Array.from(M).filter(e => T.has(e)));
    w();
  }
  const e = c.default.getCollectionsInStateRetry();
  if (e.length > 0) {
    if (A) {
      return void __LOG__(2)`syncd: retry is in flight`;
    }
    if (v != null) {
      clearTimeout(v);
    }
    M = new Set(Array.from(M).filter(t => !e.includes(t)));
    k();
  }
  if (c.default.getCollectionsInStateFatal().length > 0) {
    (0, a.getDbImpls)().handleSyncdFatal({
      collections: c.default.getCollectionsInStateFatal()
    });
  }
}
function U(e) {
  return e.forEach(e => e.state !== d.CollectionState.Success || M.has(e.name) ? e.state === d.CollectionState.ErrorRetry ? ((0, _.reportSyncdCriticalBootstrapStage)(_.SyncdCriticalBootstrapStageType.ENTERED_RETRY_MODE), c.default.moveCollectionsToFiniteRetry([e.name])) : e.state === d.CollectionState.ErrorFatal ? c.default.moveCollectionsToFatal([e.name]) : e.state !== d.CollectionState.Blocked || M.has(e.name) ? undefined : c.default.moveCollectionsToBlocked([e.name]) : c.default.moveCollectionsToUpToDate([e.name]));
}
function x() {
  return B.apply(this, arguments);
}
function B() {
  return (B = (0, i.default)(function* () {
    __LOG__(2)`syncd: syncPendingMutationsAndBlockedCollections`;
    const e = yield (0, l.getAllSyncPendingMutationsInTransaction)();
    const t = c.default.getCollectionsInStateBlocked();
    c.default.moveCollectionsToDirty(t);
    const n = e.map(e => e.collection).concat(t);
    if (n.length > 0) {
      __LOG__(2)`syncd: syncPendingMutationsAndBlockedCollections: [${n}]`;
      P(n);
    }
  })).apply(this, arguments);
}
function F() {
  return (F = (0, i.default)(function* () {
    yield (0, m.applyAllOrphansAndUnsupported)();
    __LOG__(2)`syncd: syncing pending mutations and blocked collections due to app resume`;
    yield x();
  })).apply(this, arguments);
}