var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelEmojiObjectsIcon = function (e) {
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
    name: "panel-emoji-objects"
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
    d: "M18.8,6.7c-0.9-2.6-3.2-4.6-6-4.9c-0.3,0-0.5,0-0.8,0h0c-0.3,0-0.5,0-0.8,0C8.4,2.1,6.1,4,5.2,6.7 c-1,3,0.1,6.2,2.7,8H8c0.2,0.1,0.3,0.4,0.3,0.6v2c0,0.8,0.6,1.4,1.4,1.4h4.5h0.1c0.8,0,1.4-0.6,1.4-1.4v-2c0-0.2,0.1-0.5,0.3-0.6 l0.1-0.1C18.6,12.8,19.7,9.6,18.8,6.7z M15.3,13.6l-0.1,0.1c-0.5,0.4-0.9,1-0.9,1.7v2c0,0,0,0.1-0.1,0.1c0,0,0,0-0.1,0H9.8 c0,0-0.1,0-0.1-0.1v-2c0-0.7-0.3-1.3-0.9-1.7l-0.1-0.1c-2-1.4-3-4-2.2-6.5C7.2,5,9.1,3.4,11.4,3.2c0.2,0,0.4,0,0.6,0h0.1 c0.2,0,0.4,0,0.6,0c2.2,0.2,4.2,1.8,4.9,3.9C18.3,9.5,17.4,12.1,15.3,13.6z"
  }), u.default.createElement("path", {
    fill: "currentColor",
    d: "M9.2,21.2c0,0.6,0.5,1,1,1h3.7c0.6,0,1-0.5,1-1v-1H9.2V21.2L9.2,21.2z"
  }), u.default.createElement("path", {
    fill: "currentColor",
    d: "M13.6,10.5c-0.4,0-0.8,0.3-0.8,0.8c0,0.1,0,0.2,0.1,0.3c-0.2,0.3-0.5,0.5-0.8,0.5s-0.6-0.2-0.8-0.5 c0-0.1,0.1-0.2,0.1-0.3c0-0.4-0.3-0.8-0.8-0.8c-0.4,0-0.8,0.3-0.8,0.8c0,0.4,0.3,0.7,0.7,0.8c0.3,0.4,0.7,0.7,1.1,0.8V15 c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4v-2.1c0.4-0.1,0.8-0.4,1.1-0.8l0,0c0.4,0,0.8-0.3,0.8-0.8C14.3,10.8,14,10.5,13.6,10.5z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];