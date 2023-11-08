var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotificationsOffIcon = function (e) {
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
    name: "notifications-off"
  }, d), u.default.createElement("svg", {
    viewBox: f,
    height: p,
    width: m,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(t)
  }, u.default.createElement("path", {
    fill: "currentColor",
    d: "M5 18.875q-.325 0-.537-.225-.213-.225-.213-.525 0-.325.213-.538.212-.212.537-.212h1.25v-7.25q0-.775.188-1.5.187-.725.562-1.4L8.125     8.35q-.175.425-.275.862-.1.438-.1.913v7.25l7.275-.025L2.55 4.9q-.2-.2-.2-.513 0-.312.2-.537.225-.225.538-.225.312 0 .537.225L20.4 20.625q.2.225.213.525.012.3-.213.55-.225.2-.525.2-.3     0-.525-.2l-2.85-2.825Zm12.75-3.725-1.5-1.5v-3.525q0-1.775-1.25-3.013-1.25-1.237-3-1.237-.7 0-1.387.237-.688.238-1.213.688L8.325 5.725q.525-.45 1.15-.763.625-.312     1.275-.462v-.7q0-.525.363-.888.362-.362.887-.362t.887.362q.363.363.363.888v.7q1.875.425 3.188 1.963Q17.75 8 17.75 10.125Zm-6.35-1.375ZM12 21.8q-.75     0-1.275-.525Q10.2 20.75 10.2 20h3.6q0 .75-.525 1.275-.525.525-1.275.525Zm.825-11.525Z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];