var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/967154.js"));
var o = a(require("../app/806711.js"));
var l = require("../app/174834.js");
var i = require("./596672.js");
var u = require("./269568.js");
var s = require("./30554.js");
var c = require("./997237.js");
var d = require("./526795.js");
var f = require("../main-chunk/931109.js");
var p = require("../app/454905.js");
var m = require("../vendor/548360.js");
var h = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = E(t);
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
a(require("../app/156720.js"));
var g = a(require("../app/524578.js"));
function E(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (E = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const v = {
  communityTabItem: {
    "@media screen and (max-width: 960px)": {
      display: "i8zz5kbb"
    }
  }
};
function _(e, t) {
  let {
    onClick: n,
    vertical: a,
    isActiveNavBarItem: E,
    iconXstyle: _
  } = e;
  const y = (0, g.default)(o.default, "add change remove community_tab_view", () => o.default.shouldShowTabBadge());
  const C = {
    height: 24,
    width: 24,
    iconXstyle: _
  };
  let b = y ? h.default.createElement(s.CommunityTabUnreadIcon, (0, r.default)({
    directional: true
  }, C)) : h.default.createElement(u.CommunityTabIcon, C);
  if ((0, p.topMenuRedesignEnabled)() && !Boolean(E)) {
    b = y ? h.default.createElement(c.CommunityUnreadOutlineIcon, C) : h.default.createElement(i.CommunityOutlineIcon, C);
  }
  if ((0, l.communitiesEnabled)()) {
    return h.default.createElement(d.MenuBarItem, {
      ref: t,
      xstyle: (0, l.communitiesEnabledSmb)() && !(0, p.topMenuRedesignEnabled)() && v.communityTabItem,
      testid: "menu-bar-community-tab",
      title: m.fbt._("Communities", null, {
        hk: "35B0I4"
      }),
      tabOrder: f.TAB_ORDER.CHATLIST_HEADER,
      icon: b,
      onClick: n,
      theme: "force-size",
      vertical: a
    });
  } else {
    return null;
  }
}
var y = (0, h.forwardRef)(_);
exports.default = y;