var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../app/395767.js"));
var o = a(require("../app/625903.js"));
var l = require("./268126.js");
var i = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = u(t);
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
function u(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (u = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const s = {
  closeBtn: {
    position: "lhggkp7q",
    top: "r8dd7jr1",
    end: "ohq8n1fk",
    zIndex: "mb8var44",
    cursor: "ajgl1lbb"
  },
  closeBtnNew: {
    top: "jgz0asyo",
    end: "b4u6kxhc"
  },
  static: {
    position: "gire0wgi"
  },
  fullscreen: {
    top: "a70a3vn1",
    end: "h223g3sc"
  }
};
function c(e, t) {
  const n = e.isFullscreenMode ? 34 : 16;
  return i.default.createElement(o.default, {
    ref: t,
    xstyle: [s.closeBtn, e.isFullscreenMode && s.fullscreen, s.closeBtnNew, e.isStatic && s.static],
    onClick: e.onClick
  }, i.default.createElement(l.VideoXIcon, {
    "aria-label": (0, r.default)("Close"),
    height: n,
    width: n
  }));
}
var d = (0, i.forwardRef)(c);
exports.default = d;