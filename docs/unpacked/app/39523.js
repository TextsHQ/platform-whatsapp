var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlertIcon = function (e) {
  var t;
  const {
    iconXstyle: n,
    height: r,
    width: c,
    viewBox: d
  } = e;
  const p = (0, a.default)(e, u);
  let f;
  if (d) {
    const {
      x: e = 0,
      y: t = 0,
      width: n = 0,
      height: r = 0
    } = d;
    f = [e, t, n, r].join(" ");
  }
  let _ = 10;
  let g = 11;
  if (!(r == null && c == null)) {
    _ = r;
    g = c;
  }
  return l.default.createElement(o.BaseSvgSpan, (0, i.default)({
    name: "alert"
  }, p), l.default.createElement("svg", {
    viewBox: (t = f) !== null && t !== undefined ? t : "0 0 11 10",
    height: _,
    width: g,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, s.default)(n),
    version: "1.1"
  }, l.default.createElement("path", {
    fill: "currentColor",
    d: "M1.3,10h8.3c0.8,0,1.3-0.6,1.3-1.3c0-0.2-0.1-0.4-0.2-0.6L6.7,0.7C6.4,0.2,6,0,5.5,0C5,0,4.6,0.2,4.3,0.7L0.2,8     C0.1,8.2,0,8.4,0,8.6C0,9.4,0.5,10,1.3,10z M5.5,6.4C5.2,6.4,5,6.2,5,5.9L4.9,3.5C4.9,3.2,5.2,3,5.5,3c0.3,0,0.6,0.2,0.6,0.6L6,5.9     C6,6.2,5.8,6.4,5.5,6.4z M5.5,8.3c-0.4,0-0.6-0.2-0.6-0.6c0-0.3,0.3-0.6,0.6-0.6c0.4,0,0.6,0.2,0.6,0.6S5.9,8.3,5.5,8.3z"
  })));
};
var i = r(require("../vendor/967154.js"));
var a = r(require("../vendor/506479.js"));
var o = require("./220584.js");
var s = r(require("./156720.js"));
var l = r(require("../vendor/667294.js"));
const u = ["iconXstyle", "height", "width", "viewBox"];