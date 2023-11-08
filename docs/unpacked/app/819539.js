var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBotListLastRequestedTimestamp = function () {
  const e = u.default.get(l.MD_KEYS.BOT_LIST_LAST_REQUESTED_TIMESTAMP);
  if (typeof e == "number") {
    return e;
  } else {
    return 0;
  }
};
exports.getBotWaitlistState = function () {
  var e;
  let t = null;
  if (!(0, o.isWorker)()) {
    t = u.default.get(l.MD_KEYS.BOT_AI_WAITLIST_STATE);
  }
  if (t == null) {
    const e = s.userPrefsIdb.get(l.MD_KEYS.BOT_AI_WAITLIST_STATE);
    if (e != null && typeof e == "number") {
      u.default.set(l.MD_KEYS.BOT_AI_WAITLIST_STATE, e);
    }
  }
  if (typeof t != "number") {
    return null;
  }
  if ((e = a.HistorySync$BotAIWaitListState.cast(t)) !== null && e !== undefined) {
    return e;
  } else {
    return null;
  }
};
exports.getBotWaitlistStateFromIdb = function () {
  var e;
  const t = s.userPrefsIdb.get(l.MD_KEYS.BOT_AI_WAITLIST_STATE);
  if (typeof t != "number") {
    return null;
  }
  if ((e = a.HistorySync$BotAIWaitListState.cast(t)) !== null && e !== undefined) {
    return e;
  } else {
    return null;
  }
};
exports.setBotListLastRequestedTimestamp = function (e) {
  u.default.set(l.MD_KEYS.BOT_LIST_LAST_REQUESTED_TIMESTAMP, e);
};
exports.setBotWaitlistState = function () {
  return c.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./60370.js");
var o = require("./755985.js");
var s = require("./409847.js");
var l = require("./94872.js");
var u = r(require("./53575.js"));
function c() {
  return (c = (0, i.default)(function* (e) {
    if (!(0, o.isWorker)()) {
      u.default.set(l.MD_KEYS.BOT_AI_WAITLIST_STATE, e);
    }
    yield s.userPrefsIdb.set(l.MD_KEYS.BOT_AI_WAITLIST_STATE, e);
  })).apply(this, arguments);
}