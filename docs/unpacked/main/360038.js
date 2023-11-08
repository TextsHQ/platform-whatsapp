var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AudioPauseIcon = function (e) {
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
  let m = 34;
  let h = 34;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "audio-pause"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 34 34",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1",
    x: "0px",
    y: "0px",
    enableBackground: "new 0 0 34 34"
  }, u.default.createElement("path", {
    fill: "currentColor",
    d: "M9.2,25c0,0.5,0.4,1,0.9,1h3.6c0.5,0,0.9-0.4,0.9-1V9c0-0.5-0.4-0.9-0.9-0.9h-3.6 C9.7,8,9.2,8.4,9.2,9V25z M20.2,8c-0.5,0-1,0.4-1,0.9V25c0,0.5,0.4,1,1,1h3.6c0.5,0,1-0.4,1-1V9c0-0.5-0.4-0.9-1-0.9 C23.8,8,20.2,8,20.2,8z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];