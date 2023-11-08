var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseMexNewsletterResponse = function (e) {
  if (e != null && (e == null ? undefined : e.id) != null) {
    var t;
    var n;
    var r;
    var o;
    var E;
    var S;
    var v;
    var T;
    var M;
    var A;
    var b;
    var C;
    var P;
    var O;
    var I;
    var R;
    var N;
    var D;
    var w;
    var L;
    var k;
    var G;
    var U;
    var x;
    var B;
    var F;
    var j;
    var Y;
    const K = (t = e.thread_metadata) === null || t === undefined ? undefined : t.creation_time;
    const W = (n = e.thread_metadata) === null || n === undefined ? undefined : n.handle;
    const V = (r = e.thread_metadata) === null || r === undefined ? undefined : r.invite;
    const H = (o = e.thread_metadata) === null || o === undefined ? undefined : o.name;
    const $ = (E = e.thread_metadata) === null || E === undefined ? undefined : E.subscribers_count;
    const z = (S = e.viewer_metadata) === null || S === undefined ? undefined : S.mute;
    const q = (v = e.thread_metadata) === null || v === undefined ? undefined : v.verification;
    const J = (T = e.state) === null || T === undefined ? undefined : T.type;
    const Q = (M = e.thread_metadata) === null || M === undefined ? undefined : M.description;
    const X = (A = e.viewer_metadata) === null || A === undefined ? undefined : A.role;
    const Z = (b = (C = e.thread_metadata) === null || C === undefined ? undefined : C.picture) !== null && b !== undefined ? b : (P = e.thread_metadata) === null || P === undefined ? undefined : P.image;
    const ee = (O = e.thread_metadata) === null || O === undefined ? undefined : O.preview;
    const te = (I = e.thread_metadata) === null || I === undefined || (R = I.settings) === null || R === undefined || (N = R.reaction_codes) === null || N === undefined ? undefined : N.value;
    return (0, i.default)({
      idJid: (0, a.toNewsletterJid)(e.id),
      newsletterCreationTimeMetadataMixin: (D = s(K)) !== null && D !== undefined ? D : null,
      newsletterHandleMetadataMixin: (w = l(W)) !== null && w !== undefined ? w : null,
      newsletterInviteLinkMetadataMixin: (L = u(V)) !== null && L !== undefined ? L : null,
      newsletterNameMetadataMixin: (k = c(H)) !== null && k !== undefined ? k : null,
      newsletterSubscribersMetadataMixin: (G = d($)) !== null && G !== undefined ? G : null,
      newsletterMutedMetadataMixin: (U = p(z)) !== null && U !== undefined ? U : null,
      newsletterVerificationMetadataMixin: (x = f(q)) !== null && x !== undefined ? x : null,
      newsletterStateMetadataMixin: (B = _(J)) !== null && B !== undefined ? B : null,
      newsletterDescriptionMetadataMixin: (F = g(Q)) !== null && F !== undefined ? F : null,
      newsletterMembershipMetadataMixin: (j = m(X)) !== null && j !== undefined ? j : null,
      newsletterPictureMetadataMixin: (Y = y([Z, ee])) !== null && Y !== undefined ? Y : null,
      newsletterLinkedAccountsMetadataMixin: null,
      newsletterPrivacyMetadataMixin: null
    }, te != null && {
      newsletterReactionCodesSettingMetadataMixin: h(te)
    });
  }
  return null;
};
var i = r(require("../vendor/81109.js"));
var a = require("./418987.js");
var o = require("./927531.js");
function s(e) {
  if (e != null) {
    return {
      creationTimeValue: Number(e)
    };
  }
}
function l(e) {
  if (e != null) {
    return {
      handleText: e
    };
  }
}
function u(e) {
  if (e != null) {
    return {
      inviteCode: e
    };
  }
}
function c(e) {
  var t;
  if (e != null) {
    return {
      nameId: e.id,
      nameUpdateTime: Number(e == null ? undefined : e.update_time),
      nameElementValue: (t = e == null ? undefined : e.text) !== null && t !== undefined ? t : ""
    };
  }
}
function d(e) {
  if (e != null) {
    return {
      subscribersCount: Number(e)
    };
  }
}
function p(e) {
  if (e != null) {
    let t = "undefined";
    if (e.toLowerCase() === "off") {
      t = "off";
    } else if (e.toLowerCase() === "on") {
      t = "on";
    }
    return {
      mutedState: t
    };
  }
}
function f(e) {
  if (e != null) {
    return {
      verificationState: e.toLowerCase() === "unverified" ? "unverified" : "verified"
    };
  }
}
function _(e) {
  let t;
  if ((e == null ? undefined : e.toLowerCase()) === "active") {
    t = "active";
  } else if ((e == null ? undefined : e.toLowerCase()) === "suspended") {
    t = "suspended";
  } else if ((e == null ? undefined : e.toLowerCase()) === "geosuspended") {
    t = "geosuspended";
  }
  if (t != null) {
    return {
      stateType: t
    };
  }
}
function g(e) {
  const t = e == null ? undefined : e.text;
  const n = e == null ? undefined : e.update_time;
  if (e != null && t != null && n != null) {
    return {
      descriptionQueryDescriptionResponseMixin: {
        id: e.id,
        updateTime: Number(n),
        elementValue: t
      }
    };
  }
}
function m(e) {
  if (e != null) {
    let t;
    switch (e.toLowerCase()) {
      case "admin":
        t = "admin";
        break;
      case "guest":
        t = "guest";
        break;
      case "owner":
        t = "owner";
        break;
      case "subscriber":
        t = "subscriber";
    }
    if (t != null) {
      return {
        membershipType: t
      };
    }
  }
}
function h(e) {
  switch (e) {
    case "ALL":
      return o.NewsletterReactionCodesSetting.All;
    case "BLOCKLIST":
      return o.NewsletterReactionCodesSetting.Blocklist;
    case "NONE":
      return o.NewsletterReactionCodesSetting.None;
    case "BASIC":
      return o.NewsletterReactionCodesSetting.Basic;
    default:
      return null;
  }
}
function y(e) {
  const t = [];
  for (const n of e) {
    if (n != null && n != null && n.type != null) {
      const e = n.type.toLowerCase() === "image" ? "image" : "preview";
      if (n.direct_path != null && n.direct_path !== "" && n.id != null && n.type != null) {
        t.push({
          queryPictureDirectPathOrMatchedOrEmptyResponseMixinGroup: {
            name: "QueryPictureDirectPathResponse",
            value: {
              directPath: n.direct_path,
              type: e,
              id: n.id
            }
          }
        });
      } else if (n.direct_path === "" || n.direct_path == null) {
        t.push({
          queryPictureDirectPathOrMatchedOrEmptyResponseMixinGroup: {
            name: "QueryPictureEmptyResponse",
            value: {
              type: "image"
            }
          }
        });
      } else if (n.type != null && n.id != null) {
        t.push({
          queryPictureDirectPathOrMatchedOrEmptyResponseMixinGroup: {
            name: "QueryPictureMatchedResponse",
            value: {
              id: n.id,
              type: e
            }
          }
        });
      }
    }
  }
  return {
    picture: [...t]
  };
}