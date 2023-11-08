var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KeepWarningIcon = function (e) {
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
  let m = 60;
  let h = 60;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "keep-warning"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 60 60",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    d: "M42.5 7.5H17.5C14.75 7.5 12.525 9.75 12.525 12.5L12.5 52.5L30 45L47.5 52.5V12.5C47.5 9.75 45.25 7.5 42.5 7.5Z",
    fill: "white"
  }), u.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M30.0211 12.501C28.2835 12.501 26.875 13.9095 26.875 15.647V26.8549C26.875 28.5924 28.2835 30.001 30.0211 30.001C31.7586 30.001 33.1671 28.5924 33.1671 26.8549V15.647C33.1671 13.9095 31.7586 12.501 30.0211 12.501ZM33.125 35.001H26.875V41.251H33.125V35.001Z",
    fill: "#00A884"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];