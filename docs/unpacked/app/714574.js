var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVerificationString = exports.getVerificationBinary = exports.getUsername = exports.getUserDisplayNameForLid = exports.getTextStatusString = exports.getTextStatusLastUpdateTime = exports.getTextStatusExpiryTs = exports.getTextStatusEphemeralDuration = exports.getTextStatusEmoji = exports.getShareOwnPn = exports.getSearchName = exports.getPnForLid = exports.getPhoneNumber = exports.getPendingAction = exports.getLocale = exports.getIsContactBlocked = exports.getFormattedUsername = exports.getFormattedUser = exports.getFormattedShortNameWithNonBreakingSpaces = exports.getFormattedShortName = exports.getFormattedPhone = exports.getFormattedName = exports.getDisplayNameLID = exports.getDisplayName = exports.getCommonGroups = exports.getBusinessProfile = exports.getBusinessCatalog = exports.clearFrontendContactGetterCacheFor = undefined;
var i = require("./287461.js");
var a = require("./817649.js");
var o = require("./445729.js");
var s = require("./660666.js");
var l = require("./272619.js");
var u = require("./535979.js");
var c = r(require("./932325.js"));
var d = require("./129417.js");
var p = r(require("./124928.js"));
var f = require("./931019.js");
var _ = r(require("./286816.js"));
var g = require("../vendor/548360.js");
r(require("../vendor/667294.js"));
const {
  field: m,
  computed: h,
  clearCacheFor: y
} = (0, l.createGetterFactories)({
  root: s.getContactUnsafe,
  createCache: u.createFrontendContactsCache
});
const E = y;
exports.clearFrontendContactGetterCacheFor = E;
const S = Object.defineProperty(m("phoneNumber"), "name", {
  value: "getPhoneNumber"
});
exports.getPhoneNumber = S;
const v = Object.defineProperty(m("displayNameLID"), "name", {
  value: "getDisplayNameLID"
});
exports.getDisplayNameLID = v;
const T = Object.defineProperty(m("locale"), "name", {
  value: "getLocale"
});
exports.getLocale = T;
const M = Object.defineProperty(m("pendingAction"), "name", {
  value: "getPendingAction"
});
exports.getPendingAction = M;
const A = Object.defineProperty(m("isContactBlocked"), "name", {
  value: "getIsContactBlocked"
});
exports.getIsContactBlocked = A;
const b = Object.defineProperty(m("shareOwnPn"), "name", {
  value: "getShareOwnPn"
});
exports.getShareOwnPn = b;
const C = Object.defineProperty(m("businessProfile"), "name", {
  value: "getBusinessProfile"
});
exports.getBusinessProfile = C;
const P = Object.defineProperty(m("commonGroups"), "name", {
  value: "getCommonGroups"
});
exports.getCommonGroups = P;
const O = Object.defineProperty(m("verificationBinary"), "name", {
  value: "getVerificationBinary"
});
exports.getVerificationBinary = O;
const I = Object.defineProperty(m("verificationString"), "name", {
  value: "getVerificationString"
});
exports.getVerificationString = I;
const R = Object.defineProperty(m("businessCatalog"), "name", {
  value: "getBusinessCatalog"
});
exports.getBusinessCatalog = R;
const N = Object.defineProperty(m("textStatusString"), "name", {
  value: "getTextStatusString"
});
exports.getTextStatusString = N;
const D = Object.defineProperty(m("textStatusEmoji"), "name", {
  value: "getTextStatusEmoji"
});
exports.getTextStatusEmoji = D;
const w = Object.defineProperty(m("textStatusEphemeralDuration"), "name", {
  value: "getTextStatusEphemeralDuration"
});
exports.getTextStatusEphemeralDuration = w;
const L = Object.defineProperty(m("textStatusLastUpdateTime"), "name", {
  value: "getTextStatusLastUpdateTime"
});
exports.getTextStatusLastUpdateTime = L;
const k = Object.defineProperty(m("textStatusExpiryTs"), "name", {
  value: "getTextStatusExpiryTs"
});
exports.getTextStatusExpiryTs = k;
const G = Object.defineProperty(m("username"), "name", {
  value: "getUsername"
});
exports.getUsername = G;
const U = Object.defineProperty(h(e => {
  let [t] = e;
  if (t != null && t.length > 0) {
    return `@${t}`;
  } else {
    return null;
  }
}, [G]), "name", {
  value: "getFormattedUsername"
});
exports.getFormattedUsername = U;
const x = Object.defineProperty(h(e => {
  let [t, n, r] = e;
  if (t != null) {
    return (0, f.widToFormattedUser)(t);
  } else if ((0, d.usernameDisplayedEnabled)() && r != null) {
    return r;
  } else if (n != null) {
    return n;
  } else {
    return (0, f.getUnknownNumber)();
  }
}, [S, v, U]), "name", {
  value: "getPnForLid"
});
exports.getPnForLid = x;
const B = Object.defineProperty(h(e => {
  let [t, r] = e;
  if (!t.isLid()) {
    return null;
  }
  const i = r;
  if (i == null) {
    return null;
  }
  const a = require("./177938.js").ContactCollection.get(i);
  if (a != null && (0, s.getIsMyContact)(a)) {
    return a.name;
  } else {
    return undefined;
  }
}, [s.getId, S]), "name", {
  value: "getLidPhoneNumberContactName"
});
const F = Object.defineProperty(h(e => {
  let [t, n] = e;
  if (t != null) {
    return t;
  } else {
    return n;
  }
}, [B, x]), "name", {
  value: "getUserDisplayNameForLid"
});
exports.getUserDisplayNameForLid = F;
const j = Object.defineProperty(h(e => {
  let [t, n] = e;
  try {
    if (t.isLid()) {
      return n;
    }
  } catch (e) {
    __LOG__(4, undefined, new Error(), true)`Invalid id for contact id: ${t}`;
    SEND_LOGS("invalid-contact-id");
  }
  return (0, f.widToFormattedUser)(t);
}, [s.getId, x]), "name", {
  value: "getFormattedPhone"
});
exports.getFormattedPhone = j;
const Y = Object.defineProperty(h(e => {
  let [t, n, r, i] = e;
  if (r && o.Conn.pushname) {
    return o.Conn.pushname;
  } else if (p.default.isPSA(t)) {
    return _.default._("WhatsApp", null, {
      hk: "ZGQ0N"
    }).toString();
  } else if (n != null && n !== "") {
    return n;
  } else {
    return i;
  }
}, [s.getId, s.getMentionName, s.getIsMe, j]), "name", {
  value: "getDisplayName"
});
exports.getDisplayName = Y;
const K = Object.defineProperty(h(e => {
  let [t, n, r, i, a, o] = e;
  if (p.default.isPSA(r)) {
    return _.default._("WhatsApp", null, {
      hk: "ZGQ0N"
    }).toString();
  }
  if (p.default.isSupportAccount(r)) {
    return c.default.accentFold("WhatsApp Support");
  }
  if (a) {
    const e = g.fbt._("{nameOrPhoneNumber} (You)", [g.fbt._param("nameOrPhoneNumber", t != null ? t : n)], {
      hk: "dRYOr"
    });
    return c.default.accentFold(e.toString());
  }
  if (i != null) {
    return c.default.accentFold(i);
  } else if (t) {
    return c.default.accentFold(t);
  } else {
    return null;
  }
}, [s.getName, j, s.getId, B, s.getIsMe, T]), "name", {
  value: "getSearchName"
});
exports.getSearchName = K;
const W = Object.defineProperty(h(e => {
  let [t, n, r, i, o, s, l, u] = e;
  if (n) {
    if (l) {
      return _.default._("You", null, {
        hk: "LtuSj"
      }).toString();
    } else if (p.default.isPSA(n)) {
      return _.default._("WhatsApp", null, {
        hk: "ZGQ0N"
      }).toString();
    } else if (p.default.isSupportAccount(n)) {
      return "WhatsApp Support";
    } else {
      return t || (r === a.VERIFIED_LEVEL.HIGH && i ? i : s ? o : "");
    }
  } else {
    return "";
  }
}, [s.getName, s.getId, s.getVerifiedLevel, s.getVerifiedName, j, s.getIsUser, s.getIsMe, T]), "name", {
  value: "getFormattedName"
});
exports.getFormattedName = W;
const V = Object.defineProperty(h(e => {
  let [t, n, r, i, a] = e;
  if (r) {
    if (i) {
      return _.default._("You", null, {
        hk: "LtuSj"
      }).toString();
    } else {
      return t || n && n.replace(/\s/g, " ");
    }
  } else {
    return "";
  }
}, [s.getShortName, W, s.getId, s.getIsMe, T]), "name", {
  value: "getFormattedShortNameWithNonBreakingSpaces"
});
exports.getFormattedShortNameWithNonBreakingSpaces = V;
const H = Object.defineProperty(h(e => {
  let [t, n, r, i, a] = e;
  if (r) {
    if (i) {
      return _.default._("You", null, {
        hk: "LtuSj"
      }).toString();
    } else {
      return t || n;
    }
  } else {
    return "";
  }
}, [s.getShortName, W, s.getId, s.getIsMe, T]), "name", {
  value: "getFormattedShortName"
});
exports.getFormattedShortName = H;
const $ = Object.defineProperty(h(e => {
  let [t, n] = e;
  if (t) {
    return !(0, i.getABPropConfigValue)("web_display_name_for_enterprise_biz_vlevel_low_killswitch");
  } else {
    return !!n && !(0, i.getABPropConfigValue)("web_display_name_for_biz_vlevel_low_killswitch");
  }
}, [s.getIsEnterprise, s.getIsSmb]), "name", {
  value: "getIsDisplayNameEnabledForVerificationLevelLow"
});
const z = Object.defineProperty(h(e => {
  let [t, n, r, i, o, s, l, u, c] = e;
  if (n) {
    if (p.default.isPSA(n)) {
      return _.default._("WhatsApp", null, {
        hk: "ZGQ0N"
      }).toString();
    } else if (p.default.isSupportAccount(n)) {
      return "WhatsApp Support";
    } else {
      return t || (r === a.VERIFIED_LEVEL.HIGH && i || u && l && i ? i : s != null ? s : o);
    }
  } else {
    return "";
  }
}, [s.getName, s.getId, s.getVerifiedLevel, s.getVerifiedName, j, B, s.getIsDisplayNameApproved, $, T]), "name", {
  value: "getFormattedUser"
});
exports.getFormattedUser = z;