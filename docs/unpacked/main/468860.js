var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AttachProductIcon = function (e) {
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
    name: "attach-product"
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
    id: "product-SVGID_1_",
    cx: 26.5,
    cy: 26.5,
    r: 25.5
  })), u.default.createElement("clipPath", {
    id: "product-SVGID_2_"
  }, u.default.createElement("use", {
    xlinkHref: "#product-SVGID_1_",
    overflow: "visible"
  })), u.default.createElement("g", {
    clipPath: "url(#product-SVGID_2_)"
  }, u.default.createElement("path", {
    fill: "#476B7E",
    d: "M26.5-1.1C11.9-1.1-1.1,5.6-1.1,27.6h55.2C54,8.6,41.1-1.1,26.5-1.1z"
  }), u.default.createElement("path", {
    fill: "#537D93",
    d: "M53,26.5H-1.1c0,14.6,13,27.6,27.6,27.6s27.6-13,27.6-27.6C54.1,26.5,53,26.5,53,26.5z"
  }))), u.default.createElement("g", {
    fill: "#F5F5F5"
  }, u.default.createElement("path", {
    id: "svg-product",
    d: "M18.844 19.75 34.156 19.75C34.758 19.75 35.25 19.3 35.25 18.75 35.25 18.2 34.758 17.75 34.156 17.75L18.844 17.75C18.242 17.75 17.75 18.2 17.75 18.75 17.75 19.3 18.242 19.75 18.844 19.75ZM35.39 21.89C35.292 21.389 34.845 20.75 34.322 20.75L18.678 20.75C18.155 20.75 17.708 21.389 17.61 21.89L16.52 27.337C16.39 28.013 16.902 28.75 17.588 28.75L18 28.75 18 34C18 34.599 18.275 35.25 18.874 35.25L27.589 35.25C28.189 35.25 28.5 34.599 28.5 34L28.5 28.75 33 28.75 33 34.092C33 34.691 33.401 35.25 34 35.25 34.599 35.25 35 34.691 35 34.092L35 28.75 35.412 28.75C36.098 28.75 36.61 28.013 36.48 27.337L35.39 21.89ZM26.5 33.25 20 33.25 20 28.75 26.5 28.75 26.5 33.25Z"
  }))));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];