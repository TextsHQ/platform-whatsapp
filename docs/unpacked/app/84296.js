var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlertNotificationIcon = function (e) {
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
    name: "alert-notification"
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
    d: "M24.154,2C11.919,2,2,11.924,2,24.165S11.919,46.33,24.154,46.33 s22.154-9.924,22.154-22.165S36.389,2,24.154,2z M23.41,17.428V16.81c0-0.706,0.618-1.324,1.324-1.324s1.323,0.618,1.323,1.324 v0.618c2.559,0.618,4.412,2.823,4.412,5.559v3.176l-8.294-8.294C22.527,17.692,22.969,17.516,23.41,17.428z M24.733,33.134 c-0.971,0-1.765-0.794-1.765-1.765h3.529C26.498,32.34,25.704,33.134,24.733,33.134z M31.969,32.251l-1.765-1.765H17.233v-0.882 l1.765-1.765v-4.853c0-1.059,0.265-2.029,0.794-2.912l-2.559-2.559l1.147-1.147l14.735,14.736L31.969,32.251z"
  })));
};
var i = r(require("../vendor/967154.js"));
var a = r(require("../vendor/506479.js"));
var o = require("./220584.js");
var s = r(require("./156720.js"));
var l = r(require("../vendor/667294.js"));
const u = ["iconXstyle", "height", "width", "viewBox"];