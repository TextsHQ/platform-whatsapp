var o = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CaretDownIcon = function (e) {
  var t;
  const {
    iconXstyle: n,
    height: o,
    width: d,
    viewBox: c
  } = e;
  const f = (0, a.default)(e, u);
  let m;
  if (c) {
    const {
      x: e = 0,
      y: t = 0,
      width: n = 0,
      height: o = 0
    } = c;
    m = [e, t, n, o].join(" ");
  }
  let p = 5;
  let h = 10;
  if (!(o == null && d == null)) {
    p = o;
    h = d;
  }
  return s.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "caret-down"
  }, f), s.default.createElement("svg", {
    viewBox: (t = m) !== null && t !== undefined ? t : "0 0 10 5",
    height: p,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, s.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0 0L5 5L10 0H0Z",
    fill: "currentColor",
    fillOpacity: 0.3
  })));
};
var r = o(require("../vendor/967154.js"));
var a = o(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = o(require("../app/156720.js"));
var s = o(require("../vendor/667294.js"));
const u = ["iconXstyle", "height", "width", "viewBox"];