var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageMessage = undefined;
var r = require("../app/370257.js");
var o = a(require("./362842.js"));
var l = a(require("./339435.js"));
var i = require("../app/396574.js");
var u = require("../app/950987.js");
var s = require("../app/780549.js");
var c = a(require("../app/846870.js"));
var d = require("../app/356097.js");
var f = require("../app/235630.js");
var p = require("../app/163755.js");
var m = a(require("./74063.js"));
var h = a(require("./59036.js"));
var g = a(require("../app/756680.js"));
var E = Y(require("./870338.js"));
var v = require("../app/172259.js");
var _ = a(require("./674465.js"));
var y = a(require("./599664.js"));
var C = a(require("./902538.js"));
var b = a(require("./371878.js"));
var M = require("./232695.js");
var S = a(require("./428759.js"));
var T = require("./789955.js");
var w = a(require("./934801.js"));
var A = require("../app/114850.js");
var P = require("../app/787742.js");
var O = require("./192071.js");
var k = require("../app/373070.js");
var D = a(require("./467409.js"));
var I = require("../app/163139.js");
var R = require("./414493.js");
var N = require("./117182.js");
var x = require("../app/676345.js");
var L = a(require("../app/844453.js"));
var j = require("../app/369084.js");
var B = require("../vendor/548360.js");
var F = Y(require("../vendor/667294.js"));
var G = a(require("../app/156720.js"));
var U = require("../app/655241.js");
var W = require("./476845.js");
var H = require("./871210.js");
var V = require("./884561.js");
function q(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (q = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function Y(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = q(t);
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
}
const z = {
  bubble: {
    boxSizing: "cm280p3y",
    maxWidth: "ktbp76dp",
    paddingTop: "ocd2b0bc",
    paddingEnd: "folpon7g",
    paddingBottom: "aa0kojfi",
    paddingStart: "snweb893",
    position: "g0rxnol2",
    zIndex: "jnl3jror"
  },
  bubbleAlbum: {
    paddingTop: "i5tg98hk",
    paddingEnd: "f9ovudaz",
    paddingBottom: "przvwfww",
    paddingStart: "gx1rr48f"
  },
  bubblePortrait: {
    maxWidth: "eu4mztcy"
  },
  bubblePreview: {
    maxWidth: "laorhtua"
  },
  bubbleAnnouncement: {
    maxWidth: "l8wmlvd6"
  },
  bubbleChannelAlerts: {
    maxWidth: "laorhtua"
  },
  thumbBody: {
    transition: "jciay5ix",
    flexGrow: "tvf2evcx",
    flexShrink: "oq44ahr5",
    flexBasis: "lb5m6g5c"
  },
  thumbBodyPreview: {
    filter: "fsmudgz7"
  },
  animateIn: {
    animationName: "osz0hll6",
    animationDuration: "nq7eualt",
    animationTimingFunction: "em5jvqoa",
    animationFillMode: "a21kwdn3"
  },
  ctwaContext: {
    marginTop: "tt8xd2xn",
    marginEnd: "jnwc1y2a",
    marginBottom: "kzyzudjh",
    marginStart: "svoq16ka"
  },
  author: {
    paddingBottom: "bxcbqipq",
    paddingStart: "mhcwslh8",
    paddingTop: "ocd2b0bc"
  },
  authorElevatedPushNames: {
    paddingEnd: "jfqm35v0"
  },
  forwardedIndicator: {
    paddingTop: "ocd2b0bc",
    paddingEnd: "f9ovudaz",
    paddingBottom: "aa0kojfi",
    paddingStart: "mhcwslh8"
  },
  forwardedIndicatorHasAuthor: {
    paddingTop: "i5tg98hk"
  },
  overlay: {
    marginTop: "tt8xd2xn",
    marginEnd: "jnwc1y2a",
    marginBottom: "mpdn4nr2",
    marginStart: "svoq16ka",
    maxWidth: "rbcxfhjb",
    position: "g0rxnol2",
    "::before": {
      background: "rnzbggcn",
      borderTopStartRadius: "gaz0s4oj",
      borderTopEndRadius: "faao65il",
      borderBottomEndRadius: "o9exb5zn",
      borderBottomStartRadius: "bl44g9bl",
      content: "ckfn5qle",
      height: "flcm9zni",
      position: "jiaumjzp",
      width: "evuypb09",
      zIndex: "dgw4ccbq"
    }
  },
  overlayAnnouncement: {
    maxWidth: "icz5gmjd"
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
    flexShrink: "m0h2a7mj",
    flexBasis: "rjo8vgbg",
    justifyContent: "ac2vgrno",
    maxWidth: "rbcxfhjb",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    position: "g0rxnol2"
  },
  overlayAlbumAnnouncementText: {
    maxWidth: "icz5gmjd"
  },
  meta: {
    bottom: "dpkuihx7",
    position: "lhggkp7q",
    end: "j2mzdvlq",
    zIndex: "b9fczbqn"
  },
  metaHasCaption: {
    end: "fz4q5utg",
    bottom: "lrw9n60e"
  },
  metaAlbum: {
    end: "en6yos0k",
    bottom: "lrw9n60e"
  },
  caption: {
    boxSizing: "cm280p3y",
    maxWidth: "bkoknyjm",
    paddingTop: "esbfogcw",
    paddingEnd: "jfqm35v0",
    paddingBottom: "bxcbqipq",
    paddingStart: "mhcwslh8"
  },
  captionPortrait: {
    maxWidth: "czh1irh3"
  },
  captionAnnouncement: {
    maxWidth: "qw08k5dd"
  },
  captionPSA: {
    paddingBottom: "l5xxxszt"
  },
  quote: {
    boxSizing: "cm280p3y",
    maxWidth: "bkoknyjm"
  },
  quotePortrait: {
    maxWidth: "czh1irh3"
  },
  quoteAnnouncement: {
    maxWidth: "qw08k5dd"
  },
  thumb: {
    alignItems: "gndfcl4n",
    borderTopStartRadius: "l8fojup5",
    borderTopEndRadius: "paxyh2gw",
    borderBottomEndRadius: "sfeitywo",
    borderBottomStartRadius: "cqsf3vkf",
    display: "p357zi0d",
    justifyContent: "ac2vgrno",
    maxWidth: "laorhtua",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    position: "g0rxnol2"
  },
  thumbAlbum: {
    maxHeight: "ehh38hgh",
    minHeight: "lbjv9fgx",
    position: "g0rxnol2"
  },
  thumbAlbumAnnouncement: {
    maxHeight: "p92xuxmg",
    minHeight: "lsgse84k"
  },
  thumbGallery: {
    maxHeight: "tvsw1x19"
  },
  thumbChannelAlerts: {
    maxHeight: "owfawvgq"
  },
  hdIcon: {
    position: "lhggkp7q",
    bottom: "s7ynmu90",
    start: "hydhjofj",
    zIndex: "qtm54r9o"
  }
};
function K(e) {
  let {
    isPreview: t = false,
    imgRef: n,
    mediaData: a,
    caption: r,
    bubbleWidth: o,
    bubbleHeight: l,
    src: i,
    animateIn: u = false,
    useDynamicSizing: s
  } = e;
  const {
    fullHeight: c,
    fullWidth: d
  } = a;
  const f = (0, G.default)(z.thumbBody, t && z.thumbBodyPreview, u && z.animateIn);
  const p = s ? {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  } : (0, M.getImgStyle)(d || o, c || l, o, l);
  return F.default.createElement("img", {
    alt: r,
    src: i,
    className: f,
    style: p,
    ref: n
  });
}
function Q(e) {
  let {
    imgRef: t,
    mediaData: n,
    bubbleWidth: a,
    bubbleHeight: r,
    caption: o,
    useDynamicSizing: l
  } = e;
  return F.default.createElement(K, {
    imgRef: t,
    mediaData: n,
    caption: o,
    bubbleWidth: a,
    bubbleHeight: r,
    isPreview: true,
    src: n.preview instanceof g.default ? n.preview.url() : null,
    useDynamicSizing: l
  });
}
function X(e, t) {
  const {
    msg: n,
    contentContainerClassName: a,
    captionComponent: g,
    thumbClassName: E,
    onThumbClick: L,
    theme: q,
    overlayContent: Y,
    displayType: X,
    displayAuthor: Z,
    isMsgVisible: J,
    albumMsgs: ee,
    zoomMsg: te,
    hideMeta: ne,
    maxWidth: ae
  } = e;
  const re = (0, F.useRef)(null);
  const [oe, le, ie, ue, se, ce, de, fe, pe, me, he, ge, Ee, ve, _e, ye] = (0, H.useMsgValues)(e.msg.id, [P.getAck, P.getCaption, p.getDir, P.getFooter, P.getIsFromTemplate, P.getIsCarouselCard, P.getId, P.getIsFailed, P.getIsGroupMsg, P.getIsPSA, P.getIsSentByMe, p.getRtl, p.getSenderObj, P.getType, P.getSupportsMessageFooter, p.getText]);
  const Ce = (0, p.getChat)(n.unsafe());
  const be = (0, U.useModelValues)(e.mediaData, ["aspectRatio", "preview", "mediaStage", "fullWidth", "fullHeight", "size", "progressiveStage", "type"]);
  const Me = (0, V.useSendViewCount)(n.id, {
    mediaData: be,
    displayType: e.displayType
  });
  const Se = (0, W.useMsgDownloadMedia)(n);
  const Te = () => {
    A.ModalManager.open(F.default.createElement(h.default, {
      msg: n.unsafe()
    }));
  };
  const we = e => {
    if (!J) {
      return null;
    }
    const t = J(e);
    if (t) {
      return t.getImgNode && t.getImgNode();
    } else {
      return null;
    }
  };
  const Ae = () => {
    n.forceDownloadMediaEvenIfExpensive();
  };
  const Pe = () => {
    n.cancelDownload();
  };
  const Oe = () => {
    n.cancelUpload();
  };
  const ke = () => {
    n.resumeUpload();
  };
  const De = () => {
    n.resumeRemoteUpload();
  };
  const Ie = () => ve === k.MSG_TYPE.IMAGE && le ? le : undefined;
  const Re = () => re.current;
  (0, F.useImperativeHandle)(t, () => ({
    getImgNode: Re
  }));
  const Ne = e => {
    if (e) {
      e.stopPropagation();
    }
    if (me) {
      (0, j.logChatPSAMediaPlay)(n.getWamMediaType(), n.campaignId, de.id);
    }
    if (q === N.DisplayTheme.Album) {
      const e = new Set((ee || []).map(e => e.id.toString()));
      s.Cmd.mediaViewerModal({
        msg: (0, I.unproxy)((te || n).unsafe()),
        getZoomNode: we,
        highlightedMsgIds: e
      });
    } else {
      s.Cmd.mediaViewerModal({
        msg: (0, I.unproxy)(n.unsafe()),
        getZoomNode: we
      });
    }
  };
  const xe = (0, r.numCodepoints)(ye != null ? ye : "") > c.default.MAX_PORTRAIT_MEDIA_CAPTION_LENGTH;
  const {
    bubbleWidth: Le,
    bubbleHeight: je
  } = (0, M.getBubbleDimension)(ve, se, ce, be.aspectRatio, q, X, xe, ae);
  const Be = Ie();
  let Fe = Be ? null : F.default.createElement(w.default, null);
  const Ge = Le < je && (0, M.canUseCustomCropping)(ve, q, X);
  const Ue = (0, d.isWideDisplay)(X);
  let We = Be ? F.default.createElement("div", {
    className: (0, G.default)(z.caption, Ge && z.captionPortrait, Ue && z.captionAnnouncement, me && z.captionPSA)
  }, F.default.createElement(b.default, {
    msg: n.unsafe(),
    trusted: e.trusted,
    spacer: !(_e && ue),
    testId: "image-caption"
  })) : null;
  let He = null;
  if (X === d.DISPLAY_TYPE.NEWSLETTER_PREVIEW) {
    We = null;
    He = null;
    Fe = null;
  } else if (X === d.DISPLAY_TYPE.EDITING) {
    He = L != null ? L : null;
  } else if (Y != null) {
    He = L || Ne;
  } else {
    const {
      mediaStage: e
    } = be;
    He = function (e, t, n, a, r, o, l, i, u) {
      switch (e) {
        case v.MEDIA_DATA_STAGE.RESOLVED:
        case v.MEDIA_DATA_STAGE.PROGRESSIVE_READY:
          return t || n;
        case v.MEDIA_DATA_STAGE.FETCHING:
          return a;
        case v.MEDIA_DATA_STAGE.INIT:
        case v.MEDIA_DATA_STAGE.EXISTS:
        case v.MEDIA_DATA_STAGE.NEED_POKE:
          return o;
        case v.MEDIA_DATA_STAGE.UPLOADING:
        case v.MEDIA_DATA_STAGE.FINALIZING:
        case v.MEDIA_DATA_STAGE.REUPLOADING:
          return r;
        case v.MEDIA_DATA_STAGE.NEED_UPLOAD:
          return l;
        case v.MEDIA_DATA_STAGE.REMOTE_NEED_UPLOAD:
          return i;
        case v.MEDIA_DATA_STAGE.ERROR_MISSING:
          return t || u;
        case v.MEDIA_DATA_STAGE.ERROR_UNSUPPORTED:
          return t || n;
        case v.MEDIA_DATA_STAGE.SENDING:
        case v.MEDIA_DATA_STAGE.DECRYPTING:
          return;
        case v.MEDIA_DATA_STAGE.ERROR_FILE_NOT_READABLE:
          __LOG__(4, undefined, new Error(), true)`Images should be copied in memory when selected`;
          SEND_LOGS("media-image-not-readable-error");
          return D.default;
        case v.MEDIA_DATA_STAGE.ERROR_TOO_LARGE:
        case v.MEDIA_DATA_STAGE.PREPARING:
        case v.MEDIA_DATA_STAGE.REMOTE_UPLOADING:
      }
    }(e, L, Ne, Pe, Oe, Ae, ke, De, Te);
  }
  const Ve = (0, O.showForwarded)(n) && e.theme !== N.DisplayTheme.Album;
  const qe = q === N.DisplayTheme.Album;
  const Ye = (0, G.default)(z.bubble, Ge && z.bubblePortrait, qe && z.bubbleAlbum, Ue && z.bubbleAnnouncement, e.displayType === d.DISPLAY_TYPE.CHANNEL_ALERTS_MSGS && z.bubbleChannelAlerts);
  const ze = e.displayType === d.DISPLAY_TYPE.MSG_INFO || e.displayType === d.DISPLAY_TYPE.STARRED_MSGS;
  const Ke = (0, i.classnamesConvertMeToStylexPlease)(Ye, (0, G.default)(ze && z.bubblePreview));
  const Qe = Z ? F.default.createElement("div", {
    className: (0, G.default)(z.author, Ve && x.uiPadding.bottom0, (0, f.elevatedPushNamesEnabled)(Ce) && z.authorElevatedPushNames)
  }, F.default.createElement(y.default, {
    msg: n,
    contact: Ee,
    displayType: e.displayType
  })) : null;
  const Xe = Ve ? F.default.createElement(S.default, {
    msg: n.unsafe(),
    xstyle: [z.forwardedIndicator, Z && z.forwardedIndicatorHasAuthor]
  }) : null;
  const Ze = e.quotedMsg ? F.default.createElement("div", {
    className: (0, G.default)(z.quote, x.uiMargin.bottom3, Ge && z.quotePortrait, Ue && z.quoteAnnouncement)
  }, e.quotedMsg) : null;
  const Je = e.displayType === d.DISPLAY_TYPE.GALLERY;
  const $e = (0, G.default)(z.thumb, Boolean(Y) && z.overlay, Boolean(Y) && Ue && z.overlayAnnouncement, qe && z.thumbAlbum, qe && Ue && z.thumbAlbumAnnouncement, Je && z.thumbGallery, e.displayType === d.DISPLAY_TYPE.CHANNEL_ALERTS_MSGS && z.thumbChannelAlerts);
  let et;
  if (!(Y != null || ne)) {
    et = F.default.createElement("div", {
      className: (0, G.default)(z.meta, Boolean(Be) && z.metaHasCaption, qe && z.metaAlbum)
    }, F.default.createElement(T.Meta, {
      msg: n,
      displayType: X,
      isAlbum: qe
    }));
  }
  let tt = F.default.createElement("div", {
    className: a,
    ref: Me
  }, Qe, Xe, Ze, F.default.createElement(o.default, {
    msg: n.unsafe(),
    wrapperClass: (0, G.default)(z.ctwaContext)
  }), F.default.createElement(u.Clickable, {
    dataTestId: "image-thumb",
    className: E || $e,
    onClick: He,
    ariaLabel: B.fbt._("Open Picture", null, {
      hk: "3uhcjZ"
    }),
    focusTheme: u.FocusTheme.Image,
    inlineStyle: {
      width: Le,
      height: je
    }
  }, F.default.createElement($, {
    mediaData: (0, I.unproxy)(be),
    msg: (0, I.unproxy)(n)
  }), F.default.createElement(_.default, {
    mediaData: be,
    placeholderRenderer: () => F.default.createElement(Q, {
      useDynamicSizing: X === d.DISPLAY_TYPE.NEWSLETTER || X === d.DISPLAY_TYPE.ANNOUNCEMENT,
      imgRef: re,
      mediaData: be,
      caption: Ie(),
      bubbleWidth: Le,
      bubbleHeight: je
    }),
    downloadMedia: Se,
    renderProgressively: true
  }, (e, t) => F.default.createElement(K, {
    useDynamicSizing: X === d.DISPLAY_TYPE.NEWSLETTER || X === d.DISPLAY_TYPE.ANNOUNCEMENT,
    isPreview: t,
    imgRef: re,
    mediaData: be,
    caption: Ie(),
    bubbleWidth: Le,
    bubbleHeight: je,
    src: e,
    animateIn: !t
  })), Fe, F.default.createElement(m.default, {
    height: be.fullHeight,
    width: be.fullWidth,
    type: be.type,
    xstyle: z.hdIcon
  })), g || We, F.default.createElement(l.default, {
    dir: ie,
    footer: ue,
    isShown: _e,
    msg: n.unsafe(),
    rtl: ge,
    trusted: e.trusted,
    type: ve
  }), et);
  if (We) {
    return F.default.createElement(C.default, {
      contact: Ee,
      msg: n.unsafe(),
      className: Ke,
      onClick: R.stopPropagation
    }, tt);
  } else {
    if (Y != null) {
      tt = F.default.createElement("div", {
        className: (0, G.default)(z.overlayAlbumText, Ue && z.overlayAlbumAnnouncementText)
      }, tt, Y);
    }
    return F.default.createElement("div", {
      className: Ke,
      onClick: R.stopPropagation
    }, tt);
  }
}
const Z = (0, F.forwardRef)(X);
Z.displayName = "WrappedPictureBase";
const J = Z;
function $(e) {
  let {
    mediaData: t,
    msg: n
  } = e;
  const {
    mediaStage: a,
    progressiveStage: r
  } = (0, U.useModelValues)(t, ["mediaStage", "progressiveStage"]);
  let o = null;
  switch (a) {
    case v.MEDIA_DATA_STAGE.RESOLVED:
    case v.MEDIA_DATA_STAGE.PROGRESSIVE_READY:
      break;
    case v.MEDIA_DATA_STAGE.FETCHING:
      o = F.default.createElement(E.Pending, {
        cancelable: true
      });
      break;
    case v.MEDIA_DATA_STAGE.INIT:
    case v.MEDIA_DATA_STAGE.EXISTS:
    case v.MEDIA_DATA_STAGE.NEED_POKE:
      o = F.default.createElement(E.Download, {
        filesize: t.size
      });
      break;
    case v.MEDIA_DATA_STAGE.UPLOADING:
    case v.MEDIA_DATA_STAGE.FINALIZING:
    case v.MEDIA_DATA_STAGE.REUPLOADING:
      o = F.default.createElement(E.Pending, {
        cancelable: true
      });
      break;
    case v.MEDIA_DATA_STAGE.NEED_UPLOAD:
    case v.MEDIA_DATA_STAGE.REMOTE_NEED_UPLOAD:
      o = F.default.createElement(E.Upload, {
        filesize: t.size
      });
      break;
    case v.MEDIA_DATA_STAGE.ERROR_MISSING:
      break;
    case v.MEDIA_DATA_STAGE.ERROR_UNSUPPORTED:
      o = F.default.createElement(E.Download, {
        filesize: t.size
      });
      break;
    case v.MEDIA_DATA_STAGE.SENDING:
      o = (0, P.getIsFailed)(n) ? null : F.default.createElement(E.Pending, null);
      break;
    case v.MEDIA_DATA_STAGE.DECRYPTING:
      if (r == null) {
        o = F.default.createElement(E.Pending, {
          cancelable: true
        });
      }
      break;
    case v.MEDIA_DATA_STAGE.ERROR_FILE_NOT_READABLE:
      __LOG__(4, undefined, new Error(), true)`Images should be copied in memory when selected`;
      SEND_LOGS("media-image-not-readable-error");
      break;
    case v.MEDIA_DATA_STAGE.ERROR_TOO_LARGE:
    case v.MEDIA_DATA_STAGE.PREPARING:
    case v.MEDIA_DATA_STAGE.REMOTE_UPLOADING:
      o = F.default.createElement(E.Pending, null);
  }
  return F.default.createElement(L.default, {
    transitionName: "fade-ease-out"
  }, o);
}
exports.ImageMessage = J;