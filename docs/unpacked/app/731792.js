var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = require("./396574.js");
var a = require("./956113.js");
var o = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = l(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("../vendor/667294.js"));
var s = r(require("./156720.js"));
function l(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (l = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const u = {
  position: "lhggkp7q",
  top: "qq0sjtgm",
  start: "tkdu00h0",
  display: "p357zi0d",
  alignItems: "gndfcl4n",
  justifyContent: "ac2vgrno",
  width: "ln8gz9je",
  height: "ppled2lx",
  backgroundColor: "epdck8xl",
  borderTopStartRadius: "g9p5wyxn",
  borderTopEndRadius: "i0tg5vk9",
  borderBottomEndRadius: "aoogvgrq",
  borderBottomStartRadius: "o2zu3hjb"
};
function c(e, t) {
  const {
    className: n,
    xstyle: r,
    size: l = 50
  } = e;
  return o.default.createElement("div", {
    ref: t,
    className: (0, i.classnamesConvertMeToStylexPlease)((0, s.default)(u, r), n)
  }, o.default.createElement(a.Spinner, {
    size: l,
    stroke: 3,
    color: "solidwhite"
  }));
}
var d = (0, o.forwardRef)(c);
exports.default = d;