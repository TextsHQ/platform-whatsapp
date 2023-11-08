var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PeopleIcon = function (e) {
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
    name: "people"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.99 8C10.99 9.66 9.66 11 8 11C6.34 11 5 9.66 5 8C5 6.34 6.34 5 8 5C9.66 5 10.99 6.34 10.99 8ZM18.99 8C18.99 9.66 17.66 11 16 11C14.34 11 13 9.66 13 8C13 6.34 14.34 5 16 5C17.66 5 18.99 6.34 18.99 8ZM8 13C5.67 13 1 14.17 1 16.5V18C1 18.55 1.45 19 2 19H14C14.55 19 15 18.55 15 18V16.5C15 14.17 10.33 13 8 13ZM15.03 13.05C15.38 13.02 15.71 13 16 13C18.33 13 23 14.17 23 16.5V18C23 18.55 22.55 19 22 19H16.82C16.93 18.69 17 18.35 17 18V16.5C17 15.03 16.21 13.92 15.07 13.09C15.067 13.087 15.0639 13.083 15.0606 13.0787C15.053 13.0688 15.0439 13.057 15.03 13.05Z",
    fill: "currentColor"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];