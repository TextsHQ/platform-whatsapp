var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PsaVerifiedBlueIcon = function (e) {
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
  let _ = 20;
  let g = 20;
  if (!(r == null && c == null)) {
    _ = r;
    g = c;
  }
  return l.default.createElement(o.BaseSvgSpan, (0, i.default)({
    name: "psa-verified-blue"
  }, p), l.default.createElement("svg", {
    viewBox: (t = f) !== null && t !== undefined ? t : "0 0 20 20",
    height: _,
    width: g,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, s.default)(n),
    fill: "none"
  }, l.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.595 8.23978L17.7696 9.43025L17.7615 9.42221C18.0795 9.74022 18.0795 10.2538 17.7614 10.5718L16.5868 11.7623L17.011 13.3849C17.117 13.817 16.8641 14.2655 16.4318 14.3797L14.8167 14.82L14.3762 16.4345C14.2539 16.8666 13.8134 17.1275 13.3811 17.0134L11.7578 16.5894L10.5669 17.7635C10.4119 17.9185 10.1998 18 9.99592 18C9.792 18 9.57991 17.9185 9.42493 17.7635L8.234 16.5894L6.61076 17.0134C6.17844 17.1275 5.7298 16.8666 5.6156 16.4345L5.17512 14.82L3.56003 14.3797C3.13587 14.2574 2.87484 13.817 2.98904 13.3849L3.4132 11.7623L2.23859 10.5718C1.92047 10.2538 1.92047 9.74009 2.23859 9.42209L3.4132 8.23162L2.98904 6.60899C2.87484 6.17684 3.12771 5.72837 3.56003 5.61422L5.17512 5.17391L5.6156 3.55943C5.73796 3.13543 6.17844 2.87451 6.61076 2.98866L8.234 3.41266L9.42493 2.2385C9.74305 1.9205 10.2569 1.9205 10.5751 2.2385L11.766 3.41266L13.3892 2.98866C13.8216 2.88266 14.2702 3.13543 14.3844 3.56759L14.8249 5.18206L16.44 5.62237C16.8723 5.74468 17.1333 6.18499 17.0191 6.61715L16.595 8.23978ZM9.37506 12.7678C9.21482 12.9279 9.01452 13 8.80621 13C8.5979 13 8.3976 12.9199 8.23736 12.7678L6.23435 10.7658C5.92188 10.4535 5.92188 9.94895 6.23435 9.63664C6.54682 9.32432 7.05158 9.32432 7.36405 9.63664L8.7982 11.0701L12.636 7.23423C12.9484 6.92192 13.4532 6.92192 13.7656 7.23423C14.0781 7.54655 14.0781 8.05105 13.7656 8.36336L11.5784 10.5656L9.37506 12.7678Z",
    fill: "#007BFC",
    style: {
      fill: "#007BFC",
      fillOpacity: 1
    }
  })));
};
var i = r(require("../vendor/967154.js"));
var a = r(require("../vendor/506479.js"));
var o = require("./220584.js");
var s = r(require("./156720.js"));
var l = r(require("../vendor/667294.js"));
const u = ["iconXstyle", "height", "width", "viewBox"];