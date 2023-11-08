var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BotLightBulbIcon = function (e) {
  var t;
  const {
    iconXstyle: n,
    height: r,
    width: c,
    viewBox: d
  } = e;
  const p = (0, a.default)(e, u);
  let f;
  if (d) {
    const {
      x: e = 0,
      y: t = 0,
      width: n = 0,
      height: r = 0
    } = d;
    f = [e, t, n, r].join(" ");
  }
  let _ = 24;
  let g = 24;
  if (!(r == null && c == null)) {
    _ = r;
    g = c;
  }
  return l.default.createElement(o.BaseSvgSpan, (0, i.default)({
    name: "bot-light-bulb"
  }, p), l.default.createElement("svg", {
    viewBox: (t = f) !== null && t !== undefined ? t : "0 0 24 24",
    height: _,
    width: g,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, s.default)(n),
    fill: "none"
  }, l.default.createElement("path", {
    d: "M12 22C12.55 22 13.0208 21.8042 13.4125 21.4125C13.8042 21.0208 14 20.55 14 20H10C10 20.55 10.1958 21.0208 10.5875 21.4125C10.9792 21.8042 11.45 22 12 22ZM15 19C15.2833 19 15.5208 18.9042 15.7125 18.7125C15.9042 18.5208 16 18.2833 16 18C16 17.7167 15.9042 17.4792 15.7125 17.2875C15.5208 17.0958 15.2833 17 15 17H9C8.71667 17 8.47917 17.0958 8.2875 17.2875C8.09583 17.4792 8 17.7167 8 18C8 18.2833 8.09583 18.5208 8.2875 18.7125C8.47917 18.9042 8.71667 19 9 19H15ZM15.75 16C16.9 15.3167 17.8125 14.4 18.4875 13.25C19.1625 12.1 19.5 10.85 19.5 9.5C19.5 7.41667 18.7708 5.64583 17.3125 4.1875C15.8542 2.72917 14.0833 2 12 2C9.91667 2 8.14583 2.72917 6.6875 4.1875C5.22917 5.64583 4.5 7.41667 4.5 9.5C4.5 10.85 4.8375 12.1 5.5125 13.25C6.1875 14.4 7.1 15.3167 8.25 16H15.75ZM15.15 14H8.85C8.1 13.4667 7.52083 12.8083 7.1125 12.025C6.70417 11.2417 6.5 10.4 6.5 9.5C6.5 7.96667 7.03333 6.66667 8.1 5.6C9.16667 4.53333 10.4667 4 12 4C13.5333 4 14.8333 4.53333 15.9 5.6C16.9667 6.66667 17.5 7.96667 17.5 9.5C17.5 10.4 17.2958 11.2417 16.8875 12.025C16.4792 12.8083 15.9 13.4667 15.15 14Z",
    fill: "currentColor"
  })));
};
var i = r(require("../vendor/967154.js"));
var a = r(require("../vendor/506479.js"));
var o = require("./220584.js");
var s = r(require("./156720.js"));
var l = r(require("../vendor/667294.js"));
const u = ["iconXstyle", "height", "width", "viewBox"];