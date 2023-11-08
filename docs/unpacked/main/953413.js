var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleHistorySyncNotification = function () {
  return T.apply(this, arguments);
};
var r = a(require("../vendor/81109.js"));
var o = a(require("../vendor/348926.js"));
var l = require("../app/632157.js");
require("../app/287461.js");
var i = require("../app/160048.js");
var u = require("../app/810718.js");
var s = require("../app/9122.js");
var c = require("../app/615263.js");
var d = require("../app/926552.js");
var f = require("../app/827747.js");
var p = require("./406666.js");
var m = a(require("../app/565754.js"));
var h = require("../app/510306.js");
require("../app/533494.js");
var g = require("../app/60370.js");
var E = a(require("../app/775410.js"));
var v = require("../app/366891.js");
var _ = require("../app/142601.js");
var y = require("../app/157942.js");
var C = require("../app/459857.js");
var b = require("../app/128378.js");
var M = require("../app/599764.js");
var S = a(require("../app/124928.js"));
function T() {
  return (T = (0, o.default)(function* (e, t, n) {
    var a;
    (0, f.maybeLogToJestE2eJSConsole)("received history sync notif");
    if (!e) {
      return;
    }
    try {
      (0, C.assertGetMeUser)();
    } catch (e) {
      __LOG__(4, undefined, new Error(), true)`[history sync] Assert get me is empty during history sync`;
      return void SEND_LOGS("Assert get me is empty during history sync");
    }
    if (!(0, C.isMePrimaryNonLid)(t)) {
      if (t != null && t instanceof S.default) {
        __LOG__(4, undefined, new Error(), true)`[history sync] History sync payload wid error`;
        return void SEND_LOGS("History sync payload wid error");
      } else {
        __LOG__(4, undefined, new Error(), true)`[history sync] History sync empty wid error`;
        return void SEND_LOGS("History sync empty wid error");
      }
    }
    const {
      downloadOptions: o
    } = e;
    if (!o) {
      return;
    }
    const T = !!e.historySyncNotification.originalMessageId;
    const w = T ? e.historySyncNotification.originalMessageId : n;
    const A = new m.default({
      remote: t,
      fromMe: true,
      id: w
    }).toString();
    const P = (a = e.historySyncNotification.progress) !== null && a !== undefined ? a : 0;
    const O = {
      msgKey: A,
      processed: 0,
      downloadOptions: o,
      isReupload: 1,
      historySyncStepStartedTs: (0, l.unixTimeMs)(),
      reuploadPending: false,
      historySyncPayloadSize: e.historySyncNotification.fileLength,
      oldestMsgInChunkTimestampSec: e.historySyncNotification.oldestMsgInChunkTimestampSec,
      initialHistBootstrapInlinePayload: e.historySyncNotification.initialHistBootstrapInlinePayload,
      peerDataRequestSessionId: e.historySyncNotification.peerDataRequestSessionId,
      progress: P
    };
    if (!(T && e.historySyncNotification.syncType !== g.HistorySync$HistorySyncType.INITIAL_BOOTSTRAP)) {
      O.syncType = e.historySyncNotification.syncType;
      O.chunkOrder = e.historySyncNotification.chunkOrder || 0;
      O.isReupload = 0;
    }
    const k = O;
    if (k.syncType === g.HistorySync$HistorySyncType.RECENT && P === 100) {
      const e = k.chunkOrder;
      __LOG__(2)`[history sync] setting total chunk count when receiving: ${e}`;
      yield (0, y.setChunkCountForEndOfRecentHistorySync)(e != null ? e : 1);
      (0, d.updateHistorySyncProgressModel)();
    }
    const D = new p.MdBootstrapHistoryDataReceivedWamEvent({
      mdBootstrapPayloadType: k.syncType === g.HistorySync$HistorySyncType.INITIAL_BOOTSTRAP ? M.MD_BOOTSTRAP_PAYLOAD_TYPE.CRITICAL : M.MD_BOOTSTRAP_PAYLOAD_TYPE.NON_CRITICAL,
      mdBootstrapHistoryPayloadType: (0, u.getMetricHistorySyncPayloadType)(k.syncType),
      mdTimestamp: (0, l.unixTimeMs)(),
      mdSessionId: yield v.MdSyncFieldStatsMeta.getMdSessionId(),
      historySyncStageProgress: P
    });
    if (k.chunkOrder != null) {
      D.historySyncChunkOrder = k.chunkOrder;
    }
    D.commit();
    const I = (0, _.isHistorySyncNotificationHandlingV2Enabled)();
    switch (k.syncType) {
      case g.HistorySync$HistorySyncType.INITIAL_BOOTSTRAP:
      case g.HistorySync$HistorySyncType.INITIAL_STATUS_V3:
      case g.HistorySync$HistorySyncType.NON_BLOCKING_DATA:
        __LOG__(2)`[history sync] initial sync received ${(0, c.getHistorySyncLogDetailsString)(k)}`;
        (0, s.handleHistorySyncChunk)(k);
        if (I) {
          return;
        }
        break;
      case g.HistorySync$HistorySyncType.PUSH_NAME:
        __LOG__(2)`[history sync] initial pushname received ${(0, c.getHistorySyncLogDetailsString)(k)}`;
        yield (0, i.enqueueNotification)((0, r.default)((0, r.default)({}, k), {}, {
          downloadOptions: (0, r.default)({}, k.downloadOptions)
        }), true);
        return void (0, s.handleHistorySyncChunk)(k);
      case g.HistorySync$HistorySyncType.ON_DEMAND:
        if ((0, _.isHistorySyncOnDemandEnabled)()) {
          var R;
          var N;
          var x;
          __LOG__(2)`[history sync] on demand history sync received ${(0, c.getHistorySyncLogDetailsString)(k)}`;
          if (k.peerDataRequestSessionId == null) {
            __LOG__(2)`[history sync][rdu] on demand history sync chunk does not have requested session id.`;
          }
          if (!h.inFlightHistorySyncOnDemandRequests.has((R = k.peerDataRequestSessionId) !== null && R !== undefined ? R : "")) {
            return void __LOG__(2)`[history sync][rdu] drop on demand history sync notification as it's timeout with key ${""}.`;
          }
          __LOG__(2)`[history sync][rdu] clean history sync on demand rdu request as it is received without timeout with key ${""}.`;
          k.peerDataRequestChatId = h.inFlightHistorySyncOnDemandRequests.get((N = k.peerDataRequestSessionId) !== null && N !== undefined ? N : "");
          h.inFlightHistorySyncOnDemandRequests.delete((x = k.peerDataRequestSessionId) !== null && x !== undefined ? x : "");
          if (I && k.chunkOrder != null && i.recentSyncChunkHandlingTriedCount[k.chunkOrder] != null) {
            i.recentSyncChunkHandlingTriedCount[k.chunkOrder] = 0;
          }
          yield (0, i.enqueueNotification)(k);
        }
        break;
      default:
        __LOG__(2)`[history sync] recent or full chunk received, adding chunk info to db: ${(0, c.getHistorySyncLogDetailsString)(k)}`;
        if (k.syncType === g.HistorySync$HistorySyncType.RECENT) {
          if (O.chunkOrder != null && e.progress != null && e.progress !== 0) {
            const t = Math.ceil(O.chunkOrder / (e.progress / 100));
            __LOG__(2)`[history sync] setting estimated total chunk count: ${t}`;
            (0, y.setEstimatedChunkCountForEndOfRecentHistorySync)(t);
          }
          if (O.oldestMsgInChunkTimestampSec != null) {
            const e = (0, y.getHistorySyncEarliestDate)();
            if (e && O.oldestMsgInChunkTimestampSec < e) {
              (0, y.setHistorySyncEarliestDate)(O.oldestMsgInChunkTimestampSec);
            }
          }
          (0, y.setRecentSyncSingleChunkStatus)(k.syncType, b.HISTORY_SYNC_SINGLE_CHUNK_STATUS_TYPE.RECEIVED, k.chunkOrder);
        }
        yield (0, i.enqueueNotification)(k);
    }
    if (I) {
      __LOG__(2)`[history sync][continueProgressiveHistorySyncProcessingV2] trigger notification processing after receiving ${(0, c.getHistorySyncLogDetailsString)(k)}`;
      E.default.continueProgressiveHistorySyncProcessingV2(c.HistorySyncScheduleSource.NewRecentSyncNotification);
    } else {
      E.default.continueProgressiveHistorySyncProcessing();
    }
  })).apply(this, arguments);
}