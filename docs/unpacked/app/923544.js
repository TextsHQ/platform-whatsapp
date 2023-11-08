var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseWebMsgInfoPollUpdates = function () {
  return _.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./229079.js");
var o = r(require("./670983.js"));
var s = require("./974637.js");
var l = r(require("./565754.js"));
var u = require("./373070.js");
var c = require("./823980.js");
var d = require("./705769.js");
var p = require("./459857.js");
var f = require("./669050.js");
function _() {
  return (_ = (0, i.default)(function* (e) {
    const {
      webMsgInfo: t,
      parsedWebMsgInfo: n,
      isFromCag: r
    } = e;
    try {
      if (t == null || t.pollUpdates == null) {
        return [];
      }
      if (n == null || n.type !== u.MSG_TYPE.POLL_CREATION) {
        return [];
      }
      const e = n;
      const i = yield (0, c.createOptionLocalIdMap)(e.pollOptions);
      return t.pollUpdates.map(t => {
        try {
          const n = (0, o.default)(t.pollUpdateMessageKey, "pollUpdate.pollUpdateMessageKey");
          const u = (0, o.default)(t.vote, "pollUpdate.vote");
          const c = (0, o.default)(n.fromMe, "pollUpdateMessageKey.fromMe");
          const _ = (0, s.strictDecodeJid)(n.remoteJid);
          const g = !c && (_ == null ? undefined : _.isGroup()) ? (0, f.createUserWid)((0, o.default)(n.participant, "pollUpdateMessageKey.participant")) : undefined;
          const m = new l.default({
            fromMe: (0, o.default)(n.fromMe, "pollUpdateMessageKey.fromMe"),
            remote: (0, f.createWid)((0, o.default)(n.remoteJid, "pollUpdateMessageKey.remoteJid")),
            id: (0, o.default)(n.id, "pollUpdateMessageKey.id"),
            participant: g
          });
          const h = r ? (0, o.default)((0, p.getMaybeMeLidUser)(), "getMaybeMeLidUser()") : (0, p.getMeUser)();
          const y = m.participant || m.remote;
          const E = m.fromMe === true ? h : (0, f.toUserWid)(y);
          const S = t.serverTimestampMs == null ? null : Math.floor((0, a.numberOrThrowIfTooLarge)(t.serverTimestampMs) / 1000);
          return (0, d.voteFromProtobuf)({
            voteProtobuf: u,
            pollVoteMsgKey: m,
            parentMsgKey: e.id,
            sender: E,
            senderTimestampMs: (0, a.numberOrThrowIfTooLarge)((0, o.default)(t.senderTimestampMs, "pollUpdate.senderTimestampMs")),
            t: S,
            optionLocalIdMap: i,
            ack: null,
            read: t.unread !== true
          });
        } catch (e) {
          __LOG__(4, undefined, new Error(), true)`[history sync] Failed to parse pollUpdate with error ${e}`;
          SEND_LOGS("parseWebMsgInfoPollUpdates-vote-parse-error");
          return null;
        }
      }).filter(Boolean);
    } catch (e) {
      __LOG__(4, undefined, new Error(), true)`[history sync] parseWebMsgInfoPollUpdates failed with error ${e == null ? undefined : e.name} and stack ${e == null ? undefined : e.stack}`;
      SEND_LOGS("parseWebMsgInfoPollUpdates-error");
      return [];
    }
  })).apply(this, arguments);
}