var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReceiptIcon = function (e) {
  var t;
  const {
    iconXstyle: n,
    height: r,
    width: c,
    viewBox: d
  } = e;
  const p = (0, a.default)(e, u);
  let f;
  if (d) {
    const {
      x: e = 0,
      y: t = 0,
      width: n = 0,
      height: r = 0
    } = d;
    f = [e, t, n, r].join(" ");
  }
  let _ = 12;
  let g = 12;
  if (!(r == null && c == null)) {
    _ = r;
    g = c;
  }
  return l.default.createElement(o.BaseSvgSpan, (0, i.default)({
    name: "receipt"
  }, p), l.default.createElement("svg", {
    viewBox: (t = f) !== null && t !== undefined ? t : "0 0 12 12",
    height: _,
    width: g,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, s.default)(n),
    fill: "currentColor"
  }, l.default.createElement("path", {
    d: "M0.75 11.8242V0.175781L1.625 1.05078L2.5 0.175781L3.375 1.05078L4.25 0.175781L5.125 1.05078L6 0.175781L6.875 1.05078L7.75 0.175781L8.625 1.05078L9.5 0.175781L10.375 1.05078L11.25 0.175781V11.8242L10.375 10.9492L9.5 11.8242L8.625 10.9492L7.75 11.8242L6.875 10.9492L6 11.8242L5.125 10.9492L4.25 11.8242L3.375 10.9492L2.5 11.8242L1.625 10.9492L0.75 11.8242ZM9.5 4.25V3.07422H2.5V4.25H9.5ZM9.5 6.57422V5.42578H2.5V6.57422H9.5ZM9.5 8.92578V7.75H2.5V8.92578H9.5Z"
  })));
};
var i = r(require("../vendor/967154.js"));
var a = r(require("../vendor/506479.js"));
var o = require("./220584.js");
var s = r(require("./156720.js"));
var l = r(require("../vendor/667294.js"));
const u = ["iconXstyle", "height", "width", "viewBox"];