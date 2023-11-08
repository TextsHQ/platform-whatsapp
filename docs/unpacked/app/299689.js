var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = c.incomingMsgParser.parse(e);
  if (t.error) {
    __LOG__(3, undefined, undefined, undefined, ["messaging"])`handleMsg: error while parsing message stanza`;
    (0, T.postUnknownStanzaMetric)(e);
    const t = c.incomingMsgParserForAckOnly.parse(e);
    if (t.error) {
      __LOG__(2, undefined, undefined, undefined, ["messaging"])`handleMsg: error while parsing message for ack only: ${t.error}`;
      (0, v.postIncomingMessageDropInvalidStanza)(e);
      return Promise.resolve((0, o.createNackFromStanza)(e, o.NackReason.ParsingError));
    }
    const {
      externalId: n,
      from: r,
      type: i,
      participant: a
    } = t.success;
    let s = o.NackReason.ParsingError;
    if (i == null) {
      s = o.NackReason.UnrecognizedStanzaType;
      (0, v.postIncomingMessageDropUnknownMessageType)(e);
    } else {
      (0, v.postIncomingMessageDropInvalidStanza)(e);
    }
    if ((0, h.isSendMessageDropNackEnabled)()) {
      return Promise.resolve((0, o.createNackFromStanza)(e, s));
    } else {
      return Promise.resolve((0, p.sendAck)(n, r, i, a));
    }
  }
  const n = t.success;
  (0, g.maybePostOfflineCountTooHigh)(n);
  const {
    msgMeta: r,
    msgInfo: A,
    msgBotInfo: b,
    encs: C
  } = n;
  A.clientReceivedTsMillis = (0, a.unixTimeMs)();
  if (A.offline != null) {
    S.OfflineMessageHandler.addOfflinePendingMessage();
    S.OfflineMessageHandler.offlineStanzaReceivedAfterComplete();
  }
  if (S.OfflineMessageHandler.isResumeFromRestartComplete()) {
    delete n.msgInfo.offline;
  }
  undefined;
  return (0, m.handleMessage)(A.chat.toString(), !!n.msgInfo.offline, (0, i.default)(function* () {
    var e;
    A.msgProcessStartTsMillis = (0, a.unixTimeMs)();
    (0, M.processPhoneNumberMapping)(A, r, A.offline == null);
    if (r.isUnavailable) {
      __LOG__(2, undefined, undefined, undefined, ["messaging"])`handleMessage: msgId::${A.externalId}, get fanout placeholder`;
      let e = _.PlaceholderType.FANOUT;
      if (b != null) {
        e = _.PlaceholderType.BOT_UNAVAILABLE_FANOUT;
      }
      yield (0, d.processPlaceholderMsg)(A, e);
      return void (0, f.sendReceipt)(A, r, {
        result: _.E2EProcessResult.BACKFILL
      });
    }
    __LOG__(2, undefined, undefined, undefined, ["messaging"])`handleMessage: msgId::${A.externalId}, start processing message, offline="${(e = A.offline) !== null && e !== undefined ? e : ""}"`;
    const t = yield (0, E.decryptE2EPayload)(n, d.processDecryptedMessageProto);
    if (A.offline != null) {
      S.OfflineMessageHandler.processMessageDecryptResult(t.result);
    }
    if (t.result === _.E2EProcessResult.SIGNAL_OLD_COUNTER_ERROR && function (e) {
      const {
        msgMeta: t,
        encs: n
      } = e;
      if (n.some(e => e.hideFail)) {
        return (0, u.isReactionMsgMeta)(t) || (0, u.isPollVoteMsgMeta)(t);
      }
      return t.type === l.STANZA_MSG_TYPES.text || t.type === l.STANZA_MSG_TYPES.media || t.type === l.STANZA_MSG_TYPES.poll;
    }(n)) {
      (0, s.getMessageCache)().addMessages([{
        duplicateMsgReceiptInfo: {
          externalId: A.externalId,
          from: (0, y.getFrom)(A),
          author: A.author,
          msgInfo: A,
          msgMeta: r,
          enc: t.failedEnc || C[0],
          hasHideFailEnc: C.some(e => e.hideFail)
        }
      }], A.offline == null);
    } else if (A.offline == null || A.category === l.CATEGORY_PEER || t.result !== _.E2EProcessResult.SUCCESS && t.result !== _.E2EProcessResult.SIGNAL_OLD_COUNTER_ERROR) {
      (0, f.sendReceipt)(A, r, t);
    } else {
      (0, s.getMessageCache)().addMessages([{
        receiptInfo: {
          externalId: A.externalId,
          from: (0, y.getFrom)(A),
          author: A.author
        }
      }], false);
    }
  }));
};
var i = r(require("../vendor/348926.js"));
var a = require("./632157.js");
var o = require("./400627.js");
var s = require("./800321.js");
var l = require("./883310.js");
var u = require("./138082.js");
var c = require("./467302.js");
var d = require("./143130.js");
var p = require("./763961.js");
var f = require("./852694.js");
var _ = require("./257845.js");
var g = require("./922019.js");
var m = require("./412985.js");
var h = require("./790215.js");
var y = require("./267420.js");
var E = require("./881077.js");
var S = require("./359484.js");
var v = require("./126249.js");
var T = require("./311660.js");
var M = require("./89812.js");