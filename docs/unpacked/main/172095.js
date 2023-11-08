var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnstarBtnIcon = function (e) {
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
    name: "unstar-btn"
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
    d: "M20.7,9.7c0.6-0.5,0.3-1.4-0.5-1.4l-5.4-0.1c-0.3,0-0.6-0.2-0.7-0.5l-1.8-5.1c-0.2-0.7-1.3-0.7-1.5,0L9.3,7 l7.8,5.5L20.7,9.7z M21.9,17.6l-0.1-0.1l0,0L3.2,4.6L2.3,5.8l3.4,2.4L2.9,8.3c-0.8,0-1.1,1-0.5,1.4L6.7,13C7,13.2,7.1,13.5,7,13.9 L5.4,19c-0.2,0.7,0.6,1.3,1.2,0.9l4.4-3.1c0.3-0.2,0.6-0.2,0.9,0l4.4,3.1c0.6,0.4,1.4-0.2,1.2-0.9l-0.9-3.1l4.3,3L21.9,17.6z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];