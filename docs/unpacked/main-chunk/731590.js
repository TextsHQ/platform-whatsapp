var o = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NonContactsIcon = function (e) {
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
    name: "non-contacts"
  }, f), s.default.createElement("svg", {
    viewBox: (t = m) !== null && t !== undefined ? t : "0 0 24 24",
    height: p,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "#010101"
  }, s.default.createElement("path", {
    d: "M9.77007 6.19461C10.3688 5.26701 11.4144 4.65986 12.595 4.65986C14.4587 4.65986 15.9681 6.16931 15.9681 8.03294C15.9681 9.21352 15.361 10.2592 14.4334 10.8579L9.77007 6.19461ZM19.3412 15.7657C19.3243 14.8381 18.8099 13.9864 17.9835 13.5564C17.5282 13.3202 17.0306 13.101 16.4909 12.9155L19.3412 15.7657ZM19.7544 18.5654L5.43567 4.24666C5.10679 3.91778 4.57553 3.91778 4.24666 4.24666C3.91778 4.57553 3.91778 5.10679 4.24666 5.43567L11.1446 12.3336C9.60985 12.5276 8.26905 13.0082 7.18124 13.5648C6.35483 14.0033 5.84887 14.8719 5.84887 15.8079V18.1522H16.9547L18.5569 19.7544C18.8858 20.0833 19.4171 20.0833 19.746 19.7544C20.0833 19.4255 20.0833 18.8943 19.7544 18.5654Z"
  })));
};
var r = o(require("../vendor/967154.js"));
var a = o(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = o(require("../app/156720.js"));
var s = o(require("../vendor/667294.js"));
const u = ["iconXstyle", "height", "width", "viewBox"];