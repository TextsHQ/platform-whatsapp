var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addNotification = y;
exports.enqueueNotification = function () {
  return E.apply(this, arguments);
};
exports.fetchNextHistorySyncChunkForProcessing = function () {
  return S.apply(this, arguments);
};
exports.inFlightChunk = undefined;
exports.markChunkForReuploadPending = function (e) {
  _.delete(e);
  return (0, u.getHistorySyncNotificationTable)().merge(e, {
    reuploadPending: true
  });
};
exports.recentSyncChunkHandlingTriedCount = undefined;
exports.removeLocalFailureFromInFlightChunk = function (e) {
  _.delete(e);
};
exports.updateCurrentlyProcessed = h;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./615263.js");
var s = require("./926552.js");
var l = require("./60370.js");
var u = require("./114807.js");
var c = require("./142601.js");
var d = require("./157942.js");
var p = require("./128378.js");
var f = r(require("./556869.js"));
const _ = new Set();
exports.inFlightChunk = _;
function g() {
  return (g = (0, a.default)(function* (e, t, n) {
    if (e === l.HistorySync$HistorySyncType.PUSH_NAME) {
      return true;
    }
    if ([l.HistorySync$HistorySyncType.FULL, l.HistorySync$HistorySyncType.RECENT].includes(e) && t === 1 || (0, c.isHistorySyncOnDemandEnabled)() && e === l.HistorySync$HistorySyncType.ON_DEMAND && t === 0) {
      if (e === l.HistorySync$HistorySyncType.RECENT) {
        return (yield (0, d.getInitialHistorySyncComplete)()) === true;
      }
      const t = yield (0, d.getHistorySyncStatus)();
      return !!(t == null ? undefined : t.recentCompleted);
    }
    const r = yield (0, d.getLastHistorySyncedChunk)();
    if (r == null) {
      return false;
    }
    const [i, a] = r.split("_");
    return i === `${e}` && a === "" + (t - 1) || (i === `${e}` && a === `${t}` ? (__LOG__(2, undefined, undefined, undefined, ["history-sync"])`[history sync] isPreviousChunkProcessed: next chunk already processed ${e}_${t}, last processed: ${r} `, yield h(n, e, t), false) : (__LOG__(2, undefined, undefined, undefined, ["history-sync"])`[history sync] isPreviousChunkProcessed returned false for ${e}_${t}, last processed: ${r} `, false));
  })).apply(this, arguments);
}
function m() {
  const e = (0, u.getHistorySyncNotificationTable)().equals(["processed"], 0, {
    shouldDecrypt: false
  }).then(function () {
    var e = (0, a.default)(function* (e) {
      var t;
      const n = e.filter(e => !_.has(e.msgKey) && !e.reuploadPending).sort((e, t) => e.syncType !== t.syncType ? t.syncType - e.syncType : e.chunkOrder != null && t.chunkOrder != null ? e.chunkOrder - t.chunkOrder : 0);
      let r = n.length > 0 ? n[0] : undefined;
      if (((t = r) === null || t === undefined ? undefined : t.chunkOrder) != null) {
        if (r) {
          const e = yield function () {
            return g.apply(this, arguments);
          }(r.syncType, r.chunkOrder, r.msgKey);
          (0, s.handleChunkProgress)(e);
          if (!e) {
            return;
          }
          r = yield (0, u.getHistorySyncNotificationTable)().postflightDecryptSingleRecord(r);
        }
        return r;
      }
      var i;
      __LOG__(2, undefined, undefined, undefined, ["history-sync"])`[history sync] getNextUnProcessedNotification chunkOrder is null, ${(i = r) === null || i === undefined ? undefined : i.msgKey}`;
    });
    return function () {
      return e.apply(this, arguments);
    };
  }());
  return e || Promise.reject((0, f.default)("[history sync] getNextUnProcessed history sync notification: not supported for non MD"));
}
function h(e, t, n) {
  __LOG__(2)`[history sync] remove history sync notfication from db with ${t}_${n}`;
  _.delete(e);
  return (0, u.getHistorySyncNotificationTable)().remove(e).catch(e => {
    __LOG__(2, undefined, undefined, undefined, ["history-sync"])`[history sync] updateCurrentlyProcessed failed with error ${e}`;
  });
}
function y(e) {
  (0, o.getHistorySyncBasicChunkInfoString)(e.syncType, e.chunkOrder, e.isReupload);
  const t = e.downloadOptions.mediaKey;
  const n = e.downloadOptions.directPath;
  const r = e.downloadOptions.filehash;
  const a = e.downloadOptions.encFilehash;
  e.downloadOptions.mediaKey = "";
  e.downloadOptions.directPath = "";
  e.downloadOptions.filehash = "";
  e.downloadOptions.encFilehash = "";
  const s = (0, i.default)((0, i.default)({}, e), {}, {
    chunkEncryptionKey: t,
    directPath: n,
    filehash: r,
    encFilehash: a
  });
  e.processed = 0;
  return (0, u.getHistorySyncNotificationTable)().createOrMerge(e.msgKey, s);
}
function E() {
  return (E = (0, a.default)(function* (e) {
    let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    yield y(e).then(() => {
      (0, d.setRecentSyncSingleChunkStatus)(e.syncType, p.HISTORY_SYNC_SINGLE_CHUNK_STATUS_TYPE.NOTIFICATION_STORED, e.chunkOrder);
    });
    if (t) {
      _.add(e.msgKey);
    }
  })).apply(this, arguments);
}
function S() {
  return (S = (0, a.default)(function* () {
    if (_.size > 0) {
      return null;
    }
    const e = yield m();
    if (e) {
      (0, o.getHistorySyncBasicChunkInfoString)(e == null ? undefined : e.syncType, e == null ? undefined : e.chunkOrder, e == null ? undefined : e.isReupload);
      e.downloadOptions.mediaKey = e.chunkEncryptionKey;
      delete e.chunkEncryptionKey;
      e.downloadOptions.directPath = e.directPath || e.downloadOptions.directPath;
      delete e.directPath;
      e.downloadOptions.filehash = e.downloadOptions.filehash === "" ? e.filehash : e.downloadOptions.filehash;
      delete e.filehash;
      e.downloadOptions.encFilehash = e.encFilehash;
      delete e.encFilehash;
      _.add(e.msgKey);
    }
    return e;
  })).apply(this, arguments);
}
exports.recentSyncChunkHandlingTriedCount = {};