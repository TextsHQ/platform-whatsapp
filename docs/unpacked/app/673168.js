var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearRegistrationInfo = function () {
  return f.apply(this, arguments);
};
exports.clearServerClientExpirationOverride = function () {
  return p.default.set(u.MD_KEYS.KEY_SEVER_CLIENT_EXPIRATION_OVERRIDE, undefined);
};
exports.getADVSecretKey = function () {
  return l.userPrefsIdb.get(u.BACKEND_ONLY_KEYS.ADV_SECRET_KEY);
};
exports.getArchiveV2EnabledSetting = function () {
  return l.userPrefsIdb.get(u.BACKEND_ONLY_KEYS.ARCHIVE_V2_ENABLED_SETTING) === true;
};
exports.getBlocklistHash = function () {
  return l.userPrefsIdb.get(u.BACKEND_ONLY_KEYS.BLOCKLIST_HASH);
};
exports.getCachedProfilePicEURL = function () {
  return p.default.get(u.MD_KEYS.CACHED_PROFILE_PIC_EURL, {
    storage: o.default
  });
};
exports.getChatThreadLoggingLastUploadedStartTs = function () {
  return l.userPrefsIdb.get(u.BACKEND_ONLY_KEYS.CHAT_THREAD_LOGGING_LAST_UPLOADED_START_TS);
};
exports.getChatThreadLoggingOffset = function () {
  return l.userPrefsIdb.get(u.BACKEND_ONLY_KEYS.CHAT_THREAD_LOGGING_OFFSET);
};
exports.getChatThreadLoggingSecretB64 = function () {
  const e = l.userPrefsIdb.get(u.BACKEND_ONLY_KEYS.CHAT_THREAD_LOGGING_SECRET);
  return Promise.resolve(e);
};
exports.getCommunityTabLastSeenTimestamp = function () {
  var e;
  if ((e = p.default.get(u.MD_KEYS.COMMUNITY_TAB_LAST_SEEN_TIMESTAMP)) !== null && e !== undefined) {
    return e;
  } else {
    return 0;
  }
};
exports.getIsHostedMeAccount = function () {
  return R.apply(this, arguments);
};
exports.getMdLoginCookieRequestComplete = function () {
  return l.userPrefsIdb.get(u.BACKEND_ONLY_KEYS.MD_LOGIN_COOKIE_REQUEST_COMPLETE) === true;
};
exports.getNewsletterWasBootstrapped = function () {
  const e = p.default.get(u.MD_KEYS.NEWSLETTER_WAS_BOOTSTRAPPED);
  if (typeof e == "boolean") {
    return e;
  }
  return false;
};
exports.getNoiseInfo = g;
exports.getNoiseInfoIv = function () {
  return c.default.getItemFromLocalStorage(u.MD_NOISE_KEYS.NOISE_INFO_IV);
};
exports.getPairingTimestamp = function () {
  const e = p.default.get(u.MD_KEYS.PAIRING_TIMESTAMP);
  if (e == null) {
    return null;
  } else {
    return parseInt(e, 10);
  }
};
exports.getRecentMailboxAgeDays = function () {
  return M.apply(this, arguments);
};
exports.getRoutingInfo = function () {
  return l.userPrefsIdb.get(u.BACKEND_ONLY_KEYS.ROUTING_INFO);
};
exports.getServerClientExpirationOverride = function () {
  const e = p.default.get(u.MD_KEYS.KEY_SEVER_CLIENT_EXPIRATION_OVERRIDE);
  if ((e == null ? undefined : e.ts) == null || (e == null ? undefined : e.appVersion) == null) {
    return;
  }
  return {
    timestamp: parseInt(e.ts, 10),
    appVersion: e.appVersion
  };
};
exports.getShouldCheckContactSyncStatus = function () {
  return l.userPrefsIdb.get(u.BACKEND_ONLY_KEYS.SHOULD_CHECK_CONTACT_SYNC_STATUS) === true;
};
exports.getUnarchiveChatsSetting = function () {
  return l.userPrefsIdb.get(u.BACKEND_ONLY_KEYS.UNARCHIVE_CHATS_SETTING) === true;
};
exports.getWebEncSalt = function () {
  return c.default.getItemFromLocalStorage(u.MD_NOISE_KEYS.WEB_ENC_SALT);
};
exports.isRegistered = function () {
  return !(!g() || !(0, d.getMe)());
};
exports.setADVSecretKey = function () {
  return S.apply(this, arguments);
};
exports.setArchiveV2EnabledSetting = function () {
  return b.apply(this, arguments);
};
exports.setBlocklistHash = function () {
  return v.apply(this, arguments);
};
exports.setCachedProfilePicEURL = function (e) {
  return p.default.set(u.MD_KEYS.CACHED_PROFILE_PIC_EURL, e);
};
exports.setChatThreadLoggingLastUploadedStartTs = function () {
  return O.apply(this, arguments);
};
exports.setChatThreadLoggingOffset = function () {
  return C.apply(this, arguments);
};
exports.setChatThreadLoggingSecretB64 = function () {
  return P.apply(this, arguments);
};
exports.setCommunityTabLastSeenTimestamp = function (e) {
  p.default.set(u.MD_KEYS.COMMUNITY_TAB_LAST_SEEN_TIMESTAMP, e);
};
exports.setIsHostedMeAccount = function () {
  return I.apply(this, arguments);
};
exports.setMdLoginCookieRequestComplete = function () {
  return m.apply(this, arguments);
};
exports.setNewsletterWasBootstrapped = function () {
  p.default.set(u.MD_KEYS.NEWSLETTER_WAS_BOOTSTRAPPED, true);
};
exports.setNoiseInfo = function () {
  return _.apply(this, arguments);
};
exports.setNoiseInfoIv = function () {
  return h.apply(this, arguments);
};
exports.setPairingTimestamp = function (e) {
  return p.default.set(u.MD_KEYS.PAIRING_TIMESTAMP, e);
};
exports.setRecentMailboxAgeDays = function () {
  return T.apply(this, arguments);
};
exports.setRoutingInfo = function () {
  return y.apply(this, arguments);
};
exports.setServerClientExpirationOverride = function (e, t) {
  return p.default.set(u.MD_KEYS.KEY_SEVER_CLIENT_EXPIRATION_OVERRIDE, {
    ts: e,
    appVersion: t
  });
};
exports.setUnarchiveChatsSetting = function () {
  return A.apply(this, arguments);
};
exports.setWebEncSalt = function () {
  return E.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./417405.js");
var o = r(require("./236642.js"));
var s = require("./840928.js");
var l = require("./409847.js");
var u = require("./94872.js");
var c = r(require("./98165.js"));
var d = require("./459857.js");
var p = r(require("./53575.js"));
function f() {
  return (f = (0, i.default)(function* () {
    const e = [u.MD_KEYS.NOISE_INFO, u.MD_KEYS.ME_INFO, u.MD_KEYS.DEVICE_ID, u.MD_KEYS.ROUTING_INFO, u.MD_KEYS.INITIAL_HISTORY_SYNCED, u.MD_KEYS.WEB_ENC_SALT];
    e.push(u.KEYS.LAST_WID_MD);
    e.map(e => {
      p.default.set(e, undefined);
    });
    yield s.userPrefsCacheStorage.clearCacheStorage();
  })).apply(this, arguments);
}
function _() {
  return (_ = (0, i.default)(function* (e) {
    c.default.setItemToLocalStorage(u.MD_NOISE_KEYS.NOISE_INFO, e);
    yield s.userPrefsCacheStorage.setItemToCacheStorage(u.MD_NOISE_KEYS.NOISE_INFO, e);
  })).apply(this, arguments);
}
function g() {
  return c.default.getItemFromLocalStorage(u.MD_NOISE_KEYS.NOISE_INFO);
}
function m() {
  return (m = (0, i.default)(function* () {
    yield l.userPrefsIdb.set(u.BACKEND_ONLY_KEYS.MD_LOGIN_COOKIE_REQUEST_COMPLETE, true);
    return p.default.set(u.MD_KEYS.MD_LOGIN_COOKIE_REQUEST_COMPLETE, true);
  })).apply(this, arguments);
}
function h() {
  return (h = (0, i.default)(function* (e) {
    c.default.setItemToLocalStorage(u.MD_NOISE_KEYS.NOISE_INFO_IV, e);
    yield s.userPrefsCacheStorage.setItemToCacheStorage(u.MD_NOISE_KEYS.NOISE_INFO_IV, e);
  })).apply(this, arguments);
}
function y() {
  return (y = (0, i.default)(function* (e) {
    yield l.userPrefsIdb.set(u.BACKEND_ONLY_KEYS.ROUTING_INFO, e);
    const {
      domain: t,
      edgeRouting: n
    } = e;
    const r = {
      domain: t,
      edgeRouting: n ? (0, a.encodeB64)(n) : null
    };
    return p.default.set(u.MD_KEYS.ROUTING_INFO, r, {
      storage: o.default
    });
  })).apply(this, arguments);
}
function E() {
  return (E = (0, i.default)(function* (e) {
    if (e != null) {
      c.default.setItemToLocalStorage(u.MD_NOISE_KEYS.WEB_ENC_SALT, e);
      yield s.userPrefsCacheStorage.setItemToCacheStorage(u.MD_NOISE_KEYS.WEB_ENC_SALT, e);
    } else {
      c.default.removeItemFromLocalStorage(u.MD_NOISE_KEYS.WEB_ENC_SALT);
      yield s.userPrefsCacheStorage.removeItemFromCacheStorage(u.MD_NOISE_KEYS.WEB_ENC_SALT);
    }
    return p.default.set(u.MD_KEYS.WEB_ENC_SALT, e, {
      shouldWriteToIdb: false
    });
  })).apply(this, arguments);
}
function S() {
  return (S = (0, i.default)(function* (e) {
    if (e == null) {
      yield l.userPrefsIdb.remove(u.BACKEND_ONLY_KEYS.ADV_SECRET_KEY);
    } else {
      yield l.userPrefsIdb.set(u.BACKEND_ONLY_KEYS.ADV_SECRET_KEY, e);
    }
    return p.default.set(u.MD_KEYS.ADV_SECRET_KEY, e);
  })).apply(this, arguments);
}
function v() {
  return (v = (0, i.default)(function* (e) {
    yield l.userPrefsIdb.set(u.BACKEND_ONLY_KEYS.BLOCKLIST_HASH, e);
    return p.default.set(u.MD_KEYS.BLOCKLIST_HASH, e);
  })).apply(this, arguments);
}
function T() {
  return (T = (0, i.default)(function* (e) {
    yield l.userPrefsIdb.set(u.BACKEND_ONLY_KEYS.RECENT_MAILBOX_AGE_DAYS, e);
    return p.default.set(u.MD_KEYS.RECENT_MAILBOX_AGE_DAYS, e);
  })).apply(this, arguments);
}
function M() {
  return (M = (0, i.default)(function* () {
    return l.userPrefsIdb.get(u.BACKEND_ONLY_KEYS.RECENT_MAILBOX_AGE_DAYS);
  })).apply(this, arguments);
}
function A() {
  return (A = (0, i.default)(function* (e) {
    yield l.userPrefsIdb.set(u.BACKEND_ONLY_KEYS.UNARCHIVE_CHATS_SETTING, e);
    p.default.set(u.MD_KEYS.UNARCHIVE_CHATS_SETTING, e);
  })).apply(this, arguments);
}
function b() {
  return (b = (0, i.default)(function* (e) {
    yield l.userPrefsIdb.set(u.BACKEND_ONLY_KEYS.ARCHIVE_V2_ENABLED_SETTING, e);
    p.default.set(u.MD_KEYS.ARCHIVE_V2_ENABLED_SETTING, e);
  })).apply(this, arguments);
}
function C() {
  return (C = (0, i.default)(function* (e) {
    yield l.userPrefsIdb.set(u.BACKEND_ONLY_KEYS.CHAT_THREAD_LOGGING_OFFSET, e);
    p.default.set(u.MD_KEYS.CHAT_THREAD_LOGGING_OFFSET, e);
  })).apply(this, arguments);
}
function P() {
  return (P = (0, i.default)(function* (e) {
    yield l.userPrefsIdb.set(u.BACKEND_ONLY_KEYS.CHAT_THREAD_LOGGING_SECRET, e);
    p.default.set(u.MD_KEYS.CHAT_THREAD_LOGGING_SECRET, e);
  })).apply(this, arguments);
}
function O() {
  return (O = (0, i.default)(function* (e) {
    yield l.userPrefsIdb.set(u.BACKEND_ONLY_KEYS.CHAT_THREAD_LOGGING_LAST_UPLOADED_START_TS, e);
    p.default.set(u.MD_KEYS.CHAT_THREAD_LOGGING_LAST_UPLOADED_START_TS, e);
  })).apply(this, arguments);
}
function I() {
  return (I = (0, i.default)(function* () {})).apply(this, arguments);
}
function R() {
  return (R = (0, i.default)(function* () {
    return false;
  })).apply(this, arguments);
}