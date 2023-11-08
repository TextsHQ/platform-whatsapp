var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkLtHash = w;
exports.computeLtHash = N;
exports.computeLtHashAndValidatePatch = function () {
  return M.apply(this, arguments);
};
exports.computeLtHashAndValidateSnapshot = function () {
  return T.apply(this, arguments);
};
exports.computeOutgoingSnapshotAndPatchMacs = function () {
  return R.apply(this, arguments);
};
exports.logMacsInSnapshot = x;
var i = r(require("../vendor/311504.js"));
var a = require("./819416.js");
var o = require("./570505.js");
var s = require("./31549.js");
var l = require("./377380.js");
var u = require("./526835.js");
var c = require("./795297.js");
var d = require("./679905.js");
var p = require("./122393.js");
var f = require("./216728.js");
var _ = require("./405057.js");
var g = require("./256764.js");
var m = require("./36686.js");
var h = require("./347197.js");
var y = require("./787685.js");
var E = require("./220816.js");
function S(e, t) {
  let n = !(arguments.length > 2 && arguments[2] !== undefined) || arguments[2];
  const r = typeof e == "string" ? e : (0, _.arrayBufferToHexPadded)(e);
  const i = typeof t == "string" ? t : (0, _.arrayBufferToHexPadded)(t);
  const a = n ? -16 : 0;
  return `${r.slice(a)}:${i.slice(a)}`;
}
const v = new TextDecoder();
function T() {
  return (T = (0, i.default)(function* (e, t) {
    const {
      mac: n,
      version: r,
      keyId: i,
      records: a
    } = t;
    const s = yield (0, m.getKeyData)(i.id);
    if (!s) {
      throw new g.SyncdMissingKeyError();
    }
    const l = new Map(a.map(e => [(0, _.arrayBufferToHexPadded)(e.index.blob), (0, f.valueMacFromIndexAndValueCipherText)(e.value.blob)]));
    __LOG__(2)`syncd:
${e} snapshot macsToAdd:
    ${Array.from(l.entries()).map(e => {
      let [t, n] = e;
      return S(t, n);
    }).join("\n\t")}`;
    const u = yield o.LT_HASH_ANTI_TAMPERING.add(o.EMPTY_LT_HASH, Array.from(l.values()));
    const {
      snapshotMacKey: c
    } = yield (0, f.generateEncryptionKeys)(s);
    const d = (0, _.to64BitNetworkOrder)(r.version);
    const p = (0, _.toUtf8)(e).buffer;
    __LOG__(2)`syncd: validating snapshot mac for ${e} snapshot v${r.version}:
ltHash: ${(0, _.arrayBufferToHexPadded)(u)}
encoded version: ${(0, _.arrayBufferToHexPadded)(d)}
encoded collection: ${(0, _.arrayBufferToHexPadded)(p)}
expected snapshotMAC: ${(0, _.arrayBufferToHexPadded)(n)}`;
    yield C(e, n, c, u, d, p, true, a.length, t.version.version);
    return u;
  })).apply(this, arguments);
}
function M() {
  return (M = (0, i.default)(function* (e, t, n) {
    const {
      version: r,
      mutations: a,
      snapshotMac: o,
      patchMac: s,
      keyId: l
    } = t;
    const u = l.id;
    const c = yield (0, m.getKeyData)(u);
    if (!c) {
      throw new g.SyncdMissingKeyError();
    }
    const {
      snapshotMacKey: p,
      patchMacKey: y
    } = yield (0, f.generateEncryptionKeys)(c);
    const E = a.map(e => ({
      operation: e.operation,
      indexMac: e.record.index.blob,
      valueMac: (0, f.valueMacFromIndexAndValueCipherText)(e.record.value.blob)
    }));
    const v = yield N(e, E, n);
    const T = (0, _.to64BitNetworkOrder)(r.version);
    const M = (0, _.toUtf8)(e).buffer;
    __LOG__(2)`syncd: validating snapshot and patch mac for ${e} v${r.version}:
expected snapshotMAC: ${(0, _.arrayBufferToHexPadded)(o)}
expected patchMAC: ${(0, _.arrayBufferToHexPadded)(s)}
encoded version: ${(0, _.arrayBufferToHexPadded)(T)}
encoded collection: ${(0, _.arrayBufferToHexPadded)(M)}
key ID: ${(0, _.arrayBufferToHexPadded)((0, h.fromSyncKeyId)(u))}`;
    try {
      yield O(e, s, y, o, E.map(e => e.valueMac), T, M, a.length, r.version);
      yield C(e, o, p, v, T, M, false, a.length, r.version);
    } catch (e) {
      yield function () {
        return A.apply(this, arguments);
      }();
      throw e;
    }
    return v;
    function A() {
      return (A = (0, i.default)(function* () {
        const t = yield x(e, false);
        const n = new Map(t.map(e => {
          let {
            indexMac: t,
            valueMac: n
          } = e;
          return [(0, _.arrayBufferToHexPadded)(t), (0, _.arrayBufferToHexPadded)(n)];
        }));
        __LOG__(2)`syncd: error on incoming records:
\t${E.map(e => {
          let {
            operation: t,
            indexMac: r,
            valueMac: i
          } = e;
          return `${t === d.SyncdMutation$SyncdOperation.SET ? "set" : "remove"} | ${S(r, i, false)} | ${n.has((0, _.arrayBufferToHexPadded)(r)) ? "found" : "did not find"} indexMAC in the above logged macs`;
        }).join("\n\t")}`;
      })).apply(this, arguments);
    }
  })).apply(this, arguments);
}
function A() {
  return b.apply(this, arguments);
}
function b() {
  return (b = (0, i.default)(function* (e, t) {
    const n = yield (0, l.getCollectionVersionInTransaction)(e).then(e => {
      var t;
      if ((t = e == null ? undefined : e.version) !== null && t !== undefined) {
        return t;
      } else {
        return 0;
      }
    });
    if (n !== t - 1) {
      const r = n > t - 1 ? "greater-than-expected" : "less-than-expected";
      __LOG__(3, undefined, undefined, true)`syncd: ${e} received patch v${t} !== latest local version (v${n}) + 1`;
      SEND_LOGS(`syncd-version-check-error-local-version-${r}`);
      throw new g.SyncdRetryableError(`syncd-version-check-error-local-version-${r}`);
    }
    const r = yield (0, l.getCollectionVersionLtHashInTransaction)(e);
    if ((0, s.arrayBuffersEqual)(r, o.EMPTY_LT_HASH) && t !== 1) {
      __LOG__(3, undefined, undefined, true)`syncd: empty local lthash found when processing ${e} patch v${t}`;
      SEND_LOGS("syncd-empty-lthash-on-mac-mismatch");
      throw new g.SyncdRetryableError("empty lthash");
    }
  })).apply(this, arguments);
}
function C() {
  return P.apply(this, arguments);
}
function P() {
  return (P = (0, i.default)(function* (e, t, n, r, i, o, u, c, d) {
    var p;
    const _ = (0, a.getConfig)().syncdShouldNotFatalOnSnapshotMacMismatchInPatches() && !u;
    const m = (p = yield (0, l.getIsCollectionInMacMismatchFatalInTransaction)(e)) !== null && p !== undefined && p;
    if (_ && m) {
      return void __LOG__(2)`syncd: collection ${e} is already in snapshot mac mismatch so not checking again`;
    }
    const h = yield (0, f.generateSnapshotMac)(n, r, i, o);
    if (!(0, s.arrayBuffersEqual)(h, t)) {
      __LOG__(3, undefined, undefined, true)`syncd: unable to validate snapshot mac.`;
      SEND_LOGS("syncd: unable to validate snapshot mac.");
      if (!u) {
        yield A(e, d);
      }
      yield (0, a.getDbImpls)().writeSyncdLog(e, "failed validate snapshot mac");
      const t = yield w(e);
      const n = u ? y.SyncdFatalErrorType.SNAPSHOT_MAC_MISMATCH_IN_SNAPSHOT : y.SyncdFatalErrorType.SNAPSHOT_MAC_MISMATCH_IN_PATCH;
      (0, y.reportSyncdFatalError)(n, e, c, d, !_, t);
      if (_) {
        yield (0, l.updateIsCollectionInMacMismatchFatalInTransaction)(e);
        return void __LOG__(2)`syncd: skip fatal after snapshot mac mismatch for collection ${e}`;
      }
      throw new g.SyncdFatalError("unable to validate snapshot mac");
    }
  })).apply(this, arguments);
}
function O() {
  return I.apply(this, arguments);
}
function I() {
  return (I = (0, i.default)(function* (e, t, n, r, i, o, l, u, c) {
    const d = yield (0, f.generatePatchMac)(n, r, i, o, l);
    if (!(0, s.arrayBuffersEqual)(d, t)) {
      yield A(e, c);
      yield (0, a.getDbImpls)().writeSyncdLog(e, "failed validate patch mac");
      (0, y.reportSyncdFatalError)(y.SyncdFatalErrorType.MAC_MISMATCH_PATCH, e, u, c);
      __LOG__(3, undefined, undefined, true)`syncd: unable to validate patch mac.`;
      SEND_LOGS("syncd: unable to validate patch mac.");
      throw new g.SyncdFatalError("unable to validate patch mac");
    }
  })).apply(this, arguments);
}
function R() {
  return (R = (0, i.default)(function* (e, t, n, r) {
    const i = (yield (0, l.getCollectionVersionInTransaction)(e).then(e => {
      var t;
      if ((t = e == null ? undefined : e.version) !== null && t !== undefined) {
        return t;
      } else {
        return p.DEFAULT_COLLECTION_VERSION;
      }
    })) + 1;
    const {
      patchMacKey: a,
      snapshotMacKey: o
    } = yield (0, f.generateEncryptionKeys)(r);
    const s = (0, _.to64BitNetworkOrder)(i);
    const u = (0, _.toUtf8)(e).buffer;
    const c = yield (0, f.generateSnapshotMac)(o, t, s, u);
    const d = yield (0, f.generatePatchMac)(a, c, n.map(e => e.valueMac), s, u);
    __LOG__(2)`syncd: computing snapshot and patch macs for outgoing patch ${e} v${i}:
encoded version: ${(0, _.arrayBufferToHexPadded)(s)}
encoded collection: ${(0, _.arrayBufferToHexPadded)(u)}
snapshotMAC: ${(0, _.arrayBufferToHexPadded)(c)}
patchMAC: ${(0, _.arrayBufferToHexPadded)(d)}`;
    return {
      snapshotMac: c,
      patchMac: d
    };
  })).apply(this, arguments);
}
function N() {
  return D.apply(this, arguments);
}
function D() {
  return (D = (0, i.default)(function* (e, t, n) {
    const r = yield (0, l.getCollectionVersionLtHashInTransaction)(e);
    const s = yield G(t.map(e => e.indexMac));
    const u = new Map();
    const p = new Map();
    const f = new Map();
    yield (0, c.promiseEach)(t, function () {
      var t = (0, i.default)(function* (t) {
        const {
          indexMac: r,
          valueMac: i,
          operation: o
        } = t;
        const l = v.decode(r);
        const c = s.get(l);
        if (c) {
          if (o === d.SyncdMutation$SyncdOperation.REMOVE) {
            p.set((0, _.arrayBufferToHexPadded)(r), c);
          } else {
            f.set((0, _.arrayBufferToHexPadded)(r), c);
          }
        } else if (o === d.SyncdMutation$SyncdOperation.REMOVE) {
          const t = yield function (e) {
            if (n == null) {
              return Promise.resolve(null);
            }
            return n(e);
          }(r);
          var g;
          var m;
          if (t != null) {
            p.set((0, _.arrayBufferToHexPadded)(r), t);
            __LOG__(3, undefined, undefined, true, ["non-sad"])`syncd: had to use fallbackQueryForValueMac in collection ${e} for platform ${(g = (0, a.getConfig)().primaryPlatform()) !== null && g !== undefined ? g : "[empty]"}: ${(0, _.arrayBufferToHexPadded)(r).slice(-16)}
}`;
            SEND_LOGS("syncd: fallback query", 1, "non-sad");
          } else {
            (0, E.reportSyncdCriticalEvent)(E.SyncdCriticalEventType.MISSING_MUTATION_TO_REMOVE, e);
            __LOG__(3)`syncd: missing indexMAC in sync-actions table for REMOVE mutation in collection ${e} for platform ${(m = (0, a.getConfig)().primaryPlatform()) !== null && m !== undefined ? m : "[empty]"}:
${(0, _.arrayBufferToHexPadded)(r).slice(-16)}`;
          }
        }
        if (o === d.SyncdMutation$SyncdOperation.SET) {
          u.set((0, _.arrayBufferToHexPadded)(r), i);
        }
      });
      return function () {
        return t.apply(this, arguments);
      };
    }());
    const g = yield o.LT_HASH_ANTI_TAMPERING.subtractThenAdd(r, Array.from(u.values()), Array.from(p.values()).concat(Array.from(f.values())));
    __LOG__(2)`syncd: computing ltHash for ${e}:
currentLtHash: ${(0, _.arrayBufferToHexPadded)(r)}
macsToAdd:
    ${Array.from(u.entries()).map(e => {
      let [t, n] = e;
      return S(t, n);
    }).join("\n\t")}
macsToRemove:
    ${Array.from(p.entries()).map(e => {
      let [t, n] = e;
      return S(t, n);
    }).join("\n\t")}
macsToOverwrite (also remove):
    ${Array.from(f.entries()).map(e => {
      let [t, n] = e;
      return S(t, n);
    }).join("\n\t")}
newLtHash: ${(0, _.arrayBufferToHexPadded)(g)}`;
    return g;
  })).apply(this, arguments);
}
function w() {
  return L.apply(this, arguments);
}
function L() {
  return (L = (0, i.default)(function* (e) {
    const t = yield (0, a.runInTransaction)({
      SyncActionStore: true,
      CollectionVersionStore: true
    }, function () {
      var t = (0, i.default)(function* (t) {
        let {
          SyncActionStore: n,
          CollectionVersionStore: r
        } = t;
        const a = e == null ? yield r.getAll() : [yield r.get(e)];
        return Promise.all(a.filter(Boolean).map(function () {
          var e = (0, i.default)(function* (e) {
            let {
              collection: t,
              ltHash: r
            } = e;
            return {
              collection: t,
              ltHash: r,
              mutations: yield n.getByCollections([t])
            };
          });
          return function () {
            return e.apply(this, arguments);
          };
        }()));
      });
      return function () {
        return t.apply(this, arguments);
      };
    }());
    let n = true;
    yield Promise.all(t.map(function () {
      var e = (0, i.default)(function* (e) {
        let {
          collection: t,
          ltHash: r,
          mutations: i
        } = e;
        const a = yield k(i);
        if (!(0, s.arrayBuffersEqual)(r, a)) {
          n = false;
          __LOG__(4, true, new Error(), true)`syncd: failed LtHash check for ${t}`;
          SEND_LOGS("LtHash check failed");
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    }()));
    return n;
  })).apply(this, arguments);
}
function k(e) {
  const t = new Map(e.map(e => [(0, _.arrayBufferToHexPadded)(e.indexMac), e.valueMac]));
  return o.LT_HASH_ANTI_TAMPERING.add(o.EMPTY_LT_HASH, Array.from(t.values()));
}
function G() {
  return U.apply(this, arguments);
}
function U() {
  return (U = (0, i.default)(function* (e) {
    const t = yield (0, u.getSyncActionsByIndexMacsInTransaction)(e);
    return new Map(t.map(e => [v.decode(e.indexMac), e.valueMac]));
  })).apply(this, arguments);
}
function x() {
  return B.apply(this, arguments);
}
function B() {
  return (B = (0, i.default)(function* (e) {
    let t = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
    const n = t ? 20 : 1;
    __LOG__(2)`syncd: logMacs: ${e}: prepare`;
    const [r, i] = yield (0, a.runInTransaction)({
      SyncActionStore: true,
      CollectionVersionStore: true
    }, t => {
      let {
        SyncActionStore: n,
        CollectionVersionStore: r
      } = t;
      return Promise.all([r.get(e).then(e => e == null ? undefined : e.version), n.getByCollections([e])]);
    });
    __LOG__(2)`syncd: current snapshot ${e} v${r} with ${i.length} mutations:`;
    if (t && i.length > 100) {
      return i;
    }
    const o = i.reduce((e, r, i) => {
      if (i % n == 0) {
        e.push("");
      }
      e[e.length - 1] += S(r.indexMac, r.valueMac, t) + " | ";
      return e;
    }, []);
    o.forEach(e => __LOG__(2)`|${e}`);
    return i;
  })).apply(this, arguments);
}