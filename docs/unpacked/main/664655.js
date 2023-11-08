var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BizBotMessageCircleIcon = function (e) {
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
  let m = 112;
  let h = 112;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "biz-bot-message-circle"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 112 112",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("g", {
    clipPath: "url(#a)",
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "#06CF9C"
  }, u.default.createElement("path", {
    d: "M112 56c0 30.928-25.072 56-56 56S0 86.928 0 56 25.072 0 56 0s56 25.072 56 56Zm-70.044-6.387c0-.784.634-1.42 1.416-1.42h25.475c.782 0 1.415.636 1.415 1.42v2.839c0 .784-.633 1.419-1.415 1.419H43.372a1.417 1.417 0 0 1-1.416-1.42v-2.838Zm4.246 9.935c0-.784.634-1.419 1.416-1.419h21.229c.782 0 1.415.636 1.415 1.42v2.838c0 .784-.633 1.42-1.415 1.42h-21.23a1.417 1.417 0 0 1-1.415-1.42v-2.839Z",
    fillOpacity: 0.15
  }), u.default.createElement("path", {
    d: "M83 40.558C83 36.953 80.047 34 76.433 34H19.312c-1.274 0-1.694.815-.931 1.821l11.152 15.502v20.119C29.533 75.05 32.486 78 36.1 78h40.333C80.047 78 83 75.05 83 71.442V40.558Zm-39.628 7.636c-.782 0-1.416.635-1.416 1.419v2.839c0 .784.634 1.419 1.416 1.419h25.475c.782 0 1.415-.636 1.415-1.42v-2.838c0-.784-.633-1.42-1.415-1.42H43.372Zm4.246 9.935c-.782 0-1.416.636-1.416 1.42v2.838c0 .784.634 1.42 1.416 1.42h21.229c.782 0 1.415-.636 1.415-1.42v-2.839c0-.784-.633-1.419-1.415-1.419h-21.23Z"
  })), u.default.createElement("defs", null, u.default.createElement("clipPath", {
    id: "a"
  }, u.default.createElement("path", {
    fill: "#fff",
    d: "M0 0h112v112H0z"
  })))));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];