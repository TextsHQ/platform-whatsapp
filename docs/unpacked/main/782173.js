var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AudioTag = function (e) {
  const {
    autoPlay: t,
    url: n,
    onError: a,
    refAudio: r,
    playbackRate: b
  } = e;
  const T = (0, E.useRef)(0);
  const w = (0, E.useRef)(null);
  const A = (0, E.useRef)(null);
  const [P] = (0, C.useMsgValues)(e.msg.id, [c.getIsSentByMe]);
  const O = () => {
    var e;
    const t = w.current;
    if (!((e = A.current) === null || e === undefined)) {
      e.call(A);
    }
    A.current = t == null ? null : d.MainAudioChannel.registerMedia(t);
  };
  const k = e => {
    N();
    if (!(a == null)) {
      a(e.target.src);
    }
  };
  const D = () => {
    N();
  };
  const [I, R] = (0, _.default)(() => {
    if (m.Socket.state !== p.SOCKET_STATE.CONNECTED) {
      return;
    }
    T.current++;
    if (T.current > 40) {
      return void k({
        target: {
          src: n,
          error: {
            code: window.MediaError.MEDIA_ERR_NETWORK
          }
        }
      });
    }
    const e = (0, o.default)(w.current, "audioRef.current").buffered;
    if (e.length && e.end(0) > 0) {
      D();
    }
  }, 250);
  function N() {
    R();
    T.current = 0;
  }
  const x = () => {
    T.current = 0;
    I();
  };
  (0, E.useEffect)(() => {
    O();
    (() => {
      const e = w.current;
      if (!(!e || e.defaultPlaybackRate === b && e.playbackRate === b)) {
        e.defaultPlaybackRate = e.playbackRate = b != null ? b : 1;
      }
    })();
    if (!(r == null)) {
      r(w);
    }
  });
  (0, y.useListener)(w.current, "error", k, {
    capture: true
  });
  (0, y.useListener)(w.current, "playing", D);
  (0, E.useEffect)(() => {
    (() => {
      const e = w.current;
      if (e) {
        const t = (0, g.getMediaVolumeSettings)();
        const {
          volume: n,
          muted: a
        } = t;
        if (n != null) {
          e.volume = n;
        }
        e.muted = a;
      }
    })();
    O();
    if (!(r == null)) {
      r(w);
    }
    const e = w.current;
    if ((h.UA.isGecko || h.UA.isSafari) && (t || t)) {
      x();
    }
    return () => {
      var t;
      if (!((t = A.current) === null || t === undefined)) {
        t.call(A);
      }
      S.flush();
      if (h.UA.isBlink && e) {
        (0, u.default)(e);
      }
    };
  }, []);
  (0, y.useListener)(!h.UA.isGecko && !h.UA.isSafari || t ? null : w.current, "play", x);
  const L = (0, s.getDisplayType)(e.msg);
  return E.default.createElement("div", {
    className: e.className
  }, E.default.createElement("audio", {
    ref: w,
    className: (0, v.default)(M),
    src: e.url,
    onClick: e.onClick,
    controls: e.controls,
    preload: e.preload,
    onVolumeChange: () => {
      const e = w.current;
      if (e) {
        S(e.volume, e.muted);
      }
    },
    autoPlay: e.autoPlay
  }, e.children), E.default.createElement(l.default, {
    isOutgoingMsg: P,
    displayType: L,
    bubbleType: i.AddOnBubbleType.MEDIA_VIEWER
  }, E.default.createElement(f.ReactionBubbleContainer, {
    msgIds: [e.msg.id.toString()],
    isOutgoingMsg: P,
    displayType: L,
    reactionBubbleType: i.AddOnBubbleType.MEDIA_VIEWER
  })));
};
var r = a(require("../vendor/23279.js"));
var o = a(require("../app/670983.js"));
var l = a(require("./190643.js"));
var i = require("./980518.js");
var u = a(require("./233227.js"));
var s = require("./845582.js");
var c = require("../app/787742.js");
var d = require("../app/513681.js");
var f = require("./541345.js");
var p = require("../app/226562.js");
var m = require("../app/38878.js");
var h = require("../app/368170.js");
var g = require("../app/757453.js");
var E = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = b(t);
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
var v = a(require("../app/156720.js"));
var _ = a(require("../app/10617.js"));
var y = require("../app/808446.js");
var C = require("./871210.js");
function b(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (b = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const M = {
  width: "ln8gz9je"
};
const S = (0, r.default)((e, t) => {
  (0, g.setMediaVolumeSettings)(e, t);
}, 500);