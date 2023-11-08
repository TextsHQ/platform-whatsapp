var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewOnceRetryIcon = function (e) {
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
    name: "view-once-retry"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    d: "M8.39015 10.6507H9.75301V14.9364C9.75301 15.4079 10.1387 15.7936 10.6102 15.7936H14.0387C14.5102 15.7936 14.8959 15.4079 14.8959 14.9364V10.6507H16.2587C17.0216 10.6507 17.4073 9.725 16.8673 9.185L12.933 5.25071C12.5987 4.91643 12.0587 4.91643 11.7244 5.25071L7.79015 9.185C7.25015 9.725 7.62729 10.6507 8.39015 10.6507ZM6.33301 18.365C6.33301 18.8364 6.71872 19.2221 7.19015 19.2221H17.4759C17.9473 19.2221 18.333 18.8364 18.333 18.365C18.333 17.8936 17.9473 17.5079 17.4759 17.5079H7.19015C6.71872 17.5079 6.33301 17.8936 6.33301 18.365Z",
    fill: "currentColor"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];