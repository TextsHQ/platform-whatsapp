var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckmarkIcon = function (e) {
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
  let _ = 24;
  let g = 24;
  if (!(r == null && c == null)) {
    _ = r;
    g = c;
  }
  return l.default.createElement(o.BaseSvgSpan, (0, i.default)({
    name: "checkmark"
  }, p), l.default.createElement("svg", {
    viewBox: (t = f) !== null && t !== undefined ? t : "0 0 24 24",
    height: _,
    width: g,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, s.default)(n),
    version: "1.1",
    x: "0px",
    y: "0px",
    enableBackground: "new 0 0 24 24"
  }, l.default.createElement("path", {
    fill: "currentColor",
    d: "M9,17.2l-4-4l-1.4,1.3L9,19.9L20.4,8.5L19,7.1L9,17.2z"
  })));
};
var i = r(require("../vendor/967154.js"));
var a = r(require("../vendor/506479.js"));
var o = require("./220584.js");
var s = r(require("./156720.js"));
var l = r(require("../vendor/667294.js"));
const u = ["iconXstyle", "height", "width", "viewBox"];