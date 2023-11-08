var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoVolumeMutedIcon = function (e) {
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
    name: "video-volume-muted"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 32 32",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1"
  }, u.default.createElement("defs", null, u.default.createElement("path", {
    d: "M3,16.9574612 C3,17.5715879 3.50689011,18.0694861 4.13180121,18.0694861 L6.9999111,18.0694861 L11.1050409,22.0986131 C11.4346995,22.4221684 12,22.1928525 12,21.7342208 L12,8.51557421 C12,8.05733512 11.4346995,7.82762659 11.1050409,8.15157452 L6.9999111,12.1803089 L4.13180121,12.1803089 C3.50689011,12.1803089 3,12.6782071 3,13.2915485 L3,16.9574612 Z",
    id: "vvm-path-1"
  }), u.default.createElement("filter", {
    x: "-38.9%",
    y: "-16.5%",
    width: "177.8%",
    height: "144.4%",
    filterUnits: "objectBoundingBox",
    id: "vvm-filter-2"
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
  })), u.default.createElement("path", {
    d: "M22.8281041,14.5906672 L25.9892792,17.7518424 C26.2739489,18.0365121 26.2739489,18.4980528 25.9892792,18.7827225 L25.7827225,18.9892792 C25.4980528,19.2739489 25.0365121,19.2739489 24.7518424,18.9892792 L21.5906672,15.8281041 L18.4294921,18.9892792 C18.1448224,19.2739489 17.6832817,19.2739489 17.398612,18.9892792 L17.1920552,18.7827225 C16.9073856,18.4980528 16.9073856,18.0365121 17.1920552,17.7518424 L20.3532304,14.5906672 L17.1920552,11.4294921 C16.9073856,11.1448224 16.9073856,10.6832817 17.1920552,10.398612 L17.398612,10.1920552 C17.6832817,9.90738555 18.1448224,9.90738555 18.4294921,10.1920552 L21.5906672,13.3532304 L24.7518424,10.1920552 C25.0365121,9.90738555 25.4980528,9.90738555 25.7827225,10.1920552 L25.9892792,10.398612 C26.2739489,10.6832817 26.2739489,11.1448224 25.9892792,11.4294921 L22.8281041,14.5906672 Z",
    id: "vvm-path-3"
  }), u.default.createElement("filter", {
    x: "-37.9%",
    y: "-27.1%",
    width: "175.9%",
    height: "175.9%",
    filterUnits: "objectBoundingBox",
    id: "vvm-filter-4"
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
    id: "Fill-1"
  }, u.default.createElement("use", {
    fill: "black",
    fillOpacity: 1,
    filter: "url(#vvm-filter-2)",
    xlinkHref: "#vvm-path-1"
  }), u.default.createElement("use", {
    fill: "#FFFFFF",
    fillRule: "evenodd",
    xlinkHref: "#vvm-path-1"
  })), u.default.createElement("g", {
    id: "Combined-Shape"
  }, u.default.createElement("use", {
    fill: "black",
    fillOpacity: 1,
    filter: "url(#vvm-filter-4)",
    xlinkHref: "#vvm-path-3"
  }), u.default.createElement("use", {
    fill: "#FFFFFF",
    fillRule: "evenodd",
    xlinkHref: "#vvm-path-3"
  })))));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];