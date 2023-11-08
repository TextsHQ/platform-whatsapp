var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsHelpIcon = function (e) {
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
    name: "settings-help"
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
    d: "M12,4.7c-4.5,0-8.2,3.7-8.2,8.2s3.7,8.2,8.2,8.2s8.2-3.7,8.2-8.2S16.5,4.7,12,4.7z  M12.8,18.6h-1.6V17h1.6V18.6z M14.5,12.3L13.8,13c-0.7,0.6-1,1.1-1,2.3h-1.6v-0.4c0-0.9,0.3-1.7,1-2.3l1-1.1 c0.3-0.2,0.5-0.7,0.5-1.1c0-0.9-0.7-1.6-1.6-1.6s-1.6,0.7-1.6,1.6H8.7c0-1.8,1.5-3.3,3.3-3.3s3.3,1.5,3.3,3.3 C15.3,11.2,14.9,11.8,14.5,12.3z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];