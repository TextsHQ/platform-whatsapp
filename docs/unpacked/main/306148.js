var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const [t, n] = (0, b.useState)("");
  const [a, T] = (0, b.useState)(null);
  const [w, P] = (0, b.useState)(false);
  const [O, k] = (0, b.useState)(false);
  const [{
    count: D,
    loading: I,
    error: R
  }, N, x] = (0, S.default)(y.getScreenUnlockTryCount, y.setScreenUnlockTryCount);
  const L = D != null ? D : 0;
  const j = L >= (0, l.getABPropConfigValue)("web_screen_lock_max_retries");
  if (j) {
    g.Socket.logout();
  }
  const B = L + 1 === (0, l.getABPropConfigValue)("web_screen_lock_max_retries");
  const F = function () {
    var n = (0, r.default)(function* () {
      k(true);
      if (t === "") {
        T(true);
        return void k(false);
      }
      T(false);
      const n = yield _.waNoiseInfo.removeLockOnNoiseInfo(t);
      yield (0, o.delayMs)(400);
      if (n) {
        x();
        f.ModalManager.close();
        e.onSubmit();
      } else {
        N();
        P(true);
      }
      k(false);
    });
    return function () {
      return n.apply(this, arguments);
    };
  }();
  return b.default.createElement(d.Modal, {
    type: d.ModalTheme.Flex,
    testid: "passcode-removal-modal"
  }, b.default.createElement("div", {
    className: (0, M.default)(p.container)
  }, b.default.createElement(E.TextHeader, {
    size: "20",
    weight: "medium",
    xstyle: [p.titleText, v.uiMargin.bottom12]
  }, C.fbt._("Enter existing password", null, {
    hk: "1kzUbi"
  })), b.default.createElement(E.TextParagraph, {
    size: "16",
    xstyle: [A.description, v.uiMargin.bottom20]
  }, C.fbt._("To turn off Screen lock, enter your existing password.", null, {
    hk: "13kmV6"
  })), b.default.createElement(c.default, {
    xstyle: p.bottomSpacing
  }, b.default.createElement(m.default, {
    value: t,
    onChange: e => {
      n(e.currentTarget.value);
    },
    onKeyDown: e => {
      if (e.key === "Enter") {
        F();
      }
    },
    placeholder: C.fbt._("Enter password", null, {
      hk: "1oc3Tx"
    }).toString(),
    focusOnMount: true,
    enableShowPassword: true,
    testid: "password-input"
  }), b.default.createElement(E.Text, {
    as: "div",
    size: "13",
    color: "danger",
    xstyle: [p.errorText, v.uiMargin.top4],
    extras: {
      role: "alert"
    }
  }, (0, h.getErrorMessage)({
    emptyInputEntered: a,
    incorrectPasscode: w,
    onlyOneTryRemaining: B,
    triesExceeded: j
  }))), b.default.createElement(s.FlexRow, {
    justify: "end"
  }, b.default.createElement(c.default, {
    xstyle: v.uiMargin.end4
  }, b.default.createElement(i.default, {
    type: "secondary",
    onClick: () => f.ModalManager.close(),
    testid: "popup-controls-cancel",
    buttonType: "button"
  }, C.fbt._("Cancel", null, {
    hk: "H0gNq"
  }))), b.default.createElement(c.default, null, b.default.createElement(i.default, {
    type: "primary",
    onClick: () => {
      F();
    },
    disabled: O || j || I || R != null,
    spinner: O,
    testid: "popup-controls-ok",
    buttonType: "submit"
  }, (0, u.default)("OK"))))));
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/8304.js");
var l = require("../app/287461.js");
var i = a(require("../app/692629.js"));
var u = a(require("../app/395767.js"));
var s = require("../app/690495.js");
var c = a(require("../app/469733.js"));
var d = require("../app/118612.js");
var f = require("../app/114850.js");
var p = w(require("./195216.js"));
var m = a(require("../app/783301.js"));
var h = require("../app/157478.js");
var g = require("../app/38878.js");
var E = require("../app/180519.js");
var v = require("../app/676345.js");
var _ = require("../app/65410.js");
var y = require("../app/499264.js");
var C = require("../vendor/548360.js");
var b = w(require("../vendor/667294.js"));
var M = a(require("../app/156720.js"));
var S = a(require("../app/748690.js"));
function T(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (T = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function w(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = T(t);
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
}
const A = {
  description: {
    lineHeight: "l85iiqla"
  }
};