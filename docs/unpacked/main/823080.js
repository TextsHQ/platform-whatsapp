var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelEmojiFoodIcon = function (e) {
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
    name: "panel-emoji-food"
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
    d: "M7.4,11.4L7.4,11.4c-0.4,0-0.8,0.4-0.8,0.8V14c0,0.4,0.4,0.8,0.8,0.8l0,0c0.4,0,0.8-0.4,0.6-0.8v-1.8 C8,11.6,7.8,11.4,7.4,11.4z"
  }), u.default.createElement("path", {
    fill: "currentColor",
    d: "M4.6,10.4c-0.4,0-0.8,0.4-0.8,0.8V15c0,0.4,0.4,0.8,0.8,0.8s0.8-0.4,0.8-0.8v-3.8C5.4,10.6,5,10.4,4.6,10.4z "
  }), u.default.createElement("path", {
    fill: "currentColor",
    d: "M23,7.2c-0.6-0.6-1.6-0.8-2.8-0.6c-0.2,0-0.4,0.2-0.6,0.2V4.2C19.6,3.6,19,3,18.4,3h-17 C0.8,3,0.2,3.6,0.2,4.2v7.4c0,5.4,3.2,9.6,8.4,9.6h2.2c4.2,0,7-2.6,8-6H19h0.2c2.2-0.4,4-2.6,4.4-4.8C24,9,23.8,8,23,7.2z M18.2,4.4 v3H1.6v-3H18.2z M11,19.8H8.8c-5.2,0-7-4.4-7-8.2V8.8h16.6v2.8C18.2,15.6,16,19.8,11,19.8z M19.4,13.6c0.2-0.6,0.2-1.4,0.2-2V8.4 C20,8.2,20.2,8,20.6,8c0.6-0.2,1.2,0,1.4,0.4c0.4,0.4,0.6,1,0.4,1.8C22.2,11.6,20.8,13.2,19.4,13.6z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];