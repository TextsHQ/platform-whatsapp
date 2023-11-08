var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayerState = undefined;
exports.YouTube = function (e) {
  const {
    onReady: t = () => {},
    onError: n = () => {},
    onStateChange: a = () => {},
    onEnd: c = () => {},
    onPlay: p = () => {},
    onPause: m = () => {},
    onPlaybackRateChange: h = () => {},
    onPlaybackQualityChange: g = () => {},
    opts: E = {
      playerVars: {}
    },
    videoId: v,
    id: _ = null,
    className: y = null,
    containerClassName: C = ""
  } = e;
  const b = (0, u.useRef)(null);
  const M = (0, u.useRef)(null);
  const S = (0, u.useRef)([]);
  const T = (0, u.useRef)(e);
  const w = (0, u.useCallback)(e => t(e), [t]);
  const A = (0, u.useCallback)(e => n(e), [n]);
  const P = (0, u.useCallback)(e => {
    a(e);
    switch (e.data) {
      case f.ENDED:
        c(e);
        break;
      case f.PLAYING:
        p(e);
        break;
      case f.PAUSED:
        m(e);
    }
  }, [c, m, p, a]);
  const O = (0, u.useCallback)(e => h(e), [h]);
  const k = (0, u.useCallback)(e => g(e), [g]);
  const D = (0, u.useCallback)(() => {
    var e;
    var t;
    var n;
    var a;
    const r = (0, o.default)((0, o.default)({}, E), {}, {
      videoId: v
    });
    M.current = (0, s.default)(b.current, r);
    S.current.push(M.current.on("ready", w), (e = M.current) === null || e === undefined ? undefined : e.on("error", A), (t = M.current) === null || t === undefined ? undefined : t.on("stateChange", P), (n = M.current) === null || n === undefined ? undefined : n.on("playbackRateChange", O), (a = M.current) === null || a === undefined ? undefined : a.on("playbackQualityChange", k));
  }, [A, k, O, w, P, E, v]);
  (0, u.useEffect)(() => {
    D();
    return () => {
      var e;
      S.current.filter(Boolean).forEach(e => {
        var t;
        if (!((t = M.current) === null || t === undefined)) {
          t.off(e);
        }
      });
      if (!((e = M.current) === null || e === undefined)) {
        e.destroy();
      }
    };
  }, []);
  const I = (0, u.useCallback)(() => {
    var e;
    var t;
    if ((e = (t = M.current) === null || t === undefined ? undefined : t.destroy().then(D)) !== null && e !== undefined) {
      return e;
    } else {
      return Promise.resolve();
    }
  }, [D]);
  const R = (0, u.useCallback)((0, r.default)(function* () {
    var e;
    const t = yield (e = M.current) === null || e === undefined ? undefined : e.getIframe();
    if (_) {
      if (!(t == null)) {
        t.setAttribute("id", _);
      }
    } else if (!(t == null)) {
      t.removeAttribute("id");
    }
    if (y) {
      if (!(t == null)) {
        t.setAttribute("class", y);
      }
    } else if (!(t == null)) {
      t.removeAttribute("class");
    }
  }), [y, _]);
  const N = (0, u.useCallback)(() => {
    var e;
    var t;
    if (v == null) {
      return void ((t = M.current) === null || t === undefined || t.stopVideo());
    }
    let n;
    let a;
    let r = false;
    if ("playerVars" in E) {
      r = E.playerVars.autoplay === 1;
      if ("start" in E.playerVars) {
        n = E.playerVars.start;
      }
      if ("end" in E.playerVars) {
        a = E.playerVars.end;
      }
    }
    const o = {
      videoId: v,
      startSeconds: n,
      endSeconds: a
    };
    var l;
    if (r) {
      if (!((l = M.current) === null || l === undefined)) {
        l.loadVideoById(o);
      }
    } else if (!((e = M.current) === null || e === undefined)) {
      e.cueVideoById(o);
    }
  }, [E, v]);
  (0, u.useEffect)(() => {
    const t = T.current;
    if (function (e, t) {
      return e.id === t.id || e.className === t.className;
    }(t, e)) {
      R();
    }
    if (function (e, t) {
      return !(0, l.default)(d(e == null ? undefined : e.opts), d(t == null ? undefined : t.opts));
    }(t, e)) {
      I();
    }
    if (function (e, t) {
      var n;
      var a;
      if (e.videoId !== t.videoId) {
        return true;
      }
      const r = ((n = e.opts) === null || n === undefined ? undefined : n.playerVars) || {};
      const o = ((a = t.opts) === null || a === undefined ? undefined : a.playerVars) || {};
      return r.start !== o.start || r.end !== o.end;
    }(t, e)) {
      N();
    }
    T.current = e;
  }, [e, I, R, N]);
  (0, i.useTsNavigation)({
    surface: "youtube-player"
  });
  return u.default.createElement("span", {
    className: C
  }, u.default.createElement("div", {
    id: _,
    className: y,
    ref: b
  }));
};
var r = a(require("../vendor/348926.js"));
var o = a(require("../vendor/81109.js"));
var l = a(require("../vendor/618446.js"));
var i = require("../app/717089.js");
var u = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = c(t);
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
var s = a(require("../vendors-main/311062.js"));
function c(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (c = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function d(e) {
  return (0, o.default)((0, o.default)({}, e), {}, {
    playerVars: (0, o.default)((0, o.default)({}, e == null ? undefined : e.playerVars), {}, {
      autoplay: 0,
      start: 0,
      end: 0
    })
  });
}
const f = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5
};
exports.PlayerState = f;