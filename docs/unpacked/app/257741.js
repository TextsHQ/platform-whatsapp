var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.aggregateAndSortReactions = function (e) {
  if (e.length === 0) {
    return {
      reactions: [],
      count: 0
    };
  }
  return function (e) {
    let t = 0;
    const n = new Map();
    for (const {
      reactions: r,
      count: a
    } of e) {
      t += a;
      for (const [e, [t, a]] of r.entries()) {
        const r = n.get(e);
        if (r != null) {
          r.count += a;
          r.reaction = (0, i.default)((0, i.default)({}, r.reaction), {}, {
            reactionSenders: r.reaction.reactionSenders.concat(t.reactionSenders)
          });
          n.set(e, r);
        } else {
          n.set(e, {
            reaction: t,
            count: a
          });
        }
      }
    }
    const r = Array.from(n.values()).sort((e, t) => {
      let {
        count: n,
        reaction: r
      } = e;
      let {
        reaction: i,
        count: a
      } = t;
      if (r.reactionByMe != null) {
        return -1;
      } else if (i.reactionByMe != null) {
        return 1;
      } else {
        return a - n;
      }
    }).map(e => {
      let {
        reaction: t,
        count: n
      } = e;
      return [t, n];
    });
    return {
      count: t,
      reactions: r
    };
  }(e.map(p));
};
exports.getContactReactionSenders = function (e) {
  const t = [];
  e.reactions.map(e => {
    let {
      reactionCode: n,
      senderList: r
    } = e;
    r.map(e => {
      if ((e == null ? undefined : e.id) == null) {
        return;
      }
      const r = o.ContactCollection.get(e.id);
      if ((r == null ? undefined : r.type) === "in") {
        t.push({
          reaction: n,
          contact: r
        });
      }
    });
  });
  return t.sort((e, t) => {
    const n = (0, l.getFormattedUser)(e.contact);
    const r = (0, l.getFormattedUser)(t.contact);
    return n.localeCompare(r);
  });
};
exports.getReactionSendersForFacePile = function (e) {
  const t = function (e) {
    const t = new Map();
    e.reactions.map(e => {
      var n;
      let {
        reactionCode: r,
        senderList: i
      } = e;
      const a = s.EmojiUtil.getEmojiAggregate(r);
      const o = (n = t.get(a)) !== null && n !== undefined ? n : [];
      t.set(a, o.concat(i));
    });
    return t;
  }(e);
  const n = new Map();
  for (const [e, r] of t.entries()) {
    const t = r.sort((e, t) => {
      const n = (e == null ? undefined : e.id) != null ? o.ContactCollection.get(e.id) : null;
      const r = (t == null ? undefined : t.id) != null ? o.ContactCollection.get(t.id) : null;
      const i = (n == null ? undefined : n.type) === "in";
      const a = (r == null ? undefined : r.type) === "in";
      if (i && n && r && a) {
        const e = u.ProfilePicThumbCollection.get(n.id) != null;
        if (e === (u.ProfilePicThumbCollection.get(r.id) != null)) {
          return 0;
        } else if (e) {
          return -1;
        } else {
          return 1;
        }
      }
      if (i || a) {
        if (i) {
          return -1;
        } else {
          return 1;
        }
      } else {
        return 0;
      }
    }).slice(0, 5).map(e => (e == null ? undefined : e.id) != null ? e.id : e == null ? undefined : e.profileUrl).filter(Boolean);
    n.set(e, t);
  }
  return n;
};
exports.mapFrontendReactionToBackend = function (e) {
  var t;
  var n;
  return {
    serverTimestamp: (t = e.reactionCountMapTs) !== null && t !== undefined ? t : (0, a.unixTime)(),
    emojiCountMap: (n = e.reactionCountMap) !== null && n !== undefined ? n : new Map(),
    parentMsgKey: e.id.toString()
  };
};
exports.mapReactionDataToDbRecord = function (e) {
  const {
    serverTimestamp: t,
    emojiCountMap: n,
    parentMsgKey: r
  } = e;
  if (t == null || n == null) {
    return;
  }
  return {
    serverTimestamp: t,
    emojiCountMap: n,
    parentMsgKey: r.toString()
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./632157.js");
var o = require("./177938.js");
var s = require("./70354.js");
var l = require("./714574.js");
var u = require("./446474.js");
var c = require("./359126.js");
var d = require("./459857.js");
function p(e) {
  const t = new Map();
  const {
    myReaction: n,
    myReactionMsgKey: r
  } = e;
  const i = new Map(e.reactionCountMap);
  if (!(n == null || n === "" || i.has(n))) {
    i.set(n, 1);
  }
  let a = 0;
  const o = function (e) {
    const t = new Map();
    for (const [r, i] of e.entries()) {
      var n;
      const e = s.EmojiUtil.getEmojiAggregate(r);
      const a = s.EmojiUtil.getNormalizedOrTofu(r);
      const o = (n = t.get(e)) !== null && n !== undefined ? n : {
        count: 0,
        reactions: new Map()
      };
      o.reactions.set(a, i);
      o.count += i;
      t.set(e, o);
    }
    return t;
  }(i);
  for (const [i, u] of o.entries()) {
    var l;
    a += u.count;
    t.set(i, [{
      reactionAggregate: i,
      reactionSenders: f(i, e),
      reactionByMe: n != null && r != null && i === s.EmojiUtil.getEmojiAggregate(n) ? {
        msgKey: r.toString(),
        orphan: 0,
        parentMsgKey: e.id.toString(),
        reactionText: s.EmojiUtil.getNormalizedOrTofu(n),
        senderUserJid: (0, d.getMeUser)().toJid(),
        timestamp: (l = e.myReactionTs) !== null && l !== undefined ? l : 0
      } : null
    }, u.count]);
  }
  return {
    reactions: t,
    count: a
  };
}
function f(e, t) {
  const {
    myReaction: n
  } = t;
  const r = n != null && e === s.EmojiUtil.getEmojiAggregate(n);
  return [new c.ReactionsSenders({
    id: t.id,
    reactionText: r ? n : e,
    senderUserJid: r ? (0, d.getMeUser)().toJid() : t.id.remote.toJid(),
    timestamp: t.reactionCountMapTs
  })];
}