var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlertBellIcon = function (e) {
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
  let m = 20;
  let h = 16;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "alert-bell"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 16 20",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    d: "M8.0013 20C9.16145 20 10.1107 19.0769 10.1107 17.9487H5.89194C5.89194 19.0769 6.8306 20 8.0013 20ZM14.3294 13.8462V8.71795C14.3294 5.56923 12.5997 2.93333 9.58332 2.2359V1.53846C9.58332 0.68718 8.87668 0 8.0013 0C7.12591 0 6.41928 0.68718 6.41928 1.53846V2.2359C3.39235 2.93333 1.67322 5.55897 1.67322 8.71795V13.8462L0.312688 15.1692C-0.351759 15.8154 0.112299 16.9231 1.05096 16.9231H14.9411C15.8798 16.9231 16.3544 15.8154 15.6899 15.1692L14.3294 13.8462Z",
    fill: "currentColor"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];