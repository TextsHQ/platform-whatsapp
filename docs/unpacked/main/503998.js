var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AudioUploadIcon = function (e) {
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
  let m = 34;
  let h = 34;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "audio-upload"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 34 34",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1",
    x: "0px",
    y: "0px",
    enableBackground: "new 0 0 34 34"
  }, u.default.createElement("path", {
    fill: "currentColor",
    d: "M17,2c8.3,0,15,6.7,15,15s-6.7,15-15,15S2,25.3,2,17S8.7,2,17,2 M17,1C8.2,1,1,8.2,1,17 s7.2,16,16,16s16-7.2,16-16S25.8,1,17,1L17,1z"
  }), u.default.createElement("path", {
    fill: "currentColor",
    d: "M22,22.5H12c-0.3,0-0.5,0.2-0.5,0.5v0.5c0,0.3,0.2,0.5,0.5,0.5h10c0.3,0,0.5-0.2,0.5-0.5 V23C22.5,22.7,22.3,22.5,22,22.5z M15,16v4.3c0,0.3,0.3,0.6,0.6,0.6h2.8c0.3,0,0.6-0.3,0.6-0.6V16h2.8c0.5,0,0.7-0.3,0.3-0.7 l-4.5-4.8c-0.5-0.6-0.9-0.5-1.3,0l-4.5,4.8c-0.4,0.4-0.2,0.7,0.3,0.7H15z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];