var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.E2EStatusIcon = function (e) {
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
    name: "e2e-status"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    d: "M20.3351 11.583C20.4874 15.1659 18.3165 18.5828 14.7619 19.8518C14.3677 19.9923 13.9702 20.102 13.5718 20.1813",
    stroke: "#8696A0",
    strokeWidth: 1.4,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), u.default.createElement("path", {
    d: "M5.61426 6.39954C6.52735 5.35496 7.71219 4.52266 9.11157 4.02283C11.6343 3.12242 14.3025 3.50061 16.408 4.82167",
    stroke: "#8696A0",
    strokeWidth: 1.4,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), u.default.createElement("path", {
    d: "M10.3036 20.1821C7.50086 19.624 5.05315 17.6498 4.02262 14.7625C3.35894 12.9029 3.3898 10.9646 3.98122 9.23047",
    stroke: "#8696A0",
    strokeWidth: 1.4,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), u.default.createElement("path", {
    d: "M17.2768 11.9373C17.2768 14.8864 14.886 17.2769 11.937 17.2769C8.98793 17.2769 6.59717 14.8864 6.59717 11.9373C6.59717 8.98828 8.98793 6.59778 11.937 6.59778C12.9754 6.59778 13.9446 6.89418 14.7646 7.40699",
    stroke: "#8696A0",
    strokeWidth: 1.4,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];