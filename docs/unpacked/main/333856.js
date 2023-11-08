var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusUnknownIcon = function (e) {
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
  let h = 18;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "status-unknown"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 18 18",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1",
    x: "0px",
    y: "0px",
    enableBackground: "new 0 0 18 18"
  }, u.default.createElement("path", {
    fill: "currentColor",
    d: "M15.2,4H0l3.1,4.1v5.4c0,0.9,0.7,1.5,1.5,1.5h10.5c0.9,0,1.5-0.7,1.5-1.5v-8 C16.7,4.7,16,4,15.2,4z M12.6,11.8l-0.8,0.8l-2.1-2.1l-2.1,2.1l-0.8-0.8L9,9.7L6.8,7.6l0.8-0.8l2.1,2.1l2.1-2.1l0.8,0.8l-2.1,2.1 L12.6,11.8z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];