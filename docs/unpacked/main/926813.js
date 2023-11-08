var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionCheckCircleIcon = function (e) {
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
  let m = 10;
  let h = 11;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "action-check-circle"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 11 10",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0.5 5C0.5 2.24 2.74 0 5.5 0C8.26 0 10.5 2.24 10.5 5C10.5 7.76 8.26 10 5.5 10C2.74 10 0.5 7.76 0.5 5ZM2.35 5.35L4.145 7.145C4.34 7.34 4.66 7.34 4.85 7.145L8.645 3.35C8.84 3.155 8.84 2.84 8.645 2.645C8.45 2.45 8.135 2.45 7.94 2.645L4.5 6.085L3.055 4.645C2.86 4.45 2.545 4.45 2.35 4.645C2.25637 4.73842 2.20376 4.86524 2.20376 4.9975C2.20376 5.12976 2.25637 5.25658 2.35 5.35Z",
    fill: "#00A884"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];