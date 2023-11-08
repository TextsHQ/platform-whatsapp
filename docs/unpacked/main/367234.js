var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsSecureIcon = function (e) {
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
    name: "settings-secure"
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
    d: "M4.19 4.37625L11.19 1.26625C11.7 1.03625 12.3 1.03625 12.81 1.26625L19.81 4.37625C20.53 4.69625 21 5.41625 21 6.20625V10.9062C21 16.4563 17.16 21.6462 12 22.9062C6.84 21.6462 3 16.4563 3 10.9062V6.20625C3 5.41625 3.47 4.69625 4.19 4.37625ZM6.7 13.6062L9.29 16.1962C9.68 16.5862 10.32 16.5862 10.7 16.1962L17.29 9.60625C17.68 9.21625 17.68 8.58625 17.29 8.19625C16.9 7.80625 16.27 7.80625 15.88 8.19625L10 14.0763L8.11 12.1962C7.72 11.8062 7.09 11.8062 6.7 12.1962C6.51275 12.3831 6.40751 12.6367 6.40751 12.9012C6.40751 13.1658 6.51275 13.4194 6.7 13.6062Z",
    fill: "#00A884"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];