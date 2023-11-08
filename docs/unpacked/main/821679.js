var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsletterOutlineIcon = function (e) {
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
  let m = 24;
  let h = 24;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "newsletter-outline"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    d: "M22.9215 10.6475C22.3207 6.09041 18.5555 2.4568 13.9892 2.04526C8.06099 1.49319 3.16422 6.0603 3.05407 11.9825C3.01402 14.1104 3.82514 15.9373 4.23571 16.7202L3.04406 20.665C2.81374 21.4279 3.52472 22.1405 4.28578 21.9097L8.17115 20.7453C9.6532 21.5684 11.3155 22 13.0178 22C18.9661 22 23.7126 16.7604 22.9115 10.6475H22.9215ZM10.965 19.7315C10.1739 19.5308 9.42288 19.1694 8.73192 18.7378L8.46155 18.5671L5.50746 19.4505L6.40871 16.4492L6.16838 16.0678C6.16838 16.0678 5.01679 14.2008 5.05684 12.0226C5.14697 7.25477 9.09242 3.58101 13.859 4.05278C17.3438 4.39406 20.2679 7.08413 20.8787 10.5371C21.9101 16.2886 16.753 21.207 10.965 19.7415V19.7315Z",
    fill: "currentColor"
  }), u.default.createElement("path", {
    d: "M9.85 8.65001C9.43 8.20001 8.7 8.21001 8.34 8.70001C7.66 9.64001 7.25 10.8 7.25 12.06C7.25 13.22 7.6 14.3 8.19 15.21C8.55 15.76 9.32 15.84 9.77 15.37C10.1 15.02 10.11 14.5 9.85 14.1C9.47 13.52 9.25 12.82 9.25 12.07C9.25 11.28 9.5 10.56 9.92 9.96001C10.2 9.56001 10.2 9.02001 9.86 8.66001L9.85 8.65001ZM16.14 8.63001C15.8 9.00001 15.8 9.54001 16.08 9.94001C16.5 10.54 16.75 11.27 16.75 12.06C16.75 12.85 16.53 13.51 16.14 14.1C15.88 14.5 15.89 15.03 16.22 15.38C16.67 15.86 17.44 15.77 17.8 15.23C18.4 14.32 18.75 13.24 18.75 12.07C18.75 10.81 18.34 9.64001 17.65 8.70001C17.29 8.21001 16.56 8.20001 16.14 8.64001V8.63001Z",
    fill: "currentColor"
  }), u.default.createElement("path", {
    d: "M13 13.5C13.8284 13.5 14.5 12.8284 14.5 12C14.5 11.1716 13.8284 10.5 13 10.5C12.1716 10.5 11.5 11.1716 11.5 12C11.5 12.8284 12.1716 13.5 13 13.5Z",
    fill: "currentColor"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];