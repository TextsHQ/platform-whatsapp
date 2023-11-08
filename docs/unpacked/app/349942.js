var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollectionsFolderIcon = function (e) {
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
  let _ = 40;
  let g = 40;
  if (!(r == null && c == null)) {
    _ = r;
    g = c;
  }
  return l.default.createElement(o.BaseSvgSpan, (0, i.default)({
    name: "collections-folder"
  }, p), l.default.createElement("svg", {
    viewBox: (t = f) !== null && t !== undefined ? t : "0 0 56 56",
    height: _,
    width: g,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, s.default)(n),
    fill: "none"
  }, l.default.createElement("g", {
    clipPath: "url(#clip0)"
  }, l.default.createElement("path", {
    d: "M4.48047 16.8052C4.48047 14.3302 6.4869 12.3237 8.96195 12.3237H44.8138C47.2889 12.3237 49.2953 14.3302 49.2953 16.8052V44.8145C49.2953 47.2895 47.2889 49.296 44.8138 49.296H8.96195C6.48689 49.296 4.48047 47.2895 4.48047 44.8145V16.8052Z",
    fill: "currentColor"
  }), l.default.createElement("path", {
    d: "M8.96094 8.96244C8.96094 6.48738 10.9674 4.48096 13.4424 4.48096H40.3313C42.8064 4.48096 44.8128 6.48738 44.8128 8.96244V8.96244H8.96094V8.96244Z",
    fill: "currentColor"
  })), l.default.createElement("defs", null, l.default.createElement("clipPath", {
    id: "clip0"
  }, l.default.createElement("rect", {
    width: 44.8148,
    height: 44.8148,
    fill: "white",
    transform: "translate(4.48047 4.4812)"
  })))));
};
var i = r(require("../vendor/967154.js"));
var a = r(require("../vendor/506479.js"));
var o = require("./220584.js");
var s = r(require("./156720.js"));
var l = r(require("../vendor/667294.js"));
const u = ["iconXstyle", "height", "width", "viewBox"];