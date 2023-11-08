var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("./320357.js"));
var o = require("../app/905225.js");
var l = function (e, t) {
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
var i = a(require("../app/156720.js"));
var u = require("../app/655241.js");
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
  maxHeight: "gixhl6f9",
  overflowX: "gfz4du6o",
  overflowY: "ag5g9lrv"
};
const d = {
  position: "g0rxnol2",
  paddingTop: "nlnf8xo7",
  paddingEnd: "h1a80dm5",
  paddingBottom: "r219jyu0",
  paddingStart: "hxjsrjta",
  backgroundColor: "gmjkez2w",
  transitionProperty: "ariinwu3",
  transitionDuration: "p4t1lx4y",
  transitionTimingFunction: "pu4k07i0"
};
function f(e, t) {
  const n = (0, l.useRef)(null);
  const a = (0, u.useModelValues)(e.chatPreference, ["wallpaperColor", "showDoodle"]);
  (0, l.useImperativeHandle)(t, () => ({
    getContainer: () => n.current
  }));
  const {
    wallpaperColor: s,
    showDoodle: f
  } = a;
  let p = {};
  if (s !== o.DEFAULT_CHAT_WALLPAPER) {
    p = {
      backgroundColor: s
    };
  }
  return l.default.createElement("div", {
    className: (0, i.default)(c, e.containerXstyle),
    ref: n
  }, l.default.createElement("div", {
    className: (0, i.default)(d, e.bodyXstyle),
    style: p
  }, l.default.createElement(r.default, {
    wallpaperColor: s,
    showDoodle: f
  }), e.children));
}
var p = (0, l.forwardRef)(f);
exports.default = p;