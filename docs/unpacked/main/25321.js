var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelEmojiFlagsIcon = function (e) {
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
    name: "panel-emoji-flags"
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
    d: "M5.5,3.8V3.6c0-0.3-0.2-0.5-0.5-0.5H4.5C4.2,3.1,4,3.3,4,3.6V21c0,0.3,0.2,0.5,0.5,0.5H5 c0.3,0,0.5-0.2,0.5-0.5v-6.2c5,1.8,9.3-2.7,14.5,0.6c0-5.6,0-5.6,0-11.3C14.9,1,10.3,5.6,5.5,3.8z M15.8,12.6 c-1.4,0-2.8,0.3-4.1,0.6c-1.2,0.3-2.4,0.5-3.5,0.5c-0.9,0-1.8-0.2-2.6-0.5V5.4c0.8,0.2,1.5,0.3,2.3,0.3c1.5,0,2.9-0.4,4.3-0.7 c1.3-0.3,2.5-0.6,3.8-0.6c0.9,0,1.7,0.2,2.5,0.5V13C17.6,12.8,16.7,12.6,15.8,12.6z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];