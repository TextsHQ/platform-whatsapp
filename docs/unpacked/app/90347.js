var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serverSync = function () {
  return S.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./819416.js");
var o = require("./250281.js");
var s = require("./377380.js");
var l = require("./986753.js");
var u = require("./53648.js");
var c = require("./122393.js");
var d = require("./256764.js");
var p = require("./751691.js");
var f = require("./787685.js");
var _ = require("./220816.js");
var g = r(require("./948222.js"));
var m = require("./65384.js");
var h = function (e, t) {
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
var y = require("./632157.js");
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
function S() {
  return (S = (0, i.default)(function* (e) {
    yield O(e, "start serverSync");
    let t = [];
    let n = [...e];
    let r = 0;
    for (; (r < 5 || n.length > 0 && r < 500) && n.length !== 0;) {
      const {
        doneCollections: e,
        refetchCollections: i
      } = yield v(n);
      yield Promise.all(e.map(e => O([e.name], `done collection, state: ${e.state}`)));
      n = i;
      t = t.concat(e);
      r++;
    }
    if (n.length > 0) {
      yield O(n, "error: max iterations");
      __LOG__(4, undefined, new Error(), true, ["syncd"])`syncd: reached max iterations for collections: ${n}`;
      SEND_LOGS("syncd: max iteration", 1, "syncd");
      t = t.concat(n.map(e => ({
        state: c.CollectionState.ErrorRetry,
        name: e
      })));
    }
    return t;
  })).apply(this, arguments);
}
function v() {
  return T.apply(this, arguments);
}
function T() {
  return (T = (0, i.default)(function* (e) {
    if (e.length === 0) {
      return {
        doneCollections: [],
        refetchCollections: []
      };
    }
    yield C(e);
    try {
      const {
        collectionDetails: t,
        localCollectionVersions: n,
        collectionsToUpload: r
      } = yield M(e);
      if (r.length > 0) {
        __LOG__(2)`syncd: deferred local mutation upload for ${r}`;
      }
      __LOG__(2)`syncd: local collection versions:`;
      n.forEach((e, t) => {
        __LOG__(2)`\n\t${t} v${e != null ? e : "(undefined)}"}`;
      });
      const a = [];
      const o = [];
      t.forEach(e => {
        switch (e.state) {
          case c.CollectionState.ErrorRetry:
          case c.CollectionState.ErrorFatal:
          case c.CollectionState.Blocked:
            return void o.push(e);
          default:
            a.push(e);
        }
        if (!(e.state !== c.CollectionState.Conflict && e.state !== c.CollectionState.ConflictHasMore)) {
          h.incConflict();
        }
      });
      __LOG__(2)`syncd: start apply collections: ${a.map(e => e.name)}`;
      const d = new _.SyncdEventFlow();
      const p = yield Promise.all(a.map(e => (0, u.applyAppStateSyncResponse)(e, n.get(e.name), d)));
      d.end();
      __LOG__(2)`syncd: end apply collections: ${a.map(e => e.name)}`;
      const f = [];
      yield Promise.all(p.map(function () {
        var e = (0, i.default)(function* (e) {
          if (e.state === c.CollectionState.Conflict) {
            if ((yield (0, l.getSyncPendingMutationsByCollectionInTransaction)(e.name)).length > 0) {
              f.push(e.name);
            } else {
              e.state = c.CollectionState.Success;
              o.push(e);
            }
          } else if (e.state === c.CollectionState.ConflictHasMore || e.state === c.CollectionState.SuccessHasMore || e.state === c.CollectionState.Success && r.some(t => t === e.name)) {
            f.push(e.name);
          } else {
            o.push(e);
            yield (0, s.updateLastSuccessfulSyncEndTimeInTransaction)(e.name);
          }
        });
        return function () {
          return e.apply(this, arguments);
        };
      }()));
      return {
        doneCollections: o,
        refetchCollections: f
      };
    } catch (t) {
      if (t instanceof d.SyncdFatalError) {
        __LOG__(4, undefined, new Error(), true)`syncd: fatal error: syncd global throws ${t.message}`;
        SEND_LOGS(`syncd: fatal error: syncd global throws ${t.message}`);
        yield O(e, `moving to fatal state: ${t.name} ${t.message} ${t.stack}`);
        return {
          doneCollections: e.map(e => ({
            state: c.CollectionState.ErrorFatal,
            name: e
          })),
          refetchCollections: []
        };
      }
      __LOG__(3, undefined, undefined, true)`syncd: retryable error: syncd global throws ${t.message}`;
      SEND_LOGS(`syncd: retryable error: syncd global throws ${t.message}`);
      yield O(e, `retryable error: ${t}`);
      return {
        doneCollections: e.map(e => ({
          state: c.CollectionState.ErrorRetry,
          name: e,
          serverBackoff: t.errorBackoff
        })),
        refetchCollections: []
      };
    }
  })).apply(this, arguments);
}
function M() {
  return A.apply(this, arguments);
}
function A() {
  return (A = (0, i.default)(function* (e) {
    const {
      syncIqNode: t,
      collectionWithPendingMutationsIds: n,
      collectionWithEncryptedMutations: r,
      localCollectionVersions: i,
      collectionsToSkip: a
    } = yield (0, g.default)(e);
    (0, p.reportSyncdCriticalBootstrapStage)(p.SyncdCriticalBootstrapStageType.REQUEST_BUILT);
    __LOG__(2)`syncd: sending sync request for collections: ${e.map(e => {
      var t;
      var r;
      var a;
      return `\n\t${e} v${(t = i.get(e)) !== null && t !== undefined ? t : "(undefined)"} ${((r = (a = n.get(e)) === null || a === undefined ? undefined : a.length) !== null && r !== undefined ? r : 0) > 0 && i.get(e) != null ? " with local changes" : ""}`;
    })}`;
    yield O(e, "before sendIq");
    const s = yield (0, o.deprecatedSendIq)(t, m.syncResponseParser);
    __LOG__(2)`syncd: completed network operation for collections: ${e}`;
    (0, p.reportSyncdCriticalBootstrapStage)(p.SyncdCriticalBootstrapStageType.RESPONSE_RECEIVED);
    if (s.success) {
      (0, p.reportSyncdCriticalBootstrapStage)(p.SyncdCriticalBootstrapStageType.RESPONSE_PARSED_VALID);
      yield O(e, "after sendIq success");
      const t = s.result;
      __LOG__(2)`syncd: received sync response for collections: ${t.map(e => {
        let t = `\n${e.name}`;
        if (e.version != null) {
          t += `\n\tupdated to version ${e.version}`;
        }
        if (e.snapshot != null) {
          t += "\n\tcontains snapshot";
        }
        if (e.patches != null) {
          t += `\n\tcontains ${e.patches.length} patches`;
        }
        return t;
      })}`;
      t.forEach(e => {
        const t = n.get(e.name);
        if (t) {
          e.syncedPendingMutationsId = t;
        }
        const i = r.get(e.name);
        if (i) {
          e.syncedEncryptedMutations = i;
        }
      });
      return {
        collectionDetails: t,
        localCollectionVersions: i,
        collectionsToUpload: a
      };
    }
    const {
      errorCode: l,
      errorText: u,
      errorBackoff: c
    } = s;
    throw b(l, u, c);
  })).apply(this, arguments);
}
function b(e, t, n) {
  switch (e) {
    case 400:
      (0, f.reportSyncdFatalError)(f.SyncdFatalErrorType.XMPP_BAD_REQUEST_GLOBAL_ERROR);
      return new d.SyncdFatalError(t);
    case 404:
      (0, f.reportSyncdFatalError)(f.SyncdFatalErrorType.XMPP_NOT_FOUND_GLOBAL_ERROR);
      return new d.SyncdFatalError(t);
    case 405:
      (0, f.reportSyncdFatalError)(f.SyncdFatalErrorType.XMPP_BAD_METHOD_GLOBAL_ERROR);
      return new d.SyncdFatalError(t);
    case 406:
      (0, f.reportSyncdFatalError)(f.SyncdFatalErrorType.XMPP_NOT_ACCEPTABLE_GLOBAL_ERROR);
      return new d.SyncdFatalError(t);
    default:
      return new d.SyncdRetryableError(t, n);
  }
}
function C() {
  return P.apply(this, arguments);
}
function P() {
  return (P = (0, i.default)(function* (e) {
    try {
      const t = (yield (0, s.bulkGetCollectionVersionsInTransaction)(e)).filter(Boolean).map(e => {
        var t;
        const n = ((t = e.lastSyncAttemptStartTimes) !== null && t !== undefined ? t : []).slice(-4);
        return {
          collection: e.collection,
          lastSyncAttemptStartTimes: [...n, (0, y.unixTimeMs)()]
        };
      });
      yield (0, s.bulkSetCollectionSyncAttemptStartTimesInTransaction)(t);
    } catch (e) {
      __LOG__(4, undefined, new Error(), true, ["syncd"])`syncd: cannot log collection sync start: ${e}`;
      SEND_LOGS("syncd: cannot log collection sync start", 1, "syncd");
    }
  })).apply(this, arguments);
}
function O(e, t) {
  return Promise.all(e.map(e => (0, a.getDbImpls)().writeSyncdLog(e, t)));
}