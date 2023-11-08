var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GifTrendingIcon = function (e) {
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
    name: "gif-trending"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    d: "M2.3888 17.4409C2.20926 17.2558 2.1212 17.0615 2.12461 16.858C2.12804 16.6544 2.21714 16.4652 2.39192 16.2903L8.57283 10.1494C8.67494 10.0248 8.78367 9.94061 8.89902 9.8969C9.01437 9.85317 9.13352 9.8313 9.25647 9.8313C9.37693 9.8313 9.49028 9.85317 9.59652 9.8969C9.70276 9.94061 9.81897 10.0256 9.94517 10.1518L13.4296 13.6362L19.4305 7.67724H17.1515C16.9448 7.67724 16.7604 7.59494 16.5984 7.43034C16.4363 7.26575 16.3552 7.08168 16.3552 6.87813C16.3552 6.67457 16.4363 6.49062 16.5984 6.32626C16.7604 6.16189 16.9448 6.0797 17.1515 6.0797H21.1725C21.4232 6.0797 21.6445 6.1751 21.8365 6.36588C22.0285 6.55665 22.1245 6.77859 22.1245 7.0317V11.0477C22.1245 11.2543 22.0426 11.4395 21.8787 11.6033C21.7149 11.7671 21.5296 11.849 21.3228 11.849C21.1161 11.849 20.9317 11.7671 20.7698 11.6033C20.6079 11.4395 20.527 11.2543 20.527 11.0477V8.82085L14.1223 15.2337C14.0122 15.3423 13.9005 15.4216 13.7872 15.4715C13.6739 15.5213 13.557 15.5463 13.4364 15.5463C13.3158 15.5463 13.1993 15.5213 13.087 15.4715C12.9746 15.4216 12.8633 15.3423 12.7532 15.2337L9.26603 11.7465L3.50287 17.4697C3.33151 17.6473 3.14249 17.7264 2.93579 17.7069C2.72907 17.6875 2.54674 17.5988 2.3888 17.4409Z",
    fill: "currentColor"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];