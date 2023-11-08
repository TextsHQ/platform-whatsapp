var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelAddIcon = function (e) {
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
    name: "panel-add"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    d: "M20.5847 12C20.5847 7.2588 16.7412 3.41533 12 3.41533C7.2588 3.41533 3.41533 7.2588 3.41533 12C3.41533 16.7412 7.2588 20.5847 12     20.5847C16.7412 20.5847 20.5847 16.7412 20.5847 12ZM22 12C22 17.5229 17.5229 22 12 22C6.47713 22 2 17.5229 2 12C2 6.47713 6.47713 2 12     2C17.5229 2 22 6.47713 22 12Z",
    fill: "currentColor"
  }), u.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 7C12.3866 7 12.7 7.31025 12.7 7.70318L12.6988 11.3H16.2968C16.6463 11.3 16.9363 11.563     16.9908 11.8892L17 12C17 12.3866 16.6898 12.7 16.2968 12.7L12.6988 12.6988L12.7 16.2968C12.7 16.6463 12.437 16.9363 12.1108 16.9908L12     17C11.6134 17 11.3 16.6898 11.3 16.2968V12.6988L7.70318 12.7C7.35366 12.7 7.0637 12.437 7.0092 12.1108L7 12C7 11.6134 7.31025 11.3 7.70318     11.3H11.3V7.70318C11.3 7.35366 11.563 7.0637 11.8892 7.0092L12 7Z",
    fill: "currentColor"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];