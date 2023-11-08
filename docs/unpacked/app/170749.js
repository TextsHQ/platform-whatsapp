var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LabelIcon = function (e) {
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
  let _ = 24;
  let g = 24;
  if (!(r == null && c == null)) {
    _ = r;
    g = c;
  }
  return l.default.createElement(o.BaseSvgSpan, (0, i.default)({
    name: "label"
  }, p), l.default.createElement("svg", {
    viewBox: (t = f) !== null && t !== undefined ? t : "0 0 24 24",
    height: _,
    width: g,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, s.default)(n),
    version: "1.1",
    x: "0px",
    y: "0px",
    enableBackground: "new 0 0 24 24"
  }, l.default.createElement("path", {
    fill: "currentColor",
    d: "M5.81,6.899c-0.507,0-0.919,0.41-0.919,0.911v8.379c0,0.501,0.413,0.911,0.92,0.911l9.583,0.008 c0.302,0,0.58-0.146,0.749-0.385L19.494,12l-3.352-4.725c-0.168-0.238-0.446-0.384-0.748-0.384L5.81,6.899z M15.393,5 c0.921,0,1.774,0.447,2.292,1.182L21.812,12l-0.466,0.657l-3.66,5.159C17.166,18.553,16.314,19,15.393,19L5.81,18.992 C4.262,18.992,3,17.738,3,16.19V7.81c0-1.549,1.262-2.802,2.809-2.802L15.393,5z"
  })));
};
var i = r(require("../vendor/967154.js"));
var a = r(require("../vendor/506479.js"));
var o = require("./220584.js");
var s = r(require("./156720.js"));
var l = r(require("../vendor/667294.js"));
const u = ["iconXstyle", "height", "width", "viewBox"];