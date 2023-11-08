var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelRecentIcon = function (e) {
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
    name: "panel-recent"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1"
  }, u.default.createElement("path", {
    d: "M20.5378905,11.9748276 C20.5378905,7.24555819 16.704097,3.41176471 11.9748276,3.41176471 C7.24555819,3.41176471 3.41176471,7.24555819 3.41176471,11.9748276 C3.41176471,16.704097 7.24555819,20.5378905 11.9748276,20.5378905 C16.704097,20.5378905 20.5378905,16.704097 20.5378905,11.9748276 Z M21.9496552,11.9748276 C21.9496552,17.4837931 17.4837931,21.9496552 11.9748276,21.9496552 C6.46586207,21.9496552 2,17.4837931 2,11.9748276 C2,6.46586207 6.46586207,2 11.9748276,2 C17.4837931,2 21.9496552,6.46586207 21.9496552,11.9748276 Z M12.1176471,6.70588235 L12.1176471,12.396898 L16.5044771,15.0244548 C16.8389217,15.2247753 16.9476508,15.6582881 16.7473302,15.9927327 C16.5470097,16.3271773 16.1134969,16.4359063 15.7790523,16.2355858 L10.7058824,13.1969356 L10.7058824,6.70588235 C10.7058824,6.31603429 11.0219166,6 11.4117647,6 C11.8016128,6 12.1176471,6.31603429 12.1176471,6.70588235 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];