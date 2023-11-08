var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxRoundPassiveIcon = function (e) {
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
  let m = 20;
  let h = 20;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "checkbox-round-passive"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 20 20",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1",
    x: "0px",
    y: "0px",
    enableBackground: "new 0 0 20 20"
  }, u.default.createElement("path", {
    fill: "currentColor",
    fillOpacity: "inherit",
    d: "M10,0.25c-5.385,0-9.75,4.365-9.75,9.75s4.365,9.75,9.75,9.75s9.75-4.365,9.75-9.75 S15.385,0.25,10,0.25z M10,17.963c-4.398,0-7.962-3.565-7.962-7.963S5.603,2.037,10,2.037S17.963,5.602,17.963,10 S14.398,17.963,10,17.963z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];