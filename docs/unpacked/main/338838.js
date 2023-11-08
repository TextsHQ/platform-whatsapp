var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    onLoadedMetadata: t,
    startTime: n,
    disableContextMenu: a,
    autoPlay: r,
    msg: g,
    refVideo: _
  } = e;
  const y = (0, h.useModelValues)(e.mediaData, ["mediaBlob", "streamable"]);
  const C = y.mediaBlob;
  const b = (0, m.default)(() => Boolean(C));
  const M = (0, p.useRef)(null);
  const S = (0, p.useRef)();
  const T = (0, p.useRef)();
  const w = (0, p.useRef)(0);
  const A = () => {
    if (T.current !== undefined) {
      self.clearInterval(T.current);
      w.current = 0;
      T.current = undefined;
    }
  };
  const P = () => {
    A();
  };
  const O = () => {
    if (c.Socket.state !== s.SOCKET_STATE.CONNECTED) {
      return;
    }
    w.current++;
    const e = M.current;
    const t = e == null ? undefined : e.buffered;
    if ((t == null ? undefined : t.length) && t.end(0) > 0) {
      P();
    } else if (w.current > 240) {
      A();
    }
  };
  const k = () => {
    var e;
    const t = M.current;
    if (!((e = S.current) === null || e === undefined)) {
      e.call(S);
    }
    if (t != null) {
      S.current = u.MainAudioChannel.registerMedia(t);
    }
  };
  const D = () => {
    w.current = 0;
    if (T.current === undefined) {
      T.current = self.setInterval(O, 250);
    }
  };
  (0, p.useEffect)(() => {
    (() => {
      const e = M.current;
      if (e) {
        const {
          volume: t,
          muted: n
        } = (0, f.getMediaVolumeSettings)();
        if (t != null) {
          e.volume = t;
        }
        e.muted = n;
        if (v() && r === true) {
          D();
        }
      }
    })();
    k();
    if (!(_ == null)) {
      _(M);
    }
    const e = M.current;
    return () => {
      var t;
      var n;
      var a;
      if (!((t = S.current) === null || t === undefined)) {
        t.call(S);
      }
      E.flush();
      A();
      if (!((n = M.current) === null || n === undefined || (a = n.pause) === null || a === undefined)) {
        a.call(n);
      }
      if (d.UA.isBlink && e) {
        (0, o.default)(e);
      }
    };
  }, []);
  const I = () => {
    const e = M.current;
    if (n != null && n !== 0 && e) {
      e.currentTime = n;
    }
  };
  let R;
  (0, p.useEffect)(() => {
    k();
    I();
    if (!(_ == null)) {
      _(M);
    }
  });
  const N = y.streamable && y.isStreamable();
  if ((b.current || !N) && C instanceof l.default) {
    R = C.url();
  } else {
    if (!y.streamable || !y.isStreamable()) {
      return null;
    }
    R = `${i.VIDEO_STREAM_URL}?key=${g.id.toString()}`;
  }
  const x = v() && e.autoPlay !== true ? D : undefined;
  return p.default.createElement("video", {
    ref: M,
    src: R,
    poster: e.poster,
    className: e.className,
    controls: e.controls,
    autoPlay: e.autoPlay,
    onClick: e.onClick,
    onDoubleClick: e.onDoubleClick,
    onVolumeChange: () => {
      const e = M.current;
      if (e) {
        E(e.volume, e.muted);
      }
    },
    onLoadedMetadata: e => {
      I();
      if (!(t == null)) {
        t(e);
      }
    },
    onPlay: x,
    onPlaying: P,
    onError: A,
    onContextMenu: e => {
      if (a) {
        e.preventDefault();
      }
    }
  }, e.children);
};
var r = a(require("../vendor/23279.js"));
var o = a(require("./233227.js"));
var l = a(require("../app/756680.js"));
var i = require("./511016.js");
var u = require("../app/513681.js");
var s = require("../app/226562.js");
var c = require("../app/38878.js");
var d = require("../app/368170.js");
var f = require("../app/757453.js");
var p = function (e, t) {
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
var m = a(require("../app/637660.js"));
var h = require("../app/655241.js");
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
const E = (0, r.default)((e, t) => {
  (0, f.setMediaVolumeSettings)(e, t);
}, 500);
function v() {
  return d.UA.isGecko || d.UA.isSafari;
}