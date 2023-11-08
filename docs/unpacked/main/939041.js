var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MissVideoIcon = function (e) {
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
  let m = 16;
  let h = 19;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "miss-video"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 19 16",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1",
    x: "0px",
    y: "0px",
    enableBackground: "new 0 0 19 16"
  }, u.default.createElement("path", {
    fill: "currentColor",
    d: "M11.2,1.8H3.3C2,1.8,1,2.8,1,4.1V11c0,1.1,1,2.2,2.3,2.2h8c1.2,0,2.3-1,2.3-2.3V4.1 C13.5,2.8,12.4,1.8,11.2,1.8z M10.3,5.3L6.4,9.2h2.1c0.2,0,0.4,0.2,0.4,0.4V10c0,0.2-0.2,0.4-0.4,0.4H4.7c-0.2,0-0.4-0.2-0.4-0.4 V6.2c0-0.2,0.2-0.4,0.4-0.4h0.4c0.2,0,0.4,0.2,0.4,0.4v2.1l3.9-3.9c0.2-0.2,0.4-0.1,0.5,0l0.3,0.3C10.4,4.9,10.4,5.1,10.3,5.3z  M15.1,5.3c-0.2,0.1-0.3,0.3-0.3,0.5v3.3c0,0.2,0.1,0.4,0.3,0.5l2.9,2.1V3.2L15.1,5.3z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];