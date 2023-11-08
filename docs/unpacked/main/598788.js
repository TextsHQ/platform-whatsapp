var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecurityShieldLockIcon = function (e) {
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
  let h = 20;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "security-shield-lock"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 20 22",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.50738 2.8785L8.96892 0.515331C9.63251 0.27264 10.3672 0.27264 11.0308 0.515331L17.4923 2.8785C18.6014 3.28412 19.3332 4.29734 19.3332 5.42726V11.0614C19.3332 14.829 16.7011 18.5967 11.437 21.3018C11.4073 21.317 11.3761 21.3329 11.3432 21.3494C10.5029 21.7724 9.49684 21.7724 8.65648 21.3495C8.62356 21.3329 8.59227 21.317 8.56261 21.3017C3.29854 18.5966 0.666504 14.829 0.666504 11.0614V5.42726C0.666504 4.29734 1.39832 3.28412 2.50738 2.8785ZM9.99984 4.33331C11.7571 4.33331 13.1817 5.74279 13.1817 7.48146V8.53084H13.3938C14.0967 8.53084 14.6665 9.09463 14.6665 9.7901V14.4074C14.6665 15.1029 14.0967 15.6666 13.3938 15.6666H6.6059C5.90299 15.6666 5.33317 15.1029 5.33317 14.4074V9.7901C5.33317 9.09463 5.90299 8.53084 6.6059 8.53084H6.81802V7.48146C6.81802 5.74279 8.24257 4.33331 9.99984 4.33331ZM8.09075 8.53084V7.48146C8.09075 6.43826 8.94547 5.59257 9.99984 5.59257C11.0542 5.59257 11.9089 6.43826 11.9089 7.48146V8.53084H8.09075ZM10.6362 12.5185C10.6362 12.8662 10.3513 13.1481 9.99984 13.1481C9.64838 13.1481 9.36347 12.8662 9.36347 12.5185C9.36347 12.1708 9.64838 11.8889 9.99984 11.8889C10.3513 11.8889 10.6362 12.1708 10.6362 12.5185Z",
    fill: "currentColor"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];