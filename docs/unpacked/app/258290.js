var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HoverTooltip = function (e) {
  const {
    targetRef: t,
    position: n,
    alignment: r,
    children: i,
    buffer: a = 8,
    showOnFocus: o = true,
    name: s,
    enableEnterTransition: l = true,
    enableExitTransition: u = false
  } = e;
  const {
    tooltip: c
  } = g({
    target: t,
    position: n,
    alignment: r,
    element: i,
    buffer: a,
    name: s,
    enableEnterTransition: l,
    enableExitTransition: u,
    initHandling: o ? ["hover", "focus"] : "hover"
  });
  return c;
};
Object.defineProperty(exports, "PopoverAlignment", {
  enumerable: true,
  get: function () {
    return s.PopoverAlignment;
  }
});
Object.defineProperty(exports, "PopoverPosition", {
  enumerable: true,
  get: function () {
    return s.PopoverPosition;
  }
});
exports.useTooltip = g;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/506479.js"));
var o = r(require("../vendor/967154.js"));
var s = require("./411342.js");
var l = require("./676345.js");
var u = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = p(t);
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
var c = r(require("./156720.js"));
const d = ["element", "onClick"];
function p(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (p = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const f = {
  tooltip: {
    display: "l7jjieqr",
    maxWidth: "b1w2sqt8",
    fontSize: "ovllcyds",
    color: "gt1inm12",
    textAlign: "qfejxiq4",
    textOverflow: "lhj4utae",
    textShadow: "s52zzds6",
    backgroundColor: "puskumha",
    borderTopStartRadius: "ajyz1gl2",
    borderTopEndRadius: "y4d21rkf",
    borderBottomEndRadius: "aznl1635",
    borderBottomStartRadius: "n3l3zu01"
  }
};
const _ = (0, u.forwardRef)((e, t) => {
  let {
    children: n,
    onClick: r
  } = e;
  let i = {};
  if (r != null) {
    i = {
      onClick: r,
      role: "button",
      tabIndex: 0
    };
  }
  return u.default.createElement("div", (0, o.default)({
    ref: t,
    role: "tooltip",
    className: (0, c.default)([f.tooltip, l.uiPadding.horiz16, l.uiPadding.vert8])
  }, i), n);
});
function g(e) {
  const {
    element: t,
    onClick: n
  } = e;
  const r = (0, a.default)(e, d);
  const o = (0, i.default)((0, i.default)({}, r), {}, {
    dismissable: Boolean(n),
    element: u.default.createElement(_, {
      onClick: n
    }, t)
  });
  const {
    popover: l,
    showPopover: c,
    hidePopover: p,
    popoverIsVisible: f
  } = (0, s.usePopoverElement)(o);
  return {
    tooltip: l,
    showTooltip: c,
    hideTooltip: p,
    tooltipIsVisible: f
  };
}
_.displayName = "Tooltip";