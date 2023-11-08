var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusPollIcon = function (e) {
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
  let m = 20;
  let h = 16;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "status-poll"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 16 20",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1",
    x: "0px",
    y: "0px"
  }, u.default.createElement("path", {
    fill: "currentColor",
    d: "m2,5.5c0-.83.67-1.5,1.5-1.5h5c.83,0,1.5.67,1.5,1.5s-.67,1.5-1.5,1.5H3.5c-.83,0-1.5-.67-1.5-1.5Z"
  }), u.default.createElement("path", {
    fill: "currentColor",
    d: "m2,9.5c0-.83.67-1.5,1.5-1.5h9c.83,0,1.5.67,1.5,1.5s-.67,1.5-1.5,1.5H3.5c-.83,0-1.5-.67-1.5-1.5Z"
  }), u.default.createElement("path", {
    fill: "currentColor",
    d: "m3.5,12c-.83,0-1.5.67-1.5,1.5s.67,1.5,1.5,1.5h3c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5h-3Z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];