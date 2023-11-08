var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendNewsletterReaction = function () {
  return A.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/29797.js");
var l = require("../app/775593.js");
var i = require("../app/632157.js");
var u = require("../app/31162.js");
var s = require("../app/364622.js");
var c = require("../app/163755.js");
var d = require("../app/61113.js");
var f = require("../app/678794.js");
var p = a(require("../app/565754.js"));
var m = require("../app/772358.js");
var h = require("../app/727615.js");
var g = require("../app/523497.js");
var E = require("../app/397995.js");
var v = require("../app/251309.js");
var _ = require("../app/263318.js");
var y = require("../app/899137.js");
var C = require("../app/911600.js");
var b = require("../app/548410.js");
var M = require("../app/312259.js");
var S = require("../app/851698.js");
var T = require("../app/693741.js");
var w = require("../app/459857.js");
function A() {
  return (A = (0, r.default)(function* (e, t) {
    const n = e instanceof p.default ? d.MsgCollection.get(e) : e;
    if (n == null) {
      __LOG__(3)`[sendNewsletterReaction] Could not find message for msgKey`;
      return T.SendMsgResult.ERROR_CANCELLED;
    }
    const {
      serverId: a
    } = n;
    if (a == null) {
      __LOG__(3)`[sendNewsletterReaction] Message missing serverId`;
      return T.SendMsgResult.ERROR_CANCELLED;
    }
    const u = (0, w.getMeUser)();
    const g = (0, c.getChat)(n).id;
    const A = (0, i.unixTime)();
    const O = A * 1000;
    const k = new p.default({
      from: u,
      to: g,
      id: yield p.default.newId()
    });
    const D = yield (0, M.getMsgJson)(n, t, u, k, A, g, O);
    const I = {
      msgKey: k.toString(),
      parentMsgKey: (0, h.craftNewsletterMsgKeyFromServerId)(a, g).toString(),
      senderUserJid: u.toString(),
      reactionText: t,
      timestamp: O,
      orphan: 0,
      read: true,
      ack: o.ACK.CLOCK
    };
    const R = new m.Msg(D);
    return (0, y.createNonPersistedJob)("sendNewsletterReaction", (0, r.default)(function* () {
      const e = yield (0, s.existsReaction)({
        parentMsgKey: I.parentMsgKey,
        senderUserJid: I.senderUserJid
      });
      if (t !== C.REVOKED_REACTION_TEXT) {
        yield P(n, R, {
          reactionCode: t
        });
        yield (0, b.addOrUpdateReactions)(I, false);
      }
      try {
        if (e != null) {
          yield (0, S.getMessageTable)().remove(e.msgKey);
        }
        yield (0, v.addNewsletterMsgsRecords)([(0, f.msgDataFromMsgModel)(R)]);
        const r = yield (0, E.sendNewsletterMessage)({
          type: "reaction",
          reactionCode: t,
          newsletterJid: (0, _.toNewsletterJidOrThrow)(g.toJid()),
          parentMsgServerId: a,
          msgData: (0, f.msgDataFromMsgModel)(R)
        });
        switch (r.success) {
          case true:
            yield P(n, R, {
              reactionCode: t === C.REVOKED_REACTION_TEXT ? t : null,
              timestamp: r.ack.t
            });
            if (t === C.REVOKED_REACTION_TEXT) {
              yield (0, b.addOrUpdateReactions)(I, false);
            }
            return T.SendMsgResult.OK;
          case false:
            R.updateAck(o.ACK.FAILED);
            return T.SendMsgResult.ERROR_NETWORK;
        }
      } catch (e) {
        __LOG__(3, undefined, undefined, undefined, ["newsletter"])`[newsletter] Failed to send reaction`;
        R.updateAck(o.ACK.FAILED, undefined);
        return T.SendMsgResult.ERROR_NETWORK;
      }
    }), {
      priority: l.JOB_PRIORITY.UI_ACTION
    }).waitUntilCompleted();
  })).apply(this, arguments);
}
function P() {
  return O.apply(this, arguments);
}
function O() {
  return (O = (0, r.default)(function* (e, t, n) {
    const {
      reactionCode: a,
      timestamp: r
    } = n;
    var l;
    if (a != null) {
      (0, g.updateOrCreateMessageReaction)({
        parentMsg: e,
        reactionMsg: t,
        reactionCode: a
      });
    }
    if (r != null) {
      if (!((l = g.NewsletterMessageReactionsCollection.get(e.id)) === null || l === undefined)) {
        l.set("myReactionTs", r);
      }
      t.updateAck(o.ACK.SENT);
      yield (0, u.maybeUpdateAddOnAckForMsgAction)(t, o.ACK.SENT);
    }
  })).apply(this, arguments);
}