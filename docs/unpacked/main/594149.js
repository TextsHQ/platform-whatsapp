var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendReactionToMsg = function () {
  return N.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/775593.js");
var l = require("../app/632157.js");
var i = require("../app/402994.js");
var u = require("../app/364622.js");
var s = require("../app/410322.js");
var c = require("../app/163755.js");
var d = require("../app/928563.js");
var f = require("../app/566509.js");
var p = require("../app/141797.js");
var m = require("../app/420213.js");
var h = a(require("../app/565754.js"));
var g = require("../app/772358.js");
var E = require("../app/73225.js");
var v = require("./526260.js");
var _ = require("../app/899137.js");
var y = require("./974232.js");
var C = require("./705545.js");
var b = require("../app/911600.js");
var M = require("../app/548410.js");
var S = require("../app/312259.js");
var T = require("./474474.js");
var w = require("../app/851698.js");
var A = require("../app/387183.js");
var P = require("../app/693741.js");
var O = require("../app/696859.js");
var k = require("../app/251444.js");
var D = require("./959245.js");
var I = require("../app/669050.js");
var R = a(require("../app/556869.js"));
function N() {
  return (N = (0, r.default)(function* (e, t) {
    if ((0, c.getChat)(e).isNewsletter) {
      if (!(0, E.isNewsletterReactionEnabled)()) {
        return;
      }
      return (0, v.sendNewsletterReaction)(e, t).then(e => ({
        messageSendResult: e
      }));
    }
    const n = (0, c.getChat)(e).id;
    const a = (0, S.getFromForReactionMessage)(e);
    const N = (0, c.getChat)(e).isGroup ? (0, I.toUserWid)(a) : undefined;
    const x = new h.default({
      from: a,
      to: n,
      id: yield h.default.newId(),
      participant: N,
      selfDir: "out"
    });
    const L = (0, l.unixTime)();
    let j = L * 1000;
    const B = {
      msgKey: x.toString(),
      parentMsgKey: e.id.toString(),
      senderUserJid: a.toString(),
      reactionText: t,
      timestamp: j,
      orphan: 0,
      read: true,
      ack: i.ACK.CLOCK
    };
    const F = yield (0, u.existsReaction)({
      parentMsgKey: B.parentMsgKey,
      senderUserJid: B.senderUserJid
    });
    if (F) {
      j = Math.max(F.timestamp + 1, j);
    }
    B.timestamp = j;
    const G = yield (0, S.getMsgJson)(e, t, a, x, L, n, j);
    const U = new g.Msg(G);
    U.wamMessageSendReporter = new p.MessageSendReporter(U);
    U.wamMessageSendPerfReporter = new f.MessageSendPerfReporter({
      chatWid: U.to,
      mediaType: U.getWamMediaType(),
      messageType: U.getWamMessageType()
    });
    const {
      wamMessageSendPerfReporter: W
    } = U;
    if (t !== b.REVOKED_REACTION_TEXT) {
      W.startRenderedStage();
      yield (0, M.addOrUpdateReactions)(B, false);
      W.postRenderedStage();
      (0, T.updateRecentReaction)(t, j);
      const e = yield (0, O.filterChatsWithAddOnPreviewUpdates)([(0, d.lastAddOnPreviewCandidateFromReactionRowType)(B)]);
      if (e.size > 0) {
        yield (0, s.updateDatabaseForLastAddOnPreview)(e);
        (0, k.updateModelsForLastAddOnPreview)(e);
      }
    }
    return (0, _.createNonPersistedJob)("sendMessage", (0, r.default)(function* () {
      try {
        W.startSavedStage();
        yield (0, m.storeMessages)([G], (0, c.getChat)(e).id);
        W.postSavedStage();
      } catch (e) {
        __LOG__(4, true, new Error(), true)`sendReaction: failed to store sent reaction message into Message storage`;
        SEND_LOGS("storeSentReaction failed");
        throw e;
      }
      if (F) {
        var n;
        const r = t !== b.REVOKED_REACTION_TEXT ? D.REACTION_ACTION_TYPE.UPDATE : D.REACTION_ACTION_TYPE.DELETE;
        new C.ReactionActionsWamEvent({
          mediaType: e.getWamMediaType(),
          messageType: e.getWamMessageType(),
          reactionAction: r
        }).commit();
        if (t === b.REVOKED_REACTION_TEXT && ((n = (0, c.getChat)(e).groupMetadata) === null || n === undefined ? undefined : n.isIncognitoCag)) {
          var a;
          const t = (a = (0, c.getChat)(e).groupMetadata) === null || a === undefined ? undefined : a.parentGroup;
          if (t) {
            (0, y.incrementPnhDailyCount)(t, y.PnhCagDailyMetricsType.REACTION_DELETE_COUNT);
          }
        }
        yield (0, w.getMessageTable)().remove(F.msgKey);
      }
      const r = yield (0, A.sendMsgRecord)(U);
      if (r.messageSendResult === P.SendMsgResult.OK && t === b.REVOKED_REACTION_TEXT) {
        yield (0, M.addOrUpdateReactions)(B, false);
        const e = yield (0, O.filterChatsWithAddOnPreviewUpdates)([(0, d.lastAddOnPreviewCandidateFromReactionRowType)(B)]);
        if (e.size > 0) {
          yield (0, s.updateDatabaseForLastAddOnPreview)(e);
          (0, k.updateModelsForLastAddOnPreview)(e);
        }
      }
      if (r.messageSendResult !== P.SendMsgResult.OK) {
        throw (0, R.default)("Reactions send Error");
      }
      return r;
    }), {
      priority: o.JOB_PRIORITY.UI_ACTION
    }).waitUntilCompleted();
  })).apply(this, arguments);
}