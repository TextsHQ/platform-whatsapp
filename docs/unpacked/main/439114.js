var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/396574.js");
var o = a(require("./233227.js"));
var l = require("../app/513681.js");
var i = require("../app/368170.js");
var u = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = p(t);
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
var s = a(require("../app/156720.js"));
var c = a(require("../app/637660.js"));
var d = require("../app/808446.js");
var f = a(require("../app/558532.js"));
function p(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (p = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const m = {
  display: "f804f6gw",
  width: "ln8gz9je",
  height: "ppled2lx"
};
const h = (0, u.forwardRef)((e, t) => {
  const {
    srcObject: n,
    src: a,
    autoPlay: p,
    muted: h,
    loop: g = false,
    controls: E = false,
    xstyle: v,
    onEnded: _,
    onPlay: y,
    onLoadedMetadata: C,
    onLoop: b,
    onAudioChannelRelease: M
  } = e;
  const S = (0, u.useRef)(null);
  const [T, w] = (0, u.useState)(false);
  const [A, P] = (0, u.useState)(null);
  (0, f.default)(() => {
    var e;
    if (!((e = S.current) === null || e === undefined)) {
      e.call(S);
    }
    if (i.UA.isBlink && A) {
      (0, o.default)(A);
    }
  });
  const O = () => A;
  const k = () => {
    if (A == null ? undefined : A.paused) {
      A.play().catch(() => {});
    }
  };
  const D = () => {
    if (A) {
      A.currentTime = 0;
      if (!A.paused) {
        A.pause();
      }
    }
  };
  const I = () => A == null ? undefined : A.duration;
  const R = () => A == null ? undefined : A.currentTime;
  (0, u.useImperativeHandle)(t, () => ({
    underlyingVideo: O,
    play: k,
    pauseAndReset: D,
    getDuration: I,
    getCurrentTime: R
  }));
  const N = (0, c.default)(() => Symbol("audio-channel"));
  const x = M != null ? M : () => {
    if (E) {
      if (!(A == null)) {
        A.pause();
      }
    }
  };
  const L = () => {
    S.current = l.MainAudioChannel.claim(N.current, x);
  };
  (0, u.useEffect)(() => {
    if (A) {
      if ("srcObject" in A && n) {
        A.srcObject = n;
      } else if (a) {
        A.src = a;
      }
    }
    if (p === true) {
      if (!(A == null)) {
        A.play().catch(() => {});
      }
    }
  }, [A]);
  (0, d.useListener)(A, "playing", () => {
    if (A) {
      if (h !== true) {
        L();
      }
      if (!(A.videoHeight && A.videoWidth || T)) {
        w(true);
        A.pause();
        A.play().catch(() => {});
        __LOG__(4, undefined, new Error(), true, ["non-sad"])`Neither the height nor the width of video should have zero value`;
        SEND_LOGS("non-zero height and width", 1, "non-sad");
      }
      if (A.videoHeight && A.videoWidth && y) {
        y(A);
        w(false);
      }
    }
  });
  (0, d.useListener)(A, "pause", () => {
    var e;
    if (!((e = S.current) === null || e === undefined)) {
      e.call(S);
    }
  });
  (0, d.useListener)(A, "volumechange", () => {
    if (A) {
      if (!A.muted) {
        L();
      }
    }
  });
  const j = (0, u.useCallback)(() => {
    if (g) {
      if (!(A == null)) {
        A.play().catch(() => {});
      }
      if (!(b == null)) {
        b();
      }
    } else if (!(_ == null)) {
      _();
    }
  }, [g, A, _, b]);
  return u.default.createElement("video", {
    ref: P,
    className: (0, r.classnamesConvertMeToStylexPlease)((0, s.default)(m, v), e.className),
    muted: e.muted,
    controls: e.controls,
    controlsList: e.controlsList,
    width: e.width,
    height: e.height,
    onClick: e.onClick,
    onEnded: j,
    onLoadedMetadata: e => {
      if (!(C == null)) {
        C(e);
      }
    },
    onLoadedData: e.onLoadedData,
    style: e.style
  }, e.children);
});
h.displayName = "Video";
var g = h;
exports.default = g;