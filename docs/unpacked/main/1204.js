var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusAudioIcon = function (e) {
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
  let m = 17;
  let h = 14;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "status-audio"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 14 17",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1",
    id: "_x39_7d25ebd-827b-4b31-aacf-70732ab74202",
    x: "0px",
    y: "0px",
    enableBackground: "new 0 0 14 17"
  }, u.default.createElement("path", {
    fill: "currentColor",
    d: "M7,2.33C3.7,2.32,1.01,4.99,1,8.29C1,8.3,1,8.32,1,8.33V13c-0.02,1.09,0.85,1.98,1.94,2 c0.02,0,0.04,0,0.06,0h2V9.67H2.33V8.33c0-2.58,2.09-4.67,4.67-4.67s4.67,2.09,4.67,4.67v1.33H9v5.33h2c1.09,0.02,1.98-0.85,2-1.94 c0-0.02,0-0.04,0-0.06V8.33c0.01-3.3-2.66-5.99-5.96-6C7.03,2.33,7.01,2.33,7,2.33z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];