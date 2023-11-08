var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LabelDeleteIcon = function (e) {
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
    name: "label-delete"
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
    d: "M5.811,17.1c-0.507,0-0.92-0.41-0.92-0.911V8.926L3.094,7.128C3.038,7.347,3,7.573,3,7.81v8.38 c0,1.548,1.262,2.802,2.81,2.802L14.961,19l-1.893-1.894L5.811,17.1z M18.215,17.071l3.131-4.414L21.812,12l-4.127-5.818 C17.167,5.447,16.314,5,15.393,5l-9.24,0.008L3.326,2.181C3.071,1.925,2.657,1.925,2.404,2.178L1.943,2.64 C1.688,2.894,1.688,3.306,1.944,3.562l17.961,17.963c0.255,0.255,0.669,0.255,0.923,0.002l0.461-0.461 c0.254-0.254,0.254-0.666-0.002-0.922L18.215,17.071z M8.042,6.897l7.352-0.006c0.302,0,0.58,0.146,0.748,0.384L19.494,12 l-2.635,3.714L8.042,6.897z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];