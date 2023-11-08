var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddUserIcon = function (e) {
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
    name: "add-user"
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
    d: "M14.7,12c2,0,3.6-1.6,3.6-3.6s-1.6-3.6-3.6-3.6s-3.6,1.6-3.6,3.6S12.7,12,14.7,12z  M6.6,10.2V7.5H4.8v2.7H2.1V12h2.7v2.7h1.8V12h2.7v-1.8H6.6z M14.7,13.8c-2.4,0-7.2,1.2-7.2,3.6v1.8H22v-1.8 C21.9,15,17.1,13.8,14.7,13.8z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];