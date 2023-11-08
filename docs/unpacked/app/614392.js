Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SyncActionBase = undefined;
var r = require("./122393.js");
exports.SyncActionBase = class {
  getChatJidAndMessageKey() {}
  resolveConflicts(e, t) {
    if (t.timestamp >= e.timestamp) {
      return Promise.resolve(r.ConflictResolutionState.ApplyRemoteAndDropLocal);
    } else {
      return Promise.resolve(r.ConflictResolutionState.SkipRemote);
    }
  }
  dropMutationDueToCrossIndexConflict() {
    return Promise.resolve(false);
  }
};