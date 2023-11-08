var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsWallpaperIcon = function (e) {
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
  let m = 24;
  let h = 24;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "settings-wallpaper"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1",
    x: "0px",
    y: "0px",
    enableBackground: "new 0 0 24 24"
  }, u.default.createElement("path", {
    fill: "currentColor",
    d: "M4.9,5.9h6.4V4.1H4.9c-1,0-1.8,0.8-1.8,1.8v6.4h1.8V5.9z M10.2,13.9l-3.6,4.4h10.7 l-2.7-3.6l-1.8,2.4L10.2,13.9z M16.4,9.9c0-0.7-0.6-1.3-1.3-1.3s-1.3,0.6-1.3,1.3s0.6,1.3,1.3,1.3S16.4,10.6,16.4,9.9z M19.1,4.1 h-6.4v1.8h6.4v6.4h1.8V5.9C20.9,4.9,20.1,4.1,19.1,4.1z M19.1,20.1h-6.4v1.8h6.4c1,0,1.8-0.8,1.8-1.8v-6.4h-1.8V20.1z M4.9,13.7H3.1 v6.4c0,1,0.8,1.8,1.8,1.8h6.4v-1.8H4.9V13.7z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];