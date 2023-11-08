var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsletterReactionDetailsPane = function (e) {
  const [t, n] = (0, P.useState)(0);
  const a = (0, P.useRef)(new Map());
  const l = (0, k.default)(() => new f.default());
  const [s, c] = (0, P.useState)("all");
  const [m, g, E, v, _, b, M] = (0, D.useNewsletterReactionSenderList)(e.chat, e.firstMsg, e.multipleMsgs);
  const w = function (e, t, n) {
    const a = [];
    e.forEach(e => {
      const r = u.EmojiUtil.getNormalizedOrTofu(e.emoji);
      const o = e.count;
      var l;
      if (e.myReactions.length > 0) {
        e.myReactions.forEach(r => {
          var l;
          a.push({
            emoji: u.EmojiUtil.getNormalizedOrTofu(r.reactionText),
            count: t ? 1 : o,
            parentMsgKey: r.id,
            itemKey: r.id.toString(),
            height: 53,
            facePileImages: (l = n.get(e.emoji)) !== null && l !== undefined ? l : []
          });
        });
        if (t) {
          a.push({
            emoji: r,
            count: o,
            itemKey: e.emoji,
            height: 53,
            facePileImages: []
          });
        }
      } else {
        a.push({
          emoji: r,
          count: o,
          itemKey: e.emoji,
          height: 48,
          facePileImages: (l = n.get(e.emoji)) !== null && l !== undefined ? l : []
        });
      }
    });
    return a.sort((e, t) => e.parentMsgKey != null && t.parentMsgKey != null ? 0 : e.parentMsgKey != null ? -1 : t.parentMsgKey != null ? 1 : t.count - e.count);
  }(e.reactions, e.multipleMsgs, m);
  const A = e => {
    const t = w[e];
    if (t) {
      var n;
      const {
        itemKey: e
      } = t;
      const r = a.current.get(e);
      if (!(r == null || (n = r.current) === null || n === undefined)) {
        n.focus();
      }
    }
  };
  (0, P.useEffect)(() => {
    A(0);
  }, []);
  const I = e => (0, o.default)(e, 0, w.length - 1);
  const B = {
    up: e => {
      e.preventDefault();
      const a = I(t - 1);
      n(a);
      A(a);
    },
    down: e => {
      const a = I(t + 1);
      e.preventDefault();
      n(a);
      A(a);
    }
  };
  let F;
  let G;
  switch (s) {
    case "all":
      G = P.default.createElement(j, {
        count: e.reactions.reduce((e, t) => e + t.count, 0),
        chat: e.chat,
        multipleMsgs: e.multipleMsgs
      });
      F = P.default.createElement(h.HotKeys, {
        role: "list",
        tabIndex: null,
        handlers: B
      }, P.default.createElement(N, {
        data: w,
        direction: "vertical",
        renderItem: t => {
          const n = (0, P.createRef)();
          a.current.set(t.itemKey, n);
          return P.default.createElement(L, (0, r.default)({
            ref: n
          }, t, {
            multipleMsgs: e.multipleMsgs,
            onClick: t.parentMsgKey ? e.revokeReaction : null,
            offlineOrServerError: _ || v,
            onCloseDetailsPane: e.onCloseDetailsPane
          }));
        },
        flatListController: l.current
      }));
      break;
    case "contacts":
      G = _ || v || E ? null : P.default.createElement(j, {
        count: g.length,
        chat: e.chat,
        multipleMsgs: e.multipleMsgs
      });
      F = E ? P.default.createElement(p.FlexRow, {
        justify: "center",
        xstyle: T.uiMargin.top40
      }, P.default.createElement(S.Spinner, {
        color: "accent",
        size: 24
      })) : P.default.createElement(y.NewsletterContactsReactionList, {
        reactionList: g,
        flatListController: l.current,
        reactionSendersServerError: v,
        setReactionSendersServerError: b,
        retryFetchingReactionSenders: M,
        isOffline: _
      });
  }
  return P.default.createElement(p.FlexColumn, null, (0, C.isNewsletterReactionSenderListEnabled)(e.chat, e.multipleMsgs) && P.default.createElement(p.FlexRow, {
    xstyle: [T.uiMargin.bottom4, T.uiMargin.top28, R.fullWidth],
    justify: "center"
  }, P.default.createElement(i.ConnectedPillButtons, {
    pills: x,
    onChange: e => {
      if (!(e !== "all" && e !== "contacts")) {
        c(e);
      }
    },
    currentlySelected: s
  })), G, P.default.createElement(d.default, {
    className: (0, O.default)(R.listContainer),
    flatListControllers: [l.current]
  }, F));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendors-main/974691.js"));
var l = a(require("../main-chunk/170206.js"));
var i = require("./5238.js");
var u = require("../app/70354.js");
var s = require("./54007.js");
var c = require("./512938.js");
var d = a(require("./964223.js"));
var f = a(require("./570834.js"));
var p = require("../app/690495.js");
var m = a(require("../app/335540.js"));
var h = require("../app/81644.js");
var g = a(require("../app/932325.js"));
var E = require("../app/939716.js");
var v = require("../app/61113.js");
var _ = require("../app/787742.js");
var y = require("./742541.js");
var C = require("../app/73225.js");
var b = require("./488015.js");
var M = require("./900894.js");
var S = require("../app/956113.js");
var T = require("../app/676345.js");
var w = require("../app/851488.js");
var A = require("../vendor/548360.js");
var P = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = I(t);
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
var O = a(require("../app/156720.js"));
var k = a(require("../app/637660.js"));
var D = require("./366939.js");
function I(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (I = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const R = {
  listContainer: {
    width: "ln8gz9je",
    maxHeight: "owfawvgq",
    minHeight: "o404977b",
    overflowX: "i44ccddp",
    overflowY: "ag5g9lrv"
  },
  myReactedEmoji: {
    backgroundColor: "jq6r0jf2",
    borderTopStartRadius: "g9p5wyxn",
    borderTopEndRadius: "i0tg5vk9",
    borderBottomEndRadius: "aoogvgrq",
    borderBottomStartRadius: "o2zu3hjb"
  },
  fullWidth: {
    width: "ln8gz9je"
  },
  header: {
    width: "ln8gz9je",
    boxSizing: "cm280p3y"
  },
  facePile: {
    borderTopColor: "l28x4fha",
    borderEndColor: "crt4vy0o",
    borderBottomColor: "qoz5du9p",
    borderStartColor: "de6yy57u"
  }
};
const N = (0, c.FlatListFactory)();
const x = [{
  id: "all",
  title: A.fbt._("All", null, {
    hk: "364GAq"
  })
}, {
  id: "contacts",
  title: A.fbt._("Contacts", null, {
    hk: "3J1bV6"
  })
}];
const L = (0, P.forwardRef)(function (e, t) {
  const {
    onClick: n,
    parentMsgKey: a,
    count: r,
    multipleMsgs: o,
    facePileImages: i,
    offlineOrServerError: u,
    onCloseDetailsPane: c
  } = e;
  const d = a != null;
  const f = a != null ? v.MsgCollection.get(a) : null;
  const y = f != null && (0, _.getIsMedia)(f);
  const C = f != null && (0, E.isNewsletterMsgOnServer)(f);
  const S = (0, P.useRef)(null);
  const w = () => {
    m.default.focus(S.current);
  };
  (0, P.useImperativeHandle)(t, () => ({
    focus: w
  }));
  const k = (0, P.useCallback)(e => {
    e.preventDefault();
    e.stopPropagation();
    if (a != null && C) {
      if (!(n == null)) {
        n(a);
      }
    }
  }, [a, n, C]);
  const D = P.default.createElement("div", {
    className: (0, O.default)(T.uiPadding.all5, d && R.myReactedEmoji)
  }, P.default.createElement(M.ReactionEmoji, {
    scale: "list",
    size: "large",
    reaction: e.emoji
  }));
  const I = d ? P.default.createElement("span", null, o ? null : P.default.createElement(P.default.Fragment, null, g.default.n(r), " "), A.fbt._("(You reacted)", null, {
    hk: "1tLOoM"
  })) : g.default.n(r);
  const N = d && C ? A.fbt._("Click to remove", null, {
    hk: "3aDrx7"
  }) : null;
  const x = i.length > 0 && !u ? P.default.createElement(s.FacePile, {
    idsOrUrls: i,
    borderColor: R.facePile,
    xstyle: T.uiMargin.end8
  }) : null;
  const L = y && o && f != null ? P.default.createElement("div", {
    className: (0, O.default)(T.uiMargin.end16, T.uiMargin.top4)
  }, P.default.createElement(b.ReactionCellDetailThumb, {
    msg: f,
    onCloseDetailsPane: c,
    reactionText: e.emoji,
    showReactionText: false
  })) : null;
  return P.default.createElement(h.HotKeys, {
    role: d ? "button" : "listitem",
    ref: S,
    handlers: {
      enter: k,
      space: k
    }
  }, P.default.createElement(p.FlexRow, {
    align: "center"
  }, P.default.createElement(p.FlexItem, {
    grow: 2
  }, P.default.createElement(l.default, {
    onClick: d ? k : null,
    image: D,
    primary: I,
    secondary: N,
    detail: L != null ? L : x,
    theme: d ? "newsletter-reaction-by-me" : "newsletter-reaction-by-others",
    focusable: true
  }))));
});
function j(e) {
  let {
    count: t,
    chat: n,
    multipleMsgs: a
  } = e;
  const r = A.fbt._({
    "*": "{reactions} reactions",
    _1: "1 reaction"
  }, [A.fbt._plural(t, "reactions", t)], {
    hk: "3tfmvF"
  });
  return P.default.createElement(p.FlexRow, {
    align: "center",
    justify: (0, C.isNewsletterReactionSenderListEnabled)(n, a) ? "start" : "center",
    xstyle: [T.uiPadding.top20, T.uiPadding.bottom8, T.uiPadding.horiz16, R.header]
  }, (0, C.isNewsletterReactionSenderListEnabled)(n, a) ? P.default.createElement(w.WDSTextTitle, {
    weight: "semibold"
  }, r) : P.default.createElement(w.WDSTextLarge, null, r));
}
L.displayName = "NewsletterReactionDetailItem";