var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/81109.js"));
var o = a(require("../vendor/682492.js"));
var l = a(require("../vendor/23279.js"));
var i = require("../app/287461.js");
var u = require("../app/513681.js");
var s = require("../app/757453.js");
var c = require("./698736.js");
var d = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = g(t);
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
var f = a(require("../app/10617.js"));
var p = a(require("../app/637660.js"));
var m = a(require("../app/558532.js"));
var h = a(require("../app/17533.js"));
function g(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (g = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const E = (0, l.default)(e => {
  (0, s.setMediaVolumeSetting)(e);
}, 500);
const v = (0, l.default)(e => {
  (0, s.setMediaMutedSetting)(e);
}, 500);
const _ = 1;
const y = {
  width: "100%",
  height: "100%",
  playerVars: {
    cc_load_policy: 1,
    iv_load_policy: 3,
    controls: 0,
    playsinline: 1,
    rel: 0,
    modestbranding: 0,
    autoplay: 0
  }
};
function C(e, t) {
  const n = (0, d.useRef)(null);
  const a = (0, d.useRef)(null);
  const l = (0, d.useRef)(0);
  const g = (0, d.useRef)(0);
  const C = (0, p.default)(() => Symbol("audio-channel"));
  const b = (0, d.useRef)(null);
  const M = (0, h.default)(() => {
    var e;
    if (!((e = n.current) === null || e === undefined)) {
      e.playVideo();
    }
  });
  const S = (0, h.default)(() => {
    var e;
    if (!((e = n.current) === null || e === undefined)) {
      e.pauseVideo();
    }
  });
  const T = (0, h.default)(e => {
    var t;
    if (!((t = n.current) === null || t === undefined)) {
      t.seekTo(e, true);
    }
  });
  const w = (0, h.default)(() => {
    var e;
    var t;
    if ((e = (t = n.current) === null || t === undefined ? undefined : t.getCurrentTime()) !== null && e !== undefined) {
      return e;
    } else {
      return 0;
    }
  });
  const A = (0, h.default)(() => {
    var e;
    var t;
    return ((e = (t = n.current) === null || t === undefined ? undefined : t.getVolume()) !== null && e !== undefined ? e : 0) * 0.01;
  });
  const P = (0, h.default)(() => {
    var e;
    var t;
    if ((e = (t = n.current) === null || t === undefined ? undefined : t.getDuration()) !== null && e !== undefined) {
      return e;
    } else {
      return 0;
    }
  });
  const O = (0, h.default)(() => {
    var e;
    var t;
    return (e = (t = n.current) === null || t === undefined ? undefined : t.isMuted()) !== null && e !== undefined && e;
  });
  const [k] = (0, f.default)(() => {
    const t = n.current;
    if (t) {
      const n = t.getCurrentTime();
      if (n !== l.current) {
        l.current = n;
        e.onTimeUpdate(n);
      }
      const o = t.getVideoLoadedFraction();
      if (o !== g.current) {
        g.current = o;
        const t = a.current ? a.current.duration * o : 0;
        e.onProgress([[0, t]]);
      }
      const i = a.current;
      if (i) {
        const n = t.getVolume() * 0.01;
        const o = t.isMuted();
        if (!(n === i.volume && o === i.muted)) {
          a.current = (0, r.default)((0, r.default)({}, i), {}, {
            volume: n,
            muted: o
          });
          e.onVolumeChange({
            volume: n,
            muted: o
          });
        }
      }
    }
  }, 250);
  const D = () => {
    var t;
    if (typeof e.startTime == "number") {
      if (!((t = n.current) === null || t === undefined)) {
        t.seekTo(e.startTime, true);
      }
    }
  };
  const I = (0, h.default)(e => {
    const t = n.current;
    if (t) {
      if (e) {
        t.mute();
      } else {
        t.unMute();
      }
      v(e);
    }
  });
  const R = (0, h.default)(e => {
    if (n.current) {
      n.current.setVolume(e * 100);
      E(e);
    }
  });
  (0, d.useEffect)(() => {
    D();
  }, [e.startTime]);
  (0, m.default)(() => {
    var e;
    if (!((e = b.current) === null || e === undefined)) {
      e.call(b);
    }
  });
  (0, d.useImperativeHandle)(t, () => ({
    play: M,
    pause: S,
    setCurrentTime: T,
    getCurrentTime: w,
    setVolume: R,
    setMuted: I,
    getVolume: A,
    getDuration: P,
    getMuted: O
  }), [M, S, T, w, R, I, A, P, O]);
  const {
    counterAbuseData: N
  } = e;
  const x = (0, o.default)({}, y, {
    playerVars: {
      autoplay: e.autoPlay ? 1 : 0,
      widget_referrer: "https://whatsapp.com",
      origin: window.location.origin
    }
  }, N != null && (0, i.getABPropConfigValue)("web_youtube_rcat_consumption_enabled") ? {
    playerVars: {
      rct: N.counterAbuseToken,
      rctn: N.nonce
    }
  } : {});
  return d.default.createElement(c.YouTube, {
    videoId: e.youtubeVideoId,
    opts: x,
    onReady: t => {
      n.current = t.target;
      const r = n.current;
      const o = (0, s.getMediaVolumeSettings)();
      const {
        volume: i,
        muted: u
      } = o;
      const c = r.getDuration();
      const d = i != null ? i : r.getVolume() * 0.01;
      const f = u != null ? u : r.isMuted();
      const {
        width: p,
        height: m
      } = r.getIframe().getBoundingClientRect();
      a.current = {
        duration: c,
        volume: d,
        muted: f,
        videoWidth: p,
        videoHeight: m
      };
      e.onLoadedMetadata(a.current);
      l.current = r.getCurrentTime();
      k();
      if (e.startTime != null) {
        D();
      }
      if (i != null) {
        R(i);
      }
      if (u != null) {
        I(u);
      }
    },
    onPlay: () => {
      b.current = u.MainAudioChannel.claim(C.current, S);
      e.onPlaying();
    },
    onPause: () => {
      var t;
      if (!((t = b.current) === null || t === undefined)) {
        t.call(b);
      }
      e.onPause();
    },
    onEnd: () => {
      e.onEnded();
    },
    onError: e.onEnded,
    onStateChange: t => {
      if (t.target.getPlayerState() !== _) {
        e.onPause();
      }
    }
  });
}
var b = (0, d.forwardRef)(C);
exports.default = b;