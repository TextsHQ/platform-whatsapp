var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InfoIcon = function (e) {
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
  let m = 24;
  let h = 24;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "info"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1",
    x: "0px",
    y: "0px",
    enableBackground: "new 0 0 24 24"
  }, u.default.createElement("path", {
    fill: "currentColor",
    d: "M12,1.5C6.204,1.5,1.5,6.204,1.5,12S6.204,22.5,12,22.5 S22.5,17.796,22.5,12S17.796,1.5,12,1.5 M12,20.4c-4.63,0-8.4-3.769-8.4-8.4S7.37,3.6,12,3.6c4.629,0,8.4,3.77,8.4,8.4 S16.629,20.4,12,20.4z M12,17.25c0.58,0,1.05-0.47,1.05-1.05v-5.25c0-0.58-0.47-1.05-1.05-1.05c-0.58,0-1.05,0.47-1.05,1.05v5.25 C10.95,16.78,11.42,17.25,12,17.25z M12,8.85c0.58,0,1.05-0.47,1.05-1.05S12.58,6.75,12,6.75c-0.58,0-1.05,0.47-1.05,1.05 S11.42,8.85,12,8.85z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];