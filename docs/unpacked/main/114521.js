var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IcHdLabelSmallIcon = function (e) {
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
  let m = 20;
  let h = 20;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "ic-hd-label-small"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 20 20",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("g", {
    opacity: 0.9
  }, u.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.19997 3.6001C3.43267 3.6001 2 5.03277 2 6.80007V13.2C2 14.9673 3.43267 16.4 5.19997 16.4H14.7999C16.5672 16.4 17.9998 14.9673 17.9998 13.2V6.80007C17.9998 5.03277 16.5672 3.6001 14.7999 3.6001H5.19997ZM9.70171 13.2H8.40983V10.4616H6.49626V13.2H5.19997V6.80007H6.49626V9.38905H8.40983V6.80007H9.70171V13.2ZM11.0288 13.2V6.80007H12.7263C13.4759 6.80007 14.0726 7.03743 14.5164 7.51215C14.9632 7.98687 15.191 8.63741 15.1999 9.46377V10.5011C15.1999 11.3421 14.9765 12.0029 14.5297 12.4835C14.0858 12.9612 13.4729 13.2 12.6911 13.2H11.0288ZM12.3999 7.87698V12.1275H12.7131C13.1452 12.1275 13.4494 12.0147 13.6258 11.789C13.8022 11.5605 13.8948 11.1678 13.9036 10.611V9.49894C13.9036 8.90114 13.8198 8.48503 13.6523 8.2506C13.4847 8.01324 13.1996 7.8887 12.7969 7.87698H12.3999Z",
    fill: "currentColor"
  }))));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];