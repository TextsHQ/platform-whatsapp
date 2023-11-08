var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upsertVotesModelCollection = function (e) {
  let t = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
  const n = (0, c.maxPerGroup)(e, e => e.senderTimestampMs, g.getVoteKey);
  const a = [];
  const y = [];
  for (const e of n) {
    const [n] = E.PollVoteCollection.getForParent([e.parentMsgKey]);
    const r = n.getVoteFromSender(e.sender);
    if (!(r != null && (r.senderTimestampMs > e.senderTimestampMs || r.msgKey.equals(e.msgKey)))) {
      if (r != null) {
        a.push(r);
      }
      y.push((0, E.createPollVoteModel)((0, o.default)((0, o.default)({}, e), {}, {
        isSendFailure: t && e.ack === u.ACK.CLOCK && (0, _.isMeAccount)(e.sender)
      })));
    }
  }
  if (y.length > 0) {
    E.PollVoteCollection.add(y);
  }
  if (a.length > 0) {
    E.PollVoteCollection.remove(a);
  }
  if ((0, h.arePollsNotificationsEnabled)()) {
    (0, r.default)(function* () {
      if (t || (0, m.isOfflineResumeInProgress)()) {
        return;
      }
      const n = (0, l.default)(e.filter(e => !(0, _.isMeAccount)(e.sender)).map(e => e.parentMsgKey), String);
      const a = (yield d.MsgCollection.hydrateOrGetMessages(Array.from(n, String))).map(e => {
        const t = (0, s.getAsPollCreation)(e);
        if (t == null) {
          __LOG__(4, undefined, new Error(), true)`[upsertVotesModelCollection][notifications] Msg is not a pollCreationMsg`;
          SEND_LOGS(`msg-type-${e.type}-not-poll-creation-msg`);
        }
        return t;
      }).filter(Boolean).filter(e => (0, f.getIsSentByMe)(e));
      yield (0, v.populatePollVoteCollectionFor)(n);
      for (const e of a) {
        const [t] = E.PollVoteCollection.getForParent([e.id]);
        if (t.getUnreadCount() > 0) {
          (0, p.showPollVoteNotification)(e).catch((0, i.catchAbort)(e => {
            __LOG__(2)`[Polls] Aborted notification ${e}`;
          }));
        }
      }
    })();
  }
};
var r = a(require("../vendor/348926.js"));
var o = a(require("../vendor/81109.js"));
var l = a(require("../vendor/545578.js"));
var i = require("../app/898817.js");
var u = require("../app/29797.js");
var s = require("../app/163755.js");
var c = require("../app/237167.js");
var d = require("../app/61113.js");
var f = require("../app/787742.js");
var p = require("../app/409244.js");
var m = require("../app/545413.js");
var h = require("../app/671598.js");
var g = require("../app/331765.js");
var E = require("../app/344400.js");
var v = require("./850468.js");
var _ = require("../app/459857.js");