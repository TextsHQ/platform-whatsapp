Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var a = require("../app/664149.js");
var r = require("../app/675085.js");
var o = require("./104900.js");
var l = require("./526795.js");
var i = require("./107600.js");
var u = require("../vendor/548360.js");
var s = function (e, t) {
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
function d(e, t) {
  const {
    orderBy: n,
    onSortBySource: c,
    onSortByTime: d
  } = e;
  const f = [];
  if (n !== o.MembershipApprovalRequestsOrder.Source) {
    f.push(s.default.createElement(r.DropdownItem, {
      key: "sort-by-source",
      testid: "sort-by-source",
      action: c
    }, u.fbt._("Sort by request source", null, {
      hk: "2qzxe6"
    })));
  }
  if (n !== o.MembershipApprovalRequestsOrder.Time) {
    f.push(s.default.createElement(r.DropdownItem, {
      key: "sort-by-time",
      testid: "sort-by-time",
      action: d
    }, u.fbt._("Sort by time", null, {
      hk: "1XobU5"
    })));
  }
  return s.default.createElement(l.MenuBarItem, {
    ref: t,
    testid: "menu-bar-menu",
    icon: s.default.createElement(i.MenuIcon, null),
    title: u.fbt._("Menu", null, {
      hk: "1WeEwR"
    })
  }, s.default.createElement(a.Dropdown, {
    type: a.MenuType.DropdownMenu,
    flipOnRTL: true,
    dirX: a.DirX.LEFT
  }, f));
}
var f = (0, s.forwardRef)(d);
exports.default = f;