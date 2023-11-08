var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._generateMutationsToUpload = B;
exports.buildDeleteAllIqNode = function () {
  return P((0, M.wap)("delete_all_data", null));
};
exports.buildSyncIqNode = function () {
  return C.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./417405.js");
var o = require("./819416.js");
var s = require("./377380.js");
var l = require("./526835.js");
var u = require("./418987.js");
var c = require("./815612.js");
var d = require("./679905.js");
var p = require("./291774.js");
var f = require("./122393.js");
var _ = require("./405057.js");
var g = require("./826651.js");
var m = require("./989329.js");
var h = require("./840266.js");
var y = require("./347197.js");
var E = require("./887659.js");
var S = require("./212309.js");
var v = require("./507809.js");
var T = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = b(t);
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
var M = require("./716358.js");
var A = r(require("./765305.js"));
function b(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (b = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function C() {
  return (C = (0, i.default)(function* (e) {
    const {
      collectionNodes: t,
      collectionWithEncryptedMutations: n,
      localCollectionVersions: r,
      collectionsToSkip: i
    } = yield O(e);
    return {
      syncIqNode: P((0, M.wap)("sync", null, t)),
      collectionWithEncryptedMutations: n,
      localCollectionVersions: r,
      collectionsToSkip: i
    };
  })).apply(this, arguments);
}
function P(e) {
  return (0, M.wap)("iq", {
    to: M.S_WHATSAPP_NET,
    xmlns: "w:sync:app:state",
    type: "set",
    id: (0, M.generateId)()
  }, e);
}
function O() {
  return I.apply(this, arguments);
}
function I() {
  return (I = (0, i.default)(function* (e) {
    __LOG__(2)`syncd: start _buildCollectionNodes`;
    const t = [];
    const n = function () {
      var e = (0, i.default)(function* (e, n) {
        const r = yield (0, s.getCollectionVersionInTransaction)(e).then(e => e == null ? undefined : e.version);
        let i;
        let a;
        if (n != null && n.length > 0) {
          if (r == null) {
            __LOG__(2)`syncd: skipping ${e} in sync iq patch because initial full sync
is incomplete`;
            t.push(e);
          } else {
            const {
              patchNode: t,
              encryptedMutations: r
            } = yield R(e, n);
            i = t;
            a = r;
          }
        }
        return {
          collection: e,
          version: r,
          patchNode: i,
          encryptedMutations: a
        };
      });
      return function () {
        return e.apply(this, arguments);
      };
    }();
    const r = new Map();
    const a = new Map();
    const o = [];
    e.forEach((e, t) => o.push(n(t, e)));
    const l = (yield Promise.all(o)).map(e => {
      const {
        collection: t,
        version: n,
        patchNode: i,
        encryptedMutations: o
      } = e;
      if (o) {
        a.set(t, o);
      }
      r.set(t, n);
      return (0, M.wap)("collection", {
        name: (0, M.CUSTOM_STRING)(t),
        version: (0, M.INT)(n != null ? n : f.DEFAULT_COLLECTION_VERSION),
        return_snapshot: n === undefined ? "true" : "false"
      }, i);
    });
    __LOG__(2)`syncd: end _buildCollectionNodes`;
    return {
      collectionNodes: l,
      collectionWithEncryptedMutations: a,
      localCollectionVersions: r,
      collectionsToSkip: t
    };
  })).apply(this, arguments);
}
function R() {
  return N.apply(this, arguments);
}
function N() {
  return (N = (0, i.default)(function* (e, t) {
    const n = yield (0, m.getActiveKey)(!D(t));
    const r = (yield B(e, t, n)).map(e => (0, g.encryptMutation)(e, n));
    const a = yield Promise.all(r);
    const s = a.map(e => ({
      indexMac: e.indexMac,
      valueMac: e.valueMac,
      operation: e.operation
    }));
    const l = yield (0, p.computeLtHash)(e, s);
    const {
      snapshotMac: u,
      patchMac: c
    } = yield (0, p.computeOutgoingSnapshotAndPatchMacs)(e, l, a, n.keyData);
    const d = a.map(e => x(e.keyId, e.operation, e.indexMac, e.indexAndValueCipherText));
    const f = U(d);
    const _ = function () {
      var e = (0, i.default)(function* () {
        const e = yield (0, o.getDbImpls)().uploadSyncExternalPatch(f);
        return k(yield w(e, f), n.keyId, u, c);
      });
      return function () {
        return e.apply(this, arguments);
      };
    }();
    let h;
    if ((0, E.exceedInlineMutationCount)(d)) {
      h = yield _();
    } else {
      h = G(d, n.keyId, u, c);
      if ((0, E.exceedPatchProtobufSize)(h)) {
        h = yield _();
      }
    }
    return {
      patchNode: (0, M.wap)("patch", null, h),
      encryptedMutations: a
    };
  })).apply(this, arguments);
}
function D(e) {
  return (0, o.getConfig)().logoutInProgress() && e.some(e => JSON.parse(e.index)[0] === f.Actions.Sentinel);
}
function w() {
  return L.apply(this, arguments);
}
function L() {
  return (L = (0, i.default)(function* (e, t) {
    const {
      mediaKey: n,
      directPath: r,
      encFilehash: i,
      handle: o
    } = e;
    const s = yield (0, c.calculateFilehash)(t);
    return {
      mediaKey: n,
      directPath: r,
      handle: o,
      fileSizeBytes: t.byteLength,
      fileSha256: (0, a.decodeB64)(s),
      fileEncSha256: i
    };
  })).apply(this, arguments);
}
function k(e, t, n, r) {
  const i = (0, o.getConfig)().syncdPatchDeviceIndexIncluded() ? (0, u.extractDeviceId)((0, o.getMyDeviceJid)()) : undefined;
  return (0, v.encodeSyncdPatch)({
    keyId: {
      id: (0, y.fromSyncKeyId)(t)
    },
    externalMutations: e,
    snapshotMac: n,
    patchMac: r,
    deviceIndex: i
  });
}
function G(e, t, n, r) {
  const i = (0, o.getConfig)().syncdPatchDeviceIndexIncluded() ? (0, u.extractDeviceId)((0, o.getMyDeviceJid)()) : undefined;
  return (0, v.encodeSyncdPatch)({
    keyId: {
      id: (0, y.fromSyncKeyId)(t)
    },
    mutations: e,
    snapshotMac: n,
    patchMac: r,
    deviceIndex: i
  });
}
function U(e) {
  return (0, v.encodeSyncdMutations)({
    mutations: e
  });
}
function x(e, t, n, r) {
  return {
    operation: t,
    record: {
      keyId: {
        id: (0, y.fromSyncKeyId)(e)
      },
      index: {
        blob: n
      },
      value: {
        blob: r
      }
    }
  };
}
function B() {
  return F.apply(this, arguments);
}
function F() {
  return (F = (0, i.default)(function* (e, t, n) {
    const r = yield (0, l.getSyncActionsByCollectionsInTransaction)([e]);
    let i = t;
    const a = j(r, t, n.keyId);
    i = i.concat(a);
    const o = Y(r, i, n.keyId);
    T.addKeyRotationRemoveCount(o.length);
    i = i.concat(o);
    return i;
  })).apply(this, arguments);
}
function j(e, t, n) {
  let r = e.filter(e => !t.map(e => e.index).includes(e.index) && !(0, _.syncKeyIdsEqual)(e.keyId, n));
  r = (0, A.default)(r, e => (0, h.getKeyEpoch)(e.keyId));
  const i = Math.min(5, (0, o.getConfig)().syncdAdditionalMutations());
  r = r.slice(0, i);
  return (0, S.syncActionsToPendingMutations)(r, d.SyncdMutation$SyncdOperation.SET);
}
function Y(e, t, n) {
  const r = t.map(e => e.index);
  const i = e.filter(e => r.includes(e.index)).filter(e => !(0, _.syncKeyIdsEqual)(e.keyId, n));
  return (0, S.syncActionsToPendingMutations)(i, d.SyncdMutation$SyncdOperation.REMOVE);
}