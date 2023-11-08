var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InfoShieldIcon = function (e) {
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
  let m = 16;
  let h = 12;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "info-shield"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 12 16",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "currentColor"
  }, u.default.createElement("path", {
    d: "M5.25 11.75H6.75V7.25H5.25V11.75ZM6 5.75C6.2125 5.75 6.39063 5.67813 6.53438 5.53438C6.67813 5.39062 6.75 5.2125 6.75 5C6.75 4.7875 6.67813 4.60938 6.53438 4.46563C6.39063 4.32188 6.2125 4.25 6 4.25C5.7875 4.25 5.60938 4.32188 5.46563 4.46563C5.32188 4.60938 5.25 4.7875 5.25 5C5.25 5.2125 5.32188 5.39062 5.46563 5.53438C5.60938 5.67813 5.7875 5.75 6 5.75ZM6 15.5C4.2625 15.0625 2.82812 14.0656 1.69688 12.5094C0.565625 10.9531 0 9.225 0 7.325V2.75L6 0.5L12 2.75V7.325C12 9.225 11.4344 10.9531 10.3031 12.5094C9.17188 14.0656 7.7375 15.0625 6 15.5ZM6 13.925C7.3 13.5125 8.375 12.6875 9.225 11.45C10.075 10.2125 10.5 8.8375 10.5 7.325V3.78125L6 2.09375L1.5 3.78125V7.325C1.5 8.8375 1.925 10.2125 2.775 11.45C3.625 12.6875 4.7 13.5125 6 13.925Z",
    fill: "currentColor"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];