var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoPlaceholderIcon = function (e) {
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
  let m = 28;
  let h = 46;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "video-placeholder"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 46 28",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    d: "M0.632234 3.05765C0 4.25556 0 5.82371 0 8.96V19.04C0 22.1763 0 23.7444 0.632234 24.9423C1.18836 25.9961 2.07575 26.8527 3.16722 27.3896C4.40804 28 6.03238 28 9.28106 28H23.5894C26.838 28 28.4624 28 29.7032 27.3896C30.7947 26.8527 31.682 25.9961 32.2382 24.9423C32.8704 23.7444 32.8704 22.1763 32.8704 19.04V8.96C32.8704 5.82371 32.8704 4.25556 32.2382 3.05765C31.682 2.00395 30.7947 1.14725 29.7032 0.610364C28.4624 0 26.838 0 23.5894 0H9.28106C6.03238 0 4.40804 0 3.16722 0.610364C2.07575 1.14725 1.18836 2.00395 0.632234 3.05765Z",
    fill: "currentColor"
  }), u.default.createElement("path", {
    d: "M36.7051 8.4197C36.3068 8.77319 36.0801 9.27163 36.0801 9.79396V18.206C36.0801 18.7284 36.3068 19.2268 36.7051 19.5803L41.899 24.1895C43.1385 25.2895 45.1411 24.4407 45.1411 22.8153V5.18474C45.1411 3.55931 43.1385 2.71047 41.899 3.81048L36.7051 8.4197Z",
    fill: "currentColor"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];