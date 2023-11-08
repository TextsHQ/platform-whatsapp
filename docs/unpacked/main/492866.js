var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListMsgIconIcon = function (e) {
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
  let m = 12;
  let h = 15;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "list-msg-icon"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 -4 15 20",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1"
  }, u.default.createElement("g", {
    id: "Page-1",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, u.default.createElement("g", {
    id: "format_list_bulleted-black-18dp",
    transform: "translate(-1.000000, -3.000000)"
  }, u.default.createElement("polygon", {
    id: "Path",
    points: "0 0 18 0 18 18 0 18"
  }), u.default.createElement("path", {
    d: "M3,7.875 C2.3775,7.875 1.875,8.3775 1.875,9 C1.875,9.6225 2.3775,10.125 3,10.125 C3.6225,10.125 4.125,9.6225 4.125,9 C4.125,8.3775 3.6225,7.875 3,7.875 Z M3,3.375 C2.3775,3.375 1.875,3.8775 1.875,4.5 C1.875,5.1225 2.3775,5.625 3,5.625 C3.6225,5.625 4.125,5.1225 4.125,4.5 C4.125,3.8775 3.6225,3.375 3,3.375 Z M3,12.375 C2.3775,12.375 1.875,12.885 1.875,13.5 C1.875,14.115 2.385,14.625 3,14.625 C3.615,14.625 4.125,14.115 4.125,13.5 C4.125,12.885 3.6225,12.375 3,12.375 Z M5.25,14.25 L15.75,14.25 L15.75,12.75 L5.25,12.75 L5.25,14.25 Z M5.25,9.75 L15.75,9.75 L15.75,8.25 L5.25,8.25 L5.25,9.75 Z M5.25,3.75 L5.25,5.25 L15.75,5.25 L15.75,3.75 L5.25,3.75 Z",
    id: "Shape",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];