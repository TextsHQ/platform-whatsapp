var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XSoftIcon = function (e) {
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
    name: "x-soft"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    d: "M 8.785 15.536 C 8.395 15.145 8.395 14.512 8.785 14.121 L 10.906 12 L 8.785 9.879 C 8.395 9.489 8.395 8.855 8.785 8.465 C 9.176 8.074 9.809 8.074 10.2 8.465 L 12.32 10.586 L 14.442 8.464 C 14.833 8.074 15.466 8.074 15.856 8.464 C 16.247 8.855 16.247 9.488 15.856 9.879 L 13.735 12 L 15.856 14.122 C 16.247 14.512 16.247 15.145 15.856 15.536 C 15.466 15.926 14.833 15.926 14.442 15.536 L 12.321 13.415 L 10.2 15.536 C 9.809 15.926 9.176 15.926 8.785 15.536 Z",
    fill: "currentColor"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];