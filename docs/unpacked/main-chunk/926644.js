var o = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterIcon = function (e) {
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
  let p = 24;
  let h = 24;
  if (!(o == null && d == null)) {
    p = o;
    h = d;
  }
  return s.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "filter"
  }, f), s.default.createElement("svg", {
    viewBox: (t = m) !== null && t !== undefined ? t : "0 0 24 24",
    height: p,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1",
    x: "0px",
    y: "0px",
    enableBackground: "new 0 0 24 24"
  }, s.default.createElement("path", {
    fill: "currentColor",
    d: "M10,18.1h4v-2h-4V18.1z M3,6.1v2h18v-2H3z M6,13.1h12v-2H6V13.1z"
  })));
};
var r = o(require("../vendor/967154.js"));
var a = o(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = o(require("../app/156720.js"));
var s = o(require("../vendor/667294.js"));
const u = ["iconXstyle", "height", "width", "viewBox"];