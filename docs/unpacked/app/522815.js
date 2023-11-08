Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expireSyncKeyInTransaction = function (e) {
  return (0, r.runInTransaction)({
    SyncKeyStore: true
  }, t => {
    let {
      SyncKeyStore: n
    } = t;
    return n.expire(e);
  });
};
exports.getAllSyncKeysInTransaction = function () {
  return (0, r.runInTransaction)({
    SyncKeyStore: true
  }, e => {
    let {
      SyncKeyStore: t
    } = e;
    return t.getAll();
  });
};
exports.getSyncKeyInTransaction_DO_NOT_USE = function (e) {
  return (0, r.runInTransaction)({
    SyncKeyStore: true
  }, t => {
    let {
      SyncKeyStore: n
    } = t;
    return n.get(e);
  });
};
exports.setSyncKeyInTransaction = function (e) {
  return (0, r.runInTransaction)({
    SyncKeyStore: true
  }, t => {
    let {
      SyncKeyStore: n
    } = t;
    return n.set(e);
  });
};
var r = require("./819416.js");