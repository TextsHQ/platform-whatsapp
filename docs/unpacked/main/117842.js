var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExperimentIcon = function (e) {
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
    name: "experiment"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    d: "M4.3001 21C3.6001 21 3.10427 20.675 2.8126 20.025C2.52093 19.375 2.61677 18.7833 3.1001 18.25L9.3001 11.25V4.5H8.0001C7.78343 4.5 7.60427 4.42917 7.4626 4.2875C7.32093 4.14583 7.2501 3.96667 7.2501 3.75C7.2501 3.53333 7.32093 3.35417 7.4626 3.2125C7.60427 3.07083 7.78343 3 8.0001 3H16.0001C16.2168 3 16.3959 3.07083 16.5376 3.2125C16.6793 3.35417 16.7501 3.53333 16.7501 3.75C16.7501 3.96667 16.6793 4.14583 16.5376 4.2875C16.3959 4.42917 16.2168 4.5 16.0001 4.5H14.7001V11.25L20.9001 18.25C21.3834 18.7833 21.4793 19.375 21.1876 20.025C20.8959 20.675 20.4001 21 19.7001 21H4.3001Z",
    fill: "currentColor"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];