var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlertPhoneIcon = function (e) {
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
    name: "alert-phone"
  }, p), l.default.createElement("svg", {
    viewBox: (t = f) !== null && t !== undefined ? t : "0 0 48 48",
    height: _,
    width: g,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, s.default)(n),
    version: "1.1",
    x: "0px",
    y: "0px",
    enableBackground: "new 0 0 48 48"
  }, l.default.createElement("path", {
    fill: "currentColor",
    d: "M24.154,2C11.919,2,2,11.924,2,24.165S11.919,46.33,24.154,46.33 s22.154-9.924,22.154-22.165S36.389,2,24.154,2z"
  }), l.default.createElement("path", {
    className: "icon-shape",
    fill: "#FFBC00",
    d: "M19.352,30.776c0.809-0.008,1.626,0,2.443,0c0.008-2.05,0.008-4.109,0-6.159h-2.451 C19.336,26.667,19.328,28.725,19.352,30.776z M15.876,22.102l1.928-1.928l1.929,1.928l0.964-0.964l-1.929-1.929l1.929-1.928 l-0.964-0.964l-1.929,1.928l-1.928-1.928l-0.965,0.964l1.929,1.928l-1.929,1.929L15.876,22.102z M15.635,27.1 c0.008,1.225,0.008,2.443,0,3.668c0.825,0.016,1.642,0,2.467,0.008c0.008-1.233,0-2.459,0-3.692 C17.277,27.084,16.452,27.052,15.635,27.1z M30.42,17.232c0,4.517-0.008,9.026,0,13.544c0.825-0.008,1.642,0.008,2.467-0.008 c-0.008-4.509-0.008-9.01,0-13.52C32.07,17.2,31.245,17.24,30.42,17.232z M26.72,20.131c0.008,3.548-0.008,7.096,0.008,10.644 c0.817,0,1.634-0.008,2.443,0c0.032-3.684,0-7.377,0.016-11.061c-0.809-0.056-1.626,0-2.435-0.032 C26.728,19.827,26.72,19.979,26.72,20.131z M23.052,22.15c-0.024,0.152-0.024,0.312-0.024,0.464 c0.008,2.723-0.008,5.438,0.008,8.161h2.451c0.016-0.961,0-1.914,0.008-2.875c-0.016-1.914,0.024-3.836-0.016-5.751 C24.67,22.158,23.861,22.158,23.052,22.15z"
  })));
};
var i = r(require("../vendor/967154.js"));
var a = r(require("../vendor/506479.js"));
var o = require("./220584.js");
var s = r(require("./156720.js"));
var l = r(require("../vendor/667294.js"));
const u = ["iconXstyle", "height", "width", "viewBox"];