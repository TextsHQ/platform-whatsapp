var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessReachIcon = function (e) {
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
  let m = 16;
  let h = 20;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "business-reach"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 20 16",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    d: "M7.83317 7.99992L6.49984 12.4999L5.1665 7.99992L0.666504 6.66658L5.1665 5.33325L6.49984 0.833252L7.83317 5.33325L12.3332 6.66658L7.83317 7.99992ZM13.1665 11.8333L16.4998 9.99992L14.6665 13.3333L16.4998 16.6666L13.1665 14.8333L9.83317 16.6666L11.6665 13.3333L9.83317 9.99992L13.1665 11.8333ZM7.33317 13.3333L5.9165 15.8333L7.33317 18.3333L4.83317 16.9166L2.33317 18.3333L3.74984 15.8333L2.33317 13.3333L4.83317 14.7499L7.33317 13.3333Z",
    fill: "currentColor"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];