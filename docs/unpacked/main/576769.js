var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.E2EContactInfoCallV2Icon = function (e) {
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
  let m = 18;
  let h = 18;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "e2e-contact-info-call-v2"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 18 18",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    d: "M16.2222 12.2676L13.6822 11.9776C13.0722 11.9076 12.4722 12.1176 12.0422 12.5476L10.2022 14.3876C7.37223 12.9476 5.05223 10.6376 3.61223 7.79758L5.46223 5.94758C5.89223 5.51758 6.10223 4.91758 6.03223 4.30758L5.74223 1.78758C5.62223 0.777578 4.77223 0.0175781 3.75223 0.0175781H2.02223C0.892228 0.0175781 -0.0477718 0.957578 0.0222282 2.08758C0.552228 10.6276 7.38223 17.4476 15.9122 17.9776C17.0422 18.0476 17.9822 17.1076 17.9822 15.9776V14.2476C17.9922 13.2376 17.2322 12.3876 16.2222 12.2676Z",
    fill: "#00A884"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];