var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/81109.js"));
var o = require("../app/370257.js");
var l = require("../app/287461.js");
var i = require("../app/950987.js");
var u = require("../app/650201.js");
var s = require("../app/63014.js");
var c = require("../app/780549.js");
var d = a(require("../app/846870.js"));
var f = require("../app/356097.js");
var p = require("../app/163755.js");
var m = a(require("./74063.js"));
var h = require("../app/270183.js");
var g = require("../app/644234.js");
var E = a(require("./59036.js"));
var v = a(require("../app/756680.js"));
var _ = q(require("./870338.js"));
var y = require("../app/172259.js");
var C = a(require("./886914.js"));
var b = require("./232695.js");
var M = a(require("./934801.js"));
var S = require("../app/97858.js");
var T = require("../app/114850.js");
var w = require("../app/787742.js");
var A = require("./205196.js");
var P = a(require("./389287.js"));
var O = a(require("./305698.js"));
var k = a(require("./467409.js"));
var D = require("../app/163139.js");
var I = require("./117182.js");
var R = a(require("../app/79291.js"));
var N = a(require("./439114.js"));
var x = require("./812677.js");
var L = require("../app/369084.js");
var j = require("../app/885313.js");
var B = require("../vendor/548360.js");
var F = q(require("../vendor/667294.js"));
var G = a(require("../app/156720.js"));
var U = require("../app/808446.js");
var W = require("../app/655241.js");
var H = require("./871210.js");
function V(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (V = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function q(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = V(t);
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
const Y = {
  thumb: {
    position: "g0rxnol2",
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno",
    maxWidth: "laorhtua",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    backgroundColor: "eqlnm1ad",
    borderTopStartRadius: "l8fojup5",
    borderTopEndRadius: "paxyh2gw",
    borderBottomEndRadius: "sfeitywo",
    borderBottomStartRadius: "cqsf3vkf",
    ":before": {
      position: "oxaw94s0",
      top: "a8g7dr2m",
      start: "e8y0iqoj",
      zIndex: "pirim95u",
      width: "kkl0lao1",
      height: "q80nfrzu",
      content: "lij4d1x3",
      opacity: "nnoyk08r"
    }
  },
  inAlbum: {
    height: "f3a6saz0",
    paddingTop: "i5tg98hk",
    paddingEnd: "f9ovudaz",
    paddingBottom: "przvwfww",
    paddingStart: "gx1rr48f"
  },
  cursorPointer: {
    cursor: "ajgl1lbb"
  },
  thumbVideo: {
    position: "g0rxnol2",
    display: "p357zi0d",
    flex: "kk3akd72",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno",
    width: "ln8gz9je",
    height: "ppled2lx"
  },
  thumbBody: {
    position: "lhggkp7q",
    top: "paaq2zjn",
    start: "s4eafire",
    zIndex: "jnl3jror",
    flex: "kk3akd72",
    width: "ln8gz9je",
    height: "ppled2lx",
    paddingTop: "m7o6y653",
    paddingEnd: "pfv1hzq5",
    paddingBottom: "bgtrvtbx",
    paddingStart: "l8dmboli",
    backgroundPosition: "delct6vn",
    backgroundSize: "qnwaluaf"
  },
  thumbBodyFullQuality: {
    animationName: "osz0hll6",
    animationDuration: "nq7eualt",
    animationTimingFunction: "em5jvqoa",
    animationFillMode: "a21kwdn3"
  },
  thumbBodyLowQuality: {
    filter: "fsmudgz7"
  },
  thumbChannelAlerts: {
    maxHeight: "owfawvgq"
  },
  duration: {
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    position: "lhggkp7q",
    bottom: "lrw9n60e",
    start: "okbql4zm",
    zIndex: "mb8var44",
    height: "e4p1bexh",
    fontSize: "lak21jic",
    lineHeight: "cr2cog7z",
    color: "pp8r7oc8"
  },
  icon: {
    display: "l7jjieqr",
    marginEnd: "kjemk6od",
    color: "k17s6i4e",
    verticalAlign: "fewfhwl7"
  },
  hdVideoIcon: {
    marginStart: "sd2p8cyi"
  },
  pipBtn: {
    zIndex: "ntz4oiyn",
    opacity: "axi1ht8l",
    transition: "mfeq4yke"
  },
  isHover: {
    opacity: "bs7a17vp"
  },
  overlay: {
    position: "g0rxnol2",
    maxWidth: "rbcxfhjb",
    marginTop: "tt8xd2xn",
    marginEnd: "jnwc1y2a",
    marginBottom: "mpdn4nr2",
    marginStart: "svoq16ka",
    ":before": {
      position: "oxaw94s0",
      zIndex: "me48zpqo",
      width: "kkl0lao1",
      height: "q80nfrzu",
      content: "lij4d1x3",
      background: "ksm4whjd",
      borderTopStartRadius: "h7jn2p0k",
      borderTopEndRadius: "q05gkqfx",
      borderBottomEndRadius: "kjzphxlt",
      borderBottomStartRadius: "lrgradkh"
    }
  },
  ctwaThumbWidth: {
    width: "e5nnjop8"
  }
};
const z = "PREVIEW";
const K = "FLOATER";
function Q(e, t) {
  const {
    msg: n,
    theme: a,
    hasOverlay: V = false,
    displayType: q,
    albumMsgs: Q,
    maxWidth: X
  } = e;
  const [Z, J, $, ee, te, ne, ae, re, oe, le, ie, ue, se, ce, de, fe, pe, me] = (0, H.useMsgValues)(e.msg.id, [w.getAck, w.getCaption, p.getDir, w.getFooter, w.getIsCarouselCard, w.getGifAttribution, w.getId, w.getIsGroupMsg, w.getIsPSA, w.getIsSentByMe, p.getIsUnsentMedia, p.getRtl, p.getSenderObj, w.getType, w.getIsFailed, w.getCtwaContext, w.getSupportsMessageFooter, p.getText]);
  const [he] = (0, H.useMsgValues)(e.msg.id, [w.getCampaignId]);
  (0, W.useModelValues)(e.mediaData, ["aspectRatio", "preview", "fullPreviewData", "duration", "mediaStage", "fullWidth", "fullHeight", "size"]);
  const ge = (0, F.useRef)(null);
  const Ee = (0, F.useRef)(null);
  const ve = e.mediaData;
  const [_e, ye] = (0, F.useState)(() => P.default.isOpened((0, D.unproxy)(n.unsafe())) ? K : z);
  const Ce = oe && (0, l.getABPropConfigValue)("enable_chat_psa_auto_play_videos");
  const be = e => {
    const t = Ee.current;
    if (ve.mediaStage === y.MEDIA_DATA_STAGE.RESOLVED && _e !== K && t) {
      if (e) {
        e.stopPropagation();
      }
      t.play();
    }
  };
  (0, F.useEffect)(() => {
    if ((0, u.isFeatureEnabled)("media_existence_check")) {
      (0, g.checkMediaExistence)((0, D.unproxy)(n));
    }
    if ((0, S.isHighQualityVideoThumbnailsEnabled)()) {
      (0, g.downloadVideoThumbnail)({
        msg: (0, D.unproxy)(n),
        chat: (0, p.getChat)(n.unsafe())
      });
    }
    if (Ce) {
      n.downloadMedia({
        downloadEvenIfExpensive: false,
        rmrReason: j.WEBC_RMR_REASON_CODE.MSG_RENDER,
        isUserInitiated: false
      });
    }
  }, []);
  const Me = () => {
    T.ModalManager.open(F.default.createElement(E.default, {
      msg: n.unsafe()
    }));
  };
  const Se = () => {
    n.forceDownloadMediaEvenIfExpensive();
  };
  const Te = () => {
    n.cancelDownload();
  };
  const we = () => {
    n.cancelUpload();
  };
  const Ae = () => {
    n.resumeUpload();
  };
  const Pe = () => {
    n.resumeRemoteUpload();
  };
  const Oe = e => {
    if (e) {
      e.stopPropagation();
    }
    T.ModalManager.open(F.default.createElement(C.default, {
      msg: (0, D.unproxy)(n.unsafe())
    }));
  };
  const ke = t => {
    if (t) {
      t.stopPropagation();
    }
    if (oe) {
      (0, L.logChatPSAMediaPlay)(n.getWamMediaType(), he, ae.id);
    }
    if (a === I.DisplayTheme.Album) {
      const t = e.zoomMsg || n;
      const a = new Set((Q || []).map(e => e.id.toString()));
      c.Cmd.mediaViewerModal({
        msg: (0, D.unproxy)(t.unsafe()),
        highlightedMsgIds: a
      });
    } else {
      c.Cmd.mediaViewerModal({
        msg: (0, D.unproxy)(n.unsafe())
      });
    }
  };
  const De = e => {
    if (e) {
      e.stopPropagation();
    }
    if (Ce) {
      (e => {
        const t = Ee.current;
        if (ve.mediaStage === y.MEDIA_DATA_STAGE.RESOLVED && t) {
          if (e) {
            e.stopPropagation();
          }
          t.pauseAndReset();
        }
      })();
    }
    const t = ge.current ? ge.current.getBoundingClientRect() : null;
    P.default.openPiP((0, D.unproxy)(n.unsafe()), 0, t);
  };
  (0, F.useImperativeHandle)(t, () => ({
    play: ke
  }));
  (0, U.useListener)(P.default, `${ae.toString()}_pip_did_open`, () => {
    if (_e !== K) {
      ye(K);
    }
  });
  (0, U.useListener)(P.default, `${ae.toString()}_pip_did_close`, () => {
    if (_e !== z) {
      ye(z);
    }
  });
  let Ie = null;
  let Re = null;
  switch (ve.mediaStage) {
    case y.MEDIA_DATA_STAGE.RESOLVED:
      if (Ce) {
        be();
        Re = ke;
      } else {
        Ie = F.default.createElement(_.Play, null);
        Re = ke;
      }
      break;
    case y.MEDIA_DATA_STAGE.INIT:
    case y.MEDIA_DATA_STAGE.EXISTS:
      Ie = F.default.createElement(_.Play, null);
      Re = ke;
      break;
    case y.MEDIA_DATA_STAGE.NEED_POKE:
      Ie = F.default.createElement(_.Download, {
        filesize: ve.size
      });
      Re = Se;
      break;
    case y.MEDIA_DATA_STAGE.UPLOADING:
    case y.MEDIA_DATA_STAGE.FINALIZING:
      Ie = F.default.createElement(_.Pending, {
        cancelable: true
      });
      Re = we;
      break;
    case y.MEDIA_DATA_STAGE.FETCHING:
      Ie = F.default.createElement(_.Pending, {
        cancelable: true
      });
      Re = Te;
      break;
    case y.MEDIA_DATA_STAGE.NEED_UPLOAD:
      Ie = F.default.createElement(_.Upload, {
        filesize: ve.size
      });
      Re = Ae;
      break;
    case y.MEDIA_DATA_STAGE.REMOTE_NEED_UPLOAD:
      Ie = F.default.createElement(_.Upload, {
        filesize: ve.size
      });
      Re = Pe;
      break;
    case y.MEDIA_DATA_STAGE.ERROR_MISSING:
      Re = Me;
      break;
    case y.MEDIA_DATA_STAGE.ERROR_UNSUPPORTED:
      if (!ie) {
        Ie = F.default.createElement(_.Download, {
          filesize: ve.size
        });
        Re = Oe;
      }
      break;
    case y.MEDIA_DATA_STAGE.SENDING:
      if (!de) {
        Ie = F.default.createElement(_.Pending, null);
      }
      break;
    case y.MEDIA_DATA_STAGE.ERROR_FILE_NOT_READABLE:
      __LOG__(4, undefined, new Error(), true)`Videos should be copied in memory when selected`;
      SEND_LOGS("media-image-not-readable-error");
      Re = k.default;
      break;
    case y.MEDIA_DATA_STAGE.DECRYPTING:
    case y.MEDIA_DATA_STAGE.ERROR_TOO_LARGE:
    case y.MEDIA_DATA_STAGE.PREPARING:
    case y.MEDIA_DATA_STAGE.PROGRESSIVE_READY:
    case y.MEDIA_DATA_STAGE.REMOTE_UPLOADING:
    case y.MEDIA_DATA_STAGE.REUPLOADING:
      Ie = F.default.createElement(_.Pending, null);
  }
  if (q === f.DISPLAY_TYPE.EDITING) {
    Re = null;
  }
  const Ne = parseInt(ve.duration, 10) ? s.Clock.durationStr(ve.duration) : null;
  const xe = Ne ? F.default.createElement("span", {
    className: (0, G.default)(Y.duration)
  }, F.default.createElement("div", {
    className: (0, G.default)(Y.icon, (0, h.isHdVideo)(ve.fullHeight, ve.fullWidth) && Y.hdVideoIcon)
  }, F.default.createElement(m.default, {
    height: ve.fullHeight,
    width: ve.fullWidth,
    type: ve.type
  })), F.default.createElement("span", null, Ne)) : null;
  const Le = (0, o.numCodepoints)(me != null ? me : "") > d.default.MAX_PORTRAIT_MEDIA_CAPTION_LENGTH;
  const {
    bubbleWidth: je,
    bubbleHeight: Be
  } = (0, b.getBubbleDimension)(ce, false, te, ve.aspectRatio, a, q, Le, X);
  const Fe = ve.fullHeight || Be;
  const Ge = ve.fullWidth || je;
  const Ue = (0, b.getImgStyle)(Ge, Fe, je, Be);
  const We = e => e instanceof v.default ? (0, r.default)({
    backgroundImage: R.default.thumbAsBackgroundImage(e.url()).backgroundImage
  }, Ue) : undefined;
  const He = We(ve.preview);
  const Ve = We(ve.fullPreviewData);
  const qe = ve.aspectRatio >= 1 ? {
    width: "auto",
    height: Be
  } : {
    width: je,
    height: "auto"
  };
  const Ye = ve.mediaStage === y.MEDIA_DATA_STAGE.RESOLVED && Ce ? F.default.createElement("div", {
    className: (0, G.default)(Y.thumbVideo)
  }, F.default.createElement(N.default, {
    ref: Ee,
    src: ve.renderableUrl,
    style: qe,
    onEnded: be,
    onLoadedMetadata: be,
    autoPlay: true,
    muted: true
  })) : F.default.createElement(F.default.Fragment, null, He ? F.default.createElement("div", {
    className: (0, G.default)(Y.thumbBody, Y.thumbBodyLowQuality),
    style: He
  }) : null, Ve ? F.default.createElement("div", {
    className: (0, G.default)(Y.thumbBody, Y.thumbBodyFullQuality),
    style: Ve
  }) : null);
  let ze;
  switch (ve.mediaStage) {
    case y.MEDIA_DATA_STAGE.INIT:
    case y.MEDIA_DATA_STAGE.RESOLVED:
      ze = F.default.createElement("div", {
        className: (0, G.default)(Y.pipBtn, e.hover === true && Y.isHover)
      }, F.default.createElement(A.PiPButton, {
        onClick: De,
        theme: A.PIP_BUTTON_THEME.PREVIEW
      }));
      break;
    default:
      ze = null;
  }
  let Ke;
  let Qe = F.default.createElement(M.default, null);
  if (q === f.DISPLAY_TYPE.NEWSLETTER_PREVIEW) {
    Re = null;
    ze = null;
    Ie = null;
    Qe = null;
  }
  switch (_e) {
    case z:
      Ke = F.default.createElement(F.default.Fragment, null, ze, Ie);
      break;
    case K:
      Ke = F.default.createElement(O.default, {
        icon: F.default.createElement(x.VideoPipLargeIcon, null)
      }, B.fbt._("This video is playing in picture in picture.", null, {
        hk: "4pqtaj"
      }));
  }
  return F.default.createElement(i.Clickable, {
    ref: ge,
    dataTestId: "video-content",
    className: (0, G.default)(Y.thumb, a === I.DisplayTheme.Album && Y.inAlbum, _e === z && q !== f.DISPLAY_TYPE.EDITING && Y.cursorPointer, V === true && Y.overlay, fe != null && Y.ctwaThumbWidth, q === f.DISPLAY_TYPE.CHANNEL_ALERTS_MSGS && Y.thumbChannelAlerts),
    onClick: Re,
    inlineStyle: {
      width: je,
      height: Be
    }
  }, V || q === f.DISPLAY_TYPE.NEWSLETTER_PREVIEW ? null : Ke, Ye, Qe, V || q === f.DISPLAY_TYPE.NEWSLETTER_PREVIEW ? null : xe);
}
var X = (0, F.forwardRef)(Q);
exports.default = X;