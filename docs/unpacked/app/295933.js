var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatAssignmentIcon = function (e) {
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
  let _ = 16;
  let g = 20;
  if (!(r == null && c == null)) {
    _ = r;
    g = c;
  }
  return l.default.createElement(o.BaseSvgSpan, (0, i.default)({
    name: "chat-assignment"
  }, p), l.default.createElement("svg", {
    viewBox: (t = f) !== null && t !== undefined ? t : "0 0 20 16",
    height: _,
    width: g,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, s.default)(n),
    fill: "none"
  }, l.default.createElement("path", {
    d: "M12.7 7.9998C14.7 7.9998 16.3 6.3998 16.3 4.3998C16.3 2.3998 14.7 0.799805 12.7 0.799805C10.7 0.799805 9.1 2.3998 9.1 4.3998C9.1 6.3998 10.7 7.9998 12.7 7.9998ZM12.7 9.7998C10.3 9.7998 5.5 10.9998 5.5 13.3998V15.1998H20V13.3998C19.9 10.9998 15.1 9.7998 12.7 9.7998Z",
    fill: "currentColor"
  }), l.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.09961 8.06427H0.0996094V6.25781H7.09961V8.06427Z",
    fill: "currentColor"
  }), l.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.85521 7.11619L3.51172 4.7727L4.77368 3.51074L8.37912 7.11619L4.77368 10.7216L3.51172 9.45968L5.85521 7.11619Z",
    fill: "currentColor"
  })));
};
var i = r(require("../vendor/967154.js"));
var a = r(require("../vendor/506479.js"));
var o = require("./220584.js");
var s = r(require("./156720.js"));
var l = r(require("../vendor/667294.js"));
const u = ["iconXstyle", "height", "width", "viewBox"];