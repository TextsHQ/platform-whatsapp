var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.E2ELocationIcon = function (e) {
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
    name: "e2e-location"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 3.85C15.2628 3.85 17.9 6.48723 17.9 9.75C17.9 11.2005 17.2341 12.9144 16.1692 14.6727C15.1244 16.3979 13.8026 17.9926 12.7293 19.1643C12.3206 19.6104 11.6795 19.6104 11.2707 19.1643C10.1975 17.9926 8.87559 16.3979 7.83078 14.6727C6.7659 12.9144 6.1 11.2005 6.1 9.75C6.1 6.48723 8.73723 3.85 12 3.85ZM12 2.25C16.1464 2.25 19.5 5.60357 19.5 9.75C19.5 13.5199 16.1311 17.8193 13.9091 20.245C12.8662 21.3835 11.1338 21.3835 10.0909 20.245C7.86889 17.8193 4.50001 13.5199 4.5 9.75C4.5 5.60357 7.85357 2.25 12 2.25ZM12 13.6C13.9192 13.6 15.475 12.0442 15.475 10.125C15.475 8.20581 13.9192 6.65 12 6.65C10.0808 6.65 8.525 8.20581 8.525 10.125C8.525 12.0442 10.0808 13.6 12 13.6ZM13.875 10.125C13.875 11.1605 13.0355 12 12 12C10.9645 12 10.125 11.1605 10.125 10.125C10.125 9.08947 10.9645 8.25 12 8.25C13.0355 8.25 13.875 9.08947 13.875 10.125Z",
    fill: "#8696A0"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];