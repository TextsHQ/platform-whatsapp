var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelEmojiPeopleIcon = function (e) {
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
    name: "panel-emoji-people"
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
    d: "M12,22.1C6.4,22.1,1.9,17.6,1.9,12S6.4,1.9,12,1.9S22.1,6.4,22.1,12S17.6,22.1,12,22.1z M12,3.5 c-4.7,0-8.5,3.8-8.5,8.5s3.8,8.5,8.5,8.5s8.5-3.8,8.5-8.5S16.7,3.5,12,3.5z"
  }), u.default.createElement("path", {
    fill: "currentColor",
    d: "M8.9,11.6c0.7,0,1.3-0.7,1.3-1.5S9.6,8.6,8.9,8.6s-1.3,0.7-1.3,1.5C7.6,10.9,8.2,11.6,8.9,11.6z"
  }), u.default.createElement("path", {
    fill: "currentColor",
    d: "M17.1,13.6c-1.1,0.1-3,0.4-5,0.4s-4-0.3-5-0.4c-0.4,0-0.6,0.3-0.4,0.7c1.1,2,3.1,3.5,5.5,3.5 c2.3,0,4.4-1.5,5.5-3.5C17.8,14,17.5,13.6,17.1,13.6z M12.3,16c-2.6,0-4.1-1-4.2-1.6c0,0,4.4,0.9,8,0C16.1,14.4,15.6,16,12.3,16z"
  }), u.default.createElement("path", {
    fill: "currentColor",
    d: "M15.1,11.6c0.7,0,1.3-0.7,1.3-1.5s-0.6-1.5-1.3-1.5s-1.3,0.7-1.3,1.5C13.8,10.9,14.4,11.6,15.1,11.6z"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];