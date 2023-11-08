var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StarIcon = function (e) {
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
  let m = 15;
  let h = 16;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "star"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 16 15",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1",
    x: "0px",
    y: "0px",
    enableBackground: "new 0 0 16 15"
  }, u.default.createElement("path", {
    fill: "currentColor",
    d: "M8.3,10.2l-2.5,1.7c-0.3,0.2-0.8-0.1-0.7-0.5L6,8.6c0.1-0.2,0-0.4-0.2-0.5L3.5,6.3C3.1,6,3.3,5.5,3.7,5.5 l3-0.1c0.2,0,0.3-0.1,0.4-0.3l1-2.8c0.1-0.4,0.7-0.4,0.8,0l1,2.8c0.1,0.2,0.2,0.3,0.4,0.3l3,0.1c0.4,0,0.6,0.5,0.3,0.8l-2.4,1.8 C11.1,8.2,11,8.4,11,8.6l0.9,2.9c0.1,0.4-0.3,0.7-0.7,0.5l-2.5-1.7C8.6,10.1,8.4,10.1,8.3,10.2z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];