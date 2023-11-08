var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlertUpdateIcon = function (e) {
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
  let _ = 48;
  let g = 48;
  if (!(r == null && c == null)) {
    _ = r;
    g = c;
  }
  return l.default.createElement(o.BaseSvgSpan, (0, i.default)({
    name: "alert-update"
  }, p), l.default.createElement("svg", {
    viewBox: (t = f) !== null && t !== undefined ? t : "0 0 48 48",
    height: _,
    width: g,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, s.default)(n),
    version: "1.1",
    x: "0px",
    y: "0px",
    enableBackground: "new 0 0 48 48"
  }, l.default.createElement("path", {
    fill: "currentColor",
    d: "M24.154,2C11.919,2,2,11.924,2,24.165S11.919,46.33,24.154,46.33 s22.154-9.924,22.154-22.165S36.389,2,24.154,2z M31.701,23.037h-6.738l3.08-3.08c-1.059-1.059-2.406-1.733-4.043-1.733 c-3.176,0-5.775,2.599-5.775,5.775c0,3.177,2.599,5.776,5.775,5.776c2.503,0,4.62-1.637,5.391-3.85h2.021 c-0.866,3.273-3.85,5.776-7.412,5.776c-4.235,0-7.701-3.465-7.701-7.701c0-4.235,3.465-7.701,7.701-7.701 c2.118,0,4.043,0.866,5.391,2.31l2.31-2.31C31.701,16.299,31.701,23.037,31.701,23.037z"
  })));
};
var i = r(require("../vendor/967154.js"));
var a = r(require("../vendor/506479.js"));
var o = require("./220584.js");
var s = r(require("./156720.js"));
var l = r(require("../vendor/667294.js"));
const u = ["iconXstyle", "height", "width", "viewBox"];