Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var a = require("./662854.js");
var r = require("../app/664149.js");
var o = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = l(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (i && (i.get || i.set)) {
        Object.defineProperty(a, o, i);
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
function l(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (l = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function i(e, t) {
  const {
    chat: n,
    onSelectMessages: l,
    toContextMenuManager: i = false
  } = e;
  const u = (0, a.broadcastMenu)(n, l);
  if (i) {
    return o.default.createElement("div", {
      ref: t
    }, u);
  } else {
    return o.default.createElement(r.Dropdown, {
      ref: t,
      type: r.MenuType.DropdownMenu,
      key: "BroadcastMenuDropdown",
      flipOnRTL: true,
      dirX: r.DirX.LEFT
    }, u);
  }
}
var u = (0, o.forwardRef)(i);
exports.default = u;