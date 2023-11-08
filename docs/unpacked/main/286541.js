var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoControls = exports.THUMB_RADIUS_WINDOW = exports.THUMB_RADIUS_FULLSCREEN = undefined;
var r = a(require("../vendors-main/705558.js"));
var o = require("../app/396574.js");
var l = require("../app/63014.js");
var i = require("../app/753233.js");
var u = a(require("./942492.js"));
var s = require("../app/728.js");
var c = a(require("./968866.js"));
var d = a(require("./733378.js"));
var f = a(require("./528802.js"));
var p = require("./129572.js");
var m = require("./414493.js");
var h = require("../app/152189.js");
var g = a(require("../app/397778.js"));
var E = require("../app/368170.js");
var v = a(require("../app/79291.js"));
var _ = require("./967444.js");
var y = require("./28748.js");
var C = require("./655043.js");
var b = require("./789601.js");
var M = require("./466245.js");
var S = require("./182134.js");
var T = require("../vendor/548360.js");
var w = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = A(t);
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
function A(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (A = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const P = (0, h.getFloatFromStylesProp)(f.default, "-thumb-radius-window");
exports.THUMB_RADIUS_WINDOW = P;
const O = (0, h.getFloatFromStylesProp)(f.default, "-thumb-radius-fullscreen");
exports.THUMB_RADIUS_FULLSCREEN = O;
function k(e, t) {
  switch (true) {
    case t:
      return S.VideoVolumeMutedIcon;
    case e < 0.5:
      return C.VideoVolume1Icon;
    case e >= 1:
      return M.VideoVolumeIcon;
  }
  return b.VideoVolume2Icon;
}
function D(e) {
  let {
    mouseOverProgressRatio: t,
    duration: n
  } = e;
  if (t === undefined) {
    return w.default.createElement("div", {
      className: f.default.tooltipWrapper
    });
  }
  const a = l.Clock.durationStr(t * n);
  return w.default.createElement("div", {
    className: f.default.tooltipWrapper,
    style: {
      left: t * 100 + "%"
    }
  }, w.default.createElement("div", {
    className: (0, o.classnamesConvertMeToStylexPlease)(f.default.tooltipTextBoxGeneral, f.default.tooltipTextBoxPosAndSize)
  }, a));
}
function I(e) {
  let {
    progress: t,
    duration: n,
    bufferedTime: a,
    isFullscreenMode: l,
    isMouseOverProgressBar: i,
    mouseOverProgressRatio: u,
    onChange: s,
    onMouseDown: c,
    onMouseUp: d,
    onMouseEnter: p,
    onMouseLeave: h,
    onMouseOverProgressRatioChange: g
  } = e;
  let E = t / n;
  if (E > 1) {
    E = 1;
  }
  const v = E * 100 + "%";
  let _ = a / n;
  if (_ > 1) {
    _ = 1;
  }
  const y = _ * 100 + "%";
  return w.default.createElement("div", {
    className: f.default.progressBarContainer,
    onClick: m.stopPropagation,
    onMouseDown: m.stopPropagation,
    onMouseEnter: p,
    onMouseLeave: e => {
      h(e);
      g(undefined);
    },
    onMouseMove: e => {
      const a = l ? O : P;
      const r = e.currentTarget.getBoundingClientRect().left;
      const o = e.pageX;
      const i = e.currentTarget.offsetWidth - a * 2;
      let u = (o - r - a) / i;
      const s = Math.abs(o - r - a - i * (t / n)) <= a;
      if (u < 0) {
        u = s ? 0 : undefined;
      } else if (u > 1) {
        u = s ? 1 : undefined;
      }
      g(u);
    }
  }, w.default.createElement("input", {
    className: f.default.hiddenProgressBar,
    dir: "ltr",
    onChange: s,
    onMouseDown: c,
    onMouseUp: d,
    type: "range",
    min: "0",
    max: (0, r.default)(n, 2),
    step: "any",
    value: t
  }), w.default.createElement("div", {
    className: f.default.displayedProgressBar
  }, w.default.createElement("div", {
    className: (0, o.classnamesConvertMeToStylexPlease)(f.default.progressItem, f.default.displayedTrack)
  }), w.default.createElement("div", {
    className: (0, o.classnamesConvertMeToStylexPlease)({
      [f.default.lowerTrackLongest]: _ === 1,
      [f.default.progressItem]: true,
      [f.default.displayedBuffer]: true
    }),
    style: {
      width: y
    }
  }), w.default.createElement("div", {
    className: (0, o.classnamesConvertMeToStylexPlease)({
      [f.default.lowerTrackLongest]: E === 1,
      [f.default.progressItem]: true,
      [f.default.displayedProgress]: true
    }),
    style: {
      width: v
    }
  }), w.default.createElement("div", {
    className: (0, o.classnamesConvertMeToStylexPlease)({
      [f.default.hideThumb]: !i,
      [f.default.thumb]: true
    }),
    style: {
      left: v
    }
  }), w.default.createElement(D, {
    mouseOverProgressRatio: u,
    duration: n
  })));
}
function R(e) {
  let {
    muted: t,
    volume: n,
    defaultValume: a,
    onUnmute: r,
    isMouseOverVolumeControl: l,
    onMute: i,
    onVolumeValueChange: u,
    onMouseEnter: s,
    onMouseLeave: c
  } = e;
  const d = t || n === 0;
  const p = w.default.createElement(g.default, {
    "aria-label": d ? T.fbt._("Unmute", null, {
      hk: "aQpZx"
    }) : T.fbt._("Mute", null, {
      hk: "1C7Sjw"
    }),
    Icon: k(n, d),
    displayInline: true,
    onClick: () => {
      if (d) {
        r();
      } else {
        i();
      }
      if (a === 0) {
        u(0.25);
      }
    }
  });
  const h = w.default.createElement("div", {
    className: (0, o.classnamesConvertMeToStylexPlease)({
      [f.default.visible]: l && !t,
      [f.default.volumeBarContainer]: true
    })
  }, w.default.createElement("div", {
    className: (0, o.classnamesConvertMeToStylexPlease)({
      [f.default.lowerTrackLongest]: n === 1,
      [f.default.firefoxFix]: E.UA.isGecko,
      [f.default.volumeLowerTrack]: true
    }),
    style: {
      width: n * 100 + "%"
    }
  }), w.default.createElement("input", {
    className: f.default.volumeBar,
    dir: "ltr",
    onChange: e => {
      u(parseFloat(e.target.value));
    },
    type: "range",
    min: "0",
    max: 1,
    step: "any",
    value: n
  }));
  return w.default.createElement("div", {
    className: f.default.volumeContainer,
    onClick: m.stopPropagation,
    onMouseEnter: s,
    onMouseLeave: c,
    onMouseDown: m.stopPropagation
  }, p, h);
}
function N(e) {
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  const [n, a] = (0, w.useState)(e);
  const [r, o] = (0, w.useState)(e);
  if (!(r === e || t)) {
    a(e);
    o(e);
  }
  return [n, a];
}
const x = (0, w.forwardRef)((e, t) => {
  const {
    isFullscreenMode: n,
    ctwaSourceUrl: a,
    onClose: r,
    onFullscreenToggle: h,
    onVolumeValueChange: E,
    duration: C,
    className: b,
    isVideoPlaying: M,
    onPause: S,
    onPlay: A,
    newPiPStyle: P = false,
    onMutedValueChange: O,
    onProgressChange: k
  } = e;
  const D = (0, w.useRef)(null);
  const [x, L] = (0, w.useState)(false);
  const [j, B] = (0, w.useState)(false);
  const [F, G] = (0, w.useState)(false);
  const [U, W] = (0, w.useState)(undefined);
  const [H, V] = N(e.muted);
  const [q, Y] = N(e.volume);
  const [z, K] = N(e.bufferedTime);
  const [Q, X] = N(e.progress, j);
  const Z = n ? w.default.createElement("div", {
    className: (0, o.classnamesConvertMeToStylexPlease)(f.default.timeText, f.default.currentTime),
    onClick: m.stopPropagation
  }, l.Clock.durationStr(Q)) : null;
  const J = n ? w.default.createElement("div", {
    className: (0, o.classnamesConvertMeToStylexPlease)(f.default.timeText, f.default.duration),
    onClick: m.stopPropagation
  }, l.Clock.durationStr(C)) : null;
  const $ = b != null ? b : f.default.controls;
  const ee = P && Math.ceil(Q) >= C;
  const te = ee ? p.RefreshIcon : y.VideoPlayIcon;
  const ne = ee ? T.fbt._("Replay", null, {
    hk: "3rMdow"
  }) : T.fbt._("Play", null, {
    hk: "4CjEWt"
  });
  return w.default.createElement("div", {
    ref: t,
    className: (0, o.classnamesConvertMeToStylexPlease)({
      [f.default.fullscreen]: n,
      [f.default.pipContainer]: P,
      [$]: true
    })
  }, w.default.createElement("div", {
    className: f.default.playpauseBtnContainer,
    onClick: m.stopPropagation,
    onMouseDown: m.stopPropagation,
    onMouseUp: m.stopPropagation
  }, w.default.createElement(g.default, {
    "aria-label": M ? T.fbt._("Pause", null, {
      hk: "1kvbzt"
    }) : ne,
    Icon: M ? _.VideoPauseIcon : te,
    displayInline: true,
    onClick: M ? S : A
  })), w.default.createElement(I, {
    progress: e.progress,
    duration: C,
    bufferedTime: z,
    isFullscreenMode: n,
    isMouseOverProgressBar: F,
    mouseOverProgressRatio: U,
    onChange: e => {
      const t = parseFloat(e.target.value);
      k(t);
      const n = Math.abs(z - C) < 0.1 ? z : 0;
      X(t);
      K(n);
    },
    onMouseDown: () => {
      B(true);
      D.current = M;
      if (M) {
        S();
      }
    },
    onMouseUp: () => {
      B(false);
      if (D.current === true) {
        A();
      }
      D.current = null;
    },
    onMouseEnter: () => {
      G(true);
    },
    onMouseLeave: () => {
      G(false);
    },
    onMouseOverProgressRatioChange: W
  }), w.default.createElement(R, {
    muted: H,
    volume: q,
    defaultValume: e.volume,
    onUnmute: () => {
      O(false);
      V(false);
    },
    onMute: () => {
      O(true);
      V(true);
    },
    onVolumeValueChange: e => {
      Y(e);
      E(e);
    },
    isMouseOverVolumeControl: x,
    onMouseEnter: () => {
      L(true);
    },
    onMouseLeave: () => {
      L(false);
    }
  }), Z, J, h != null ? w.default.createElement("div", {
    className: f.default.fullscreenBtn
  }, w.default.createElement(d.default, {
    isFullscreenMode: n,
    onClick: h,
    isStatic: true
  })) : null, r != null ? w.default.createElement("div", {
    className: f.default.closeBtn
  }, w.default.createElement(u.default, {
    isFullscreenMode: n,
    onClick: r,
    isStatic: true
  })) : null, x && !H || a == null ? null : w.default.createElement(c.default, {
    isFullscreenMode: n,
    onClick: e => {
      e.preventDefault();
      e.stopPropagation();
      if (a != null) {
        (0, i.openExternalLink)(a);
      }
    },
    isInstagram: (ae = a, v.default.withoutWww(v.default.hostname(ae)) === s.HOSTNAME.INSTAGRAM)
  }));
  var ae;
});
exports.VideoControls = x;
x.displayName = "VideoControls";