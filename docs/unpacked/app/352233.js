var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commitHistorySyncStatusData = M;
exports.logHistorySyncStatusAfterPairing = v;
exports.logHistorySyncStatusAfterPairingJob = function (e, t) {
  const n = ((0, o.unixTime)() - e) / 60;
  if (n < 5) {
    __LOG__(2)`[history sync] skip sync status logging as it's too soon after pairing`;
    return Promise.resolve();
  }
  return (0, c.createNonPersistedJob)("logHistorySyncStatusAfterPairing", e => v(e.timeAfterPairingMins, e.loggingCount), {
    priority: a.JOB_PRIORITY.LOW
  }).waitUntilCompleted({
    timeAfterPairingMins: n,
    loggingCount: t
  });
};
var i = r(require("../vendor/348926.js"));
var a = require("./775593.js");
var o = require("./632157.js");
var s = require("./160048.js");
var l = require("./615263.js");
var u = require("./947305.js");
var c = require("./899137.js");
var d = require("./60370.js");
var p = require("./114807.js");
var f = r(require("./775410.js"));
var _ = require("./366891.js");
var g = require("./142601.js");
var m = require("./157942.js");
var h = require("./128378.js");
var y = require("./864318.js");
var E = require("./729360.js");
var S = require("./498645.js");
function v() {
  return T.apply(this, arguments);
}
function T() {
  return (T = (0, i.default)(function* (e, t) {
    if (!(t >= 5)) {
      if (e >= 60) {
        __LOG__(2)`[history sync] log status for 60 minutes after pairing`;
        yield M(y.ACTIVE_TIME_AFTER_PAIRING.MINS_60);
        return void (0, m.setHistorySyncStatusAfterPairingLoggingCount)(5);
      } else if (t < 4 && e >= 40) {
        __LOG__(2)`[history sync] log status for 40 minutes after pairing`;
        yield M(y.ACTIVE_TIME_AFTER_PAIRING.MINS_40);
        return void (0, m.setHistorySyncStatusAfterPairingLoggingCount)(4);
      } else if (t < 3 && e >= 20) {
        __LOG__(2)`[history sync] log status for 20 minutes after pairing`;
        yield M(y.ACTIVE_TIME_AFTER_PAIRING.MINS_20);
        return void (0, m.setHistorySyncStatusAfterPairingLoggingCount)(3);
      } else if (t < 2 && e >= 10) {
        __LOG__(2)`[history sync] log status for 10 minutes after pairing`;
        yield M(y.ACTIVE_TIME_AFTER_PAIRING.MINS_10);
        return void (0, m.setHistorySyncStatusAfterPairingLoggingCount)(2);
      } else if (t < 1 && e >= 5) {
        __LOG__(2)`[history sync] log status for 5 minutes after pairing`;
        yield M(y.ACTIVE_TIME_AFTER_PAIRING.MINS_5);
        return void (0, m.setHistorySyncStatusAfterPairingLoggingCount)(1);
      } else {
        return void __LOG__(2)`[history sync] do not log status as no requirment meets`;
      }
    }
    __LOG__(2)`[history sync] skip sync status logging as we've logged for more than 5 times`;
  })).apply(this, arguments);
}
function M() {
  return A.apply(this, arguments);
}
function A() {
  return (A = (0, i.default)(function* (e) {
    if ((0, g.isHistorySyncNotificationHandlingV2Enabled)()) {
      yield b(e);
    } else {
      self.setTimeout((0, i.default)(function* () {
        yield b(e);
      }), 3000);
    }
  })).apply(this, arguments);
}
function b() {
  return C.apply(this, arguments);
}
function C() {
  return (C = (0, i.default)(function* (e) {
    var t;
    const n = yield _.MdSyncFieldStatsMeta.getMdSessionId();
    const r = new u.MdBootstrapHistorySyncStatusAfterPairingWamEvent({
      mdBootstrapHistoryPayloadType: E.MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE.RECENT_HISTORY,
      mdSessionId: n,
      mdTimestamp: (0, o.unixTimeMs)(),
      activeTimeAfterPairing: e,
      isLoopRunning: f.default.getIsHistorySyncRunning()
    });
    const i = yield (0, m.getLastHistoryRecentSyncedChunk)();
    const a = i != null ? i.chunkOrder : -1;
    const l = i != null ? i.progress : -1;
    r.lastProcessedNotificationChunkOrder = a;
    r.lastProcessedNotificationChunkProgress = l;
    const c = yield (0, m.getHistorySyncStatus)();
    if ((c == null ? undefined : c.recentCompleted) === true) {
      r.mdHistorySyncStatusResult = S.MD_HISTORY_SYNC_STATUS_RESULT.SUCCESS;
      return void r.commit();
    }
    const g = yield (0, p.getHistorySyncNotificationTable)().equals(["processed"], 0, {
      shouldDecrypt: false
    }).then(e => e.filter(e => e.syncType !== d.HistorySync$HistorySyncType.RECENT).sort((e, t) => e.chunkOrder != null && t.chunkOrder != null ? e.chunkOrder - t.chunkOrder : 0));
    const h = g.length;
    r.unprocessedNotificationCount = h;
    const y = h > 0 ? (t = g[0].chunkOrder) !== null && t !== undefined ? t : 0 : -1;
    r.nextNotificationChunkOrder = y;
    if (s.inFlightChunk.size > 0) {
      r.mdHistorySyncStatusResult = S.MD_HISTORY_SYNC_STATUS_RESULT.IN_PROGRESS;
      return void r.commit();
    }
    const v = i ? a + 1 : 1;
    const T = P(yield (0, m.getRecentSyncSingleChunkStatus)(), v);
    r.mdHistorySyncStatusResult = T;
    r.commit();
    O(T);
  })).apply(this, arguments);
}
function P(e, t) {
  if (e == null || e[t] == null) {
    return S.MD_HISTORY_SYNC_STATUS_RESULT.FAIL_TO_RECEIVE;
  }
  switch (e[t]) {
    case h.HISTORY_SYNC_SINGLE_CHUNK_STATUS_TYPE.RECEIVED:
      return S.MD_HISTORY_SYNC_STATUS_RESULT.FAIL_TO_STORE_CHUNK;
    case h.HISTORY_SYNC_SINGLE_CHUNK_STATUS_TYPE.NOTIFICATION_STORED:
      return S.MD_HISTORY_SYNC_STATUS_RESULT.FAIL_TO_FETCH;
    case h.HISTORY_SYNC_SINGLE_CHUNK_STATUS_TYPE.DOWNLOADING:
      return S.MD_HISTORY_SYNC_STATUS_RESULT.FAIL_TO_DOWNLOAD;
    case h.HISTORY_SYNC_SINGLE_CHUNK_STATUS_TYPE.DOWNLOADED:
      return S.MD_HISTORY_SYNC_STATUS_RESULT.PROTOBUF_ERROR;
    case h.HISTORY_SYNC_SINGLE_CHUNK_STATUS_TYPE.DECODED:
      return S.MD_HISTORY_SYNC_STATUS_RESULT.FAIL_TO_PREPROCESS;
    case h.HISTORY_SYNC_SINGLE_CHUNK_STATUS_TYPE.MESSAGE_PREPROCESSED:
      return S.MD_HISTORY_SYNC_STATUS_RESULT.FAIL_TO_ENCRYPT;
    case h.HISTORY_SYNC_SINGLE_CHUNK_STATUS_TYPE.ENCRYPTED:
      return S.MD_HISTORY_SYNC_STATUS_RESULT.FAIL_TO_STORE;
    default:
      return S.MD_HISTORY_SYNC_STATUS_RESULT.OTHER_ERROR;
  }
}
function O(e) {
  if (e === S.MD_HISTORY_SYNC_STATUS_RESULT.FAIL_TO_FETCH && (0, g.isHistorySyncHandlingRestartEnabled)()) {
    if ((0, g.isHistorySyncNotificationHandlingV2Enabled)()) {
      f.default.continueProgressiveHistorySyncProcessingV2(l.HistorySyncScheduleSource.HistorySyncStatusCheck);
    } else {
      f.default.increaseProgressiveHistorySyncRemainingIteration();
      f.default.continueProgressiveHistorySyncProcessing();
    }
  }
}