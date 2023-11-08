var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlaybackRateButton = function (e) {
  const {
    playbackRate: t,
    onClick: n,
    playbackRateButtonIsVisible: a
  } = e;
  const {
    isKeyboardUser: d
  } = (0, l.default)();
  const f = () => {
    o.PttPrefs.delayClearPlaybackRateControl();
    n();
  };
  let p = -1;
  let m = null;
  if (a) {
    p = 0;
    m = "button";
  }
  return u.default.createElement("div", {
    role: m,
    "aria-hidden": true,
    className: (0, s.default)(c.wrapper, d && c.keyboardFocus),
    tabIndex: p,
    onClick: f,
    onKeyPress: e => {
      if (!(e.key !== r.KEYBOARD_EVENT_KEY_VALUE.ENTER && e.key !== r.KEYBOARD_EVENT_KEY_VALUE.SPACE)) {
        e.preventDefault();
        e.stopPropagation();
        f();
      }
    }
  }, u.default.createElement("div", {
    className: (0, s.default)(c.badge)
  }, function (e) {
    switch (e) {
      case 1:
        return i.fbt._("1×", null, {
          hk: "P4fmA"
        });
      case 1.5:
        return i.fbt._("1.5×", null, {
          hk: "6zgHM"
        });
      case 2:
        return i.fbt._("2×", null, {
          hk: "4wp8yT"
        });
    }
  }(t)));
};
var r = require("../app/368156.js");
var o = require("./491320.js");
var l = a(require("../app/395967.js"));
var i = require("../vendor/548360.js");
var u = a(require("../vendor/667294.js"));
var s = a(require("../app/156720.js"));
const c = {
  wrapper: {
    position: "lhggkp7q",
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno",
    width: "ln8gz9je",
    height: "ppled2lx",
    userSelect: "rkxvyd19"
  },
  keyboardFocus: {
    ":focus": {
      borderTopStartRadius: "mmjxyicr",
      borderTopEndRadius: "r1jx4bdh",
      borderBottomEndRadius: "f9yclydc",
      borderBottomStartRadius: "mtzt60z0",
      boxShadow: "esbo3we0"
    }
  },
  badge: {
    boxSizing: "cm280p3y",
    minWidth: "nucpke6t",
    paddingTop: "ppypbuwx",
    paddingEnd: "lnjlmjd6",
    paddingBottom: "s8gyl5p1",
    paddingStart: "mc6o24uu",
    fontSize: "ovllcyds",
    fontWeight: "hnx8ox4h",
    color: "kuml4n87",
    textAlign: "qfejxiq4",
    backgroundColor: "pbzwqulz",
    borderTopStartRadius: "oer0kere",
    borderTopEndRadius: "ikqwvqb4",
    borderBottomEndRadius: "afb5cxhb",
    borderBottomStartRadius: "nlio6qai",
    transform: "etdxpurf"
  }
};