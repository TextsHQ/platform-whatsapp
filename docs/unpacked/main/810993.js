var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    onSetFullscreenToggleCallback: t,
    onRefSet: n,
    onVideoEnded: a,
    onError: d,
    startTime: b,
    onVideoMetadataChange: M,
    onClose: S
  } = e;
  const T = (0, g.useRef)(null);
  const D = (0, g.useRef)(null);
  const I = (0, g.useRef)(null);
  const R = (0, g.useRef)(true);
  const N = (0, g.useRef)(null);
  const [x, L] = (0, g.useState)(undefined);
  const [j, B] = (0, g.useState)(false);
  const [F, G] = (0, g.useState)(false);
  const [U, W] = (0, g.useState)(false);
  const [H, V] = (0, g.useState)(false);
  const [q, Y] = (0, g.useState)(false);
  const z = (0, y.default)(j);
  const K = (0, y.default)(x);
  (0, _.useListener)(l.default, "fullscreen_change", () => {
    if (l.default.isFullscreenMode() && l.default.getFullscreenElement() === T.current) {
      V(true);
    } else if (!l.default.isFullscreenMode()) {
      V(false);
    }
  });
  const Q = e => {
    e.stopPropagation();
    if (H) {
      l.default.exitFullscreen();
    } else {
      l.default.requestFullscreen(T.current);
    }
  };
  const X = (0, v.default)(() => {
    W(false);
  }, c.FULLSCREEN_CONTROLS_DISPLAY_TIMEOUT);
  (0, g.useEffect)(() => {
    if (!(t == null)) {
      t(Q);
    }
  }, []);
  const Z = (0, C.default)(e => {
    D.current = e;
    if (e != null) {
      if (!(n == null)) {
        n(e);
      }
    }
  });
  (0, g.useEffect)(() => {
    if (!(z === j && (0, o.default)(K, x) || M == null)) {
      M(x, j);
    }
  }, [j, z, M, x, K]);
  const J = e.exposeIframeInPiP || q || H ? null : g.default.createElement("div", {
    className: (0, E.default)(w)
  });
  const $ = g.default.createElement("div", {
    className: (0, E.default)(A),
    style: {
      [f.default.fullscreen]: H
    }
  }, J, g.default.createElement(p.default, {
    ref: Z,
    youtubeVideoId: e.youtubeVideoId,
    startTime: e.startTime,
    onEnded: () => {
      if (a) {
        a();
      }
      B(false);
    },
    onError: () => {
      if (d) {
        d();
      }
    },
    onLoadedMetadata: e => {
      const t = b != null ? b : 0;
      L({
        duration: e.duration,
        currentTime: t,
        volume: e.volume,
        muted: e.muted,
        bufferedTime: 0
      });
    },
    onPause: () => {
      var e;
      var t;
      const n = (e = (t = D.current) === null || t === undefined ? undefined : t.getCurrentTime()) !== null && e !== undefined ? e : null;
      L(e => e && n != null ? (0, r.default)((0, r.default)({}, e), {}, {
        currentTime: n
      }) : e);
      B(false);
      I.current = true;
    },
    onPlaying: () => {
      var e;
      var t;
      const n = (e = (t = D.current) === null || t === undefined ? undefined : t.getCurrentTime()) !== null && e !== undefined ? e : null;
      L(e => e && n != null ? (0, r.default)((0, r.default)({}, e), {}, {
        currentTime: n
      }) : e);
      B(true);
      I.current = true;
    },
    onProgress: e => {
      const t = e[0][1];
      L(e => e ? (0, r.default)((0, r.default)({}, e), {}, {
        bufferedTime: t
      }) : e);
    },
    onTimeUpdate: e => {
      if (I.current) {
        I.current = false;
      } else {
        L(t => t ? (0, r.default)((0, r.default)({}, t), {}, {
          currentTime: e
        }) : t);
      }
    },
    onVolumeChange: e => {
      L(t => t ? (0, r.default)((0, r.default)({}, t), {}, {
        volume: e.volume,
        muted: e.muted
      }) : t);
    },
    autoPlay: e.autoPlay,
    counterAbuseData: e.counterAbuseData
  }));
  const ee = !e.disablePiPControls || H ? g.default.createElement(k, {
    videoMetadata: x,
    newStyleActive: R.current,
    videoRef: D,
    mouseDownCoorRef: N,
    mouseMoveRecently: U,
    isVideoPlaying: j,
    isFullscreenMode: H,
    onFullScreenToggle: Q,
    onClose: S,
    onExposeIframeInPiP: Y
  }) : null;
  let te;
  if (!m.UA.isSafari) {
    te = g.default.createElement(u.default, {
      isFullscreenMode: H,
      onClick: Q
    });
  }
  const ne = g.default.createElement(s.default, {
    theme: "full-rounded"
  });
  const ae = H ? g.default.createElement(g.default.Fragment, null, $, ee, R.current ? null : g.default.createElement("div", {
    className: (0, E.default)(P),
    style: {
      [f.default.dimmed]: !U
    }
  }, te, g.default.createElement(i.default, {
    isFullscreenMode: H,
    onClick: t => {
      t.stopPropagation();
      e.onClose();
    }
  }))) : g.default.createElement(g.default.Fragment, null, $, g.default.createElement(h.default, {
    transitionName: "fade-fast"
  }, F && U && !q && !e.disablePiPControls ? [ne, ee, te, g.default.createElement(i.default, {
    key: "close",
    isFullscreenMode: H,
    onClick: t => {
      t.stopPropagation();
      e.onClose();
    }
  })] : null));
  return g.default.createElement("div", {
    ref: T,
    key: "elementsWrapped",
    className: (0, E.default)(O),
    styles: {
      [f.default.fullscreen]: H,
      [f.default.redesign]: R.current
    },
    onMouseEnter: () => {
      if (q) {
        if (m.UA.isGecko && F) {
          return;
        }
        Y(false);
      }
      G(true);
    },
    onMouseLeave: () => {
      G(false);
    },
    onMouseDown: e => {
      if (H) {
        e.stopPropagation();
      }
    },
    onMouseMove: () => {
      if (!F) {
        G(true);
      }
      if (!U) {
        W(true);
      }
      X();
    }
  }, ae);
};
var r = a(require("../vendor/81109.js"));
var o = a(require("../vendor/618446.js"));
var l = a(require("./342812.js"));
var i = a(require("./942492.js"));
var u = a(require("./733378.js"));
var s = a(require("./35171.js"));
var c = require("./618564.js");
var d = require("./907119.js");
var f = a(require("./914630.js"));
var p = a(require("./334834.js"));
var m = require("../app/368170.js");
var h = a(require("../app/844453.js"));
var g = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = b(t);
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
var E = a(require("../app/156720.js"));
var v = a(require("../app/710629.js"));
var _ = require("../app/808446.js");
var y = a(require("../app/49710.js"));
var C = a(require("../app/17533.js"));
function b(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (b = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const M = {
  bottom: "jxacihee",
  display: "p357zi0d",
  height: "b82nm36r",
  start: "m7kgcvyw",
  paddingTop: "i5tg98hk",
  paddingEnd: "bcymb0na",
  paddingBottom: "przvwfww",
  paddingStart: "e8k79tju",
  position: "lhggkp7q",
  end: "ebjesfe0"
};
const S = {
  opacity: "bs7a17vp",
  transitionDuration: "hswow7x1",
  transitionProperty: "cr6d9hz6",
  transitionTimingFunction: "pu4k07i0"
};
const T = {
  height: "ppled2lx",
  position: "lhggkp7q",
  width: "ln8gz9je"
};
const w = {
  borderTop: "h82jhl79",
  borderEnd: "qv8mjgpu",
  borderBottom: "rhlnfygg",
  borderStart: "jj3p8fxw",
  height: "ppled2lx",
  start: "tkdu00h0",
  position: "lhggkp7q",
  top: "qq0sjtgm",
  width: "ln8gz9je"
};
const A = {
  position: "lhggkp7q",
  top: "qq0sjtgm",
  end: "ebjesfe0",
  bottom: "jxacihee",
  start: "tkdu00h0"
};
const P = {
  height: "bsih0in0",
  start: "tkdu00h0",
  position: "lhggkp7q",
  top: "qq0sjtgm",
  width: "ln8gz9je"
};
const O = {
  background: "e3l9pkzr",
  height: "ppled2lx",
  width: "ln8gz9je"
};
const k = (0, g.forwardRef)((e, t) => {
  let {
    videoMetadata: n,
    newStyleActive: a,
    videoRef: r,
    mouseMoveRecently: o,
    isVideoPlaying: l,
    isFullscreenMode: i,
    onFullScreenToggle: u,
    onClose: s,
    onExposeIframeInPiP: c,
    mouseDownCoorRef: p
  } = e;
  const m = e => {
    if (r.current) {
      let t = e;
      if (n && e >= n.duration - 1 && n.duration > 1) {
        t = n.duration - 1;
      }
      r.current.setCurrentTime(t);
    }
  };
  let h = null;
  if (n) {
    const e = (0, E.default)(M, S);
    h = g.default.createElement("div", {
      ref: t,
      style: {
        [f.default.dimmed]: !o
      }
    }, g.default.createElement(d.VideoRefControls, {
      refVideo: r.current,
      videoMetadata: n,
      isFullscreenMode: i,
      isVideoPlaying: l,
      handleSetCurrentTimeByControls: m,
      controlsClassName: i ? e : undefined,
      onFullscreenToggle: a ? u : undefined,
      onClose: a ? s : undefined,
      newPiPStyle: a
    }));
    if (!i) {
      h = g.default.createElement("div", {
        ref: t,
        className: (0, E.default)(T),
        onMouseDown: e => {
          p.current = {
            x: e.clientX,
            y: e.clientY
          };
        },
        onMouseUp: e => {
          const t = e.clientX;
          const n = e.clientY;
          const a = p.current;
          const r = a ? a.x : undefined;
          const o = a ? a.y : undefined;
          if (r != null && o != null && Math.abs(t - r) + Math.abs(n - o) < 4) {
            c(true);
          }
        }
      }, h);
    }
  }
  return h;
});
k.displayName = "VideoControls";