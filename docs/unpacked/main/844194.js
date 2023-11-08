var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  function t(t) {
    t.stopPropagation();
    t.preventDefault();
    if (e.onCancel) {
      e.onCancel();
    }
  }
  const n = u.Children.count(e.actions) > 0;
  const a = e.onCancel ? u.default.createElement(r.default, {
    testid: "popup-controls-cancel",
    type: n ? "secondary" : "primary",
    onClick: t
  }, i.fbt._("Cancel", null, {
    hk: "H0gNq"
  })) : null;
  const s = {
    escape: e.onCancel ? t : () => {}
  };
  const c = u.default.createElement(u.default.Fragment, null, e.actions, a);
  return u.default.createElement(o.HotKeys, {
    handlers: s
  }, u.default.createElement(l.Modal, {
    actions: c,
    children: e.children,
    cover: e.cover,
    onDragChange: e.onDragChange,
    onDrop: e.onDrop,
    type: e.type,
    title: e.title
  }));
};
var r = a(require("../app/692629.js"));
var o = require("../app/81644.js");
var l = require("../app/118612.js");
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