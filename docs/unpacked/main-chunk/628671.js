var o = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatAssignmentWithContainerIcon = function (e) {
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
    name: "chat-assignment-with-container"
  }, f), s.default.createElement("svg", {
    viewBox: (t = m) !== null && t !== undefined ? t : "0 0 24 24",
    height: p,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, s.default.createElement("path", {
    d: "M14.7 11.9998C16.7 11.9998 18.3 10.3998 18.3 8.3998C18.3 6.3998 16.7 4.7998 14.7 4.7998C12.7 4.7998 11.1 6.3998 11.1 8.3998C11.1 10.3998 12.7 11.9998 14.7 11.9998ZM14.7 13.7998C12.3 13.7998 7.5 14.9998 7.5 17.3998V19.1998H22V17.3998C21.9 14.9998 17.1 13.7998 14.7 13.7998Z",
    fill: "currentColor"
  }), s.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.09961 12.0643H2.09961V10.2578H9.09961V12.0643Z",
    fill: "currentColor"
  }), s.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.85521 11.1162L5.51172 8.7727L6.77368 7.51074L10.3791 11.1162L6.77368 14.7216L5.51172 13.4597L7.85521 11.1162Z",
    fill: "currentColor"
  })));
};
var r = o(require("../vendor/967154.js"));
var a = o(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = o(require("../app/156720.js"));
var s = o(require("../vendor/667294.js"));
const u = ["iconXstyle", "height", "width", "viewBox"];