var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./526795.js");
var o = a(require("../app/358533.js"));
var l = require("./821679.js");
var i = require("./42816.js");
var u = require("./498343.js");
var s = require("./936433.js");
var c = require("../main-chunk/931109.js");
var d = require("../app/454905.js");
var f = require("./803214.js");
var p = require("../vendor/548360.js");
var m = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = g(t);
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
var h = a(require("../app/524578.js"));
function g(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (g = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function E(e, t) {
  let {
    onClick: n,
    vertical: a,
    isActiveNavBarItem: g,
    iconXstyle: E
  } = e;
  const v = (0, h.default)(o.default, "add change remove newsletter_tab_close", () => o.default.hasAnyUnreadSinceGivenTimestamp((0, f.getNewsletterTabLastSeenTimestamp)()));
  const _ = {
    directional: true,
    height: 24,
    width: 24,
    iconXstyle: E
  };
  let y = v ? m.default.createElement(u.NewsletterTabUnreadIcon, _) : m.default.createElement(i.NewsletterTabIcon, _);
  if ((0, d.topMenuRedesignEnabled)() && !Boolean(g)) {
    y = v ? m.default.createElement(s.NewsletterUnreadOutlineIcon, _) : m.default.createElement(l.NewsletterOutlineIcon, _);
  }
  return m.default.createElement(r.MenuBarItem, {
    ref: t,
    testid: "menu-bar-newsletter-tab",
    title: p.fbt._("Channels", null, {
      hk: "AXu5U"
    }),
    tabOrder: c.TAB_ORDER.CHATLIST_HEADER,
    icon: y,
    onClick: n,
    theme: "force-size",
    vertical: a
  });
}
var v = (0, m.forwardRef)(E);
exports.default = v;