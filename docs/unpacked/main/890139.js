var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusMissVideoIcon = function (e) {
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
    name: "status-miss-video"
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
    d: "M9.4,5.8H2.8C1.8,5.8,1,6.6,1,7.6v5.6c0,1,0.8,1.8,1.8,1.8h6.6c1,0,1.8-0.8,1.8-1.8V7.6 C11.2,6.6,10.4,5.8,9.4,5.8z M8.7,8.5l-3.2,3.2h1.7c0.2,0,0.3,0.1,0.3,0.3v0.4c0,0.2-0.1,0.3-0.3,0.3H4.1c-0.2,0-0.3-0.1-0.3-0.3 V9.3C3.8,9.1,3.9,9,4.1,9h0.4c0.2,0,0.3,0.1,0.3,0.3V11L8,7.8c0.1-0.1,0.3-0.1,0.5,0l0.2,0.3C8.8,8.2,8.8,8.4,8.7,8.5z M12.6,8.6 c-0.1,0.1-0.2,0.3-0.2,0.4v2.7c0,0.2,0.1,0.3,0.2,0.4l2.4,1.7V7L12.6,8.6z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];