var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AttachQuickRepliesIcon = function (e) {
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
  let m = 53;
  let h = 53;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "attach-quick-replies"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 53 53",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("g", {
    clipPath: "url(#clip0)"
  }, u.default.createElement("circle", {
    cx: 26.5,
    cy: 26.5,
    r: 26.5,
    fill: "#DBB310"
  }), u.default.createElement("path", {
    d: "M53 26.5C53 41.1356 41.1355 53 26.5 53C11.8645 53 0 41.1356 0 26.5L53 26.5Z",
    fill: "#EEC312"
  })), u.default.createElement("path", {
    d: "M24.4831 38C24.0554 38 23.7254 37.6211 23.7865 37.1933L24.8865 29.4444H20.6087C19.5331 29.4444 20.2054 28.5278 20.2298 28.4911C21.7698 25.7656 24.0798 21.7322 27.1354 16.3544C27.2576 16.1344 27.502 16 27.7465 16C28.1742 16 28.5042 16.3789 28.4431 16.8067L27.3431 24.5556H31.6331C32.122 24.5556 32.3909 24.7878 32.122 25.3622C28.1009 32.3778 25.7665 36.4722 25.0942 37.6456C24.972 37.8656 24.7398 38 24.4831 38Z",
    fill: "#F5F5F5"
  }), u.default.createElement("defs", null, u.default.createElement("clipPath", {
    id: "clip0"
  }, u.default.createElement("rect", {
    width: 53,
    height: 53,
    fill: "white"
  })))));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];