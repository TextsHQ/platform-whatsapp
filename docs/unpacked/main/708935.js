var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewChatIcon = function (e) {
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
    name: "new-chat"
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
    d: "M5.16667 3.75C3.69391 3.75 2.5 4.94391 2.5 6.41667V17.5833C2.5 19.0561 3.69391 20.25 5.16667 20.25H18.8333C20.3061 20.25 21.5 19.0561 21.5 17.5833V8.75L23.7458 5.29499C24.1782 4.62974 23.7008 3.75 22.9073 3.75H5.16667ZM14.9672 12.9911H12.9914V14.9671C12.9914 15.3999 12.7366 15.8175 12.3238 15.9488C11.6391 16.1661 11.009 15.6613 11.009 15.009V12.9911H9.03279C8.59949 12.9911 8.1819 12.7358 8.05099 12.3226C7.83412 11.6381 8.33942 11.0089 8.99134 11.0089H11.009V9.03332C11.009 8.60007 11.2639 8.18252 11.6767 8.05119C12.3609 7.83391 12.9914 8.33872 12.9914 8.991V11.0089H15.0091C15.6606 11.0089 16.1659 11.6381 15.949 12.3226C15.8185 12.7358 15.4005 12.9911 14.9672 12.9911Z",
    fill: "currentColor"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];