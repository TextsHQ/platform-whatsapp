var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlertSyncPausedIcon = function (e) {
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
  let m = 21;
  let h = 20;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "alert-sync-paused"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 20 21",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 0.5C4.48 0.5 0 4.98 0 10.5C0 16.02 4.48 20.5 10 20.5C15.52 20.5 20 16.02 20 10.5C20 4.98 15.52 0.5 10 0.5ZM10 11.5C9.45 11.5 9 11.05 9 10.5V6.5C9 5.95 9.45 5.5 10 5.5C10.55 5.5 11 5.95 11 6.5V10.5C11 11.05 10.55 11.5 10 11.5ZM9 13.5V15.5H11V13.5H9Z",
    fill: "#FFD279"
  }), u.default.createElement("path", {
    d: "M9 13.5V15.5H11V13.5H9Z",
    fill: "#667781"
  }), u.default.createElement("path", {
    d: "M10 11.5C9.45 11.5 9 11.05 9 10.5V6.5C9 5.95 9.45 5.5 10 5.5C10.55 5.5 11 5.95 11 6.5V10.5C11 11.05 10.55 11.5 10 11.5Z",
    fill: "#54656F"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];