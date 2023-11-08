var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BotFeedbackIcon = function (e) {
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
    name: "bot-feedback"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("g", null, u.default.createElement("path", {
    d: "M2 14C1.45 14 0.979167 13.8041 0.5875 13.4125C0.195833 13.0208 0 12.55 0 12V6.22496C0 5.9583 0.05 5.70413 0.15 5.46246C0.25 5.2208 0.391667 5.0083 0.575 4.82496L4.65 0.749964C4.81667 0.583297 5.025 0.487464 5.275 0.462464C5.525 0.437464 5.75 0.491631 5.95 0.624964C6.15 0.758297 6.3 0.937464 6.4 1.16246C6.5 1.38746 6.525 1.61663 6.475 1.84996L5.8 4.99996H10.05C10.85 4.99996 11.425 5.3083 11.775 5.92496C12.125 6.54163 12.1667 7.16663 11.9 7.79996L9.775 12.775C9.60833 13.1583 9.3625 13.4583 9.0375 13.675C8.7125 13.8916 8.35 14 7.95 14H2ZM7.95 12L10 7.14996V6.99996H3.35L3.95 4.29996L2 6.19996V12H7.95ZM17.85 23.225C17.6833 23.0916 17.5792 22.925 17.5375 22.725C17.4958 22.525 17.4917 22.3333 17.525 22.15L18.2 19H14C13.2 19 12.6125 18.6958 12.2375 18.0875C11.8625 17.4791 11.8167 16.85 12.1 16.2L14.225 11.225C14.3917 10.8416 14.6375 10.5416 14.9625 10.325C15.2875 10.1083 15.65 9.99996 16.05 9.99996H22C22.55 9.99996 23.0208 10.1958 23.4125 10.5875C23.8042 10.9791 24 11.45 24 12V17.775C24 18.0416 23.95 18.2958 23.85 18.5375C23.75 18.7791 23.6083 18.9916 23.425 19.175L19.35 23.25C19.1333 23.4666 18.8833 23.5625 18.6 23.5375C18.3167 23.5125 18.0667 23.4083 17.85 23.225ZM16.05 12L14 16.85V17H20.65L20.05 19.7L22 17.8V12H16.05Z",
    fill: "currentColor"
  }))));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];