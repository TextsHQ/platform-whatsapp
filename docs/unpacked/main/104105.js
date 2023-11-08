var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentRequestIcon = function (e) {
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
  let m = 22;
  let h = 24;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "payment-request"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 22",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1"
  }, u.default.createElement("path", {
    d: "M1.42371587,3.0063004 L17.8212007,3.0063004 C20.1258609,3.0063004 21.9941571,4.87459661 21.9941571,7.17925674 L21.9941571,14.8251014 C21.9941571,17.1297615 20.1258609,18.9980577 17.8212007,18.9980577 L7.05250228,18.9980577 C4.74784211,18.9980577 2.8795459,17.1297615 2.8795459,14.8251014 L2.8795459,7.67246944 L0.72764689,4.27016141 C0.48450288,3.88573312 0.5990364,3.37698525 0.98346469,3.13384125 C1.11519074,3.05052686 1.26785363,3.0063004 1.42371587,3.0063004 Z",
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