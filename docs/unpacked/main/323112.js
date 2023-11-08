var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../app/786566.js"));
var o = require("../app/667738.js");
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
function u(e, t) {
  let {
    shouldShow: n,
    banner: a,
    onDismissNotice: i
  } = e;
  const u = (0, o.useIsDarkTheme)();
  if (!n) {
    return null;
  }
  if (!(a == null ? undefined : a.text)) {
    return null;
  }
  const {
    iconDescription: s,
    text: c,
    iconSvg: d
  } = a;
  let f;
  if (d) {
    f = u ? d.dark : d.light;
  }
  return l.default.createElement(r.default, {
    ref: t,
    type: "notice",
    key: "noticebbar",
    text: c,
    iconSvg: f,
    iconDescription: s != null ? s : "",
    onDismiss: i
  });
}
var s = (0, l.forwardRef)(u);
exports.default = s;