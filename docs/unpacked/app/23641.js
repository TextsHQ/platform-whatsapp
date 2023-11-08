var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultIcon = le;
exports.DefaultIconThemeType = undefined;
exports.DetailImage = function (e) {
  const {
    id: t,
    size: n,
    quality: r = ee.Low,
    loader: a,
    onClick: o,
    onLoad: s,
    quoted: l,
    shape: f,
    border: g,
    waitIdle: m,
    ephemeralIcon: y,
    checkmarkIcon: E,
    theme: S,
    alt: v,
    xstyle: T,
    authorColor: M,
    loadPicture: P = true,
    loadAnimation: N = true,
    tabIndex: w,
    ariaLabel: U,
    testId: Y,
    tabOrder: K,
    showOutline: z = false
  } = e;
  const J = (0, $.default)();
  const Q = (0, V.useRef)(null);
  const {
    isKeyboardUser: X
  } = (0, F.default)();
  const ie = (0, V.useMemo)(() => u.ChatCollection.get(t), [t]);
  let ue;
  (0, q.useListener)((ie == null ? undefined : ie.isGroup) ? ie.groupMetadata : ie, "change:ephemeralDuration", J);
  ue = typeof n == "number" ? n > 0 ? n : Z.Small : n != null ? n : Z.Small;
  const ce = {
    height: se(ue),
    width: se(ue)
  };
  if (o) {
    ce.cursor = "pointer";
  }
  let de;
  var pe;
  var fe;
  if ((0, _.communitiesEnabled)()) {
    if (ie != null && ((pe = ie.groupMetadata) === null || pe === undefined || (fe = pe.participants) === null || fe === undefined ? undefined : fe.iAmMember())) {
      var _e;
      if (ie.isGroup) {
        de = (_e = ie.groupMetadata) === null || _e === undefined ? undefined : _e.groupType;
      }
    } else {
      const e = B.default.get(t.toString());
      de = e == null ? undefined : e.groupType;
    }
  }
  const ge = (0, H.default)(re.avatar, S === "status_v3" && re.statusV3, f === te.Square && re.avatarSquare, f === te.Squircle && re.avatarSquircle, S === "group_profile_picture" && re.groupProfilePicture, S === "group_profile_picture_in_bubble" && re.groupProfilePictureInBubble, S === "status_v3_profile_photo_ring" && re.avatarProfileRingBorder, S === "invite_modal" && re.inviteModal, (S === "polls_sender" || S === "polls_receiver") && re.polls, S === "polls_sender" && re.pollsSender, S === "polls_receiver" && re.pollsReceiver, (0, c.isIntegritySuspendedCommunity)(ie) && re.dimmed, g === true && re.avatarBorder, de === b.GroupType.LINKED_ANNOUNCEMENT_GROUP && re.avatarDefaultAnnouncementGroup, o != null && X && S === "group_profile_picture" && re.keyboardUserGroupChatProfilePicture, o != null && X && S === "chatlist_header_profile_photo" && re.keyboardUserChatlistHeaderProfilePicture, z && re.outline, T);
  const me = o != null ? {
    tabIndex: w,
    role: "button",
    "aria-label": U,
    onKeyDown: e => {
      var t;
      if ((0, R.default)(e)) {
        if (!((t = Q.current) === null || t === undefined)) {
          t.click();
        }
      }
    }
  } : {};
  const he = function (e) {
    if (e === "group_profile_picture" || e === "group_profile_picture_in_bubble") {
      return ne.GroupChatProfilePicture;
    }
    if (e === "status_v3") {
      return ne.StatusV3;
    }
    return null;
  }(S);
  let ye = V.default.createElement(le, {
    id: t,
    quoted: l,
    groupType: de,
    theme: he,
    authorColor: M,
    shape: e.shape
  });
  if ((S === "group_profile_picture" || S === "view_all_replies") && (0, p.shouldDisplayInitialsInProfilePicture)(t)) {
    const e = h.ContactCollection.get(t);
    if (e) {
      const t = (0, O.getInitialsFromContact)(e);
      if (!(t.firstInitial == null && t.secondInitial == null)) {
        ye = V.default.createElement(I.InitialsProfilePicture, {
          initialsData: t,
          backgroundColor: `bg-color-${M != null ? M : 1}`,
          theme: I.ThemeType.GroupChatProfilePicture
        });
      }
    }
  }
  const Ee = V.default.createElement(C.default, {
    id: t,
    onComplex: () => {
      let e;
      let n = null;
      e = P ? L.ProfilePicThumbCollection.gadd(t) : L.ProfilePicThumbCollection.get(t);
      n = e ? r === ee.High ? V.default.createElement(ae, {
        profilePicThumb: e,
        defaultIcon: ye,
        loader: a,
        onLoad: s,
        alt: v,
        shape: f,
        id: t
      }) : V.default.createElement(oe, {
        profilePicThumb: e,
        defaultIcon: ye,
        loader: a,
        onLoad: s,
        alt: v,
        loadingAnimation: N,
        shape: f,
        id: t
      }) : ye;
      return V.default.createElement("div", (0, i.default)({
        ref: Q,
        "data-tab": K
      }, me, {
        className: ge,
        style: ce,
        onClick: o
      }), null, n, null);
    },
    waitIdle: m
  }, V.default.createElement("div", (0, i.default)({
    ref: Q
  }, me, {
    className: ge,
    style: ce,
    onClick: o
  }), ye));
  let Se;
  const ve = y != null && ie && (0, d.isEphemeralSettingOn)(ie);
  if (ve === true || E) {
    const e = (0, D.isBlueEnabled)() ? k.PsaVerifiedBlueIcon : G.PsaVerifiedIcon;
    const t = ve === true ? A.DisappearingIcon : e;
    const n = y != null ? y : E;
    Se = V.default.createElement("div", {
      className: (0, H.default)(re.wrapper),
      "aria-label": W.fbt._("Profile picture, disappearing messages on", null, {
        hk: "2Riroy"
      })
    }, V.default.createElement("div", {
      className: (0, H.default)(re.badge, x.uiPadding.all1, n === "chat-list" && re.chatList, n === "conversation-header" && re.conversationHeader)
    }, V.default.createElement(t, {
      className: (0, H.default)(re.badgeIconPathSVG),
      iconXstyle: [re.svgSize, re.badgeIconSVG]
    })), Ee);
  }
  return e.emojiBadge != null && (0, j.isMeAccount)(t) && V.default.createElement("div", {
    className: (0, H.default)(re.wrapper),
    "aria-label": W.fbt._("", null, {
      hk: "jCWgk"
    })
  }, V.default.createElement("div", {
    className: (0, H.default)(re.badge, re.emojiBadge)
  }, e.emojiBadge), Ee) || Se || Ee;
};
exports.DetailImageCommon = ie;
exports.DetailImageSize = exports.DetailImageShape = exports.DetailImageQuality = undefined;
exports.getSize = se;
var i = r(require("../vendor/967154.js"));
var a = require("./685639.js");
var o = require("./151395.js");
var s = r(require("./731792.js"));
var l = require("./354458.js");
var u = require("./351053.js");
var c = require("./394164.js");
var d = require("./738501.js");
var p = require("./275727.js");
var f = require("./396574.js");
var _ = require("./174834.js");
var g = require("./639839.js");
var m = require("./146281.js");
var h = require("./177938.js");
var y = require("./660385.js");
var E = require("./192562.js");
var S = require("./692602.js");
var v = require("./650613.js");
var T = require("./759350.js");
var M = require("./379317.js");
var A = require("./123292.js");
var b = require("./862159.js");
var C = r(require("./373347.js"));
var P = r(require("./488922.js"));
var O = require("./937172.js");
var I = require("./872623.js");
var R = r(require("./83162.js"));
var N = X(require("./288057.js"));
var D = require("./97858.js");
var w = require("./68799.js");
var L = require("./446474.js");
var k = require("./82422.js");
var G = require("./250820.js");
var U = require("./163139.js");
var x = require("./676345.js");
var B = r(require("./22368.js"));
var F = r(require("./395967.js"));
var j = require("./459857.js");
var Y = require("./633947.js");
var K = r(require("./124928.js"));
var W = require("../vendor/548360.js");
var V = X(require("../vendor/667294.js"));
var H = r(require("./156720.js"));
var $ = r(require("./969651.js"));
var z = r(require("./637660.js"));
var q = require("./808446.js");
var J = require("./655241.js");
function Q(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (Q = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function X(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = Q(t);
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
}
const Z = require("../vendor/76672.js").Mirrored(["ExtraSmall", "Small", "Medium", "Large", "None"]);
exports.DetailImageSize = Z;
const ee = require("../vendor/76672.js").Mirrored(["Low", "High"]);
exports.DetailImageQuality = ee;
const te = require("../vendor/76672.js").Mirrored(["Circle", "Square", "Squircle"]);
exports.DetailImageShape = te;
const ne = require("../vendor/76672.js").Mirrored(["GroupChatProfilePicture", "StatusV3"]);
exports.DefaultIconThemeType = ne;
const re = {
  announcementSpeaker: {
    color: "jn5oezdz"
  },
  communitySquircle: {
    color: "fbbj9sbp"
  },
  newsletter: {
    color: "bk9ojlrj"
  },
  avatarDefaultPSA: {
    borderTopStartRadius: "g9p5wyxn",
    borderTopEndRadius: "i0tg5vk9",
    borderBottomEndRadius: "aoogvgrq",
    borderBottomStartRadius: "o2zu3hjb"
  },
  dimmed: {
    opacity: "kaq19mkm"
  },
  avatarDefault: {
    position: "lhggkp7q",
    top: "qq0sjtgm",
    start: "tkdu00h0",
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno",
    width: "ln8gz9je",
    height: "ppled2lx"
  },
  avatar: {
    position: "g0rxnol2",
    borderTopStartRadius: "g9p5wyxn",
    borderTopEndRadius: "i0tg5vk9",
    borderBottomEndRadius: "aoogvgrq",
    borderBottomStartRadius: "o2zu3hjb"
  },
  statusV3: {
    backgroundColor: "rd9ic47a"
  },
  avatarSquare: {
    borderTopStartRadius: "bi2mdrpt",
    borderTopEndRadius: "hsk1pqkj",
    borderBottomEndRadius: "e3yfz9gx",
    borderBottomStartRadius: "a0vc5f8u"
  },
  avatarImage: {
    position: "g0rxnol2",
    display: "f804f6gw",
    width: "ln8gz9je",
    height: "ppled2lx",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    borderTopStartRadius: "g9p5wyxn",
    borderTopEndRadius: "i0tg5vk9",
    borderBottomEndRadius: "aoogvgrq",
    borderBottomStartRadius: "o2zu3hjb",
    objectFit: "jpthtbts",
    objectPosition: "lyqpd7li",
    opacity: "axi1ht8l",
    transition: "csshhazd"
  },
  isLoaded: {
    opacity: "bs7a17vp"
  },
  avatarImageNoTransition: {
    transition: "bj62907l"
  },
  avatarSquircle: {
    clipPath: "li9elm96",
    borderTopStartRadius: "bi2mdrpt",
    borderTopEndRadius: "hsk1pqkj",
    borderBottomEndRadius: "e3yfz9gx",
    borderBottomStartRadius: "a0vc5f8u"
  },
  groupProfilePicture: {
    position: "lhggkp7q",
    start: "hj486dpu",
    width: "a2hqsskl",
    height: "stnyektq"
  },
  groupProfilePicturePlaceholderContainer: {
    position: "lhggkp7q",
    top: "qq0sjtgm",
    start: "tkdu00h0",
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno",
    width: "ln8gz9je",
    height: "ppled2lx"
  },
  groupProfilePictureInBubble: {
    width: "baeo9xnf",
    height: "epwkujcx"
  },
  svgSize: {
    width: "ln8gz9je",
    height: "ppled2lx"
  },
  avatarBorder: {
    borderTop: "n9xmkljd",
    borderEnd: "miua4gga",
    borderBottom: "ppbcm4ih",
    borderStart: "h0b26d5u"
  },
  avatarProfileRingBorder: {
    borderTop: "te2w76pw",
    borderEnd: "lf2f5g3m",
    borderBottom: "im448w36",
    borderStart: "ou0nhrxb",
    boxSizing: "cm280p3y"
  },
  avatarDefaultAnnouncementGroup: {
    backgroundColor: "se52eggw"
  },
  inviteModal: {
    borderTop: "er60nxep",
    borderEnd: "ppgl3mp3",
    borderBottom: "g4g5yoif",
    borderStart: "f3pti8mu",
    backgroundColor: "b19fvycv"
  },
  avatarDefaultStatusV3: {
    transform: "amxrrayi",
    transformOrigin: "rgztdhlt"
  },
  wrapper: {
    position: "g0rxnol2"
  },
  outline: {
    borderTopColor: "eo2nzah0",
    borderEndColor: "hnzvqtrj",
    borderBottomColor: "m1y0i6k8",
    borderStartColor: "j4cx7yji",
    borderTopStyle: "d1poss59",
    borderEndStyle: "gyj32ejw",
    borderBottomStyle: "cmcp1to6",
    borderStartStyle: "eg0col54",
    borderTopWidth: "gofg5ll1",
    borderEndWidth: "p7waza29",
    borderBottomWidth: "oteuebma",
    borderStartWidth: "mzoqfcbu"
  },
  badge: {
    position: "lhggkp7q",
    end: "bw2ywrlk",
    bottom: "tfqxzuai",
    zIndex: "cv1ohgtz",
    boxSizing: "cm280p3y",
    width: "m0s4cjtr",
    height: "jdwybkuq",
    pointerEvents: "m62443ks",
    borderTopStartRadius: "g9p5wyxn",
    borderTopEndRadius: "i0tg5vk9",
    borderBottomEndRadius: "aoogvgrq",
    borderBottomStartRadius: "o2zu3hjb"
  },
  emojiBadge: {
    backgroundColor: "f6ipylw5"
  },
  chatList: {
    backgroundColor: "ihvf49ua"
  },
  conversationHeader: {
    backgroundColor: "f6ipylw5"
  },
  badgeIconSVG: {
    width: "dh5rsm73",
    height: "hpdpob1j"
  },
  polls: {
    borderTop: "gb6ia7xa",
    borderEnd: "digrcooj",
    borderBottom: "flf84san",
    borderStart: "dic3qptu"
  },
  pollsSender: {
    borderTopColor: "gzt80le8",
    borderEndColor: "gy37xsqw",
    borderBottomColor: "vepgw4w2",
    borderStartColor: "i06jxq7c"
  },
  pollsReceiver: {
    borderTopColor: "p5ti9enb",
    borderEndColor: "a4hupprf",
    borderBottomColor: "lok2ssd3",
    borderStartColor: "as1wf20p"
  },
  pathBackgroundSVG: {
    ":first-child  path.background": {
      fill: "bmttxqfw"
    }
  },
  pathPrimarySVG: {
    ":first-child path.primary": {
      fill: "ban5wmpu"
    }
  },
  badgeIconPathSVG: {
    ":first-child path": {
      fill: "o77asv6m"
    }
  },
  keyboardUserGroupChatProfilePicture: {
    ":focus:after": {
      position: "hbox45ub",
      boxSizing: "ik31nkoc",
      content: "sg39nr20",
      borderTop: "ey1cj0lg",
      borderEnd: "c9hkciu6",
      borderBottom: "r6g0kn0i",
      borderStart: "m2yn76ab",
      borderTopStartRadius: "kdzi6w22",
      borderTopEndRadius: "mys8l8o2",
      borderBottomEndRadius: "b44fdme4",
      borderBottomStartRadius: "or58lw3g",
      width: "mzpogmef",
      height: "hj77gql4",
      top: "t9t2xzpr",
      start: "q4n878uu"
    }
  },
  keyboardUserChatlistHeaderProfilePicture: {
    ":focus:after": {
      position: "hbox45ub",
      boxSizing: "ik31nkoc",
      content: "sg39nr20",
      borderTop: "ey1cj0lg",
      borderEnd: "c9hkciu6",
      borderBottom: "r6g0kn0i",
      borderStart: "m2yn76ab",
      borderTopStartRadius: "kdzi6w22",
      borderTopEndRadius: "mys8l8o2",
      borderBottomEndRadius: "b44fdme4",
      borderBottomStartRadius: "or58lw3g",
      width: "jtccaw6j",
      height: "nxuzuzek",
      top: "t9t2xzpr",
      start: "q4n878uu"
    }
  }
};
function ie(e) {
  const {
    profilePicThumbImg: t,
    spinnerClassName: n,
    spinnerXstyle: r,
    spinnerSize: i,
    imgClassName: o,
    imgXstyle: u,
    alt: c,
    onLoad: d,
    profilePicThumb: p,
    loader: _ = false,
    theme: g,
    loadingAnimation: m = true,
    id: h
  } = e;
  const [y, E] = (0, V.useState)(((0, l.isBotReceiveEnabled)() && h instanceof K.default && (h == null ? undefined : h.isBot())) !== true);
  const [S, v] = (0, V.useState)(false);
  const [T, M] = (0, V.useState)(false);
  const [A, b] = (0, V.useState)(t);
  const C = (0, V.useRef)(Boolean(t));
  const O = (0, V.useRef)(false);
  const I = g !== "business";
  const R = (0, z.default)(() => _ && I ? new a.ShiftTimer(() => {
    M(true);
  }) : null);
  if (t !== A) {
    b(t);
    E(true);
    v(false);
    M(false);
  }
  const D = () => {
    var e;
    if (!((e = R.current) === null || e === undefined)) {
      e.cancel();
    }
    p.markMms4HostSuccess();
    E(false);
    v(true);
    if (!(d == null)) {
      d();
    }
  };
  const L = e => {
    var t;
    if (!((t = R.current) === null || t === undefined)) {
      t.cancel();
    }
    if (e instanceof N.ServerStatusError) {
      switch (e.status) {
        case 403:
          p.markStale({
            eurl: true
          });
          if (!O.current) {
            O.current = true;
            p.validate();
          }
          break;
        case 410:
          p.markStale();
          break;
        default:
          if ((0, w.isRetriableStatusCode)(e.status)) {
            p.markMms4HostFailure();
          }
      }
    }
    E(false);
    v(false);
  };
  (0, V.useEffect)(() => {
    var e;
    const t = R;
    if (!((e = t.current) === null || e === undefined)) {
      e.onOrAfter(100);
    }
    return () => {
      var e;
      if (!((e = t.current) === null || e === undefined)) {
        e.cancel();
      }
    };
  }, [p, R]);
  const k = (0, f.classnamesConvertMeToStylexPlease)({
    [o]: typeof o == "string"
  }, (0, H.default)(u, m === false && C.current && re.avatarImageNoTransition, re.avatarImage, e.shape === te.Square && re.avatarSquare, e.shape === te.Squircle && re.avatarSquircle, !y && re.isLoaded));
  let G;
  let x;
  if (!(!I || !_ || !T || !y || !(0, U.unproxy)(p).stale && !A)) {
    G = V.default.createElement(s.default, {
      className: n,
      xstyle: r,
      size: i
    });
  }
  if (A) {
    x = V.default.createElement(P.default, {
      src: A,
      hasPrivacyChecks: true,
      crossOrigin: false,
      className: k,
      draggable: false,
      onLoad: D,
      onError: L,
      alt: c
    });
  }
  let B = S ? null : e.defaultIcon;
  if (m === false) {
    B = x != null ? null : e.defaultIcon;
  }
  return V.default.createElement(V.default.Fragment, null, G, B, x);
}
function ae(e) {
  const t = (0, J.useModelValues)(e.profilePicThumb, ["imgFull"]);
  return V.default.createElement(ie, (0, i.default)({}, e, {
    profilePicThumbImg: t.imgFull
  }));
}
function oe(e) {
  const t = (0, J.useModelValues)(e.profilePicThumb, ["img"]);
  return V.default.createElement(ie, (0, i.default)({}, e, {
    profilePicThumbImg: t.img
  }));
}
function se(e) {
  if (typeof e != "string") {
    return e;
  }
  switch (e) {
    case Z.ExtraSmall:
      return 40;
    case Z.Small:
      return 49;
    case Z.Medium:
      return 100;
    case Z.Large:
      return 200;
    case Z.None:
      return;
  }
}
function le(e) {
  let {
    id: t,
    quoted: n,
    groupType: r,
    theme: i,
    authorColor: a,
    shape: s,
    xstyle: l
  } = e;
  let u = V.default.createElement(T.DefaultUserIcon, {
    iconXstyle: [re.svgSize, l]
  });
  if (K.default.isUser(t) && !K.default.isPSA(t) && n) {
    u = V.default.createElement(M.DefaultUserSquareIcon, {
      iconXstyle: [re.svgSize, l]
    });
  } else if (K.default.isGroup(t)) {
    u = r === b.GroupType.LINKED_ANNOUNCEMENT_GROUP ? V.default.createElement(o.AnnouncementSpeakerIcon, {
      iconXstyle: [re.svgSize, re.announcementSpeaker, l],
      directional: true
    }) : r === b.GroupType.COMMUNITY || s === te.Squircle ? V.default.createElement(m.CommunitySquircleIcon, {
      iconXstyle: [re.svgSize, re.communitySquircle, l]
    }) : r === b.GroupType.LINKED_GENERAL_GROUP && (0, _.communityGeneralChatUIEnabled)() ? V.default.createElement(g.CommunityGeneralChatImage, null) : V.default.createElement(E.DefaultGroupIcon, {
      iconXstyle: [re.svgSize, l]
    });
  } else if (K.default.isBroadcast(t)) {
    u = V.default.createElement(y.DefaultBroadcastIcon, {
      iconXstyle: [re.svgSize, l]
    });
  } else if (K.default.isPSA(t)) {
    u = V.default.createElement(Y.WaChatPsaIcon, {
      iconXstyle: [re.svgSize, re.avatarDefaultPSA, l]
    });
  } else if (K.default.isNewsletter(t)) {
    u = V.default.createElement(S.DefaultNewsletterIcon, {
      iconXstyle: [re.svgSize, re.newsletter, l]
    });
  }
  let c = V.default.createElement("div", {
    className: (0, H.default)(re.avatarDefault, re.pathBackgroundSVG, re.pathPrimarySVG, i === ne.StatusV3 && re.avatarDefaultStatusV3),
    key: "default"
  }, u);
  if (i === ne.GroupChatProfilePicture) {
    c = V.default.createElement("div", {
      className: (0, H.default)(re.groupProfilePicturePlaceholderContainer),
      key: "default"
    }, V.default.createElement(v.DefaultUserColorIcon, {
      iconXstyle: [re.svgSize, l],
      className: `color-${a != null ? a : 1}`
    }));
  }
  return c;
}