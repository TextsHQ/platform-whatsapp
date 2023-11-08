var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChangePhoneIcon = function (e) {
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
    name: "change-phone"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 112 112",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M112 56C112 86.9279 86.9279 112 56 112C25.0721 112 0 86.9279 0 56C0 25.0721 25.0721 0 56 0C86.9279 0 112 25.0721 112 56ZM33 21C30.2386 21 28 23.2386 28 26V76C28 78.7614 30.2386 81 33 81H44C44.5523 81 45 80.5523 45 80V74.5C45 73.9477 44.5523 73.5 44 73.5H34.25C32.8693 73.5 31.75 72.3807 31.75 71V31C31.75 29.6193 32.8693 28.5 34.25 28.5H62C62.5523 28.5 63 28.0523 63 27.5V26C63 23.2386 60.7614 21 58 21H33Z",
    fill: "#06CF9C",
    fillOpacity: 0.15
  }), u.default.createElement("path", {
    d: "M28 26C28 23.2386 30.2386 21 33 21H58C60.7614 21 63 23.2386 63 26V27.5C63 28.0523 62.5523 28.5 62 28.5H34.25C32.8693 28.5 31.75 29.6193 31.75 31V71C31.75 72.3807 32.8693 73.5 34.25 73.5H44C44.5523 73.5 45 73.9477 45 74.5V80C45 80.5523 44.5523 81 44 81H33C30.2386 81 28 78.7614 28 76V26Z",
    fill: "#06CF9C",
    fillOpacity: 0.5
  }), u.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M49 37C49 34.2386 51.2386 32 54 32H79C81.7614 32 84 34.2386 84 37V87C84 89.7614 81.7614 92 79 92H54C51.2386 92 49 89.7614 49 87V68H52.75V82C52.75 83.3807 53.8693 84.5 55.25 84.5H77.75C79.1307 84.5 80.25 83.3807 80.25 82V42C80.25 40.6193 79.1307 39.5 77.75 39.5H55.25C53.8693 39.5 52.75 40.6193 52.75 42V56H49V37ZM61.5 87.625C61.5 87.2798 61.7798 87 62.125 87H70.875C71.2202 87 71.5 87.2798 71.5 87.625C71.5 87.9702 71.2202 88.25 70.875 88.25H62.125C61.7798 88.25 61.5 87.9702 61.5 87.625ZM64.9956 63.1401H42.15C41.5175 63.1401 41 62.6091 41 61.96C41 61.3109 41.5175 60.7799 42.15 60.7799H64.9956L59.3951 55.0091C58.9466 54.5489 58.9466 53.8054 59.3951 53.3452C59.8436 52.8849 60.5681 52.8849 61.0166 53.3452L68.5836 61.1339C69.0321 61.5942 69.0321 62.3376 68.5836 62.7979L61.0051 70.5748C60.5566 71.0351 59.8321 71.0351 59.3836 70.5748C58.9351 70.1146 58.9351 69.3593 59.3836 68.8991L64.9956 63.1401Z",
    fill: "#06CF9C"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];