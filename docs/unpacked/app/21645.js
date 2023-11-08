var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactAndGroupName = function (e) {
  const {
    chat: t,
    contact: n,
    xstyle: r
  } = e;
  return I.default.createElement("span", {
    className: (0, R.default)(r)
  }, I.default.createElement($, {
    contact: n,
    useShortName: Boolean(n.shortName),
    showNotifyName: true,
    elevatedPushNamesEnabled: true
  }), I.default.createElement("span", null, " • "), I.default.createElement(V, {
    chat: t,
    groupMetadata: t.groupMetadata
  }));
};
exports.ContactName = W;
exports.GroupName = V;
exports.Name = $;
var i = r(require("../vendor/967154.js"));
var a = r(require("../vendor/506479.js"));
var o = r(require("./104563.js"));
var s = r(require("./110404.js"));
var l = require("./287461.js");
var u = require("./295933.js");
var c = require("./642838.js");
var d = require("./396574.js");
require("./650201.js");
var p = require("./780549.js");
var f = require("./660666.js");
var _ = require("./235630.js");
var g = require("./305521.js");
var m = r(require("./395767.js"));
var h = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = j(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("./675886.js"));
var y = require("./714574.js");
var E = require("./862159.js");
var S = require("./129363.js");
var v = require("./97858.js");
var T = r(require("./223504.js"));
var M = require("./843337.js");
var A = require("./82422.js");
var b = require("./250820.js");
var C = r(require("./397778.js"));
var P = require("./459857.js");
var O = require("../vendor/548360.js");
var I = r(require("../vendor/667294.js"));
var R = r(require("./156720.js"));
var N = require("./379811.js");
var D = r(require("./524578.js"));
var w = r(require("./969651.js"));
var L = require("./808446.js");
var k = require("./655241.js");
const G = ["chat"];
const U = ["chat"];
const x = ["chat"];
const B = ["chat"];
const F = ["contact"];
function j(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (j = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const Y = {
  disableGrow: {
    flexGrow: "tvf2evcx"
  },
  spaceBefore: {
    "::before": {
      content: "seopfc61",
      whiteSpace: "i539y0ga"
    }
  }
};
const K = e => {
  const t = (0, P.assertGetMe)().getDeviceId();
  let n;
  if (e.some(e => e.deviceId === t)) {
    const e = O.fbt._("Assigned to you", null, {
      hk: "E3cIM"
    });
    n = I.default.createElement(u.ChatAssignmentIcon, {
      width: 18,
      height: 12,
      className: (0, d.classnamesConvertMeToStylexPlease)(T.default.chatAssignmentIcon, T.default.chatAssignmentIconAssignedToYou),
      title: e
    });
  } else if (e.length > 0) {
    const t = O.fbt._("Assigned to {agentName}", [O.fbt._param("agentName", e[0].name)], {
      hk: "3DMd8d"
    });
    n = I.default.createElement(u.ChatAssignmentIcon, {
      width: 18,
      height: 12,
      className: (0, d.classnamesConvertMeToStylexPlease)(T.default.chatAssignmentIcon, T.default.chatAssignmentIconAssignedToOthers),
      title: t
    });
  } else {
    n = null;
  }
  return n;
};
function W(e) {
  const {
    contact: t,
    element: n = "span",
    highlightText: r,
    titlify: i,
    ellipsify: a,
    breakWord: u,
    you: m = false,
    selectable: E,
    useShortName: M = false,
    useDisplayName: P = false,
    onClick: R,
    showLabel: w,
    showBusinessCheckmark: L,
    showNotifyName: k = false,
    elevatedPushNamesEnabled: G = false,
    useVerifiedName: U = false,
    firstLabel: x,
    xstyle: B,
    showChatAssignmentIcon: F = false,
    assignedAgents: j = [],
    skipCheckMark: W = false,
    showMessageYourselfName: V = false,
    testid: H,
    isVerifiedNewsletter: $,
    makeCheckmarkClickable: z = false,
    checkmarkLarge: q = false
  } = e;
  const [J, Q, X, Z, ee, te, ne, re, ie, ae, oe, se, le, ue] = (0, N.useContactValues)(t.id, [f.getIsPSA, f.getIsIAS, f.getIsCAPISupportAccount, y.getFormattedUser, y.getFormattedName, y.getFormattedShortName, y.getFormattedPhone, y.getDisplayName, f.getLabels, f.getName, f.getNotifyName, f.getIsMe, f.getVerifiedName, f.getId]);
  let ce;
  if (r != null && r !== "") {
    ce = h.SearchName({
      terms: [r]
    });
  }
  const {
    displayName: de,
    displayNameAriaLabel: pe
  } = (e => {
    let {
      contact: t,
      showNotifyName: n,
      elevatedPushNamesEnabled: r,
      useDisplayName: i,
      useShortName: a,
      useVerifiedName: o,
      you: s,
      showMessageYourselfName: u
    } = e;
    const d = (0, _.pushNameCanBeUsed)(t) && r;
    var p;
    if (u && (0, f.getIsMe)(t)) {
      return {
        displayName: O.fbt._("{nameOrPhoneNumber}", [O.fbt._param("nameOrPhoneNumber", o ? t.verifiedName : (p = t.name) !== null && p !== undefined ? p : (0, y.getFormattedPhone)(t))], {
          hk: "2leim6"
        })
      };
    }
    const g = (0, y.getDisplayName)(t);
    if (i && g) {
      return {
        displayName: g
      };
    }
    if (a && !d && (0, y.getFormattedShortName)(t)) {
      return {
        displayName: (0, y.getFormattedShortName)(t)
      };
    }
    if (o && t.verifiedName) {
      return {
        displayName: t.verifiedName
      };
    }
    if (s && (0, f.getIsMe)(t)) {
      return {
        displayName: (0, y.getFormattedName)(t)
      };
    }
    const m = (0, f.getNotifyName)(t);
    if (n && d && m != null) {
      return {
        displayName: r ? (0, c.getFormattedNotifyName)(m) : `~${m}`,
        displayNameAriaLabel: (0, l.getABPropConfigValue)("elevated_push_names_v2_m2_enabled") ? (0, c.getAccessibleNotifyName)(m) : undefined
      };
    } else {
      return {
        displayName: (0, y.getFormattedUser)(t)
      };
    }
  })({
    contact: t,
    showNotifyName: k,
    elevatedPushNamesEnabled: G,
    useDisplayName: P,
    useShortName: M,
    useVerifiedName: U,
    you: m,
    showMessageYourselfName: V
  });
  const fe = (0, D.default)(p.Cmd, "toggle_lid_debug_badge", () => false);
  if (!de) {
    __LOG__(4, undefined, new Error(), true)`displayName:${de},
formattedName:${ee},
name:${ae},
formattedShortName:${te},
formattedUser:${Z}`;
    SEND_LOGS("display name is null or undefined");
    return "";
  }
  const _e = I.default.createElement(I.default.Fragment, null, I.default.createElement(g.EmojiText, {
    text: (0, s.default)(de.toString()),
    ariaLabel: pe != null ? (0, s.default)(pe.toString()) : undefined,
    element: n,
    className: (0, d.classnamesConvertMeToStylexPlease)(null, e.className),
    formatters: ce,
    titlify: i,
    ellipsify: a,
    breakWord: u,
    direction: "auto",
    selectable: E,
    inlineblock: true,
    onClick: R,
    xstyle: B,
    testid: H
  }), V && I.default.createElement(g.EmojiText, {
    testid: "you-label",
    text: O.fbt._("(You)", null, {
      hk: "1CQza2"
    }),
    xstyle: Y.spaceBefore
  }), fe ? I.default.createElement("span", {
    className: T.default.lidDebugLabel
  }, "LID") : null);
  const ge = e.labels || ie;
  if ((ge == null ? undefined : ge.length) && x != null) {
    (0, o.default)(ge, x);
  }
  const me = w === true && (ge == null ? undefined : ge.length) ? I.default.createElement(S.Labels, {
    labels: ge,
    showName: false
  }) : null;
  const he = !W && (J || Q || X || Boolean(L) || $);
  const ye = F ? K(j) : null;
  if (he === true) {
    let e;
    if ((0, v.isBlueEnabled)()) {
      const t = q ? 24 : 20;
      e = z && R ? I.default.createElement(C.default, {
        height: t,
        width: t,
        Icon: A.PsaVerifiedBlueIcon,
        "aria-label": O.fbt._("Verified Information", null, {
          hk: "XGzuI"
        }),
        onClick: R
      }) : I.default.createElement(A.PsaVerifiedBlueIcon, {
        height: t,
        width: t
      });
    } else {
      e = I.default.createElement(b.PsaVerifiedIcon, null);
    }
    return I.default.createElement("div", {
      className: (0, d.classnamesConvertMeToStylexPlease)(T.default.verified, T.default.disableGrow)
    }, _e, I.default.createElement("div", {
      className: $ === true ? T.default.newsletterIcon : T.default.icon
    }, e), I.default.createElement("div", {
      className: T.default.labels
    }, ye, me));
  }
  if (ye || me) {
    return I.default.createElement("div", {
      className: (0, d.classnamesConvertMeToStylexPlease)({
        [T.default.verified]: true,
        [T.default.hasLabels]: !!me && !V
      })
    }, _e, I.default.createElement("div", {
      className: T.default.labels
    }, ye, me));
  } else {
    return I.default.createElement("div", {
      className: (0, d.classnamesConvertMeToStylexPlease)(T.default.disableGrow, T.default.verified)
    }, _e);
  }
}
function V(e) {
  const {
    element: t,
    highlightText: n,
    titlify: r,
    ellipsify: i,
    breakWord: a,
    onClick: u,
    showLabel: c,
    firstLabel: p,
    className: f,
    xstyle: _,
    showChatAssignmentIcon: m = false,
    assignedAgents: y = [],
    testid: C,
    overrideCommunityAnnouncementGroupName: P = false,
    checkmarkLarge: N = false
  } = e;
  let D;
  const G = (0, k.useModelValues)(e.chat, ["formattedTitle", "labels"]);
  const U = (0, k.useModelValues)(e.groupMetadata, ["support", "isUnnamed", "participants", "groupType"]);
  const x = (0, w.default)();
  (0, L.useListener)(U.participants, "bulk_add bulk_remove reset sort change:isAdmin change:isSuperAdmin remove add", x);
  if (n != null && n !== "") {
    D = h.SearchName({
      terms: [n]
    });
  }
  const B = e.labels || G.labels;
  if ((B == null ? undefined : B.length) && p != null) {
    (0, o.default)(B, p);
  }
  const F = c === true && (B == null ? undefined : B.length) ? I.default.createElement(S.Labels, {
    labels: B,
    showName: false
  }) : null;
  const j = P && U.groupType === E.GroupType.LINKED_ANNOUNCEMENT_GROUP ? O.fbt._("Announcements", null, {
    hk: "GNIKa"
  }) : (0, s.default)((U == null ? undefined : U.isUnnamed) && (0, l.getABPropConfigValue)("ugr_enabled") ? (0, M.calculateUnnamedGroupFullParticipantsList)(U, true) : G.title());
  const W = I.default.createElement(g.EmojiText, {
    text: j,
    element: t,
    className: f,
    xstyle: _,
    formatters: D,
    titlify: r,
    ellipsify: i,
    breakWord: a,
    direction: "auto",
    inlineblock: true,
    onClick: u,
    testid: C
  });
  if (U.support) {
    const e = N ? 24 : 20;
    return I.default.createElement("div", {
      className: (0, d.classnamesConvertMeToStylexPlease)({
        [T.default.verified]: true,
        [T.default.hasLabels]: !!F
      })
    }, W, I.default.createElement("div", {
      className: T.default.icon
    }, (0, v.isBlueEnabled)() ? I.default.createElement(A.PsaVerifiedBlueIcon, {
      width: e,
      height: e
    }) : I.default.createElement(b.PsaVerifiedIcon, null)), I.default.createElement("div", {
      className: T.default.labels
    }, F));
  }
  const V = m ? K(y) : null;
  if (V || F) {
    return I.default.createElement("span", {
      className: T.default.hasLabels
    }, I.default.createElement("span", {
      className: (0, R.default)(Y.disableGrow)
    }, W), I.default.createElement("div", {
      className: T.default.labels
    }, V, F));
  } else {
    return W;
  }
}
function H(e) {
  const {
    chat: t
  } = e;
  const n = (0, a.default)(e, G);
  const {
    element: r,
    highlightText: i,
    titlify: o,
    ellipsify: s,
    breakWord: l,
    onClick: u,
    className: c,
    xstyle: d,
    testid: p,
    showNewsletterCheckmark: f = true,
    checkmarkLarge: _ = false
  } = n;
  const y = (0, k.useModelValues)(t, ["id", "newsletterMetadata", "formattedTitle"]);
  const E = (0, k.useOptionalModelValues)(y.newsletterMetadata, ["name", "verified"]);
  let S;
  let M;
  if ((E == null ? undefined : E.name) != null) {
    S = E.name;
  } else {
    if (y.formattedTitle == null) {
      __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter][NewsletterName] undefined name`;
      SEND_LOGS("newsletter-undefined-name", 1, "newsletter");
      return (0, m.default)("Untitled Channel");
    }
    S = y.formattedTitle;
  }
  if (i != null && i !== "") {
    M = h.SearchName({
      terms: [i]
    });
  }
  const C = I.default.createElement(g.EmojiText, {
    text: S,
    element: r,
    className: c,
    xstyle: d,
    formatters: M,
    titlify: o,
    ellipsify: s,
    breakWord: l,
    direction: "auto",
    inlineblock: true,
    onClick: u,
    testid: p
  });
  if ((E == null ? undefined : E.verified) === true && f) {
    const e = _ ? 24 : 20;
    return I.default.createElement("span", {
      className: T.default.verified
    }, C, I.default.createElement("div", {
      className: T.default.newsletterIcon
    }, (0, v.isBlueEnabled)() ? I.default.createElement(A.PsaVerifiedBlueIcon, {
      width: e,
      height: e
    }) : I.default.createElement(b.PsaVerifiedIcon, null)));
  }
  return C;
}
function $(e) {
  if (e.chat && !e.chat.isUser && !e.chat.isNewsletter) {
    const {
      chat: t
    } = e;
    const n = (0, a.default)(e, U);
    return I.default.createElement(V, (0, i.default)({
      chat: t,
      groupMetadata: t.groupMetadata
    }, n));
  }
  if (e.chat && !e.chat.isUser && e.chat.isNewsletter) {
    const {
      chat: t
    } = e;
    const n = (0, a.default)(e, x);
    return I.default.createElement(H, (0, i.default)({
      chat: t
    }, n));
  }
  let t;
  let n;
  if (e.chat) {
    const {
      chat: r
    } = e;
    const i = (0, a.default)(e, B);
    t = r.contact;
    n = i;
  } else {
    const {
      contact: r
    } = e;
    t = r;
    n = (0, a.default)(e, F);
  }
  return I.default.createElement(W, (0, i.default)({
    contact: t
  }, n));
}