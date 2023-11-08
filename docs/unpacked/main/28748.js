var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoPlayIcon = function (e) {
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
  let m = 32;
  let h = 32;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "video-play"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 32 32",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1"
  }, u.default.createElement("title", null, "video-play"), u.default.createElement("desc", null, "Created with Sketch."), u.default.createElement("defs", null, u.default.createElement("path", {
    d: "M24.4,14.7910279 L11.4,7.29102793 C10.1,6.59102793 9,7.19102793 9,8.69102793 L9,23.6910279 C9,25.1910279 10.1,25.7910279 11.4,25.0910279 L24.4,17.5910279 C25.7,16.6910279 25.7,15.4910279 24.4,14.7910279 Z",
    id: "v-play-path-1"
  }), u.default.createElement("filter", {
    x: "-21.4%",
    y: "-13.6%",
    width: "142.7%",
    height: "138.1%",
    filterUnits: "objectBoundingBox",
    id: "v-play-filter-2"
  }, u.default.createElement("feOffset", {
    dx: 0,
    dy: 1,
    in: "SourceAlpha",
    result: "shadowOffsetOuter1"
  }), u.default.createElement("feGaussianBlur", {
    stdDeviation: 1,
    in: "shadowOffsetOuter1",
    result: "shadowBlurOuter1"
  }), u.default.createElement("feColorMatrix", {
    values: "0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.3 0",
    type: "matrix",
    in: "shadowBlurOuter1"
  }))), u.default.createElement("g", {
    id: "video-play-Page-1",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, u.default.createElement("g", {
    id: "video-play",
    fillRule: "nonzero"
  }, u.default.createElement("use", {
    fill: "black",
    fillOpacity: 1,
    filter: "url(#v-play-filter-2)",
    xlinkHref: "#v-play-path-1"
  }), u.default.createElement("use", {
    fill: "#FFFFFF",
    fillRule: "evenodd",
    xlinkHref: "#v-play-path-1"
  })))));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];