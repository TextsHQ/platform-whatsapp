var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GifTvIcon = function (e) {
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
    name: "gif-tv"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    d: "M9.40385 21.5C9.14617 21.5 8.93111 21.4138 8.75868 21.2413C8.58623 21.0689 8.5 20.8538 8.5 20.5961V19.5H4.3077C3.80898 19.5 3.38303 19.3234 3.02983 18.9702C2.67661 18.617 2.5 18.191 2.5 17.6923V6.30773C2.5 5.80901 2.67661 5.38305 3.02983 5.02985C3.38303 4.67663 3.80898 4.50003 4.3077 4.50003H19.6923C20.191 4.50003 20.6169 4.67663 20.9701 5.02985C21.3233 5.38305 21.5 5.80901 21.5 6.30773V17.6923C21.5 18.191 21.3233 18.617 20.9701 18.9702C20.6169 19.3234 20.191 19.5 19.6923 19.5H15.5V20.5961C15.5 20.8538 15.4137 21.0689 15.2413 21.2413C15.0688 21.4138 14.8538 21.5 14.5961 21.5H9.40385ZM4.3077 18H19.6923C19.782 18 19.8557 17.9712 19.9134 17.9135C19.9711 17.8558 20 17.782 20 17.6923V6.30773C20 6.21798 19.9711 6.14425 19.9134 6.08655C19.8557 6.02885 19.782 6 19.6923 6H4.3077C4.21795 6 4.14423 6.02885 4.08653 6.08655C4.02883 6.14425 3.99998 6.21798 3.99998 6.30773V17.6923C3.99998 17.782 4.02883 17.8558 4.08653 17.9135C4.14423 17.9712 4.21795 18 4.3077 18Z",
    fill: "currentColor"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];