var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./954376.js");
var o = a(require("./699175.js"));
var l = require("./526795.js");
var i = require("../main-chunk/931109.js");
var u = a(require("../app/844453.js"));
var s = require("../app/561912.js");
var c = require("../vendor/548360.js");
var d = function (e, t) {
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
var f = a(require("../app/156720.js"));
var p = a(require("./752412.js"));
var m = a(require("../app/969651.js"));
var h = require("../app/808446.js");
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
const E = {
  start: "tkdu00h0",
  zIndex: "ppup7n5u",
  boxSizing: "cm280p3y",
  display: "p357zi0d",
  alignItems: "gndfcl4n",
  width: "ln8gz9je",
  height: "okhds9gt",
  position: "g0rxnol2",
  bottom: "rut305bb",
  paddingTop: "n1yiu2zv",
  paddingEnd: "l9g3jx6n",
  paddingBottom: "eb4rp10x",
  paddingStart: "lyvj5e2u",
  backgroundColor: "f6ipylw5",
  borderTop: "dl47i6rc",
  borderEnd: "pdo9fnbd",
  borderBottom: "n8n2xqzm",
  borderStart: "hqx4twni"
};
const v = {
  flexGrow: "ggj6brxn",
  flexShrink: "m0h2a7mj",
  flexBasis: "lb5m6g5c",
  marginEnd: "spjzgwxb",
  marginStart: "a3oefunm",
  overflowX: "gfz4du6o",
  overflowY: "r7fjleex",
  fontSize: "enbbiyaj",
  textOverflow: "lhj4utae",
  whiteSpace: "le5p0ye3"
};
function _(e, t) {
  const {
    selectedModels: n,
    onCancel: a
  } = e;
  const g = (0, m.default)();
  const _ = n.getSelected().length;
  const y = (0, p.default)(n, "unread_chat");
  const C = (0, p.default)(n, "unmuted_chat");
  (0, h.useListener)(n, "all", g);
  return d.default.createElement("div", {
    ref: t,
    className: (0, f.default)(E)
  }, d.default.createElement(l.MenuBarItem, {
    testid: "multi-select-bar-cancel-selection",
    tabOrder: i.TAB_ORDER.CHATLIST_HEADER,
    icon: d.default.createElement(s.XIcon, null),
    title: c.fbt._("Cancel Selection", null, {
      hk: "1ZIZw4"
    }),
    onClick: a
  }), d.default.createElement("div", {
    className: (0, f.default)(v)
  }, c.fbt._({
    "*": "{number_of_selected_items} selected",
    _1: "1 selected"
  }, [c.fbt._plural(_, "number_of_selected_items")], {
    hk: "Le6S7"
  })), _ > 0 && d.default.createElement(l.MenuBar, {
    key: "multi-select-bar-header"
  }, d.default.createElement(u.default, {
    transitionName: "dropdown"
  }, d.default.createElement(l.MenuBarItem, {
    testid: "multi-select-bar-overflow-menu",
    tabOrder: i.TAB_ORDER.CHATLIST_HEADER,
    icon: d.default.createElement(r.CallMenuIcon, {
      directional: true
    }),
    title: c.fbt._("Menu", null, {
      hk: "3B5w1"
    })
  }, d.default.createElement(o.default, {
    selectedModels: n,
    onComplete: a,
    unreadChatCount: y,
    unmutedChatCount: C
  })))));
}
var y = (0, d.forwardRef)(_);
exports.default = y;