var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelEmojiTravelIcon = function (e) {
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
    name: "panel-emoji-travel"
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
    d: "M21.5,11.5c0-0.7-0.1-1.4-0.3-2l-1.5-4.3C19.2,3.9,18,3,16.6,3H7.3C5.9,3,4.7,3.9,4.2,5.2L2.6,9.9 c-0.1,0.4-0.2,0.7-0.2,1.1v1.2l0,0v7.4c0,0.6,0.5,1.1,1.1,1.1h1.1c0.6,0,1.1-0.5,1.1-1.1v-1.1h12.7v1.1c0,0.6,0.5,1.1,1.1,1.1h1.1 c0.6,0,1.1-0.5,1.1-1.1v-7.4l0,0L21.5,11.5L21.5,11.5z M4.1,10.4l1.6-4.7C5.9,5,6.6,4.5,7.4,4.5h9.2c0.7,0,1.4,0.5,1.6,1.2l1.5,4.3 c0.1,0.3,0.2,0.6,0.2,0.8H4C3.9,10.7,4,10.5,4.1,10.4z M5.5,16.1c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5S7,13.8,7,14.6 C6.9,15.4,6.3,16.1,5.5,16.1z M14.9,15.5H9.3c-0.5,0-1-0.4-1-1c0-0.5,0.4-1,1-1h5.6c0.5,0,1,0.4,1,1C15.8,15.1,15.4,15.5,14.9,15.5z  M18.6,16.1c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5C20.1,15.4,19.4,16.1,18.6,16.1z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];