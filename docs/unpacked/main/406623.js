var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeactivateIconIcon = function (e) {
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
    name: "deactivate-icon"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    d: "M14.9 3H9.1C8.57 3 8.06 3.21 7.68 3.59L3.58 7.69C3.21 8.06 3 8.57 3 9.1V14.9C3 15.43 3.21 15.94 3.59 16.31L7.69 20.41C8.06 20.79 8.57 21 9.1 21H14.9C15.43 21 15.94 20.79 16.31 20.41L20.41 16.31C20.79 15.94 21 15.43 21 14.9V9.1C21 8.57 20.79 8.06 20.41 7.69L16.31 3.59C15.94 3.21 15.43 3 14.9 3ZM15.54 15.54C15.15 15.93 14.52 15.93 14.13 15.54L12 13.41L9.88 15.53C9.49 15.92 8.86 15.92 8.47 15.53C8.08 15.14 8.08 14.51 8.47 14.12L10.59 12L8.46 9.88C8.07 9.49 8.07 8.86 8.46 8.47C8.85 8.08 9.48 8.08 9.87 8.47L12 10.59L14.12 8.47C14.51 8.08 15.14 8.08 15.53 8.47C15.92 8.86 15.92 9.49 15.53 9.88L13.41 12L15.53 14.12C15.93 14.51 15.93 15.15 15.54 15.54Z",
    fill: "currentColor"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];