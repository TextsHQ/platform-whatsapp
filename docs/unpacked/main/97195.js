var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsletterReactionBubbleContainer = function (e) {
  const [t, n] = (0, p.useState)();
  const [a, g] = (0, h.default)(e.msgs.map(e => e.id));
  const {
    count: E,
    reactions: v
  } = (0, m.default)(a, ["change:myReaction", "change:reactionCountMapTs", "remove"], () => (0, i.aggregateAndSortReactions)(a));
  const _ = () => {
    n(null);
  };
  const y = (0, p.useCallback)(e => {
    _();
    (0, u.sendNewsletterReaction)(e, s.REVOKED_REACTION_TEXT).catch(() => __LOG__(3)`Failed to revoke`);
  }, []);
  const C = t => {
    t.preventDefault();
    t.stopPropagation();
    const a = (0, f.getMeUser)();
    const i = (0, o.getChat)(e.msgs[0]);
    const u = p.default.createElement(l.NewsletterReactionDetailsPane, {
      revokeReaction: y,
      multipleMsgs: e.msgs.length > 1,
      reactions: v.map(e => {
        let [t, n] = e;
        return {
          emoji: t.reactionAggregate,
          count: n,
          myReactions: t.reactionSenders.filter(e => e.senderUserJid === a.toJid())
        };
      }),
      chat: i,
      firstMsg: e.msgs[0],
      onCloseDetailsPane: _
    });
    n({
      menu: u,
      dirY: r.DirY.BOTTOM,
      dirX: r.DirX.RIGHT,
      anchor: t.target,
      flipOnRtl: true,
      type: r.MenuType.ReactionDetailsPane
    });
  };
  return p.default.createElement(c.ReactionsBubbleWrapper, {
    closeDetailsPane: _,
    detailsPane: t,
    handlers: {
      enter: C,
      space: C
    },
    hasReaction: v.length > 0,
    isFirstData: g,
    numberOfSenderReactions: E,
    openDetailsPane: C,
    reactionArrayEmojis: v.map(e => {
      let [t] = e;
      return t;
    }).slice(0, (0, d.getMaxReactionsInBubble)()),
    reactionBubbleVisible: !!e.reactionBubbleVisible
  });
};
var r = require("../app/664149.js");
var o = require("../app/163755.js");
var l = require("./6314.js");
var i = require("../app/257741.js");
var u = require("./526260.js");
var s = require("../app/911600.js");
var c = require("./548155.js");
var d = require("./474474.js");
var f = require("../app/459857.js");
var p = function (e, t) {
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
var m = a(require("../app/524578.js"));
var h = a(require("./410794.js"));
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