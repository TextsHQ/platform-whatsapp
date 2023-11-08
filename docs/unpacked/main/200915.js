var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StarBtnIcon = function (e) {
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
    name: "star-btn"
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
    d: "M11.1,16.8l-4.4,3.1C6,20.4,5.2,19.8,5.4,19L7,13.9c0.1-0.3,0-0.7-0.3-0.9L2.4,9.7C1.8,9.3,2.1,8.3,2.9,8.3 l5.4-0.1C8.6,8.2,8.9,8,9,7.6l1.8-5.1c0.2-0.7,1.3-0.7,1.5,0l1.8,5.1c0.1,0.3,0.4,0.5,0.7,0.5l5.4,0.1c0.8,0,1.1,1,0.5,1.4L16.4,13 c-0.3,0.2-0.4,0.5-0.3,0.9l1.6,5.2c0.2,0.7-0.6,1.3-1.2,0.9L12,16.8C11.7,16.6,11.4,16.6,11.1,16.8z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];