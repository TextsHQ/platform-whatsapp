var o = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CalendarEmptyIcon = function (e) {
  var t;
  const {
    iconXstyle: n,
    height: o,
    width: d,
    viewBox: c
  } = e;
  const f = (0, a.default)(e, u);
  let m;
  if (c) {
    const {
      x: e = 0,
      y: t = 0,
      width: n = 0,
      height: o = 0
    } = c;
    m = [e, t, n, o].join(" ");
  }
  let p = 24;
  let h = 24;
  if (!(o == null && d == null)) {
    p = o;
    h = d;
  }
  return s.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "calendar-empty"
  }, f), s.default.createElement("svg", {
    viewBox: (t = m) !== null && t !== undefined ? t : "0 0 24 24",
    height: p,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, s.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 3H20C21.1 3 22 3.9 22 5V21C22 22.1 21.1 23 20 23H4C2.9 23 2 22.1 2 21V5C2 3.9 2.9 3 4 3H5V2C5 1.45 5.45 1 6 1C6.55 1 7 1.45 7 2V3H17V2C17 1.45 17.45 1 18 1C18.55 1 19 1.45 19 2V3ZM5 21H19C19.55 21 20 20.55 20 20V8H4V20C4 20.55 4.45 21 5 21Z",
    fill: "currentColor"
  })));
};
var r = o(require("../vendor/967154.js"));
var a = o(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = o(require("../app/156720.js"));
var s = o(require("../vendor/667294.js"));
const u = ["iconXstyle", "height", "width", "viewBox"];