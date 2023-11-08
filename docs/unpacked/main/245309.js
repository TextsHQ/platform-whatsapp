var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MissIcon = function (e) {
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
  let h = 20;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "miss"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 20 17",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1",
    x: "0px",
    y: "0px",
    enableBackground: "new 0 0 20 17"
  }, u.default.createElement("path", {
    fill: "currentColor",
    d: "M18.2,12.1L18.2,12.1c-1.5-1.8-5-2.7-8.2-2.7s-6.7,1-8.2,2.7c-0.7,0.8-0.3,2.3,0.2,2.8 c0.2,0.2,0.3,0.3,0.5,0.3c1.4,0,3.6-0.7,3.6-0.7c0.5-0.2,0.8-0.5,0.8-1c0,0,0-0.7,0-1.3c0.7-1.2,5.4-1.2,6.4-0.1c0,0,0,0,0.1,0.1 v1.3c0,0.2,0.1,0.4,0.2,0.6c0.1,0.2,0.3,0.3,0.5,0.4c0,0,2.2,0.7,3.6,0.7C17.9,15.2,19.1,13.2,18.2,12.1z M5.4,3.2l4.7,4.6l5.8-5.7 L15,1.3L10.1,6L6.4,2.3h2.5V1H4.1v4.8h1.3C5.4,5.8,5.4,3.2,5.4,3.2z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];