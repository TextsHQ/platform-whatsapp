var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddAlt2Icon = function (e) {
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
  let h = 18;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "add-alt-2"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 18 18",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    d: "M0.779492 9.77945C0.345435 9.34539 0.354642 8.64524 0.789127 8.21075C1.00194 7.99794 1.27674 7.88259 1.57806 7.90017L7.88829 7.87934L7.90025 1.57797C7.89154 1.26779 7.99803 1.00185 8.21083 0.789044C8.64532 0.354559 9.32774 0.363086 9.7618 0.797143C9.99211 1.02746 10.0895 1.2667 10.0805 1.59463L10.0862 7.89598L16.4053 7.90173C16.7598 7.90156 16.9991 7.99893 17.2116 8.21153C17.6457 8.64558 17.6542 9.34573 17.2197 9.78022C17.0069 9.99302 16.7499 10.0906 16.4308 10.0908L10.1117 10.1028L10.0998 16.4041C10.1085 16.7143 10.002 16.9803 9.78031 17.2019C9.34582 17.6364 8.64567 17.6456 8.20275 17.2027C7.97244 16.9724 7.87508 16.6977 7.8841 16.3875L7.8872 10.095L1.60356 10.107C1.27564 10.116 1.00981 10.0098 0.779492 9.77945Z",
    fill: "currentColor"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];