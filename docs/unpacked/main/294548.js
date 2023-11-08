var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPollVoteMsg = T;
exports.resendVote = function () {
  return b.apply(this, arguments);
};
exports.sendVote = M;
var r = a(require("../vendor/348926.js"));
var o = require("../app/29797.js");
var l = require("../app/632157.js");
var i = require("../app/523172.js");
var u = require("../app/163755.js");
var s = require("../app/61113.js");
var c = a(require("../app/565754.js"));
var d = require("../app/772358.js");
var f = require("../app/373070.js");
var p = require("../app/356067.js");
var m = require("../app/531898.js");
var h = require("../app/397995.js");
var g = require("../app/251309.js");
var E = require("../app/263318.js");
var v = require("../app/823980.js");
var _ = require("../app/851698.js");
var y = require("../app/693741.js");
var C = require("../app/459857.js");
function b() {
  return (b = (0, r.default)(function* (e) {
    var t;
    const n = (t = s.MsgCollection.get(e.id)) === null || t === undefined ? undefined : t.safe();
    if (n == null) {
      return y.SendMsgResult.ERROR_CANCELLED;
    }
    const a = e.myVote;
    if (n.type !== f.MSG_TYPE.POLL_CREATION) {
      return y.SendMsgResult.ERROR_CANCELLED;
    } else {
      return M(n, a, e.msgKey);
    }
  })).apply(this, arguments);
}
function M() {
  return S.apply(this, arguments);
}
function S() {
  return (S = (0, r.default)(function* (e, t, n) {
    const a = (0, u.getChat)(e.unsafe());
    const r = (0, E.toNewsletterJidOrThrow)(a.id.toJid());
    const s = yield (0, v.createOptionLocalIdMap)(e.pollOptions);
    const c = Array.from(t).map(e => new Uint8Array(s.getHashForLocalId(e)));
    const f = e.unsafe();
    const {
      serverId: b
    } = f;
    if (b == null) {
      __LOG__(3)`[newsletter-polls] Message missing serverId`;
      return y.SendMsgResult.ERROR_CANCELLED;
    }
    const M = f.id;
    const S = (0, l.castToMillisTime)((0, l.unixTimeMs)());
    const w = yield T({
      to: a.id,
      selectedOptionLocalIds: t,
      parentMsgKey: M,
      timestampMs: S,
      from: (0, C.getMeUser)(),
      msgKey: n
    });
    const A = new d.Msg(w);
    const P = yield (0, i.getMyVote)(a.id.toJid(), b);
    const O = (0, m.updateOrCreatePollVote)({
      msgKey: w.id,
      parentMsgKey: M,
      selectedOptionLocalIds: t,
      timestamp: S
    });
    try {
      yield (0, g.addNewsletterMsgsRecords)([w]);
      if ((P == null ? undefined : P.msgKey) != null) {
        yield (0, _.getMessageTable)().remove(P.msgKey);
      }
      yield (0, i.createOrUpdateMyVote)({
        chatJid: a.id.toJid(),
        msgServerId: b,
        serverTimestampMs: S,
        votes: c.map(p.bufferToHex),
        msgKey: A.id.toString()
      });
      const e = yield (0, h.sendNewsletterMessageJob)({
        type: "pollVote",
        newsletterJid: r,
        msgData: w,
        parentMsgServerId: b,
        votes: c
      });
      switch (e.success) {
        case true:
          O.ack = o.ACK.SENT;
          A.updateAck(o.ACK.SENT);
          yield (0, i.updateMyVote)({
            chatJid: a.id.toJid(),
            msgServerId: b,
            ack: o.ACK.SENT,
            t: e.ack.t
          });
          return y.SendMsgResult.OK;
        case false:
          O.isSendFailure = true;
          O.ack = o.ACK.FAILED;
          A.updateAck(o.ACK.FAILED);
          yield (0, i.updateMyVote)({
            chatJid: a.id.toJid(),
            msgServerId: b,
            ack: o.ACK.FAILED,
            t: e.ack.t
          });
          return y.SendMsgResult.ERROR_NETWORK;
      }
    } catch (e) {
      A.updateAck(o.ACK.FAILED);
      O.isSendFailure = true;
      yield (0, i.updateMyVote)({
        chatJid: a.id.toJid(),
        msgServerId: b,
        ack: o.ACK.FAILED
      });
      __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter-polls] Failed to send poll vote`;
      SEND_LOGS("newsletter-polls-failed-to-send-vote", 1, "newsletter");
      throw e;
    }
  })).apply(this, arguments);
}
function T() {
  return w.apply(this, arguments);
}
function w() {
  return (w = (0, r.default)(function* (e) {
    let {
      to: t,
      selectedOptionLocalIds: n,
      parentMsgKey: a,
      timestampMs: r,
      from: l,
      msgKey: i
    } = e;
    return {
      from: l,
      type: f.MSG_TYPE.POLL_UPDATE,
      subtype: "poll_vote",
      id: i != null ? i : new c.default({
        from: l,
        id: yield c.default.newId(),
        to: t
      }),
      t: Math.floor(r / 1000),
      pollUpdateParentKey: a,
      selectedOptionLocalIds: Array.from(n),
      senderTimestampMs: r,
      ack: o.ACK.CLOCK,
      to: t
    };
  })).apply(this, arguments);
}