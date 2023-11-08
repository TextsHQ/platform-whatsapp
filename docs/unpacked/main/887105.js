var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const [t, n] = (0, v.useState)("");
  const [a, y] = (0, v.useState)("");
  const [C, T] = (0, v.useState)("");
  const [w, A] = (0, v.useState)(false);
  const P = (e, t) => {
    if (e === "" && t === "") {
      T("");
    }
  };
  const O = function () {
    var n = (0, r.default)(function* () {
      const n = M(t, a);
      const r = S(t, a);
      T(n.errorMessage || r.errorMessage);
      if (!n.valid || !r.valid) {
        return;
      }
      A(true);
      const l = yield g.waNoiseInfo.lockNoiseInfo(a);
      yield (0, o.delayMs)(400);
      if (l) {
        d.ModalManager.close();
        e.onSubmit();
      }
      A(false);
    });
    return function () {
      return n.apply(this, arguments);
    };
  }();
  const k = E.fbt._("Password must be {mininum_passcode_length}-{maximum_passcode_length} characters, and may only contain letters, numbers, and common punctuation", [E.fbt._param("mininum_passcode_length", 6), E.fbt._param("maximum_passcode_length", b)], {
    hk: "2J7xmD"
  });
  return v.default.createElement(c.Modal, {
    type: c.ModalTheme.Flex,
    testid: "passcode-setup-modal"
  }, v.default.createElement("form", {
    method: "dialog",
    className: (0, _.default)(f.container),
    onSubmit: O
  }, v.default.createElement(m.TextHeader, {
    size: "20",
    weight: "medium",
    xstyle: [f.titleText, h.uiMargin.bottom12]
  }, E.fbt._("Set device password", null, {
    hk: "3xDAGQ"
  })), v.default.createElement(s.default, {
    xstyle: h.uiMargin.bottom8
  }, v.default.createElement(p.default, {
    value: t,
    onChange: e => {
      n(e.currentTarget.value);
      P(e.currentTarget.value, a);
    },
    onBlur: e => {
      if (e.currentTarget.value === "") {
        return;
      }
      const n = M(t, a);
      T(n.errorMessage);
    },
    required: true,
    placeholder: E.fbt._("Enter password", null, {
      hk: "2ChSjl"
    }).toString(),
    focusOnMount: true,
    testid: "password-input"
  })), v.default.createElement(s.default, {
    xstyle: h.uiMargin.bottom8
  }, v.default.createElement(p.default, {
    value: a,
    onChange: e => {
      y(e.currentTarget.value);
      P(e.currentTarget.value, t);
    },
    onBlur: e => {
      if (e.currentTarget.value === "") {
        return;
      }
      const n = S(t, a);
      if (C === "") {
        T(n.errorMessage);
      }
    },
    title: C,
    required: true,
    placeholder: E.fbt._("Re-enter password", null, {
      hk: "22Ai3f"
    }).toString(),
    testid: "password-input-confirm"
  })), v.default.createElement(m.TextParagraph, {
    color: C ? "danger" : "secondary",
    xstyle: [f.bottomSpacing, f.passcodeMessage],
    testid: "passcode-message",
    extras: C ? {
      role: "alert"
    } : {}
  }, C || k), v.default.createElement(u.FlexRow, {
    justify: "end"
  }, v.default.createElement(s.default, {
    xstyle: h.uiMargin.end4
  }, v.default.createElement(l.default, {
    type: "secondary",
    onClick: () => d.ModalManager.close(),
    testid: "popup-controls-cancel",
    buttonType: "button"
  }, E.fbt._("Cancel", null, {
    hk: "H0gNq"
  }))), v.default.createElement(s.default, null, v.default.createElement(l.default, {
    type: "primary",
    onClick: O,
    disabled: w,
    spinner: w,
    testid: "popup-controls-ok",
    buttonType: "submit"
  }, (0, i.default)("OK"))))));
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/8304.js");
var l = a(require("../app/692629.js"));
var i = a(require("../app/395767.js"));
var u = require("../app/690495.js");
var s = a(require("../app/469733.js"));
var c = require("../app/118612.js");
var d = require("../app/114850.js");
var f = C(require("./195216.js"));
var p = a(require("../app/783301.js"));
var m = require("../app/180519.js");
var h = require("../app/676345.js");
var g = require("../app/65410.js");
var E = require("../vendor/548360.js");
var v = C(require("../vendor/667294.js"));
var _ = a(require("../app/156720.js"));
function y(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (y = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function C(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = y(t);
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
const b = 128;
function M(e, t) {
  let n = "";
  if (e.length < 6 || e.length > b) {
    n = E.fbt._("Password must be {minimum_length}-{maximum_length} characters.", [E.fbt._param("minimum_length", String(6)), E.fbt._param("maximum_length", String(b))], {
      hk: "1lo3Lp"
    }).toString();
    return {
      valid: false,
      errorMessage: n
    };
  } else if (e.match("^[ -~]{6,128}$") == null) {
    n = E.fbt._("Password may only contain letters, numbers, and common punctuation.", null, {
      hk: "3kbler"
    }).toString();
    return {
      valid: false,
      errorMessage: n
    };
  } else if (t !== "") {
    return S(e, t);
  } else {
    return {
      valid: true,
      errorMessage: n
    };
  }
}
function S(e, t) {
  let n = "";
  if (e !== t) {
    n = E.fbt._("Password must match.", null, {
      hk: "3iFOvR"
    }).toString();
    return {
      valid: false,
      errorMessage: n
    };
  } else {
    return {
      valid: true,
      errorMessage: n
    };
  }
}