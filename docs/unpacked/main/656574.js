var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoFullscreenIcon = function (e) {
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
    name: "video-fullscreen"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1"
  }, u.default.createElement("title", null, "video-fullscreen"), u.default.createElement("desc", null, "Created with Sketch."), u.default.createElement("defs", null, u.default.createElement("path", {
    d: "M14,5.6 L14,6.18723404 C14,6.51860489 14.2686292,6.78723404 14.6,6.78723404 L17.212766,6.78723404 L17.212766,9.4 C17.212766,9.73137085 17.4813951,10 17.812766,10 L18.4,10 C18.7313708,10 19,9.73137085 19,9.4 L19,5 L14.6,5 C14.2686292,5 14,5.26862915 14,5.6 Z M5,5 L5,9.4 C5,9.73137085 5.26862915,10 5.6,10 L6.18723404,10 C6.51860489,10 6.78723404,9.73137085 6.78723404,9.4 L6.78723404,6.78723404 L9.4,6.78723404 C9.73137085,6.78723404 10,6.51860489 10,6.18723404 L10,5.6 C10,5.26862915 9.73137085,5 9.4,5 L5,5 Z M17.212766,14.6 L17.212766,17.212766 L14.6,17.212766 C14.2686292,17.212766 14,17.4813951 14,17.812766 L14,18.4 C14,18.7313708 14.2686292,19 14.6,19 L19,19 L19,14.6 C19,14.2686292 18.7313708,14 18.4,14 L17.812766,14 C17.4813951,14 17.212766,14.2686292 17.212766,14.6 Z M5,14.6 L5,19 L9.4,19 C9.73137085,19 10,18.7313708 10,18.4 L10,17.812766 C10,17.4813951 9.73137085,17.212766 9.4,17.212766 L6.78723404,17.212766 L6.78723404,14.6 C6.78723404,14.2686292 6.51860489,14 6.18723404,14 L5.6,14 C5.26862915,14 5,14.2686292 5,14.6 Z",
    id: "video-fullscreen-path-1"
  }), u.default.createElement("filter", {
    x: "-25.0%",
    y: "-17.9%",
    width: "150.0%",
    height: "150.0%",
    filterUnits: "objectBoundingBox",
    id: "video-fullscreen-filter-2"
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
    id: "video-fullscreen-Page-1",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, u.default.createElement("g", {
    id: "video-fullscreen-fullscreen"
  }, u.default.createElement("use", {
    fill: "black",
    fillOpacity: 1,
    filter: "url(#video-fullscreen-filter-2)",
    xlinkHref: "#video-fullscreen-path-1"
  }), u.default.createElement("use", {
    fill: "#FFFFFF",
    fillRule: "evenodd",
    xlinkHref: "#video-fullscreen-path-1"
  })))));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];