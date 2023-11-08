var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../app/625903.js"));
var o = require("./130645.js");
var l = require("./656574.js");
var i = require("../vendor/548360.js");
var u = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = s(t);
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
function s(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (s = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const c = {
  button: {
    position: "lhggkp7q",
    top: "r8dd7jr1",
    start: "sxdjimme",
    zIndex: "mb8var44",
    cursor: "ajgl1lbb"
  },
  static: {
    position: "gire0wgi"
  },
  fullscreen: {
    top: "ba95y10t",
    start: "guo0zu0m"
  }
};
function d(e, t) {
  return u.default.createElement(r.default, {
    ref: t,
    xstyle: [c.button, e.isFullscreenMode && c.fullscreen, e.isStatic && c.static],
    onClick: e.onClick
  }, e.isFullscreenMode ? u.default.createElement(o.VideoExitFullscreenIcon, {
    "aria-label": i.fbt._("Exit full screen", null, {
      hk: "45Doy3"
    })
  }) : u.default.createElement(l.VideoFullscreenIcon, {
    "aria-label": i.fbt._("Full screen", null, {
      hk: "38YTtz"
    })
  }));
}
var f = (0, u.forwardRef)(d);
exports.default = f;