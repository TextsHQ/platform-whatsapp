var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/370257.js");
var o = a(require("./362842.js"));
var l = a(require("./339435.js"));
var i = a(require("../app/846870.js"));
var u = require("../app/356097.js");
var s = require("../app/163755.js");
var c = a(require("./599664.js"));
var d = a(require("./902538.js"));
var f = a(require("./371878.js"));
var p = require("./232695.js");
var m = a(require("./428759.js"));
var h = require("./789955.js");
var g = require("../app/787742.js");
var E = require("./192071.js");
var v = require("./414493.js");
var _ = require("./117182.js");
var y = a(require("./955880.js"));
var C = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = T(t);
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
}(require("../vendor/667294.js"));
var b = a(require("../app/156720.js"));
var M = require("../app/655241.js");
var S = require("./871210.js");
function T(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (T = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const w = {
  author: {
    boxSizing: "cm280p3y",
    paddingTop: "ocd2b0bc",
    paddingEnd: "fhfm09ip",
    paddingBottom: "bxcbqipq",
    paddingStart: "mhcwslh8"
  },
  bubble: {
    boxSizing: "cm280p3y",
    maxWidth: "ktbp76dp",
    position: "g0rxnol2",
    zIndex: "jnl3jror"
  },
  bubbleAnnouncement: {
    maxWidth: "l8wmlvd6"
  },
  bubbleChannelAlerts: {
    maxWidth: "l8wmlvd6"
  },
  portrait: {
    maxWidth: "eu4mztcy"
  },
  caption: {
    boxSizing: "cm280p3y",
    maxWidth: "bkoknyjm",
    paddingTop: "esbfogcw",
    paddingEnd: "jfqm35v0",
    paddingBottom: "bxcbqipq",
    paddingStart: "mhcwslh8"
  },
  captionAnnouncement: {
    maxWidth: "qw08k5dd"
  },
  ctwaContainerWidth: {
    maxWidth: "f4q7vbcz"
  },
  ctwaContext: {
    marginTop: "tt8xd2xn",
    marginEnd: "jnwc1y2a",
    marginBottom: "kzyzudjh",
    marginStart: "svoq16ka"
  },
  forwardedAuthor: {
    paddingBottom: "przvwfww"
  },
  forwardedIndicator: {
    paddingTop: "ocd2b0bc",
    paddingEnd: "f9ovudaz",
    paddingBottom: "aa0kojfi",
    paddingStart: "mhcwslh8"
  },
  hasAuthorForwardedIndicator: {
    paddingTop: "i5tg98hk"
  },
  hasCaptionMeta: {
    bottom: "lrw9n60e",
    end: "fz4q5utg"
  },
  isPSACaption: {
    paddingBottom: "l5xxxszt"
  },
  meta: {
    bottom: "dpkuihx7",
    position: "lhggkp7q",
    end: "j2mzdvlq",
    zIndex: "mb8var44"
  },
  nonAlbumBubble: {
    paddingTop: "ocd2b0bc",
    paddingEnd: "folpon7g",
    paddingBottom: "aa0kojfi",
    paddingStart: "snweb893"
  },
  overlayAlbumText: {
    alignItems: "gndfcl4n",
    borderTopStartRadius: "l8fojup5",
    borderTopEndRadius: "paxyh2gw",
    borderBottomEndRadius: "sfeitywo",
    borderBottomStartRadius: "cqsf3vkf",
    cursor: "ajgl1lbb",
    display: "p357zi0d",
    flexGrow: "ggj6brxn",
    justifyContent: "ac2vgrno",
    maxWidth: "rbcxfhjb",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    position: "g0rxnol2"
  },
  overlayAlbumAnnouncementText: {
    maxWidth: "icz5gmjd"
  },
  quote: {
    marginBottom: "kzyzudjh",
    maxWidth: "bkoknyjm"
  },
  quotePortrait: {
    maxWidth: "czh1irh3"
  },
  quoteAnnouncement: {
    maxWidth: "qw08k5dd"
  }
};
function A(e, t) {
  const {
    msg: n,
    theme: a,
    overlayContent: T,
    displayType: A,
    displayAuthor: P
  } = e;
  const O = (0, C.useRef)(null);
  const k = e => {
    var t;
    e.preventDefault();
    if (!((t = O.current) === null || t === undefined)) {
      t.play(e);
    }
  };
  (0, C.useImperativeHandle)(t, () => ({
    handleKeyActivation: k
  }));
  const [D, I, R, N, x, L, j, B, F, G, U, W, H, V, q, Y, z] = (0, S.useMsgValues)(e.msg.id, [g.getAck, g.getCaption, s.getDir, g.getFooter, g.getId, g.getIsCarouselCard, g.getIsGroupMsg, g.getIsPSA, g.getIsSentByMe, s.getIsUnsentMedia, s.getRtl, s.getSenderObj, g.getType, g.getIsFailed, g.getCtwaContext, g.getSupportsMessageFooter, s.getText]);
  const K = (0, M.useModelValues)(e.msg.mediaData, ["aspectRatio"]);
  const Q = (0, r.numCodepoints)(z != null ? z : "") > i.default.MAX_PORTRAIT_MEDIA_CAPTION_LENGTH;
  const {
    bubbleWidth: X,
    bubbleHeight: Z
  } = (0, p.getBubbleDimension)(H, false, L, K.aspectRatio, a, A, Q);
  const J = X < Z && (0, p.canUseCustomCropping)(H, a, A);
  const $ = (0, u.isWideDisplay)(A);
  const ee = (0, E.showForwarded)(n) && e.theme !== _.DisplayTheme.Album;
  const te = ee ? C.default.createElement(m.default, {
    msg: n.unsafe(),
    xstyle: [w.forwardedIndicator, P && w.hasAuthorForwardedIndicator]
  }) : null;
  const ne = P ? C.default.createElement("div", {
    className: (0, b.default)(w.author, ee && w.forwardedAuthor)
  }, C.default.createElement(c.default, {
    msg: n,
    contact: W,
    displayType: A
  })) : null;
  const ae = I != null && I !== "" ? C.default.createElement("div", {
    className: (0, b.default)(w.caption, B && w.isPSACaption, $ && w.captionAnnouncement)
  }, C.default.createElement(f.default, {
    msg: n.unsafe(),
    trusted: e.trusted,
    spacer: !(Y && N),
    testId: "video-caption"
  })) : null;
  const re = (0, b.default)(w.bubble, (!a || a !== _.DisplayTheme.Album) && w.nonAlbumBubble, J && w.portrait, q != null && w.ctwaContainerWidth, $ && w.bubbleAnnouncement, e.displayType === u.DISPLAY_TYPE.CHANNEL_ALERTS_MSGS && w.bubbleChannelAlerts);
  const oe = e.quotedMsg ? C.default.createElement("div", {
    className: (0, b.default)(w.quote, J && w.quotePortrait, $ && w.quoteAnnouncement)
  }, e.quotedMsg) : null;
  let le;
  if (T == null) {
    le = C.default.createElement("div", {
      className: (0, b.default)(w.meta, ae && w.hasCaptionMeta)
    }, C.default.createElement(h.Meta, {
      msg: n,
      displayType: A,
      isAlbum: a === _.DisplayTheme.Album
    }));
  }
  let ie = C.default.createElement("div", {
    className: re
  }, ne, te, oe, C.default.createElement(o.default, {
    msg: n.unsafe(),
    wrapperClass: (0, b.default)(w.ctwaContext)
  }), C.default.createElement(y.default, {
    ref: O,
    albumMsgs: e.albumMsgs,
    displayType: A,
    hasOverlay: Boolean(T),
    hover: e.hover,
    msg: n,
    mediaData: e.msg.mediaData,
    theme: a,
    zoomMsg: e.zoomMsg
  }), ae, C.default.createElement(l.default, {
    dir: R,
    footer: N,
    isShown: Y,
    msg: n.unsafe(),
    rtl: U,
    type: H,
    trusted: e.trusted
  }), le);
  if (ae) {
    return C.default.createElement(d.default, {
      contact: W,
      msg: n.unsafe(),
      onClick: v.stopPropagation
    }, ie);
  } else {
    if (T != null) {
      ie = C.default.createElement("div", {
        className: (0, b.default)(w.overlayAlbumText, $ && w.overlayAlbumAnnouncementText)
      }, ie, T);
    }
    return C.default.createElement("div", {
      onClick: v.stopPropagation
    }, ie);
  }
}
var P = (0, C.forwardRef)(A);
exports.default = P;