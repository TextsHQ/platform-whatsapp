var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkPlaceholderLightIcon = function (e) {
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
  let m = 19;
  let h = 19;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "link-placeholder-light"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 19 19",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    d: "M3.47097 15.7565C2.18121 14.4667 2.18121 12.3699 3.47097 11.0802L6.48796 8.06318L5.05489 6.63011L2.0379 9.6471C-0.0438237 11.7288 -0.0438237 15.1078 2.0379 17.1896C4.11962 19.2713 7.49865 19.2713 9.58037 17.1896L12.5974 14.1726L11.1643 12.7395L8.1473 15.7565C6.85754 17.0463 4.76073 17.0463 3.47097 15.7565ZM7.31763 13.4183L13.3516 7.38436L11.8431 5.87586L5.80913 11.9098L7.31763 13.4183ZM9.58037 2.10463L6.56338 5.12162L7.99645 6.55469L11.0134 3.5377C12.3032 2.24793 14.4 2.24793 15.6898 3.5377C16.9795 4.82746 16.9795 6.92427 15.6898 8.21403L12.6728 11.231L14.1059 12.6641L17.1228 9.6471C19.2046 7.56538 19.2046 4.18635 17.1228 2.10463C15.0411 0.0229051 11.6621 0.0229051 9.58037 2.10463Z",
    fill: "currentColor"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];