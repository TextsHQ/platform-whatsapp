var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChunkCountForEndOfRecentHistorySync = function () {
  var e;
  if ((e = u.userPrefsIdb.get(c.BACKEND_ONLY_KEYS.HISTORY_SYNC_CHUNK_COUNT_FOR_END_OF_RECENT_SYNC)) !== null && e !== undefined) {
    return e;
  } else {
    return 0;
  }
};
exports.getEstimatedChunkCountForEndOfRecentHistorySync = function () {
  const e = u.userPrefsIdb.get(c.BACKEND_ONLY_KEYS.ESTIMATED_HISTORY_SYNC_CHUNK_COUNT_FOR_END_OF_RECENT_SYNC);
  if (e != null) {
    return e;
  } else {
    return 0;
  }
};
exports.getHistoryInitialSyncBoundary = function () {
  const e = p.default.getUser(c.KEYS.INITIAL_HIST_BOUNDARY);
  if (typeof e != "string") {
    return null;
  }
  let t;
  try {
    t = JSON.parse(e);
  } catch (e) {
    return null;
  }
  if (t == null || typeof t != "object" || t instanceof Array) {
    return null;
  }
  const n = {};
  Object.entries(t).forEach(e => {
    let [t, r] = e;
    if (typeof r == "number") {
      n[t] = r;
    }
  });
  return n;
};
exports.getHistorySyncEarliestDate = function () {
  const e = p.default.get(c.KEYS.HISTORY_SYNC_EARLIEST_DATE);
  if (typeof e != "number" || e === 0) {
    var t;
    const e = (t = (0, d.getPairingTimestamp)()) !== null && t !== undefined ? t : (0, o.unixTime)();
    const n = o.DAY_SECONDS * 90;
    return e - n;
  }
  return e;
};
exports.getHistorySyncRemainingPausedSeconds = function () {
  const e = p.default.get(c.MD_KEYS.HISTORY_SYNC_REMAINING_PAUSED_SECONDS);
  if (typeof e == "number") {
    return e;
  }
};
exports.getHistorySyncStatus = m;
exports.getHistorySyncStatusAfterPairingLoggingCount = function () {
  return u.userPrefsIdb.get(c.BACKEND_ONLY_KEYS.HISTORY_SYNC_STATUS_AFTER_PAIRING_LOGGING_COUNT);
};
exports.getInitialHistorySyncComplete = function () {
  return u.userPrefsIdb.get(c.BACKEND_ONLY_KEYS.INITIAL_HISTORY_SYNCED) === true;
};
exports.getInitialHistorySyncCompleteLocalStorage = function () {
  return !!p.default.get(c.MD_KEYS.INITIAL_HISTORY_SYNCED, {
    storage: s.default
  });
};
exports.getLastHistoryRecentSyncedChunk = function () {
  return u.userPrefsIdb.get(c.BACKEND_ONLY_KEYS.MD_HISTORY_LAST_RECENT_SYNC_CHUNK_PROCESSED);
};
exports.getLastHistorySyncedChunk = function () {
  return u.userPrefsIdb.get(c.BACKEND_ONLY_KEYS.MD_HISTORY_LAST_CHUNK_PROCESSED);
};
exports.getRecentSyncSingleChunkStatus = S;
exports.setChunkCountForEndOfRecentHistorySync = function () {
  return h.apply(this, arguments);
};
exports.setEstimatedChunkCountForEndOfRecentHistorySync = function () {
  return y.apply(this, arguments);
};
exports.setHistoryInitialSyncBoundary = function (e) {
  p.default.setUser(c.KEYS.INITIAL_HIST_BOUNDARY, JSON.stringify(e));
};
exports.setHistorySyncEarliestDate = function (e) {
  p.default.set(c.KEYS.HISTORY_SYNC_EARLIEST_DATE, e);
};
exports.setHistorySyncRemainingPausedSeconds = function (e) {
  p.default.set(c.MD_KEYS.HISTORY_SYNC_REMAINING_PAUSED_SECONDS, e);
};
exports.setHistorySyncStatus = function () {
  return g.apply(this, arguments);
};
exports.setHistorySyncStatusAfterPairingLoggingCount = function () {
  return v.apply(this, arguments);
};
exports.setInitialHistorySyncComplete = function () {
  return _.apply(this, arguments);
};
exports.setLastHistorySyncedChunk = function () {
  return f.apply(this, arguments);
};
exports.setRecentSyncSingleChunkStatus = function () {
  return E.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./632157.js");
var s = r(require("./236642.js"));
var l = require("./60370.js");
var u = require("./409847.js");
var c = require("./94872.js");
var d = require("./673168.js");
var p = r(require("./53575.js"));
function f() {
  return (f = (0, a.default)(function* (e, t, n) {
    if (e != null && t != null) {
      if (e === l.HistorySync$HistorySyncType.RECENT) {
        __LOG__(2)`[history sync] set last history sync chunk with chunk order ${t}`;
        yield u.userPrefsIdb.set(c.BACKEND_ONLY_KEYS.MD_HISTORY_LAST_RECENT_SYNC_CHUNK_PROCESSED, {
          chunkOrder: t,
          progress: n
        });
      }
      yield u.userPrefsIdb.set(c.BACKEND_ONLY_KEYS.MD_HISTORY_LAST_CHUNK_PROCESSED, `${e}_${t}`);
      p.default.set(c.MD_KEYS.MD_HISTORY_LAST_CHUNK_PROCESSED, `${e}_${t}`, {
        shouldWriteToIdb: false
      });
    }
  })).apply(this, arguments);
}
function _() {
  return (_ = (0, a.default)(function* () {
    yield u.userPrefsIdb.set(c.BACKEND_ONLY_KEYS.INITIAL_HISTORY_SYNCED, true);
    return p.default.set(c.MD_KEYS.INITIAL_HISTORY_SYNCED, "true", {
      shouldWriteToIdb: false
    });
  })).apply(this, arguments);
}
function g() {
  return (g = (0, a.default)(function* (e) {
    var t;
    const n = (t = yield m()) !== null && t !== undefined ? t : {};
    yield u.userPrefsIdb.set(c.BACKEND_ONLY_KEYS.HISTORY_SYNC_STATUS, (0, i.default)((0, i.default)({}, n), e));
    p.default.set(c.MD_KEYS.HISTORY_SYNC_STATUS, (0, i.default)((0, i.default)({}, n), e), {
      shouldWriteToIdb: false
    });
  })).apply(this, arguments);
}
function m() {
  return u.userPrefsIdb.get(c.BACKEND_ONLY_KEYS.HISTORY_SYNC_STATUS);
}
function h() {
  return (h = (0, a.default)(function* (e) {
    yield u.userPrefsIdb.set(c.BACKEND_ONLY_KEYS.HISTORY_SYNC_CHUNK_COUNT_FOR_END_OF_RECENT_SYNC, e);
  })).apply(this, arguments);
}
function y() {
  return (y = (0, a.default)(function* (e) {
    yield u.userPrefsIdb.set(c.BACKEND_ONLY_KEYS.ESTIMATED_HISTORY_SYNC_CHUNK_COUNT_FOR_END_OF_RECENT_SYNC, e);
  })).apply(this, arguments);
}
function E() {
  return (E = (0, a.default)(function* (e, t, n) {
    var r;
    if (n == null || e !== l.HistorySync$HistorySyncType.RECENT) {
      return;
    }
    __LOG__(2)`[history sync] set recent sync single chunk ${n} status to ${t}`;
    const a = (r = yield S()) !== null && r !== undefined ? r : {};
    yield u.userPrefsIdb.set(c.BACKEND_ONLY_KEYS.HISTORY_SYNC_SINGLE_CHUNK_STATUS, (0, i.default)((0, i.default)({}, a), {
      [n]: t
    }));
  })).apply(this, arguments);
}
function S() {
  return u.userPrefsIdb.get(c.BACKEND_ONLY_KEYS.HISTORY_SYNC_SINGLE_CHUNK_STATUS);
}
function v() {
  return (v = (0, a.default)(function* (e) {
    yield u.userPrefsIdb.set(c.BACKEND_ONLY_KEYS.HISTORY_SYNC_STATUS_AFTER_PAIRING_LOGGING_COUNT, e);
  })).apply(this, arguments);
}