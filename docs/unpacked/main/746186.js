var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotificationsOnIcon = function (e) {
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
  let p = 24;
  let m = 24;
  if (!(n == null && a == null)) {
    p = n;
    m = a;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "notifications-on"
  }, d), u.default.createElement("svg", {
    viewBox: f,
    height: p,
    width: m,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(t)
  }, u.default.createElement("path", {
    fill: "currentColor",
    d: "M3.25 10q-.325 0-.537-.225-.213-.225-.188-.525.15-1.675.85-3.213Q4.075 4.5 5.25 3.3q.2-.2.525-.2t.55.225q.2.2.213.5.012.3-.213.55-1 1-1.587 2.237Q4.15 7.85     4.025 9.25q-.025.325-.237.537Q3.575 10 3.25 10Zm17.5 0q-.3 0-.525-.213-.225-.212-.25-.537-.125-1.4-.712-2.638-.588-1.237-1.588-2.237-.2-.25-.2-.55 0-.3.225-.5.225-.225.538-.225.312     0 .512.2 1.175 1.2 1.875 2.737.7 1.538.85 3.213.025.3-.187.525-.213.225-.538.225ZM5 18.875q-.325 0-.537-.225-.213-.225-.213-.525 0-.325.213-.538.212-.212.537-.212h1.25v-7.25q0-2     1.25-3.588Q8.75 4.95 10.75 4.5v-.7q0-.525.363-.888.362-.362.887-.362t.887.362q.363.363.363.888v.7q2 .45 3.25 2.037 1.25 1.588 1.25 3.588v7.25H19q.325 0 .538.212.212.213.212.538     0 .3-.212.525-.213.225-.538.225Zm7-7.25ZM12 21.8q-.75 0-1.275-.525Q10.2 20.75 10.2 20h3.6q0 .75-.525 1.275-.525.525-1.275.525Zm-4.25-4.425h8.5v-7.25q0-1.775-1.25-3.013-1.25-1.237-3-1.237T9     7.112Q7.75 8.35 7.75 10.125Z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];