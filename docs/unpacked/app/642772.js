var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WAWebLinkDevicePhoneNumberEntryInput = undefined;
var i = r(require("./144202.js"));
var a = r(require("./670983.js"));
var o = require("./396574.js");
var s = require("./690495.js");
var l = r(require("./469733.js"));
var u = require("./936327.js");
var c = require("./368170.js");
var d = require("./676345.js");
var p = require("../vendor/548360.js");
var f = function (e, t) {
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
var _ = r(require("./156720.js"));
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
const m = {
  inputContainer: {
    position: "g0rxnol2",
    color: "k2bacm8l",
    cursor: "n3nyt3io"
  },
  inputWrapper: {
    position: "g0rxnol2",
    paddingTop: "e8jx7scp",
    paddingBottom: "fcet0162",
    paddingStart: "sta02ykp",
    paddingEnd: "itegkywt",
    minWidth: "n49njydh",
    height: "jdwybkuq",
    backgroundColor: "f6cvynhn",
    borderTop: "kagi745y",
    borderEnd: "evq3mrnv",
    borderBottom: "daad4uqs",
    borderStart: "jdssz2gn",
    borderTopStartRadius: "bbr44loe",
    borderTopEndRadius: "ooj5yc5b",
    borderBottomEndRadius: "m8i16etx",
    borderBottomStartRadius: "cw0ivh8j"
  },
  inputWrapperFocused: {
    borderTop: "ggk2mtcd",
    borderEnd: "c4hi5cu5",
    borderBottom: "dorenqkw",
    borderStart: "pidw8noc"
  },
  inputAndPlaceholderInnerWrapper: {
    position: "g0rxnol2"
  },
  phoneNumberText: {
    fontSize: "enbbiyaj",
    fontVariantNumeric: "g33ro0j9"
  },
  placeholder: {
    position: "lhggkp7q",
    top: "odxhw97a",
    left: "tukmaf4q",
    color: "t3rh7lfs",
    whiteSpace: "bbv8nyr4",
    userSelect: "rkxvyd19"
  },
  placeholderTransparent: {
    color: "nz2484kf"
  },
  placeholderTextUnderscoresMacOS: {
    display: "l7jjieqr",
    letterSpacing: "jwv1bggf",
    transform: "gv74zxys"
  },
  placeholderTextUnderscoresWindows: {
    display: "l7jjieqr",
    letterSpacing: "lebht06r",
    transform: "nmpiggdd"
  },
  input: {
    position: "g0rxnol2",
    color: "k2bacm8l",
    zIndex: "g2bpp9au",
    width: "ln8gz9je",
    borderTop: "cc8mgx9x",
    borderEnd: "eta5aym1",
    borderBottom: "d9802myq",
    borderStart: "e4xiuwjv",
    backgroundColor: "thr4l2wc",
    ":focus": {
      outline: "cixrojiy"
    }
  }
};
function h(e, t) {
  const {
    countryCodeIso: n,
    phoneNumberWithoutCountryPrefix: r,
    a11yErrorMessage: c,
    onChange: g,
    onEnter: h
  } = e;
  const {
    errorShown: E,
    errorMessageDOMId: S
  } = c;
  const [v, T] = (0, f.useState)(false);
  const [M, A] = (0, f.useState)(null);
  const b = (0, f.useRef)(null);
  const [C, P] = (0, f.useState)(true);
  const O = n == null ? null : i.default[n];
  const I = (0, u.formatPhoneNumberInput)({
    countryCodeIso: n,
    phoneNumberWithoutCountryCode: r != null ? r : ""
  });
  const {
    formattedInputValue: R,
    placeholder: N
  } = (0, a.default)(I, "Unexpected null phone number format result, likely because of invalid country code");
  const D = (0, u.getFullFormattedInputValue)(C, O, R);
  (0, f.useEffect)(() => {
    let e = null;
    if (M != null) {
      if (M.shouldPositionNextToDigit) {
        const t = Array.from(D.matchAll(/\d/g));
        if (t.length > M.selectionStart) {
          e = t[M.selectionStart].index;
        }
      } else {
        e = M.selectionStart;
      }
    }
    var t;
    if (e != null) {
      if (!((t = b.current) === null || t === undefined)) {
        t.setSelectionRange(e, e);
      }
    }
    A(null);
  }, [M, D]);
  (0, f.useImperativeHandle)(t, () => ({
    focus: () => {
      var e;
      if (!((e = b.current) === null || e === undefined)) {
        e.focus();
      }
    }
  }));
  return f.default.createElement("div", {
    className: (0, _.default)(m.inputContainer),
    onClick: () => {
      var e;
      if (!((e = b.current) === null || e === undefined)) {
        e.focus();
      }
    },
    dir: "ltr"
  }, f.default.createElement(s.FlexRow, {
    className: (0, _.default)(m.inputWrapper, v && m.inputWrapperFocused)
  }, f.default.createElement(l.default, {
    xstyle: m.inputAndPlaceholderInnerWrapper,
    grow: 1
  }, f.default.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      h();
    }
  }, f.default.createElement(y, {
    formattedInputValue: D,
    placeholder: N
  }), f.default.createElement("input", {
    ref: b,
    "aria-label": p.fbt._("Type your phone number.", null, {
      hk: "MyVW7"
    }),
    "aria-describedby": E ? S : "",
    "aria-required": "true",
    "aria-invalid": E ? "true" : "false",
    className: (0, o.classnamesConvertMeToStylexPlease)("selectable-text", (0, _.default)(m.input, m.phoneNumberText, d.uiPadding.all0)),
    type: "text",
    value: D,
    onChange: e => {
      const t = e.target;
      const i = t.value;
      const a = t.selectionStart;
      const {
        countryCodeIso: o,
        phoneNumberWithoutCountryCode: s
      } = (0, u.cleanPhoneNumberInputValue)(i);
      if (o === n && s === r) {
        A({
          selectionStart: a,
          shouldPositionNextToDigit: false
        });
      } else {
        const {
          fullRawPhoneNumber: e
        } = (0, u.cleanPhoneNumberInputValue)(i.substr(0, a));
        A({
          selectionStart: e.length,
          shouldPositionNextToDigit: true
        });
      }
      P(o != null || i.includes("+"));
      g(o, s);
    },
    onFocus: () => {
      T(true);
      A({
        selectionStart: D.length,
        shouldPositionNextToDigit: false
      });
    },
    onBlur: () => T(false)
  })))));
}
function y(e) {
  const t = e.placeholder.split(/(_+)/).map((e, t) => {
    const n = t % 2 == 1;
    return f.default.createElement("span", {
      key: `${t}:${e}`,
      className: (0, _.default)(n && c.UA.os === c.OS_TYPE.WINDOWS && m.placeholderTextUnderscoresWindows, n && c.UA.os === c.OS_TYPE.MAC && m.placeholderTextUnderscoresMacOS)
    }, e);
  });
  return f.default.createElement("div", {
    className: (0, _.default)(m.placeholder, m.phoneNumberText),
    "aria-hidden": "true"
  }, f.default.createElement("span", {
    className: (0, _.default)(m.placeholderTransparent)
  }, e.formattedInputValue), t);
}
const E = (0, f.forwardRef)(h);
exports.WAWebLinkDevicePhoneNumberEntryInput = E;
E.displayName = "WAWebLinkDevicePhoneNumberEntryInput";