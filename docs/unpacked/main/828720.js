var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PendingParticipantsIcon = function (e) {
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
    name: "pending-participants"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    d: "M11.4042 19.8325C11.4042 19.8325 10.3333 18.2415 10.3333 16.1913C10.3333 14.141 11.0406 13.1828 11.0406 13.1828C11.0406 13.1828 10.7067 13.1828 10.3333 13.1828C7.21833 13.1828 1 14.6679 1 17.6159V19.3325C1 19.6086 1.22386 19.8325 1.5 19.8325H11.4042ZM10.3333 10.9663C12.9117 10.9663 15 8.98248 15 6.53319C15 4.08391 12.9117 2.1001 10.3333 2.1001C7.755 2.1001 5.66667 4.08391 5.66667 6.53319C5.66667 8.98248 7.755 10.9663 10.3333 10.9663Z",
    fill: "currentColor"
  }), u.default.createElement("path", {
    d: "M18.2998 10.8999C15.2638 10.8999 12.7998 13.3639 12.7998 16.3999C12.7998 19.4359 15.2638 21.8999 18.2998 21.8999C21.3358 21.8999 23.7998 19.4359 23.7998 16.3999C23.7998 13.3639 21.3358 10.8999 18.2998 10.8999ZM20.1148 18.9849L17.7498 16.6199V13.0999H18.8498V16.1689L20.8848 18.2039L20.1148 18.9849Z",
    fill: "currentColor"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];