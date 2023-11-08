var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultNewsletterIcon = function (e) {
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
    name: "default-newsletter"
  }, p), l.default.createElement("svg", {
    viewBox: (t = f) !== null && t !== undefined ? t : "0 0 212 212",
    height: _,
    width: g,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, s.default)(n),
    fill: "none"
  }, l.default.createElement("rect", {
    className: "background",
    width: 212,
    height: 212,
    rx: 106,
    fill: "currentColor"
  }), l.default.createElement("path", {
    className: "primary",
    d: "M157.123 99.0265C154.027 75.5432 134.626 56.8186 111.097 54.6979C80.5503 51.9047 55.3184 75.388 54.7508 105.906C54.5444 116.872 58.7239 126.286 60.8395 130.32L54.6992 150.648C53.5124 154.579 57.1759 158.252 61.0975 157.062L81.1179 151.062C88.7546 155.304 97.3201 157.528 106.092 157.528C136.742 157.528 161.2 130.527 157.072 99.0265H157.123ZM85.7103 119.82C87.1034 121.889 86.9486 124.682 85.1943 126.441C82.8723 128.82 79.0024 128.355 77.1448 125.562C73.3781 119.975 71.1593 113.199 71.1593 105.958C71.1593 98.7161 73.5329 91.4229 77.6092 85.6813C79.4152 83.1468 83.1819 82.9916 85.4007 85.2158C87.2066 87.0262 87.3614 89.8194 85.9167 91.8884C83.1303 95.8712 81.5307 100.733 81.5307 105.958C81.5307 111.182 83.1303 115.837 85.8135 119.768L85.7103 119.82ZM106.35 113.716C102.067 113.716 98.61 110.251 98.61 105.958C98.61 101.664 102.067 98.1989 106.35 98.1989C110.633 98.1989 114.09 101.664 114.09 105.958C114.09 110.251 110.633 113.716 106.35 113.716ZM134.471 126.337C132.665 128.872 128.899 129.027 126.732 126.803C124.926 124.993 124.771 122.199 126.216 120.13C129.002 116.148 130.653 111.234 130.653 106.009C130.653 100.785 128.95 95.7678 126.112 91.7849C124.616 89.6642 124.719 86.8193 126.525 84.9572C128.692 82.7847 132.407 82.8882 134.265 85.4227C138.496 91.216 140.973 98.3023 140.973 106.061C140.973 113.82 138.548 120.648 134.471 126.389V126.337Z",
    fill: "#FFFFFF"
  })));
};
var i = r(require("../vendor/967154.js"));
var a = r(require("../vendor/506479.js"));
var o = require("./220584.js");
var s = r(require("./156720.js"));
var l = r(require("../vendor/667294.js"));
const u = ["iconXstyle", "height", "width", "viewBox"];