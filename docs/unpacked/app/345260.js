var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrowForwardIcon = function (e) {
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
  let _ = 30;
  let g = 30;
  if (!(r == null && c == null)) {
    _ = r;
    g = c;
  }
  return l.default.createElement(o.BaseSvgSpan, (0, i.default)({
    name: "arrow-forward"
  }, p), l.default.createElement("svg", {
    viewBox: (t = f) !== null && t !== undefined ? t : "0 0 30 30",
    height: _,
    width: g,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, s.default)(n),
    version: "1.1",
    x: "0px",
    y: "0px",
    enableBackground: "new 0 0 30 30"
  }, l.default.createElement("path", {
    fill: "currentColor",
    d: "M15,7l-1.4,1.4l5.6,5.6H7v2h12.2l-5.6,5.6L15,23l8-8L15,7z"
  })));
};
var i = r(require("../vendor/967154.js"));
var a = r(require("../vendor/506479.js"));
var o = require("./220584.js");
var s = r(require("./156720.js"));
var l = r(require("../vendor/667294.js"));
const u = ["iconXstyle", "height", "width", "viewBox"];