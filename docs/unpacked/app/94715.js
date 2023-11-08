var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runInTransaction = undefined;
var i = r(require("./721698.js"));
var a = require("./643841.js");
var o = require("./92991.js");
var s = require("./732011.js");
var l = require("./954978.js");
var u = require("./114703.js");
var c = require("./350616.js");
var d = r(require("./556869.js"));
const p = {
  SyncActionStore: u.WAWebSyncActionStore,
  CollectionVersionStore: a.WAWebCollectionVersionStore,
  PendingMutationStore: l.WAWebPendingMutationStore,
  MissingKeyStore: o.WAWebMissingKeyStore,
  SyncKeyStore: c.WAWebSyncKeyStore
};
exports.runInTransaction = (e, t) => {
  if (i.default.currentTransaction != null) {
    return Promise.reject((0, d.default)("Calling runInTransaction recursively. This is not allowed."));
  }
  const n = Object.keys(e);
  const r = n.flatMap(e => p[e].locks);
  return (0, s.getStorage)().lock(r, () => {
    const e = {};
    for (const t of n) {
      e[t] = new p[t]();
    }
    return t(e);
  });
};