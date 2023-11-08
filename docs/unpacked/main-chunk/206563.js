Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logEmptyStateViewedFilterEvent = function (e, t) {
  new r.ChatFilterEventWamEvent({
    actionType: s.CHAT_FILTER_ACTION_TYPES.FILTER_EMPTY_STATE_VIEWED,
    filterType: f(t),
    targetScreen: u.CHAT_FILTER_TARGET_SCREEN.CHAT_LIST,
    sessionId: e
  }).commit();
};
exports.logOpenFilterEvent = function (e) {
  const t = new r.ChatFilterEventWamEvent({
    actionType: s.CHAT_FILTER_ACTION_TYPES.OPEN,
    filterType: d.CHAT_FILTER_TYPES.NONE,
    sessionId: e
  });
  if ((0, o.smartFiltersEnabled)()) {
    t.targetScreen = u.CHAT_FILTER_TARGET_SCREEN.CHAT_LIST;
  }
  t.commit();
};
exports.logSearchFilterEvent = function (e, t) {
  new r.ChatFilterEventWamEvent({
    actionType: s.CHAT_FILTER_ACTION_TYPES.SEARCH,
    filterType: f(t),
    targetScreen: u.CHAT_FILTER_TARGET_SCREEN.CHAT_LIST,
    sessionId: e
  }).commit();
};
exports.logSearchItemSelectedFilterEvent = function (e, t, n) {
  new r.ChatFilterEventWamEvent({
    actionType: s.CHAT_FILTER_ACTION_TYPES.SEARCH_ITEM_SELECTED,
    filterType: f(t),
    searchResultType: m(n),
    targetScreen: u.CHAT_FILTER_TARGET_SCREEN.CHAT_LIST,
    sessionId: e
  }).commit();
};
exports.logSearchMsgSentFilterEvent = function (e, t, n) {
  new r.ChatFilterEventWamEvent({
    actionType: s.CHAT_FILTER_ACTION_TYPES.SEARCH_MSG_SENT,
    filterType: f(t),
    searchResultType: m(n),
    sessionId: e
  }).commit();
};
exports.logSearchWithFilterEvent = function (e) {
  new r.ChatFilterEventWamEvent({
    actionType: s.CHAT_FILTER_ACTION_TYPES.SEARCH_WITH_FILTER,
    filterType: d.CHAT_FILTER_TYPES.OTHER_LABELS,
    sessionId: e
  }).commit();
};
exports.logSelectFilterEvent = function (e, t) {
  const n = new r.ChatFilterEventWamEvent({
    actionType: s.CHAT_FILTER_ACTION_TYPES.SELECT_FILTER,
    filterType: f(t),
    sessionId: e
  });
  if ((0, i.inboxFiltersEnabled)() || (0, o.smartFiltersEnabled)()) {
    n.targetScreen = u.CHAT_FILTER_TARGET_SCREEN.CHAT_LIST;
  }
  n.commit();
};
var o = require("../app/72696.js");
var r = require("./339703.js");
var a = require("../app/2754.js");
var l = require("../app/445729.js");
var i = require("./516197.js");
var s = require("../app/571444.js");
var u = require("./965858.js");
var d = require("./167532.js");
var c = require("./894760.js");
function f(e) {
  if (e == null || !e.kind && (e.label == null || e.label === "")) {
    return d.CHAT_FILTER_TYPES.NONE;
  }
  if (!e.kind) {
    if (l.Conn.isSMB) {
      return d.CHAT_FILTER_TYPES.OTHER_LABELS;
    } else {
      return d.CHAT_FILTER_TYPES.NONE;
    }
  }
  switch (e.kind) {
    case a.SEARCH_FILTERS.UNREAD:
      return d.CHAT_FILTER_TYPES.UNREAD;
    case a.SEARCH_FILTERS.GROUP:
      return d.CHAT_FILTER_TYPES.GROUP;
    case a.SEARCH_FILTERS.BROADCAST:
      return d.CHAT_FILTER_TYPES.BROADCAST_LIST;
    case a.SEARCH_FILTERS.CONTACT:
      return d.CHAT_FILTER_TYPES.CONTACT;
    case a.SEARCH_FILTERS.NON_CONTACT:
      return d.CHAT_FILTER_TYPES.NON_CONTACT;
    case a.SEARCH_FILTERS.ASSIGNED_TO_YOU:
      return d.CHAT_FILTER_TYPES.ASSIGNED_TO_YOU;
    case a.SEARCH_FILTERS.PERSONAL:
      return d.CHAT_FILTER_TYPES.PERSONAL;
    case a.SEARCH_FILTERS.BUSINESS:
      return d.CHAT_FILTER_TYPES.BUSINESS;
  }
}
function m(e) {
  let t;
  switch (e) {
    case "chat":
      t = c.CHAT_SEARCH_RESULT_TYPE.CHAT;
      break;
    case "message":
      t = c.CHAT_SEARCH_RESULT_TYPE.MESSAGE;
      break;
    case "contact":
      t = c.CHAT_SEARCH_RESULT_TYPE.CONTACT;
      break;
    case "group":
      t = c.CHAT_SEARCH_RESULT_TYPE.GROUP;
  }
  return t;
}