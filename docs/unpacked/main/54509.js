var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessWebsiteIcon = function (e) {
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
    name: "business-website"
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
    id: "Fill-1-Copy",
    fill: "currentColor",
    enableBackground: "new    ",
    d: "M18.4,17.7c-0.3-0.8-1-1.5-2-1.5h-1v-3.1 c0-0.6-0.4-1-1-1H8.2V10h2.1c0.6,0,1-0.4,1-1V6.9h2.1c1.1,0,2.1-0.9,2.1-2.1V4.4c3,1.3,5.2,4.3,5.2,7.7 C20.6,14.3,19.8,16.3,18.4,17.7L18.4,17.7z M11,20.6C6.8,20,3.4,16.4,3.4,12c0-0.7,0.1-1.3,0.2-1.9l5.2,5.2v1.1c0,1.2,1,2.2,2.2,2.2 V20.6z M12,1.5C6.2,1.5,1.5,6.2,1.5,12S6.2,22.5,12,22.5S22.5,17.8,22.5,12S17.8,1.5,12,1.5L12,1.5z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];