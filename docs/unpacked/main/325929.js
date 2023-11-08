var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AttachDocumentIcon = function (e) {
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
    name: "attach-document"
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
    id: "document-SVGID_1_",
    cx: 26.5,
    cy: 26.5,
    r: 25.5
  })), u.default.createElement("clipPath", {
    id: "document-SVGID_2_"
  }, u.default.createElement("use", {
    xlinkHref: "#document-SVGID_1_",
    overflow: "visible"
  })), u.default.createElement("g", {
    clipPath: "url(#document-SVGID_2_)"
  }, u.default.createElement("path", {
    fill: "#5157AE",
    d: "M26.5-1.1C11.9-1.1-1.1,5.6-1.1,27.6h55.2C54,8.6,41.1-1.1,26.5-1.1z"
  }), u.default.createElement("path", {
    fill: "#5F66CD",
    d: "M53,26.5H-1.1c0,14.6,13,27.6,27.6,27.6s27.6-13,27.6-27.6C54.1,26.5,53,26.5,53,26.5z"
  }))), u.default.createElement("g", {
    fill: "#F5F5F5"
  }, u.default.createElement("path", {
    id: "svg-document",
    d: "M29.09 17.09c-.38-.38-.89-.59-1.42-.59H20.5c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H32.5c1.1 0 2-.9 2-2V23.33c0-.53-.21-1.04-.59-1.41l-4.82-4.83zM27.5 22.5V18L33 23.5H28.5c-.55 0-1-.45-1-1z"
  }))));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];