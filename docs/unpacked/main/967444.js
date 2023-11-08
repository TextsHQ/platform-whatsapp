var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoPauseIcon = function (e) {
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
    name: "video-pause"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 32 32",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1"
  }, u.default.createElement("title", null, "video-pause"), u.default.createElement("desc", null, "Created with Sketch."), u.default.createElement("defs", null, u.default.createElement("path", {
    d: "M22.5511124,8.00331871 L19.7857994,8.00331871 C19.1743275,8.00331871 18.6798401,8.49780612 18.6798401,9.10927798 L18.6798401,23.3581486 C18.6798401,23.9687908 19.1743275,24.4641079 19.7857994,24.4641079 L22.5511124,24.4641079 C23.1617546,24.4641079 23.6579013,23.9687908 23.6579013,23.3581486 L23.6579013,9.10927798 C23.6579013,8.49780612 23.1617546,8.00331871 22.5511124,8.00331871 M12.872102,8 L10.1059593,8 C9.49531709,8 9,8.49448742 9,9.10595927 L9,23.3581486 C9,23.9687908 9.49531709,24.4641079 10.1059593,24.4641079 L12.872102,24.4641079 C13.4827442,24.4641079 13.9780612,23.9687908 13.9780612,23.3581486 L13.9780612,9.10595927 C13.9780612,8.49448742 13.4827442,8 12.872102,8",
    id: "video-pause-path-1"
  }), u.default.createElement("filter", {
    x: "-23.9%",
    y: "-15.2%",
    width: "147.8%",
    height: "142.5%",
    filterUnits: "objectBoundingBox",
    id: "video-pause-filter-2"
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
    id: "video-pause-Page-1",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, u.default.createElement("g", {
    id: "video-pause-"
  }, u.default.createElement("g", {
    id: "pause"
  }, u.default.createElement("use", {
    fill: "black",
    fillOpacity: 1,
    filter: "url(#video-pause-filter-2)",
    xlinkHref: "#video-pause-path-1"
  }), u.default.createElement("use", {
    fill: "#FFFFFF",
    fillRule: "evenodd",
    xlinkHref: "#video-pause-path-1"
  }))))));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];