var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDFNAnimation = function (e) {
  let {
    icon: t
  } = e;
  const n = (0, l.useRef)(null);
  const a = (0, o.usePDFNThemedIcon)(t);
  if (a == null) {
    return null;
  }
  return l.default.createElement(r.LottieAnimation, {
    ref: n,
    autoplay: true,
    path: a,
    xstyle: u.lottieComponent
  });
};
var r = require("./617267.js");
var o = require("./516555.js");
var l = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = i(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../vendor/667294.js"));
a(require("../app/156720.js"));
function i(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (i = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const u = {
  lottieComponent: {
    display: "p357zi0d",
    justifyContent: "ac2vgrno",
    height: "j74n1y92"
  }
};