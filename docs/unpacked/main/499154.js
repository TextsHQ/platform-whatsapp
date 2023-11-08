var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgWaveform = function (e) {
  const {
    currentTime: t,
    disabled: n,
    skipThumb: a,
    duration: i,
    onSeek: c,
    onSeekEnd: d,
    outgoing: f,
    played: p,
    waveform: m
  } = e;
  const h = (0, o.useCallback)(() => t != null ? t : 0, [t]);
  const g = (0, o.useCallback)(() => Array.from(m).map(e => e / 100), [m]);
  const E = (0, o.useCallback)(() => i, [i]);
  return o.default.createElement("div", {
    className: (0, l.default)(u)
  }, o.default.createElement(r.Waveform, {
    location: s(f, p),
    sampleRate: 6,
    getSamples: g,
    getCurrentTime: h,
    getDuration: E,
    live: false,
    mode: r.WaveformMode.PREVIEW,
    onSeek: c,
    onSeekEnd: d,
    disabled: n,
    skipThumb: a
  }));
};
var r = require("./594035.js");
var o = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = i(t);
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
var l = a(require("../app/156720.js"));
function i(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (i = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const u = {
  display: "p357zi0d",
  height: "bmot90v7"
};
function s(e, t) {
  switch (e) {
    case true:
      if (t) {
        return r.WaveformLocation.OUTGOING_PLAYED_MESSAGE;
      } else {
        return r.WaveformLocation.OUTGOING_UNPLAYED_MESSAGE;
      }
    case false:
      if (t) {
        return r.WaveformLocation.INCOMING_PLAYED_MESSAGE;
      } else {
        return r.WaveformLocation.INCOMING_UNPLAYED_MESSAGE;
      }
  }
}