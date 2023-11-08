var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelEmojiSymbolsIcon = function (e) {
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
    name: "panel-emoji-symbols"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1",
    x: "0px",
    y: "0px",
    enableBackground: "new 0 0 24 24"
  }, u.default.createElement("path", {
    fill: "currentColor",
    d: "M14.5,12.9V11h2.2l-0.2-1.3h-2V7.3H13v2.5h-2V7.4H9.5v2.4H7.2L7.4,11h2.1v1.9H7.3l0.2,1.3h2v2.4H11v-2.4h2 v2.4h1.5v-2.4h2.3l-0.2-1.3C16.6,12.9,14.5,12.9,14.5,12.9z M11,11h2v1.9h-2V11z"
  }), u.default.createElement("path", {
    fill: "currentColor",
    d: "M16.1,2.6H7.9C5,2.6,2.6,5,2.6,7.9V16c0,3,2.4,5.3,5.3,5.3H16c3,0,5.3-2.4,5.3-5.3V7.9 C21.4,5,19,2.6,16.1,2.6z M19.8,16.1c0,2.1-1.6,3.8-3.7,3.8H7.9c-2.1,0-3.8-1.7-3.8-3.8V7.9c0-2.1,1.7-3.8,3.8-3.8H16 c2.1,0,3.8,1.7,3.8,3.8V16.1L19.8,16.1z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];