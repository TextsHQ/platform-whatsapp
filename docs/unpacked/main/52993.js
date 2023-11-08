var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusMediaControlsPauseIcon = function (e) {
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
    name: "status-media-controls-pause"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    d: "M8 19C9.1 19 10 18.1 10 17V7C10 5.9 9.1 5 8 5C6.9 5 6 5.9 6 7V17C6 18.1 6.9 19 8 19ZM14 7V17C14 18.1 14.9 19 16 19C17.1 19 18 18.1 18 17V7C18 5.9 17.1 5 16 5C14.9 5 14 5.9 14 7Z",
    fill: "currentColor"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];