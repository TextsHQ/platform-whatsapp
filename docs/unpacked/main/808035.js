var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecurityShieldIcon = function (e) {
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
  let m = 74;
  let h = 64;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "security-shield"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 64 74",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1"
  }, u.default.createElement("path", {
    d: "M0,8.22222222 C12.057971,8.22222222 22.7246377,5.48148148 32,0 C41.2753623,5.48148148 51.942029,8.22222222 64,8.22222222 L64,32.8888889 C64,52.0740741 53.3333333,65.7777778 32,74 C10.6666667,65.7777778 0,52.0740741 0,32.8888889 C0,16.4444444 0,8.22222222 0,8.22222222 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];