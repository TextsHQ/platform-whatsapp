var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoPipLargeIcon = function (e) {
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
  let m = 28;
  let h = 37;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "video-pip-large"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 37 28",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1"
  }, u.default.createElement("path", {
    d: "M33.8354224,11.9998779 L22.16,11.9998779 C20.96768,11.9998779 20,11.0321979 20,9.83987797 L20,3.15999996 C20,1.96767998 20.96768,1 22.16,1 L33.8354224,1 C35.0277424,1 35.9954224,1.96767998 35.9954224,3.15999996 L35.9954224,9.83987797 C35.9954224,11.0321979 35.0277424,11.9998779 33.8354224,11.9998779 Z",
    fill: "currentColor"
  }), u.default.createElement("path", {
    d: "M17.5694596,5 L17.5694596,7 L4.15999996,7 C3.51933499,7 3,7.51951438 2.99999977,8.15932623 L3.01055908,23.8326453 C3.01055908,24.4731309 3.52989407,24.9926453 4.17055904,24.9926453 L27.850046,24.9926453 C28.4900723,24.9926453 29.0100192,24.4726895 29.0100198,23.8337553 L28.9994607,14.320724 L30.9994595,14.3185041 L31.0100192,23.8326453 C31.0100192,25.5772513 29.5946495,26.9926453 27.850046,26.9926453 L4.17055904,26.9926453 C2.42516991,26.9926453 1.01055908,25.5775458 1.01055931,23.833319 L1,8.15999996 C1,6.41509947 2.41461083,5 4.15999996,5 L17.5694596,5 Z",
    fill: "currentColor"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];