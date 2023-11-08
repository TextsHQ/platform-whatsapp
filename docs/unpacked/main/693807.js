var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.E2EAttachmentIcon = function (e) {
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
    name: "e2e-attachment"
  }, f), u.default.createElement("svg", {
    viewBox: (t = p) !== null && t !== undefined ? t : "0 0 24 24",
    height: m,
    width: h,
    preserveAspectRatio: "xMidYMid meet",
    className: (0, i.default)(n),
    fill: "none"
  }, u.default.createElement("path", {
    d: "M10.0636 6.34105L17.5257 12.6005C18.9998 13.8371 19.4065 16.0166 18.3169 17.602C17.0651 19.4237 14.5629 19.728 12.9125 18.3435L4.195 11.0309C3.27106 10.2559 2.98788 8.88887 3.66532 7.89506C4.44697 6.74836 6.01764 6.55189 7.05443 7.42159L14.4601 13.6338C14.848 13.9592 14.8992 14.5428 14.5738 14.9307C14.2484 15.3186 13.6648 15.3698 13.2768 15.0444L7.10544 9.86756C6.81627 9.62499 6.37531 9.66364 6.13274 9.95281C5.89017 10.242 5.92882 10.6829 6.21799 10.9255L12.2906 16.0195C13.2146 16.7945 14.61 16.8356 15.4709 15.9956C16.4641 15.0264 16.3844 13.4455 15.3476 12.5758L8.06178 6.46422C6.5877 5.2277 4.37064 5.20638 2.99898 6.55508C1.42867 8.09762 1.5584 10.6216 3.20881 12.0061L11.8629 19.2654C13.8871 20.9634 16.9421 21.0028 18.8247 19.1453C20.9827 17.0024 20.8041 13.5482 18.5331 11.6432L10.9511 5.28309C10.6619 5.04052 10.2209 5.07917 9.97836 5.36834C9.73579 5.65752 9.77444 6.09848 10.0636 6.34105Z",
    fill: "#8696A0"
  })));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/220584.js");
var i = a(require("../app/156720.js"));
var u = a(require("../vendor/667294.js"));
const s = ["iconXstyle", "height", "width", "viewBox"];