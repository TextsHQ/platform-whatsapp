var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BroadcastIcon = function (e) {
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
    name: "broadcast"
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
    d: "M10.5,3L3.1,5.4C2.8,5.5,2.5,5.9,2.5,6.3v1.9c0,0.4,0.3,0.8,0.7,0.9L4,9.4c0,0.1,0,0.3,0,0.4 c0,1.5,1.2,2.9,2.9,2.9c1.1,0,2-0.6,2.5-1.4l1.3,0.5c0.2,0,0.5-0.2,0.5-0.6V3.5C11,3.1,10.8,2.9,10.5,3z M6.6,11.5 c-1,0-1.7-0.8-1.7-1.7l0,0l3.2,1.1C7.7,11.2,7.2,11.5,6.6,11.5z M12.7,2.7h-0.3C12.1,2.7,12,2.9,12,3v8.6c0,0.2,0.2,0.4,0.4,0.4 h0.3c0.2,0,0.4-0.2,0.4-0.4V3C13.2,2.9,12.9,2.7,12.7,2.7z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];