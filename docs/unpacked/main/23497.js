var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgGifIcon = function (e) {
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
  let m = 14;
  let h = 21;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "msg-gif"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 21 14",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1",
    x: "0px",
    y: "0px",
    enableBackground: "new 0 0 21 14"
  }, u.default.createElement("path", {
    fill: "currentColor",
    d: "M17.5,1.1H3.4C2,1.1,0.8,2.3,0.8,3.7v5.8c0,1.4,1.2,2.6,2.6,2.6h14.1c1.4,0,2.6-1.2,2.6-2.6V3.7 C20.1,2.3,18.9,1.1,17.5,1.1z M9.1,7.1c0,1.6-1,2.5-2.6,2.5c-1.8,0-2.8-1.1-2.8-3s1.1-3,2.8-3c1.4,0,2.4,0.8,2.6,2H7.6 C7.4,5.1,7,4.8,6.4,4.8c-0.8,0-1.3,0.7-1.3,1.8s0.5,1.8,1.4,1.8c0.7,0,1.1-0.4,1.2-1V7.3H6.4v-1h2.7V7.1z M11.7,9.5h-1.5V3.7h1.5 V9.5z M16.9,4.9h-2.4v1.3h2.2v1.1h-2.2v2.1H13V3.7h3.9V4.9z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];