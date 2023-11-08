var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElectronDeprecationDownloadNativeIcon = function (e) {
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
    name: "electron-deprecation-download-native"
  }, p), l.default.createElement("svg", {
    viewBox: (t = f) !== null && t !== undefined ? t : "0 0 48 48",
    height: _,
    width: g,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, s.default)(n),
    fill: "none"
  }, l.default.createElement("path", {
    d: "M2 24.165C2 11.924 11.919 2 24.154 2C36.389 2 46.308 11.924 46.308 24.165C46.308 36.406 36.389 46.33 24.154 46.33C11.919 46.33 2 36.406 2 24.165Z",
    fill: "#00A884"
  }), l.default.createElement("path", {
    d: "M30.3252 22.4417H26.6585V17.0333H21.2502V22.4417H17.5835L23.9085 28.7667L30.3252 22.4417V22.4417ZM17.6752 30.6V32.4333H30.4168V30.6H17.6752Z",
    fill: "currentColor"
  })));
};
var i = r(require("../vendor/967154.js"));
var a = r(require("../vendor/506479.js"));
var o = require("./220584.js");
var s = r(require("./156720.js"));
var l = r(require("../vendor/667294.js"));
const u = ["iconXstyle", "height", "width", "viewBox"];