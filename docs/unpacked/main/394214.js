var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusMediaControlsVolumeOnIcon = function (e) {
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
    name: "status-media-controls-volume-on"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14 4.65204V4.45204C14 3.82204 14.63 3.37204 15.21 3.60204C18.6 4.89204 21 8.16204 21 12.002C21 15.842 18.6 19.112 15.21 20.402C14.63 20.622 14 20.182 14 19.552V19.352C14 18.972 14.24 18.642 14.6 18.502C17.18 17.472 19 14.942 19 12.002C19 9.06204 17.18 6.53204 14.6 5.50204C14.25 5.36204 14 5.03204 14 4.65204ZM3 10.002V14.002C3 14.552 3.45 15.002 4 15.002H7L10.29 18.292C10.92 18.922 12 18.472 12 17.582V6.41204C12 5.52204 10.92 5.07204 10.29 5.70204L7 9.00204H4C3.45 9.00204 3 9.45204 3 10.002ZM16.5 12.002C16.5 10.232 15.48 8.71204 14 7.97204V16.022C15.48 15.292 16.5 13.772 16.5 12.002Z",
    fill: "currentColor"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];