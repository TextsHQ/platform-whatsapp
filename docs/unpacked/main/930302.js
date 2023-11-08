var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ForwardChatIcon = function (e) {
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
  let m = 25;
  let h = 25;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "forward-chat"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 25 25",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1",
    x: "0px",
    y: "0px",
    enableBackground: "new 0 0 25 25"
  }, u.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "currentColor",
    d: "M14.248,6.973c0-0.614,0.741-0.921,1.174-0.488l5.131,5.136 c0.269,0.269,0.269,0.704,0,0.973l-5.131,5.136c-0.433,0.433-1.174,0.126-1.174-0.488v-2.319c-4.326,0-7.495,1.235-9.85,3.914 c-0.209,0.237-0.596,0.036-0.511-0.268c1.215-4.391,4.181-8.492,10.361-9.376V6.973z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];