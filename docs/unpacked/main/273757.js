var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MutedIcon = function (e) {
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
  let m = 18;
  let h = 16;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "muted"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 16 18",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1",
    x: "0px",
    y: "0px",
    enableBackground: "new 0 0 16 18"
  }, u.default.createElement("path", {
    fill: "currentColor",
    d: "M11.52,9.206c0-1.4-0.778-2.567-1.944-3.111v1.711L11.52,9.75 C11.52,9.517,11.52,9.362,11.52,9.206z M13.465,9.206c0,0.7-0.156,1.4-0.389,2.022l1.167,1.167c0.544-0.933,0.778-2.1,0.778-3.267 c0-3.344-2.333-6.144-5.444-6.844v1.633C11.832,4.695,13.465,6.717,13.465,9.206z M2.032,2.206L1.02,3.217l3.656,3.656H1.02v4.667 h3.111l3.889,3.889v-5.211l3.344,3.344c-0.544,0.389-1.089,0.7-1.789,0.933v1.633c1.089-0.233,2.022-0.7,2.878-1.4l1.556,1.556 l1.011-1.011l-7-7L2.032,2.206z M8.02,2.984L6.387,4.617L8.02,6.25V2.984z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];