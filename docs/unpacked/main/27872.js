var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectAllIcon = function (e) {
  const {
    iconXstyle: t,
    height: n,
    width: a,
    viewBox: c
  } = e;
  const d = (0, o.default)(e, s);
  let f;
  if (c) {
    const {
      x: e = 0,
      y: t = 0,
      width: n = 0,
      height: a = 0
    } = c;
    f = [e, t, n, a].join(" ");
  }
  let p = 24;
  let m = 24;
  if (!(n == null && a == null)) {
    p = n;
    m = a;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "select-all"
  }, d), u.default.createElement("svg", {
    viewBox: f,
    height: p,
    width: m,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(t),
    fill: "none"
  }, u.default.createElement("path", {
    d: "M14 10H2v2h12v-2zm0-4H2v2h12V6zM2 16h8v-2H2v2zm19.5-4.5L23 13l-6.99 7-4.51-4.5L13 14l3.01 3 5.49-5.5z",
    fill: "currentColor"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];