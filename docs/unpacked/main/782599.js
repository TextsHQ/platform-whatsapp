var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.E2ELocationV2Icon = function (e) {
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
  let h = 14;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "e2e-location-v2"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 14 20",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0 7.26562C0 3.39563 3.13 0.265625 7 0.265625C10.87 0.265625 14 3.39563 14 7.26562C14 11.4356 9.58 17.1856 7.77 19.3756C7.37 19.8556 6.64 19.8556 6.24 19.3756C4.42 17.1856 0 11.4356 0 7.26562ZM4.5 7.26562C4.5 8.64563 5.62 9.76562 7 9.76562C8.38 9.76562 9.5 8.64563 9.5 7.26562C9.5 5.88562 8.38 4.76562 7 4.76562C5.62 4.76562 4.5 5.88562 4.5 7.26562Z",
    fill: "#00A884"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];