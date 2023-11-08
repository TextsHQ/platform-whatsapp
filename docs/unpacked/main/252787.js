var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OutOfChatPlayer = function () {
  const {
    outOfChatPlayerMessage: e
  } = (0, D.useModelValues)(_.PttPrefs, ["outOfChatPlayerMessage"]);
  const t = (0, C.useMsgAudioPlaybackController)(e);
  if (e && t) {
    return w.default.createElement(j, {
      msg: e,
      playbackController: t,
      onPlayNext: e => {
        _.PttPrefs.outOfChatPlayerMessage = e;
      }
    });
  } else {
    return null;
  }
};
var r = a(require("../app/670983.js"));
var o = require("./808068.js");
var l = require("../app/713105.js");
var i = require("../app/396574.js");
var u = require("../app/780549.js");
var s = require("../app/23641.js");
var c = require("../app/235630.js");
var d = require("../app/163755.js");
var f = require("../app/21645.js");
var p = require("./129080.js");
var m = require("./187772.js");
var h = require("./223115.js");
var g = a(require("./817850.js"));
var E = require("./89808.js");
var v = require("./923425.js");
var _ = require("./491320.js");
var y = require("./473044.js");
var C = require("./726229.js");
var b = require("../main-chunk/931109.js");
var M = require("../app/667738.js");
var S = a(require("../app/625903.js"));
var T = a(require("../app/844453.js"));
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
var A = a(require("../app/156720.js"));
var P = a(require("./805956.js"));
var O = require("../app/808446.js");
var k = a(require("./695841.js"));
var D = require("../app/655241.js");
var I = require("./871210.js");
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
const N = {
  container: {
    position: "lhggkp7q",
    zIndex: "b9fczbqn",
    backgroundColor: "f09rd1o5",
    display: "p357zi0d",
    width: "ln8gz9je",
    height: "noboit18",
    boxShadow: "amd08ebk"
  },
  avatar: {
    marginEnd: "t9wpllip",
    width: "qssinsw9",
    height: "lniyxyh2",
    minWidth: "byvcucqk",
    display: "p357zi0d",
    justifyContent: "ac2vgrno",
    alignItems: "gndfcl4n",
    flexWrap: "lkhkxwyq",
    position: "g0rxnol2"
  },
  audioAvatar: {
    borderTopStartRadius: "ig3kka7n",
    borderTopEndRadius: "a57u14ck",
    borderBottomEndRadius: "a4bg1r4i",
    borderBottomStartRadius: "h1a3x9ys",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex"
  },
  forwardedPttAvatar: {
    backgroundColor: "k8kmlv7u"
  },
  micContainer: {
    zIndex: "mb8var44",
    position: "lhggkp7q",
    top: "a70a3vn1",
    marginTop: "tt8xd2xn",
    marginEnd: "jnwc1y2a",
    marginBottom: "mpdn4nr2",
    marginStart: "svoq16ka",
    paddingTop: "i5tg98hk",
    paddingEnd: "f9ovudaz",
    paddingBottom: "przvwfww",
    paddingStart: "gx1rr48f",
    end: "r76eoqdq"
  },
  senderContainer: {
    width: "ln8gz9je",
    height: "ppled2lx",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    display: "p357zi0d",
    justifyContent: "ac2vgrno",
    alignItems: "gndfcl4n",
    position: "g0rxnol2"
  },
  senderButton: {
    maxWidth: "laorhtua",
    height: "ppled2lx",
    display: "p357zi0d",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    justifyContent: "ac2vgrno",
    alignItems: "gndfcl4n",
    ":hover": {
      opacity: "gnd3v8n5"
    }
  },
  authorSection: {
    whiteSpace: "le5p0ye3",
    textOverflow: "kupmgzgy",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    maxWidth: "laorhtua",
    height: "ppled2lx",
    display: "p357zi0d",
    alignItems: "gndfcl4n"
  },
  senderName: {
    color: "iqn2u7bu",
    fontSize: "enbbiyaj"
  },
  buttonContainer: {
    minWidth: "f8zw8ovf",
    height: "ppled2lx",
    display: "p357zi0d",
    justifyContent: "ac2vgrno",
    alignItems: "gndfcl4n"
  },
  progressContainer: {
    width: "ln8gz9je",
    position: "lhggkp7q",
    top: "dbs0ofhi",
    height: "d9lyu8cj"
  },
  progress: {
    width: "ln8gz9je",
    height: "ppled2lx"
  },
  progressLight: {
    backgroundColor: "qpsqveag",
    opacity: "cats8p75"
  },
  progressDark: {
    backgroundColor: "qj9ovlz3",
    opacity: "ge6flnsz"
  },
  measurementContainer: {
    width: "tfi85p4o",
    height: "ppled2lx",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    position: "lhggkp7q"
  },
  measurementDiv: {
    visibility: "kojwoqec",
    position: "lhggkp7q",
    top: "p6im964z",
    start: "f88dsuqf"
  }
};
const x = g.default.outOfChat;
const L = g.default.forwardedOutOfChat;
function j(e) {
  let {
    msg: t,
    playbackController: n,
    onPlayNext: a
  } = e;
  const [o] = (0, I.useMsgValues)(t.id, [d.getAsRevoked]);
  const i = (0, d.getChat)(t.unsafe());
  const {
    audio: s,
    pttPlaybackLogger: c
  } = n;
  const f = function (e) {
    const {
      isOocPlayerClosedByUser: t
    } = (0, D.useModelValues)(_.PttPrefs, ["isOocPlayerClosedByUser"]);
    const n = (0, d.getChat)(e.unsafe());
    const {
      active: a
    } = (0, D.useModelValues)(n, ["active"]);
    return !t && !a;
  }(t);
  const [p, g] = (0, w.useState)(!s.paused);
  const E = (0, w.useRef)(false);
  const y = () => E.current = false;
  (0, w.useEffect)(() => {
    y();
  }, [t]);
  const C = () => g(!s.paused);
  (0, O.useListener)(s, "playing", () => {
    C();
  });
  (0, O.useListener)(s, "timeupdate", () => {
    C();
    if (f) {
      c.markAsPlayedInOoc();
      if (!E.current) {
        E.current = true;
        (0, h.incrementPttDailyCount)(h.PttDailyCountKind.OOC_PLAYBACK, (0, r.default)(i.kind, "chat.kind"));
      }
    }
  });
  (0, O.useListener)(s, "pause", C);
  (0, O.useListener)(s, "ended", () => {
    C();
    if (f) {
      y();
    }
  });
  (0, O.useListener)(u.Cmd, "status_viewer_open", () => {
    s.pause();
  });
  (0, O.useListener)(i, "remove", () => {
    s.pause();
    _.PttPrefs.closeOocPlayer();
  });
  (0, w.useEffect)(() => {
    if (o) {
      s.pause();
      _.PttPrefs.closeOocPlayer();
    }
  }, [o, s]);
  return w.default.createElement(T.default, {
    transitionName: "ptt-out-of-chat"
  }, f ? w.default.createElement("div", {
    className: (0, A.default)(N.container)
  }, w.default.createElement("div", {
    className: (0, A.default)(N.buttonContainer)
  }, w.default.createElement(v.PttPlayPauseButton, {
    onConfirm: e => {
      if (p) {
        s.pause();
        c.increaseOocPauseCount();
      } else {
        s.play();
      }
      e.preventDefault();
    },
    paused: !p,
    dataTab: b.TAB_ORDER.PTT_OOC_BUTTON,
    disabled: !f,
    theme: "out-of-chat-playback"
  })), w.default.createElement("div", {
    className: (0, A.default)(N.senderContainer)
  }, w.default.createElement(S.default, {
    dataTab: b.TAB_ORDER.PTT_OOC_BUTTON,
    xstyle: N.senderButton,
    onClick: e => {
      if (!e.defaultPrevented) {
        u.Cmd.openChatAt(i, (0, l.getSearchContext)(i, t.unsafe()));
        c.increaseOocClickToChatCount();
      }
    }
  }, w.default.createElement(F, {
    msg: t
  }), w.default.createElement(B, {
    author: t.senderObj,
    chat: i
  }))), w.default.createElement("div", {
    className: (0, A.default)(N.buttonContainer)
  }, w.default.createElement(m.PttCloseButton, {
    onConfirm: e => {
      s.pause();
      _.PttPrefs.closeOocPlayer();
      _.PttPrefs.setPlayingMessage(null);
      c.markAsOocClosedByUser();
      c.commit(true);
      e.preventDefault();
    },
    dataTab: b.TAB_ORDER.PTT_OOC_BUTTON,
    disabled: !f,
    theme: "out-of-chat-playback"
  })), w.default.createElement(H, {
    audio: s,
    isPlaying: p
  })) : null);
}
function B(e) {
  const {
    author: t,
    chat: n
  } = e;
  const [a, {
    width: r
  }] = (0, k.default)();
  const [o, {
    width: l
  }] = (0, k.default)();
  const i = (0, c.elevatedPushNamesM2Enabled)(n);
  const u = n.isGroup ? w.default.createElement(f.ContactAndGroupName, {
    contact: t,
    chat: n,
    elevatedPushNamesEnabled: true,
    xstyle: N.senderName
  }) : w.default.createElement(f.Name, {
    contact: t,
    useShortName: true,
    xstyle: N.senderName,
    elevatedPushNamesEnabled: i
  });
  return w.default.createElement(w.default.Fragment, null, w.default.createElement("div", {
    ref: a,
    className: (0, A.default)(N.measurementContainer)
  }, w.default.createElement("div", {
    ref: o,
    className: (0, A.default)(N.measurementDiv)
  }, u)), w.default.createElement("div", {
    className: (0, A.default)(N.authorSection)
  }, l > r ? w.default.createElement(E.OocMarquee, null, u) : u));
}
function F(e) {
  let {
    msg: t
  } = e;
  const [n] = (0, I.useMsgValues)(t.id, [d.getAsPttLike]);
  if (n) {
    return w.default.createElement(G, {
      msg: t
    });
  } else if (t.isForwarded) {
    return w.default.createElement(U, null);
  } else {
    return w.default.createElement(W, null);
  }
}
function G(e) {
  let {
    msg: t
  } = e;
  return w.default.createElement("div", {
    className: (0, A.default)(N.avatar)
  }, w.default.createElement(s.DetailImage, {
    id: t.senderObj.id,
    size: 40
  }), w.default.createElement("span", {
    className: (0, i.classnamesConvertMeToStylexPlease)((0, A.default)(N.micContainer), x)
  }, w.default.createElement(y.PttStatusIcon, {
    width: 26,
    height: 26
  })));
}
function U() {
  return w.default.createElement("div", {
    className: (0, A.default)(N.avatar, N.audioAvatar, N.forwardedPttAvatar)
  }, w.default.createElement(y.PttStatusIcon, {
    width: 20,
    height: 20,
    className: L
  }));
}
function W() {
  return w.default.createElement("div", {
    className: (0, A.default)(N.avatar, N.audioAvatar)
  }, w.default.createElement(o.AudioFileIcon, {
    width: 40,
    height: 40
  }));
}
function H(e) {
  let {
    audio: t,
    isPlaying: n
  } = e;
  const [a, r] = (0, w.useState)((0, p.calculateAudioProgress)(t));
  const o = (0, w.useCallback)(() => {
    r((0, p.calculateAudioProgress)(t));
  }, [t]);
  (0, P.default)(o, {
    active: n
  });
  (0, O.useListener)(t, "timeupdate", o);
  (0, O.useListener)(t, "ended", () => r(0));
  const {
    theme: l
  } = (0, w.useContext)(M.ThemeContext);
  return w.default.createElement("div", {
    className: (0, A.default)(N.progressContainer)
  }, w.default.createElement("div", {
    className: (0, A.default)(N.progress, l === "light" && N.progressLight, l === "dark" && N.progressDark),
    style: {
      transform: `translateX(${a * 100 - 100}%)`
    }
  }));
}