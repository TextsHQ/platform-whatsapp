var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CircleCheckIcon = function (e) {
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
  let m = 50;
  let h = 51;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "circle-check"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 51 50",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("circle", {
    cx: 25.8242,
    cy: 25,
    r: 25,
    fill: "currentColor",
    style: {
      fillOpacity: 1
    }
  }), u.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.82422 25C3.82422 12.856 13.6802 3 25.8242 3C37.9682 3 47.8242 12.856 47.8242 25C47.8242 37.144 37.9682 47 25.8242 47C13.6802 47 3.82422 37.144 3.82422 25ZM11.9642 26.54L19.8622 34.438C20.7202 35.296 22.1282 35.296 22.9642 34.438L39.6622 17.74C40.5202 16.882 40.5202 15.496 39.6622 14.638C38.8042 13.78 37.4182 13.78 36.5602 14.638L21.4242 29.774L15.0662 23.438C14.2082 22.58 12.8222 22.58 11.9642 23.438C11.5523 23.849 11.3208 24.4071 11.3208 24.989C11.3208 25.5709 11.5523 26.129 11.9642 26.54Z",
    fill: "#00A884",
    style: {
      fill: "#00A884",
      fillOpacity: 1
    }
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];