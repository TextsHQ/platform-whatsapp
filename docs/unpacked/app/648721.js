var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlertOpenNativeIcon = function (e) {
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
  let _ = 44;
  let g = 44;
  if (!(r == null && c == null)) {
    _ = r;
    g = c;
  }
  return l.default.createElement(o.BaseSvgSpan, (0, i.default)({
    name: "alert-open-native"
  }, p), l.default.createElement("svg", {
    viewBox: (t = f) !== null && t !== undefined ? t : "0 0 44 44",
    height: _,
    width: g,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, s.default)(n),
    fill: "none"
  }, l.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44ZM27.889 18.1108L29.4165 16.5833L34.8332 22L29.4165 27.4167L27.889 25.8783L30.684 23.0833H19.6665V20.9167H30.684L27.889 18.1108ZM23.9998 14.4167H15.3332V29.5833H23.9998V31.75H15.3332C14.1415 31.75 13.1665 30.775 13.1665 29.5833V14.4167C13.1665 13.225 14.1415 12.25 15.3332 12.25H23.9998V14.4167Z",
    fill: "currentColor"
  })));
};
var i = r(require("../vendor/967154.js"));
var a = r(require("../vendor/506479.js"));
var o = require("./220584.js");
var s = r(require("./156720.js"));
var l = r(require("../vendor/667294.js"));
const u = ["iconXstyle", "height", "width", "viewBox"];