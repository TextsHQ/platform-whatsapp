var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoXIcon = function (e) {
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
  let m = 24;
  let h = 24;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "video-x"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1"
  }, u.default.createElement("title", null, "video-x"), u.default.createElement("desc", null, "Created with Sketch."), u.default.createElement("defs", null, u.default.createElement("path", {
    d: "M17.5268719,5.42394001 L12.6402,10.31144 L7.75252027,5.42404786 C7.51826184,5.18978943 7.13847373,5.18972508 6.90413593,5.42390412 L6.42426412,5.90287593 C6.18987015,6.13711109 6.18974142,6.51701006 6.42397658,6.75140402 C6.42402449,6.75145196 6.4240724,6.75149989 6.42412032,6.75154781 L11.3118,11.63894 L6.42412032,16.5263322 C6.18980575,16.7606468 6.18980575,17.1405457 6.42412032,17.3748603 C6.42416825,17.3749082 6.42421618,17.3749562 6.42426412,17.3750041 L6.90413593,17.8539759 C7.13847373,18.0881549 7.51826184,18.0880906 7.75252027,17.8538321 L12.6402,12.96644 L17.5266921,17.8541197 C17.7609868,18.0884542 18.1408858,18.0884864 18.3752202,17.8541916 C18.3752802,17.8541317 18.3753401,17.8540718 18.3754,17.8540118 L18.8533999,17.3749681 C19.0875648,17.1406443 19.0875165,16.760884 18.853292,16.5266198 L13.9668,11.63894 L18.853292,6.75126018 C19.0875165,6.51699597 19.0875648,6.13723565 18.8533999,5.90291188 L18.3754,5.4238682 C18.1411649,5.18947418 17.7612659,5.18934536 17.5268719,5.42358046 C17.526812,5.42364038 17.526752,5.42370031 17.5266921,5.42376025 Z",
    id: "path-1"
  }), u.default.createElement("filter", {
    x: "-23.2%",
    y: "-15.6%",
    width: "146.3%",
    height: "146.3%",
    filterUnits: "objectBoundingBox",
    id: "filter-2"
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
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, u.default.createElement("g", {
    id: "x"
  }, u.default.createElement("use", {
    fill: "black",
    fillOpacity: 1,
    filter: "url(#filter-2)",
    xlinkHref: "#path-1"
  }), u.default.createElement("use", {
    fill: "#FFFFFF",
    fillRule: "evenodd",
    xlinkHref: "#path-1"
  })))));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];