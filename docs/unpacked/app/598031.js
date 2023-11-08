var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.migrateMDUserPrefsToIndexedDB = function () {
  return l.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./409847.js");
var o = require("./94872.js");
var s = r(require("./98165.js"));
function l() {
  return (l = (0, i.default)(function* () {
    const e = [];
    const t = s.default.getItemFromLocalStorage(o.MD_KEYS.ROUTING_INFO);
    if (t != null) {
      e.push({
        key: o.BACKEND_ONLY_KEYS.ROUTING_INFO,
        value: t
      });
    }
    const n = s.default.getItemFromLocalStorage(o.MD_KEYS.INITIAL_HISTORY_SYNCED);
    if (n != null) {
      e.push({
        key: o.BACKEND_ONLY_KEYS.INITIAL_HISTORY_SYNCED,
        value: n != null
      });
    }
    const r = s.default.getItemFromLocalStorage(o.MD_KEYS.HISTORY_SYNC_STATUS);
    if (r != null) {
      e.push({
        key: o.BACKEND_ONLY_KEYS.HISTORY_SYNC_STATUS,
        value: r
      });
    }
    const i = s.default.getItemFromLocalStorage(o.MD_KEYS.BLOCKLIST_HASH);
    if (i != null) {
      e.push({
        key: o.BACKEND_ONLY_KEYS.BLOCKLIST_HASH,
        value: i
      });
    }
    const l = s.default.getItemFromLocalStorage(o.MD_KEYS.CRITICAL_DATA_SYNCED);
    if (l != null) {
      e.push({
        key: o.BACKEND_ONLY_KEYS.CRITICAL_DATA_SYNCED,
        value: l
      });
    }
    const u = s.default.getItemFromLocalStorage(o.MD_KEYS.SHOULD_CHECK_CONTACT_SYNC_STATUS);
    if (u != null) {
      e.push({
        key: o.BACKEND_ONLY_KEYS.SHOULD_CHECK_CONTACT_SYNC_STATUS,
        value: u
      });
    }
    const c = s.default.getItemFromLocalStorage(o.MD_KEYS.ADV_SECRET_KEY);
    if (c != null) {
      e.push({
        key: o.BACKEND_ONLY_KEYS.ADV_SECRET_KEY,
        value: c
      });
    }
    const d = s.default.getItemFromLocalStorage(o.MD_KEYS.MD_UPGRADE_WAM_FLAG);
    if (d != null) {
      e.push({
        key: o.BACKEND_ONLY_KEYS.MD_UPGRADE_WAM_FLAG,
        value: d === true
      });
    }
    const p = s.default.getItemFromLocalStorage(o.MD_KEYS.MD_HISTORY_LAST_CHUNK_PROCESSED);
    if (p != null) {
      e.push({
        key: o.BACKEND_ONLY_KEYS.MD_HISTORY_LAST_CHUNK_PROCESSED,
        value: p
      });
    }
    const f = s.default.getItemFromLocalStorage(o.MD_KEYS.UNARCHIVE_CHATS_SETTING);
    if (f != null) {
      e.push({
        key: o.BACKEND_ONLY_KEYS.UNARCHIVE_CHATS_SETTING,
        value: f
      });
    }
    const _ = s.default.getItemFromLocalStorage(o.MD_KEYS.ARCHIVE_V2_ENABLED_SETTING);
    if (_ != null) {
      e.push({
        key: o.BACKEND_ONLY_KEYS.ARCHIVE_V2_ENABLED_SETTING,
        value: _
      });
    }
    const g = s.default.getItemFromLocalStorage(o.MD_KEYS.MD_SYNC_ACTIONS_ACTION_SANITIZED);
    if (g != null) {
      e.push({
        key: o.BACKEND_ONLY_KEYS.MD_SYNC_ACTIONS_ACTION_SANITIZED,
        value: g === true
      });
    }
    const m = s.default.getItemFromLocalStorage(o.MD_KEYS.CHAT_THREAD_LOGGING_OFFSET);
    if (m != null) {
      e.push({
        key: o.BACKEND_ONLY_KEYS.CHAT_THREAD_LOGGING_OFFSET,
        value: m
      });
    }
    const h = s.default.getItemFromLocalStorage(o.MD_KEYS.CHAT_THREAD_LOGGING_SECRET);
    if (h != null) {
      e.push({
        key: o.BACKEND_ONLY_KEYS.CHAT_THREAD_LOGGING_SECRET,
        value: h
      });
    }
    const y = s.default.getItemFromLocalStorage(o.MD_KEYS.CHAT_THREAD_LOGGING_LAST_UPLOADED_START_TS);
    if (y != null) {
      e.push({
        key: o.BACKEND_ONLY_KEYS.CHAT_THREAD_LOGGING_LAST_UPLOADED_START_TS,
        value: y
      });
    }
    const E = s.default.getItemFromLocalStorage(o.MD_KEYS.PAIRING_TIMESTAMP);
    if (E != null) {
      e.push({
        key: o.BACKEND_ONLY_KEYS.PAIRING_TIMESTAMP,
        value: E
      });
    }
    const S = s.default.getItemFromLocalStorage(o.MD_KEYS.RECENT_MAILBOX_AGE_DAYS);
    if (S != null) {
      e.push({
        key: o.BACKEND_ONLY_KEYS.RECENT_MAILBOX_AGE_DAYS,
        value: S
      });
    }
    const v = s.default.getItemFromLocalStorage(o.MD_KEYS.LAST_PERIODIC_APP_STATE_SYNC_TS);
    if (v != null) {
      e.push({
        key: o.BACKEND_ONLY_KEYS.LAST_PERIODIC_APP_STATE_SYNC_TS,
        value: v
      });
    }
    const T = s.default.getItemFromLocalStorage(o.MD_KEYS.MD_LOGIN_COOKIE_REQUEST_COMPLETE);
    if (T != null) {
      e.push({
        key: o.BACKEND_ONLY_KEYS.MD_LOGIN_COOKIE_REQUEST_COMPLETE,
        value: T
      });
    }
    const M = s.default.getItemFromLocalStorage(o.KEYS.MOBILE_PLATFORM_DEPRECATED);
    if (M != null) {
      e.push({
        key: o.BACKEND_ONLY_KEYS.MOBILE_PLATFORM,
        value: M
      });
    }
    const A = s.default.getItemFromLocalStorage(o.KEYS.PRIMARY_FEATURES);
    if (A != null) {
      e.push({
        key: o.KEYS.PRIMARY_FEATURES,
        value: A
      });
    }
    const b = s.default.getItemFromLocalStorage(o.HASHED_KEYS.USER_PRIVACY_SETTINGS);
    if (b != null) {
      e.push({
        key: o.HASHED_KEYS.USER_PRIVACY_SETTINGS,
        value: b
      });
    }
    return a.userPrefsIdb.bulkSetItemsToIndexedDB(e);
  })).apply(this, arguments);
}