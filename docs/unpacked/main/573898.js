var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessAdBudgetIcon = function (e) {
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
  let m = 16;
  let h = 20;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "business-ad-budget"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 20 16",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    d: "M15.8335 8.66658V1.99992C15.8335 1.08325 15.0835 0.333252 14.1668 0.333252H2.50016C1.5835 0.333252 0.833496 1.08325 0.833496 1.99992V8.66658C0.833496 9.58325 1.5835 10.3333 2.50016 10.3333H14.1668C15.0835 10.3333 15.8335 9.58325 15.8335 8.66658ZM8.3335 7.83325C6.95016 7.83325 5.8335 6.71659 5.8335 5.33325C5.8335 3.94992 6.95016 2.83325 8.3335 2.83325C9.71683 2.83325 10.8335 3.94992 10.8335 5.33325C10.8335 6.71659 9.71683 7.83325 8.3335 7.83325ZM19.1668 2.83325V11.9999C19.1668 12.9166 18.4168 13.6666 17.5002 13.6666H3.3335V11.9999H17.5002V2.83325H19.1668Z",
    fill: "currentColor"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];