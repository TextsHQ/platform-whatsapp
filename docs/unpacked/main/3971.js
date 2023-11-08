var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmptyBlockedIcon = function (e) {
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
  let m = 90;
  let h = 90;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "empty-blocked"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 90 90",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1",
    x: "0px",
    y: "0px",
    enableBackground: "new 0 0 90 90"
  }, u.default.createElement("path", {
    fill: "currentColor",
    d: "M67.436,76.012c-5.561,0-10.104-4.542-10.104-10.104c0-2.08,0.637-4.033,1.741-5.689l14.052,14.052 C71.469,75.375,69.517,76.012,67.436,76.012z M57.715,51.856C51.474,49.479,44.13,48.29,39.12,48.29 c-10.274,0-30.481,4.967-30.481,15.241v7.642h42.58c-0.552-1.656-0.849-3.439-0.849-5.264 C50.328,60.092,53.257,54.955,57.715,51.856z M39.12,40.649c8.406,0,15.241-6.877,15.241-15.241c0-8.406-6.877-15.241-15.241-15.241 S23.88,17.045,23.88,25.408C23.837,33.814,30.715,40.649,39.12,40.649z M67.436,51.984c-7.684,0-13.925,6.241-13.925,13.925 c0,7.684,6.241,13.925,13.925,13.925s13.925-6.241,13.925-13.925C81.361,58.224,75.12,51.984,67.436,51.984z M75.8,71.554 L61.748,57.502c1.613-1.104,3.566-1.741,5.689-1.741c5.561,0,10.104,4.542,10.104,10.104C77.54,67.988,76.903,69.941,75.8,71.554z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];