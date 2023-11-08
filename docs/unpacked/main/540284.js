var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArchiveUnreadFilledIcon = function (e) {
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
    name: "archive-unread-filled"
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
    d: "M20.75 9.68262C20.1971 9.89005 19.6054 10 19 10C17.6833 10 16.4 9.46667 15.4667 8.53333C14.5333 7.6 14 6.31667 14 5C14 3.91914 14.3594 2.86075 15.0045 2H3.875C3.6211 2 3.38021 2.04883 3.15234 2.14649C2.92448 2.24414 2.72266 2.38086 2.54688 2.55664C2.3776 2.72591 2.24414 2.92448 2.14649 3.15234C2.04883 3.38021 2 3.6211 2 3.875V6.375C2 6.57683 2.0293 6.76887 2.08789 6.95117C2.14649 7.13346 2.23112 7.30274 2.3418 7.45899C2.45247 7.61524 2.58268 7.75195 2.73242 7.86914C2.88867 7.98633 3.0612 8.07748 3.25 8.14258V17.625C3.25 18.211 3.36394 18.7676 3.5918 19.2949C3.81966 19.8223 4.1289 20.2878 4.51953 20.6914C4.91015 21.0885 5.36589 21.4075 5.88672 21.6485C6.40755 21.8827 6.96094 22 7.54688 22H16.4531C17.026 22 17.5696 21.8827 18.084 21.6485C18.6049 21.414 19.0605 21.1015 19.4511 20.711C19.8483 20.3137 20.164 19.8581 20.3985 19.3438C20.6327 18.8229 20.75 18.276 20.75 17.7031V9.68262ZM9 11C9 10.4477 9.44772 10 10 10H14C14.5523 10 15 10.4477 15 11C15 11.5523 14.5523 12 14 12H10C9.44772 12 9 11.5523 9 11Z",
    fill: "currentColor"
  }), u.default.createElement("path", {
    d: "M18.99 8.01999C19.79 8.01999 20.55 7.69999 21.11 7.13999C21.67 6.57999 21.99 5.80999 21.99 5.01999C21.99 4.22999 21.67 3.45999 21.11 2.89999C20.55 2.33999 19.78 2.01999 18.99 2.01999C18.2 2.01999 17.43 2.33999 16.87 2.89999C16.31 3.45999 15.99 4.22999 15.99 5.01999C15.99 5.80999 16.31 6.57999 16.87 7.13999C17.43 7.69999 18.2 8.01999 18.99 8.01999Z",
    fill: "#009588"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];