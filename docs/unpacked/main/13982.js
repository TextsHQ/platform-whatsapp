var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChevronCircledIcon = function (e) {
  var t;
  const {
    iconXstyle: n,
    height: a,
    width: c,
    viewBox: d,
    innerStyles: f
  } = e;
  const p = (0, o.default)(e, s);
  let m;
  if (d) {
    const {
      x: e = 0,
      y: t = 0,
      width: n = 0,
      height: a = 0
    } = d;
    m = [e, t, n, a].join(" ");
  }
  let h = 12;
  let g = 12;
  if (!(a == null && c == null)) {
    h = a;
    g = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "chevron-circled"
  }, p), u.default.createElement("svg", {
    viewBox: (t = m) !== null && t !== undefined ? t : "0 0 12 12",
    height: h,
    width: g,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("rect", {
    width: 12,
    height: 12,
    rx: 6,
    fill: "#54656F",
    className: (0, i.default)(f == null ? undefined : f.background)
  }), u.default.createElement("path", {
    d: "M9.52499 5.00475L5.98124 8.44275L2.51999 4.9815L3.34724 4.15425L5.98124 6.78825L8.64524 4.125L9.52499 5.00475Z",
    fill: "#F0F2F5",
    className: (0, i.default)(f == null ? undefined : f.primary)
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox", "innerStyles"];