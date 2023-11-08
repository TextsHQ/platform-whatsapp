var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogFilledIcon = function (e) {
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
  let m = 19;
  let h = 22;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "catalog-filled"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 22 19",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.54192 2.33333H18.8753C19.5169 2.33333 20.0419 1.80833 20.0419 1.16667C20.0419 0.525 19.5169 0 18.8753 0H2.54192C1.90027 0 1.37525 0.525 1.37525 1.16667C1.37525 1.80833 1.90027 2.33333 2.54192 2.33333ZM20.2286 4.43333C20.1236 3.89667 19.6453 3.5 19.0852 3.5H2.33193C1.77191 3.5 1.29358 3.89667 1.18859 4.43333L0.0219161 10.2667C-0.118088 10.99 0.430256 11.6667 1.16525 11.6667H1.37525V17.5C1.37525 18.1417 1.90027 18.6667 2.54192 18.6667H11.8752C12.5169 18.6667 13.0419 18.1417 13.0419 17.5V11.6667H17.7086V17.5C17.7086 18.1417 18.2336 18.6667 18.8753 18.6667C19.5169 18.6667 20.0419 18.1417 20.0419 17.5V11.6667H20.2519C20.9869 11.6667 21.5353 10.99 21.3953 10.2667L20.2286 4.43333ZM10.7086 16.3333H3.70858V11.6667H10.7086V16.3333Z",
    fill: "currentColor"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];