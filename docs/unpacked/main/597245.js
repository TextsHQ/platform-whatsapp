var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrappedGif = exports.MAX_DIM = exports.MAX_ANNOUNCEMENT_DIM = exports.BUBBLE_PADDING = undefined;
var r = require("../app/287461.js");
var o = a(require("./362842.js"));
var l = require("../app/396574.js");
var i = require("../app/950987.js");
var u = require("../app/780549.js");
var s = require("../app/356097.js");
var c = require("../app/163755.js");
var d = require("./398659.js");
var f = a(require("./59036.js"));
var p = a(require("../app/756680.js"));
var m = require("../app/172259.js");
var h = a(require("./599664.js"));
var g = a(require("./902538.js"));
var E = a(require("./371878.js"));
var v = a(require("./428759.js"));
var _ = a(require("./121873.js"));
var y = a(require("./894901.js"));
var C = require("./789955.js");
var b = a(require("./934801.js"));
var M = require("../app/114850.js");
var S = require("../app/787742.js");
var T = require("./192071.js");
var w = require("../app/533494.js");
var A = require("../app/163139.js");
var P = require("./414493.js");
var O = require("../app/152189.js");
var k = require("./266300.js");
var D = a(require("./439114.js"));
var I = require("../vendor/548360.js");
var R = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = G(t);
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
var N = a(require("./105170.js"));
var x = require("../app/655241.js");
var L = require("./476845.js");
var j = require("./871210.js");
var B = require("./884561.js");
var F = a(require("../app/895851.js"));
function G(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (G = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const U = (0, O.getIntFromStylesProp)(_.default, "-width-picture-bubble-inner");
exports.MAX_DIM = U;
const W = (0, O.getIntFromStylesProp)(_.default, "-width-announcement-bubble-inner");
exports.MAX_ANNOUNCEMENT_DIM = W;
const H = (0, O.getIntFromStylesProp)(_.default, "-padding-picture-bubble");
exports.BUBBLE_PADDING = H;
function V(e, t) {
  const {
    msg: n,
    isMsgVisible: a
  } = e;
  const [O, G, V, q, Y, z, K, Q, X] = (0, j.useMsgValues)(e.msg.id, [S.getId, S.getAck, S.getCaption, S.getIsFailed, S.getIsPSA, S.getIsSentByMe, S.getIsGroupMsg, S.getGifAttribution, c.getSenderObj]);
  const Z = (0, x.useModelValues)(e.mediaData, ["aspectRatio", "preview", "duration", "type", "mediaStage", "renderableUrl", "fullWidth", "fullHeight", "size"]);
  const J = Z;
  const $ = (0, R.useRef)(null);
  const ee = (0, R.useRef)(0);
  const te = (0, R.useRef)(null);
  const [ne, ae] = (0, R.useState)(false);
  const re = (0, F.default)();
  (0, L.useMsgDownloadMedia)(n);
  const oe = (0, s.isWideDisplay)(e.displayType) || e.displayType === s.DISPLAY_TYPE.CHANNEL_ALERTS_MSGS ? W : U;
  const le = oe / 4;
  const ie = () => {
    var e;
    ee.current = 0;
    ae(false);
    if (!((e = $.current) === null || e === undefined)) {
      e.pauseAndReset();
    }
  };
  const ue = () => {
    const e = $.current;
    if (e) {
      if (ee.current <= 0) {
        ie();
      } else {
        ee.current -= 1;
        if (!ne) {
          ae(true);
        }
        e.play();
      }
    }
  };
  const se = e => {
    var t;
    if (!a) {
      return null;
    }
    const n = a(e);
    if (n) {
      if ((t = n.getImgNode) === null || t === undefined) {
        return undefined;
      } else {
        return t.call(n);
      }
    } else {
      return null;
    }
  };
  const ce = e => {
    var t;
    var n;
    var a;
    const o = $.current;
    if (Z.mediaStage !== m.MEDIA_DATA_STAGE.RESOLVED) {
      return;
    }
    if (!o) {
      return;
    }
    if (e) {
      e.stopPropagation();
    }
    if (te.current == null || te.current === 0) {
      const e = o.getDuration();
      if (e != null) {
        te.current = e;
      } else if (Z.duration && Z.duration !== "0") {
        te.current = parseInt(Z.duration, 10);
      }
    }
    const l = (t = (0, r.getABPropConfigValue)("gif_min_play_loops")) !== null && t !== undefined ? t : 1;
    const i = (n = (0, r.getABPropConfigValue)("gif_max_play_loops")) !== null && n !== undefined ? n : 3;
    const u = (a = (0, r.getABPropConfigValue)("gif_max_play_duration")) !== null && a !== undefined ? a : 5;
    if (te.current != null && te.current !== 0) {
      const e = Math.ceil(u / te.current);
      ee.current = Math.max(Math.min(e, i), l);
    } else {
      ee.current = l;
    }
    ue();
  };
  const de = () => !ne && ee.current !== 1 / 0;
  const fe = e => {
    if (e) {
      e.stopPropagation();
    }
    u.Cmd.mediaViewerModal({
      msg: (0, A.unproxy)(n.unsafe()),
      getZoomNode: se
    });
  };
  let pe;
  if (!(e.displayType === s.DISPLAY_TYPE.EDITING && e.displayType === s.DISPLAY_TYPE.NEWSLETTER_PREVIEW)) {
    pe = e => {
      switch (J.mediaStage) {
        case m.MEDIA_DATA_STAGE.RESOLVED:
          if (de()) {
            ce(e);
          } else {
            fe(e);
          }
          break;
        case m.MEDIA_DATA_STAGE.INIT:
          fe(e);
          break;
        case m.MEDIA_DATA_STAGE.FETCHING:
          n.cancelDownload();
          break;
        case m.MEDIA_DATA_STAGE.NEED_POKE:
          n.forceDownloadMediaEvenIfExpensive();
          break;
        case m.MEDIA_DATA_STAGE.UPLOADING:
          n.cancelUpload();
          break;
        case m.MEDIA_DATA_STAGE.NEED_UPLOAD:
          n.resumeUpload();
          break;
        case m.MEDIA_DATA_STAGE.REMOTE_NEED_UPLOAD:
          n.resumeRemoteUpload();
          break;
        case m.MEDIA_DATA_STAGE.ERROR_MISSING:
          M.ModalManager.open(R.default.createElement(f.default, {
            msg: n.unsafe()
          }));
      }
    };
  }
  const me = e => {
    e.stopPropagation();
    e.preventDefault();
    pe(e);
  };
  const he = () => {
    var e;
    if ((e = $.current) === null || e === undefined) {
      return undefined;
    } else {
      return e.underlyingVideo();
    }
  };
  const ge = () => ee.current;
  (0, R.useImperativeHandle)(t, () => ({
    getImgNode: he,
    handleKeyActivation: me,
    pause: ie,
    getPlayCount: ge
  }));
  const [Ee, {
    isIntersecting: ve
  }] = (0, N.default)({
    root: null,
    threshold: 0.99
  });
  (0, B.useSendViewCount)(n.id, {
    mediaData: Z,
    isIntersecting: ve,
    displayType: e.displayType
  });
  (0, R.useEffect)(() => {
    self.setTimeout(() => {
      if (!re.aborted) {
        if (J.mediaStage === m.MEDIA_DATA_STAGE.RESOLVED && ve) {
          ce();
        }
      }
    }, 100);
  }, [J.mediaStage, ve]);
  const _e = J.preview instanceof p.default ? J.preview.url() : undefined;
  let ye = null;
  let Ce = (() => {
    const t = J.aspectRatio || J.fullWidth / J.fullHeight;
    if (!t) {
      return {
        bubbleWidth: oe,
        bubbleHeight: "100%",
        contentWidth: oe,
        contentHeight: "100%"
      };
    }
    let n;
    let a;
    if (t <= 1 / 4) {
      a = oe;
      n = le * 1.2;
    } else if (t < 1) {
      a = oe;
      n = oe * t;
    } else if (t < 4) {
      n = oe;
      a = oe / t;
    } else {
      n = oe;
      a = le;
    }
    if (!(e.displayType !== s.DISPLAY_TYPE.NEWSLETTER && e.displayType !== s.DISPLAY_TYPE.ANNOUNCEMENT)) {
      n = oe;
      a = le;
    }
    let r = J.renderableUrl && J.fullWidth || n;
    let o = J.renderableUrl && J.fullHeight || a;
    if (r / o > n / a) {
      r = r * a / o;
      o = a;
    } else {
      o = o * n / r;
      r = n;
    }
    if (o > oe) {
      o = oe;
    }
    return {
      bubbleWidth: n,
      bubbleHeight: a,
      contentWidth: r,
      contentHeight: o
    };
  })();
  if (e.maxWidth != null && e.maxWidth < Ce.bubbleWidth) {
    Ce = (t => {
      if (e.displayType === s.DISPLAY_TYPE.NEWSLETTER_PREVIEW) {
        return {
          bubbleWidth: t,
          bubbleHeight: t,
          contentWidth: t,
          contentHeight: t
        };
      }
      const n = J.aspectRatio || J.fullWidth / J.fullHeight;
      let a;
      let r;
      const o = le * 1.2;
      if (n >= 1) {
        if (t < oe) {
          a = t;
          r = a / n;
          if (r < le) {
            r = le;
          }
        } else {
          a = oe;
          r = a / n;
          if (r < le) {
            r = le;
          }
        }
      } else {
        r = oe;
        a = r * n;
        if (a < o) {
          a = o;
        }
        if (t < oe && a > t) {
          a = t;
        }
      }
      let l = a;
      let i = r;
      if (l / i > a / r) {
        l = l * r / i;
        i = r;
      } else {
        i = i * a / l;
        l = a;
      }
      return {
        bubbleWidth: a,
        bubbleHeight: r,
        contentWidth: l,
        contentHeight: i
      };
    })(e.maxWidth);
  }
  const {
    bubbleWidth: be,
    contentWidth: Me,
    contentHeight: Se
  } = Ce;
  if (J.mediaStage === m.MEDIA_DATA_STAGE.RESOLVED) {
    const e = J.aspectRatio >= 1 ? {
      width: "auto",
      height: Se
    } : {
      width: Me,
      height: "auto"
    };
    ye = R.default.createElement("div", {
      className: _.default.thumbVideo
    }, R.default.createElement(D.default, {
      ref: $,
      src: J.renderableUrl,
      style: e,
      onEnded: ue,
      muted: true
    }, I.fbt._("Your browser doesn't support video playback.", null, {
      hk: "2nHZKq"
    })));
  }
  const Te = _e ? R.default.createElement("div", {
    className: _.default.thumbImage,
    style: {
      backgroundImage: `url(${_e})`
    }
  }) : null;
  let we = V ? R.default.createElement("div", {
    className: _.default.caption,
    style: {
      maxWidth: s.DISPLAY_TYPE.CHANNEL_ALERTS_MSGS ? "100%" : be
    }
  }, R.default.createElement(E.default, {
    msg: n.unsafe(),
    trusted: e.trusted
  })) : null;
  let Ae = we ? null : R.default.createElement(b.default, null);
  const Pe = (0, T.showForwarded)(n);
  const Oe = (0, s.isWideDisplay)(e.displayType);
  const ke = (0, l.classnamesConvertMeToStylexPlease)({
    [_.default.hasCaption]: V,
    [_.default.hasAuthor]: e.displayAuthor,
    [_.default.forwarded]: Pe,
    [_.default.isPSA]: Y,
    [_.default.isGallery]: e.displayType === s.DISPLAY_TYPE.STARRED_MSGS || e.displayType === s.DISPLAY_TYPE.GALLERY,
    [_.default.isInfo]: e.displayType === s.DISPLAY_TYPE.MSG_INFO,
    [_.default.isAnnouncement]: Oe,
    [_.default.bubble]: true,
    [_.default.bubbleChannelAlerts]: e.displayType === s.DISPLAY_TYPE.CHANNEL_ALERTS_MSGS
  });
  const De = e.displayAuthor ? R.default.createElement("div", {
    className: (0, l.classnamesConvertMeToStylexPlease)({
      [_.default.author]: true,
      [_.default.authorAnnouncement]: e.displayType === s.DISPLAY_TYPE.ANNOUNCEMENT || e.displayType === s.DISPLAY_TYPE.NEWSLETTER
    })
  }, R.default.createElement(h.default, {
    msg: n,
    contact: X,
    displayType: e.displayType
  })) : null;
  const Ie = Pe ? R.default.createElement(v.default, {
    msg: n.unsafe(),
    className: _.default.forwardedIndicator
  }) : null;
  let Re;
  switch (Q) {
    case w.Message$VideoMessage$Attribution.GIPHY:
      Re = R.default.createElement("div", {
        className: _.default.vendor
      }, R.default.createElement(d.GiphyIcon, null));
      break;
    case w.Message$VideoMessage$Attribution.TENOR:
      Re = R.default.createElement("div", {
        className: _.default.vendor
      }, R.default.createElement(k.TenorIcon, null));
      break;
    default:
      Re = null;
  }
  const Ne = e.quotedMsg ? R.default.createElement("div", {
    className: (0, l.classnamesConvertMeToStylexPlease)({
      [_.default.quote]: true,
      [_.default.quoteAnnouncement]: e.displayType === s.DISPLAY_TYPE.ANNOUNCEMENT || e.displayType === s.DISPLAY_TYPE.NEWSLETTER
    })
  }, e.quotedMsg) : null;
  const xe = e.hideMeta === true ? null : R.default.createElement("div", {
    className: _.default.meta
  }, R.default.createElement(C.Meta, {
    msg: n,
    displayType: e.displayType
  }));
  let Le = R.default.createElement(y.default, {
    mediaStage: J.mediaStage,
    mediaDataFileSize: J.size,
    isFailed: q,
    shouldPlay: de(),
    onClick: pe
  });
  const je = {
    width: Me,
    height: Se
  };
  var Be;
  if (e.displayType === s.DISPLAY_TYPE.NEWSLETTER_PREVIEW) {
    ye = null;
    we = null;
    Ae = null;
    Re = null;
    Le = null;
    je.minHeight = (Be = e.maxWidth) !== null && Be !== undefined ? Be : 56;
  }
  const Fe = (0, l.classnamesConvertMeToStylexPlease)({
    [_.default.thumb]: true,
    [_.default.thumbChannelAlerts]: e.displayType === s.DISPLAY_TYPE.CHANNEL_ALERTS_MSGS
  });
  const Ge = R.default.createElement(R.default.Fragment, null, De, Ie, Ne, R.default.createElement(o.default, {
    msg: n.unsafe(),
    wrapperClass: _.default.ctwaContext
  }), R.default.createElement(i.Clickable, {
    ref: Ee,
    dataTestId: "image-thumb-gif",
    className: Fe,
    onClick: pe,
    inlineStyle: je
  }, Le, Te, ye, Ae, Re), we, xe);
  if (we) {
    return R.default.createElement(g.default, {
      contact: X,
      msg: n.unsafe(),
      className: ke,
      onClick: P.stopPropagation,
      style: {
        width: s.DISPLAY_TYPE.CHANNEL_ALERTS_MSGS ? "100%" : be
      }
    }, Ge);
  } else {
    return R.default.createElement("div", {
      className: ke,
      onClick: P.stopPropagation,
      style: {
        width: s.DISPLAY_TYPE.CHANNEL_ALERTS_MSGS ? "100%" : be + H * 2
      }
    }, Ge);
  }
}
const q = (0, R.forwardRef)(V);
exports.WrappedGif = q;
q.displayName = "WrappedGif";