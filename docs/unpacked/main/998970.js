var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    recordingSession: t,
    onComplete: n
  } = e;
  const a = (0, _.useRef)();
  const [l, w] = (0, _.useState)(() => {
    switch (t.state) {
      case u.RecordingSessionState.PAUSED:
        return A.PREVIEW;
      case u.RecordingSessionState.RECORDING:
        return A.RECORDER;
      default:
        throw (0, v.default)(`Invalid recording session state: ${t.state}`);
    }
  });
  const [R, B] = (0, _.useState)(() => l === A.PREVIEW ? t.getAudioForPlayback() : null);
  (0, _.useEffect)(() => {
    if (R != null) {
      return (0, m.attachPttPlayTimeSpentLogger)(R.getAudio());
    }
  }, [R]);
  const F = () => {
    B(null);
    if (!(R == null)) {
      R.dispose();
    }
  };
  const G = R == null ? undefined : R.getAudio();
  const U = (0, _.useRef)();
  const W = (0, _.useRef)();
  const H = (0, _.useRef)(t);
  H.current = t;
  const V = (0, C.default)(t, "change:duration", () => Math.floor(t.duration));
  const [q, Y] = (0, _.useState)(() => Math.floor((G == null ? undefined : G.currentTime) || 0));
  const [z, K] = (0, _.useState)(() => ((G == null ? undefined : G.currentTime) || 0) === 0);
  const Q = e => {
    Y(Math.floor(e));
    K(e === 0);
  };
  (0, b.useListener)(G, "timeupdate", () => {
    var e;
    Q((e = G == null ? undefined : G.currentTime) !== null && e !== undefined ? e : 0);
  });
  const [X, Z] = (0, _.useState)(null);
  const {
    exceedsMinDuration: J,
    isRecording: $
  } = (0, M.useModelValues)(t, ["exceedsMinDuration", "isRecording"]);
  (0, b.useListener)(t, "change:state", () => {
    if (!(t.state !== u.RecordingSessionState.STOPPED && t.state !== u.RecordingSessionState.ERROR)) {
      n();
    }
  });
  const ee = (0, C.default)(G, ["play", "pause"], () => G != null && !G.paused);
  const te = function () {
    const [e, t] = (0, _.useState)(false);
    (0, _.useEffect)(() => {
      const e = self.setTimeout(() => {
        t(true);
      }, 250);
      const n = () => {
        t(false);
        a();
      };
      window.addEventListener("mouseup", n);
      const a = () => {
        window.removeEventListener("mouseup", n);
        self.clearTimeout(e);
      };
      return a;
    }, []);
    return e;
  }();
  (0, _.useEffect)(() => {
    if ($) {
      self.setTimeout(() => {
        var e;
        if (!((e = U.current) === null || e === undefined)) {
          e.focus();
        }
      }, 100);
    }
  }, [$]);
  (0, _.useEffect)(() => {
    if (l === A.PREVIEW) {
      H.current.markDraftPreviewSeen();
      self.setTimeout(() => {
        var e;
        if (!((e = W.current) === null || e === undefined)) {
          e.focus();
        }
      }, 100);
    }
  }, [l]);
  (0, S.default)(() => {
    if (!(G == null)) {
      G.pause();
    }
    F();
    t.pause();
  });
  (0, b.useListener)(t, "change:isRecording", () => {
    if (t.isRecording) {
      return;
    }
    if (t.state !== u.RecordingSessionState.PAUSED) {
      return;
    }
    F();
    const e = t.getAudioForPlayback();
    B(e);
    Q(0);
    w(A.PREVIEW);
  });
  const ne = () => {
    t.incrementPauseButtonCount();
    t.pause();
  };
  const ae = () => {
    t.incrementPauseButtonCount();
    t.pause();
  };
  const re = () => {
    (0, r.default)(function* () {
      if (!(G == null)) {
        G.pause();
      }
      w(A.RECORDER);
      if (!(yield t.resume())) {
        w(A.PREVIEW);
      }
    })();
  };
  (0, b.useListener)(G, "ended", () => {
    (0, o.default)(G, "audio").load();
  });
  const oe = (0, _.useCallback)(() => {
    var e;
    if ((e = G == null ? undefined : G.currentTime) !== null && e !== undefined) {
      return e;
    } else {
      return 0;
    }
  }, [G]);
  const le = (0, T.default)(() => t.getPreciseDuration());
  const ie = (0, T.default)(() => t.duration);
  const ue = (0, T.default)(() => t.getLiveWaveformSamples());
  const se = (0, T.default)(() => t.getCorrectedWaveformSamples());
  const ce = (0, T.default)(e => {
    Q(e);
    Z(null);
    (0, o.default)(G, "audio").currentTime = e;
    t.incrementDraftSeekCount();
  });
  const de = (0, T.default)(e => {
    Z(Math.floor(e));
  });
  let fe;
  let pe;
  if (h.ServerProps.pttPausableEnabled) {
    pe = _.default.createElement("div", {
      className: (0, y.default)(k)
    }, _.default.createElement(c.PttPauseAndResumeRecordingButton, {
      recording: l === A.RECORDER,
      confirmOnMouseUp: te,
      onConfirm: l === A.RECORDER ? ae : re
    }));
  } else {
    fe = _.default.createElement("div", {
      className: (0, y.default)(k)
    }, _.default.createElement(p.PttStopButton, {
      confirmOnMouseUp: te,
      onConfirm: ne
    }));
  }
  const me = _.default.createElement("div", {
    className: (0, y.default)(D)
  }, _.default.createElement(j, {
    time: V
  }), _.default.createElement("div", {
    className: (0, y.default)(N, x)
  }, _.default.createElement(s.Waveform, {
    location: s.WaveformLocation.DRAFT_PREVIEW,
    sampleRate: t.getWaveformSampleRate(),
    getSamples: ue,
    getCurrentTime: oe,
    getDuration: le,
    live: $,
    mode: s.WaveformMode.RECORDER,
    onSeek: de,
    onSeekEnd: ce,
    tabIndex: g.TAB_ORDER.PTT_BUTTON
  })), fe);
  const he = X != null ? X : z ? V : q;
  const ge = _.default.createElement("div", {
    className: (0, y.default)(I)
  }, _.default.createElement(d.PttPlayPauseButton, {
    ref: W,
    theme: "compose-box",
    paused: !ee,
    onConfirm: () => {
      const e = (0, o.default)(G, "audio");
      if (e.paused) {
        e.play();
        t.incrementDraftPlayCount();
      } else {
        e.pause();
      }
    }
  }), _.default.createElement("div", {
    className: (0, y.default)(N, L)
  }, _.default.createElement(s.Waveform, {
    location: s.WaveformLocation.DRAFT_PREVIEW,
    sampleRate: t.getWaveformSampleRate(),
    getSamples: se,
    getCurrentTime: oe,
    getDuration: ie,
    live: ee,
    mode: s.WaveformMode.PREVIEW,
    onSeek: de,
    onSeekEnd: ce,
    tabIndex: g.TAB_ORDER.PTT_BUTTON
  })), _.default.createElement(j, {
    time: he
  }));
  return _.default.createElement("div", {
    ref: a,
    className: (0, y.default)(P)
  }, _.default.createElement(i.PttCancelButton, {
    ref: U,
    confirmOnMouseUp: te,
    onConfirm: () => {
      t.stop(u.RecordingSessionStopReason.CANCEL_BUTTON);
    }
  }), _.default.createElement("div", {
    className: (0, y.default)(O)
  }, _.default.createElement(E.default, {
    transitionName: "fade"
  }, l === A.RECORDER ? me : null, l === A.PREVIEW ? ge : null)), pe, _.default.createElement(f.PttSendButton, {
    disabled: !J,
    confirmOnMouseUp: te,
    onConfirm: () => {
      t.send();
    }
  }));
};
var r = a(require("../vendor/348926.js"));
var o = a(require("../app/670983.js"));
var l = require("../app/63014.js");
var i = require("./806218.js");
var u = require("./758721.js");
var s = require("./594035.js");
var c = require("./750267.js");
var d = require("./923425.js");
var f = require("./431457.js");
var p = require("./331336.js");
var m = require("./623799.js");
var h = require("../app/937001.js");
var g = require("../main-chunk/931109.js");
var E = a(require("../app/844453.js"));
var v = a(require("../app/556869.js"));
var _ = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = w(t);
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
var y = a(require("../app/156720.js"));
var C = a(require("../app/524578.js"));
var b = require("../app/808446.js");
var M = require("../app/655241.js");
var S = a(require("../app/558532.js"));
var T = a(require("../app/17533.js"));
function w(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (w = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const A = require("../vendor/76672.js").Mirrored(["RECORDER", "PREVIEW"]);
const P = {
  display: "p357zi0d",
  alignItems: "gndfcl4n",
  width: "ln8gz9je",
  maxWidth: "ba1bgrqy"
};
const O = {
  position: "g0rxnol2",
  display: "p357zi0d",
  flexGrow: "ggj6brxn",
  flexShrink: "m0h2a7mj",
  flexBasis: "rjo8vgbg",
  alignItems: "gndfcl4n",
  height: "db4qzak4"
};
const k = {
  display: "p357zi0d",
  marginEnd: "oz083wsx"
};
const D = {
  position: "lhggkp7q",
  top: "qq0sjtgm",
  end: "ebjesfe0",
  bottom: "jxacihee",
  start: "tkdu00h0",
  display: "p357zi0d",
  alignItems: "gndfcl4n",
  marginStart: "g9zvcdbd"
};
const I = {
  position: "lhggkp7q",
  top: "qq0sjtgm",
  end: "ebjesfe0",
  bottom: "jxacihee",
  start: "tkdu00h0",
  display: "p357zi0d",
  alignItems: "gndfcl4n",
  marginEnd: "oz083wsx",
  marginStart: "tigrmefi",
  backgroundColor: "lbzzw5jd",
  borderTop: "b16c6ymn",
  borderEnd: "q1alctvk",
  borderBottom: "at9xyjjq",
  borderStart: "q568nw76",
  borderTopStartRadius: "tt8exp03",
  borderTopEndRadius: "jdimvq34",
  borderBottomEndRadius: "nnr224yo",
  borderBottomStartRadius: "g0zx2qg0",
  direction: "btzd6xh9",
  paddingEnd: "mqoznopa",
  paddingStart: "nntdgyy8"
};
const R = {
  minWidth: "rgvqn4sm",
  fontSize: "p9fp32ui"
};
const N = {
  display: "p357zi0d",
  flexGrow: "ggj6brxn",
  flexShrink: "m0h2a7mj",
  flexBasis: "rjo8vgbg",
  height: "stnyektq"
};
const x = {
  marginEnd: "spjzgwxb",
  marginStart: "qnz2jpws"
};
const L = {
  marginEnd: "q471nw87",
  marginStart: "a3oefunm"
};
function j(e) {
  return _.default.createElement("div", {
    className: (0, y.default)(R),
    role: "timer"
  }, l.Clock.durationStr(e.time));
}