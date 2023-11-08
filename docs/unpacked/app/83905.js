var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.writeSyncdLog = exports.printSyncdLog = exports.handleSyncdFatal = exports.handleSyncDelayApplyingPatchUntilUIUnblocks = exports.handleSyncCompleted = exports.handleSyncBeforeApplyPatch = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./819416.js");
var o = require("./122393.js");
var s = r(require("./517515.js"));
var l = require("./780549.js");
var u = r(require("./797137.js"));
var c = require("./485995.js");
var d = require("./91471.js");
exports.handleSyncBeforeApplyPatch = e => {
  if (e.deviceIndex === 0) {
    s.default.updatePrimaryAllowsAllMutationsFlag("device index");
  }
  return Promise.resolve();
};
exports.handleSyncCompleted = e => {
  l.Cmd.trigger(l.APP_STATE_SYNC_COMPLETED, e);
  return Promise.resolve();
};
exports.handleSyncDelayApplyingPatchUntilUIUnblocks = () => (0, u.default)().then((0, i.default)(function* () {
  yield (0, a.getDbImpls)().writeSyncdLog(o.CollectionName.CriticalUnblockLow, "offline delivery end");
}));
exports.handleSyncdFatal = e => (0, c.handleFatalError)(e == null ? undefined : e.collections);
const p = d.writeSyncdLogImpl;
exports.writeSyncdLog = p;
const f = d.printSyncdLogs;
exports.printSyncdLog = f;