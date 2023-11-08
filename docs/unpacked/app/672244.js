var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessDescriptionIcon = function (e) {
  var t;
  const {
    iconXstyle: n,
    height: r,
    width: c,
    viewBox: d
  } = e;
  const p = (0, a.default)(e, u);
  let f;
  if (d) {
    const {
      x: e = 0,
      y: t = 0,
      width: n = 0,
      height: r = 0
    } = d;
    f = [e, t, n, r].join(" ");
  }
  let _ = 24;
  let g = 24;
  if (!(r == null && c == null)) {
    _ = r;
    g = c;
  }
  return l.default.createElement(o.BaseSvgSpan, (0, i.default)({
    name: "business-description"
  }, p), l.default.createElement("svg", {
    viewBox: (t = f) !== null && t !== undefined ? t : "0 0 24 24",
    height: _,
    width: g,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, s.default)(n),
    version: "1.1"
  }, l.default.createElement("title", null, "business-description"), l.default.createElement("desc", null, "Created with Sketch."), l.default.createElement("defs", null), l.default.createElement("g", {
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, l.default.createElement("path", {
    d: "M3.55479575,5.11130106 L20.4434947,5.11130106 L20.4434947,3 L3.55479575,3 L3.55479575,5.11130106 Z M3.55479575,6.16780637 L2.5,11.4469138 L2.5,13.5582149 L3.55479575,13.5582149 L3.55479575,19.8904085 L14.1095915,19.8904085 L14.1095915,13.5582149 L18.3339032,13.5582149 L18.3339032,19.8904085 L20.4452042,19.8904085 L20.4452042,13.5582149 L21.5,13.5582149 L21.5,11.4469138 L20.4452042,6.16780637 L3.55479575,6.16780637 Z M5.66609681,17.780817 L11.9982904,17.780817 L11.9982904,13.5582149 L5.66609681,13.5582149 L5.66609681,17.780817 Z",
    id: "Page-1-Copy",
    fill: "currentColor"
  }), l.default.createElement("g", {
    id: "slices",
    transform: "translate(0.000000, -198.000000)"
  }))));
};
var i = r(require("../vendor/967154.js"));
var a = r(require("../vendor/506479.js"));
var o = require("./220584.js");
var s = r(require("./156720.js"));
var l = r(require("../vendor/667294.js"));
const u = ["iconXstyle", "height", "width", "viewBox"];