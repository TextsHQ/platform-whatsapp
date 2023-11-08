var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PttFileIcon = function (e) {
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
    name: "ptt-file"
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
    fill: "#FA6533",
    d: "M0,0h55v55H0V0z"
  }), u.default.createElement("path", {
    fill: "#FFFFFF",
    d: "M27.1,14.8c1.8,0,3.2,1.5,3.2,3.5v9.5c0,1.9-1.4,3.5-3.2,3.5c-1.8,0-3.2-1.5-3.2-3.5v-9.5 C24,16.3,25.4,14.8,27.1,14.8z"
  }), u.default.createElement("path", {
    fill: "#FFFFFF",
    d: "M27.4,35.1c-0.1,0-0.5,0-0.7,0l-0.2,0c-3.1-0.3-5.6-2.9-6-6.3l0-0.3c0-0.4,0.3-0.7,0.7-0.7h0.3 c0.4,0,0.7,0.3,0.7,0.7l0.1,0.3c0.5,2.5,2.5,4.4,5,4.4c2.4,0,4.5-1.9,4.9-4.4l0.1-0.4c0-0.4,0.3-0.7,0.7-0.7h0.3 c0.4,0,0.7,0.3,0.7,0.7c0,0,0,0.1-0.1,0.5c-0.5,3.3-3.1,5.9-6.3,6.1L27.4,35.1z"
  }), u.default.createElement("path", {
    fill: "#FFFFFF",
    d: "M28,39.5c0,0.4-0.3,0.7-0.7,0.7H27c-0.4,0-0.7-0.3-0.7-0.7v-4.6c0-0.4,0.3-0.7,0.7-0.7h0.3 c0.4,0,0.7,0.3,0.7,0.7V39.5z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];