var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusMediaControlsNoSoundIcon = function (e) {
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
    name: "status-media-controls-no-sound"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    d: "M3 9.99977V13.9998C3 14.5498 3.45 14.9998 4 14.9998H7L10.29 18.2898C10.92 18.9198 12 18.4698 12 17.5798V6.40977C12 5.51977 10.92 5.06977 10.29 5.69977L7 8.99977H4C3.45 8.99977 3 9.44977 3 9.99977Z",
    fill: "currentColor"
  }), u.default.createElement("path", {
    d: "M18.5025 12.0923L19.8825 10.7123C20.2725 10.3223 20.2725 9.69227 19.8825 9.30227C19.4925 8.91227 18.8625 8.91227 18.4725 9.30227L17.0825 10.6723L15.7025 9.29227C15.3125 8.90227 14.6825 8.90227 14.2925 9.29227C13.9025 9.68227 13.9025 10.3123 14.2925 10.7023L15.6725 12.0823L14.2925 13.4623C13.9025 13.8523 13.9025 14.4823 14.2925 14.8723C14.6825 15.2623 15.3125 15.2623 15.7025 14.8723L17.0825 13.5123L18.4625 14.8923C18.8525 15.2823 19.4825 15.2823 19.8725 14.8923C20.2625 14.5023 20.2625 13.8723 19.8725 13.4823L18.5025 12.0923Z",
    fill: "currentColor"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];