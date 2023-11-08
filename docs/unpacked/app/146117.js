var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pollVotesAddOnProvider = undefined;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./577743.js");
var s = require("./702618.js");
var l = require("./963495.js");
var u = require("./123765.js");
var c = require("./803328.js");
var d = require("./373070.js");
const p = {
  type: c.MessageAddOnType.PollVote,
  matches: e => e.type === d.MSG_TYPE.POLL_UPDATE && e.subtype === "poll_vote",
  matchesFutureproof: e => e.type === d.MSG_TYPE.UNKNOWN && e.futureproofType === d.MSG_TYPE.POLL_UPDATE,
  canRenderInUi: () => true,
  processOrphansForNewMsg: (e, t, n) => (0, a.default)(function* () {
    const e = new Map();
    for (const t of n) {
      e.set(t.msgKey, t);
    }
    return (yield (0, l.processPollUpdateMsgs)(n.map(e => (0, o.assertPollVoteEncryptedMsgData)(e.parsedMsgPayload)))).map(t => {
      var n;
      var r;
      const a = t.read || (n = (r = e.get(t.msgKey.toString())) === null || r === undefined ? undefined : r.read) !== null && n !== undefined && n;
      if (t.read === a) {
        return t;
      } else {
        return (0, i.default)((0, i.default)({}, t), {}, {
          read: a
        });
      }
    });
  })(),
  updateAcks: (e, t) => (0, u.updateAddOnAcksForTable)("poll-votes", e, t),
  markAsRead: e => (0, s.markAsReadForTable)("poll-votes", e.map(String))
};
exports.pollVotesAddOnProvider = p;