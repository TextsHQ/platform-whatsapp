var o = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactsIcon = function (e) {
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
    name: "contacts"
  }, f), s.default.createElement("svg", {
    viewBox: (t = m) !== null && t !== undefined ? t : "0 0 24 24",
    height: p,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "currentColor"
  }, s.default.createElement("path", {
    d: "M12 12C13.9338 12 15.5 10.4338 15.5 8.5C15.5 6.56625 13.9338 5 12 5C10.0662 5 8.5 6.56625 8.5 8.5C8.5 10.4338 10.0662 12 12 12ZM12 13.75C9.66375 13.75 5 14.9225 5 17.25V18.125C5 18.6063 5.39375 19 5.875 19H18.125C18.6063 19 19 18.6063 19 18.125V17.25C19 14.9225 14.3363 13.75 12 13.75Z"
  })));
};
var r = o(require("../vendor/967154.js"));
var a = o(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = o(require("../app/156720.js"));
var s = o(require("../vendor/667294.js"));
const u = ["iconXstyle", "height", "width", "viewBox"];