var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KicNuxIcon = function (e) {
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
  let m = 112;
  let h = 112;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "kic-nux"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 112 112",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("g", {
    fill: "#06cf9c"
  }, u.default.createElement("path", {
    clipRule: "evenodd",
    d: "m56 112c30.9279 0 56-25.0721 56-56s-25.0721-56-56-56-56 25.0721-56 56 25.0721 56 56 56zm-13.5338-80.3605h27.0667c2.9773 0 5.4133 2.436 5.4133 5.4134v43.3066l-18.9467-8.12-18.9466 8.12.027-43.3066c0-2.9774 2.409-5.4134 5.3863-5.4134z",
    fillOpacity: 0.15,
    fillRule: "evenodd"
  }), u.default.createElement("path", {
    d: "m69.5329 31.6395h-27.0667c-2.9773 0-5.3863 2.436-5.3863 5.4134l-.027 43.3066 18.9466-8.12 18.9467 8.12v-43.3066c0-2.9774-2.436-5.4134-5.4133-5.4134z"
  }))));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];