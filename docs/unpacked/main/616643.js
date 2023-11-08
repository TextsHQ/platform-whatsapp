Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var a = require("./526795.js");
var r = require("./27872.js");
var o = require("../vendor/548360.js");
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
    onClick: n
  } = e;
  return l.default.createElement(a.MenuBarItem, {
    ref: t,
    testid: "menu-bar-select-all",
    icon: l.default.createElement(r.SelectAllIcon, null),
    title: o.fbt._("Select All Toggle", null, {
      hk: "1SdEZP"
    }),
    onClick: n
  });
}
var s = (0, l.forwardRef)(u);
exports.default = s;