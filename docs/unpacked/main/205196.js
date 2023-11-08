var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PiPButton = exports.PIP_BUTTON_THEME = undefined;
var r = require("./294536.js");
var o = function (e, t) {
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
var l = a(require("../app/156720.js"));
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
  PLAYER: "PLAYER",
  PREVIEW: "PREVIEW"
};
exports.PIP_BUTTON_THEME = u;
const s = {
  pipBtn: {
    position: "lhggkp7q",
    zIndex: "mb8var44",
    cursor: "ajgl1lbb"
  },
  player: {
    top: "r8dd7jr1",
    end: "k6hyhuy2"
  },
  preview: {
    top: "jgz0asyo",
    start: "ji0r0qsd"
  }
};
const c = (0, o.forwardRef)((e, t) => o.default.createElement("button", {
  ref: t,
  className: (0, l.default)(s.pipBtn, e.theme === u.PLAYER && s.player, e.theme === u.PREVIEW && s.preview),
  onClick: e.onClick
}, o.default.createElement(r.VideoPipIcon, null)));
exports.PiPButton = c;
c.displayName = "PiPButton";