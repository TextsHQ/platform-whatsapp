var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertDirectoryNewsletterMetadataToNewsletterMetadata = E;
exports.getRoleByIdentifier = function (e) {
  var t;
  var n;
  if (d.default.isNewsletter(e)) {
    if ((n = c.default.get(e)) === null || n === undefined) {
      return undefined;
    } else {
      return n.membershipType;
    }
  } else if ((t = c.default.filter(t => t.inviteCode === e)[0]) === null || t === undefined) {
    return undefined;
  } else {
    return t.membershipType;
  }
};
exports.isMembershipAdminOrOwner = m;
exports.isVerifiedNewsletter = f;
exports.mapDirectoryNewsletterToChat = function (e) {
  const t = E(e);
  _(t);
  return g(t);
};
exports.mapDirectoryNewsletterToMetadata = function (e) {
  const t = E(e);
  _(t);
  return y(t);
};
exports.mapMessagesToModels = function (e, t) {
  if (t == null) {
    return [];
  }
  const r = require("./692544.js").msgModelFromMsgData;
  const i = (0, l.jidWithTypeToWid)({
    jidType: "newsletter",
    newsletterJid: e
  });
  return t.reduce((e, t) => {
    const n = (0, u.mapNewsletterMsgToMsgData)(t, i);
    if (!(n == null)) {
      e.push(r(n));
    }
    return e;
  }, []);
};
exports.mapNewsletterToChat = h;
exports.mapNewsletterToMetadata = S;
exports.mapNewsletterToModels = function (e) {
  var t;
  var n;
  return {
    chat: h(e),
    metadata: S(e),
    pic: T(e.idJid, (t = (n = e.newsletterPictureMetadataMixin) === null || n === undefined ? undefined : n.picture) !== null && t !== undefined ? t : [])
  };
};
exports.mapPicturesToProfilePicThumb = T;
exports.mapPreviewNewsletterToChat = g;
exports.mapPreviewNewsletterToMetadata = y;
var i = r(require("../vendor/535937.js"));
var a = require("./755688.js");
var o = require("./632157.js");
var s = require("./927531.js");
var l = require("./854379.js");
var u = require("./870366.js");
var c = r(require("./876319.js"));
var d = r(require("./124928.js"));
var p = require("./669050.js");
r(require("./556869.js"));
function f(e) {
  return e === "verified";
}
function _(e) {
  var t;
  const n = (t = e.newsletterMembershipMetadataMixin) === null || t === undefined ? undefined : t.membershipType;
  if (n != null && n !== "guest") {
    __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter][throwIfNewsletterNotPreview] ${"Trying to map an already subscribed newsletter"}`;
    SEND_LOGS("newsletter-converting-already-subscribed-newsletter", 1, "newsletter");
  }
}
function g(e) {
  const t = h(e);
  t.muteExpiration = -1;
  t.isReadOnly = true;
  return t;
}
function m(e) {
  return e === "admin" || e === "owner";
}
function h(e) {
  var t;
  var n;
  var r;
  var a;
  const s = (t = e.newsletterNameMetadataMixin) === null || t === undefined ? undefined : t.nameElementValue;
  const l = (n = e.newsletterMembershipMetadataMixin) === null || n === undefined ? undefined : n.membershipType;
  const u = (r = e.newsletterMutedMetadataMixin) === null || r === undefined ? undefined : r.mutedState;
  const c = u === "on" ? -1 : 0;
  const d = (a = e.newsletterCreationTimeMetadataMixin) === null || a === undefined ? undefined : a.creationTimeValue;
  const f = {
    id: (0, p.createWid)(e.idJid),
    name: s != null ? s : undefined,
    isReadOnly: l != null ? !m(l) : undefined,
    muteExpiration: u != null && u !== "undefined" ? c : undefined,
    t: d != null ? (0, o.castToUnixTime)(d) : undefined
  };
  return (0, i.default)(f, e => e != null);
}
function y(e) {
  const t = S(e);
  t.membershipType = s.NewsletterMembershipType.Guest;
  return t;
}
function E(e) {
  return {
    idJid: e.idJid,
    newsletterCreationTimeMetadataMixin: e.newsletterCreationTimeMetadataMixin,
    newsletterNameMetadataMixin: e.newsletterNameMetadataMixin,
    newsletterPictureMetadataMixin: e.newsletterPictureMetadataMixin,
    newsletterDescriptionMetadataMixin: e.newsletterDescriptionMetadataMixin,
    newsletterInviteLinkMetadataMixin: e.newsletterInviteLinkMetadataMixin,
    newsletterHandleMetadataMixin: e.newsletterHandleMetadataMixin,
    newsletterSubscribersMetadataMixin: e.newsletterSubscribersMetadataMixin,
    newsletterPrivacyMetadataMixin: e.newsletterPrivacyMetadataMixin,
    newsletterVerificationMetadataMixin: e.newsletterVerificationMetadataMixin,
    newsletterLinkedAccountsMetadataMixin: null,
    newsletterMembershipMetadataMixin: null,
    newsletterMutedMetadataMixin: {
      mutedState: "undefined"
    },
    newsletterStateMetadataMixin: null
  };
}
function S(e) {
  var t;
  var n;
  var r;
  var o;
  var l;
  var u;
  var c;
  var d;
  var _;
  var g;
  var m;
  var h;
  var y;
  var E;
  var S;
  var v;
  var T;
  const M = (t = e.newsletterVerificationMetadataMixin) === null || t === undefined ? undefined : t.verificationState;
  const A = (n = e.newsletterStateMetadataMixin) === null || n === undefined ? undefined : n.stateType;
  const b = (r = e.newsletterMembershipMetadataMixin) === null || r === undefined ? undefined : r.membershipType;
  const C = (o = e.newsletterPrivacyMetadataMixin) === null || o === undefined ? undefined : o.privacyType;
  const P = (l = e.newsletterLinkedAccountsMetadataMixin) === null || l === undefined || (u = l.linkedAccountWebsiteMixin) === null || u === undefined ? undefined : u.linkedAccountUrl;
  const O = {
    id: (0, p.createWid)(e.idJid),
    creationTime: (c = e.newsletterCreationTimeMetadataMixin) === null || c === undefined ? undefined : c.creationTimeValue,
    name: (d = e.newsletterNameMetadataMixin) === null || d === undefined ? undefined : d.nameElementValue,
    nameUpdateTime: (_ = e.newsletterNameMetadataMixin) === null || _ === undefined ? undefined : _.nameUpdateTime,
    description: (g = e.newsletterDescriptionMetadataMixin) === null || g === undefined || (m = g.descriptionQueryDescriptionResponseMixin) === null || m === undefined ? undefined : m.elementValue,
    descriptionUpdateTime: (h = e.newsletterDescriptionMetadataMixin) === null || h === undefined || (y = h.descriptionQueryDescriptionResponseMixin) === null || y === undefined ? undefined : y.updateTime,
    handle: (E = e.newsletterHandleMetadataMixin) === null || E === undefined ? undefined : E.handleText,
    inviteCode: (S = e.newsletterInviteLinkMetadataMixin) === null || S === undefined ? undefined : S.inviteCode,
    size: (v = e.newsletterSubscribersMetadataMixin) === null || v === undefined ? undefined : v.subscribersCount,
    verified: M != null ? f(M) : undefined,
    membershipType: b != null ? s.NewsletterMembershipType.cast(b) : undefined,
    reactionCodesSetting: Object.keys(e).includes("newsletterReactionCodesSettingMetadataMixin") ? (T = e == null ? undefined : e.newsletterReactionCodesSettingMetadataMixin) !== null && T !== undefined ? T : s.NewsletterReactionCodesSetting.All : undefined,
    privacy: C != null ? s.NewsletterPrivacy.cast(C) : undefined,
    website: P != null ? (0, a.findLink)(P) : undefined,
    suspended: A != null ? s.NewsletterState.cast(A) === s.NewsletterState.Suspended || s.NewsletterState.cast(A) === s.NewsletterState.GeoSuspended : undefined,
    geosuspended: A != null ? s.NewsletterState.cast(A) === s.NewsletterState.GeoSuspended : undefined
  };
  return (0, i.default)(O, e => e != null);
}
function v(e) {
  if (e == null || e === "") {
    return null;
  }
  return new URL(e, "https://pps.whatsapp.net").href;
}
function T(e, t) {
  var n;
  var r;
  var a;
  var o;
  var s;
  var l;
  var u;
  const c = (0, p.createWid)(e);
  if (t.length === 0) {
    return {
      id: c
    };
  }
  let d;
  let f;
  for (const e of t) {
    const {
      queryPictureDirectPathOrMatchedOrEmptyResponseMixinGroup: t
    } = e;
    if (t.name === "QueryPictureDirectPathResponse") {
      if (t.value.type === "preview") {
        f = t.value;
      } else if (t.value.type === "image") {
        d = t.value;
      }
    } else if (t.name === "QueryPictureEmptyResponse") {
      return {
        id: c,
        timestamp: Date.now(),
        eurl: null,
        previewEurl: null,
        eurlStale: false,
        stale: false
      };
    }
  }
  const _ = {
    id: c,
    timestamp: Date.now(),
    tag: (n = (r = d) === null || r === undefined ? undefined : r.id) !== null && n !== undefined ? n : (a = f) === null || a === undefined ? undefined : a.id,
    eurl: v((o = (s = d) === null || s === undefined ? undefined : s.directPath) !== null && o !== undefined ? o : (l = f) === null || l === undefined ? undefined : l.directPath),
    previewEurl: v((u = f) === null || u === undefined ? undefined : u.directPath),
    eurlStale: false,
    stale: false
  };
  return (0, i.default)(_, e => e != null);
}