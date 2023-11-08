var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WAWebSyncActionStore = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./666545.js");
var o = require("./610876.js");
class s {
  count() {
    return (0, a.getSyncActionsTable)().count();
  }
  get(e) {
    return (0, i.default)(function* () {
      const t = yield (0, o.getSyncAction)(e);
      if (t == null) {
        return null;
      } else {
        return (0, a.convertToSyncActionFromRow)(t);
      }
    })();
  }
  getByCollections(e) {
    return (0, i.default)(function* () {
      return (yield (0, o.getSyncActionsRows)(["collection"], e.map(e => e))).map(a.convertToSyncActionFromRow);
    })();
  }
  getByIndexMacs(e) {
    return (0, i.default)(function* () {
      return (yield (0, o.getSyncActionsRows)(["indexMac"], e.map(e => e))).map(a.convertToSyncActionFromRow);
    })();
  }
  getByActionStates(e) {
    return (0, i.default)(function* () {
      return (yield (0, o.getSyncActionsRows)(["actionState"], e.map(e => e))).map(a.convertToSyncActionFromRow);
    })();
  }
  getByModelInfos(e) {
    return (0, i.default)(function* () {
      return (yield (0, o.getSyncActionsRows)(["modelId", "modelType", "actionState"], e.map(e => e))).map(a.convertToSyncActionFromRow);
    })();
  }
  getAll() {
    return (0, a.getSyncActionsTable)().all().then(e => e.map(a.convertToSyncActionFromRow));
  }
  bulkSet(e) {
    return (0, o.setSyncActionRows)(e.map(a.convertFromSyncActionToRow));
  }
  bulkUpdate(e) {
    return (0, o.updateSyncActionRows)(e.map(a.convertFromSyncActionToRow));
  }
  bulkRemove(e) {
    return (0, o.deleteSyncActionRows)(e);
  }
  clear() {
    return (0, a.getSyncActionsTable)().clear();
  }
}
exports.WAWebSyncActionStore = s;
s.locks = ["sync-actions"];