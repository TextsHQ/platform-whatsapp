var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusTimeIcon = function (e) {
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
  let m = 18;
  let h = 14;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "status-time"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 14 18",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1",
    x: "0px",
    y: "0px",
    enableBackground: "new 0 0 14 18"
  }, u.default.createElement("path", {
    fill: "currentColor",
    d: "M8.906,10.132h-1.64V7.569c0-0.3-0.243-0.545-0.545-0.545H6.619 c-0.3,0-0.545,0.243-0.545,0.545v3.21c0,0.3,0.243,0.545,0.545,0.545h0.102c0.001,0,0.002-0.001,0.003-0.001 s0.002,0.001,0.003,0.001h2.178c0.3,0,0.545-0.243,0.545-0.545v-0.102C9.451,10.376,9.206,10.132,8.906,10.132z M8.906,4.4H5.094 C3.112,4.4,1.5,6.012,1.5,7.994v3.812c0,1.982,1.612,3.594,3.594,3.594h3.812c1.982,0,3.594-1.612,3.594-3.594V7.994 C12.5,6.012,10.888,4.4,8.906,4.4z M11.084,11.806c0,1.203-0.975,2.178-2.178,2.178H5.094c-1.203,0-2.178-0.975-2.178-2.178V7.994 c0-1.203,0.975-2.178,2.178-2.178h3.812c1.203,0,2.178,0.975,2.178,2.178V11.806z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];