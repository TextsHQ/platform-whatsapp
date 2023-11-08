var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./250818.js");
var o = a(require("./171560.js"));
var l = require("../app/780549.js");
var i = require("./385798.js");
var u = require("../app/877171.js");
var s = require("../app/581354.js");
var c = require("./512938.js");
var d = require("../app/163755.js");
var f = require("../app/81644.js");
var p = require("../app/787742.js");
var m = require("../main-chunk/931109.js");
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
var g = a(require("../app/321201.js"));
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
const v = (0, c.FlatListFactory)();
function _(e) {
  let {
    selection: t,
    searchText: n,
    onClick: a,
    msg: l
  } = e;
  if ((0, p.getSender)(l) && (0, p.getIsGroupMsg)(l) && !(0, p.getIsNotification)(l) && !(0, p.getIsSentByMe)(l)) {
    return h.default.createElement(o.default, {
      contact: l.senderObj,
      msg: l,
      chat: (0, d.getChat)(l),
      searchText: n,
      onClick: a,
      active: t,
      key: l.id.toString()
    });
  } else {
    return h.default.createElement(r.Message, {
      msg: l,
      chat: (0, d.getChat)(l),
      searchText: n,
      onClick: a,
      active: t,
      key: l.id.toString()
    });
  }
}
function y(e, t) {
  const {
    selection: n,
    ftsResult: a,
    searchText: r,
    onFocusSearch: o
  } = e;
  const c = (0, g.default)();
  const d = (0, h.useRef)(null);
  const p = (e, t, n) => {
    e.preventDefault();
    e.stopPropagation();
    (0, s.findChat)(t.id, "chatSearchMessageList").then(e => {
      if (i.Column.column === 2) {
        if (!(c == null)) {
          c.requestDismiss();
        }
      }
      u.ComposeBoxActions.focus(e);
      l.Cmd.openChatAt(e, n);
    });
  };
  const E = () => {
    n.reset(true);
  };
  const y = () => {
    n.setFirst(true);
  };
  (0, h.useEffect)(() => {
    n.init(a || []);
  }, []);
  (0, h.useImperativeHandle)(t, () => ({
    focusFirst: y,
    restoreFocus: E
  }));
  return h.default.createElement(f.HotKeys, {
    handlers: {
      down: e => (e => {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        const t = n.next();
        if (n.index !== t) {
          n.setNext(true);
        }
      })(e),
      up: e => {
        if (t = e) {
          t.stopPropagation();
          t.preventDefault();
        }
        return void (n.prev() > -1 ? n.setPrev(true) : o());
        var t;
      }
    },
    onFocus: e => {
      if (e.target === d.current) {
        if (n.index < 0) {
          y();
        } else {
          n.reset(true);
        }
      }
    },
    "data-tab": m.TAB_ORDER.CHAT_SEARCH_MSG_LIST,
    ref: d
  }, h.default.createElement(v, {
    flatListController: e.flatListController,
    direction: "vertical",
    data: a.map(e => ({
      itemKey: e.id.toString(),
      msg: e
    })),
    renderItem: e => {
      let {
        msg: t
      } = e;
      return h.default.createElement(_, {
        msg: t,
        selection: n,
        searchText: r,
        onClick: p
      });
    },
    forceConsistentRenderCount: false
  }));
}
var C = (0, h.forwardRef)(y);
exports.default = C;