var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PtvMessageComponent = function (e) {
  let {
    msg: t,
    quotedMsg: n,
    mediaData: a,
    displayAuthor: p,
    displayType: w,
    position: N
  } = e;
  const H = (0, S.getPtvMaxDurationSeconds)();
  const [V, K] = (0, I.useState)(null);
  const Q = (0, I.useRef)(null);
  const [X, Z, J, $] = (0, U.useMsgValues)(t.id, [_.getId, _.getIsSentByMe, d.getSenderObj, _.getHasReaction]);
  const ee = (0, d.getChat)(t.unsafe());
  const te = (0, F.useModelValues)(a, ["mediaStage", "renderableUrl", "size", "preview", "fullPreviewData"]);
  const ne = (0, L.default)(V, "timeupdate", () => V ? V.currentTime : 0);
  const ae = V ? Math.min((0, b.getDurationFromMediaOrProtobuf)(V, a), H) : null;
  (0, G.useMsgDownloadMedia)(t);
  (0, I.useEffect)(() => {
    if ((0, v.isHighQualityVideoThumbnailsEnabled)()) {
      (0, s.downloadVideoThumbnail)({
        msg: (0, A.unproxy)(t),
        chat: ee
      });
    }
  }, [t, ee]);
  const [re, oe] = (0, I.useState)(false);
  const le = (0, W.default)(re);
  const ie = (0, I.useRef)(null);
  const [ue, se] = (0, I.useState)(false);
  (0, B.useListener)(document.body, ["click"], e => {
    if (!e.defaultPrevented && re && ie.current && !ie.current.contains(e.target)) {
      oe(false);
    }
  });
  const ce = (0, I.useCallback)(() => {
    if (V) {
      if (re) {
        if (V.paused) {
          V.play().catch(() => {});
        } else {
          V.pause();
        }
      } else {
        oe(true);
      }
    }
  }, [V, re]);
  const de = (0, I.useCallback)(e => {
    if (!(e.button !== 0 || re)) {
      se(true);
    }
  }, [re, se]);
  (0, B.useListener)(ue ? document.body : null, "mouseup", () => {
    se(false);
  });
  (0, B.useListener)(i.Cmd, "sequential_ptv_playback", e => {
    if (V && t.id.equals(e)) {
      oe(true);
    }
  });
  const fe = (0, I.useRef)(0);
  const pe = () => {
    if (!re) {
      fe.current += 1;
      return void (fe.current >= (0, S.getPtvAutoplayLoopLimit)() && (V == null || V.pause()));
    }
    oe(false);
    const e = (0, C.findSequentialPtv)(t);
    if (e) {
      i.Cmd.playNextPtv(e.id);
    }
  };
  (0, B.useListener)(V, "timeupdate", () => {
    if (V && V.currentTime >= H) {
      V.currentTime = 0;
      pe();
    }
  });
  const [me, {
    isIntersecting: he
  }] = (0, j.default)({
    root: null,
    threshold: 0
  });
  const ge = (0, W.default)(he);
  if (!(he || ge !== true)) {
    self.setTimeout(() => {
      if (!(V == null)) {
        V.pause();
      }
    }, 100);
    fe.current = 0;
  }
  if (he && ge === false) {
    self.setTimeout(() => {
      if (!re) {
        if ((0, S.isPtvAutoplayEnabled)()) {
          if (!(V == null)) {
            V.play().catch(() => {});
          }
        }
      }
    }, 100);
  }
  if (re && le === false) {
    if (V) {
      V.currentTime = 0;
      V.play().catch(() => {});
      if ((0, f.canMarkPlayed)(t.unsafe())) {
        (0, f.markPlayed)(t.unsafe());
      }
    }
    fe.current = 0;
  }
  (0, I.useEffect)(() => {
    const e = window.setTimeout(() => {
      var e;
      if (re && le === false) {
        if (!((e = ie.current) === null || e === undefined)) {
          e.scrollIntoView({
            behavior: "smooth"
          });
        }
      }
    }, 300);
    return () => {
      window.clearTimeout(e);
    };
  }, [re, le]);
  const Ee = (0, L.default)(V, ["playing", "pause"], () => !V || !V.paused);
  const ve = (0, x.useDebouncedChanges)({
    value: Ee,
    debounceMs: 100,
    shouldDebounce: !Ee
  });
  const _e = ue && !re;
  return I.default.createElement("div", {
    ref: ie
  }, p && I.default.createElement("div", {
    ref: Q,
    className: (0, R.default)(q.borderRadius, q.boxShadow, P.uiPadding.top4, P.uiPadding.start9, P.uiPadding.end8, P.uiPadding.bottom3, !(0, u.isWideDisplay)(w) && q.fitContent, Z ? q.authorIsMe : q.authorIsNotMe, (N === E.MsgPosition.FRONT || N === E.MsgPosition.SINGLE) && q.isFirst)
  }, I.default.createElement(h.default, {
    msg: t,
    contact: J,
    displayType: w
  })), n && I.default.createElement("div", {
    className: (0, R.default)(q.quotedMsgContainer, Z ? q.quotedMsgContainerSender : q.quotedMsgContainerReceiver, P.uiMargin.top12, P.uiPadding.all4)
  }, n), I.default.createElement(c.FlexRow, {
    ref: me,
    justify: (0, u.isWideDisplay)(w) ? "center" : "start",
    className: (0, R.default)(q.ptvOuterContainer, _e && q.depressed)
  }, I.default.createElement(c.FlexRow, {
    justify: "center",
    align: "center",
    className: (0, R.default)(q.ptvContainer, q.animateDimensions, P.uiMargin.top12, P.uiMargin.bottom4, re && w === "MSG_INFO" && q.activePtvContainerInMsgInfo, re && w !== "MSG_INFO" && q.activePtvContainer)
  }, I.default.createElement("div", {
    className: (0, R.default)(q.progressContainer, q.animateDimensions)
  }, I.default.createElement(z, {
    isActive: re,
    video: V,
    duration: ae,
    isSentByMe: Z,
    displayType: w
  })), I.default.createElement(O.default, {
    className: (0, R.default)(q.videoContainer, q.animateDimensions, re && w === "MSG_INFO" && q.activeVideoContainerInMsgInfo, re && w !== "MSG_INFO" && q.activeVideoContainer),
    onMouseDown: re ? undefined : de,
    onClick: ce
  }, I.default.createElement(Y, {
    mediaData: a
  }), I.default.createElement(M.PtvState, {
    mediaDataFileSize: te.size,
    mediaStage: te.mediaStage,
    isPlaying: ve,
    onDownloadClick: () => {
      t.forceDownloadMediaEvenIfExpensive();
    }
  }), te.mediaStage === m.MEDIA_DATA_STAGE.RESOLVED && I.default.createElement(k.default, {
    ref: e => {
      K(e == null ? undefined : e.underlyingVideo);
    },
    src: te.renderableUrl,
    xstyle: [q.video, _e && q.depressedVideo],
    muted: !re,
    autoPlay: (0, S.isPtvAutoplayEnabled)(),
    loop: true,
    onAudioChannelRelease: () => {
      oe(false);
    },
    onLoop: pe
  }, D.fbt._("Your browser doesn't support video playback.", null, {
    hk: "Qwkrn"
  })), ae != null && I.default.createElement(I.default.Fragment, null, I.default.createElement("div", {
    className: (0, R.default)(q.blurContainer)
  }), I.default.createElement(c.FlexRow, {
    justify: "center",
    align: "center",
    className: (0, R.default)(q.videoTimestamp)
  }, I.default.createElement(y.MutedIcon, {
    width: 10,
    className: (0, R.default)(q.muteIcon, re || !ve ? [q.muteIconHidden, P.uiMargin.end0] : P.uiMargin.end4)
  }), I.default.createElement("span", null, l.Clock.durationStr(re ? ne : ae))))))), I.default.createElement(c.FlexColumn, null, I.default.createElement(g.MetaWrapper, {
    isSentByMe: Z,
    isTransparent: true
  }, I.default.createElement(g.Meta, {
    msg: t
  })), (w === u.DISPLAY_TYPE.CONVERSATION || w === u.DISPLAY_TYPE.ANNOUNCEMENT) && I.default.createElement("div", {
    className: (0, R.default)(P.uiMargin.startAuto)
  }, I.default.createElement(r.default, {
    isOutgoingMsg: Z,
    displayType: w,
    bubbleType: o.AddOnBubbleType.STICKER_LIKE_MSG
  }, I.default.createElement(T.ReactionBubbleContainer, {
    msgIds: [X.toString()],
    isOutgoingMsg: Z,
    displayType: w,
    reactionBubbleType: o.AddOnBubbleType.STICKER_LIKE_MSG,
    hasReaction: $
  })))));
};
var r = a(require("./190643.js"));
var o = require("./980518.js");
var l = require("../app/63014.js");
var i = require("../app/780549.js");
var u = require("../app/356097.js");
var s = require("../app/438393.js");
var c = require("../app/690495.js");
var d = require("../app/163755.js");
var f = require("./711735.js");
var p = a(require("../app/756680.js"));
var m = require("../app/172259.js");
var h = a(require("./599664.js"));
var g = require("./789955.js");
var E = require("./48794.js");
var v = require("../app/97858.js");
var _ = require("../app/787742.js");
var y = require("./273757.js");
var C = require("./504046.js");
var b = require("./606993.js");
var M = require("./414441.js");
var S = require("../app/989199.js");
var T = require("./541345.js");
var w = require("../app/956113.js");
var A = require("../app/163139.js");
var P = require("../app/676345.js");
var O = a(require("../app/625903.js"));
var k = a(require("./439114.js"));
var D = require("../vendor/548360.js");
var I = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = H(t);
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
var R = a(require("../app/156720.js"));
var N = a(require("./805956.js"));
var x = require("./572263.js");
var L = a(require("../app/524578.js"));
var j = a(require("./105170.js"));
var B = require("../app/808446.js");
var F = require("../app/655241.js");
var G = require("./476845.js");
var U = require("./871210.js");
var W = a(require("../app/49710.js"));
function H(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (H = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const V = require("./190177.js");
const q = {
  ptvOuterContainer: {
    transform: "b4xm8rjh",
    transitionDuration: "p4t1lx4y",
    transitionProperty: "bo8jc6qi"
  },
  depressed: {
    transform: "bpg350cc",
    transitionDuration: "svem9pzr"
  },
  ptvContainer: {
    width: "rsgnwp51",
    height: "npfedglf",
    borderTopStartRadius: "ig3kka7n",
    borderTopEndRadius: "a57u14ck",
    borderBottomEndRadius: "a4bg1r4i",
    borderBottomStartRadius: "h1a3x9ys",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    backgroundColor: "thr4l2wc"
  },
  activePtvContainer: {
    width: "pb2ndrxt",
    height: "i2rx9fq8"
  },
  activePtvContainerInMsgInfo: {
    width: "n6a0c2xm",
    height: "d6b4b4ov"
  },
  progressContainer: {
    position: "lhggkp7q"
  },
  videoContainer: {
    zIndex: "b9fczbqn",
    width: "hp5m5kpu",
    height: "m6k4hpz6",
    position: "g0rxnol2",
    borderTopStartRadius: "ig3kka7n",
    borderTopEndRadius: "a57u14ck",
    borderBottomEndRadius: "a4bg1r4i",
    borderBottomStartRadius: "h1a3x9ys",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex"
  },
  activeVideoContainer: {
    width: "lk9bdx0e",
    height: "q0qb61fa"
  },
  activeVideoContainerInMsgInfo: {
    width: "rtue7xhx",
    height: "hgcm32um"
  },
  animateDimensions: {
    transitionProperty: "gedjyihf",
    transitionTimingFunction: "db2m761w",
    transitionDuration: "p4t1lx4y"
  },
  video: {
    objectFit: "jpthtbts",
    zIndex: "b9fczbqn",
    position: "lhggkp7q",
    top: "qq0sjtgm",
    start: "tkdu00h0",
    transitionProperty: "jrqrk2k0",
    transitionDuration: "slppp3mo",
    transform: "b4xm8rjh"
  },
  depressedVideo: {
    filter: "nldrzz0a",
    transform: "bpg350cc"
  },
  borderRadius: {
    borderTopStartRadius: "rq6dtfpq",
    borderTopEndRadius: "aokg6g0y",
    borderBottomEndRadius: "nqm9sais",
    borderBottomStartRadius: "lrpjbpgm"
  },
  boxShadow: {
    boxShadow: "k6sbqduh"
  },
  authorIsMe: {
    backgroundColor: "bntscc16"
  },
  authorIsNotMe: {
    backgroundColor: "jht8oeb6"
  },
  isFirst: {
    borderTopStartRadius: "bi2mdrpt"
  },
  videoTimestamp: {
    position: "lhggkp7q",
    bottom: "cvsrm5e1",
    width: "ln8gz9je",
    color: "octy2vkd",
    fontSize: "dsh4tgtl",
    fontWeight: "wvgvrgjz",
    zIndex: "b9fczbqn"
  },
  blurContainer: {
    width: "ln8gz9je",
    height: "r0faiuyv",
    position: "lhggkp7q",
    bottom: "jxacihee",
    backgroundImage: "nxdan1kd",
    opacity: "j8zdwurm",
    zIndex: "b9fczbqn"
  },
  muteIcon: {
    transitionProperty: "ms34170e",
    transitionTimingFunction: "mks54fll",
    transitionDuration: "p4t1lx4y",
    width: "sazkszsz"
  },
  muteIconHidden: {
    opacity: "axi1ht8l",
    visibility: "kojwoqec",
    width: "jbm6vef4",
    transform: "fldfk6rh"
  },
  preview: {
    position: "lhggkp7q",
    top: "qq0sjtgm",
    start: "tkdu00h0",
    width: "ln8gz9je",
    height: "ppled2lx",
    backgroundPosition: "t3g6t33p",
    backgroundSize: "qnwaluaf",
    zIndex: "jnl3jror"
  },
  blurredPreview: {
    filter: "fsmudgz7"
  },
  fitContent: {
    width: "ltyqj8pj"
  },
  quotedMsgContainer: {
    width: "oj0qj1ob",
    borderTopStartRadius: "k6f31xd0",
    borderTopEndRadius: "i213mnjx",
    borderBottomEndRadius: "csyx12jj",
    borderBottomStartRadius: "aemtu0ky"
  },
  quotedMsgContainerSender: {
    backgroundColor: "bntscc16"
  },
  quotedMsgContainerReceiver: {
    backgroundColor: "jht8oeb6"
  }
};
function Y(e) {
  let {
    mediaData: t
  } = e;
  const n = (0, F.useModelValues)(t, ["preview", "fullPreviewData"]);
  let a;
  let r = true;
  if (n.fullPreviewData) {
    a = n.fullPreviewData instanceof p.default ? n.fullPreviewData.url() : n.fullPreviewData;
    r = false;
  } else {
    a = n.preview != null ? n.preview instanceof p.default ? n.preview.url() : n.preview : V;
  }
  return I.default.createElement("div", {
    className: (0, R.default)(q.preview, r && q.blurredPreview),
    style: {
      backgroundImage: `url(${a})`
    }
  });
}
function z(e) {
  var t;
  let {
    isActive: n,
    video: a,
    duration: r,
    isSentByMe: o,
    displayType: l
  } = e;
  const [i, u] = (0, I.useState)((t = a == null ? undefined : a.currentTime) !== null && t !== undefined ? t : 0);
  const s = (0, L.default)(a, ["playing", "pause"], () => !!a && !a.paused);
  const c = r == null ? 0 : i / r;
  (0, N.default)(() => {
    var e;
    if (i !== (a == null ? undefined : a.currentTime)) {
      u((e = a == null ? undefined : a.currentTime) !== null && e !== undefined ? e : 0);
    }
  }, {
    active: n && s
  });
  let d = 208;
  if (n) {
    d = l === "MSG_INFO" ? 308 : 328;
  }
  return I.default.createElement(w.Spinner, {
    size: d,
    value: n ? c : 0,
    max: 1,
    color: "highlight",
    progressContainerColor: o ? "outgoing" : "incoming",
    strokeLinecap: "butt",
    xstyle: q.animateDimensions
  });
}