var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoPipIcon = function (e) {
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
    name: "video-pip"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1"
  }, u.default.createElement("defs", null, u.default.createElement("filter", {
    x: "-39.5%",
    y: "-46.4%",
    width: "173.7%",
    height: "200.0%",
    filterUnits: "objectBoundingBox",
    id: "video-pip-filter-1"
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
    in: "shadowBlurOuter1",
    result: "shadowMatrixOuter1"
  }), u.default.createElement("feMerge", null, u.default.createElement("feMergeNode", {
    in: "shadowMatrixOuter1"
  }), u.default.createElement("feMergeNode", {
    in: "SourceGraphic"
  })))), u.default.createElement("g", {
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, u.default.createElement("g", {
    filter: "url(#video-pip-filter-1)",
    transform: "translate(3.000000, 4.000000)",
    fill: "#FFFFFF"
  }, u.default.createElement("path", {
    d: "M11.3499993,5.99999964 L17.349999,5.99999964 C18.0123989,5.99999964 18.5499989,5.46239967 18.5499989,4.79999971 L18.5499989,1.19999993 C18.5499989,0.537599968 18.0123989,0 17.349999,0 L11.3499993,0 C10.6875994,0 10.1499994,0.537599968 10.1499994,1.19999993 L10.1499994,4.79999971 C10.1499994,5.46239967 10.6875994,5.99999964 11.3499993,5.99999964"
  }), u.default.createElement("path", {
    d: "M8.64999941,1.87499984 L8.64999941,3.37499984 L1.20029993,3.37499984 C0.951778708,3.37499984 0.7503,3.57654815 0.7503,3.82499977 L0.7503,12.4249992 C0.7503,12.6734508 0.951778708,12.8749991 1.20029993,12.8749991 L14.6002991,12.8749991 C14.8484855,12.8749991 15.050299,12.6731856 15.050299,12.4249992 L15.050299,7.17479957 L16.550299,7.17479957 L16.550299,12.4249992 C16.550299,13.5016127 15.6769126,14.3749991 14.6002991,14.3749991 L1.20029993,14.3749991 C0.123235593,14.3749991 -0.7497,13.501762 -0.7497,12.4249992 L-0.7497,3.82499977 C-0.7497,2.74823697 0.123235593,1.87499984 1.20029993,1.87499984 L8.64999941,1.87499984 Z",
    fillRule: "nonzero"
  })))));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];