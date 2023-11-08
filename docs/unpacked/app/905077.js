var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RefreshLargeIcon = function (e) {
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
  let _ = 48;
  let g = 48;
  if (!(r == null && c == null)) {
    _ = r;
    g = c;
  }
  return l.default.createElement(o.BaseSvgSpan, (0, i.default)({
    name: "refresh-large"
  }, p), l.default.createElement("svg", {
    viewBox: (t = f) !== null && t !== undefined ? t : "0 0 48 48",
    height: _,
    width: g,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, s.default)(n),
    version: "1.1"
  }, l.default.createElement("title", null, "refresh-l-light"), l.default.createElement("desc", null, "Created with Sketch."), l.default.createElement("defs", null), l.default.createElement("g", {
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, l.default.createElement("g", {
    id: "ic_refresh_black_24px",
    fill: "currentColor",
    fillRule: "nonzero"
  }, l.default.createElement("path", {
    d: "M35.3,12.7 C32.4,9.8 28.42,8 24,8 C15.16,8 8.02,15.16 8.02,24 C8.02,32.84 15.16,40 24,40 C31.46,40 37.68,34.9 39.46,28 L35.3,28 C33.66,32.66 29.22,36 24,36 C17.38,36 12,30.62 12,24 C12,17.38 17.38,12 24,12 C27.32,12 30.28,13.38 32.44,15.56 L26,22 L40,22 L40,8 L35.3,12.7 Z",
    id: "Shape"
  })))));
};
var i = r(require("../vendor/967154.js"));
var a = r(require("../vendor/506479.js"));
var o = require("./220584.js");
var s = r(require("./156720.js"));
var l = r(require("../vendor/667294.js"));
const u = ["iconXstyle", "height", "width", "viewBox"];