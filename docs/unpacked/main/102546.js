var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RoundXInvIcon = function (e) {
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
  let m = 35;
  let h = 35;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "round-x-inv"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 35 35",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1",
    x: "0px",
    y: "0px",
    enableBackground: "new 0 0 35 35"
  }, u.default.createElement("path", {
    fill: "currentColor",
    enableBackground: "new    ",
    d: "M17.5,0.25C7.988,0.25,0.25,7.988,0.25,17.5 S7.988,34.75,17.5,34.75s17.25-7.738,17.25-17.25S27.012,0.25,17.5,0.25z M23.983,22.686l-1.297,1.297L17.5,18.797l-5.186,5.186 l-1.297-1.297l5.187-5.186l-5.187-5.186l1.297-1.297l5.186,5.186l5.187-5.186l1.297,1.297L18.797,17.5L23.983,22.686z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];