var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkIcon = function (e) {
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
    name: "link"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1",
    x: "0px",
    y: "0px",
    enableBackground: "new 0 0 24 24"
  }, u.default.createElement("path", {
    fill: "currentColor",
    d: "M8.1,13.5h7.8v-1.9H8.1V13.5z M3.2,12.6c0-2.1,1.6-3.7,3.7-3.7h3.6V7.2H6.9c-2.9,0-5.4,2.4-5.4,5.4 c0,2.9,2.4,5.3,5.4,5.3h3.6v-1.7H6.9C4.8,16.2,3.2,14.6,3.2,12.6z M17.1,7.2h-3.5v1.7h3.5c2.1,0,3.7,1.6,3.7,3.7s-1.6,3.7-3.7,3.7 h-3.5V18h3.5c2.9,0,5.3-2.4,5.3-5.3C22.5,9.6,20,7.2,17.1,7.2z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];