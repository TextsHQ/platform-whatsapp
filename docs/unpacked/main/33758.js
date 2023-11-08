var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    settings: t,
    headerRef: n,
    onSelectChatClick: a,
    isMultiSelectMode: A,
    activeAccountInfo: P
  } = e;
  const O = (0, M.default)();
  const k = (0, T.useModelValues)(e.mute, ["isMuted"]);
  const D = (0, b.useRef)(false);
  const I = (0, b.useRef)(false);
  const R = (0, b.useMemo)(y.assertGetMeUser, []);
  const [N, x] = (0, b.useState)(false);
  const [L] = (0, w.useTimeout)(() => x(false), 100);
  const j = () => {
    I.current = true;
  };
  (0, S.useListener)(null, "BrowserWindow:focus", () => {});
  (0, S.useListener)(null, "BrowserWindow:move", function () {
    if (!D.current) {
      j(...arguments);
    }
  });
  const B = (0, b.useMemo)(() => r.BusinessProfileCollection.get(R), [R]);
  (0, S.useListener)(B, "change:profileOptions", O);
  const F = () => {
    m.MuteCollection.globalMute().unmute();
    _.ToastManager.open(b.default.createElement(v.Toast, {
      msg: C.fbt._("Notifications enabled", null, {
        hk: "mZYyC"
      })
    }));
  };
  let G = null;
  if (k.isMuted) {
    G = b.default.createElement(f.MenuBarItem, {
      testid: "menu-bar-unmute",
      tabOrder: E.TAB_ORDER.CHATLIST_HEADER,
      icon: b.default.createElement(i.DndIcon, null),
      title: C.fbt._("Alerts and sounds off. Click to restore.", null, {
        hk: "AByLx"
      }),
      onClick: F,
      key: "btn-dnd"
    });
  }
  const U = b.default.createElement(f.MenuBarItem, {
    testid: "menu-bar-chat",
    tabOrder: E.TAB_ORDER.CHATLIST_HEADER,
    icon: b.default.createElement(h.NewChatAltOutlineIcon, {
      directional: true
    }),
    title: C.fbt._("New chat", null, {
      hk: "2FNCEZ"
    }),
    onClick: e => {
      e.preventDefault();
      s.DrawerManager.openDrawerLeft(b.default.createElement(g.NewChatFlowLoadable, {
        onEnd: () => s.DrawerManager.closeDrawerLeft()
      }), {
        focusType: c.FocusType.TABBABLE
      });
      p.UiMessageYourselfNewChatAction.startSession();
      p.UiMessageYourselfNewChatAction.newChatPressed();
    },
    key: "btn-new-chat"
  });
  const W = b.default.createElement(f.MenuBarItem, {
    testid: "menu-bar-menu",
    tabOrder: E.TAB_ORDER.CHATLIST_HEADER,
    icon: b.default.createElement(o.CallMenuIcon, null),
    title: C.fbt._("Menu", null, {
      hk: "H0fkV"
    }),
    key: "btn-menu"
  }, b.default.createElement(l.default, {
    settings: t,
    startMultiSelect: a,
    isMultiSelectMode: A,
    activeAccountInfo: P
  }));
  const H = C.fbt._("", null, {
    hk: "2LlIip"
  });
  return b.default.createElement(d.MaybeStrictMode, null, b.default.createElement("header", {
    ref: n,
    onMouseDown: () => {},
    onClickCapture: () => {}
  }, b.default.createElement(u.DrawerHeader, {
    title: H,
    type: u.DRAWER_HEADER_TYPE.TAB,
    menu: [G, U, W],
    focusBackOrCancel: true
  })));
};
var r = require("../app/778945.js");
var o = require("./954376.js");
var l = a(require("./454138.js"));
var i = require("./640581.js");
var u = require("./626194.js");
var s = require("../app/900316.js");
var c = require("../app/299950.js");
var d = require("../app/48343.js");
var f = require("./526795.js");
var p = require("../main-chunk/165433.js");
var m = require("../app/971804.js");
var h = require("./499696.js");
var g = require("./494095.js");
require("./414493.js");
var E = require("../main-chunk/931109.js");
var v = require("../app/625786.js");
var _ = require("../app/390737.js");
var y = require("../app/459857.js");
var C = require("../vendor/548360.js");
var b = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = A(t);
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
var M = a(require("../app/969651.js"));
var S = require("../app/808446.js");
var T = require("../app/655241.js");
var w = require("../app/441673.js");
function A(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (A = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}