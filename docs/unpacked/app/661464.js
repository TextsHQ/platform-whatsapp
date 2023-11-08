var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapMsgAndAddOns = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./359987.js");
var o = require("./870366.js");
var s = require("./727615.js");
var l = require("./356067.js");
function u() {
  return c.apply(this, arguments);
}
function c() {
  return (c = (0, i.default)(function* (e, t) {
    const n = yield (0, a.frontendSendAndReceive)("findMsgKeyFromServerId", {
      from: e,
      serverId: t
    });
    if (n != null) {
      return Promise.resolve(n);
    }
    const r = yield (0, s.getMessageByServerId)(t, e.toJid());
    if (r == null) {
      return undefined;
    } else {
      return r.id;
    }
  })).apply(this, arguments);
}
function d() {
  return (d = (0, i.default)(function* (e, t, n) {
    var r;
    var i;
    var a;
    var s;
    var l;
    var c;
    const d = (r = e.newsletterReactionsMixin) === null || r === undefined ? undefined : r.reactionsReaction;
    const _ = (i = e.newsletterPollVotesMixin) === null || i === undefined ? undefined : i.votesVote;
    const g = (0, o.mapNewsletterMsgToMsgData)(e, t, ((a = d == null ? undefined : d.length) !== null && a !== undefined ? a : 0) > 0, n);
    const m = (s = g == null ? undefined : g.id) !== null && s !== undefined ? s : yield u(t, e.serverId);
    const h = (l = e.newsletterViewsCountMixin) === null || l === undefined ? undefined : l.viewsCountCount;
    if (!((c = e.newsletterPollVotesMixin) === null || c === undefined)) {
      c.votesVote;
    }
    return {
      msgData: g,
      reactionData: p(d, m, n),
      pollVoteData: f(_, m, n),
      id: m,
      viewCount: h
    };
  })).apply(this, arguments);
}
function p(e, t, n) {
  if (t != null && e != null && e.length > 0) {
    return {
      parentMsgKey: t,
      serverTimestamp: n,
      emojiCountMap: e.reduce((e, t) => e.set(t.code, t.count), new Map())
    };
  } else {
    return null;
  }
}
function f(e, t, n) {
  if (t == null || e == null || e.length === 0) {
    return null;
  } else {
    return {
      parentMsgKey: t,
      serverTimestamp: n,
      voteCountMap: e.reduce((e, t) => e.set((0, l.bufferToHex)(t.elementValue), t.count), new Map())
    };
  }
}