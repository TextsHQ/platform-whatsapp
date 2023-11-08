var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatsUnreadOutlineIcon = function (e) {
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
    name: "chats-unread-outline"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("line", {
    x1: 10,
    y1: 14,
    x2: 15,
    y2: 14,
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round"
  }), u.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21 9.58105C21.5676 9.33237 22.0884 8.97831 22.5333 8.53333C22.7023 8.36441 22.8581 8.18403 23 7.99405V17.8333C23 19.3061 21.8061 20.5 20.3333 20.5H6.6667C5.19392 20.5 4 19.3061 4 17.8333V9.00007L3.99995 8.99999L1.75425 5.54498L0.750038 4H2.5927H14.1028C14.035 4.3276 14 4.6627 14 5C14 5.3373 14.035 5.6724 14.1028 6H4.43536L5.67678 7.90992L5.67685 7.91003L5.83838 8.15847L6 8.40705V8.70356V9V17.8333C6 18.2015 6.29848 18.5 6.6667 18.5H20.3333C20.7015 18.5 21 18.2015 21 17.8333V9.58105Z",
    fill: "currentColor"
  }), u.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.9947 9.89614C17.9982 9.93028 18 9.96493 18 10C18 10.5523 17.5523 11 17 11H10C9.44771 11 9 10.5523 9 10C9 9.44772 9.44771 9 10 9H16.006C16.5953 9.44027 17.2769 9.74685 17.9947 9.89614Z",
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