var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreatePollIcon = function (e) {
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
  let m = 53;
  let h = 53;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "create-poll"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 53 53",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("circle", {
    cx: 26.5,
    cy: 26.5,
    r: 26.5,
    fill: "#02A698"
  }), u.default.createElement("path", {
    opacity: 0.15,
    d: "M26.5 0C11.8645 0 0 11.8645 0 26.5H53C53 11.8645 41.1355 0 26.5 0Z",
    fill: "#111B21"
  }), u.default.createElement("rect", {
    x: 15.7051,
    y: 26.6035,
    width: 5.94055,
    height: 9.50487,
    rx: 1.21053,
    fill: "white"
  }), u.default.createElement("rect", {
    x: 24.0215,
    y: 14.7227,
    width: 5.94055,
    height: 21.386,
    rx: 1.21053,
    fill: "white"
  }), u.default.createElement("rect", {
    x: 32.3379,
    y: 21.8496,
    width: 5.94055,
    height: 14.2573,
    rx: 1.21053,
    fill: "white"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];