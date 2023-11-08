var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShopFilledIcon = function (e) {
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
    name: "shop-filled"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    d: "M18.2825 5.72255C18.2825 2.65588 15.6178 0.166992 12.3346 0.166992C9.05137 0.166992 6.38672 2.65588 6.38672 5.72255H3.86177C2.60543 5.72255 1.56563 6.63496 1.48726 7.80615L0.674063 19.9591C0.551119 21.7964 2.04611 23.379 4.01323 23.4938C4.08734 23.4982 4.16158 23.5003 4.23584 23.5003H20.1211H20.4316C22.4026 23.5003 24.0003 22.0079 24.0003 20.167C24.0003 20.0976 23.998 20.0283 23.9934 19.9591L23.1802 7.80615C23.1018 6.63496 22.062 5.72255 20.8057 5.72255H18.2825ZM12.3346 2.38921C14.3093 2.38921 15.9033 3.8781 15.9033 5.72255H8.76587C8.76587 3.8781 10.3599 2.38921 12.3346 2.38921ZM12.3364 13.5003C9.49219 13.5003 7.09961 11.7337 6.42822 9.33366C6.2207 8.63366 6.81884 7.94477 7.6123 7.94477C8.18603 7.94477 8.6499 8.32255 8.80859 8.83366C9.23584 10.2448 10.6519 11.2781 12.3364 11.2781C14.021 11.2781 15.437 10.2448 15.8643 8.83366C16.023 8.32255 16.4868 7.94477 17.0606 7.94477C17.854 7.94477 18.4399 8.63366 18.2446 9.33366C17.5732 11.7337 15.1807 13.5003 12.3364 13.5003Z",
    fill: "currentColor"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];