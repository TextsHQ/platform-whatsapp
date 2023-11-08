var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Waveform = function (e) {
  const [t, {
    width: n,
    height: a
  }] = (0, _.default)();
  const o = n === 0 || a === 0 ? null : p.default.createElement(T, (0, r.default)({}, e, {
    width: n,
    height: a
  }));
  return p.default.createElement("div", {
    ref: t,
    className: (0, m.default)(M)
  }, p.default.createElement("div", {
    className: (0, m.default)(S)
  }, o));
};
exports.WaveformMode = exports.WaveformLocation = undefined;
exports.getWaveformBarDimensions = k;
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/288306.js"));
var l = a(require("../app/939067.js"));
var i = a(require("../app/670983.js"));
var u = require("../app/63014.js");
var s = a(require("./803554.js"));
var c = a(require("./190827.js"));
var d = require("./622732.js");
var f = require("../app/667738.js");
var p = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = y(t);
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
var m = a(require("../app/156720.js"));
var h = a(require("./805956.js"));
var g = a(require("../app/710629.js"));
var E = a(require("../app/643934.js"));
var v = a(require("../app/637660.js"));
var _ = a(require("./695841.js"));
function y(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (y = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const C = require("../vendor/76672.js").Mirrored(["DRAFT_PREVIEW", "INCOMING_UNPLAYED_MESSAGE", "INCOMING_PLAYED_MESSAGE", "OUTGOING_UNPLAYED_MESSAGE", "OUTGOING_PLAYED_MESSAGE", "STATUS_V3_MESSAGE"]);
exports.WaveformLocation = C;
const b = require("../vendor/76672.js").Mirrored(["RECORDER", "PREVIEW", "VOICE_STATUS"]);
exports.WaveformMode = b;
const M = {
  position: "g0rxnol2",
  flexGrow: "ggj6brxn"
};
const S = {
  position: "lhggkp7q",
  top: "qq0sjtgm",
  start: "tkdu00h0"
};
function T(e) {
  const t = (0, p.useRef)();
  const {
    getSamples: n,
    sampleRate: a,
    width: r,
    height: o,
    getCurrentTime: m,
    getDuration: _,
    live: y,
    location: C,
    mode: M,
    onSeek: S,
    onSeekEnd: T,
    disabled: P,
    tabIndex: O,
    skipThumb: D,
    heightJitterFactor: I,
    jitterValuesCount: R
  } = e;
  const N = (0, E.default)();
  const {
    theme: x
  } = (0, p.useContext)(f.ThemeContext);
  const L = A(x, C);
  const j = I != null ? I / 2 : 0;
  const {
    draw: B,
    calculateInset: F
  } = function (e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    const {
      barWidth: n,
      barSpacing: a
    } = k(e);
    const r = a / 2;
    const o = n + a;
    const l = n;
    const i = 6;
    let u = 0;
    function s(e) {
      const {
        canvas: a,
        width: i,
        height: s,
        currentTime: m,
        duration: h,
        sampleRate: g,
        colors: E,
        mode: v,
        pixelRatio: _,
        scaleSamples: y,
        jitterValues: C
      } = e;
      let M;
      let S;
      let T;
      let A;
      const P = h === 0 ? 0 : m / h;
      if (v === b.RECORDER) {
        M = e.samples;
        const t = i - h * g * o;
        S = t > 0 ? 0 : Math.floor(-t / o);
        T = t + S * o;
        A = i;
      } else if (v === b.VOICE_STATUS) {
        const t = m / h * e.samples.length;
        M = e.samples.slice(t, t + g);
        S = 0;
        T = 0;
        A = i;
      } else {
        M = y(e.samples, f(i));
        const [t, a] = p(i);
        T = t - n / 2 - r;
        S = 0;
        const o = t - n / 2;
        A = o + P * (i - a + n / 2 - o);
      }
      const O = a.getContext("2d");
      O.lineCap = "round";
      O.setTransform(_, 0, 0, _, 0, 0);
      O.clearRect(0, 0, i, s);
      for (let e = S; e < M.length; e++) {
        const a = T + (e - S) * o + r;
        let c;
        if (v === b.PREVIEW) {
          c = 1;
        } else if (v === b.RECORDER) {
          const e = a;
          const t = i - (a + n);
          c = w(e < t ? Math.min(1, e / 7) : Math.min(1, t / 14));
        } else {
          c = 1;
          if (t != null) {
            const t = C[(e + Math.floor(u / C.length)) % C.length];
            let n = t[u % t.length];
            const a = Math.abs(t[0]);
            if (e % 2 == 0) {
              n *= -1;
            }
            c = c - a - n;
          }
        }
        const f = Math.max(0, c * (l + M[e] * (s - l)));
        d(O, E, a, (s - f) / 2, n, f, A);
      }
      if (v === b.PREVIEW && !e.skipThumb) {
        const [e, t] = p(i);
        c(O, e + P * (i - t - e), s / 2, E.thumb);
      }
      u += 1;
    }
    function c(e, t, n, a) {
      e.beginPath();
      e.arc(t, n, i, 0, Math.PI * 2, false);
      e.fillStyle = a;
      e.fill();
    }
    function d(e, t, n, a, r, o, l) {
      if (r === 0 || o === 0) {
        return;
      }
      const i = Math.min(r / 2, o / 2);
      const u = l >= n + r ? t.barColorPlayed : t.barColorUnplayed;
      if (o <= r) {
        e.fillStyle = u;
        e.beginPath();
        e.arc(n + r / 2, a + o / 2, i, 0, Math.PI * 2);
        e.fill();
      } else {
        e.strokeStyle = u;
        e.lineWidth = i * 2;
        e.beginPath();
        e.moveTo(n + r / 2, a + i);
        e.lineTo(n + r / 2, a + o - i);
        e.stroke();
      }
      if (l > n && l < n + r) {
        e.globalCompositeOperation = "source-atop";
        e.fillStyle = t.barColorPlayed;
        e.rect(n, a, l - n, o);
        e.fill();
        e.globalCompositeOperation = "source-over";
      }
    }
    function f(e) {
      return Math.floor((e - i * 2) / o);
    }
    function p(e) {
      const t = (e - o * (f(e) - 1)) / 2;
      return [t, t];
    }
    return {
      draw: s,
      calculateInset: p
    };
  }(C, j);
  const G = (0, p.useMemo)(() => (0, d.generateJitterDistributionArrays)(j, R, R), [j, R]);
  const [U, W] = (0, p.useState)(null);
  const [H, V] = (0, p.useState)({
    value: m(),
    max: _()
  });
  const q = (0, g.default)(() => {
    V({
      value: m(),
      max: _()
    });
  }, 500);
  const Y = (0, p.useCallback)(() => {
    q();
    q.flush();
  }, [q]);
  (0, p.useEffect)(() => {
    if (M === b.PREVIEW) {
      Y();
    }
  }, [M, Y]);
  const z = (0, v.default)(() => {
    const e = (0, l.default)(e => {
      let {
        samples: t,
        inputSize: n,
        desiredSize: a
      } = e;
      return (0, c.default)(t, a);
    });
    return (t, n) => e({
      samples: t,
      inputSize: t.length,
      desiredSize: n
    });
  });
  const K = (0, p.useCallback)(() => {
    q();
    B({
      canvas: (0, i.default)(t.current, "canvasRef.current"),
      samples: n(),
      width: r,
      height: o,
      currentTime: U != null ? U : m(),
      duration: _(),
      sampleRate: a,
      colors: L,
      mode: M,
      pixelRatio: N,
      scaleSamples: z.current,
      skipThumb: D != null && D,
      jitterValues: G
    });
  }, [B, t, n, r, o, m, U, _, a, L, M, q, N, z, D, G]);
  (0, h.default)(K, {
    active: y
  });
  (0, p.useEffect)(() => {
    if (!y) {
      K();
    }
  }, [y, K]);
  const Q = (0, p.useCallback)(e => {
    if (!(S == null)) {
      S(e);
    }
    W(e);
    K();
  }, [W, S, K]);
  const X = (0, p.useCallback)(e => {
    W(null);
    if (!(S == null)) {
      S(e);
    }
    T(e);
    K();
    Y();
  }, [W, S, T, K, Y]);
  const Z = p.default.createElement("canvas", {
    ref: t,
    width: N * r,
    height: N * o,
    style: {
      width: `${r}px`,
      height: `${o}px`
    }
  });
  if (M === b.RECORDER) {
    return Z;
  }
  const {
    value: J,
    max: $
  } = H;
  const ee = u.Clock.durationStr(J) + "/" + u.Clock.durationStr($);
  return p.default.createElement(s.default, {
    value: J,
    valueText: ee,
    min: 0,
    max: $,
    smallSkip: 1,
    largeSkip: 10,
    onChange: Q,
    onCommit: X,
    disabled: P,
    tabIndex: O,
    inset: F(r)
  }, Z);
}
function w(e) {
  if (e < 0.5) {
    return e * 4 * e * e;
  } else {
    return 1 - (e * -2 + 2) ** 3 / 2;
  }
}
const A = (0, o.default)((e, t) => ({
  barColorUnplayed: P("barColorUnplayed", t),
  barColorPlayed: P("barColorPlayed", t),
  thumb: P("thumb", t)
}), (e, t) => `${e} ${t}`);
function P(e, t) {
  return getComputedStyle((0, i.default)(document.body, "document.body")).getPropertyValue((0, i.default)(O.get(t), "CSS_VARIABLE_NAMES.get(location)")[e]).trim();
}
const O = new Map([[C.DRAFT_PREVIEW, {
  barColorUnplayed: "--ptt-waveform-preview-unplayed",
  barColorPlayed: "--ptt-waveform-preview-played",
  thumb: "--ptt-draft-thumb"
}], [C.INCOMING_UNPLAYED_MESSAGE, {
  barColorUnplayed: "--ptt-waveform-incoming-unplayed",
  barColorPlayed: "--ptt-waveform-incoming-played",
  thumb: "--ptt-thumb-incoming-unplayed"
}], [C.INCOMING_PLAYED_MESSAGE, {
  barColorUnplayed: "--ptt-waveform-incoming-unplayed",
  barColorPlayed: "--ptt-waveform-incoming-played",
  thumb: "--ptt-thumb-incoming-played"
}], [C.OUTGOING_UNPLAYED_MESSAGE, {
  barColorUnplayed: "--ptt-waveform-outgoing-unplayed",
  barColorPlayed: "--ptt-waveform-outgoing-played",
  thumb: "--ptt-thumb-outgoing-unplayed"
}], [C.OUTGOING_PLAYED_MESSAGE, {
  barColorUnplayed: "--ptt-waveform-outgoing-unplayed",
  barColorPlayed: "--ptt-waveform-outgoing-played",
  thumb: "--ptt-thumb-outgoing-played"
}], [C.STATUS_V3_MESSAGE, {
  barColorUnplayed: "--status-primary",
  barColorPlayed: "--status-primary",
  thumb: "--status-primary"
}]]);
function k(e) {
  if (e === C.STATUS_V3_MESSAGE) {
    return {
      barWidth: 3.75,
      barSpacing: 4.5
    };
  } else {
    return {
      barWidth: 2.5,
      barSpacing: 1.8
    };
  }
}