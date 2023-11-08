Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HistorySyncBridgeApi = undefined;
var a = require("./894795.js");
const r = {
  setHistorySyncPaused(e) {
    let {
      paused: t
    } = e;
    (0, a.getHistorySyncProgress)().setPaused(t);
  },
  setHistorySyncProgress(e) {
    let {
      progress: t,
      inProgress: n
    } = e;
    if (t != null) {
      (0, a.getHistorySyncProgress)().setProgress(t);
    }
    if (n != null) {
      (0, a.getHistorySyncProgress)().setInProgress(n);
    }
  }
};
exports.HistorySyncBridgeApi = r;