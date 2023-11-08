var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WarningIcon = function (e) {
  var t;
  const {
    iconXstyle: n,
    height: r,
    width: c,
    viewBox: d
  } = e;
  const p = (0, a.default)(e, u);
  let f;
  if (d) {
    const {
      x: e = 0,
      y: t = 0,
      width: n = 0,
      height: r = 0
    } = d;
    f = [e, t, n, r].join(" ");
  }
  let _ = 18;
  let g = 20;
  if (!(r == null && c == null)) {
    _ = r;
    g = c;
  }
  return l.default.createElement(o.BaseSvgSpan, (0, i.default)({
    name: "warning"
  }, p), l.default.createElement("svg", {
    viewBox: (t = f) !== null && t !== undefined ? t : "0 0 20 18",
    height: _,
    width: g,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, s.default)(n),
    fill: "none"
  }, l.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.5301 17.5046C19.0701 17.5046 20.0301 15.8346 19.2601 14.5046L11.7301 1.49457C10.9601 0.16457 9.04012 0.16457 8.27012 1.49457L0.740121 14.5046C-0.0298788 15.8346 0.930121 17.5046 2.47012 17.5046H17.5301ZM10.0001 10.5046C9.45012 10.5046 9.00012 10.0546 9.00012 9.50457V7.50457C9.00012 6.95457 9.45012 6.50457 10.0001 6.50457C10.5501 6.50457 11.0001 6.95457 11.0001 7.50457V9.50457C11.0001 10.0546 10.5501 10.5046 10.0001 10.5046ZM9.00012 12.5046V14.5046H11.0001V12.5046H9.00012Z",
    fill: "currentColor"
  })));
};
var i = r(require("../vendor/967154.js"));
var a = r(require("../vendor/506479.js"));
var o = require("./220584.js");
var s = r(require("./156720.js"));
var l = r(require("../vendor/667294.js"));
const u = ["iconXstyle", "height", "width", "viewBox"];