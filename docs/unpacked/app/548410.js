var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addOrUpdateReactions = function () {
  return A.apply(this, arguments);
};
exports.addOrUpdateReactionsModelCollection = T;
exports.resendUpdateFailedPropsForSentReactionsDBAndModel = function () {
  return b.apply(this, arguments);
};
var i = r(require("../vendor/506479.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./775593.js");
var s = require("./402994.js");
var l = require("./31162.js");
var u = require("./65013.js");
var c = require("./590677.js");
var d = require("./702206.js");
var p = require("./224772.js");
var f = require("./803328.js");
var _ = require("./412513.js");
var g = require("./409244.js");
var m = require("./899137.js");
var h = require("./911600.js");
var y = require("./762897.js");
var E = require("./312259.js");
var S = require("./896122.js");
const v = ["senderUserJid"];
function T() {
  return M.apply(this, arguments);
}
function M() {
  return (M = (0, a.default)(function* (e, t) {
    const {
      parentMsgKey: r
    } = e;
    const {
      nonHydratedShouldMuteReactionNotification: i
    } = require("./601738.js");
    const a = t && !i(e);
    let o;
    if ((0, d.isFlattenedReactionsEnabled)()) {
      let t;
      t = a ? yield (0, p.hydrateOrGetReaction)(r) : c.FlattenedReactionsCollection.byParent(r).toArray();
      c.FlattenedReactionsCollection.addOrUpdateReaction([(0, S.convertReactionRowToFlattenedReaction)(e)]);
      if (t.length > 0 && e.reactionText !== h.REVOKED_REACTION_TEXT) {
        yield (0, _.updateHasReactionInParent)(r, true);
      }
    } else {
      o = a ? yield y.ReactionsCollection.find(r) : y.ReactionsCollection.get(r);
      if (o) {
        y.ReactionsCollection.addOrUpdateReaction(e);
        const t = o.reactions.length > 0;
        yield (0, _.updateHasReactionInParent)(r, t);
      } else if (e.reactionText !== h.REVOKED_REACTION_TEXT) {
        yield (0, _.updateHasReactionInParent)(r, true);
      }
    }
    if (a) {
      (0, g.showReactionNotification)(e);
    }
  })).apply(this, arguments);
}
function A() {
  return (A = (0, a.default)(function* (e, t) {
    const [n] = yield (0, u.createOrUpdateReactions)([e]);
    if (n) {
      T(n, t);
      return n;
    }
  })).apply(this, arguments);
}
function b() {
  return (b = (0, a.default)(function* (e) {
    const {
      senderUserJid: t
    } = e;
    const r = (0, i.default)(e, v);
    const u = y.ReactionsCollection.getExistingSenderModelFromReactionDetails(r);
    if (u == null) {
      return void __LOG__(4, undefined, new Error())`WAWebReactionsUtils:resendUpdateFailedPropsForSentReactionsDBAndModel Reactions model not found for this message id`;
    }
    const {
      MsgCollection: c
    } = require("./61113.js");
    const d = c.get(e.parentMsgKey);
    if (d) {
      const t = (0, E.getFromForReactionMessage)(d);
      const r = e.parentMsgKey.remote;
      const i = u.timestamp;
      const c = yield (0, E.getMsgJson)(d, e.reactionText, t, e.msgKey, Math.floor(i / 1000), r, i);
      const {
        Msg: p
      } = require("./772358.js");
      const _ = new p(c);
      yield (0, l.updateAddOnSendStatesAction)(new Map([[f.MessageAddOnType.Reaction, [{
        msgKey: e.msgKey.toString(),
        ack: s.ACK.CLOCK,
        isSendFailure: false
      }]]]));
      const {
        sendMsgRecord: g
      } = require("./387183.js");
      return (0, m.createNonPersistedJob)("sendMessage", (0, a.default)(function* () {
        return g(_);
      }), {
        priority: o.JOB_PRIORITY.UI_ACTION
      }).waitUntilCompleted();
    }
  })).apply(this, arguments);
}