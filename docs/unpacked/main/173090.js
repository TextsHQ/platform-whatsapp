var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReplyIcon = function (e) {
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
    name: "reply"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1",
    x: "0px",
    y: "0px"
  }, u.default.createElement("path", {
    fill: "currentColor",
    d: "M9.72,7.43C17,8.47,20.5,13.3,21.93,18.48 c0.1,0.36-0.36,0.59-0.6,0.32c-2.77-3.16-6.51-4.61-11.6-4.61v2.73c0,0.72-0.87,1.08-1.38,0.57l-6.05-6.05 c-0.32-0.32-0.32-0.83,0-1.15l6.05-6.05c0.51-0.51,1.38-0.15,1.38,0.57V7.43z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];