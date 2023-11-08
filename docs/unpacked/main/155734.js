var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatMsgIcon = function (e) {
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
  let m = 29;
  let h = 28;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "chat-msg"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 28 29",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.56494 8.6945C3.56494 7.22174 4.75885 6.02783 6.23161 6.02783H26.2658C27.0701 6.02783 27.5453 6.92903 27.091 7.59269L24.4353 11.4723V21.2501C24.4353 22.7228 23.2414 23.9167 21.7686 23.9167H6.23161C4.75885 23.9167 3.56494 22.7228 3.56494 21.2501V8.6945ZM7.2916 12.4723C7.2916 11.92 7.73932 11.4723 8.2916 11.4723H19.7083C20.2606 11.4723 20.7083 11.92 20.7083 12.4723V12.8056C20.7083 13.3579 20.2606 13.8056 19.7083 13.8056H8.2916C7.73932 13.8056 7.2916 13.3579 7.2916 12.8056V12.4723ZM8.2916 16.139C7.73932 16.139 7.2916 16.5867 7.2916 17.139V17.4723C7.2916 18.0246 7.73932 18.4723 8.2916 18.4723H14.4907C15.043 18.4723 15.4907 18.0246 15.4907 17.4723V17.139C15.4907 16.5867 15.043 16.139 14.4907 16.139H8.2916Z",
    fill: "currentColor"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];