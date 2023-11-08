var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVerifiedName = exports.getVerifiedLevel = exports.getUserid = exports.getUserhash = exports.getType = exports.getStatusMute = exports.getShowBusinessCheckmarkInChatlist = exports.getShowBusinessCheckmarkAsSecondary = exports.getShowBusinessCheckmarkAsPrimary = exports.getShouldForceBusinessUpdate = exports.getShortName = exports.getSearchVerifiedName = exports.getRequestedPnTimestamp = exports.getPushname = exports.getPrivacyMode = exports.getPremiumMessageName = exports.getNotifyName = exports.getName = exports.getMentionName = exports.getLabels = exports.getIsWAContact = exports.getIsUser = exports.getIsSupportAccount = exports.getIsSmb = exports.getIsPSA = exports.getIsNewsletter = exports.getIsMyContact = exports.getIsMe = exports.getIsIAS = exports.getIsGroup = exports.getIsEnterprise = exports.getIsDisplayNameApproved = exports.getIsContactSyncCompleted = exports.getIsCAPISupportAccount = exports.getIsBusiness = exports.getIsBroadcast = exports.getId = exports.getHeader = exports.getForcedBusinessUpdateFromServer = exports.getContactUnsafe = exports.getCanRequestPhoneNumber = exports.clearContactGetterCacheFor = undefined;
var i = r(require("./983254.js"));
var a = require("./632157.js");
var o = r(require("./704359.js"));
var s = require("./817649.js");
var l = require("./572002.js");
var u = require("./272619.js");
var c = require("./535979.js");
var d = r(require("./932325.js"));
var p = require("./459857.js");
var f = r(require("./124928.js"));
const {
  field: _,
  computed: g,
  unsafeIdentityGetter: m,
  clearCacheFor: h
} = (0, u.createGetterFactories)({
  createCache: c.createContactsCache
});
const y = h;
exports.clearContactGetterCacheFor = y;
const E = m;
exports.getContactUnsafe = E;
const S = Object.defineProperty(_("id"), "name", {
  value: "getId"
});
exports.getId = S;
const v = Object.defineProperty(_("pushname"), "name", {
  value: "getPushname"
});
exports.getPushname = v;
const T = Object.defineProperty(_("isBusiness"), "name", {
  value: "getIsBusiness"
});
exports.getIsBusiness = T;
const M = Object.defineProperty(_("verifiedLevel"), "name", {
  value: "getVerifiedLevel"
});
exports.getVerifiedLevel = M;
const A = Object.defineProperty(_("verifiedName"), "name", {
  value: "getVerifiedName"
});
exports.getVerifiedName = A;
const b = Object.defineProperty(_("name"), "name", {
  value: "getName"
});
exports.getName = b;
const C = Object.defineProperty(_("forcedBusinessUpdateFromServer"), "name", {
  value: "getForcedBusinessUpdateFromServer"
});
exports.getForcedBusinessUpdateFromServer = C;
const P = Object.defineProperty(_("isContactSyncCompleted"), "name", {
  value: "getIsContactSyncCompleted"
});
exports.getIsContactSyncCompleted = P;
const O = Object.defineProperty(_("type"), "name", {
  value: "getType"
});
exports.getType = O;
const I = Object.defineProperty(_("requestedPnTimestamp"), "name", {
  value: "getRequestedPnTimestamp"
});
exports.getRequestedPnTimestamp = I;
const R = Object.defineProperty(_("shortName"), "name", {
  value: "getShortName"
});
exports.getShortName = R;
const N = Object.defineProperty(_("isEnterprise"), "name", {
  value: "getIsEnterprise"
});
exports.getIsEnterprise = N;
const D = Object.defineProperty(_("isSmb"), "name", {
  value: "getIsSmb"
});
exports.getIsSmb = D;
const w = Object.defineProperty(_("labels"), "name", {
  value: "getLabels"
});
exports.getLabels = w;
const L = Object.defineProperty(_("statusMute"), "name", {
  value: "getStatusMute"
});
exports.getStatusMute = L;
const k = Object.defineProperty(_("privacyMode"), "name", {
  value: "getPrivacyMode"
});
exports.getPrivacyMode = k;
const G = Object.defineProperty(g(e => {
  let [t, n, r, i] = e;
  if (n && r !== s.VERIFIED_LEVEL.HIGH) {
    return i;
  } else {
    return t;
  }
}, [v, T, M, A]), "name", {
  value: "getNotifyName"
});
exports.getNotifyName = G;
const U = Object.defineProperty(g(e => {
  let [t] = e;
  return t || "";
}, [v]), "name", {
  value: "getPremiumMessageName"
});
exports.getPremiumMessageName = U;
const x = Object.defineProperty(g(e => {
  let [t, n] = e;
  if (t !== s.VERIFIED_LEVEL.HIGH) {
    return null;
  } else if (n) {
    return d.default.accentFold(n);
  } else {
    return null;
  }
}, [M, A]), "name", {
  value: "getSearchVerifiedName"
});
exports.getSearchVerifiedName = x;
const B = /^[^0-9]+$/;
const F = Object.defineProperty(g(e => {
  let [t, n, r, i] = e;
  function a(e) {
    const t = e.toLowerCase();
    const n = o.default.exec(t);
    if (n && n.index === 0 || n && B.test(t.slice(n.index))) {
      const e = n[0];
      const t = d.default.removeAccents(e);
      if ((0, l.getCollator)().compare(t, e)) {
        return e;
      } else {
        return t;
      }
    }
    return "#";
  }
  if (t) {
    return a(t);
  } else if (r === s.VERIFIED_LEVEL.HIGH && n) {
    return a(n);
  } else if (i != null && i !== "") {
    return "~";
  } else {
    return "#";
  }
}, [b, A, M, G]), "name", {
  value: "getHeader"
});
exports.getHeader = F;
const j = Object.defineProperty(g(e => {
  let [t] = e;
  return (0, p.isMeAccount)(t);
}, [S]), "name", {
  value: "getIsMe"
});
exports.getIsMe = j;
const Y = Object.defineProperty(g(e => {
  let [t] = e;
  return f.default.isUser(t);
}, [S]), "name", {
  value: "getIsUser"
});
exports.getIsUser = Y;
const K = Object.defineProperty(g(e => {
  let [t] = e;
  return f.default.isGroup(t);
}, [S]), "name", {
  value: "getIsGroup"
});
exports.getIsGroup = K;
const W = Object.defineProperty(g(e => {
  let [t] = e;
  return f.default.isBroadcast(t);
}, [S]), "name", {
  value: "getIsBroadcast"
});
exports.getIsBroadcast = W;
const V = Object.defineProperty(g(e => {
  let [t] = e;
  return f.default.isNewsletter(t);
}, [S]), "name", {
  value: "getIsNewsletter"
});
exports.getIsNewsletter = V;
const H = Object.defineProperty(g(e => {
  let [t] = e;
  return f.default.isPSA(t);
}, [S]), "name", {
  value: "getIsPSA"
});
exports.getIsPSA = H;
const $ = Object.defineProperty(g(e => {
  let [t] = e;
  return f.default.isIAS(t);
}, [S]), "name", {
  value: "getIsIAS"
});
exports.getIsIAS = $;
const z = Object.defineProperty(g(e => {
  let [t] = e;
  return f.default.isSupportAccount(t);
}, [S]), "name", {
  value: "getIsSupportAccount"
});
exports.getIsSupportAccount = z;
const q = Object.defineProperty(g(e => {
  let [t] = e;
  return f.default.isCAPISupportAccount(t);
}, [S]), "name", {
  value: "getIsCAPISupportAccount"
});
exports.getIsCAPISupportAccount = q;
const J = Object.defineProperty(g(e => {
  let [t, n] = e;
  return t && n === "in";
}, [Y, O]), "name", {
  value: "getIsWAContact"
});
exports.getIsWAContact = J;
const Q = Object.defineProperty(g(e => {
  let [t, n] = e;
  return !(!t || !(n == null ? undefined : n.length));
}, [Y, b]), "name", {
  value: "getIsMyContact"
});
exports.getIsMyContact = Q;
const X = Object.defineProperty(g(e => {
  let [t, n, r, i, a] = e;
  if (!t && n && r !== s.VERIFIED_LEVEL.HIGH) {
    return null;
  } else {
    return i || a;
  }
}, [Q, T, M, b, G]), "name", {
  value: "getMentionName"
});
exports.getMentionName = X;
const Z = Object.defineProperty(g(e => {
  let [t, n] = e;
  if (t) {
    return (0, i.default)((n.user || "") + "WA_ADD_NOTIF");
  } else {
    return null;
  }
}, [Y, S]), "name", {
  value: "getUserhash"
});
exports.getUserhash = Z;
const ee = Object.defineProperty(g(e => {
  let [t, n] = e;
  if (t) {
    return f.default.user(n);
  } else {
    return null;
  }
}, [Y, S]), "name", {
  value: "getUserid"
});
exports.getUserid = ee;
const te = Object.defineProperty(g(e => {
  let [t] = e;
  return t == null || t + a.DAY_SECONDS < (0, a.unixTime)();
}, [I]), "name", {
  value: "getCanRequestPhoneNumber"
});
exports.getCanRequestPhoneNumber = te;
const ne = Object.defineProperty(g(e => {
  let [t, n, r, i, a] = e;
  return a || t && n === s.VERIFIED_LEVEL.HIGH && (r === i || !r);
}, [T, M, b, A, z]), "name", {
  value: "getShowBusinessCheckmarkAsPrimary"
});
exports.getShowBusinessCheckmarkAsPrimary = ne;
const re = Object.defineProperty(g(e => {
  let [t, n, r, i] = e;
  return t && n === s.VERIFIED_LEVEL.HIGH && Boolean(r) && r !== i;
}, [T, M, b, A]), "name", {
  value: "getShowBusinessCheckmarkAsSecondary"
});
exports.getShowBusinessCheckmarkAsSecondary = re;
const ie = Object.defineProperty(g(e => {
  let [t, n] = e;
  return t && n === s.VERIFIED_LEVEL.HIGH;
}, [T, M]), "name", {
  value: "getShowBusinessCheckmarkInChatlist"
});
exports.getShowBusinessCheckmarkInChatlist = ie;
const ae = Object.defineProperty(g(e => {
  let [t, n] = e;
  return t && (n === s.VERIFIED_LEVEL.HIGH || n === s.VERIFIED_LEVEL.LOW);
}, [T, M]), "name", {
  value: "getIsDisplayNameApproved"
});
exports.getIsDisplayNameApproved = ae;
const oe = Object.defineProperty(g(e => {
  let [t, n] = e;
  return !t && !n;
}, [C, P]), "name", {
  value: "getShouldForceBusinessUpdate"
});
exports.getShouldForceBusinessUpdate = oe;