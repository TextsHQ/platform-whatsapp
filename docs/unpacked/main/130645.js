var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoExitFullscreenIcon = function (e) {
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
    name: "video-exit-fullscreen"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1"
  }, u.default.createElement("defs", null, u.default.createElement("path", {
    d: "M15.0425532,1.93617021 L15.0425532,8.95744681 L22.0638298,8.95744681 C22.5808623,8.95744681 23,8.53830913 23,8.0212766 L23,7.08510638 C23,6.56807385 22.5808623,6.14893617 22.0638298,6.14893617 L17.8510638,6.14893617 L17.8510638,1.93617021 C17.8510638,1.41913768 17.4319261,1 16.9148936,1 L15.9787234,1 C15.4616909,1 15.0425532,1.41913768 15.0425532,1.93617021 Z M6.14893617,1.93617021 L6.14893617,6.14893617 L1.93617021,6.14893617 C1.41913768,6.14893617 1,6.56807385 1,7.08510638 L1,8.0212766 C1,8.53830913 1.41913768,8.95744681 1.93617021,8.95744681 L8.95744681,8.95744681 L8.95744681,1.93617021 C8.95744681,1.41913768 8.53830913,1 8.0212766,1 L7.08510638,1 C6.56807385,1 6.14893617,1.41913768 6.14893617,1.93617021 Z M15.0425532,15.0425532 L15.0425532,22.0638298 C15.0425532,22.5808623 15.4616909,23 15.9787234,23 L16.9148936,23 C17.4319261,23 17.8510638,22.5808623 17.8510638,22.0638298 L17.8510638,17.8510638 L22.0638298,17.8510638 C22.5808623,17.8510638 23,17.4319261 23,16.9148936 L23,15.9787234 C23,15.4616909 22.5808623,15.0425532 22.0638298,15.0425532 L15.0425532,15.0425532 Z M1,15.9787234 L1,16.9148936 C1,17.4319261 1.41913768,17.8510638 1.93617021,17.8510638 L6.14893617,17.8510638 L6.14893617,22.0638298 C6.14893617,22.5808623 6.56807385,23 7.08510638,23 L8.0212766,23 C8.53830913,23 8.95744681,22.5808623 8.95744681,22.0638298 L8.95744681,15.0425532 L1.93617021,15.0425532 C1.41913768,15.0425532 1,15.4616909 1,15.9787234 Z",
    id: "exit-fullscreen-path"
  }), u.default.createElement("filter", {
    x: "-15.9%",
    y: "-11.4%",
    width: "131.8%",
    height: "131.8%",
    filterUnits: "objectBoundingBox",
    id: "exit-fullscreen-filter"
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
    id: "exit-fullscreen-page",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, u.default.createElement("g", {
    id: "exit-fullscreen"
  }, u.default.createElement("use", {
    fill: "black",
    fillOpacity: 1,
    filter: "url(#exit-fullscreen-filter)",
    xlinkHref: "#exit-fullscreen-path"
  }), u.default.createElement("use", {
    fill: "#FFFFFF",
    fillRule: "evenodd",
    xlinkHref: "#exit-fullscreen-path"
  })))));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];