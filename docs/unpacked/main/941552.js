var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkPlaceholderDarkIcon = function (e) {
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
  let m = 19;
  let h = 19;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "link-placeholder-dark"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 19 19",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    d: "M3.47103 15.7564C2.18127 14.4666 2.18127 12.3698 3.47103 11.08L6.48802 8.06306L5.05495 6.62999L2.03796 9.64698C-0.0437627 11.7287 -0.0437627 15.1077 2.03796 17.1894C4.11968 19.2712 7.49871 19.2712 9.58043 17.1894L12.5974 14.1725L11.1644 12.7394L8.14736 15.7564C6.8576 17.0461 4.76079 17.0461 3.47103 15.7564ZM7.31769 13.4182L13.3517 7.38424L11.8432 5.87574L5.8092 11.9097L7.31769 13.4182ZM9.58043 2.10451L6.56344 5.12149L7.99651 6.55456L11.0135 3.53757C12.3033 2.24781 14.4001 2.24781 15.6898 3.53757C16.9796 4.82734 16.9796 6.92414 15.6898 8.21391L12.6728 11.2309L14.1059 12.664L17.1229 9.64698C19.2046 7.56526 19.2046 4.18623 17.1229 2.10451C15.0412 0.0227831 11.6622 0.0227834 9.58043 2.10451Z",
    fill: "currentColor"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];