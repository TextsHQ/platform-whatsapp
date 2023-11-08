var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ForwardedIcon = function (e) {
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
  let m = 16;
  let h = 16;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "forwarded"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 16 16",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1"
  }, u.default.createElement("path", {
    d: "M9.51866667,3.87533333 C9.51866667,3.39333333 10.1006667,3.152 10.4406667,3.49266667 L14.4706667,7.52666667 C14.682,7.738 14.682,8.07933333 14.4706667,8.29066667 L10.4406667,12.3246667 C10.1006667,12.6646667 9.51866667,12.424 9.51866667,11.942 L9.51866667,10.1206667 C6.12133333,10.1206667 3.63266667,11.0906667 1.78266667,13.1946667 C1.61866667,13.3806667 1.31466667,13.2226667 1.38133333,12.984 C2.33466667,9.53533333 4.66466667,6.31466667 9.51866667,5.62066667 L9.51866667,3.87533333 Z",
    fill: "currentColor"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];