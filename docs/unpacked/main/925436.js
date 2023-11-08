var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PinnedIcon = function (e) {
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
  let m = 19;
  let h = 19;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "pinned"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 19 19",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1",
    x: "0px",
    y: "0px",
    enableBackground: "new 0 0 19 19"
  }, u.default.createElement("path", {
    fill: "currentColor",
    d: "M9.5,18.419c-4.926,0-8.919-3.993-8.919-8.919 S4.574,0.581,9.5,0.581s8.919,3.993,8.919,8.919S14.426,18.419,9.5,18.419z M11.621,12.711l-0.082-2.99l1.647-1.963 c0.564-0.672,0.481-1.672-0.188-2.232l-0.32-0.269c-0.668-0.56-1.662-0.475-2.231,0.203L8.803,7.42L5.839,7.859 c-0.241,0.036-0.327,0.339-0.14,0.496l5.458,4.58C11.343,13.092,11.627,12.954,11.621,12.711z M5.62,13.994 c0.203,0.171,0.504,0.154,0.688-0.038l2.204-2.307l-1.085-0.91L5.538,13.31C5.381,13.524,5.417,13.823,5.62,13.994z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];