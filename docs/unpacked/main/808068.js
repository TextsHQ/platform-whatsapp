var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AudioFileIcon = function (e) {
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
  let m = 55;
  let h = 55;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "audio-file"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 55 55",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1",
    x: "0px",
    y: "0px",
    enableBackground: "new 0 0 55 55"
  }, u.default.createElement("path", {
    fill: "#FFAD1F",
    d: "M0,0h55v55H0V0z"
  }), u.default.createElement("path", {
    fill: "#FFFFFF",
    d: "M27.5,16c-5.6,0-10,4.4-10,10v7.8c0,1.9,1.4,3.3,3.3,3.3h3.3v-8.9h-4.4V26c0-4.3,3.4-7.8,7.8-7.8 s7.8,3.4,7.8,7.8v2.2h-4.4v8.9h3.3c1.9,0,3.3-1.4,3.3-3.3V26C37.5,20.4,33.1,16,27.5,16z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];