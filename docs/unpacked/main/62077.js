Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var a = require("../app/900316.js");
var r = require("../app/299950.js");
var o = require("./526795.js");
var l = require("../app/114850.js");
var i = require("../app/115927.js");
var u = require("./791870.js");
var s = require("./122049.js");
var c = require("./37410.js");
var d = require("./500017.js");
var f = require("./322427.js");
var p = require("./897243.js");
var m = require("../main-chunk/931109.js");
var h = require("../app/454905.js");
var g = require("../vendor/548360.js");
var E = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = _(t);
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
var v = require("./547660.js");
function _(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (_ = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function y(e, t) {
  const {
    hasUnread: n,
    clearUnreadActivity: _
  } = (0, v.useWAWebStatusActivityIndicator)();
  let y = n ? E.default.createElement(p.StatusV3UnreadIcon, {
    directional: true
  }) : E.default.createElement(f.StatusV3Icon, null);
  if ((0, h.topMenuRedesignEnabled)()) {
    y = n ? E.default.createElement(c.StatusUnreadOutlineIcon, {
      directional: true
    }) : E.default.createElement(s.StatusOutlineIcon, null);
  }
  return E.default.createElement(o.MenuBarItem, {
    ref: t,
    vertical: e.vertical,
    testid: "menu-bar-status",
    tabOrder: m.TAB_ORDER.CHATLIST_HEADER,
    icon: y,
    title: g.fbt._("Status", null, {
      hk: "My6TT"
    }),
    onClick: e => {
      e.preventDefault();
      if ((0, i.isStatusDrawerEnabled)()) {
        a.DrawerManager.openDrawerLeft(E.default.createElement(u.StatusDrawerFlowLoadable, {
          onBack: () => a.DrawerManager.closeDrawerLeft()
        }), {
          focusType: r.FocusType.TABBABLE
        });
        _();
      } else {
        l.ModalManager.openMedia(E.default.createElement(d.StatusV3FlowLoadable, {
          onFlowEnd: _,
          removeTopDrawer: false
        }), {
          transition: "status-v3-modal"
        });
      }
    }
  });
}
var C = (0, E.forwardRef)(y);
exports.default = C;