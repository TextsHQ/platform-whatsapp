var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    contact: t,
    onReport: n,
    onDelete: a,
    onOverflowMenuShown: h,
    onOverflowMenuDismissed: g
  } = e;
  const E = [];
  const v = p.default.createElement(i.DropdownItem, {
    key: "status-player-header-overflow-menu-report",
    action: n,
    testid: "status-player-header-overflow-menu-report"
  }, f.fbt._("Report", null, {
    hk: "3DN5uz"
  }));
  if (!((0, o.getIsMe)(t) || (0, o.getIsPSA)(t) || !(0, r.getABPropConfigValue)("enable_status_reporting"))) {
    E.push(v);
  }
  if ((0, c.isStatusPostingEnabled)() && (0, o.getIsMe)(t)) {
    E.push(p.default.createElement(i.DropdownItem, {
      key: "status-player-header-overflow-menu-revoke",
      action: a,
      testid: "status-player-header-overflow-menu-revoke"
    }, f.fbt._("Delete", null, {
      hk: "4mTdVn"
    })));
  }
  if (E.length === 0) {
    return null;
  }
  return p.default.createElement("div", null, p.default.createElement(d.default, {
    transitionName: "dropdown"
  }, p.default.createElement(u.MenuBarItem, {
    testid: "status-player-header-overflow-menu-icon",
    icon: p.default.createElement(s.MenuIcon, null),
    onTransitionStart: h,
    onTransitionEnd: g,
    buttonStyle: m.menuButtonStyle,
    title: f.fbt._("Menu", null, {
      hk: "1e5h3a"
    })
  }, p.default.createElement(l.Dropdown, {
    type: l.MenuType.DropdownMenu,
    flipOnRTL: true,
    key: "StatusOverflowMenu",
    dirX: l.DirX.LEFT,
    dirY: l.DirY.BOTTOM,
    testid: "status-player-header-overflow-menu"
  }, E))));
};
var r = require("../app/287461.js");
var o = require("../app/660666.js");
var l = require("../app/664149.js");
var i = require("../app/675085.js");
var u = require("./526795.js");
var s = require("./107600.js");
var c = require("../app/115927.js");
var d = a(require("../app/844453.js"));
var f = require("../vendor/548360.js");
var p = a(require("../vendor/667294.js"));
a(require("../app/156720.js"));
const m = {
  menuButtonStyle: {
    paddingTop: "p0tugu6q",
    paddingEnd: "gre9kwvr",
    paddingBottom: "r4cqfcp6",
    paddingStart: "a4wbe7um",
    color: "lxozqee9"
  }
};