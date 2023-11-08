var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InfoFilledGreenCircleIcon = function (e) {
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
  let g = 48;
  if (!(r == null && c == null)) {
    _ = r;
    g = c;
  }
  return l.default.createElement(o.BaseSvgSpan, (0, i.default)({
    name: "info-filled-green-circle"
  }, p), l.default.createElement("svg", {
    viewBox: (t = f) !== null && t !== undefined ? t : "0 0 48 49",
    height: _,
    width: g,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, s.default)(n),
    fill: "none"
  }, l.default.createElement("path", {
    d: "M46 24.5C46 36.6503 36.1503 46.5 24 46.5C11.8497 46.5 2 36.6503 2 24.5C2 12.3497 11.8497 2.5 24 2.5C36.1503 2.5 46 12.3497 46 24.5Z",
    fill: "#00A884"
  }), l.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M23.9998 16.167C19.3998 16.167 15.6665 19.9003 15.6665 24.5003C15.6665 29.1003 19.3998 32.8337 23.9998 32.8337C28.5998 32.8337 32.3332 29.1003 32.3332 24.5003C32.3332 19.9003 28.5998 16.167 23.9998 16.167ZM23.9998 28.667C23.5415 28.667 23.1665 28.292 23.1665 27.8337V24.5003C23.1665 24.042 23.5415 23.667 23.9998 23.667C24.4582 23.667 24.8332 24.042 24.8332 24.5003V27.8337C24.8332 28.292 24.4582 28.667 23.9998 28.667ZM23.1665 22.0003H24.8332V20.3337H23.1665V22.0003Z",
    fill: "white"
  })));
};
var i = r(require("../vendor/967154.js"));
var a = r(require("../vendor/506479.js"));
var o = require("./220584.js");
var s = r(require("./156720.js"));
var l = r(require("../vendor/667294.js"));
const u = ["iconXstyle", "height", "width", "viewBox"];