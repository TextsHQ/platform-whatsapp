var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resendVote = function () {
  return G.apply(this, arguments);
};
exports.sendVote = function () {
  return F.apply(this, arguments);
};
var r = a(require("../vendor/81109.js"));
var o = a(require("../vendor/348926.js"));
var l = require("../app/775593.js");
var i = a(require("../app/670983.js"));
var u = require("../app/632157.js");
var s = require("../app/402994.js");
var c = require("../app/317851.js");
var d = require("./18960.js");
var f = require("../app/428261.js");
var p = require("../app/163755.js");
var m = require("../app/803328.js");
var h = require("../app/566509.js");
var g = require("../app/141797.js");
var E = require("../app/787742.js");
var v = a(require("../app/565754.js"));
var _ = require("../app/772358.js");
var y = require("../app/430231.js");
var C = require("../app/73225.js");
var b = require("../app/587846.js");
var M = require("./294548.js");
var S = require("../app/899137.js");
var T = require("./561820.js");
var w = require("./116230.js");
var A = require("../app/344400.js");
var P = require("./730263.js");
var O = require("../app/600240.js");
var k = require("../app/851698.js");
var D = require("./251446.js");
var I = require("../app/387183.js");
var R = require("../app/693741.js");
var N = require("../app/459857.js");
var x = require("../app/684290.js");
var L = require("./607693.js");
var j = a(require("../app/124928.js"));
var B = a(require("../app/556869.js"));
function F() {
  return (F = (0, o.default)(function* (e, t) {
    if (j.default.isNewsletter(e.id.remote)) {
      if ((0, C.isNewsletterPollsReceivingEnabled)()) {
        return void (yield (0, M.sendVote)(e, t));
      } else {
        return void __LOG__(4, undefined, new Error())`Newsletter polls are not supported yet`;
      }
    }
    yield U(e, t);
  })).apply(this, arguments);
}
function G() {
  return (G = (0, o.default)(function* (e) {
    if (e instanceof b.NewsletterPollVotes) {
      yield (0, M.resendVote)(e);
    } else {
      yield U(e.parentMsg, new Set(e.selectedOptionLocalIds), e.msgKey);
    }
  })).apply(this, arguments);
}
function U() {
  return W.apply(this, arguments);
}
function W() {
  return (W = (0, o.default)(function* (e, t, a) {
    var C;
    const b = (0, p.getChat)(e.unsafe());
    const M = (b == null ? undefined : b.isCAG) || (b == null ? undefined : b.id.isLid()) || b.isGroup && Boolean((C = b.groupMetadata) === null || C === undefined ? undefined : C.isLidAddressingMode) ? (0, i.default)((0, N.getMaybeMeLidUser)(), "getMaybeMeLidUser()") : (0, N.assertGetMeUser)();
    const j = e.id.remote;
    const F = a != null;
    const G = a != null ? a : new v.default({
      from: M,
      to: j,
      id: yield v.default.newId(),
      participant: (0, E.getIsGroupMsg)(e.unsafe()) ? M : undefined,
      selfDir: "out"
    });
    const U = (0, y.getReferentialKey)(e);
    const W = (0, u.unixTimeMs)();
    const H = new h.MessageSendPerfReporter({
      chatWid: e.id.remote,
      mediaType: x.MEDIA_TYPE.POLL_VOTE,
      messageType: e.getWamMessageType()
    });
    const V = {
      msgKey: G,
      parentMsgKey: U,
      selectedOptionLocalIds: Array.from(t),
      senderTimestampMs: W,
      t: Math.floor(W / 1000),
      sender: M,
      ack: s.ACK.CLOCK,
      read: true
    };
    H.startRenderedStage();
    (0, P.upsertVotesModelCollection)([V], false);
    H.postRenderedStage();
    const [q] = A.PollVoteCollection.getForParent([U]);
    const Y = (0, i.default)(q.getVoteFromSender(M), "pollVoteCollection.getVoteFromSender(sender)");
    try {
      const a = yield (0, d.getVote)(U, M);
      const i = a == null ? (0, u.unixTimeMs)() : Math.max(a.senderTimestampMs + 1, (0, u.unixTimeMs)());
      Y.senderTimestampMs = i;
      const h = (0, r.default)((0, r.default)({}, V), {}, {
        senderTimestampMs: i
      });
      const E = yield (0, w.createPollUpdateVoteMsg)(h, e);
      const v = new _.Msg(E);
      v.wamMessageSendReporter = new g.MessageSendReporter(v);
      v.wamMessageSendPerfReporter = H;
      yield (0, O.processPollUpdatesMsgsJob)([E]);
      if (F) {
        const {
          updateAddOnSendStatesAction: e
        } = require("../app/31162.js");
        yield e(new Map([[m.MessageAddOnType.PollVote, [{
          msgKey: h.msgKey.toString(),
          ack: s.ACK.CLOCK,
          isSendFailure: false
        }]]]));
      }
      if ((0, c.isUnifiedPollAddonInfraEnabled)()) {
        if ((yield (0, D.addAndSendAddonToChat)(E)).messageSendResult !== R.SendMsgResult.OK) {
          throw (0, B.default)("Vote send error");
        }
      } else {
        const e = (0, S.createNonPersistedJob)("sendMessage", (0, o.default)(function* () {
          if (!F) {
            try {
              H.startSavedStage();
              yield (0, f.storeMessages)([E], j);
              H.postSavedStage();
            } catch (e) {
              __LOG__(4, true, new Error(), true)`sendVote: failed to store sent poll vote message into Message storage`;
              SEND_LOGS("store-sent-poll-vote-msg-failed");
              throw e;
            }
            if (a != null) {
              yield (0, k.getMessageTable)().remove(a.msgKey.toString());
            }
          }
          const e = yield (0, I.sendMsgRecord)(v);
          if (e.messageSendResult !== R.SendMsgResult.OK) {
            throw (0, B.default)("Vote send error");
          }
          return e;
        }), {
          priority: l.JOB_PRIORITY.UI_ACTION
        });
        yield e.waitUntilCompleted();
      }
      let y;
      y = t.size > 0 ? a ? L.POLL_ACTION_TYPE.CHANGE_VOTE : L.POLL_ACTION_TYPE.VOTE : L.POLL_ACTION_TYPE.REMOVE_VOTE;
      (0, T.commitPollsActionsMetric)({
        action: y,
        chat: (0, p.getChat)(e.unsafe()),
        creationDateInSeconds: e.t,
        pollOptionsCount: e.pollOptions.length
      });
    } catch (e) {
      Y.isSendFailure = true;
      throw e;
    }
  })).apply(this, arguments);
}