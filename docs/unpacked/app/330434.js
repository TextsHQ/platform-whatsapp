Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.aggregateNewsletterVotes = function (e, t) {
  var n;
  var r;
  const i = new Map();
  const a = Array.from((n = e == null || (r = e.pollVotesCountMap) === null || r === undefined ? undefined : r.values()) !== null && n !== undefined ? n : []);
  const o = a.reduce((e, t) => e + t, 0);
  const s = Math.max(...a);
  for (const n of t) {
    var l;
    var u;
    var c;
    const t = (l = e == null || (u = e.pollVotesCountMap) === null || u === undefined ? undefined : u.get(n.localId)) !== null && l !== undefined ? l : 0;
    i.set(n, {
      isVotedForByMe: Boolean(e == null || (c = e.myVote) === null || c === undefined ? undefined : c.has(n.localId)),
      isCurrentLeader: s > 0 && t === s,
      percentageOfAll: o === 0 ? 0 : t / o,
      percentageOfMostVotedForOption: s === 0 ? 0 : t / s,
      votes: [],
      count: t
    });
  }
  return i;
};
exports.mapNewsletterVoteToDbRecord = function (e) {
  return {
    parentMsgKey: e.parentMsgKey.toString(),
    serverTimestamp: e.serverTimestamp,
    votesMap: e.voteCountMap
  };
};