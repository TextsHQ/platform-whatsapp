var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateLastUpdateTs = function (e, t) {
  if (t != null) {
    e.forEach(e => {
      const n = a.MsgCollection.get(e);
      if (!(n == null)) {
        n.set("lastUpdateFromServerTs", t);
      }
    });
  }
};
exports.updatePollVotes = function () {
  return c.apply(this, arguments);
};
exports.updateReactions = function () {
  return u.apply(this, arguments);
};
exports.updateViewCounts = function (e) {
  if (e != null && e.size > 0) {
    for (const [t, n] of e.entries()) {
      const e = a.MsgCollection.get(t);
      if (!(e == null)) {
        e.set("viewCount", n);
      }
    }
  }
};
var i = r(require("../vendor/348926.js"));
var a = require("./61113.js");
var o = require("./531898.js");
var s = require("./523497.js");
var l = require("./823980.js");
function u() {
  return (u = (0, i.default)(function* (e) {
    var t;
    let {
      reactions: n,
      ids: r,
      reactionIdsToRemove: i
    } = e;
    if (i != null) {
      s.NewsletterMessageReactionsCollection.remove(i);
    }
    yield Promise.all((t = r.map(e => s.NewsletterMessageReactionsCollection.find(e.toString()).catch(() => {}))) !== null && t !== undefined ? t : []);
    s.NewsletterMessageReactionsCollection.add(n.map(e => ({
      id: e.parentMsgKey,
      reactionCountMap: e.emojiCountMap,
      reactionCountMapTs: e.serverTimestamp
    })), {
      merge: true
    });
  })).apply(this, arguments);
}
function c() {
  return (c = (0, i.default)(function* (e) {
    var t;
    let {
      pollVotes: n,
      ids: r
    } = e;
    yield Promise.all((t = r.map(e => o.NewsletterPollVotesModelCollection.find(e).catch(() => {}))) !== null && t !== undefined ? t : []);
    const s = yield Promise.all(n.map(function () {
      var e = (0, i.default)(function* (e) {
        const t = a.MsgCollection.get(e.parentMsgKey);
        const n = t == null ? undefined : t.pollOptions;
        if (n == null) {
          return;
        }
        const r = yield (0, l.createOptionLocalIdMap)(n);
        return {
          id: e.parentMsgKey,
          pollVotesCountMap: d(e.voteCountMap, r),
          pollVotesCountMapTs: e.serverTimestamp
        };
      });
      return function () {
        return e.apply(this, arguments);
      };
    }()));
    o.NewsletterPollVotesModelCollection.add(s.filter(Boolean), {
      merge: true
    });
  })).apply(this, arguments);
}
function d(e, t) {
  const n = new Map();
  for (const [r, i] of e.entries()) {
    n.set(t.getLocalIdForHexHash(r), i);
  }
  return n;
}