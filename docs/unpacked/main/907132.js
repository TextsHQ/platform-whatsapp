var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HighlyForwardedV2Icon = function (e) {
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
  let m = 16;
  let h = 20;
  if (!(a == null && c == null)) {
    m = a;
    h = c;
  }
  return u.default.createElement(l.BaseSvgSpan, (0, r.default)({
    name: "highly-forwarded-v2"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 20 16",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    version: "1.1"
  }, u.default.createElement("path", {
    d: "M13.6059557,5.26308901 C13.6220086,5.26163419 13.6302968,5.26102868 13.6302968,5.26102868 L13.6666317,3.82396292 C13.6881611,2.97246613 14.1900805,2.77489995 14.7806307,3.3754967 L18.4132486,7.06991365 C18.7126057,7.37436354 18.7160739,7.87287893 18.4230266,8.18124118 L14.7679628,12.0273223 C14.1812438,12.6447038 13.7056141,12.4510723 13.7056141,11.6045324 L13.7056141,9.93754567 L14.8701549,8.71214475 C15.4496567,8.10235763 15.441656,7.13001879 14.8512575,6.52957627 L13.6059557,5.26308901 L13.6059557,5.26308901 Z",
    fill: "currentColor"
  }), u.default.createElement("path", {
    d: "M9.55511091,3.82396292 C9.57664026,2.97246613 10.0785597,2.77489995 10.6691099,3.3754967 L14.3017278,7.06991365 C14.6010849,7.37436354 14.6045531,7.87287893 14.3115058,8.18124118 L10.656442,12.0273223 C10.069723,12.6447038 9.59409325,12.4510723 9.59409325,11.6045324 L9.59409325,9.87219486 C9.59409325,9.87219486 5.03474338,9.49878283 2.43099409,12.3846575 C1.83824676,12.8974744 1.66218866,12.9568393 1.47026458,12.8572726 C1.32851376,12.7423664 1.28325362,12.3846575 1.73218749,11.260453 C3.56459895,5.69602505 9.51877595,5.26102868 9.51877595,5.26102868 L9.55511091,3.82396292 Z",
    fill: "currentColor"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];