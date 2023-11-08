Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupMainThreadResume = function (e) {
  e.initState({
    createBlockingStageManager: () => new r.OfflineBlockingResumeStageManager(),
    createNonblockingStageManager: e => new i.OfflineNonBlockingResumeStageManager(e)
  });
};
var r = require("./608040.js");
var i = require("./654082.js");