var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.aggregateVotes = m;
exports.getOptionWithCount = function (e) {
  return Array.from(e.entries()).map(e => {
    let [t, n] = e;
    return {
      optionName: t.name,
      optionVoteCount: n.votes.length
    };
  }).sort((e, t) => t.optionVoteCount - e.optionVoteCount).map(e => {
    let {
      optionName: t,
      optionVoteCount: n
    } = e;
    return `${t}: ${n}`;
  }).join(", ");
};
exports.useResults = function (e) {
  const {
    id: t,
    pollOptions: n
  } = (0, p.useModelValues)(e, ["id", "pollOptions"]);
  const [a] = u.PollVoteCollection.getForParent([t]);
  const r = (0, f.default)(a, "add remove reset", () => a.toArray());
  const c = (0, o.useMarkAddOnsAsRead)();
  (0, d.useEffect)(() => {
    (0, s.populatePollVoteCollectionFor)([t]);
  }, [t]);
  (0, d.useEffect)(() => {
    if (!(0, i.arePollsNotificationsEnabled)()) {
      return;
    }
    const e = r.filter(e => !e.read);
    if (e.length !== 0) {
      c({
        addOnType: l.MessageAddOnType.PollVote,
        addOns: e.map(e => ({
          msgKey: e.msgKey,
          sender: e.sender.toString()
        }))
      });
    }
  }, [r, c]);
  return (0, d.useMemo)(() => m(r, n), [r, n]);
};
var r = a(require("../app/670983.js"));
var o = require("./111529.js");
var l = require("../app/803328.js");
var i = require("../app/671598.js");
var u = require("../app/344400.js");
var s = require("./850468.js");
var c = require("../app/459857.js");
var d = require("../vendor/667294.js");
var f = a(require("../app/524578.js"));
var p = require("../app/655241.js");
function m(e, t) {
  const n = new Map();
  let a = 0;
  let o = 0;
  for (const e of t) {
    n.set(e, {
      isVotedForByMe: false,
      isCurrentLeader: false,
      percentageOfAll: 0,
      percentageOfMostVotedForOption: 0,
      votes: [],
      count: 0
    });
  }
  const l = Array.from(e).sort((e, t) => (0, c.isMeAccount)(t.sender) ? 1 : (0, c.isMeAccount)(e.sender) ? -1 : t.timestamp - e.timestamp);
  for (const e of l) {
    for (const l of e.selectedOptionLocalIds) {
      const i = t[l];
      const u = (0, r.default)(n.get(i), `Option with local ID ${l} not found`);
      u.votes.push(e);
      a = Math.max(a, u.votes.length);
      o += 1;
      if ((0, c.isMeAccount)(e.senderObj.id)) {
        u.isVotedForByMe = true;
      }
    }
  }
  for (const e of n.values()) {
    e.percentageOfMostVotedForOption = a === 0 ? 0 : e.votes.length / a;
    e.percentageOfAll = o === 0 ? 0 : e.votes.length / o;
    e.isCurrentLeader = a > 0 && e.votes.length === a;
    e.count = e.votes.length;
  }
  return n;
}