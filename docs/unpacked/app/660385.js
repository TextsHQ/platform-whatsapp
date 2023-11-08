var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultBroadcastIcon = function (e) {
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
    name: "default-broadcast"
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
    d: "M106.251,0.5C164.653,0.5,212,47.846,212,106.25S164.653,212,106.25,212C47.846,212,0.5,164.654,0.5,106.25 S47.846,0.5,106.251,0.5z"
  }), l.default.createElement("path", {
    fill: "#FFFFFF",
    className: "primary",
    d: "M152.168,54.014l-11.66,4.364v95.453l11.744,4.161L152.168,54.014z M49.742,121.662l18.892,6.698 c0,0.14-0.021,0.274-0.021,0.414c0,14.507,11.782,26.269,26.318,26.269c8.39,0,15.849-3.935,20.669-10.039l18.328,6.495v-90.66 L49.742,92.355V121.662L49.742,121.662z M108.302,142.417c-3.455,3.371-8.169,5.458-13.371,5.458 c-9.818,0-17.921-7.419-19.005-16.934L108.302,142.417z"
  })));
};
var i = r(require("../vendor/967154.js"));
var a = r(require("../vendor/506479.js"));
var o = require("./220584.js");
var s = r(require("./156720.js"));
var l = r(require("../vendor/667294.js"));
const u = ["iconXstyle", "height", "width", "viewBox"];