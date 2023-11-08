var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.E2EMessageIcon = function (e) {
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
    name: "e2e-message"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.1468 3H5.19245C3.43784 3 2 4.43784 2 6.19245V10.2361C2 11.9907 3.43784 13.4286 5.19245 13.4286H5.91071V16.0357L9.38734 13.4286H13.1468C14.9027 13.4286 16.3393 11.9907 16.3393 10.2361V6.19245C16.3393 4.43784 14.9027 3 13.1468 3Z",
    stroke: "#8696A0",
    strokeWidth: 1.2,
    strokeLinejoin: "round"
  }), u.default.createElement("path", {
    d: "M7.21436 15.0581V15.4505C7.21436 17.2051 8.65219 18.6429 10.4068 18.6429H14.1663L17.6429 21.2501V18.6429H18.3612C20.1158 18.6429 21.5536 17.2051 21.5536 15.4505V11.4068C21.5536 9.65219 20.1158 8.21436 18.3612 8.21436H16.3394",
    stroke: "#8696A0",
    strokeWidth: 1.2,
    strokeLinejoin: "round"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];