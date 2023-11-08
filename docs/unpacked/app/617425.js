var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonGroup = function (e) {
  let t;
  let {
    direction: n
  } = e;
  let r = (0, a.default)(e, m);
  switch (n) {
    case "horizontal":
    case "horizontalReverse":
      t = P;
      break;
    case "vertical":
    case "verticalReverse":
      t = O;
  }
  return d.default.createElement(o.FlexContainer, (0, i.default)({
    xstyle: t,
    direction: n
  }, r));
};
exports.WDSButtonSimplified = exports.WDSButtonSecondaryDestructive = exports.WDSButtonSecondary = exports.WDSButtonPrimaryDestructive = exports.WDSButtonPrimary = exports.WDSButtonPlainWhite = undefined;
var i = r(require("../vendor/967154.js"));
var a = r(require("../vendor/506479.js"));
var o = require("./690495.js");
var s = r(require("./469733.js"));
var l = require("./154852.js");
var u = require("./956113.js");
var c = require("./676345.js");
var d = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = h(t);
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
var p = r(require("./156720.js"));
var f = r(require("./576191.js"));
var _ = r(require("./38085.js"));
const g = ["testid", "children", "disabled", "onClick", "nowrap", "stretch", "spinner", "shadowOnHover", "themeStyles", "buttonType", "icon"];
const m = ["direction"];
function h(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (h = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const y = {
  button: {
    position: "g0rxnol2",
    display: "l7jjieqr",
    fontWeight: "hnx8ox4h",
    fontSize: "f8jlpxt4",
    lineHeight: "l1l4so3b",
    whiteSpace: "bbv8nyr4",
    borderTopStartRadius: "m2gb0jvt",
    borderTopEndRadius: "rfxpxord",
    borderBottomEndRadius: "gwd8mfxi",
    borderBottomStartRadius: "mnh9o63b",
    borderTop: "qmy7ya1v",
    borderEnd: "dcuuyf4k",
    borderBottom: "swfxs4et",
    borderStart: "bgr8sfoe",
    outlineOffset: "a6r886iw",
    transitionProperty: "fx1ldmn8",
    transitionDuration: "orxa12fk",
    transitionTimingFunction: "bkifpc9x"
  },
  hover: {
    ":hover": {
      boxShadow: "hjo1mxmu"
    }
  },
  disabled: {
    cursor: "h2qzpyga",
    boxShadow: "a27i2aag",
    ":hover": {
      cursor: "aur5e60u",
      boxShadow: "eml1pkxa"
    }
  },
  focused: {
    outline: "fazy7qwg"
  },
  nowrap: {
    whiteSpace: "le5p0ye3"
  },
  stretch: {
    display: "f804f6gw",
    width: "ln8gz9je"
  }
};
const E = (0, d.forwardRef)((e, t) => {
  let {
    testid: n,
    children: r,
    disabled: i,
    onClick: m,
    nowrap: h = true,
    stretch: E,
    spinner: S,
    shadowOnHover: v = true,
    themeStyles: T,
    buttonType: M,
    icon: A
  } = e;
  let b = (0, a.default)(e, g);
  const [C, P] = (0, f.default)();
  const O = (0, _.default)(t, C);
  const I = (0, l.getFlexStyles)(b);
  return d.default.createElement("button", {
    disabled: i,
    "aria-disabled": i,
    onClick: m,
    className: (0, p.default)([c.uiPadding.vert10, c.uiPadding.horiz24, [y.button, T.button], I.xstyle, P === true && [y.focused, T.focused], i === true && y.disabled, h === true && y.nowrap, E === true && y.stretch, v === true && y.hover]),
    ref: O,
    style: I.inline,
    type: M
  }, d.default.createElement(o.FlexRow, {
    align: "center",
    justify: "center"
  }, d.default.createElement(o.FlexRow, {
    testid: "content",
    justify: "center",
    align: "center",
    gap: 8
  }, A != null && d.default.createElement(A, {
    height: 16
  }), r), S === true && d.default.createElement(s.default, {
    testid: "spinner",
    xstyle: c.uiPadding.start8
  }, d.default.createElement(u.Spinner, {
    color: i === true ? "default" : T.spinner,
    size: 16
  }))));
});
function S(e) {
  return (0, d.forwardRef)((t, n) => d.default.createElement(E, (0, i.default)({}, t, {
    ref: n,
    themeStyles: e
  })));
}
E.displayName = "WDSButton";
const v = S({
  button: {
    color: "rpz5dbxo",
    backgroundColor: "bn27j4ou",
    ":hover": {
      backgroundColor: "oixtjehm"
    },
    ":disabled": {
      color: "snayiamo",
      backgroundColor: "szmswy5k"
    }
  },
  spinner: {
    stroke: "qo9gjrsf"
  }
});
exports.WDSButtonPrimary = v;
const T = S({
  button: {
    color: "o2v2jkg7",
    borderTopColor: "lpmlzjg7",
    borderEndColor: "b3vjre3n",
    borderBottomColor: "s48w15s6",
    borderStartColor: "v9zxeiga",
    backgroundColor: "losjomng",
    ":hover": {
      color: "dul83ws3"
    },
    ":disabled": {
      color: "snayiamo",
      borderTopColor: "hco6ovyk",
      borderEndColor: "jzidrpjq",
      borderBottomColor: "c1yuexcr",
      borderStartColor: "kk3bglv9",
      backgroundColor: "germ6ouh"
    }
  },
  spinner: {
    stroke: "j9ny8kmf"
  }
});
exports.WDSButtonSecondary = T;
const M = S({
  button: {
    color: "r4n0aloe",
    backgroundColor: "pjr8ran5",
    ":hover": {
      color: "hgehfy8y",
      backgroundColor: "p85b2i42"
    },
    ":disabled": {
      color: "snayiamo",
      backgroundColor: "ulgj1aqb"
    }
  },
  spinner: {
    stroke: "j9ny8kmf"
  }
});
exports.WDSButtonPlainWhite = M;
const A = S({
  button: {
    paddingStart: "nu34rnf1",
    paddingEnd: "ft2m32mm",
    color: "o2v2jkg7",
    ":hover": {
      color: "dul83ws3",
      boxShadow: "eml1pkxa"
    },
    ":disabled": {
      color: "snayiamo"
    }
  },
  spinner: {
    stroke: "j9ny8kmf"
  }
});
exports.WDSButtonSimplified = A;
const b = S({
  button: {
    color: "nq2qc0lv",
    backgroundColor: "bkpmtcnx",
    ":hover": {
      backgroundColor: "bmp94t2a"
    },
    ":disabled": {
      color: "snayiamo",
      backgroundColor: "szmswy5k"
    }
  },
  focused: {
    outlineColor: "fiq54fis"
  },
  spinner: {
    stroke: "pumzhhdh"
  }
});
exports.WDSButtonPrimaryDestructive = b;
const C = S({
  button: {
    color: "b3v9cwe2",
    borderTopColor: "lpmlzjg7",
    borderEndColor: "b3vjre3n",
    borderBottomColor: "s48w15s6",
    borderStartColor: "v9zxeiga",
    backgroundColor: "losjomng",
    ":hover": {
      color: "ktyg0lew"
    },
    ":disabled": {
      color: "snayiamo",
      borderTopColor: "hco6ovyk",
      borderEndColor: "jzidrpjq",
      borderBottomColor: "c1yuexcr",
      borderStartColor: "kk3bglv9",
      backgroundColor: "germ6ouh"
    }
  },
  focused: {
    outlineColor: "e9x3b6nr"
  },
  spinner: {
    stroke: "e7f6z26y"
  }
});
exports.WDSButtonSecondaryDestructive = C;
const P = {
  columnGap: "niluw8xz"
};
const O = {
  rowGap: "e369phhj"
};