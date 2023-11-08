var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = exports.ReactionDetailsPane = undefined;
var r = a(require("../vendor/82729.js"));
var o = a(require("../vendors-main/29521.js"));
var l = a(require("../vendors-main/133856.js"));
var i = a(require("./339692.js"));
var u = require("../app/305521.js");
var s = a(require("./570834.js"));
var c = require("../app/690495.js");
var d = a(require("../app/469733.js"));
var f = require("../app/81644.js");
var p = a(require("../app/932325.js"));
var m = require("./150396.js");
var h = a(require("./487619.js"));
var g = require("./900894.js");
var E = require("./474474.js");
var v = a(require("../app/395967.js"));
var _ = require("../app/459857.js");
var y = require("../vendor/548360.js");
var C = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = T(t);
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
var b = a(require("../app/156720.js"));
var M = a(require("../app/637660.js"));
var S = a(require("./154731.js"));
function T(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (T = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const w = {
  divider: {
    backgroundColor: "n45ix5k8",
    height: "kanlod6e"
  },
  emojiCount: {
    marginTop: "tt8xd2xn",
    marginEnd: "jnwc1y2a",
    marginBottom: "mpdn4nr2",
    marginStart: "svoq16ka",
    display: "l7jjieqr",
    height: "bvcnfjzh",
    fontSize: "bze30y65",
    lineHeight: "r5qsrrlp"
  },
  emoji: {
    color: "tviruh8d",
    marginEnd: "kjemk6od",
    imageRendering: "bd96tnyg"
  },
  all: {
    color: "tviruh8d",
    marginEnd: "claouzo6"
  },
  count: {
    color: "pm5hny62",
    marginEnd: "cgpjrhzi"
  },
  buttonStyle: {
    width: "hj839x6e"
  },
  willChange: {
    willChange: "exvbdj68"
  }
};
exports.styles = w;
const A = "_all_";
const P = (e, t) => {
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
const O = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let t = arguments.length > 1 ? arguments[1] : undefined;
  const n = (0, l.default)(e, t, (e, t) => e.isEqual(t));
  const a = (0, o.default)(t, e, (e, t) => e.isEqual(t));
  return n.concat(...a);
};
function k(e) {
  let {
    tab: t
  } = e;
  const {
    emoji: n,
    reactions: a
  } = t;
  return C.default.createElement(c.FlexRow, {
    align: "center",
    justify: "center"
  }, C.default.createElement(d.default, {
    xstyle: w.willChange
  }, n === A ? C.default.createElement("div", {
    className: (0, b.default)(w.emojiCount, w.all)
  }, C.default.createElement(u.EmojiText, {
    text: y.fbt._({
      "*": "All",
      _1: "All"
    }, [y.fbt._plural(a.length)], {
      hk: "3SRF8J"
    })
  })) : C.default.createElement("div", {
    className: (0, b.default)(w.emojiCount, w.emoji, g.tabScale)
  }, C.default.createElement(g.ReactionEmoji, {
    reaction: n
  })), C.default.createElement("div", {
    className: (0, b.default)(w.emojiCount, w.count)
  }, p.default.n(a.length))));
}
exports.ReactionDetailsPane = function (e) {
  const [t, n] = (0, C.useState)(0);
  const [a, o] = (0, C.useState)(0);
  const l = (0, M.default)(() => new s.default());
  const u = (0, C.useRef)(null);
  const d = (0, C.useRef)(null);
  const p = (0, C.useRef)(null);
  const {
    isKeyboardUser: g
  } = (0, v.default)();
  (0, C.useEffect)(() => {
    var e;
    var t;
    o((e = (t = p.current) === null || t === undefined ? undefined : t.clientHeight) !== null && e !== undefined ? e : 0);
  }, []);
  const y = (e, t) => {
    var n;
    var a;
    const o = (0, E.getReactionAggregates)(e);
    const l = [];
    const i = [];
    const u = [];
    const s = (e, t) => {
      const {
        reactionSenders: n
      } = e;
      if (n.length) {
        const a = O(t, n);
        a.forEach(e => {
          if ((0, _.isSerializedWidMe)(e.senderUserJid)) {
            i.push(e);
          } else {
            l.push(e);
          }
        });
        u.push({
          emoji: (0, E.getReactionForDisplay)(e),
          reactions: a
        });
      }
    };
    if (!(t == null)) {
      t.forEach(e => {
        const t = (0, r.default)(o, t => t.reactionAggregate === e.emoji)[0];
        if (t) {
          s(t, e.reactions);
        }
      });
    }
    o.forEach(e => {
      s(e);
    });
    const c = O((n = t == null || (a = t[0]) === null || a === undefined ? undefined : a.reactions) !== null && n !== undefined ? n : [], l);
    c.unshift(...i);
    if (c.length) {
      u.unshift({
        emoji: A,
        reactions: c
      });
    }
    return u;
  };
  const [T, D] = (0, C.useState)(y(e.reactionsModels));
  (0, S.default)(e.msgIds, e => {
    var a;
    const r = g && !!((a = u.current) === null || a === undefined ? undefined : a.hasFocus());
    const o = y(e, T);
    var l;
    if (o.length < T.length) {
      n(Math.max(0, t - 1));
    }
    D(o);
    if (r) {
      if (!((l = u.current) === null || l === undefined)) {
        l.focus();
      }
    }
  });
  (0, C.useEffect)(() => {
    var t;
    if (T.length === 0) {
      if (!((t = e.onEmpty) === null || t === undefined)) {
        t.call(e);
      }
    }
  }, [e, T]);
  if (T.length === 0) {
    return null;
  }
  const I = T[t].reactions;
  const R = {};
  if (a) {
    R.height = a;
  }
  return C.default.createElement(f.HotKeys, {
    handlers: {
      "shift+tab": e => {
        e.preventDefault();
        P(d, u);
      },
      tab: e => {
        e.preventDefault();
        P(d, u);
      }
    },
    tabIndex: null
  }, C.default.createElement(i.default, {
    ref: d,
    numItems: T.length,
    onItemClick: e => {
      n(e);
      l.current.setScrollFromStart(0);
    },
    renderItem: e => C.default.createElement(k, {
      tab: T[e]
    }),
    selectedIndex: t,
    buttonStyle: w.buttonStyle,
    theme: m.MenuContainerTheme.REACTIONS_CONTAINER
  }), C.default.createElement("div", {
    className: (0, b.default)(w.divider)
  }), C.default.createElement(c.FlexColumn, {
    ref: p,
    style: R
  }, C.default.createElement(h.default, {
    ref: u,
    senders: I,
    flatListController: l.current,
    onCloseDetailsPane: e.onCloseDetailsPane ? e.onCloseDetailsPane : () => {},
    isAggregated: e.isAggregated
  })));
};