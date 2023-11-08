Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var a = require("../app/632157.js");
var r = require("../app/698867.js");
var o = require("./662854.js");
var l = require("../app/664149.js");
var i = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = u(t);
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
function u(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (u = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function s(e, t) {
  const {
    chat: n,
    onSelectMessages: u
  } = e;
  (0, i.useEffect)(() => {
    (0, r.handleActivitiesForChatThreadLogging)([{
      activityType: "chatOverflowClicks",
      ts: (0, a.unixTime)(),
      chatId: n.id
    }]);
  }, [n.id]);
  const s = (0, o.groupMenu)(n, u);
  if (e.toContextMenuManager) {
    return i.default.createElement("div", {
      ref: t
    }, s);
  } else {
    return i.default.createElement(l.Dropdown, {
      ref: t,
      type: l.MenuType.DropdownMenu,
      key: "GroupMenuDropdown",
      flipOnRTL: true,
      dirX: l.DirX.LEFT,
      testid: "group-menu-dropdown"
    }, s);
  }
}
var c = (0, i.forwardRef)(s);
exports.default = c;