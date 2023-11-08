var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmptyArchivedIcon = function (e) {
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
  let m = 90;
  let h = 90;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "empty-archived"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 90 90",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1",
    x: "0px",
    y: "0px",
    enableBackground: "new 0 0 90 90"
  }, u.default.createElement("path", {
    fill: "currentColor",
    d: "M71.109,24.113l-4.288-5.222c-0.594-0.934-1.825-1.528-3.396-1.528H26.575c-1.528,0-2.759,0.594-3.693,1.528 l-3.991,5.222c-0.934,1.231-1.528,2.462-1.528,3.991v38.377c0,3.396,2.759,6.156,6.156,6.156h42.962 c3.396,0,6.156-2.759,6.156-6.156V28.104C72.637,26.575,72.042,25.344,71.109,24.113z M45.042,61.896L28.146,45h10.741v-6.156 h12.269V45h10.741L45.042,61.896z M23.859,23.519l2.462-3.057H63.17l2.759,3.057H23.859z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];