var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultUserSquareIcon = function (e) {
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
  let _ = 212;
  let g = 212;
  if (!(r == null && c == null)) {
    _ = r;
    g = c;
  }
  return l.default.createElement(o.BaseSvgSpan, (0, i.default)({
    name: "default-user-square"
  }, p), l.default.createElement("svg", {
    viewBox: (t = f) !== null && t !== undefined ? t : "0 0 212 212",
    height: _,
    width: g,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, s.default)(n),
    version: "1.1",
    x: "0px",
    y: "0px",
    enableBackground: "new 0 0 212 212"
  }, l.default.createElement("path", {
    fill: "#DFE5E7",
    className: "background",
    d: "M0,0h212v212H0V0z"
  }), l.default.createElement("path", {
    fill: "#FFFFFF",
    className: "primary",
    d: "M106,125.5c2.6,0,5.2-0.3,7.7-0.7c1.2-0.2,2.4-0.5,3.6-0.9c1.8-0.5,3.5-1.2,5.1-2c2.2-1,4.2-2.3,6.1-3.7 c2.9-2.1,5.4-4.6,7.5-7.5c0.7-1,1.4-1.9,2-3c0.9-1.5,1.7-3.2,2.4-4.8c0.5-1.1,0.9-2.3,1.2-3.5c0.2-0.6,0.3-1.2,0.5-1.8 c0.3-1.2,0.5-2.4,0.7-3.7c0.3-1.9,0.4-3.8,0.4-5.8s-0.1-3.9-0.4-5.8c-0.2-1.3-0.4-2.5-0.7-3.7c-0.1-0.6-0.3-1.2-0.5-1.8 c-0.4-1.2-0.8-2.3-1.2-3.5c-0.7-1.7-1.5-3.3-2.4-4.8c-0.6-1-1.3-2-2-3c-2.1-2.9-4.6-5.4-7.5-7.5c-1.9-1.4-4-2.6-6.1-3.7 c-1.6-0.8-3.3-1.4-5.1-2c-1.2-0.4-2.4-0.7-3.6-0.9c-2.5-0.5-5-0.7-7.7-0.7c-21.2,0-37.3,16.2-37.3,37.3 C68.7,109.3,84.8,125.5,106,125.5z M175,173.9c-0.4-0.7-0.9-1.5-1.4-2.3c-0.6-0.9-1.3-1.9-2.1-3c-0.8-1-1.6-2.2-2.6-3.3 s-2-2.3-3.2-3.5c-1.7-1.8-3.7-3.6-5.9-5.5c-3-2.4-6.3-4.8-10.2-7c-1.9-1.1-3.9-2.1-6-3.1c-0.1,0-0.1-0.1-0.2-0.1 c-9.8-4.4-22.1-7.5-37.4-7.5s-27.6,3.1-37.4,7.5c-0.3,0.2-0.7,0.3-1,0.5c-1.4,0.7-2.8,1.4-4.1,2.1c-0.7,0.4-1.4,0.8-2.1,1.2 c-3.4,2-6.5,4.2-9.1,6.4c-2.2,1.8-4.2,3.7-5.9,5.5c-1.2,1.2-2.2,2.4-3.2,3.5s-1.8,2.2-2.6,3.3c-0.8,1-1.5,2-2.1,3 c-0.6,0.8-1,1.6-1.4,2.3c0,0.1-0.1,0.1-0.1,0.2v0.1c-9.6,15-9.6,32.9-9.6,32.9s61.2,0,78.7,0h0.1c17.4,0,78.8,0,78.8,0 S184.7,189,175,173.9z"
  })));
};
var i = r(require("../vendor/967154.js"));
var a = r(require("../vendor/506479.js"));
var o = require("./220584.js");
var s = r(require("./156720.js"));
var l = r(require("../vendor/667294.js"));
const u = ["iconXstyle", "height", "width", "viewBox"];