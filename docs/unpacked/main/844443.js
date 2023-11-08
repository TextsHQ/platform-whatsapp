var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaDownloadIcon = function (e) {
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
    name: "media-download"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1"
  }, u.default.createElement("path", {
    d: "M19.4725963,12.2 L15.1725963,12.2 L15.1725963,2.9 C15.1725963,2.4 14.7725963,2 14.2725963,2 L9.97259631,2 C9.47259631,2 9.07259631,2.4 9.07259631,2.9 L9.07259631,12.2 L4.77259631,12.2 C3.97259631,12.2 3.77259631,12.7 4.27259631,13.3 L11.0725963,20.6 C11.7725963,21.5 12.4725963,21.3 13.1725963,20.6 L19.9725963,13.3 C20.4725963,12.7 20.2725963,12.2 19.4725963,12.2 Z",
    fill: "currentColor"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];