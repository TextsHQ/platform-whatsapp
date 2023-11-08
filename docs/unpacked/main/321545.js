var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AiSignalIcon = function (e) {
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
  let m = 13;
  let h = 12;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "ai-signal"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 12 13",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("g", {
    fill: "currentColor"
  }, u.default.createElement("path", {
    d: "M6.216 3.376a1.428 1.428 0 1 0 0-2.856 1.428 1.428 0 0 0 0 2.856Zm5.244 1.956a15.06 15.06 0 0 0-1.251-2.185.542.542 0 0 0-.447-.24.542.542 0 0 0-.447.24 14.955 14.955 0 0 0-1.25 2.185.542.542 0 0 0 .017.508c.09.154.248.252.433.267.413.033.832.05 1.247.048.415.001.834-.015 1.247-.048a.542.542 0 0 0 .432-.267.542.542 0 0 0 .018-.508Z"
  }), u.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.293 8.077h.002-.002Zm2.224-3.45a.69.69 0 0 1 .641-.427.69.69 0 0 1 .64.423l.716 1.662a.366.366 0 0 0 .198.195h.002l1.671.714.004.002a.694.694 0 0 1 .415.64.69.69 0 0 1-.415.637l-.004.002-1.673.714a.382.382 0 0 0-.2.202l-.726 1.695a.689.689 0 0 1-.64.418.691.691 0 0 1-.636-.407v-.002l-.78-1.716a.392.392 0 0 0-.196-.193L.92 8.479A.688.688 0 0 1 .5 7.84c0-.119.04-.475.423-.637l1.681-.719a.387.387 0 0 0 .2-.2l.713-1.656Z"
  }))));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];