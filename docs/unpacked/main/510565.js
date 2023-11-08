var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImgPlaceholderIcon = function (e) {
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
  let m = 42;
  let h = 42;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "img-placeholder"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 42 42",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M42 4.66667V37.3333C42 39.9 39.9 42 37.3333 42H4.66667C2.1 42 0 39.9 0 37.3333V4.66667C0 2.1 2.1 0 4.66667 0H37.3333C39.9 0 42 2.1 42 4.66667ZM18.6667 31.5233L13.7667 25.62C13.2767 25.0367 12.39 25.06 11.9467 25.6667L6.13667 33.1333C5.53 33.9033 6.06667 35.0233 7.04667 35.0233H35.0233C35.98 35.0233 36.54 33.9267 35.9567 33.1567L27.7667 22.2367C27.3 21.6067 26.3667 21.6067 25.9 22.2133L18.6667 31.5233Z",
    fill: "currentColor"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];