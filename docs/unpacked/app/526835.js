Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bulkUpdateSyncActionsInTransaction = function (e) {
  return (0, r.runInTransaction)({
    SyncActionStore: true
  }, t => {
    let {
      SyncActionStore: n
    } = t;
    return n.bulkUpdate(e);
  });
};
exports.countSyncActionsInTransaction = function () {
  return (0, r.runInTransaction)({
    SyncActionStore: true
  }, e => {
    let {
      SyncActionStore: t
    } = e;
    return t.count();
  });
};
exports.getAllSyncActions = function () {
  return (0, r.runInTransaction)({
    SyncActionStore: true
  }, e => {
    let {
      SyncActionStore: t
    } = e;
    return t.getAll();
  });
};
exports.getSyncActionInTransaction = function (e) {
  return (0, r.runInTransaction)({
    SyncActionStore: true
  }, t => {
    let {
      SyncActionStore: n
    } = t;
    return n.get(e);
  });
};
exports.getSyncActionsByActionStatesInTransaction = function (e) {
  return (0, r.runInTransaction)({
    SyncActionStore: true
  }, t => {
    let {
      SyncActionStore: n
    } = t;
    return n.getByActionStates(e);
  });
};
exports.getSyncActionsByCollectionsInTransaction = function (e) {
  return (0, r.runInTransaction)({
    SyncActionStore: true
  }, t => {
    let {
      SyncActionStore: n
    } = t;
    return n.getByCollections(e);
  });
};
exports.getSyncActionsByIndexMacsInTransaction = function (e) {
  return (0, r.runInTransaction)({
    SyncActionStore: true
  }, t => {
    let {
      SyncActionStore: n
    } = t;
    return n.getByIndexMacs(e);
  });
};
exports.getSyncActionsByModelInfosInTransaction = function (e) {
  return (0, r.runInTransaction)({
    SyncActionStore: true
  }, t => {
    let {
      SyncActionStore: n
    } = t;
    return n.getByModelInfos(e);
  });
};
var r = require("./819416.js");