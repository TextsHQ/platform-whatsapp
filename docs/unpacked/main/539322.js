var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/305521.js");
var o = a(require("./882061.js"));
var l = a(require("../app/844453.js"));
var i = a(require("./929091.js"));
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
function c(e, t) {
  let n;
  const [a, s] = (0, u.useState)(undefined);
  const [c, d] = (0, u.useState)(true);
  const f = e => {
    s(e);
  };
  const p = e => {
    d(e);
  };
  (0, u.useImperativeHandle)(t, () => ({
    updateDateMarkerText: f,
    setVisibility: p
  }));
  if (a && c) {
    n = u.default.createElement("div", {
      className: o.default.sticky
    }, u.default.createElement(i.default, {
      theme: "sticky"
    }, u.default.createElement(r.EmojiText, {
      direction: "auto",
      text: a
    })));
  }
  return u.default.createElement(l.default, {
    transitionName: "slide-down-date"
  }, n);
}
var d = (0, u.forwardRef)(c);
exports.default = d;