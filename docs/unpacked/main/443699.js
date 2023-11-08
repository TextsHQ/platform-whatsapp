var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AttachCameraIcon = function (e) {
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
    name: "attach-camera"
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
    id: "camera-SVGID_1_",
    cx: 26.5,
    cy: 26.5,
    r: 25.5
  })), u.default.createElement("clipPath", {
    id: "camera-SVGID_2_"
  }, u.default.createElement("use", {
    xlinkHref: "#camera-SVGID_1_",
    overflow: "visible"
  })), u.default.createElement("g", {
    clipPath: "url(#camera-SVGID_2_)"
  }, u.default.createElement("path", {
    fill: "#D3396D",
    d: "M26.5-1.1C11.9-1.1-1.1,5.6-1.1,27.6h55.2C54,8.6,41.1-1.1,26.5-1.1z"
  }), u.default.createElement("path", {
    fill: "#EC407A",
    d: "M53,26.5H-1.1c0,14.6,13,27.6,27.6,27.6s27.6-13,27.6-27.6C54.1,26.5,53,26.5,53,26.5z"
  }), u.default.createElement("rect", {
    x: 17,
    y: 24.5,
    fill: "#D3396D",
    width: 15,
    height: 9
  }))), u.default.createElement("g", {
    fill: "#F5F5F5"
  }, u.default.createElement("path", {
    id: "svg-camera",
    d: "M27.795 17C28.742 17 29.634 17.447 30.2 18.206L30.5 18.609C31.066 19.368 31.958 19.815 32.905 19.815L34.2 19.815C35.746 19.815 37 21.068 37 22.615L37 32C37 34.209 35.209 36 33 36L20 36C17.791 36 16 34.209 16 32L16 22.615C16 21.068 17.254 19.815 18.8 19.815L20.095 19.815C21.042 19.815 21.934 19.368 22.5 18.609L22.8 18.206C23.366 17.447 24.258 17 25.205 17L27.795 17ZM26.5 22.25C23.601 22.25 21.25 24.601 21.25 27.5 21.25 30.399 23.601 32.75 26.5 32.75 29.399 32.75 31.75 30.399 31.75 27.5 31.75 24.601 29.399 22.25 26.5 22.25ZM26.5 24C28.433 24 30 25.567 30 27.5 30 29.433 28.433 31 26.5 31 24.567 31 23 29.433 23 27.5 23 25.567 24.567 24 26.5 24Z"
  }))));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];