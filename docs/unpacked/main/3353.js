var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AttachContactIcon = function (e) {
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
  let m = 53;
  let h = 53;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "attach-contact"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 53 53",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1",
    x: "0px",
    y: "0px",
    enableBackground: "new 0 0 53 53"
  }, u.default.createElement("g", null, u.default.createElement("defs", null, u.default.createElement("circle", {
    id: "contact-SVGID_1_",
    cx: 26.5,
    cy: 26.5,
    r: 25.5
  })), u.default.createElement("clipPath", {
    id: "contact-SVGID_2_"
  }, u.default.createElement("use", {
    xlinkHref: "#contact-SVGID_1_",
    overflow: "visible"
  })), u.default.createElement("g", {
    clipPath: "url(#contact-SVGID_2_)"
  }, u.default.createElement("g", null, u.default.createElement("path", {
    fill: "#0795DC",
    d: "M26.5-1.1C11.9-1.1-1.1,5.6-1.1,27.6h55.2C54,8.6,41.1-1.1,26.5-1.1z"
  }), u.default.createElement("path", {
    fill: "#0EABF4",
    d: "M53,26.5H-1.1c0,14.6,13,27.6,27.6,27.6s27.6-13,27.6-27.6C54.1,26.5,53,26.5,53,26.5z"
  })))), u.default.createElement("g", {
    fill: "#F5F5F5"
  }, u.default.createElement("path", {
    id: "svg-contact",
    d: "M26.5 26.5C28.986 26.5 31 24.486 31 22 31 19.514 28.986 17.5 26.5 17.5 24.014 17.5 22 19.514 22 22 22 24.486 24.014 26.5 26.5 26.5ZM26.5 28.75C23.496 28.75 17.5 30.258 17.5 33.25L17.5 34.375C17.5 34.994 18.006 35.5 18.625 35.5L34.375 35.5C34.994 35.5 35.5 34.994 35.5 34.375L35.5 33.25C35.5 30.258 29.504 28.75 26.5 28.75Z"
  }))));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];