var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusLocationIcon = function (e) {
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
  let m = 20;
  let h = 13;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "status-location"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 13 20",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1",
    x: "0px",
    y: "0px",
    enableBackground: "new 0 0 13 20"
  }, u.default.createElement("path", {
    fill: "currentColor",
    d: "M6.487,3.305C3.876,3.305,1.8,5.381,1.8,7.992c0,3.482,4.687,8.704,4.687,8.704 s4.687-5.222,4.687-8.704C11.173,5.38,9.098,3.305,6.487,3.305L6.487,3.305z M6.487,9.665c-0.937,0-1.674-0.737-1.674-1.674 s0.736-1.674,1.674-1.674s1.674,0.737,1.674,1.674C8.161,8.929,7.424,9.665,6.487,9.665L6.487,9.665z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];