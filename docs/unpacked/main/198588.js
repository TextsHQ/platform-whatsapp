var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusV3ReplyIcon = function (e) {
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
  let h = 16;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "status-v3-reply"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 16 16",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    d: "M13.495 7.81925C13.5947 10.1863 12.1742 12.4436 9.84839 13.282C9.59046 13.3748 9.3304 13.4473 9.06969 13.4997M3.86308 4.39476C4.46053 3.70467 5.23579 3.15481 6.15142 2.8246C7.80205 2.22975 9.54792 2.4796 10.9256 3.35235M6.93125 13.5C5.09737 13.1313 3.49579 11.8271 2.82151 9.91956C2.38726 8.69105 2.40745 7.41049 2.79442 6.26486M11.0003 8C11.0003 9.65691 9.65704 11 8.00013 11C6.34322 11 4.99999 9.65691 4.99999 8C4.99999 6.34309 6.34322 5 8.00013 5C8.58356 5 9.1281 5.16653 9.5888 5.45465",
    stroke: "#8696A0",
    strokeWidth: 1.5,
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