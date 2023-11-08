var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.E2EMessageV2Icon = function (e) {
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
  let m = 16;
  let h = 23;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "e2e-message-v2"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 23 16",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0 2.31031C0 1.04024 1.04334 0 2.31988 0H22.5C22.9499 0 23.0984 0.287216 22.8289 0.64152L18.889 6.10238V13.1897C18.889 14.461 17.8457 15.5 16.5691 15.5H2.31988C1.04334 15.5 0 14.461 0 13.1897V2.31031ZM14 5C14.2761 5 14.5 5.22386 14.5 5.5V6.5C14.5 6.77614 14.2761 7 14 7H5C4.72386 7 4.5 6.77614 4.5 6.5V5.5C4.5 5.22386 4.72386 5 5 5H14ZM12.5 8.5C12.7761 8.5 13 8.72386 13 9V10C13 10.2761 12.7761 10.5 12.5 10.5H5C4.72386 10.5 4.5 10.2761 4.5 10V9C4.5 8.72386 4.72386 8.5 5 8.5H12.5Z",
    fill: "#00A884"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];