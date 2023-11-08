var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SyncInProgressIcon = function (e) {
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
  let h = 16;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "sync-in-progress"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 16 21",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 0.71003V2.50003C12.42 2.50003 16 6.08003 16 10.5C16 11.54 15.8 12.54 15.43 13.45C15.16 14.12 14.3 14.3 13.79 13.79C13.52 13.52 13.41 13.11 13.56 12.75C13.85 12.06 14 11.29 14 10.5C14 7.19003 11.31 4.50003 8 4.50003V6.29003C8 6.74003 7.46 6.96003 7.14 6.65003L4.35 3.86003C4.15 3.66003 4.15 3.35003 4.35 3.15003L7.15 0.360031C7.46 0.0400305 8 0.260031 8 0.71003ZM2 10.5C2 13.81 4.69 16.5 8 16.5V14.71C8 14.26 8.54 14.04 8.85 14.35L11.64 17.14C11.84 17.34 11.84 17.65 11.64 17.85L8.85 20.64C8.54 20.96 8 20.74 8 20.29V18.5C3.58 18.5 0 14.92 0 10.5C0 9.46003 0.2 8.46003 0.57 7.55003C0.84 6.88003 1.7 6.70003 2.21 7.21003C2.48 7.48003 2.59 7.89003 2.44 8.25003C2.15 8.94003 2 9.71003 2 10.5Z",
    fill: "#8696A0"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];