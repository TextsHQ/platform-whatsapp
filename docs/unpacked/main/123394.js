var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusV3AudioBubble = function (e) {
  const {
    msg: t,
    playbackController: n,
    isPreview: a
  } = e;
  const o = (0, E.useModelValues)(e.mediaData, ["waveform", "duration"]);
  const u = Number.isNaN(n.duration) ? (0, c.getDurationFromProto)(o) : n.duration / 1000;
  const s = (e => {
    const t = (0, i.getStatusV3CanvasColor)(e);
    if (t == null) {
      return null;
    }
    return {
      fill: t,
      stroke: t
    };
  })(t);
  const d = a ? null : m.default.createElement(A, {
    duration: u,
    playbackController: n,
    waveformData: o.waveform
  });
  const p = a ? null : m.default.createElement(w, {
    duration: u,
    playbackController: n
  });
  return m.default.createElement("div", {
    className: (0, h.default)(y)
  }, m.default.createElement("div", {
    className: (0, h.default)(C)
  }, m.default.createElement(l.DetailImage, {
    id: t.senderObj.id,
    size: 72
  }), m.default.createElement("span", {
    className: (0, r.classnamesConvertMeToStylexPlease)((0, h.default)(b), _),
    style: s
  }, m.default.createElement(f.PttStatusIcon, {
    width: 27,
    height: 27
  }))), d, p);
};
var r = require("../app/396574.js");
var o = require("../app/63014.js");
var l = require("../app/23641.js");
var i = require("../app/787742.js");
var u = a(require("./190827.js"));
var s = require("./594035.js");
var c = require("./606993.js");
var d = a(require("./817850.js"));
var f = require("./473044.js");
var p = require("./78043.js");
var m = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = v(t);
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
var h = a(require("../app/156720.js"));
var g = a(require("./805956.js"));
var E = require("../app/655241.js");
function v(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (v = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const _ = d.default.voiceStatus;
const y = {
  width: "c1gtxk6a",
  height: "ntadmmlx",
  backgroundColor: "z4cnh15p",
  borderTopStartRadius: "k6f31xd0",
  borderTopEndRadius: "i213mnjx",
  borderBottomEndRadius: "csyx12jj",
  borderBottomStartRadius: "aemtu0ky",
  display: "p357zi0d",
  color: "lxozqee9"
};
const C = {
  width: "jgly3g7g",
  height: "graaj7av",
  minWidth: "j3e9rhaw",
  marginTop: "eg3lofc5",
  marginStart: "htq1q0kf",
  display: "p357zi0d",
  justifyContent: "ac2vgrno",
  alignItems: "gndfcl4n",
  flexWrap: "lkhkxwyq",
  position: "g0rxnol2"
};
const b = {
  zIndex: "mb8var44",
  position: "lhggkp7q",
  marginStart: "n6habkpv",
  marginTop: "kpwy2cir"
};
const M = {
  marginTop: "eg3lofc5",
  marginStart: "a3oefunm",
  width: "ligcydkd",
  height: "graaj7av",
  display: "p357zi0d"
};
const S = {
  marginTop: "kyitrrqy",
  marginStart: "a3oefunm",
  lineHeight: "amac7m9s",
  fontSize: "f8jlpxt4",
  fontWeight: "m1e7cby3",
  width: "rvmgzurb",
  height: "fs6hn1up",
  display: "p357zi0d",
  alignItems: "gndfcl4n",
  letterSpacing: "hscjuerc"
};
const T = {
  animationName: "n0uige08",
  animationDuration: "oauresqk",
  animationTimingFunction: "gaqnkt02"
};
function w(e) {
  let {
    duration: t,
    playbackController: n
  } = e;
  const [a, r] = (0, m.useState)(n.currentTime);
  (0, m.useEffect)(() => {
    const e = e => {
      r(e);
    };
    n.addListeners({
      onTimeUpdate: e
    });
    return () => {
      n.removeListener(p.MediaEvents.OnTimeUpdate, e);
    };
  }, []);
  return m.default.createElement("div", {
    className: (0, h.default)(S, T)
  }, o.Clock.durationStr(t - a));
}
function A(e) {
  let {
    waveformData: t,
    duration: n,
    playbackController: a
  } = e;
  const r = s.WaveformLocation.STATUS_V3_MESSAGE;
  const {
    barWidth: o,
    barSpacing: l
  } = (0, s.getWaveformBarDimensions)(r);
  const i = Math.round(280 / (o + l));
  const [c, d] = (0, m.useState)(a.isPlaying);
  (0, g.default)(() => {
    d(a.isPlaying);
  }, {
    active: true
  });
  const f = (0, m.useMemo)(() => {
    const e = t != null ? t : new Uint8Array(64);
    return (0, u.default)(Array.from(e).map(e => e / 100), n / 0.15 * (i * 0.25) + i);
  }, [n, i, t]);
  const p = (0, m.useMemo)(() => m.default.createElement(s.Waveform, {
    getSamples: () => f,
    getCurrentTime: () => a.currentTime,
    getDuration: () => n + 1,
    sampleRate: i,
    mode: s.WaveformMode.VOICE_STATUS,
    onSeekEnd: () => {},
    location: r,
    live: c,
    heightJitterFactor: 0.2,
    jitterValuesCount: 20
  }), [a, r, i, n, f, c]);
  return m.default.createElement("div", {
    className: (0, h.default)(M, T)
  }, p);
}