var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.populatePollVoteCollectionFor = function () {
  return s.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("./18960.js");
var l = require("../app/344400.js");
var i = require("./730263.js");
const u = new WeakSet();
function s() {
  return (s = (0, r.default)(function* (e) {
    const t = l.PollVoteCollection.getForParent(e).map((t, n) => ({
      votesForParent: t,
      parentMsgKey: e[n]
    })).filter(e => {
      let {
        votesForParent: t
      } = e;
      return !u.has(t);
    });
    for (const {
      votesForParent: e
    } of t) {
      u.add(e);
    }
    const n = yield (0, o.getVotes)(t.map(e => {
      let {
        parentMsgKey: t
      } = e;
      return t;
    }));
    (0, i.upsertVotesModelCollection)(n);
  })).apply(this, arguments);
}