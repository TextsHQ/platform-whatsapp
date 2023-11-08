var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearHistorySyncOnDemandRequestsFailureRecord = y;
exports.deleteChatFromInitialSyncBoundary = function (e) {
  const t = (0, p.getHistoryInitialSyncBoundary)();
  if (t == null || Object.keys(t).length === 0 || (t == null ? undefined : t[e.toJid()]) == null) {
    return void __LOG__(2)`[rdu] cannot delete chat ${""} from initial sync boundary.`;
  }
  __LOG__(2)`[rdu] delete chat ${""} from initial sync boundary`;
  delete t[e.toJid()];
  (0, p.setHistoryInitialSyncBoundary)(t);
};
exports.getOldestMsgInChatFromDB = function () {
  return h.apply(this, arguments);
};
exports.getOldestMsgRowInChat = g;
exports.handleHistorySyncOnDemandFailure = function (e) {
  (0, l.frontendFireAndForget)("errorHistorySyncOd", {
    chatId: e
  });
  const t = (0, o.unixTime)();
  const n = _.firstFailureRequestTimeStampSec;
  if (n == null) {
    _.firstFailureRequestTimeStampSec = t;
  }
  _.failureCount += 1;
  const r = (0, s.getABPropConfigValue)("history_sync_on_demand_failure_limit");
  const i = (0, s.getABPropConfigValue)("history_sync_on_demand_cooldown_sec");
  if (_.failureCount >= r && n != null && t - n < i) {
    _.disableRequestSending = true;
    const e = i * 1000;
    __LOG__(2)`[rdu] disable history sync on demand for ${e}ms.`;
    new a.ShiftTimer(() => {
      if (_.disableRequestSending) {
        __LOG__(2)`[rdu] re-enable history sync on demand.`;
        y();
      }
    }).onOrAfter(e);
  }
};
exports.handleHistorySyncOnDemandSuccess = function (e) {
  (0, l.frontendFireAndForget)("successHistorySyncOd", {
    chatId: e
  });
  y();
};
exports.inFlightHistorySyncOnDemandRequests = exports.historySyncOnDemandRequestsFailureRecord = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./685639.js");
var o = require("./632157.js");
var s = require("./287461.js");
var l = require("./359987.js");
var u = require("./907539.js");
var c = require("./878685.js");
var d = require("./851698.js");
var p = require("./157942.js");
const f = new Map();
exports.inFlightHistorySyncOnDemandRequests = f;
const _ = {
  disableRequestSending: false,
  failureCount: 0
};
function g() {
  return m.apply(this, arguments);
}
function m() {
  return (m = (0, i.default)(function* (e) {
    const t = (0, c.beginningOfChat)(e);
    const n = (0, c.endOfChat)(e);
    const r = yield (0, d.getMessageTable)().between(["internalId"], t, n, {
      limit: 1,
      reverse: false,
      shouldDecrypt: false
    });
    if (r.length === 0) {
      return null;
    } else {
      return r[0];
    }
  })).apply(this, arguments);
}
function h() {
  return (h = (0, i.default)(function* (e) {
    const t = yield g(e);
    if (t != null) {
      return (0, u.messageFromDbRow)(t);
    } else {
      return null;
    }
  })).apply(this, arguments);
}
function y() {
  _.disableRequestSending = false;
  _.failureCount = 0;
  _.firstFailureRequestTimeStampSec = undefined;
}
exports.historySyncOnDemandRequestsFailureRecord = _;