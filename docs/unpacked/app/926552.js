var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleChunkProgress = function (e) {
  f = e ? 0 : f + 1;
  if (f === 0) {
    p();
  }
  h(f >= 3);
};
exports.updateHistorySyncProgressModel = function () {
  return _.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./359987.js");
var o = require("./780549.js");
var s = require("./60370.js");
var l = require("./157942.js");
var u = require("./128378.js");
let c = null;
function d() {
  if (c != null) {
    self.clearTimeout(c);
  }
}
function p() {
  d();
  c = self.setTimeout(() => {
    h(true);
  }, 120000);
}
let f = 0;
function _() {
  return (_ = (0, i.default)(function* () {
    try {
      const [e, t] = yield Promise.all([g(), (0, l.getHistorySyncStatus)()]);
      const n = (t == null ? undefined : t.recentCompleted) !== true;
      (0, a.frontendSendAndReceive)("setHistorySyncProgress", {
        inProgress: n
      });
      if (e != null) {
        (0, a.frontendSendAndReceive)("setHistorySyncProgress", {
          progress: e
        });
      }
    } catch (e) {
      __LOG__(4, undefined, new Error())`updateProgressModel: error computing progress`;
    }
  })).apply(this, arguments);
}
function g() {
  return m.apply(this, arguments);
}
function m() {
  return (m = (0, i.default)(function* () {
    let e = yield (0, l.getChunkCountForEndOfRecentHistorySync)();
    if (e === 0 && (e = yield (0, l.getEstimatedChunkCountForEndOfRecentHistorySync)(), e === 0)) {
      return;
    }
    const t = yield (0, l.getLastHistorySyncedChunk)();
    if (t != null) {
      const [n, r] = t.split("_").map(e => parseInt(e, 10));
      if (n === s.HistorySync$HistorySyncType.RECENT) {
        const t = Math.floor(r / e * 100);
        __LOG__(2)`[history sync] computeProgress: compute progress when the last processed history sync chunk is completed`;
        return Math.min(100, t);
      }
    }
    return y(e);
  })).apply(this, arguments);
}
function h(e) {
  (0, a.frontendSendAndReceive)("setHistorySyncPaused", {
    paused: e
  });
}
function y() {
  return E.apply(this, arguments);
}
function E() {
  return (E = (0, i.default)(function* (e) {
    var t;
    const n = (t = yield (0, l.getRecentSyncSingleChunkStatus)()) === null || t === undefined ? undefined : t[1];
    if (n == null || [u.HISTORY_SYNC_SINGLE_CHUNK_STATUS_TYPE.RECEIVED, u.HISTORY_SYNC_SINGLE_CHUNK_STATUS_TYPE.NOTIFICATION_STORED, u.HISTORY_SYNC_SINGLE_CHUNK_STATUS_TYPE.DOWNLOADING].includes(n)) {
      return null;
    }
    __LOG__(2)`[history sync] computeProgress: compute progress when the first history sync chunk is downloaded`;
    const r = Math.floor(1 / e / 3 * 100);
    return Math.min(100, r);
  })).apply(this, arguments);
}
o.Cmd.on("on_critical_sync_done", () => {
  p();
});
o.Cmd.on("on_recent_chat_history_synced", () => {
  d();
  h(false);
  (0, a.frontendSendAndReceive)("setHistorySyncProgress", {
    progress: 100,
    inProgress: false
  });
});