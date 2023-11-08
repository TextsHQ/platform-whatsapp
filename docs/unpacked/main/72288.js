var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaUploadIcon = function (e) {
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
    name: "media-upload"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1"
  }, u.default.createElement("path", {
    d: "M5,10.1023258 L9.3,10.1023258 L9.3,16.6023258 C9.3,17.1023258 9.7,17.5023258 10.2,17.5023258 L14.5,17.5023258 C15,17.5023258 15.4,17.1023258 15.4,16.6023258 L15.4,10.1023258 L19.7,10.1023258 C20.5,10.1023258 20.7,9.60232575 20.2,9.00232575 L13.3,1.80232575 C12.6,0.902325754 12,1.10232575 11.3,1.80232575 L4.6,9.00232575 C4,9.60232575 4.2,10.1023258 5,10.1023258 Z M20.1,20.0023258 L4.5,20.0023258 C4.2,20.0023258 4,20.2023258 4,20.5023258 L4,21.5023258 C4,21.8023258 4.2,22.0023258 4.5,22.0023258 L20.1,22.0023258 C20.4,22.0023258 20.6,21.8023258 20.6,21.5023258 L20.6,20.5023258 C20.6,20.3023258 20.4,20.0023258 20.1,20.0023258 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];