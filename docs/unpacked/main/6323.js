var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./468926.js");
var o = require("../app/396574.js");
var l = a(require("./39315.js"));
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
function s(e, t) {
  const n = (0, o.classnamesConvertMeToStylexPlease)({
    [l.default.isChecked]: e.checked,
    [l.default.gallery]: e.msgTheme === "gallery",
    [l.default.container]: true
  });
  return i.default.createElement("div", {
    ref: t,
    className: n,
    onClick: e.onClick
  }, i.default.createElement(r.CheckBox, {
    onChange: e.onClick,
    checked: e.checked,
    theme: e.theme,
    ariaLabel: e.ariaLabel
  }));
}
var c = (0, i.forwardRef)(s);
exports.default = c;