Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var a = require("../app/79672.js");
var r = require("../app/780549.js");
var o = require("../app/664149.js");
var l = require("../app/675085.js");
var i = require("../app/397516.js");
var u = require("./18668.js");
var s = require("./659606.js");
var c = require("./104845.js");
var d = require("../vendor/548360.js");
var f = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = p(t);
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
function p(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (p = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function m(e, t) {
  const {
    selectedModels: n,
    onComplete: p,
    unreadChatCount: m,
    unmutedChatCount: h
  } = e;
  const g = n.getSelected().reduce((e, t) => {
    if (t instanceof a.Chat) {
      e.push(t);
    }
    return e;
  }, []);
  const E = m !== 0;
  const v = E ? d.fbt._({
    "*": "Mark as read",
    _1: "Mark as read"
  }, [d.fbt._plural(g.length)], {
    hk: "t4MiL"
  }) : d.fbt._({
    "*": "Mark as unread",
    _1: "Mark as unread"
  }, [d.fbt._plural(g.length)], {
    hk: "37pIGU"
  });
  const _ = f.default.createElement(l.DropdownItem, {
    action: () => {
      var e;
      e = !E;
      g.forEach(t => {
        (0, i.markUnread)(t, e, false);
      });
      (0, u.logChatActionEvent)({
        chatActionEntryPoint: s.CHAT_ACTION_ENTRY_POINT.CONVERSATION_LIST_BULK_EDIT,
        chatActionType: e ? c.CHAT_ACTION_TYPE.UNREAD : c.CHAT_ACTION_TYPE.READ
      });
      p();
    },
    testid: "multi-select-bar-overflow-menu-item-mark-" + (E ? "read" : "unread")
  }, v);
  const y = h !== 0;
  const C = y ? d.fbt._("Mute notifications", null, {
    hk: "1H9fTs"
  }) : d.fbt._("Unmute notifications", null, {
    hk: "gM9Og"
  });
  const b = f.default.createElement(l.DropdownItem, {
    action: () => {
      var e;
      e = y;
      r.Cmd.muteChatMultiselect(g, e, () => {
        (0, u.logChatActionEvent)({
          chatActionEntryPoint: s.CHAT_ACTION_ENTRY_POINT.CONVERSATION_LIST_BULK_EDIT,
          chatActionType: e ? c.CHAT_ACTION_TYPE.MUTE : c.CHAT_ACTION_TYPE.UNMUTE
        });
        p();
      });
    },
    testid: "multi-select-bar-overflow-menu-item-" + (y ? "mute" : "unmute")
  }, C);
  return f.default.createElement(o.Dropdown, {
    ref: t,
    type: o.MenuType.DropdownMenu,
    flipOnRTL: true,
    key: "MultiSelectOverflowMenu",
    dirX: o.DirX.LEFT,
    dirY: o.DirY.BOTTOM,
    testid: "multi-select-bar-header-overflow-menu"
  }, _, b);
}
var h = (0, f.forwardRef)(m);
exports.default = h;