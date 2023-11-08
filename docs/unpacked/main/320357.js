var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    wallpaperColor: t,
    showDoodle: n
  } = e;
  const {
    theme: a
  } = (0, u.useContext)(l.ThemeContext);
  let c;
  c = o.ServerProps.wallpapersV2 ? n : t === i.DEFAULT_CHAT_WALLPAPER;
  if (c && (0, i.colorExistsInTheme)(t, a)) {
    const e = {
      opacity: (0, i.getDoodleOpacity)(t, a)
    };
    const n = (0, i.getDoodleAssetName)(t, a);
    const o = {
      [n]: true
    };
    return u.default.createElement("div", (0, r.default)({
      className: (0, s.default)(d)
    }, o, {
      style: e
    }));
  }
  return null;
};
var r = a(require("../vendor/967154.js"));
var o = require("../app/937001.js");
var l = require("../app/667738.js");
var i = require("../app/905225.js");
var u = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = c(t);
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
var s = a(require("../app/156720.js"));
function c(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (c = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const d = {
  position: "lhggkp7q",
  top: "qq0sjtgm",
  start: "tkdu00h0",
  width: "ln8gz9je",
  height: "ppled2lx",
  backgroundRepeat: "tbmiozwh",
  opacity: "fq1kqmrp",
  "@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-resolution: 2dppx)": {
    backgroundSize: "shnvsdv4"
  }
};