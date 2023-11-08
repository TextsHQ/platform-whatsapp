var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/287461.js");
var o = require("../app/396574.js");
var l = require("./776078.js");
var i = a(require("./409468.js"));
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
var c = (0, u.forwardRef)(function (e, t) {
  const n = e.theme ? i.default[e.theme] : null;
  const a = (0, o.classnamesConvertMeToStylexPlease)(i.default.msg, i.default.msgSystem, i.default.msgBottomMargin, n, {
    [l.LIST_FOCUSABLE_ITEM_CLASS_NAME]: e.isFocusable,
    [i.default.animateMsg]: (0, r.getABPropConfigValue)("web_animate_messages")
  });
  const s = (0, o.classnamesConvertMeToStylexPlease)(i.default.message, i.default.messageSystem, {
    [i.default.messageHidden]: e.hidden,
    [i.default.centerBubble]: e.theme === "center"
  });
  return u.default.createElement("div", {
    className: a,
    tabIndex: -1,
    ref: t
  }, u.default.createElement("div", {
    className: s
  }, e.children));
});
exports.default = c;