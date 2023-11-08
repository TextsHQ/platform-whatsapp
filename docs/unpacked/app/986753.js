Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bulkCreateSyncPendingMutationsInTransaction = function (e) {
  return (0, r.runInTransaction)({
    PendingMutationStore: true
  }, t => {
    let {
      PendingMutationStore: n
    } = t;
    return n.bulkCreate(e);
  });
};
exports.getAllSyncPendingMutationsInTransaction = function () {
  return (0, r.runInTransaction)({
    PendingMutationStore: true
  }, e => {
    let {
      PendingMutationStore: t
    } = e;
    return t.getAll();
  });
};
exports.getSyncPendingMutationsByCollectionInTransaction = function (e) {
  return (0, r.runInTransaction)({
    PendingMutationStore: true
  }, t => {
    let {
      PendingMutationStore: n
    } = t;
    return n.getByCollection(e);
  });
};
var r = require("./819416.js");