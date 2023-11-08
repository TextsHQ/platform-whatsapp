var o = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchUnreadIcon = function (e) {
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
    name: "search-unread"
  }, f), s.default.createElement("svg", {
    viewBox: (t = m) !== null && t !== undefined ? t : "0 0 24 24",
    height: p,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1"
  }, s.default.createElement("path", {
    d: "M19.7184267,11.1602431 L19.7184267,15.3413127 C19.7184267,16.2540249 18.9455846,17 18,17 L7.71842675,17 C6.77284219,17 6,16.2540249 6,15.3413127 L6,10.5 L3.40821194,6.74308348 C3.12509322,6.3326898 3.29958688,6 3.7951967,6 L13.6115082,6 C13.5385307,6.32161137 13.5,6.65630602 13.5,7 C13.5,9.48528137 15.5147186,11.5 18,11.5 C18.6085836,11.5 19.1889505,11.3791898 19.7184267,11.1602431 Z",
    fill: "currentColor"
  }), s.default.createElement("path", {
    d: "M18,10 C19.6568542,10 21,8.65685425 21,7 C21,5.34314575 19.6568542,4 18,4 C16.3431458,4 15,5.34314575 15,7 C15,8.65685425 16.3431458,10 18,10 Z",
    fillOpacity: 0.4,
    fill: "#727475"
  })));
};
var r = o(require("../vendor/967154.js"));
var a = o(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = o(require("../app/156720.js"));
var s = o(require("../vendor/667294.js"));
const u = ["iconXstyle", "height", "width", "viewBox"];