var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelEmojiActivityIcon = function (e) {
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
    name: "panel-emoji-activity"
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
    d: "M14.8,15.3l1.3-3.8c0.1-0.2,0-0.5-0.2-0.6l-3.3-2.4c-0.2-0.1-0.5-0.1-0.6,0l-3.3,2.4 c-0.2,0.1-0.3,0.4-0.2,0.6l1.3,3.8c0.1,0.2,0.3,0.4,0.5,0.4h4C14.5,15.7,14.7,15.5,14.8,15.3z"
  }), u.default.createElement("path", {
    fill: "currentColor",
    d: "M12,1.9C6.4,1.9,1.9,6.4,1.9,12S6.4,22.1,12,22.1S22.1,17.6,22.1,12S17.6,1.9,12,1.9z M9.8,20.3 c0.1-0.2,0.1-0.4,0-0.6l-1.4-2.3c-0.1-0.1-0.2-0.2-0.4-0.3l-2.5-0.6c-0.2-0.1-0.5,0.1-0.6,0.2c-0.9-1.3-1.4-2.9-1.5-4.5 c0.2,0,0.4,0,0.5-0.2l1.7-2c0.1,0,0.2-0.2,0.2-0.3L5.5,7.1c0-0.2-0.1-0.3-0.3-0.4C6.2,5.4,7.5,4.5,9,4c0,0.1,0.2,0.3,0.3,0.3 l2.5,1.1c0.1,0.1,0.3,0.1,0.4,0l2.5-1.1C14.8,4.2,14.9,4.1,15,4c1.5,0.6,2.7,1.5,3.7,2.7c-0.1,0.1-0.2,0.2-0.2,0.4l-0.2,2.6 c0,0.2,0,0.3,0.1,0.4l1.7,2c0.1,0.1,0.3,0.2,0.4,0.2c0,1.6-0.5,3.1-1.3,4.4c-0.1-0.1-0.2-0.1-0.4-0.1l-2.5,0.6 c-0.1,0-0.3,0.1-0.4,0.3l-1.4,2.3c-0.1,0.2-0.1,0.3,0,0.5c-0.8,0.2-1.6,0.4-2.5,0.4C11.3,20.6,10.5,20.5,9.8,20.3z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];