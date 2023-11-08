var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appendPendingMutationsRows = function (e) {
  return (0, d.getPendingMutationsTable)().bulkCreate(e);
};
exports.bulkGetMissingKeys = function (e) {
  return (0, c.getMissingKeysTable)().bulkGet(e).then(e => e.map(e => e == null ? null : (0, c.convertToMissingKeyFromRow)(e)));
};
exports.bulkRemoveMissingKeys = function (e) {
  return (0, c.getMissingKeysTable)().bulkRemove(e);
};
exports.bulkRemovePendingMutations = function (e) {
  return (0, d.getPendingMutationsTable)().bulkRemove(e);
};
exports.createOrUpdateMissingKeys = function (e) {
  return (0, c.getMissingKeysTable)().bulkCreateOrMerge(e.map(c.convertFromMissingKeyToRow));
};
exports.createSyncKey = function (e) {
  return (0, f.getSyncKeysTable)().create((0, f.convertFromSyncKeyToRow)(e)).then(e => (0, s.toSyncKeyId)(e.buffer));
};
exports.deleteSyncActionRows = function (e) {
  return (0, p.getSyncActionsTable)().bulkRemove(e);
};
exports.expireSyncKey = function () {
  return v.apply(this, arguments);
};
exports.getAllCollectionLtHashes = function () {
  return E.apply(this, arguments);
};
exports.getAllMissingKeys = function () {
  return (0, c.getMissingKeysTable)().all().then(e => e.map(c.convertToMissingKeyFromRow));
};
exports.getAllPendingMutationsRows = function () {
  return (0, d.getPendingMutationsTable)().all();
};
exports.getAllSyncKeys = function () {
  return (0, f.getSyncKeysTable)().all().then(e => e.map(f.convertToSyncKeyFromRow));
};
exports.getCollectionVersion = function () {
  return m.apply(this, arguments);
};
exports.getCollectionVersions = function () {
  return h.apply(this, arguments);
};
exports.getLtHash = function () {
  return y.apply(this, arguments);
};
exports.getMissingKey = function () {
  return T.apply(this, arguments);
};
exports.getMissingKeyCount = function () {
  return (0, c.getMissingKeysTable)().count();
};
exports.getPendingMutationsRows = function (e, t) {
  return (0, d.getPendingMutationsTable)().equals(e, t);
};
exports.getPendingMutationsRowsById = function () {
  return g.apply(this, arguments);
};
exports.getPendingMutationsRowsByIndex = function (e, t) {
  return (0, d.getPendingMutationsTable)().equals(e, t);
};
exports.getSyncAction = function (e) {
  return (0, p.getSyncActionsTable)().get(e);
};
exports.getSyncActionsRows = function (e, t) {
  return (0, p.getSyncActionsTable)().anyOf(e, t);
};
exports.getSyncKey = function () {
  return S.apply(this, arguments);
};
exports.hasPendingMutationForCollection = function (e) {
  return (0, d.getPendingMutationsTable)().equals(["collection"], e).then(e => e.length > 0);
};
exports.performTransaction = function (e) {
  return (0, l.getStorage)().lock(["collection-version", "pending-mutations", "sync-actions"], e);
};
exports.setCollectionVersion = function (e, t, n) {
  return (0, u.getCollectionVersionTable)().createOrMerge(e, {
    collection: e,
    version: t,
    ltHash: n
  });
};
exports.setSyncAction = function (e) {
  return (0, p.getSyncActionsTable)().createOrReplace(e);
};
exports.setSyncActionRows = function (e) {
  return (0, p.getSyncActionsTable)().bulkCreateOrReplace(e);
};
exports.updateSyncActionRows = function (e) {
  return (0, p.getSyncActionsTable)().bulkCreateOrMerge(e.map(e => (0, i.default)({}, e)));
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./570505.js");
require("./527796.js");
var s = require("./347197.js");
var l = require("./732011.js");
var u = require("./599125.js");
var c = require("./628718.js");
var d = require("./394102.js");
var p = require("./666545.js");
var f = require("./512666.js");
require("./394629.js");
const _ = new ArrayBuffer(o.KEY_LENGTH_BYTES);
function g() {
  return (g = (0, a.default)(function* (e) {
    return (yield (0, d.getPendingMutationsTable)().bulkGet(e)).filter(Boolean);
  })).apply(this, arguments);
}
function m() {
  return (m = (0, a.default)(function* (e) {
    const t = yield (0, u.getCollectionVersionTable)().get(e);
    if (t == null) {
      return undefined;
    } else {
      return t.version;
    }
  })).apply(this, arguments);
}
function h() {
  return (h = (0, a.default)(function* (e) {
    const t = yield (0, u.getCollectionVersionTable)().bulkGet(e);
    return new Map(e.map((e, n) => {
      var r;
      return [e, (r = t[n]) === null || r === undefined ? undefined : r.version];
    }));
  })).apply(this, arguments);
}
function y() {
  return (y = (0, a.default)(function* (e) {
    const t = yield (0, u.getCollectionVersionTable)().get(e);
    return (t == null ? undefined : t.ltHash) || _;
  })).apply(this, arguments);
}
function E() {
  return (E = (0, a.default)(function* () {
    return (yield (0, u.getCollectionVersionTable)().all()).map(e => ({
      collection: e.collection,
      ltHash: e.ltHash
    }));
  })).apply(this, arguments);
}
function S() {
  return (S = (0, a.default)(function* (e) {
    const t = yield (0, f.getSyncKeysTable)().get(new Uint8Array((0, s.fromSyncKeyId)(e)));
    if (t == null) {
      return t;
    } else {
      return (0, f.convertToSyncKeyFromRow)(t);
    }
  })).apply(this, arguments);
}
function v() {
  return (v = (0, a.default)(function* (e) {
    (yield (0, f.getSyncKeysTable)().equals(["keyEpoch"], e)).forEach(e => (0, f.getSyncKeysTable)().merge(e.keyId, {
      keyId: e.keyId,
      timestamp: 0
    }));
  })).apply(this, arguments);
}
function T() {
  return (T = (0, a.default)(function* (e) {
    const t = yield (0, c.getMissingKeysTable)().get(e);
    if (t == null) {
      return t;
    } else {
      return (0, c.convertToMissingKeyFromRow)(t);
    }
  })).apply(this, arguments);
}