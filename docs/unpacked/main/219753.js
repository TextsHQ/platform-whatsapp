var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WDSCell = undefined;
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/81109.js"));
var l = a(require("../vendor/506479.js"));
var i = require("./448266.js");
var u = require("./470855.js");
var s = function (e, t) {
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
var c = a(require("../app/156720.js"));
var d = a(require("../app/576191.js"));
var f = a(require("../app/38085.js"));
var p = a(require("../app/83233.js"));
const m = ["containerXStyle", "middleContainerXStyle", "detailLeftXStyle", "primaryXStyle", "primaryRightXStyle", "secondaryXStyle", "secondaryRightXStyle", "detailRightXStyle", "tabIndex", "onClick", "title", "border", "disabled", "interactive", "active", "idle", "testid", "colorScheme", "material"];
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
const g = {
  container: {
    display: "p357zi0d",
    width: "ln8gz9je",
    flexGrow: "ggj6brxn",
    position: "g0rxnol2",
    boxSizing: "cm280p3y",
    alignSelf: "l33m68ws"
  },
  material: {
    borderTopStartRadius: "bbr44loe",
    borderTopEndRadius: "ooj5yc5b",
    borderBottomEndRadius: "m8i16etx",
    borderBottomStartRadius: "cw0ivh8j"
  },
  focused: {
    outline: "fazy7qwg"
  }
};
const E = {
  containerActive: {
    backgroundColor: "i16jpgpt"
  },
  containerInteractive: {
    ":hover": {
      backgroundColor: "os03hap6"
    },
    ":focus": {
      backgroundColor: "d7xlm8yn"
    }
  },
  border: {
    borderBottom: "qmxv8cnq"
  },
  borderActive: {
    borderBottomColor: "pxdw8wyd"
  },
  borderHover: {
    borderBottomColor: "brezm3p7"
  }
};
const v = {
  containerActive: {
    backgroundColor: "h77y0my3"
  },
  containerInteractive: {
    ":hover": {
      backgroundColor: "m7m2r1ls"
    },
    ":focus": {
      backgroundColor: "csjkyafw"
    }
  },
  border: {
    borderBottom: "qmxv8cnq"
  },
  borderActive: {
    borderBottomColor: "ils5e9gq"
  },
  borderHover: {
    borderBottomColor: "kjc4e4iu"
  }
};
const _ = {
  containerActive: {
    backgroundColor: "gbpct7j9"
  },
  containerInteractive: {
    ":hover": {
      backgroundColor: "ak67jf88"
    },
    ":focus": {
      backgroundColor: "cdwtgchq"
    }
  },
  border: {
    borderBottom: "qmxv8cnq"
  },
  borderActive: {
    borderBottomColor: "tql9u9p7"
  },
  borderHover: {
    borderBottomColor: "cfn60c8b"
  }
};
const y = (0, s.forwardRef)((e, t) => {
  var n;
  var a;
  const {
    containerXStyle: h,
    middleContainerXStyle: y,
    detailLeftXStyle: C,
    primaryXStyle: b,
    primaryRightXStyle: M,
    secondaryXStyle: S,
    secondaryRightXStyle: T,
    detailRightXStyle: w,
    tabIndex: A,
    onClick: P,
    title: O,
    border: k,
    disabled: D = false,
    interactive: I = true,
    active: R = false,
    idle: N = false,
    testid: x,
    colorScheme: L = "default",
    material: j
  } = e;
  const B = (0, l.default)(e, m);
  const F = I && !D;
  const [G, U] = (0, s.useState)(false);
  const [W, H] = (0, d.default)();
  const [V, q] = (0, p.default)(P, {
    tabIndex: A,
    disabled: D
  });
  const Y = (0, f.default)(V, W, t);
  const z = F ? (0, o.default)((0, o.default)({}, q), {}, {
    "data-tab": q.tabIndex,
    onMouseEnter: () => U(true),
    onMouseLeave: () => U(false)
  }) : {};
  let K;
  switch (L) {
    case "none":
      break;
    case "default":
      K = E;
      break;
    case "lighter":
      K = v;
      break;
    case "lightest":
      K = _;
  }
  const Q = (0, u.supportsMaterialDesign)() || j === true;
  const X = Q || k == null || K == null ? [] : [K.border, (R || H) && K.borderActive, G && K.borderHover];
  const Z = [Q && g.material, Boolean(R) && ((n = K) === null || n === undefined ? undefined : n.containerActive), Boolean(F) && !N && ((a = K) === null || a === undefined ? undefined : a.containerInteractive), H && g.focused, h, k === "bottom-full" && X];
  return s.default.createElement("div", (0, r.default)({
    ref: Y,
    className: (0, c.default)(g.container),
    title: O
  }, z), s.default.createElement(i.WDSCellFrame, (0, r.default)({}, B, {
    containerXStyle: Z,
    detailLeftXStyle: [C],
    middleContainerXStyle: [y, k === "bottom-partial" && X],
    primaryXStyle: [b],
    primaryRightXStyle: [M],
    secondaryXStyle: [S],
    secondaryRightXStyle: [T],
    detailRightXStyle: [w, k === "bottom-partial" && X]
  })));
});
exports.WDSCell = y;
y.displayName = "WDSCell";