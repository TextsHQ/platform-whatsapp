var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/478718.js"));
var o = a(require("../vendor/23279.js"));
var l = a(require("./799157.js"));
var i = require("../app/757453.js");
var u = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = f(t);
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
var s = a(require("../app/38085.js"));
var c = a(require("../app/558532.js"));
var d = a(require("../app/17533.js"));
function f(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (f = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const p = (0, o.default)((e, t) => {
  (0, i.setMediaVolumeSettings)(e, t);
}, 500);
function m(e, t) {
  const {
    onVolumeChange: n,
    onPlaying: a,
    startTime: o,
    onLoadedMetadata: f,
    onProgress: m,
    onTimeUpdate: h,
    onError: g
  } = e;
  const E = (0, u.useRef)(null);
  const v = (0, s.default)(t, E);
  (0, c.default)(() => {
    p.flush();
  });
  const _ = (0, d.default)(() => {
    const e = E.current;
    if (e) {
      const t = e.getVolume();
      const a = e.getMuted();
      p(t, a);
      n({
        volume: t,
        muted: a
      });
    }
  });
  const y = (0, d.default)(() => {
    a();
  });
  const C = (0, d.default)(() => {
    if (E.current && typeof o == "number") {
      E.current.setCurrentTime(o);
    }
  });
  const b = (0, d.default)(e => {
    if (o != null) {
      C();
    }
    const t = (0, r.default)(e.target, ["duration", "volume", "muted", "videoWidth", "videoHeight"]);
    f(t, e);
  });
  (0, u.useEffect)(() => {
    C();
  }, [o, C]);
  (0, u.useEffect)(() => {
    const e = E.current;
    if (e) {
      const {
        volume: t,
        muted: n
      } = (0, i.getMediaVolumeSettings)();
      if (t != null) {
        e.setVolume(t);
      }
      e.setMuted(n);
    }
  }, []);
  return u.default.createElement(l.default, {
    ref: v,
    src: e.url,
    poster: e.poster,
    className: e.className,
    onVolumeChange: _,
    onEnded: e.onEnded,
    onError: e => {
      var t;
      var n;
      var a;
      const r = (t = (n = E.current) === null || n === undefined || (a = n.underlyingVideo()) === null || a === undefined ? undefined : a.error) !== null && t !== undefined ? t : null;
      if (r != null || e.code == null) {
        g(r == null ? undefined : r.code);
      } else {
        g(e.code);
      }
    },
    onPause: e.onPause,
    onPlaying: y,
    onProgress: () => {
      if (!E.current) {
        return;
      }
      const e = E.current.getBuffered();
      const t = [];
      if (e) {
        for (let n = 0; n < e.length; n++) {
          t.push([e.start(n), e.end(n)]);
        }
      }
      m(t);
    },
    onTimeUpdate: e => {
      const t = e.target.currentTime;
      h(t);
    },
    onLoadedMetadata: b,
    autoPlay: e.autoPlay,
    onCanPlay: e.onCanPlay,
    onWaiting: e.onWaiting,
    onLoadedData: e.onLoadedData
  }, e.children);
}
var h = (0, u.forwardRef)(m);
exports.default = h;