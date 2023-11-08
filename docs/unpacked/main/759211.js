var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HsmCallIcon = function (e) {
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
  let m = 18;
  let h = 18;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "hsm-call"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 18 18",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1"
  }, u.default.createElement("path", {
    d: "M15.0075,11.535 C14.085,11.535 13.1925,11.385 12.36,11.115 C12.0975,11.025 11.805,11.0925 11.6025,11.295 L10.425,12.7725 C8.3025,11.76 6.315,9.8475 5.2575,7.65 L6.72,6.405 C6.9225,6.195 6.9825,5.9025 6.9,5.64 C6.6225,4.8075 6.48,3.915 6.48,2.9925 C6.48,2.5875 6.1425,2.25 5.7375,2.25 L3.1425,2.25 C2.7375,2.25 2.25,2.43 2.25,2.9925 C2.25,9.96 8.0475,15.75 15.0075,15.75 C15.54,15.75 15.75,15.2775 15.75,14.865 L15.75,12.2775 C15.75,11.8725 15.4125,11.535 15.0075,11.535 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];