var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckBox = h;
exports.CheckBoxWithLabel = function (e) {
  let {
    label: t,
    id: n
  } = e;
  let a = (0, o.default)(e, d);
  return i.default.createElement("label", {
    htmlFor: n
  }, i.default.createElement(h, (0, r.default)({
    id: n
  }, a)), i.default.createElement("span", {
    className: (0, u.default)(g)
  }, t));
};
exports.CheckboxTheme = undefined;
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/81644.js");
var i = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = f(t);
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
var u = a(require("../app/156720.js"));
var s = a(require("../app/576191.js"));
var c = a(require("../app/38085.js"));
const d = ["label", "id"];
function f(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (f = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const p = {
  checkboxContainer: {
    position: "g0rxnol2",
    display: "l7jjieqr",
    width: "dh5rsm73",
    height: "hpdpob1j",
    verticalAlign: "neme6l2y",
    cursor: "ajgl1lbb",
    borderTopStartRadius: "dntxsmpk",
    borderTopEndRadius: "ixn6u0rb",
    borderBottomEndRadius: "s2vc4xk1",
    borderBottomStartRadius: "o0wkt7aw",
    transform: "cgi16xlc"
  },
  roundedCheckboxContainer: {
    borderTopStartRadius: "ig3kka7n",
    borderTopEndRadius: "a57u14ck",
    borderBottomEndRadius: "a4bg1r4i",
    borderBottomStartRadius: "h1a3x9ys"
  },
  disabledCheckboxContainer: {
    cursor: "bx7g2weo"
  },
  checkbox: {
    position: "g0rxnol2",
    boxSizing: "cm280p3y",
    height: "ppled2lx",
    pointerEvents: "m62443ks",
    backgroundColor: "thr4l2wc",
    borderTop: "cd4l02zd",
    borderEnd: "m98q8jdg",
    borderBottom: "aickbkrb",
    borderStart: "h0ed51ke",
    borderTopStartRadius: "dntxsmpk",
    borderTopEndRadius: "ixn6u0rb",
    borderBottomEndRadius: "s2vc4xk1",
    borderBottomStartRadius: "o0wkt7aw",
    transitionProperty: "cpfmwfku",
    transitionDuration: "eliz2k8b"
  },
  pollsCheckboxReceiver: {
    borderTopColor: "rr3sdg1y",
    borderEndColor: "aaf8t3t8",
    borderBottomColor: "rlosfh74",
    borderStartColor: "s6krxjcp"
  },
  pollsCheckboxSender: {
    borderTopColor: "cb1qetwp",
    borderEndColor: "al6evcnd",
    borderBottomColor: "lzkf35j0",
    borderStartColor: "ccjuay6o"
  },
  roundedCheckbox: {
    borderTopStartRadius: "ig3kka7n",
    borderTopEndRadius: "a57u14ck",
    borderBottomEndRadius: "a4bg1r4i",
    borderBottomStartRadius: "h1a3x9ys"
  },
  checkedCheckbox: {
    backgroundColor: "diqd3znl",
    borderTopColor: "qei0rtf7",
    borderEndColor: "toeh7gh7",
    borderBottomColor: "nncek28p",
    borderStartColor: "br6oik82"
  },
  secondaryColours: {
    backgroundColor: "rlwyvoib",
    borderTopColor: "gwj397v6",
    borderEndColor: "gdj66le1",
    borderBottomColor: "m8ug7k8d",
    borderStartColor: "nldyvncg"
  },
  pollsCheckedCheckboxReceiver: {
    backgroundColor: "pdhqso7h",
    borderTopColor: "azxge7i2",
    borderEndColor: "rey418v5",
    borderBottomColor: "l2vfukj0",
    borderStartColor: "pwi4tpqv"
  },
  pollsCheckedCheckboxSender: {
    backgroundColor: "o12azb7x",
    borderTopColor: "gik13rpp",
    borderEndColor: "quedrkhz",
    borderBottomColor: "brlum6w4",
    borderStartColor: "o6lgiwdn"
  },
  disabledCheckbox: {
    backgroundColor: "hntizkrm",
    borderTopColor: "o163osd1",
    borderEndColor: "cfczyq4y",
    borderBottomColor: "fkk8pyer",
    borderStartColor: "g6apb8n0"
  },
  disabledCheckboxOutline: {
    backgroundColor: "thr4l2wc"
  },
  pollsDisabledCheckedCheckboxReceiver: {
    backgroundColor: "nt24zk05",
    borderTopColor: "ky8osgiz",
    borderEndColor: "bau1qttc",
    borderBottomColor: "h27iupyh",
    borderStartColor: "e932eind"
  },
  pollsDisabledUncheckedCheckboxReceiver: {
    borderTopColor: "defngil2",
    borderEndColor: "q645k7dr",
    borderBottomColor: "ltplle4q",
    borderStartColor: "czqm0sgq",
    backgroundColor: "sjyhwr5o"
  },
  pollsDisabledCheckedCheckboxSender: {
    backgroundColor: "sfq62bwo",
    borderTopColor: "ky8osgiz",
    borderEndColor: "bau1qttc",
    borderBottomColor: "h27iupyh",
    borderStartColor: "e932eind"
  },
  pollsDisabledUncheckedCheckboxSender: {
    borderTopColor: "icn0nyel",
    borderEndColor: "iv7mupbu",
    borderBottomColor: "dqiebsww",
    borderStartColor: "uqagbp64",
    backgroundColor: "sjyhwr5o"
  },
  checkmark: {
    position: "lhggkp7q",
    top: "hdpg1tjz",
    left: "ptatjang",
    width: "dj32rci9",
    height: "g965lu3b",
    borderTop: "q4zabkcz",
    borderRight: "q0ohlrvj",
    borderBottom: "av59jz02",
    borderLeft: "grf4wkbn",
    transform: "hir9ny8g"
  },
  roundedCheckmark: {
    width: "bbp2hc0k",
    height: "gm0rsm7k"
  },
  pollCheckmarkReceiver: {
    borderTopColor: "i2ep37lh",
    borderEndColor: "s9q6xkrg",
    borderBottomColor: "pvtpfg0c",
    borderStartColor: "i7b7jz71"
  },
  pollCheckmarkSender: {
    borderTopColor: "oc1v1hjw",
    borderEndColor: "mftvbulq",
    borderBottomColor: "rgw1ykpw",
    borderStartColor: "b70p9lzv"
  },
  checkedCheckmark: {
    opacity: "bs7a17vp",
    animationName: "b73q89nx",
    animationTimingFunction: "em5jvqoa",
    animationFillMode: "a21kwdn3",
    animationDuration: "ehl15zf9"
  },
  roundedCheckedCheckmark: {
    animationName: "mr8pev2x"
  },
  uncheckedCheckmark: {
    opacity: "axi1ht8l"
  },
  partialCheckmark: {
    position: "lhggkp7q",
    width: "dj32rci9",
    height: "g965lu3b",
    borderTop: "q4zabkcz",
    borderRight: "q0ohlrvj",
    borderBottom: "thn59n0e",
    borderLeft: "grf4wkbn",
    transform: "pdwgdm2l"
  },
  a11yHidden: {
    position: "lhggkp7q",
    width: "cxec7x23",
    height: "kanlod6e",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    clip: "nmeg1xfo",
    clipPath: "okm7a8wg",
    whiteSpace: "le5p0ye3"
  },
  itemFocused: {
    borderTopStartRadius: "dntxsmpk",
    borderTopEndRadius: "ixn6u0rb",
    borderBottomEndRadius: "s2vc4xk1",
    borderBottomStartRadius: "o0wkt7aw",
    boxShadow: "lgxs6e1q"
  }
};
const m = require("../vendor/76672.js").Mirrored(["PARTIAL", "OUTLINE", "POLLS_RECEIVER", "POLLS_SENDER", "SECONDARY"]);
function h(e) {
  let {
    checked: t,
    id: n,
    onChange: a,
    theme: r,
    disabled: o = false,
    tabIndex: d,
    ariaLabel: f,
    testid: h
  } = e;
  const g = (0, i.useRef)(null);
  const E = t && r === m.PARTIAL;
  const [v, _] = (0, s.default)();
  const y = (0, c.default)(g, v);
  const C = r === m.POLLS_RECEIVER || r === m.POLLS_SENDER;
  return i.default.createElement(i.default.Fragment, null, i.default.createElement("input", {
    ref: y,
    className: (0, u.default)(p.a11yHidden),
    checked: t,
    disabled: !!o || undefined,
    indeterminate: !!E || undefined,
    "aria-label": f,
    onClick: e => {
      e.stopPropagation();
    },
    onChange: function (e) {
      e.stopPropagation();
      const t = g.current;
      if (t != null) {
        t.focus();
      }
      a(e);
    },
    onKeyDown: e => {
      var t;
      if (!(l.SpecialKeyMap.space !== e.keyCode && l.SpecialKeyMap.enter !== e.keyCode)) {
        e.preventDefault();
        if (!((t = g.current) === null || t === undefined)) {
          t.click();
        }
      }
    },
    type: "checkbox",
    id: n,
    tabIndex: d != null ? d : 0
  }), i.default.createElement("div", {
    onClick: function (e) {
      var t;
      e.preventDefault();
      if (!((t = g.current) === null || t === undefined)) {
        t.click();
      }
    },
    className: (0, u.default)(p.checkboxContainer, o && p.disabledCheckboxContainer, _ && p.itemFocused, C && p.roundedCheckboxContainer),
    tabIndex: -1,
    "aria-hidden": "true"
  }, i.default.createElement("div", {
    className: (0, u.default)(p.checkbox, t && p.checkedCheckbox, o && p.disabledCheckbox, t && r === m.SECONDARY && p.secondaryColours, o && !t && r === m.OUTLINE && p.disabledCheckboxOutline, r === m.POLLS_RECEIVER && p.pollsCheckboxReceiver, r === m.POLLS_SENDER && p.pollsCheckboxSender, C && p.roundedCheckbox, t && r === m.POLLS_RECEIVER && p.pollsCheckedCheckboxReceiver, t && r === m.POLLS_SENDER && p.pollsCheckedCheckboxSender, o && r === m.POLLS_RECEIVER && (t ? p.pollsDisabledCheckedCheckboxReceiver : p.pollsDisabledUncheckedCheckboxReceiver), o && r === m.POLLS_SENDER && (t ? p.pollsDisabledCheckedCheckboxSender : p.pollsDisabledUncheckedCheckboxSender))
  }, i.default.createElement("div", {
    className: (0, u.default)(p.checkmark, t && r !== m.PARTIAL && p.checkedCheckmark, t && C && p.roundedCheckedCheckmark, !t && p.uncheckedCheckmark, E && p.partialCheckmark, C && p.roundedCheckmark, r === m.POLLS_RECEIVER && p.pollCheckmarkReceiver, r === m.POLLS_SENDER && p.pollCheckmarkSender)
  }))));
}
exports.CheckboxTheme = m;
const g = {
  marginStart: "fooq7fky"
};