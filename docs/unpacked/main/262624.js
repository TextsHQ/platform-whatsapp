var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StarFilledIcon = function (e) {
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
    name: "star-filled"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    d: "M6.10175 15.0912L1.2045 10.0933C1.06817 9.95042 1 9.78119 1 9.58563C1 9.41264 1.0574 9.2547 1.17221 9.11179C1.28702 8.96888 1.42694 8.88239 1.59197 8.8523L8.35126 7.82564L11.3865 1.39487C11.4439 1.27453 11.53 1.18051 11.6448 1.11282C11.7596 1.03761 11.878 1 12 1C12.122 1 12.2404 1.03761 12.3552 1.11282C12.47 1.18051 12.5561 1.27453 12.6135 1.39487L15.6487 7.82564L22.408 8.8523C22.5802 8.88239 22.7201 8.96513 22.8278 9.10051C22.9426 9.23589 23 9.39384 23 9.57435C23 9.78496 22.9318 9.95794 22.7954 10.0933L17.8981 15.0912L19.0499 22.1538C19.0571 22.1839 19.0606 22.2252 19.0606 22.2779C19.0606 22.4735 18.9924 22.6427 18.8562 22.7857C18.7198 22.9285 18.5583 23 18.3718 23C18.2499 23 18.1421 22.9737 18.0489 22.921L12 19.5815L5.95108 22.921C5.85779 22.9737 5.75015 23 5.62817 23C5.44161 23 5.28017 22.9285 5.14383 22.7857C5.0075 22.6427 4.93933 22.4735 4.93933 22.2779C4.93933 22.2252 4.94291 22.1839 4.95009 22.1538L6.10175 15.0912Z",
    fill: "currentColor"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];