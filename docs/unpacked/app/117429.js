var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_OFFLINE_NOTIFICATION_BB_STATUS = exports.DEFAULT_NOTIFICATION_BB_STATUS = undefined;
exports.getCollapseMuted = function () {
  return s.default.getUser(o.KEYS.GLOBAL_COLLAPSE_MUTED) === true;
};
exports.getGlobalCallRingtone = function () {
  return s.default.getUser(o.KEYS.GLOBAL_MUTE_CALL_RINGTONE) !== true;
};
exports.getGlobalNotifications = function () {
  const e = s.default.getUser(o.KEYS.GLOBAL_MUTE_NOTIFICATIONS);
  var t;
  if (typeof e != "boolean") {
    return ((t = window.Notification) === null || t === undefined ? undefined : t.permission) === a.PERMISSION_ALLOWED;
  } else {
    return !e;
  }
};
exports.getGlobalOfflineNotifications = function () {
  return s.default.getUser(o.KEYS.GLOBAL_OFFLINE_NOTIFICATIONS_ENABLED) === true;
};
exports.getGlobalPreviews = function () {
  return s.default.getUser(o.KEYS.GLOBAL_MUTE_PREVIEWS) !== true;
};
exports.getGlobalSecurityNotifications = function () {
  return s.default.getUser(o.KEYS.SECURITY_NOTIFICATIONS) !== true;
};
exports.getGlobalSounds = function () {
  return s.default.getUser(o.KEYS.GLOBAL_MUTE_SOUNDS) !== true;
};
exports.getIgnoreNondirectGroupMsg = function () {
  l;
  return false;
};
exports.getOfflineNotificationsBBStatus = p;
exports.getOfflineNotificationsInternalEnabledOnce = function () {
  return s.default.getUser(o.KEYS.GLOBAL_OFFLINE_NOTIFICATIONS_INTERNAL_ENABLED_ONCE) === true;
};
exports.getOutgoingMessageSound = function () {
  return s.default.getUser(o.KEYS.OUTGOING_MESSAGE_SOUND) === true;
};
exports.getWebNotificationsBBStatus = c;
exports.setCollapseMuted = function (e) {
  s.default.setUser(o.KEYS.GLOBAL_COLLAPSE_MUTED, e);
};
exports.setGlobalCallRingtone = function (e) {
  s.default.setUser(o.KEYS.GLOBAL_MUTE_CALL_RINGTONE, !e);
};
exports.setGlobalNotifications = function (e) {
  s.default.setUser(o.KEYS.GLOBAL_MUTE_NOTIFICATIONS, !e);
};
exports.setGlobalOfflineNotifications = function (e) {
  s.default.setUser(o.KEYS.GLOBAL_OFFLINE_NOTIFICATIONS_ENABLED, e);
};
exports.setGlobalPreviews = function (e) {
  s.default.setUser(o.KEYS.GLOBAL_MUTE_PREVIEWS, !e);
};
exports.setGlobalSecurityNotifications = function (e) {
  s.default.setUser(o.KEYS.SECURITY_NOTIFICATIONS, !e);
};
exports.setGlobalSounds = function (e) {
  s.default.setUser(o.KEYS.GLOBAL_MUTE_SOUNDS, !e);
};
exports.setIgnoreNondirectGroupMsg = function (e) {
  l;
};
exports.setOfflineNotificationsBBStatus = function (e) {
  {
    var t;
    var n;
    var r;
    const i = p();
    const {
      isDismissed: a = false,
      firstSeenTime: l = null,
      isLongResumeTime: u = false
    } = i;
    const c = (t = e.isDismissed) !== null && t !== undefined ? t : a;
    const d = (n = e.firstSeenTime) !== null && n !== undefined ? n : l;
    const f = (r = e.isLongResumeTime) !== null && r !== undefined ? r : u;
    s.default.setUser(o.KEYS.OFFLINE_NOTIFICATIONS_BB_STATUS, {
      isDismissed: c,
      firstSeenTime: d,
      isLongResumeTime: f
    });
  }
};
exports.setOfflineNotificationsInternalEnabledOnce = function () {
  s.default.setUser(o.KEYS.GLOBAL_OFFLINE_NOTIFICATIONS_INTERNAL_ENABLED_ONCE, true);
};
exports.setOutgoingMessageSound = function (e) {
  s.default.setUser(o.KEYS.OUTGOING_MESSAGE_SOUND, e);
};
exports.setWebNotificationsBBStatus = function (e) {
  var t;
  const n = c();
  const {
    firstSeenTime: r = null
  } = n;
  const i = (t = e.firstSeenTime) !== null && t !== undefined ? t : r;
  s.default.setUser(o.KEYS.WEB_NOTIFICATIONS_BB_STATUS, {
    isDismissed: e.isDismissed,
    firstSeenTime: i
  });
};
var i = require("./632157.js");
var a = require("./955562.js");
var o = require("./94872.js");
var s = r(require("./53575.js"));
const l = null;
const u = {
  isDismissed: false,
  firstSeenTime: null
};
function c() {
  const e = s.default.getUser(o.KEYS.WEB_NOTIFICATIONS_BB_STATUS);
  if (e == null) {
    return u;
  }
  if (typeof e != "object" || e instanceof Array) {
    return u;
  }
  return {
    isDismissed: e.isDismissed === true,
    firstSeenTime: typeof e.firstSeenTime == "number" ? (0, i.castToUnixTime)(e.firstSeenTime) : null
  };
}
exports.DEFAULT_NOTIFICATION_BB_STATUS = u;
const d = {
  isDismissed: false,
  firstSeenTime: null,
  isLongResumeTime: false
};
function p() {
  const e = s.default.getUser(o.KEYS.OFFLINE_NOTIFICATIONS_BB_STATUS);
  if (e == null || typeof e != "object" || e instanceof Array) {
    return d;
  }
  return {
    isDismissed: e.isDismissed === true,
    firstSeenTime: typeof e.firstSeenTime == "number" ? (0, i.castToUnixTime)(e.firstSeenTime) : null,
    isLongResumeTime: e.isLongResumeTime === true
  };
}
exports.DEFAULT_OFFLINE_NOTIFICATION_BB_STATUS = d;