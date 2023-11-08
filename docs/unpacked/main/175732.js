var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapPlaceholderIcon = function (e) {
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
  let m = 320;
  let h = 580;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "map-placeholder"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 580 320",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1"
  }, u.default.createElement("title", null, "ic_tempmap"), u.default.createElement("desc", null, "Created with Sketch."), u.default.createElement("defs", null), u.default.createElement("g", {
    id: "ic_tempmap",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, u.default.createElement("rect", {
    id: "Rectangle-6",
    fill: "#EAEAEA",
    x: 0,
    y: 112,
    width: 358,
    height: 208
  }), u.default.createElement("path", {
    d: "M12.5,541 C-148.598871,541 -281,449.869854 -281,334 C-281,218.130146 -148.598871,127 12.5,127 C173.598871,127 306,218.130146 306,334 C306,449.869854 173.598871,541 12.5,541 Z M12.5,509 C157.919165,509 274,429.102921 274,334 C274,238.897079 157.919165,159 12.5,159 C-132.919165,159 -249,238.897079 -249,334 C-249,429.102921 -132.919165,509 12.5,509 Z",
    id: "Oval-3",
    fill: "#FFF1B6",
    fillRule: "nonzero"
  }), u.default.createElement("polygon", {
    id: "Rectangle-6",
    fill: "#CBE6A3",
    points: "6.37225587e-14 0 358 0 358 80 6.37225587e-14 80"
  }), u.default.createElement("polygon", {
    id: "Rectangle-6",
    fill: "#8CCEFF",
    points: "390 -2.82320336e-13 580 -2.82320336e-13 580 80 390 80"
  }), u.default.createElement("rect", {
    id: "Rectangle-6",
    fill: "#F0E0C9",
    x: 391,
    y: 112,
    width: 190,
    height: 59
  }), u.default.createElement("rect", {
    id: "Rectangle-6",
    fill: "#F0E0C9",
    x: 391,
    y: 203,
    width: 110,
    height: 117
  }), u.default.createElement("rect", {
    id: "Rectangle-6",
    fill: "#F0E0C9",
    x: 534,
    y: 203,
    width: 46,
    height: 117
  }), u.default.createElement("rect", {
    id: "Rectangle",
    fill: "#FFF1B6",
    x: 0,
    y: 80,
    width: 580,
    height: 32
  }), u.default.createElement("rect", {
    id: "Rectangle",
    fill: "#FFF1B6",
    x: 391,
    y: 171,
    width: 190,
    height: 32
  }), u.default.createElement("rect", {
    id: "Rectangle",
    fill: "#FFF1B6",
    x: 358,
    y: 0,
    width: 33,
    height: 320
  }), u.default.createElement("rect", {
    id: "Rectangle",
    fill: "#FFF1B6",
    x: 501,
    y: 171,
    width: 33,
    height: 149
  }))));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];