var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MegaphoneIcon = function (e) {
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
  let m = 13;
  let h = 12;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "megaphone"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 12 13",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1",
    x: "0px",
    y: "0px",
    enableBackground: "new 0 0 12 13"
  }, u.default.createElement("path", {
    fill: "currentColor",
    d: "M1.684,10.744c0,0.378,0.306,0.684,0.684,0.684s0.684-0.306,0.684-0.684V9.932H1.684V10.744z  M10.63,1.886c-0.204-0.318-0.627-0.41-0.945-0.205L5.646,4.277H4.394c-0.365,0-0.661,0.296-0.661,0.661v3.305 c0,0.365,0.296,0.661,0.661,0.661h1.322c0.057,0,0.108-0.019,0.161-0.032l3.808,2.448c0.11,0.071,0.239,0.109,0.37,0.109 c0.378,0,0.684-0.306,0.684-0.684V2.256C10.738,2.125,10.701,1.996,10.63,1.886z M1,4.938v3.305c0,0.365,0.296,0.661,0.661,0.661 h1.39V4.277h-1.39C1.296,4.277,1,4.573,1,4.938z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];