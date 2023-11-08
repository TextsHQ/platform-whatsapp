var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pinned2Icon = function (e) {
  const {
    iconXstyle: t,
    height: n,
    width: a,
    viewBox: c
  } = e;
  const d = (0, o.default)(e, s);
  let f;
  if (c) {
    const {
      x: e = 0,
      y: t = 0,
      width: n = 0,
      height: a = 0
    } = c;
    f = [e, t, n, a].join(" ");
  }
  let p = 15;
  let m = 13;
  if (!(n == null && a == null)) {
    p = n;
    m = a;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "pinned2"
  }, d), u.default.createElement("svg", {
    viewBox: f,
    height: p,
    width: m,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(t)
  }, u.default.createElement("path", {
    fill: "currentColor",
    d: "M12.074 4.21 8.7 8.232l.116 4.233a.4.4 0 0 1-.657.318L.43 6.297a.4.4 0 0 1 .199-.702l4.196-.622L8.196.957a.63.63 0 0 1 .887-.078l2.914 2.445a.63.63 0 0 1 .077.887ZM1.294 14.229a.713.713 0 0 1-1.09-.915l2.674-3.64 1.536 1.288-3.12 3.267Z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];