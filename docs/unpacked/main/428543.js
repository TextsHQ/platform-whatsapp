var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    canonicalUrl: t,
    compose: n = false,
    description: a,
    displayType: c,
    isInvite: f,
    inviteGrpType: _,
    onClick: y,
    isSentByMe: w,
    star: k,
    kept: D,
    thumbnail: I,
    thumbnailJpeg: R,
    thumbnailJpegHQ: L,
    thumbnailJpegDirectPath: j,
    thumbnailJpegHeight: B,
    thumbnailJpegWidth: F,
    title: G,
    theme: U,
    containerXstyle: W,
    matchedText: H,
    isLoading: V,
    botPluginReferenceIndex: q
  } = e;
  const Y = U === "bot_plugin_link";
  const z = c === i.DISPLAY_TYPE.GALLERY;
  const K = (U === "high-quality" || U === "high-quality-extended") && !z;
  const Q = !n && !z && function (e) {
    if (e == null || e === "") {
      return false;
    }
    return P.some(t => t.test(e));
  }(t);
  let X;
  if ((0, E.isNewsletterInviteCode)(H)) {
    X = (0, v.isNewsletterEnabled)() ? M.fbt._("Channel invite link", null, {
      hk: "3217yH"
    }) : null;
  } else if (_ != null) {
    let e;
    if (_ === s.GroupType.LINKED_SUBGROUP && typeof a == "string") {
      e = a;
    }
    X = (0, h.getInviteLinkDescription)(_, e);
  } else {
    X = a;
  }
  re = G;
  const Z = re != null && re !== "" ? r.dir(re) : undefined;
  ae = Z;
  const J = ae === "rtl" !== d.default.isRTL();
  const $ = c === i.DISPLAY_TYPE.STATUS;
  const ee = t != null && t !== "" ? S.default.createElement("div", {
    className: (0, T.default)([A.source, $ && A.statusSource, n && A.composeSource])
  }, S.default.createElement(u.EmojiText, {
    text: t,
    direction: Z,
    dirMismatch: J
  })) : null;
  const te = (0, l.classnamesConvertMeToStylexPlease)(g.default.preview, (0, T.default)([A.preview, n && A.compose, w === true ? A.boubbleOut : A.bubbleIn, $ && A.status, $ && K && A.statusImageShrink, U === "extended" && A.extended, K && A.highQualityLayout, Q && !K && A.fullPreview, W]));
  const ne = V && (0, o.getABPropConfigValue)("link_preview_shimmer_enabled");
  var ae;
  var re;
  let oe = null;
  const le = (0, C.useIsDarkTheme)();
  oe = ne ? le ? S.default.createElement(p.LinkPlaceholderDarkIcon, {
    className: (0, T.default)([b.uiPadding.all20, A.placeholderImage]),
    width: 32,
    height: 32
  }) : S.default.createElement(m.LinkPlaceholderLightIcon, {
    className: (0, T.default)([b.uiPadding.all20, A.placeholderImage]),
    width: 32,
    height: 32
  }) : S.default.createElement(N, {
    thumbnail: I,
    thumbnailJpeg: R,
    thumbnailJpegHQ: L,
    thumbnailJpegDirectPath: j,
    thumbnailJpegHeight: B,
    thumbnailJpegWidth: F,
    isHighQualityLayout: K,
    displayType: c,
    isStatus: $,
    isFullPreview: Q,
    theme: U,
    withoutDescription: X == null,
    isInvite: c !== i.DISPLAY_TYPE.GALLERY && Boolean(f),
    isCompose: n
  });
  const ie = S.default.createElement(O, {
    useTextLimit: Q && !K,
    isStatus: $,
    isFullPreview: Q,
    isHighQualityLayout: K,
    isCompose: n,
    testid: _ != null ? `link-description-${String(_)}` : "link-description"
  }, X);
  const ue = G != null && Y && q != null ? `${q}. ${G}` : G;
  return S.default.createElement("div", {
    className: te,
    style: n ? {
      ":empty": {
        display: "none"
      }
    } : undefined,
    onClick: y
  }, S.default.createElement(x, {
    star: k,
    kept: D,
    displayType: c
  }, oe), S.default.createElement("div", {
    className: (0, T.default)([A.body, $ && A.statusBody, Q && A.fullPreviewBody, Q && !K && A.fullPreviewNotHighQualityLayoutBody, n && A.composeBody])
  }, S.default.createElement("div", {
    className: (0, T.default)([A.title, $ && A.statusTitle, n && A.composeTitle, ne && b.uiMargin.top20]),
    title: ue
  }, S.default.createElement(u.EmojiText, {
    text: ue,
    textLimit: Y ? 40 : 1 / 0,
    ellipsify: true,
    breakWord: true,
    direction: Z,
    dirMismatch: J,
    testid: "link-preview-title",
    multiline: true
  })), !Y && !ne && ie, ee), ne && S.default.createElement("div", {
    className: (0, T.default)([A.shimmer])
  }));
};
var r = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = w(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../app/12132.js"));
var o = require("../app/287461.js");
var l = require("../app/396574.js");
var i = require("../app/356097.js");
var u = require("../app/305521.js");
var s = require("../app/862159.js");
var c = require("./769153.js");
var d = a(require("../app/932325.js"));
var f = require("./406506.js");
var p = require("./941552.js");
var m = require("./332494.js");
var h = require("./732741.js");
var g = a(require("./961288.js"));
var E = require("../app/783020.js");
var v = require("../app/73225.js");
var _ = require("./407024.js");
var y = a(require("./858327.js"));
var C = require("../app/667738.js");
var b = require("../app/676345.js");
var M = require("../vendor/548360.js");
var S = a(require("../vendor/667294.js"));
var T = a(require("../app/156720.js"));
function w(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (w = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const A = {
  shimmer: {
    backgroundImage: "clu16ym1",
    animationName: "i4fkj2e7",
    animationDuration: "ew2qs857",
    animationTimingFunction: "f8mos8ky",
    animationIterationCount: "tkmeqcnu",
    position: "lhggkp7q",
    top: "qq0sjtgm",
    start: "tkdu00h0",
    width: "ln8gz9je",
    height: "ppled2lx",
    pointerEvents: "m62443ks"
  },
  preview: {
    alignItems: "gndfcl4n",
    borderTopStartRadius: "l8fojup5",
    borderTopEndRadius: "paxyh2gw",
    borderBottomEndRadius: "sfeitywo",
    borderBottomStartRadius: "cqsf3vkf",
    color: "k2bacm8l",
    cursor: "ajgl1lbb",
    display: "p357zi0d",
    flexDirection: "sap93d0t",
    fontSize: "ovllcyds",
    lineHeight: "kvdvyush",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex"
  },
  compose: {
    backgroundColor: "thr4l2wc",
    cursor: "okw0zzku",
    height: "mdwxuyu9",
    marginTop: "tt8xd2xn",
    marginEnd: "jnwc1y2a",
    marginBottom: "mpdn4nr2",
    marginStart: "svoq16ka",
    maxWidth: "e9zg6kuq",
    width: "ln8gz9je"
  },
  bubbleIn: {
    backgroundColor: "rrq4r3yd"
  },
  boubbleOut: {
    backgroundColor: "s0eflmyh"
  },
  fullPreview: {
    display: "f804f6gw"
  },
  extended: {
    borderBottomEndRadius: "e3yfz9gx",
    borderBottomStartRadius: "a0vc5f8u"
  },
  highQualityLayout: {
    flexDirection: "f8m0rgwh"
  },
  status: {
    backgroundColor: "ss1fofi6",
    width: "ln8gz9je"
  },
  statusImageShrink: {
    display: "p357zi0d",
    flexShrink: "m0h2a7mj",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    maxHeight: "mlen7d4n",
    width: "ln8gz9je"
  },
  title: {
    WebkitBoxOrient: "aoi073rw",
    WebkitLineClamp: "suguakab",
    color: "jjtagnqy",
    display: "c32ccnay",
    flexGrow: "tvf2evcx",
    flexShrink: "m0h2a7mj",
    flexBasis: "lb5m6g5c",
    marginBottom: "j4enbv94",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    textOverflow: "lhj4utae",
    textAlign: "ljrqcn24"
  },
  statusTitle: {
    color: "l5wrc0op",
    fontSize: "enbbiyaj"
  },
  composeTitle: {
    fontSize: "bze30y65",
    lineHeight: "syhq9jn2",
    marginBottom: "inww9tbj"
  },
  description: {
    color: "jjtagnqy",
    flexGrow: "tvf2evcx",
    flexShrink: "ttu8nud2",
    flexBasis: "lb5m6g5c",
    fontSize: "dsh4tgtl",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    textOverflow: "lhj4utae"
  },
  statusDescription: {
    color: "gtffwfyy",
    fontSize: "f8jlpxt4"
  },
  fullPreviewHighQualityLayoutDescription: {
    WebkitBoxOrient: "aoi073rw",
    WebkitLineClamp: "psqdn66s",
    display: "c32ccnay"
  },
  fullPreviewNotHighQualityLayoutDescription: {
    overflowX: "ora14ekb",
    overflowY: "nv3qcefw"
  },
  composeDescription: {
    lineHeight: "kvdvyush",
    maxHeight: "c4c7fvpi"
  },
  fullPreviewNotHighQualityLayoutMediaWithoutDescription: {
    marginBottom: "brac1wpa"
  },
  source: {
    color: "j8h4s3v0",
    flexGrow: "tvf2evcx",
    flexShrink: "oq44ahr5",
    flexBasis: "lb5m6g5c",
    fontSize: "dsh4tgtl",
    paddingTop: "qbqilfqo"
  },
  statusSource: {
    color: "gtffwfyy",
    fontSize: "f8jlpxt4"
  },
  composeSource: {
    display: "qibyn6m3"
  },
  body: {
    alignSelf: "k5z04t9s",
    boxSizing: "cm280p3y",
    display: "p357zi0d",
    flexGrow: "ggj6brxn",
    flexShrink: "m0h2a7mj",
    flexBasis: "lb5m6g5c",
    flexDirection: "f8m0rgwh",
    justifyContent: "ac2vgrno",
    lineHeight: "idwf4z32",
    maxHeight: "onmzirdk",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    paddingTop: "n1yiu2zv",
    paddingEnd: "itegkywt",
    paddingBottom: "eb4rp10x",
    paddingStart: "rppts313",
    width: "ln8gz9je"
  },
  statusBody: {
    paddingTop: "b7n2qyd4",
    paddingEnd: "btzf6ewn",
    paddingBottom: "ekpn4oxx",
    paddingStart: "nqtxkp62",
    maxHeight: "msvqejku",
    flexShrink: "oq44ahr5"
  },
  fullPreviewBody: {
    maxHeight: "o3plsq22"
  },
  fullPreviewNotHighQualityLayoutBody: {
    display: "f804f6gw",
    overflowX: "ora14ekb",
    overflowY: "nv3qcefw"
  },
  composeBody: {
    boxSizing: "cm280p3y",
    maxHeight: "tqh8z113",
    paddingTop: "fbgy3m38",
    paddingEnd: "btzf6ewn",
    paddingBottom: "n0ziumnz",
    paddingStart: "chuyt2sy"
  },
  media: {
    flexGrow: "tvf2evcx",
    flexShrink: "oq44ahr5",
    flexBasis: "lb5m6g5c",
    height: "n43pk08i",
    width: "fpj7ivsd",
    objectFit: "jpthtbts"
  },
  botPluginLinkMedia: {
    flexGrow: "tvf2evcx",
    flexShrink: "oq44ahr5",
    flexBasis: "lb5m6g5c",
    height: "j4x5rqa0",
    width: "ti4zg4gs",
    objectFit: "jpthtbts"
  },
  statusMedia: {
    height: "ntadmmlx",
    width: "d7kr9pz8"
  },
  highQualityLayoutMedia: {
    width: "ln8gz9je",
    height: "ppled2lx"
  },
  fullPreviewNotHighQualityLayoutMedia: {
    marginTop: "opp68qpq",
    marginEnd: "spjzgwxb",
    marginBottom: "mpdn4nr2",
    marginStart: "a3oefunm",
    borderTopStartRadius: "l147y7tb",
    borderTopEndRadius: "mjscftrx",
    borderBottomEndRadius: "fqwk616h",
    borderBottomStartRadius: "pkud3j3x",
    float: "kpdgp91a",
    height: "fyre6qy8",
    width: "ot1opfol"
  },
  isInviteMedia: {
    borderTopStartRadius: "g9p5wyxn",
    borderTopEndRadius: "i0tg5vk9",
    borderBottomEndRadius: "aoogvgrq",
    borderBottomStartRadius: "o2zu3hjb",
    flexGrow: "tvf2evcx",
    flexShrink: "oq44ahr5",
    flexBasis: "lb5m6g5c",
    marginTop: "dj1c3cmq",
    marginEnd: "jnwc1y2a",
    marginBottom: "or9x5nie",
    marginStart: "a3oefunm",
    height: "brqbuz94",
    width: "nfc7olq2"
  },
  composeMedia: {
    minHeight: "auwbiavf",
    height: "mdwxuyu9",
    minWidth: "kr3beu63",
    width: "kzotrnxx"
  },
  thumbnailContainer: {
    alignItems: "gndfcl4n",
    display: "p357zi0d",
    justifyContent: "ac2vgrno",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    position: "g0rxnol2"
  },
  highQualityLayoutThumbnailContainer: {
    width: "ln8gz9je"
  },
  blurred: {
    filter: "fsmudgz7"
  },
  noThumbContainer: {
    position: "g0rxnol2",
    display: "p357zi0d",
    flexGrow: "tvf2evcx",
    flexShrink: "oq44ahr5",
    flexBasis: "lb5m6g5c",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno",
    width: "fpj7ivsd",
    height: "n43pk08i",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    backgroundColor: "ej3x2ktq"
  },
  noThumbIcon: {
    color: "i0c11cip"
  },
  galleryContainer: {
    position: "g0rxnol2",
    display: "p357zi0d",
    flexGrow: "tvf2evcx",
    flexShrink: "oq44ahr5",
    flexBasis: "lb5m6g5c",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    backgroundColor: "ej3x2ktq"
  },
  icon: {
    color: "k17s6i4e",
    pointerEvents: "m62443ks",
    filter: "abnmhpvo"
  },
  iconsContainer: {
    display: "p357zi0d",
    position: "lhggkp7q",
    right: "iyofsbg4",
    bottom: "lrw9n60e"
  },
  placeholderImage: {
    color: "roid3g8s"
  }
};
const P = [/^(www.)?twitter.com$/i];
function O(e) {
  let {
    children: t,
    useTextLimit: n,
    isStatus: a,
    isFullPreview: r,
    isHighQualityLayout: o,
    isCompose: l,
    testid: i
  } = e;
  if (t == null) {
    return null;
  }
  const s = d.default.isRTL() ? "rtl" : "ltr";
  const c = typeof t == "string" ? s : undefined;
  const f = n ? 280 : undefined;
  return S.default.createElement("div", {
    className: (0, T.default)([A.description, a && A.statusDescription, r && o && A.fullPreviewHighQualityLayoutDescription, r && !o && A.fullPreviewNotHighQualityLayoutDescription, l && A.composeDescription])
  }, typeof t == "string" ? S.default.createElement(y.default, {
    maxLines: 2
  }, S.default.createElement(u.EmojiText, {
    text: t,
    textLimit: f,
    titlify: true,
    direction: c,
    multiline: true
  })) : t);
}
function k(e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
  const [a, r] = n ? [1, 0.25] : [1.4, 1];
  return Math.min(Math.max(e / t, r), a);
}
function D(e) {
  let {
    children: t,
    height: n,
    width: a,
    hasHqThumbnail: r,
    displayType: o
  } = e;
  const l = k(n, a, true);
  const u = function (e, t) {
    if (e === i.DISPLAY_TYPE.ANNOUNCEMENT || e === i.DISPLAY_TYPE.NEWSLETTER) {
      return 480;
    } else if (t) {
      return 330;
    } else {
      return 240;
    }
  }(o, l < 1);
  return S.default.createElement("div", {
    className: (0, T.default)([A.thumbnailContainer, A.highQualityLayoutThumbnailContainer, !r && A.blurred]),
    style: {
      height: u * l
    }
  }, t);
}
function I(e) {
  let {
    children: t,
    height: n,
    width: a,
    hasHqThumbnail: r,
    displayType: o
  } = e;
  const l = k(n, a);
  return S.default.createElement("div", {
    className: (0, T.default)([A.thumbnailContainer, !r && A.blurred]),
    style: {
      width: 90 / l,
      minWidth: 90 / l
    }
  }, t);
}
function R(e) {
  let {
    children: t,
    width: n,
    height: a,
    isHighQualityLayout: r,
    thumbnailJpegDirectPath: o,
    thumbnailJpegHQ: l,
    galleryView: i,
    isStatus: u,
    displayType: s
  } = e;
  if ((o != null && o !== "" || l != null && l !== "") && a != null && n != null && !i) {
    const e = r ? D : I;
    return S.default.createElement(e, {
      height: a,
      width: n,
      displayType: s,
      hasHqThumbnail: l != null
    }, t);
  }
  if (u && r) {
    return S.default.createElement("div", {
      className: (0, T.default)(A.statusImageShrink)
    }, t);
  } else {
    return t;
  }
}
function N(e) {
  let {
    thumbnail: t,
    thumbnailJpeg: n,
    thumbnailJpegHQ: a,
    displayType: r,
    thumbnailJpegHeight: o,
    thumbnailJpegWidth: l,
    thumbnailJpegDirectPath: u,
    isHighQualityLayout: s,
    isStatus: c,
    isFullPreview: d,
    withoutDescription: p,
    isInvite: m,
    isCompose: h,
    theme: g
  } = e;
  const E = (0, T.default)([g !== "bot_plugin_link" ? A.media : A.botPluginLinkMedia, c && A.statusMedia, s && A.highQualityLayoutMedia, d && !s && A.fullPreviewNotHighQualityLayoutMedia, d && !s && p && A.fullPreviewNotHighQualityLayoutMediaWithoutDescription, m && A.isInviteMedia, h && A.composeMedia]);
  const v = r === i.DISPLAY_TYPE.GALLERY;
  if (t != null && t !== "") {
    return S.default.createElement("div", {
      className: E
    }, t);
  }
  if (n != null && n !== "" || a != null && a !== "") {
    const e = a == null || a === "" || v ? n : a;
    if (e != null) {
      return S.default.createElement(R, {
        thumbnailJpegDirectPath: u,
        thumbnailJpegHQ: a,
        height: o,
        width: l,
        galleryView: v,
        isStatus: c,
        displayType: r,
        isHighQualityLayout: s
      }, S.default.createElement("img", {
        alt: "",
        className: E,
        src: `data:image/jpeg;base64,${e}`
      }));
    }
  }
  if (v) {
    return S.default.createElement("div", {
      className: (0, T.default)(A.noThumbContainer)
    }, S.default.createElement(f.LinkIcon, {
      className: (0, T.default)(A.noThumbIcon),
      width: 32,
      height: 32
    }));
  } else {
    return null;
  }
}
function x(e) {
  let {
    children: t,
    displayType: n,
    star: a,
    kept: r
  } = e;
  if (n !== i.DISPLAY_TYPE.GALLERY) {
    return t;
  }
  const o = [];
  if (a === true) {
    o.push([_.StarIcon, 16, 15]);
  }
  if (r === true) {
    o.push([c.KeepInChatIcon, 15.64, 14.67]);
  }
  return S.default.createElement("div", {
    className: (0, T.default)(A.galleryContainer)
  }, t, o.length > 0 && S.default.createElement("div", {
    className: (0, T.default)(A.iconsContainer)
  }, o.map(e => {
    let [t, n, a] = e;
    return S.default.createElement(t, {
      key: t.name,
      className: (0, T.default)(A.icon),
      width: n,
      height: a
    });
  })));
}