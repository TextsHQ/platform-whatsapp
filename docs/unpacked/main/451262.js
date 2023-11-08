var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AudioPlayerFrame = j;
exports.WrappedAudioPlayer = undefined;
var r = a(require("../vendor/348926.js"));
var o = require("../app/898817.js");
var l = require("./464520.js");
var i = require("./360038.js");
var u = require("./318983.js");
var s = require("../app/396574.js");
var c = require("../app/63014.js");
var d = require("../app/356097.js");
var f = require("./615586.js");
var p = a(require("../app/845294.js"));
var m = require("../app/163755.js");
var h = require("../app/368156.js");
var g = a(require("../app/932325.js"));
var E = a(require("./725703.js"));
var v = require("./606993.js");
var _ = require("./515611.js");
var y = require("./216588.js");
var C = require("./499154.js");
var b = require("./31078.js");
var M = require("./491320.js");
var S = require("../app/937001.js");
var T = require("../vendor/548360.js");
var w = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = R(t);
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
var A = a(require("./805956.js"));
var P = require("../app/808446.js");
var O = require("../app/655241.js");
var k = require("./871210.js");
var D = a(require("../app/558532.js"));
var I = require("./884561.js");
function R(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (R = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function N(e, t) {
  var n;
  const {
    displayType: a,
    msg: l,
    outgoingMsg: c,
    played: d,
    mediaData: f
  } = e;
  const [g, y] = (0, k.useMsgValues)(l.id, [m.getAsPttLike, m.getAsPtt]);
  const C = (0, O.useModelValues)((n = e.pttPrefs) !== null && n !== undefined ? n : M.PttPrefs, ["playbackRate"]);
  const {
    playbackRate: R
  } = C;
  const N = (0, I.usePlaybackSendViewCount)(e.msg.id, {
    mediaData: f
  });
  const x = (0, w.useRef)(R);
  const F = (0, w.useRef)(0);
  const G = (0, w.useRef)(null);
  const [U, W] = (0, w.useState)(() => b.MsgAudioStore.acquireAudio(l));
  const [H, V] = (0, w.useState)(l);
  if (H !== l) {
    V(l);
    W(e => {
      const t = b.MsgAudioStore.acquireAudio(l);
      e.dispose();
      return t;
    });
  }
  const {
    audio: q,
    pttPlaybackLogger: Y
  } = U;
  const [z, K] = (0, w.useState)(() => (0, v.getDurationFromMediaOrProtobuf)(q, f));
  const [Q, X] = (0, w.useState)(!q.paused);
  const [Z, J] = (0, w.useState)(null);
  const [$, ee] = (0, w.useState)(z > 0 ? q.currentTime / z : 0);
  const te = (e, t) => {
    ee(t > 0 ? e / t : 0);
  };
  const ne = (0, w.useRef)(false);
  const ae = () => $ * z;
  const re = () => {
    if (ne.current) {
      return;
    }
    const {
      currentTime: e
    } = q;
    N(e);
    if (e !== ae()) {
      te(e, z);
    }
  };
  (0, A.default)(re, {
    active: Q
  });
  (0, D.default)(() => {
    if (!(S.ServerProps.pttOotPlayback && M.PttPrefs.outOfChatPlayerMessage)) {
      Y.commit(true);
      q.pause();
    }
    if (q.paused) {
      M.PttPrefs.clearOutOfChatMessage(l);
    }
    U.dispose();
  });
  const oe = function () {
    var e = (0, r.default)(function* () {
      if (ne.current) {
        return;
      }
      ne.current = true;
      const e = g == null ? 1 : R;
      q.playbackRate = e;
      q.defaultPlaybackRate = e;
      let t = (0, _.getSafeDuration)(q);
      if (t == null) {
        const e = (0, p.default)(q, "durationchange");
        q.load();
        yield e;
        t = (0, v.getDurationFromMediaOrProtobuf)(q, f);
      }
      q.currentTime = $ * t;
      q.play().catch((0, o.catchAbort)(() => {}));
      ne.current = false;
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  const le = () => {
    if (G.current) {
      F.current = G.current.getBoundingClientRect().top;
    }
    if (Q) {
      q.pause();
    } else {
      oe();
    }
  };
  (0, w.useEffect)(() => {
    const e = x.current;
    if (R !== e) {
      q.playbackRate = R;
      q.defaultPlaybackRate = R;
      x.current = R;
    }
  }, [q, R]);
  (0, P.useListener)(q, "playing", () => {
    X(!q.paused);
  });
  (0, P.useListener)(q, "pause", () => {
    M.PttPrefs.clearOutOfChatMessage();
    X(!q.paused);
  });
  (0, P.useListener)(q, "ended", () => {
    q.currentTime = 0;
    q.load();
    re();
    M.PttPrefs.clearOutOfChatMessage();
    X(!q.paused);
  });
  (0, P.useListener)(q, "timeupdate", re);
  (0, P.useListener)(q, "durationchange", () => {
    const e = (0, _.getSafeDuration)(q);
    const t = z != null ? z : (0, v.getDurationFromProto)(f);
    if (e != null && e !== t) {
      K(e);
    }
  });
  const ie = e => {
    e.preventDefault();
    le();
  };
  (0, w.useImperativeHandle)(t, () => ({
    handleKeyActivation: ie
  }));
  const ue = Q ? w.default.createElement(i.AudioPauseIcon, null) : w.default.createElement(u.AudioPlayIcon, null);
  const se = Q ? T.fbt._("Pause voice message", null, {
    hk: "4aYHr6"
  }) : T.fbt._("Play voice message", null, {
    hk: "1IoAqS"
  });
  const ce = (0, s.classnamesConvertMeToStylexPlease)({
    [E.default.outgoing]: c,
    [E.default.incoming]: !c,
    [E.default.conversationWaveformEnabled]: S.ServerProps.pttConversationWaveform,
    [E.default.button]: true
  });
  const de = w.default.createElement("button", {
    className: ce,
    onClick: le,
    onKeyDown: e => {
      if (!(e.key !== h.KEYBOARD_EVENT_KEY_VALUE.ENTER && e.key !== h.KEYBOARD_EVENT_KEY_VALUE.SPACE)) {
        e.preventDefault();
        e.stopPropagation();
        le();
      }
    },
    "aria-label": se
  }, ue);
  const fe = w.default.createElement("div", {
    ref: G,
    className: E.default.scrollPositionDetector
  });
  return w.default.createElement(j, {
    button: de,
    played: d,
    outgoingMsg: c,
    displayType: a,
    msg: y
  }, fe, w.default.createElement(L, {
    duration: Q ? ae() : (0, v.getDurationFromProto)(f),
    seekingTime: Z
  }), w.default.createElement(B, {
    msg: l,
    currentTime: ae(),
    duration: z,
    onSeek: e => {
      J(e);
    },
    onSeekEnd: e => {
      const {
        duration: t
      } = q;
      const n = e !== t || Q ? e : 0;
      te(n, z);
      q.currentTime = n;
      J(null);
    },
    outgoing: c,
    played: d != null && d,
    waveform: f.waveform
  }));
}
const x = (0, w.forwardRef)(N);
function L(e) {
  let {
    duration: t,
    seekingTime: n
  } = e;
  const a = n != null ? n : t;
  if (a == null) {
    return null;
  } else {
    return w.default.createElement("div", {
      className: E.default.metadata,
      "aria-hidden": true
    }, c.Clock.durationStr(a));
  }
}
function j(e) {
  var t;
  var n;
  var a;
  const r = e.spinner === true && e.button == null ? w.default.createElement("button", {
    className: E.default.button,
    onClick: e.action,
    "aria-label": e.ariaLabel
  }, w.default.createElement("div", {
    className: E.default.spinner
  }, w.default.createElement(f.Pending, {
    outgoingMsg: e.outgoingMsg,
    canCancel: e.canCancel
  }))) : null;
  const o = e.icon != null && e.button == null && e.spinner !== true ? w.default.createElement("button", {
    className: E.default.button,
    onClick: e.action,
    "aria-label": e.ariaLabel
  }, e.icon) : null;
  const {
    fileSize: i
  } = e;
  const u = i != null && i !== 0 ? w.default.createElement("div", {
    className: E.default.metadata
  }, g.default.filesize(i)) : null;
  const c = (0, s.classnamesConvertMeToStylexPlease)({
    [E.default.isGallery]: e.displayType === d.DISPLAY_TYPE.STARRED_MSGS || e.displayType === d.DISPLAY_TYPE.GALLERY,
    [E.default.audio]: true
  });
  return w.default.createElement("div", {
    className: c
  }, w.default.createElement("div", {
    className: E.default.controls
  }, e.button, r, o), w.default.createElement("div", {
    className: E.default.body
  }, w.default.createElement(l.InvisibleLabel, null, T.fbt._("Voice message", null, {
    hk: "1ac0rl"
  })), (t = e.children) !== null && t !== undefined ? t : w.default.createElement(B, {
    msg: e.msg,
    currentTime: 0,
    duration: 100,
    onSeek: () => {},
    onSeekEnd: () => {},
    outgoing: e.outgoingMsg,
    played: (n = e.played) !== null && n !== undefined && n,
    waveform: (a = e.msg) === null || a === undefined ? undefined : a.mediaData.waveform,
    disabled: true
  }), u));
}
function B(e) {
  let {
    msg: t,
    currentTime: n,
    duration: a,
    onSeek: r,
    onSeekEnd: o,
    outgoing: l,
    played: i,
    waveform: u,
    disabled: s
  } = e;
  (0, O.useOptionalModelValues)(t, ["type", "waveform", "mimetype"]);
  const c = t != null && !!(0, m.getAsPttLike)(t);
  if (S.ServerProps.pttConversationWaveform && c && u != null) {
    return w.default.createElement(C.MsgWaveform, {
      currentTime: n,
      duration: a,
      onSeek: r,
      onSeekEnd: o,
      outgoing: l,
      played: i,
      waveform: u,
      disabled: s,
      skipThumb: s
    });
  } else {
    return w.default.createElement(y.SeekBar, {
      currentTime: n,
      duration: a,
      onSeek: r,
      onCommit: o,
      outgoing: l,
      played: i,
      disabled: s
    });
  }
}
exports.WrappedAudioPlayer = x;
x.displayName = "WrappedAudioPlayer";