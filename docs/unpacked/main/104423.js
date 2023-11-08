var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubgroupsNuxIcon = function (e) {
  var t;
  const {
    iconXstyle: n,
    height: a,
    width: c,
    viewBox: d
  } = e;
  const f = (0, o.default)(e, s);
  let p;
  if (d) {
    const {
      x: e = 0,
      y: t = 0,
      width: n = 0,
      height: a = 0
    } = d;
    p = [e, t, n, a].join(" ");
  }
  let m = 27;
  let h = 27;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "subgroups-nux"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 27 27",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("g", null, u.default.createElement("rect", {
    x: 0,
    y: 0,
    width: 17,
    height: 17,
    rx: 8.5,
    transform: "matrix(-1 0 0 1 18 4)",
    fill: "#D1D7DB",
    stroke: "currentColor"
  }), u.default.createElement("rect", {
    x: 0,
    y: 0,
    width: 17,
    height: 17,
    rx: 8.5,
    transform: "matrix(-1 0 0 1 22 4)",
    fill: "#AEBAC1",
    stroke: "currentColor"
  }), u.default.createElement("rect", {
    x: 0,
    y: 0,
    width: 17,
    height: 17,
    rx: 8.5,
    transform: "matrix(-1 0 0 1 26 4)",
    fill: "#8696A0",
    stroke: "currentColor"
  }))));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];