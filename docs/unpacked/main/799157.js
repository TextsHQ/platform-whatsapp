var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/348926.js"));
var l = a(require("../vendor/506479.js"));
var i = require("../app/898817.js");
var u = a(require("./570002.js"));
var s = require("../app/513681.js");
var c = require("../app/368170.js");
var d = a(require("../app/556869.js"));
var f = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = _(t);
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
var p = a(require("../app/156720.js"));
var m = require("./453598.js");
var h = a(require("../app/558532.js"));
var g = a(require("../app/17533.js"));
const E = ["autoPlay", "className", "children", "srcObject"];
const v = ["onPlaying"];
function _(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (_ = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const y = {
  display: "f804f6gw",
  width: "ln8gz9je",
  height: "ppled2lx"
};
function C(e, t) {
  let {
    autoPlay: n,
    className: a,
    children: _,
    srcObject: C
  } = e;
  let b = (0, l.default)(e, E);
  const M = (0, f.useRef)(0);
  const S = (0, f.useRef)(null);
  const T = (0, f.useRef)(null);
  const w = (0, m.useMediaStreamPlaybackMetric)(b.src, S, b);
  const {
    wrappedProps: {
      onPlaying: A
    }
  } = w;
  const P = (0, l.default)(w.wrappedProps, v);
  const O = () => {
    const e = S.current;
    if (e) {
      if (!e.paused) {
        if (e.videoHeight > 0 && e.videoWidth > 0) {
          if (!(A == null)) {
            A();
          }
        }
      }
    }
  };
  const k = function () {
    var e = (0, o.default)(function* () {
      const e = S.current;
      if (!e) {
        return Promise.reject((0, d.default)("cannot play unmounted video"));
      }
      if (!e.paused) {
        return Promise.resolve();
      }
      e.removeEventListener("playing", O);
      try {
        yield (0, u.default)(e);
        e.addEventListener("playing", O);
        O();
      } catch (u) {
        var t;
        var n;
        var a;
        var r;
        var o;
        var l;
        var s;
        e.addEventListener("playing", O);
        if (u.name === i.ABORT_ERROR) {
          return void __LOG__(3)`video.play() promise rejected w/ AbortError: ${u.message}, error code: ${u.code}`;
        }
        const c = (t = (n = S.current) === null || n === undefined || (a = n.error) === null || a === undefined ? undefined : a.message) !== null && t !== undefined ? t : "";
        const d = (r = (o = S.current) === null || o === undefined || (l = o.error) === null || l === undefined ? undefined : l.code) !== null && r !== undefined ? r : "";
        __LOG__(3)`video.play() promise rejected: ${c} The error code is ${d}.`;
        if (!((s = P.onError) === null || s === undefined)) {
          s.call(P, u);
        }
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  const D = (0, g.default)(() => {
    k();
  });
  const I = (0, g.default)(() => {
    const e = S.current;
    if ((e == null ? undefined : e.paused) !== true) {
      if (!(e == null)) {
        e.pause();
      }
    }
  });
  const R = (0, g.default)(() => {
    var e;
    var t;
    if ((e = (t = S.current) === null || t === undefined ? undefined : t.volume) !== null && e !== undefined) {
      return e;
    } else {
      return 0;
    }
  });
  const N = (0, g.default)(e => {
    if (S.current) {
      S.current.volume = e;
    }
  });
  const x = (0, g.default)(() => {
    var e;
    var t;
    return (e = (t = S.current) === null || t === undefined ? undefined : t.muted) !== null && e !== undefined && e;
  });
  const L = (0, g.default)(e => {
    if (S.current) {
      S.current.muted = e;
    }
  });
  const j = (0, g.default)(() => {
    var e;
    var t;
    return (e = (t = S.current) === null || t === undefined ? undefined : t.paused) === null || e === undefined || e;
  });
  const B = (0, g.default)(() => {
    var e;
    var t;
    if ((e = (t = S.current) === null || t === undefined ? undefined : t.currentTime) !== null && e !== undefined) {
      return e;
    } else {
      return 0;
    }
  });
  const F = (0, g.default)(e => {
    if (S.current) {
      S.current.currentTime = e;
    }
  });
  const G = (0, g.default)(() => {
    var e;
    var t;
    if ((e = (t = S.current) === null || t === undefined ? undefined : t.duration) !== null && e !== undefined) {
      return e;
    } else {
      return 0;
    }
  });
  const U = (0, g.default)(e => {
    if (S.current) {
      S.current.duration = e;
    }
  });
  const W = (0, g.default)(() => {
    const e = S.current;
    if (e) {
      e.currentTime = 0;
      I();
    }
  });
  const H = (0, g.default)(() => {
    var e;
    var t;
    if ((e = (t = S.current) === null || t === undefined ? undefined : t.buffered) !== null && e !== undefined) {
      return e;
    } else {
      return null;
    }
  });
  const V = (0, g.default)(() => S.current);
  (0, f.useImperativeHandle)(t, () => ({
    play: D,
    pause: I,
    getPaused: j,
    getCurrentTime: B,
    setCurrentTime: F,
    getDuration: G,
    setDuration: U,
    getVolume: R,
    setVolume: N,
    getMuted: x,
    setMuted: L,
    getBuffered: H,
    underlyingVideo: V,
    pauseAndReset: W
  }), [D, I, j, B, F, G, U, R, N, x, L, H, V, W]);
  const q = () => {
    const e = S.current;
    if (e && (e.removeEventListener("playing", q), !e.videoHeight || !e.videoWidth)) {
      I();
      D();
      const e = 6;
      let t;
      if (M.current < e) {
        M.current++;
      }
      if (M.current > 1 && M.current < e) {
        t = `the height and width of the video is not zero, count (larger than 1): ${M.current}`;
      }
      if (M.current >= e) {
        t = `the height and width of the video is not zero, count larger than ${M.current}`;
      }
      if (t) {
        __LOG__(4, undefined, new Error(), true)`Assertion failed! ${t}`;
        SEND_LOGS("non-zero height and width");
      }
    }
  };
  const Y = (e, t) => {
    if (n !== true) {
      return;
    }
    e.removeEventListener("playing", q);
    e.addEventListener("playing", q);
    if (e.srcObject != null || t && e.paused) {
      D();
    }
  };
  const z = (0, g.default)(e => {
    var t;
    var a;
    if (e !== S.current) {
      if (!((t = S.current) === null || t === undefined)) {
        t.removeEventListener("playing", O);
      }
      if (!((a = T.current) === null || a === undefined)) {
        a.call(T);
      }
      S.current = e;
      if (e != null) {
        T.current = s.MainAudioChannel.registerMedia(e);
        if ("srcObject" in e && C) {
          e.srcObject = C;
        } else if (!e.src) {
          __LOG__(3)`srcObject is not supported in video tag while src is not set.`;
        }
        e.addEventListener("playing", O);
        if (n === true) {
          Y(e, c.UA.isGecko || c.UA.isSafari);
        }
      }
    }
  });
  (0, f.useEffect)(() => {
    const e = S.current;
    if (e != null && n === true) {
      Y(e, true);
    }
  }, [n]);
  (0, h.default)(() => {
    var e;
    if (!((e = T.current) === null || e === undefined)) {
      e.call(T);
    }
  });
  return f.default.createElement("video", (0, r.default)({
    ref: z,
    autoPlay: b.src != null ? n : undefined,
    className: a != null ? a : (0, p.default)(y)
  }, b, P), _);
}
var b = (0, f.forwardRef)(C);
exports.default = b;