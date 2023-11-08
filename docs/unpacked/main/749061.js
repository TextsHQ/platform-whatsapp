var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessPauseadsIcon = function (e) {
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
  let h = 20;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "business-pauseads"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 20 16",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    d: "M0.5 12.1667V13.8333H5.5V12.1667H0.5ZM0.5 2.16667V3.83333H8.83333V2.16667H0.5ZM8.83333 15.5V13.8333H15.5V12.1667H8.83333V10.5H7.16667V15.5H8.83333ZM3.83333 5.5V7.16667H0.5V8.83333H3.83333V10.5H5.5V5.5H3.83333ZM15.5 8.83333V7.16667H7.16667V8.83333H15.5ZM10.5 5.5H12.1667V3.83333H15.5V2.16667H12.1667V0.5H10.5V5.5Z",
    fill: "currentColor"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];