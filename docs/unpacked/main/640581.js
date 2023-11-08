var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DndIcon = function (e) {
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
    name: "dnd"
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
    d: "M10.6,5.27v-0.6c0-0.68,0.6-1.28,1.27-1.28c0.68,0,1.27,0.6,1.27,1.28v0.59 c2.47,0.59,4.25,2.72,4.25,5.36v3.06L9.41,5.7C9.75,5.53,10.18,5.36,10.6,5.27z M11.88,20.4c-0.94,0-1.7-0.76-1.7-1.7h3.4 C13.57,19.64,12.81,20.4,11.88,20.4z M18.85,19.55l-1.7-1.7H4.65V17l1.7-1.7v-4.68c0-1.02,0.26-1.95,0.76-2.81L4.65,5.36l1.1-1.11 l14.19,14.19L18.85,19.55z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];