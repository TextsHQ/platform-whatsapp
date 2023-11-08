var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlertUpdatePrimaryIcon = function (e) {
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
  let _ = 49;
  let g = 49;
  if (!(r == null && c == null)) {
    _ = r;
    g = c;
  }
  return l.default.createElement(o.BaseSvgSpan, (0, i.default)({
    name: "alert-update-primary"
  }, p), l.default.createElement("svg", {
    viewBox: (t = f) !== null && t !== undefined ? t : "0 0 49 49",
    height: _,
    width: g,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, s.default)(n),
    fill: "none"
  }, l.default.createElement("circle", {
    cx: 24.5,
    cy: 24.5,
    r: 24.5,
    fill: "#02A698"
  }), l.default.createElement("path", {
    d: "M16 13.5455V36.4545C16 37.8545 17.0929 39 18.4286 39H30.5714C31.9071 39 33 37.8545 33 36.4545V13.5455C33 12.1455 31.9071 11 30.5714 11H18.4286C17.0929 11 16 12.1455 16 13.5455ZM30.5714 32.6364H18.4286V17.3636H30.5714V32.6364ZM29.3571 25H25.7143V19.9091H23.2857V25H19.6429L24.5 30.0909L29.3571 25Z",
    fill: "white"
  })));
};
var i = r(require("../vendor/967154.js"));
var a = r(require("../vendor/506479.js"));
var o = require("./220584.js");
var s = r(require("./156720.js"));
var l = r(require("../vendor/667294.js"));
const u = ["iconXstyle", "height", "width", "viewBox"];