var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PiPManager = undefined;
var r = a(require("../vendor/81109.js"));
var o = require("../app/780549.js");
var l = a(require("./600612.js"));
var i = a(require("./156779.js"));
var u = require("../app/163755.js");
var s = require("./795820.js");
var c = require("../app/61113.js");
var d = require("../app/373070.js");
var f = a(require("./942492.js"));
var p = require("../app/728.js");
var m = a(require("./389287.js"));
var h = require("./907119.js");
var g = require("../app/625786.js");
var E = require("../app/390737.js");
var v = a(require("../app/844453.js"));
var _ = require("./58558.js");
var y = require("../app/885313.js");
var C = a(require("./621134.js"));
var b = require("../vendor/548360.js");
var M = function (e, t) {
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
}(require("../vendor/667294.js"));
var S = a(require("../app/156720.js"));
var T = require("../app/808446.js");
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
  msg: null,
  startTime: null,
  zoomRect: null,
  videoMetadata: null,
  videoRef: null,
  isVideoPlaying: false,
  videoType: p.PiPVideoType.MSG,
  previewUrl: null,
  videoSrc: null,
  counterAbuseData: null
};
const P = {
  position: "snyj76hw",
  zIndex: "an6tjemt",
  width: "jbm6vef4",
  height: "bbl9m3t3",
  overflowX: "ora14ekb",
  overflowY: "nv3qcefw"
};
const O = new Map();
function k(e) {
  const t = function (e) {
    if (e === p.PiPVideoType.YOUTUBE) {
      return _.INLINE_VIDEO_TYPE.YOUTUBE;
    }
    return null;
  }(e);
  if (t == null) {
    return null;
  } else {
    return new s.InlineVideoPlaybackClosedWamEvent({
      inlineVideoPlayed: false,
      inlineVideoType: t
    });
  }
}
function D(e, t) {
  var n;
  const a = (0, M.useRef)(null);
  const [l, i] = (0, M.useState)(A.msg);
  const [s, _] = (0, M.useState)(A.startTime);
  const [C, w] = (0, M.useState)(A.zoomRect);
  const [D, I] = (0, M.useState)(A.videoMetadata);
  const [R, N] = (0, M.useState)(A.videoRef);
  const [x, L] = (0, M.useState)(A.isVideoPlaying);
  const [j, B] = (0, M.useState)(A.videoType);
  const [F, G] = (0, M.useState)(A.previewUrl);
  const [U, W] = (0, M.useState)(A.videoSrc);
  const [H, V] = (0, M.useState)(null);
  const [q, Y] = (0, M.useState)(A.counterAbuseData);
  (0, M.useEffect)(() => {
    const e = () => {
      var t;
      if (!((t = a.current) === null || t === undefined)) {
        t.commit();
      }
      window.removeEventListener("unload", e);
    };
    window.addEventListener("unload", e);
    return e;
  }, []);
  const z = e => {
    V(() => e);
  };
  const K = (e, t) => {
    const n = a.current;
    if (n != null) {
      if ((e == null ? undefined : e.duration) != null) {
        n.inlineVideoDurationT = Math.floor(e == null ? undefined : e.duration);
      }
      if (!n.inlineVideoPlayed && t) {
        n.markInlineVideoPlayStartT();
        n.inlineVideoPlayed = t;
      }
    }
    I(e);
    L(t);
  };
  const Q = () => {
    var e;
    if (l) {
      m.default.didClose(l);
    }
    if (!((e = a.current) === null || e === undefined)) {
      e.commit();
    }
    i(A.msg);
    _(A.startTime);
    w(A.zoomRect);
    I(A.videoMetadata);
    N(A.videoRef);
    L(A.isVideoPlaying);
    B(A.videoType);
    G(A.previewUrl);
    W(A.videoSrc);
    Y(A.counterAbuseData);
  };
  const X = e => {
    if (e.id.equals(l == null ? undefined : l.id)) {
      Q();
    }
  };
  (0, M.useEffect)(() => () => {
    if (l) {
      m.default.didClose(l);
    }
  }, [l]);
  const Z = () => {
    if (!(R == null)) {
      R.pause();
    }
  };
  const J = () => {
    if (l) {
      m.default.didError(l);
    }
  };
  (0, T.useListener)(o.Cmd, ["media_viewer_modal"], () => {
    Z();
  });
  (0, T.useListener)(c.MsgCollection, ["remove"], e => {
    X(e);
  });
  const $ = l != null ? (0, u.getChat)(l) : null;
  (0, T.useListener)((n = $ == null ? undefined : $.msgs) !== null && n !== undefined ? n : c.MsgCollection, "remove_msgs", e => {
    e.forEach(X);
  });
  (0, T.useListener)(c.MsgCollection, ["change:type"], e => {
    if (e.type === d.MSG_TYPE.REVOKED) {
      if (!e.isSentByMe && (l == null ? undefined : l.id.equals(e.id))) {
        E.ToastManager.open(M.default.createElement(g.Toast, {
          msg: b.fbt._("Currently playing video was revoked.", null, {
            hk: "2Dumwc"
          })
        }));
      }
      X(e);
    }
  });
  const ee = {
    isOpened: e => {
      var t;
      return (t = l == null ? undefined : l.id.equals(e.id)) !== null && t !== undefined && t;
    },
    pausePiP: Z,
    openPiP: (e, t) => {
      var n;
      var r;
      m.default.didOpen(t.msg);
      if (!((n = a.current) === null || n === undefined)) {
        n.commit();
      }
      a.current = k(e);
      if (!((r = a.current) === null || r === undefined)) {
        r.startInlineVideoPlayStartT();
      }
      if (e === p.PiPVideoType.MSG) {
        t.msg.downloadMedia({
          downloadEvenIfExpensive: true,
          rmrReason: y.WEBC_RMR_REASON_CODE.PIP,
          isUserInitiated: true
        });
      }
      i(t.msg);
      _(t.startTime);
      w(t.zoomRect);
      I(A.videoMetadata);
      N(A.videoRef);
      L(A.isVideoPlaying);
      B(e);
      G(t.preview != null ? `data:image/jpeg;base64,${t.preview}` : null);
      W(t.videoSrc);
      Y(t.counterAbuseData);
    },
    closePiP: Q
  };
  (0, M.useImperativeHandle)(t, () => ee);
  (0, M.useEffect)(() => {
    m.default.register(ee);
    return () => {
      m.default.unregister();
    };
  }, []);
  const te = O.get(j);
  return M.default.createElement(v.default, {
    transitionName: "pip",
    className: (0, S.default)(P),
    component: "div"
  }, te != null ? M.default.createElement(te, (0, r.default)((0, r.default)({
    msg: l,
    startTime: s,
    zoomRect: C,
    videoMetadata: D,
    videoRef: R,
    isVideoPlaying: x,
    videoType: j,
    previewUrl: F,
    videoSrc: U,
    counterAbuseData: q
  }, {
    enableDragBar: true,
    bottomContent: D != null && R != null ? M.default.createElement(h.VideoRefControls, {
      refVideo: R,
      videoMetadata: D,
      isFullscreenMode: false,
      isVideoPlaying: x,
      newPiPStyle: true,
      onFullscreenToggle: H != null ? H : undefined
    }) : null,
    topContent: M.default.createElement(f.default, {
      isFullscreenMode: false,
      onClick: Q
    })
  }), {}, {
    animationStartStyle: C ? {
      height: C.bottom - C.top,
      width: C.right - C.left,
      left: C.left,
      bottom: window.innerHeight - C.bottom
    } : null,
    onClose: Q,
    onError: J,
    autoPlay: true,
    onRefSet: N,
    onVideoMetadataChange: K,
    onSetFullscreenToggleCallback: z
  })) : null);
}
O.set(p.PiPVideoType.MSG, l.default);
O.set(p.PiPVideoType.YOUTUBE, C.default);
O.set(p.PiPVideoType.OG, i.default);
const I = (0, M.forwardRef)(D);
exports.PiPManager = I;
I.displayName = "PiPManager";