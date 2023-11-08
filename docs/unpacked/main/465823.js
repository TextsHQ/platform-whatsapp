var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsletterSystemMessageIcon = function (e) {
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
  let m = 14;
  let h = 14;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "newsletter-system-message"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 14 14",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    d: "M5.11003 4.98C4.86003 4.71 4.42003 4.72 4.20003 5.01C3.79003 5.58 3.54003 6.28 3.54003 7.03C3.54003 7.73 3.75003 8.38 4.11003 8.93C4.33003 9.26 4.79003 9.31 5.06003 9.02C5.26003 8.81 5.27003 8.5 5.11003 8.25C4.88003 7.9 4.75003 7.48 4.75003 7.03C4.75003 6.56 4.90003 6.12 5.15003 5.76C5.32003 5.52 5.32003 5.19 5.11003 4.98ZM8.91003 4.96C8.71003 5.18 8.70003 5.51 8.87003 5.75C9.12003 6.11 9.28003 6.55 9.28003 7.03C9.28003 7.51 9.14003 7.91 8.91003 8.26C8.75003 8.5 8.76003 8.82 8.96003 9.03C9.23003 9.32 9.69003 9.27 9.91003 8.94C10.27 8.39 10.48 7.74 10.48 7.03C10.48 6.27 10.23 5.57 9.82003 5C9.60003 4.71 9.16003 4.7 8.91003 4.96Z",
    fill: "currentColor"
  }), u.default.createElement("path", {
    d: "M7.01003 7.9C7.50709 7.9 7.91003 7.49706 7.91003 7C7.91003 6.50294 7.50709 6.1 7.01003 6.1C6.51298 6.1 6.11003 6.50294 6.11003 7C6.11003 7.49706 6.51298 7.9 7.01003 7.9Z",
    fill: "currentColor"
  }), u.default.createElement("path", {
    d: "M11.78 3.39C11.57 3.1 11.15 3.06 10.89 3.3C10.67 3.51 10.63 3.85 10.81 4.09C12.18 5.91 12.13 8.38 10.7 10.09C10.51 10.32 10.53 10.66 10.73 10.88C10.98 11.14 11.4 11.12 11.63 10.85C13.4 8.72 13.47 5.66 11.79 3.4L11.78 3.39ZM3.30003 3.12C3.05003 2.86 2.62003 2.88 2.39003 3.16C0.540032 5.37 0.530032 8.62 2.39003 10.85C2.62003 11.13 3.05003 11.15 3.30003 10.88C3.51003 10.66 3.53003 10.32 3.34003 10.09C1.83003 8.3 1.85003 5.68 3.34003 3.91C3.54003 3.68 3.52003 3.33 3.31003 3.11L3.30003 3.12Z",
    fill: "currentColor"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];