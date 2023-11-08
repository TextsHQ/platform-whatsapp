var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_PTT_PLAYBACK_RATE = exports.ChatlistPanelState = undefined;
exports.applyPrivacySetting = T;
exports.clearLastPushCompleteTimestamp = function () {
  return w.apply(this, arguments);
};
exports.clearOfflineNotificationContentEngagement = function () {
  p.userPrefsIdb.remove(f.BACKEND_ONLY_KEYS.OFFLINE_NOTIFICATION_ENGAGEMENT);
};
exports.clearTokens = function () {
  g.forEach(e => {
    _.default.set(e, undefined);
  });
};
exports.deleteComposeContents = function (e) {
  _.default.clearUserSessionItem(b(e));
};
exports.generateAdCreationFlowId = R;
exports.getAdCreationFlowId = function () {
  let e = _.default.get(f.KEYS.AD_CREATION_FLOW_ID_KEY);
  if (!(e != null && typeof e == "string")) {
    e = R();
  }
  return e;
};
exports.getAndIncrementAdCreationSequenceNumber = function () {
  let e = _.default.get(f.KEYS.AD_CREATION_SEQUENCE_NUMBER_KEY);
  if (!(e != null && typeof e == "number")) {
    e = 1;
  }
  _.default.set(f.KEYS.AD_CREATION_SEQUENCE_NUMBER_KEY, e + 1);
  return e;
};
exports.getAppVersionBase = function () {
  return p.userPrefsIdb.get(f.BACKEND_ONLY_KEYS.APP_VERSION_BASE);
};
exports.getAutoDownloadAudio = function () {
  return _.default.getUser(f.KEYS.AUTO_DOWNLOAD_AUDIO) !== false;
};
exports.getAutoDownloadDocuments = function () {
  return _.default.getUser(f.KEYS.AUTO_DOWNLOAD_DOCUMENTS) === true;
};
exports.getAutoDownloadPhotos = function () {
  return _.default.getUser(f.KEYS.AUTO_DOWNLOAD_PHOTOS) !== false;
};
exports.getAutoDownloadVideos = function () {
  return _.default.getUser(f.KEYS.AUTO_DOWNLOAD_VIDEOS) === true;
};
exports.getBrowserId = function () {
  const e = _.default.get(f.KEYS.BROWSER_ID);
  if (typeof e == "string") {
    return e;
  } else {
    return null;
  }
};
exports.getChatlistPanelState = function () {
  return U.FULL;
};
exports.getComposeContents = function (e) {
  const t = _.default.getUserSession(b(e));
  return (0, o.asComposeContentsType)(t);
};
exports.getContactChecksum = function () {
  return _.default.getUser(f.KEYS.CONTACT_CHECKSUM);
};
exports.getContactIsCleaned = function () {
  return _.default.getUser(f.KEYS.CONTACT_IS_CLEANED) === true;
};
exports.getDailyStatsStartTime = O;
exports.getExistingLidSignalSessionIsCleaned = function () {
  return _.default.getUser(f.KEYS.EXISTING_LID_SIGNAL_SESSION_IS_CLEANED) === "v1";
};
exports.getGroupParticipantAssignedColor = function (e) {
  const t = _.default.getUser(f.KEYS.GROUP_ASSIGNED_COLOR + "-" + e.toString());
  const n = {};
  if (t == null || typeof t != "object") {
    return n;
  }
  Object.keys(t).forEach(e => {
    const r = t[e];
    if (typeof r == "number") {
      n[e] = r;
    }
  });
  return n;
};
exports.getLastChatMuteDuration = function () {
  const e = _.default.getUser(f.KEYS.LAST_CHAT_MUTE_DURATION);
  if (e === "Infinity") {
    return Number.POSITIVE_INFINITY;
  }
  if (typeof e == "number") {
    return e;
  } else {
    return null;
  }
};
exports.getLastComposeBoxPanel = function () {
  return _.default.getUser(f.KEYS.LAST_SELECTED_COMPOSE_BOX_PANEL);
};
exports.getLastMobilePlatform = function () {
  return p.userPrefsIdb.get(f.BACKEND_ONLY_KEYS.MOBILE_PLATFORM);
};
exports.getLastProfilePicThumbUpdate = function () {
  const e = _.default.get(f.KEYS.LAST_PROFILE_PIC_THUMB_UPDATE_TS);
  if (typeof e == "number") {
    return e;
  } else {
    return null;
  }
};
exports.getLastPushCompleteTimestamp = function () {
  return p.userPrefsIdb.get(f.BACKEND_ONLY_KEYS.LAST_PUSH_COMPLETE_TIMESTAMP);
};
exports.getLastStatusUsage = function () {
  const e = _.default.getUser(f.KEYS.LAST_STATUS_USAGE);
  if (typeof e == "number") {
    return e;
  } else {
    return null;
  }
};
exports.getLoginTokens = h;
exports.getLogoutReason = function () {
  return p.userPrefsIdb.get(f.BACKEND_ONLY_KEYS.LOGOUT_REASON);
};
exports.getMediaVolumeSettings = function () {
  const e = _.default.get(f.KEYS.MEDIA_VOLUME);
  return {
    volume: typeof e == "number" ? e : null,
    muted: _.default.get(f.KEYS.MEDIA_MUTE) === true
  };
};
exports.getOfflineNotificationContent = function () {
  return p.userPrefsIdb.get(f.BACKEND_ONLY_KEYS.OFFLINE_NOTIFICATION_L10N_CONTENT);
};
exports.getOfflineNotificationEngagement = function () {
  return p.userPrefsIdb.get(f.BACKEND_ONLY_KEYS.OFFLINE_NOTIFICATION_ENGAGEMENT);
};
exports.getOfflinePushCount = function () {
  return p.userPrefsIdb.get(f.BACKEND_ONLY_KEYS.OFFLINE_PUSH_COUNT);
};
exports.getOfflinePushDisabled = function () {
  return p.userPrefsIdb.get(f.BACKEND_ONLY_KEYS.OFFLINE_PUSH_DISABLED);
};
exports.getPersistentExpiringId = function () {
  const e = _.default.getUser(f.KEYS.PERSISTENT_EXPIRING_ID);
  if (e == null || typeof e != "object") {
    return null;
  }
  const {
    ts: t,
    value: n
  } = e;
  if (typeof t != "number" || typeof n != "string") {
    return null;
  }
  return {
    ts: t,
    value: n
  };
};
exports.getPnhCagFutureproofBannerClosed = function () {
  return _.default.getUser(f.KEYS.PNH_CAG_FUTURE_PROOF_BANNER_CLOSED) === true;
};
exports.getPostcodeAutoOpenChangePostcodeCount = function () {
  const e = _.default.getUser(f.KEYS.POSTCODE_AUTO_OPEN_CHANGE_POSTCODE_COUNT);
  if (typeof e == "number") {
    return e;
  } else {
    return 0;
  }
};
exports.getPostcodeAutoOpenChangePostcodeDone = function () {
  return _.default.getUser(f.KEYS.POSTCODE_AUTO_OPEN_CHANGE_POSTCODE_DONE) === true;
};
exports.getPostcodeTooltipViewCount = function () {
  const e = _.default.getUser(f.KEYS.POSTCODE_TOOLTIP_VIEW_COUNT);
  if (typeof e == "number") {
    return e;
  } else {
    return 0;
  }
};
exports.getPostcodeTooltipViewedInSession = function () {
  return _.default.getUser(f.KEYS.POSTCODE_TOOLTIP_VIEWED_IN_SESSION) === true;
};
exports.getPsKillSwitchToken = function () {
  const e = _.default.get(f.KEYS.PS_KILLSWITCH_TOKEN);
  if (typeof e == "string") {
    return e;
  } else {
    return null;
  }
};
exports.getPttPlaybackRate = function () {
  const e = _.default.get(f.KEYS.PTT_PLAYBACK_RATE);
  if (typeof e != "number") {
    return 1;
  }
  if (e === 1 || e === 2) {
    return e;
  }
  if (Math.abs(e - 1.5) < Number.EPSILON) {
    return 1.5;
  }
  return 1;
};
exports.getPushname = function () {
  const e = _.default.getUser(f.KEYS.LAST_PUSHNAME);
  if (typeof e == "string") {
    return e;
  } else {
    return null;
  }
};
exports.getSeenGroupDesc = function (e) {
  return _.default.getUser(e.toString()) === true;
};
exports.getServerProps = function () {
  return p.userPrefsIdb.get(f.BACKEND_ONLY_KEYS.SERVER_PROPS);
};
exports.getServerPropsAttributes = function () {
  return p.userPrefsIdb.get(f.BACKEND_ONLY_KEYS.SERVER_PROPS_ATTRIBUTES);
};
exports.getStorageAlert = function () {
  return s.STORAGE_ALERT_TYPE.NO_ALERT;
};
exports.getStorageDismissState = function () {
  return {
    lowQuotaDismissed: true,
    highQuotaDismissed: true
  };
};
exports.getSystemThemeMode = function () {
  return _.default.get(f.KEYS.SYSTEM_THEME_MODE) !== false;
};
exports.getTheme = function () {
  const e = _.default.get(f.KEYS.THEME);
  if (e === "light" || e === "dark") {
    return e;
  }
  return "light";
};
exports.getUnknownId = function () {
  let e = _.default.get(f.KEYS.UNKNOWN_ID);
  if (!(typeof e == "string" && e !== "")) {
    e = "unknown" + Math.floor(Math.random() * 10000000000);
    y(e);
  }
  return e;
};
exports.getUserPrivacySettings = function () {
  const e = {};
  const t = _.default.getUser(f.HASHED_KEYS.USER_PRIVACY_SETTINGS);
  if (t == null || typeof t != "object") {
    return e;
  }
  T(["readReceipts", c.ALL_NONE], e, t.readReceipts);
  T(["groupAdd", c.VISIBILITY], e, t.groupAdd);
  T(["profilePicture", c.VISIBILITY], e, t.profilePicture);
  T(["about", c.VISIBILITY], e, t.about);
  T(["lastSeen", c.VISIBILITY], e, t.lastSeen);
  T(["online", c.ONLINE_VISIBILITY], e, t.online);
  T(["callAdd", c.CALL_ADD], e, t.callAdd);
  return e;
};
exports.getVerifiedBusinessNameIsCleaned = function () {
  return _.default.getUser(f.KEYS.VERIFIED_BUSINESS_NAME_IS_CLEANED) === true;
};
exports.getWhatsAppWebExternalBetaDirtyBitIdb = function () {
  return !!p.userPrefsIdb.get(f.KEYS.WHATSAPP_WEB_EXTERNAL_BETA_DIRTY_BIT_IDB);
};
exports.getWhatsAppWebExternalBetaJoinedIdb = function () {
  const e = p.userPrefsIdb.get(f.KEYS.WHATSAPP_WEB_EXTERNAL_BETA_IDB);
  return !!e;
};
exports.initDailyStatsStartTime = function () {
  O();
};
exports.knowsPhone = function () {
  const e = h();
  return !(!e.client || !e.server);
};
exports.markContactIsCleaned = function () {
  _.default.setUser(f.KEYS.CONTACT_IS_CLEANED, true);
};
exports.markExistingLidSignalSessionIsCleaned = function () {
  _.default.setUser(f.KEYS.EXISTING_LID_SIGNAL_SESSION_IS_CLEANED, "v1");
};
exports.markUserSentMessageToChat = function (e) {
  const t = C(e);
  let n = _.default.getUser(f.KEYS.CHATS_USER_SENT_MESSAGE_TO) || [];
  if (!Array.isArray(n)) {
    __LOG__(3)`UserPrefs:markUserSentMessageToChat value in store is not an array`;
    _.default.setUser(f.KEYS.CHATS_USER_SENT_MESSAGE_TO, [t]);
    return false;
  }
  n = P(n);
  const r = !n.includes(t);
  if (r) {
    n.push(t);
    _.default.setUser(f.KEYS.CHATS_USER_SENT_MESSAGE_TO, n);
  }
  __LOG__(2)`UserPrefs:markUserSentMessageToChat`;
  return r;
};
exports.markVerifiedBusinessNameIsCleaned = function () {
  _.default.setUser(f.KEYS.VERIFIED_BUSINESS_NAME_IS_CLEANED, true);
};
exports.removeUserSentMessageToChat = function (e) {
  let t = _.default.getUser(f.KEYS.CHATS_USER_SENT_MESSAGE_TO) || [];
  if (!Array.isArray(t)) {
    __LOG__(3)`UserPrefs:removeUserSentMessageToChat value in store is not an array`;
    return void _.default.setUser(f.KEYS.CHATS_USER_SENT_MESSAGE_TO, []);
  }
  t = P(t);
  const n = C(e);
  if (t.includes(n)) {
    _.default.setUser(f.KEYS.CHATS_USER_SENT_MESSAGE_TO, (0, a.default)(t, n));
  }
  __LOG__(2)`UserPrefs:removeUserSentMessageToChat`;
};
exports.resetAdCreationSequenceNumber = function () {
  _.default.set(f.KEYS.AD_CREATION_SEQUENCE_NUMBER_KEY, 1);
};
exports.setAppVersionBase = function () {
  return I.apply(this, arguments);
};
exports.setAutoDownloadAudio = function (e) {
  _.default.setUser(f.KEYS.AUTO_DOWNLOAD_AUDIO, e);
};
exports.setAutoDownloadDocuments = function (e) {
  _.default.setUser(f.KEYS.AUTO_DOWNLOAD_DOCUMENTS, e);
};
exports.setAutoDownloadPhotos = function (e) {
  _.default.setUser(f.KEYS.AUTO_DOWNLOAD_PHOTOS, e);
};
exports.setAutoDownloadVideos = function (e) {
  _.default.setUser(f.KEYS.AUTO_DOWNLOAD_VIDEOS, e);
};
exports.setBrowserId = function (e) {
  _.default.set(f.KEYS.BROWSER_ID, e);
};
exports.setChatlistPanelState = function (e) {
  _.default.set(f.KEYS.CHATLIST_PANEL_STATE, e);
};
exports.setComposeContents = function (e, t) {
  _.default.setUserSession(b(e), t);
};
exports.setContactChecksum = function (e) {
  _.default.setUser(f.KEYS.CONTACT_CHECKSUM, e);
};
exports.setGroupParticipantAssignedColor = function (e, t) {
  _.default.setUser(f.KEYS.GROUP_ASSIGNED_COLOR + "-" + e.toString(), t);
};
exports.setLastChatMuteDuration = function (e) {
  _.default.setUser(f.KEYS.LAST_CHAT_MUTE_DURATION, e === Number.POSITIVE_INFINITY ? "Infinity" : e);
};
exports.setLastComposeBoxPanel = function (e) {
  _.default.setUser(f.KEYS.LAST_SELECTED_COMPOSE_BOX_PANEL, e);
};
exports.setLastMobilePlatform = function () {
  return E.apply(this, arguments);
};
exports.setLastProfilePicThumbUpdate = function (e) {
  _.default.set(f.KEYS.LAST_PROFILE_PIC_THUMB_UPDATE_TS, e);
};
exports.setLastPushCompleteTimestamp = function () {
  return D.apply(this, arguments);
};
exports.setLastStatusUsage = function () {
  _.default.setUser(f.KEYS.LAST_STATUS_USAGE, Date.now());
};
exports.setLoginTokens = function (e) {
  const t = e.client;
  const n = e.server;
  if (t && n) {
    __LOG__(2)`UserPrefs:setLoginTokens`;
    _.default.set(f.KEYS.CLIENT_TOKEN, t);
    _.default.set(f.KEYS.SERVER_TOKEN, n);
  }
};
exports.setLogoutReason = function () {
  return G.apply(this, arguments);
};
exports.setMediaMutedSetting = A;
exports.setMediaVolumeSetting = M;
exports.setMediaVolumeSettings = function (e, t) {
  M(e);
  A(t);
};
exports.setOfflineNotificationContent = function () {
  return k.apply(this, arguments);
};
exports.setOfflineNotificationContentEngagement = function (e) {
  return p.userPrefsIdb.set(f.BACKEND_ONLY_KEYS.OFFLINE_NOTIFICATION_ENGAGEMENT, e);
};
exports.setOfflinePushCount = function () {
  return N.apply(this, arguments);
};
exports.setOfflinePushDisabled = function () {
  return L.apply(this, arguments);
};
exports.setPersistentExpiringId = function (e) {
  _.default.setUser(f.KEYS.PERSISTENT_EXPIRING_ID, e);
};
exports.setPnhCagFutureproofBannerClosed = function () {
  _.default.setUser(f.KEYS.PNH_CAG_FUTURE_PROOF_BANNER_CLOSED, true);
};
exports.setPostcodeAutoOpenChangePostcodeCount = function (e) {
  _.default.setUser(f.KEYS.POSTCODE_AUTO_OPEN_CHANGE_POSTCODE_COUNT, e);
};
exports.setPostcodeAutoOpenChangePostcodeDone = function (e) {
  _.default.setUser(f.KEYS.POSTCODE_AUTO_OPEN_CHANGE_POSTCODE_DONE, e);
};
exports.setPostcodeTooltipViewCount = function (e) {
  _.default.setUser(f.KEYS.POSTCODE_TOOLTIP_VIEW_COUNT, e);
};
exports.setPostcodeTooltipViewedInSession = function (e) {
  _.default.setUser(f.KEYS.POSTCODE_TOOLTIP_VIEWED_IN_SESSION, e);
};
exports.setPsKillSwitchToken = function (e) {
  _.default.set(f.KEYS.PS_KILLSWITCH_TOKEN, e);
};
exports.setPttPlaybackRate = function (e) {
  _.default.set(f.KEYS.PTT_PLAYBACK_RATE, e);
};
exports.setPushname = function (e) {
  _.default.setUser(f.KEYS.LAST_PUSHNAME, e);
};
exports.setRefTok = function (e, t) {
  m.forEach(function (e) {
    l.default.removeItem(e);
  });
  (0, d.setRefTokCookies)(e, t);
};
exports.setSeenGroupDesc = function (e) {
  _.default.setUser(e.toString(), true);
};
exports.setServerProps = function () {
  return v.apply(this, arguments);
};
exports.setServerPropsAttributes = function () {
  return S.apply(this, arguments);
};
exports.setStorageAlert = function () {};
exports.setStorageDismissState = function () {};
exports.setSystemThemeMode = function (e) {
  _.default.set(f.KEYS.SYSTEM_THEME_MODE, e);
};
exports.setTheme = function (e) {
  _.default.set(f.KEYS.THEME, e);
};
exports.setUnknownId = y;
exports.setUserPrivacySettings = function (e) {
  p.userPrefsIdb.set(f.HASHED_KEYS.USER_PRIVACY_SETTINGS, e).catch(() => {
    __LOG__(4, undefined, new Error())`setUserPrivacySettings: failed to set to indexedDB`;
  });
  _.default.setUser(f.HASHED_KEYS.USER_PRIVACY_SETTINGS, e);
};
exports.setWhatsAppWebExternalBetaDirtyBitIdb = function (e) {
  return p.userPrefsIdb.set(f.KEYS.WHATSAPP_WEB_EXTERNAL_BETA_DIRTY_BIT_IDB, e);
};
exports.setWhatsAppWebExternalBetaJoinedIdb = function (e) {
  return p.userPrefsIdb.set(f.KEYS.WHATSAPP_WEB_EXTERNAL_BETA_IDB, e);
};
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/82569.js"));
var o = require("./176705.js");
var s = require("./107737.js");
var l = r(require("./236642.js"));
var u = r(require("./243957.js"));
var c = require("./997772.js");
require("./454905.js");
var d = require("./248877.js");
var p = require("./409847.js");
var f = require("./94872.js");
var _ = r(require("./53575.js"));
const g = [f.KEYS.CLIENT_TOKEN, f.KEYS.SERVER_TOKEN];
const m = [f.KEYS.VERSION];
function h() {
  return {
    client: _.default.get(f.KEYS.CLIENT_TOKEN),
    server: _.default.get(f.KEYS.SERVER_TOKEN)
  };
}
function y(e) {
  return _.default.set(f.KEYS.UNKNOWN_ID, e);
}
function E() {
  return (E = (0, i.default)(function* (e) {
    if (e != null) {
      yield p.userPrefsIdb.set(f.BACKEND_ONLY_KEYS.MOBILE_PLATFORM, e);
    }
  })).apply(this, arguments);
}
function S() {
  return (S = (0, i.default)(function* (e) {
    if (e != null) {
      yield p.userPrefsIdb.set(f.BACKEND_ONLY_KEYS.SERVER_PROPS_ATTRIBUTES, e);
    }
  })).apply(this, arguments);
}
function v() {
  return (v = (0, i.default)(function* (e) {
    if (e != null) {
      yield p.userPrefsIdb.set(f.BACKEND_ONLY_KEYS.SERVER_PROPS, e);
    }
  })).apply(this, arguments);
}
function T(e, t, n) {
  if (e == null) {
    return;
  }
  const [r, i] = e;
  if (typeof n == "string") {
    const e = i[n];
    if (e != null && e === n) {
      t[r] = e;
    }
  }
}
function M(e) {
  _.default.set(f.KEYS.MEDIA_VOLUME, e);
}
function A(e) {
  _.default.set(f.KEYS.MEDIA_MUTE, e);
}
function b(e) {
  return `${f.KEYS.COMPOSE_CONTENTS_PREFIX}${e.toString()}`;
}
function C(e) {
  return (e.toString() || "").replace("@", "_");
}
function P(e) {
  if (e.some(e => e.endsWith("_"))) {
    const t = e.map(e => e.replace(/_$/, "").replace("@", "_"));
    _.default.setUser(f.KEYS.CHATS_USER_SENT_MESSAGE_TO, t);
    return t;
  }
  return e;
}
function O() {
  const e = _.default.get(f.KEYS.DAILY_STATS_START_TIME);
  if (typeof e == "number") {
    return e;
  }
  const t = Date.now();
  _.default.set(f.KEYS.DAILY_STATS_START_TIME, t);
  return t;
}
function I() {
  return (I = (0, i.default)(function* (e) {
    if (e != null) {
      yield p.userPrefsIdb.set(f.BACKEND_ONLY_KEYS.APP_VERSION_BASE, e);
    }
  })).apply(this, arguments);
}
function R() {
  const e = (0, u.default)();
  _.default.set(f.KEYS.AD_CREATION_FLOW_ID_KEY, e);
  return e;
}
function N() {
  return (N = (0, i.default)(function* (e) {
    yield p.userPrefsIdb.set(f.BACKEND_ONLY_KEYS.OFFLINE_PUSH_COUNT, e);
  })).apply(this, arguments);
}
function D() {
  return (D = (0, i.default)(function* (e) {
    yield p.userPrefsIdb.set(f.BACKEND_ONLY_KEYS.LAST_PUSH_COMPLETE_TIMESTAMP, e);
  })).apply(this, arguments);
}
function w() {
  return (w = (0, i.default)(function* () {
    yield p.userPrefsIdb.remove(f.BACKEND_ONLY_KEYS.LAST_PUSH_COMPLETE_TIMESTAMP);
  })).apply(this, arguments);
}
function L() {
  return (L = (0, i.default)(function* (e) {
    yield p.userPrefsIdb.set(f.BACKEND_ONLY_KEYS.OFFLINE_PUSH_DISABLED, e);
  })).apply(this, arguments);
}
function k() {
  return (k = (0, i.default)(function* (e) {
    yield p.userPrefsIdb.set(f.BACKEND_ONLY_KEYS.OFFLINE_NOTIFICATION_L10N_CONTENT, e);
  })).apply(this, arguments);
}
function G() {
  return (G = (0, i.default)(function* (e) {
    yield p.userPrefsIdb.set(f.BACKEND_ONLY_KEYS.LOGOUT_REASON, e);
  })).apply(this, arguments);
}
exports.DEFAULT_PTT_PLAYBACK_RATE = 1;
const U = require("../vendor/76672.js").Mirrored(["FULL", "COLLAPSED"]);
exports.ChatlistPanelState = U;