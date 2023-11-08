var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgTimeIcon = function (e) {
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
  let m = 15;
  let h = 16;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "msg-time"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 16 15",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1",
    x: "0px",
    y: "0px",
    enableBackground: "new 0 0 16 15"
  }, u.default.createElement("path", {
    fill: "currentColor",
    d: "M9.75,7.713H8.244V5.359c0-0.276-0.224-0.5-0.5-0.5H7.65c-0.276,0-0.5,0.224-0.5,0.5v2.947 c0,0.276,0.224,0.5,0.5,0.5h0.094c0.001,0,0.002-0.001,0.003-0.001S7.749,8.807,7.75,8.807h2c0.276,0,0.5-0.224,0.5-0.5V8.213 C10.25,7.937,10.026,7.713,9.75,7.713z M9.75,2.45h-3.5c-1.82,0-3.3,1.48-3.3,3.3v3.5c0,1.82,1.48,3.3,3.3,3.3h3.5 c1.82,0,3.3-1.48,3.3-3.3v-3.5C13.05,3.93,11.57,2.45,9.75,2.45z M11.75,9.25c0,1.105-0.895,2-2,2h-3.5c-1.104,0-2-0.895-2-2v-3.5 c0-1.104,0.896-2,2-2h3.5c1.105,0,2,0.896,2,2V9.25z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];