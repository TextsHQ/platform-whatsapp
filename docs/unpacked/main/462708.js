Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateEmojiCount = c;
exports.useGroupReactionsByTab = function (e) {
  const t = s(e);
  return (0, l.useMemo)(() => {
    const e = [];
    for (const [n, a] of t.entries()) {
      e.push({
        emoji: n,
        reactions: a
      });
    }
    return e;
  }, [t]);
};
exports.useGroupedReactionsByEmoji = s;
exports.useReactionEmojiAndSum = function (e) {
  const t = u(e);
  return (0, l.useMemo)(() => {
    const e = c(t);
    const n = d(t, e);
    const a = new Map();
    for (const e of n) {
      const t = a.get(e.aggregatedEmoji);
      const n = (0, o.isSerializedWidMe)(e.senderUserJid) ? e : null;
      if (t != null) {
        t.reactionSenders.push(e);
        t.reactionByMe = t.reactionByMe ? t.reactionByMe : n;
      } else {
        a.set(e.aggregatedEmoji, {
          reactionByMe: n,
          reactionAggregate: e.aggregatedEmoji,
          reactionSenders: [e]
        });
      }
    }
    return {
      numberOfSenderReactions: n.length,
      reactionArrayEmojis: Array.from(a.values()),
      reactionModels: n
    };
  }, [t]);
};
exports.useReactionbyParentKey = function (e) {
  const t = u([e]);
  return (0, l.useMemo)(() => t.find(e => (0, o.isSerializedWidMe)(e.senderUserJid)), [t]);
};
var a = require("../app/590677.js");
var r = require("../app/224772.js");
var o = require("../app/459857.js");
var l = require("../vendor/667294.js");
var i = require("./928039.js");
function u(e) {
  for (const t of e) {
    const e = t.toString();
    if (!a.FlattenedReactionsCollection.hydratedReactions.has(e)) {
      (0, r.hydrateOrGetReaction)(e).then(() => {
        a.FlattenedReactionsCollection.hydratedReactions.add(e);
      }).catch(e => {
        __LOG__(2)`reactions hydration failed with error', ${e}`;
      });
    }
  }
  const t = Array.from(e, e => e.toString());
  return (0, i.useAggregatedMultiple)(a.FlattenedReactionsCollection.byParent, (0, l.useMemo)(() => t, []));
}
function s(e) {
  const t = u(e);
  return (0, l.useMemo)(() => {
    const e = new Map();
    const n = c(t);
    const a = d(t, n);
    e.set("_all_", [...a]);
    for (const t of a) {
      const n = e.get(t.aggregatedEmoji);
      if (n != null) {
        n.push(t);
      } else {
        e.set(t.aggregatedEmoji, [t]);
      }
    }
    return e;
  }, [t]);
}
function c(e) {
  const t = new Map();
  for (const n of e) {
    const e = t.get(n.aggregatedEmoji);
    if (e != null) {
      t.set(n.aggregatedEmoji, e + 1);
    } else {
      t.set(n.aggregatedEmoji, 1);
    }
  }
  return t;
}
function d(e, t) {
  return [...e].sort(function (e, n) {
    if ((0, o.isSerializedWidMe)(e.senderUserJid)) {
      return -1;
    }
    if ((0, o.isSerializedWidMe)(n.senderUserJid)) {
      return 1;
    }
    const a = t.get(e.aggregatedEmoji);
    const r = t.get(n.aggregatedEmoji);
    let l = 0;
    if (a != null && r != null) {
      l = r - a;
    }
    if (l === 0) {
      return n.timestamp - e.timestamp;
    } else {
      return l;
    }
  });
}