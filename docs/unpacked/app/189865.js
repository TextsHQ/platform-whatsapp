var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertEncReactionToReaction = function () {
  return U.apply(this, arguments);
};
exports.preProcessMsg = function () {
  return G.apply(this, arguments);
};
exports.processEditProtocolMsg = function () {
  return F.apply(this, arguments);
};
exports.processEphemeralSyncResponseMsg = function () {
  return x.apply(this, arguments);
};
exports.processKeepInChatMsg = function () {
  return B.apply(this, arguments);
};
exports.processPinMsg = function () {
  return j.apply(this, arguments);
};
exports.storePollVotesBulk = function () {
  return Y.apply(this, arguments);
};
exports.storeReactionMsgBulk = function () {
  return H.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./229079.js");
var s = r(require("./670983.js"));
var l = require("./359987.js");
var u = require("./65013.js");
var c = require("./817690.js");
var d = require("./899581.js");
var p = require("./52045.js");
var f = require("./410322.js");
var _ = require("./974637.js");
var g = require("./800321.js");
var m = require("./883310.js");
var h = require("./177205.js");
var y = require("./778650.js");
var E = require("./833476.js");
var S = require("./928563.js");
var v = require("./787742.js");
var T = require("./373070.js");
var M = require("./280464.js");
var A = require("./441425.js");
var b = require("./525119.js");
var C = require("./612919.js");
var P = require("./621974.js");
var O = require("./911600.js");
var I = require("./925884.js");
var R = require("./972574.js");
var N = require("./696859.js");
var D = require("./510607.js");
var w = require("./751047.js");
var L = require("./669050.js");
function k(e, t) {
  const n = {
    msg: e,
    receiptInfo: {
      externalId: e.id.id,
      from: (0, s.default)(e.from, "msg.from"),
      author: t.author
    }
  };
  (0, g.getMessageCache)().addMessages([n], false);
}
function G() {
  return (G = (0, a.default)(function* (e, t) {
    if (e.offline == null) {
      __LOG__(2, undefined, undefined, undefined, ["messaging"])`processDecryptedMessageProto: msgId::${e.externalId}, message decrypted: `;
    }
    if (!e.isHsm && t.highlyStructuredMessage) {
      throw new m.HsmMismatchError();
    }
    if (!(yield (0, y.isFromKnownDevice)(e.author))) {
      const t = (0, L.toUserWid)(e.author);
      if (e.offline == null) {
        (0, D.syncDeviceListJob)([t], null, null);
      } else {
        M.OfflinePendingDeviceCache.addOfflinePendingDevice(String(t), null);
      }
      throw new h.UnknownDeviceMessageError(`[messaging] msgId::${e.externalId}, processDecryptedMessageProto: reject message from unknown device`);
    }
    if (t.messageContextInfo) {
      (0, E.handleICDCData)(e.author, e.chat.isUser() ? e.chat : null, t.messageContextInfo);
    }
  })).apply(this, arguments);
}
function U() {
  return (U = (0, a.default)(function* (e) {
    const {
      targetMessageKey: t,
      encIv: r,
      encPayload: a
    } = e;
    const s = e.author ? e.author : e.id.participant;
    if (s == null) {
      throw new P.ReactionEncMessageValidationError(P.ReactionEncValidationErrorCode.MISSING_SENDER, w.E2E_FAILURE_REASON.INVALID_MESSAGE);
    }
    const l = yield (0, c.getMsgByMsgKey)(t);
    if (l == null) {
      const {
        storeMessageOrphans: t
      } = require("./522794.js");
      yield t([e], e => e.targetMessageKey);
      return Promise.resolve();
    }
    const {
      messageSecret: u
    } = l;
    if (u == null) {
      __LOG__(2, undefined, undefined, undefined, ["messaging"])`convertEncReactionToReaction: parent msg ${t.id} secret is missing`;
      throw new P.ReactionEncMessageValidationError(P.ReactionEncValidationErrorCode.MISSING_MESSAGE_SECRET, w.E2E_FAILURE_REASON.INVALID_MESSAGE, {
        sendLogs: false
      });
    }
    const d = (0, v.getOriginalSender)(l);
    if (d == null) {
      throw new P.ReactionEncMessageValidationError(P.ReactionEncValidationErrorCode.MISSING_PARENT_MESSAGE_SENDER, w.E2E_FAILURE_REASON.INVALID_MESSAGE);
    }
    const p = {
      encryptedReaction: a,
      messageSecret: u,
      iv: r,
      stanzaId: l.id.id,
      originalMessageSender: d,
      reactionSender: (0, L.toUserWid)(s)
    };
    const f = yield (0, I.parseEncReaction)(p);
    const g = (0, _.convertToTextWithoutSpecialEmojis)(f.text);
    const m = f.senderTimestampMs;
    if (m == null) {
      throw new R.ReactionValidationError(R.ReactionValidationErrorCode.MISSING_TIMESTAMP, w.E2E_FAILURE_REASON.INVALID_MESSAGE);
    }
    return (0, i.default)((0, i.default)({}, e), {}, {
      type: T.MSG_TYPE.REACTION,
      reactionParentKey: t,
      reactionText: g == null ? undefined : g,
      reactionTimestamp: (0, o.numberOrThrowIfTooLarge)(m),
      encPayload: undefined,
      targetMessageKey: undefined,
      encIv: undefined
    });
  })).apply(this, arguments);
}
function x() {
  return (x = (0, a.default)(function* (e, t, n) {
    if (t.offline != null && !n) {
      return k(e, t);
    }
    yield (0, l.frontendSendAndReceive)("processEphemeralSyncResponse", {
      msg: e
    });
  })).apply(this, arguments);
}
function B() {
  return (B = (0, a.default)(function* (e, t, n) {
    if (t.offline != null && !n) {
      return k(e, t);
    }
    yield (0, l.frontendSendAndReceive)("processKeepInChatMessage", {
      keepInChatMessage: e,
      allowNotification: true
    });
  })).apply(this, arguments);
}
function F() {
  return (F = (0, a.default)(function* (e, t, n) {
    const r = (0, b.isMatFullyEnabled)() ? yield (0, C.processEditMatMessages)(e) : e;
    if (t.offline != null && !n) {
      return k(r, t);
    }
    yield (0, p.processEditProtocolMsgs)([r], n);
  })).apply(this, arguments);
}
function j() {
  return (j = (0, a.default)(function* (e, t, n) {
    if (t.offline != null && !n) {
      return k(e, t);
    }
    yield (0, A.processPinMessages)(e.id.remote, [e]);
  })).apply(this, arguments);
}
function Y() {
  return (Y = (0, a.default)(function* (e) {
    const t = yield (0, d.upsertVotesDb)(e);
    (0, l.frontendFireAndForget)("upsertVotesModelCollection", {
      votes: t,
      restoredFromDb: true
    });
    yield K(t.map(e => (0, S.lastAddOnPreviewCandidateFromVoteData)(e, false)));
  })).apply(this, arguments);
}
function K() {
  return W.apply(this, arguments);
}
function W() {
  return (W = (0, a.default)(function* (e) {
    const t = yield (0, N.filterChatsWithAddOnPreviewUpdates)(e);
    if (t.size > 0) {
      yield (0, f.updateDatabaseForLastAddOnPreview)(t);
      (0, l.frontendFireAndForget)("updateChatLastAddOnPreview", {
        chatMap: t
      });
    }
  })).apply(this, arguments);
}
function V(e) {
  let {
    id: t,
    reactionTimestamp: n,
    reactionText: r,
    reactionParentKey: i,
    sender: a,
    unread: o
  } = e;
  const s = (0, L.toUserWid)(a);
  return {
    msgKey: t.toString(),
    parentMsgKey: i.toString(),
    senderUserJid: s.toString(),
    reactionText: r != null ? r : O.REVOKED_REACTION_TEXT,
    timestamp: n,
    orphan: 0,
    read: !o
  };
}
function H() {
  return (H = (0, a.default)(function* (e) {
    const t = e.map(e => V(e));
    t.map(e => `${e.msgKey.toString()} to ${e.parentMsgKey}`).toString();
    const n = yield (0, u.createOrUpdateReactions)(t);
    if (n) {
      yield K(n.map(e => (0, S.lastAddOnPreviewCandidateFromReactionRowType)(e)));
    }
    return n;
  })).apply(this, arguments);
}