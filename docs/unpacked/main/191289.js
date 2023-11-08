var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("./339692.js"));
var o = require("../app/305521.js");
var l = a(require("./570834.js"));
var i = require("../app/690495.js");
var u = a(require("../app/469733.js"));
var s = require("../app/81644.js");
var c = a(require("../app/932325.js"));
var d = a(require("../app/565754.js"));
var f = require("./150396.js");
var p = a(require("./487619.js"));
var m = require("./882487.js");
var h = require("./900894.js");
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
  var n = C(t);
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
var v = a(require("../app/156720.js"));
var _ = require("./462708.js");
var y = a(require("../app/637660.js"));
function C(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (C = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const b = (e, t) => {
  var n;
  var a;
  var r;
  if ((n = e.current) === null || n === undefined ? undefined : n.hasFocus()) {
    if (!((a = t.current) === null || a === undefined)) {
      a.focus();
    }
  } else if (!((r = e.current) === null || r === undefined)) {
    r.focus();
  }
};
function M(e) {
  let {
    tab: t
  } = e;
  const {
    emoji: n,
    reactions: a
  } = t;
  return E.default.createElement(i.FlexRow, {
    align: "center",
    justify: "center"
  }, E.default.createElement(u.default, {
    xstyle: m.styles.willChange
  }, n === "_all_" ? E.default.createElement("div", {
    className: (0, v.default)(m.styles.emojiCount, m.styles.all)
  }, E.default.createElement(o.EmojiText, {
    text: g.fbt._({
      "*": "All",
      _1: "All"
    }, [g.fbt._plural(a.length)], {
      hk: "3SRF8J"
    })
  })) : E.default.createElement("div", {
    className: (0, v.default)(m.styles.emojiCount, m.styles.emoji, h.tabScale)
  }, E.default.createElement(h.ReactionEmoji, {
    reaction: n
  })), E.default.createElement("div", {
    className: (0, v.default)(m.styles.emojiCount, m.styles.count)
  }, c.default.n(a.length))));
}
var S = function (e) {
  const [t, n] = (0, E.useState)(0);
  const [a, o] = (0, E.useState)(0);
  const u = (0, y.default)(() => new l.default());
  const c = (0, E.useRef)(null);
  const h = (0, E.useRef)(null);
  const g = (0, E.useRef)(null);
  const C = (0, _.useGroupReactionsByTab)(Array.from(e.msgIds, e => d.default.from(e)));
  (0, E.useEffect)(() => {
    var e;
    var t;
    o((e = (t = g.current) === null || t === undefined ? undefined : t.clientHeight) !== null && e !== undefined ? e : 0);
  }, []);
  (0, E.useEffect)(() => {
    var t;
    if (C.length === 0) {
      if (!((t = e.onEmpty) === null || t === undefined)) {
        t.call(e);
      }
    }
  }, [e, C]);
  const S = {};
  if (a !== 0) {
    S.height = a;
  }
  const T = C[t].reactions;
  return E.default.createElement(s.HotKeys, {
    handlers: {
      "shift+tab": e => {
        e.preventDefault();
        b(h, c);
      },
      tab: e => {
        e.preventDefault();
        b(h, c);
      }
    },
    tabIndex: null
  }, E.default.createElement(r.default, {
    ref: h,
    numItems: C.length,
    onItemClick: e => {
      n(e);
      u.current.setScrollFromStart(0);
    },
    renderItem: e => E.default.createElement(M, {
      tab: C[e]
    }),
    selectedIndex: t,
    buttonStyle: m.styles.buttonStyle,
    theme: f.MenuContainerTheme.REACTIONS_CONTAINER
  }), E.default.createElement("div", {
    className: (0, v.default)(m.styles.divider)
  }), E.default.createElement(i.FlexColumn, {
    ref: g,
    style: S
  }, E.default.createElement(p.default, {
    ref: c,
    senders: T,
    flatListController: u.current,
    onCloseDetailsPane: e.onCloseDetailsPane ? e.onCloseDetailsPane : () => {},
    isAggregated: e.isAggregated
  })));
};
exports.default = S;