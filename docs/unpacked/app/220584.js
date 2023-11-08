var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseSvgSpan = function (e) {
  if (e.children == null || e.children.type !== "svg") {
    throw (0, l.default)("Cannot use BaseSvgSpan without SVG children");
  }
  const {
    "aria-label": t,
    "aria-hidden": n,
    className: r,
    directional: f,
    displayInline: _,
    containerRef: g,
    xstyle: m,
    color: h,
    name: y,
    children: E
  } = e;
  const S = (0, a.default)(e, d);
  const v = f === true && s.default.isRTL();
  let T;
  if (h != null) {
    T = p[h];
  }
  const M = (0, c.default)(v && p.reverse, _ === true && p.inline, T, m);
  return u.default.createElement("span", (0, i.default)({
    "aria-hidden": n,
    "aria-label": t,
    ref: g,
    "data-icon": y,
    className: (0, o.classnamesConvertMeToStylexPlease)(r, M)
  }, S), E);
};
exports.SvgColorProp = undefined;
var i = r(require("../vendor/967154.js"));
var a = r(require("../vendor/506479.js"));
var o = require("./396574.js");
var s = r(require("./932325.js"));
var l = r(require("./556869.js"));
var u = r(require("../vendor/667294.js"));
var c = r(require("./156720.js"));
const d = ["aria-label", "aria-hidden", "className", "directional", "displayInline", "containerRef", "xstyle", "color", "name", "children"];
const p = {
  secondaryColor: {
    color: "aft2yglh"
  },
  tealColor: {
    color: "jq3rn4u7"
  },
  tealLighterColor: {
    color: "fsk8o631"
  },
  grayColor: {
    color: "hsqj3bek"
  },
  criticalColor: {
    color: "mvxzr2tb"
  },
  successColor: {
    color: "j5au4wul"
  },
  reverse: {
    display: "f804f6gw",
    transform: "n4o0o7gj"
  },
  inline: {
    display: "l7jjieqr",
    verticalAlign: "fewfhwl7"
  }
};
const f = require("../vendor/76672.js")({
  SECONDARY: "secondaryColor",
  TEAL: "tealColor",
  TEAL_LIGHTER: "tealLighterColor",
  GRAY: "grayColor",
  CRITICAL: "criticalColor",
  SUCCESS: "successColor"
});
exports.SvgColorProp = f;