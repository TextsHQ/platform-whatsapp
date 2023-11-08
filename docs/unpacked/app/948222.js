var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return l.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./986753.js");
var o = require("./531395.js");
var s = require("./101093.js");
function l() {
  return (l = (0, i.default)(function* (e) {
    const t = new Map();
    const n = new Map();
    yield Promise.all(e.map(function () {
      var e = (0, i.default)(function* (e) {
        const r = yield (0, a.getSyncPendingMutationsByCollectionInTransaction)(e);
        const i = r.map(e => e.id).filter(Boolean);
        n.set(e, i);
        const o = (0, s.compactPatch)(r);
        t.set(e, o);
      });
      return function () {
        return e.apply(this, arguments);
      };
    }()));
    const r = yield (0, o.buildSyncIqNode)(t);
    return {
      syncIqNode: r.syncIqNode,
      collectionWithPendingMutationsIds: n,
      collectionWithEncryptedMutations: r.collectionWithEncryptedMutations,
      localCollectionVersions: r.localCollectionVersions,
      collectionsToSkip: r.collectionsToSkip
    };
  })).apply(this, arguments);
}