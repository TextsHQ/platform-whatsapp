var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatHistoryIcon = function (e) {
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
  let h = 22;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "chat-history"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 22 20",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.14407 10.0018C3.14407 4.94179 7.31407 0.861789 12.4041 1.00179C17.0941 1.13179 21.0141 5.05179 21.1441 9.74179C21.2841 14.8318 17.1941 19.0018 12.1441 19.0018C10.0641 19.0018 8.14407 18.2918 6.62407 17.1018C6.15407 16.7318 6.12407 16.0318 6.54407 15.6018C6.90407 15.2418 7.46407 15.2118 7.86407 15.5218C9.04407 16.4518 10.5341 17.0018 12.1441 17.0018C16.0441 17.0018 19.1941 13.8118 19.1441 9.90179C19.0941 6.18179 15.9641 3.05179 12.2441 3.00179C8.32407 2.95179 5.14407 6.10179 5.14407 10.0018H6.94407C7.38407 10.0018 7.61407 10.5418 7.29407 10.8518L4.50407 13.6518C4.30407 13.8518 3.99407 13.8518 3.79407 13.6518L1.00407 10.8518C0.684073 10.5418 0.904073 10.0018 1.35407 10.0018H3.14407ZM11.1441 6.75179C11.1441 6.34179 11.4841 6.00179 11.8941 6.00179C12.3141 6.00179 12.6441 6.34179 12.6441 6.74179V10.1418L15.5241 11.8518C15.8741 12.0618 15.9941 12.5218 15.7841 12.8818C15.5741 13.2318 15.1141 13.3518 14.7541 13.1418L11.6341 11.2918C11.3341 11.1118 11.1441 10.7818 11.1441 10.4318V6.75179Z",
    fill: "#8696A0"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];