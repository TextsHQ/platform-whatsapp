var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../app/756680.js"));
var o = require("../app/787742.js");
var l = a(require("./763770.js"));
var i = require("./511016.js");
var u = require("../app/757453.js");
var s = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = m(t);
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
var c = a(require("../app/38085.js"));
var d = require("../app/655241.js");
var f = require("./871210.js");
var p = a(require("../app/17533.js"));
function m(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (m = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function h(e, t) {
  const {
    onLoadedMetadata: n
  } = e;
  const [a] = (0, f.useMsgValues)(e.msg.id, [o.getId]);
  const m = (0, d.useModelValues)(e.mediaData, ["mediaBlob", "streamable", "aspectRatio"]);
  const h = (0, s.useRef)(null);
  const g = (0, c.default)(t, h);
  const E = (0, s.useRef)(Boolean(m.mediaBlob));
  const v = (0, p.default)(e => {
    if (h.current !== e && (g(e), e)) {
      const {
        volume: t,
        muted: n
      } = (0, u.getMediaVolumeSettings)();
      if (t != null) {
        e.setVolume(t);
      }
      e.setMuted(n);
    }
  });
  const _ = (0, s.useCallback)((e, t) => {
    const a = m.aspectRatio;
    const r = e.videoWidth !== 0 && e.videoHeight !== 0 ? e.videoWidth / e.videoHeight : undefined;
    if (!a && r != null && r !== 0 || a && r != null && r !== 0 && Math.abs(r - a) > 0.01) {
      m.set({
        aspectRatio: r
      });
    }
    n(e, t);
  }, [m, n]);
  const y = m.mediaBlob;
  let C;
  const b = m.streamable && m.isStreamable();
  C = (E.current || !b) && y instanceof r.default ? y.url() : m.streamable && m.isStreamable() ? `${i.VIDEO_STREAM_URL}?key=${a.toString()}` : undefined;
  return s.default.createElement(l.default, {
    ref: v,
    url: C,
    startTime: e.startTime,
    poster: e.poster,
    className: e.className,
    onVolumeChange: e.onVolumeChange,
    onEnded: e.onEnded,
    onError: e.onError,
    onPause: e.onPause,
    onPlaying: e.onPlaying,
    onProgress: e.onProgress,
    onTimeUpdate: e.onTimeUpdate,
    onLoadedMetadata: _,
    autoPlay: e.autoPlay,
    onCanPlay: e.onCanPlay,
    onWaiting: e.onWaiting,
    onLoadedData: e.onLoadedData
  }, e.children);
}
var g = (0, s.forwardRef)(h);
exports.default = g;