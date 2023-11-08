var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMyNewsletterAddOnsJob = function (e) {
  return (0, d.createNonPersistedJob)("getMyNewsletterAddOns", (0, i.default)(function* () {
    const {
      messagesByNewsletter: t
    } = yield (0, l.getMyNewsletterAddOnsRPC)(e);
    return function () {
      return f.apply(this, arguments);
    }(t, e.newsletterJid);
  }), {
    priority: a.JOB_PRIORITY.UI_ACTION
  }).waitUntilCompleted();
};
var i = r(require("../vendor/348926.js"));
var a = require("./775593.js");
var o = require("./523172.js");
var s = require("./65013.js");
var l = require("./398545.js");
var u = require("./727615.js");
var c = require("./356067.js");
var d = require("./899137.js");
var p = require("./459857.js");
function f() {
  return (f = (0, i.default)(function* (e, t) {
    const n = e.reduce((e, n) => {
      let {
        message: r,
        jid: i
      } = n;
      const a = i != null ? i : t;
      r.forEach(t => {
        const n = _(t, a);
        if (n != null) {
          e.reactions.push(n);
        }
        const r = g(t, a);
        if (r != null) {
          e.pollVotes.push(r);
        }
      });
      return e;
    }, {
      reactions: [],
      pollVotes: []
    });
    yield Promise.all([(0, s.createOrUpdateReactions)(n.reactions), (0, o.bulkCreateOrUpdateMyVotes)(n.pollVotes)]);
    return n;
  })).apply(this, arguments);
}
function _(e, t) {
  var n;
  var r;
  const i = (0, u.craftNewsletterMsgKeyFromServerId)(e.serverId, t).toString();
  const a = e == null || (n = e.newsletterMyReactionMixin) === null || n === undefined ? undefined : n.reactionCode;
  const o = e == null || (r = e.newsletterMyReactionMixin) === null || r === undefined ? undefined : r.reactionT;
  if (a == null || o == null) {
    return null;
  } else {
    return {
      parentMsgKey: i,
      senderUserJid: (0, p.getMeUser)().toString(),
      reactionText: a,
      timestamp: o * 1000,
      orphan: 0,
      msgKey: i
    };
  }
}
function g(e, t) {
  const n = e.newsletterMyPollVoteMixin;
  if (n == null) {
    return null;
  }
  const {
    votesT: r,
    votesVote: i
  } = n;
  return {
    chatJid: t,
    msgServerId: e.serverId,
    serverTimestampMs: r * 1000,
    t: r,
    msgKey: (0, u.craftNewsletterMsgKeyFromServerId)(e.serverId, t).toString(),
    votes: i.map(e => (0, c.bufferToHex)(e.elementValue))
  };
}