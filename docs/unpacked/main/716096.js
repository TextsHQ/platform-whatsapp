var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusMissIcon = function (e) {
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
    name: "status-miss"
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
    d: "M14.9,13.3L14.9,13.3C13.7,11.8,10.7,11,8,11s-5.6,0.8-6.9,2.3c-0.6,0.7-0.2,1.9,0.2,2.4 C1.4,15.9,1.6,16,1.7,16c1.1,0,3-0.6,3-0.6c0.4-0.2,0.6-0.5,0.6-0.8c0,0,0-0.6,0-1.1c0.6-1,4.6-1,5.4-0.1c0,0,0,0,0,0.1v1.1 c0,0.2,0.1,0.4,0.2,0.5c0.1,0.1,0.3,0.2,0.4,0.3c0,0,1.9,0.6,3,0.6C14.7,16,15.7,14.3,14.9,13.3z M4.2,5.9l4,3.9L13,5l-0.8-0.8 l-4.1,4L5,5.1h2.1V4h-4v4.1h1.1V5.9z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];