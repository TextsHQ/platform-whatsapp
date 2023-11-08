var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  const [e, t] = (0, b.useState)("");
  const [n, r] = (0, b.useState)(null);
  const [I, N] = (0, b.useState)(false);
  const [D, w] = (0, b.useState)(false);
  const [{
    count: L,
    loading: k,
    error: G
  }, U, x] = (0, O.default)(M.getScreenUnlockTryCount, M.setScreenUnlockTryCount);
  const B = L != null ? L : 0;
  const F = B >= (0, o.getABPropConfigValue)("web_screen_lock_max_retries");
  const j = B + 1 === (0, o.getABPropConfigValue)("web_screen_lock_max_retries");
  (0, P.useListener)(l.Cmd, "correct_passcode_lock_screen", (0, i.default)(function* () {
    x();
  }));
  (0, P.useListener)(l.Cmd, "incorrect_passcode_lock_screen", (0, i.default)(function* () {
    U();
    N(true);
    w(false);
  }));
  const Y = function () {
    var t = (0, i.default)(function* () {
      w(true);
      yield (0, a.delayMs)(400);
      if (e === "") {
        r(true);
        return void w(false);
      }
      r(false);
      g.LockScreenResolvable.enterPasscode(e);
    });
    return function () {
      return t.apply(this, arguments);
    };
  }();
  if (F) {
    E.Socket.logout();
  }
  return b.default.createElement("div", {
    className: "landing-wrapper"
  }, b.default.createElement("div", {
    className: "landing-wrapper-before"
  }), b.default.createElement(_.default, null), b.default.createElement("div", {
    className: "landing-window"
  }, b.default.createElement("div", {
    className: (0, C.default)(R.box)
  }, b.default.createElement(p.FlexColumn, {
    align: "center",
    className: "landing-main"
  }, b.default.createElement(f.default, {
    xstyle: [v.uiMargin.top16, v.uiMargin.bottom24]
  }, b.default.createElement(h.default, {
    thumb: (0, T.getCachedProfilePicEURL)(),
    size: 82,
    quality: c.DetailImageQuality.High
  })), b.default.createElement(S.Text, {
    as: "div",
    theme: "large",
    xstyle: R.pushnameText
  }, b.default.createElement(d.EmojiText, {
    text: u.Conn.pushname,
    ellipsify: true,
    titlify: true
  })), b.default.createElement(f.default, {
    xstyle: v.uiMargin.bottom16
  }, b.default.createElement(S.Text, {
    as: "div",
    theme: "muted",
    color: "secondary",
    xstyle: v.uiMargin.bottom6
  }, A.fbt._("Screen lock is on. Enter your password to use WhatsApp Web.", null, {
    hk: "3PawUC"
  }))), b.default.createElement(f.default, {
    xstyle: [R.passcodeContainer, v.uiMargin.bottom24]
  }, b.default.createElement(m.default, {
    onChange: e => {
      t(e.currentTarget.value);
    },
    onKeyDown: e => {
      if (!(F || e.key !== "Enter")) {
        Y();
      }
    },
    required: true,
    placeholder: A.fbt._("Enter password", null, {
      hk: "24W8kZ"
    }).toString(),
    focusOnMount: true,
    enableShowPassword: true,
    testid: "password-input"
  }), b.default.createElement(S.Text, {
    as: "div",
    theme: "small",
    color: "danger",
    xstyle: [R.incorrectPasscode, v.uiMargin.top4, v.uiMargin.bottom10],
    extras: {
      role: "alert"
    }
  }, (0, y.getErrorMessage)({
    emptyInputEntered: n,
    incorrectPasscode: I,
    onlyOneTryRemaining: j,
    triesExceeded: F
  }))), b.default.createElement(f.default, {
    xstyle: v.uiMargin.bottom24
  }, b.default.createElement(s.default, {
    type: "primary",
    onClick: () => {
      Y();
    },
    disabled: D || F || k || G != null,
    spinner: D,
    testid: "unlock-button"
  }, A.fbt._("Unlock", null, {
    hk: "3Sg1DH"
  }))), b.default.createElement(S.Text, {
    as: "div",
    theme: "muted",
    color: "secondary",
    xstyle: v.uiMargin.bottom6
  }, A.fbt._("Forgot password?", null, {
    hk: "XjUnV"
  })), b.default.createElement(S.Text, {
    as: "div",
    theme: "muted",
    color: "secondary",
    xstyle: v.uiMargin.bottom6
  }, A.fbt._("Log out and link again from your phone.", null, {
    hk: "16lyXB"
  })), b.default.createElement(f.default, {
    xstyle: R.logoutButton
  }, b.default.createElement(s.default, {
    type: "secondary",
    onClick: () => E.Socket.logout()
  }, A.fbt._("Log Out", null, {
    hk: "153X9v"
  })))))));
};
var i = r(require("../vendor/348926.js"));
var a = require("./8304.js");
var o = require("./287461.js");
var s = r(require("./692629.js"));
var l = require("./780549.js");
var u = require("./445729.js");
var c = require("./23641.js");
var d = require("./305521.js");
var p = require("./690495.js");
var f = r(require("./469733.js"));
var _ = r(require("./898755.js"));
var g = require("./804334.js");
var m = r(require("./783301.js"));
var h = r(require("./145632.js"));
var y = require("./157478.js");
var E = require("./38878.js");
var S = require("./180519.js");
var v = require("./676345.js");
var T = require("./673168.js");
var M = require("./499264.js");
var A = require("../vendor/548360.js");
var b = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = I(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("../vendor/667294.js"));
var C = r(require("./156720.js"));
var P = require("./808446.js");
var O = r(require("./748690.js"));
function I(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (I = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const R = {
  box: {
    backgroundColor: "p1zdgkh6",
    minWidth: "d8ddvuix",
    height: "mtbtcjus",
    "@media screen and (max-width: 850px)": {
      minWidth: "gdbw3fpr"
    },
    "@media screen and (max-width: 660px)": {
      minWidth: "inad9r27"
    }
  },
  pushnameText: {
    marginBottom: "fhelu9n7"
  },
  passcodeContainer: {
    width: "rtue7xhx"
  },
  incorrectPasscode: {
    height: "jdwybkuq"
  },
  logoutButton: {
    marginTop: "qlylaf53"
  }
};