var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateNewsletterMessageUI = function () {
  return T.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./29797.js");
var o = require("./418987.js");
var s = require("./632157.js");
var l = require("./163755.js");
var u = require("./61113.js");
var c = require("./787742.js");
var d = require("./373070.js");
var p = r(require("./358533.js"));
var f = require("./727615.js");
var _ = require("./362626.js");
var g = require("./629488.js");
var m = require("./531898.js");
var h = require("./523497.js");
var y = require("./126592.js");
var E = require("./548410.js");
var S = require("./132255.js");
var v = require("./459857.js");
function T() {
  return (T = (0, i.default)(function* (e, t) {
    const n = (0, o.toNewsletterJid)(t.toJid());
    let r = p.default.get(t);
    if (r == null) {
      r = yield (0, y.queryAndUpdateNewsletterMetadataAction)(n);
      if (r != null) {
        p.default.add(r);
      }
    }
    if (r == null) {
      return void (yield (0, _.deleteNewsletterChat)(t));
    }
    if (e.type === "reaction") {
      return M(e);
    }
    if (e.type === "poll_update") {
      if (e.subtype === "poll_vote") {
        return b(e);
      } else {
        return undefined;
      }
    }
    if (e.subtype === "admin_revoke") {
      return C(e, t);
    }
    if (e.type === d.MSG_TYPE.PROTOCOL) {
      return;
    }
    const i = yield r.addQueue.enqueue(Promise.resolve(e));
    r.msgs.add(i);
  })).apply(this, arguments);
}
function M() {
  return A.apply(this, arguments);
}
function A() {
  return (A = (0, i.default)(function* (e) {
    const t = u.MsgCollection.get(e.reactionParentKey);
    const {
      reactionText: n
    } = e;
    if (t == null) {
      return;
    }
    const {
      serverId: r
    } = t;
    if (r == null) {
      return;
    }
    (0, h.updateOrCreateMessageReaction)({
      parentMsg: t,
      reactionMsg: e,
      reactionCode: n
    });
    const i = {
      msgKey: e.id.toString(),
      parentMsgKey: (0, f.craftNewsletterMsgKeyFromServerId)(r, e.from).toString(),
      senderUserJid: (0, v.getMeUser)().toString(),
      reactionText: n,
      timestamp: e.t * 1000,
      orphan: 0,
      read: true,
      ack: a.ACK.SENT
    };
    yield (0, E.addOrUpdateReactionsModelCollection)(i, false);
  })).apply(this, arguments);
}
function b(e) {
  if (e.pollUpdateParentKey == null) {
    return;
  }
  const t = u.MsgCollection.get(e.pollUpdateParentKey);
  if (t == null || e.type !== d.MSG_TYPE.POLL_UPDATE) {
    return;
  }
  const {
    senderTimestampMs: n
  } = e;
  (0, m.updateOrCreatePollVote)({
    msgKey: e.id,
    parentMsgKey: t.id,
    selectedOptionLocalIds: new Set(e.selectedOptionLocalIds),
    timestamp: n != null ? (0, s.castToMillisTime)(n) : (0, s.castUnixTimeToMillisTime)((0, s.castToUnixTime)(e.t))
  });
}
function C() {
  return P.apply(this, arguments);
}
function P() {
  return (P = (0, i.default)(function* (e, t) {
    var n;
    const r = (n = p.default.get(t)) === null || n === undefined ? undefined : n.msgs.get(e.protocolMessageKey);
    if (r == null) {
      return Promise.resolve();
    } else {
      yield (0, g.removeMessageDeliveryUpdates)((0, l.getChat)(r), [r]);
      return Promise.resolve((0, S.revoke)(r, {
        subtype: e.subtype,
        msgKey: e.id,
        sender: (0, c.getIsSentByMe)(e) ? (0, v.getMeUser)() : e.from,
        revokeTimestamp: e.t
      }));
    }
  })).apply(this, arguments);
}