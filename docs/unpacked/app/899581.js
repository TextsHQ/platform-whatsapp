var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upsertVotesDb = function (e) {
  const t = (0, o.maxPerGroup)(e, e => e.senderTimestampMs, u.getVoteKey);
  return (0, s.getStorage)().lock(["poll-votes"], function () {
    var e = (0, a.default)(function* (e) {
      let [n] = e;
      const r = yield n.anyOf(["parentMsgKey", "sender"], t.map(e => [e.parentMsgKey.toString(), e.sender.toString()]));
      const a = new Map();
      for (const e of r) {
        a.set((0, u.getVoteKey)(e), e);
      }
      const o = [];
      const s = [];
      for (const e of t) {
        var c;
        const t = a.get((0, u.getVoteKey)(e));
        if (t != null && t.senderTimestampMs > e.senderTimestampMs) {
          o.push((0, l.voteFromDbRow)(t));
          continue;
        }
        const n = e.selectedOptionLocalIds.length === 0;
        const r = (c = t == null ? undefined : t.read) !== null && c !== undefined && c;
        const d = !n && r && e.read !== r ? (0, i.default)((0, i.default)({}, e), {}, {
          read: true
        }) : e;
        o.push(d);
        s.push((0, l.dbRowFromVote)(d));
      }
      if (s.length > 0) {
        yield n.bulkCreateOrReplace(s);
      }
      return o;
    });
    return function () {
      return e.apply(this, arguments);
    };
  }());
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./237167.js");
var s = require("./732011.js");
var l = require("./450125.js");
var u = require("./331765.js");