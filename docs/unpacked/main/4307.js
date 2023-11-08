var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArchiveFilledIcon = function (e) {
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
    name: "archive-filled"
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
    d: "M7.54688 22C6.96094 22 6.40755 21.8827 5.88672 21.6485C5.36589 21.4075 4.91015 21.0885 4.51953 20.6914C4.1289 20.2878 3.81966 19.8223 3.5918 19.2949C3.36394 18.7676 3.25 18.211 3.25 17.625V8.14258C3.0612 8.07748 2.88867 7.98633 2.73242 7.86914C2.58268 7.75195 2.45247 7.61524 2.3418 7.45899C2.23112 7.30274 2.14649 7.13346 2.08789 6.95117C2.0293 6.76887 2 6.57683 2 6.375V3.875C2 3.6211 2.04883 3.38021 2.14649 3.15234C2.24414 2.92448 2.3776 2.72591 2.54688 2.55664C2.72266 2.38086 2.92448 2.24414 3.15234 2.14649C3.38021 2.04883 3.6211 2 3.875 2H20.125C20.3789 2 20.6198 2.04883 20.8476 2.14649C21.0755 2.24414 21.2741 2.38086 21.4434 2.55664C21.6191 2.72591 21.7559 2.92448 21.8535 3.15234C21.9511 3.38021 22 3.6211 22 3.875V6.375C22 6.57683 21.9707 6.76887 21.9121 6.95117C21.8535 7.13346 21.7689 7.30274 21.6582 7.45899C21.5475 7.61524 21.414 7.75195 21.2578 7.86914C21.1081 7.98633 20.9387 8.07748 20.75 8.14258V17.7031C20.75 18.276 20.6327 18.8229 20.3985 19.3438C20.164 19.8581 19.8483 20.3137 19.4511 20.711C19.0605 21.1015 18.6049 21.414 18.084 21.6485C17.5696 21.8827 17.026 22 16.4531 22H7.54688ZM10 10C9.44772 10 9 10.4477 9 11C9 11.5523 9.44772 12 10 12H14C14.5523 12 15 11.5523 15 11C15 10.4477 14.5523 10 14 10H10Z",
    fill: "currentColor"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];