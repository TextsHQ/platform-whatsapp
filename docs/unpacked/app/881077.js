var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decryptE2EPayload = function () {
  return A.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./122583.js");
var o = require("./557063.js");
var s = require("./287461.js");
var l = require("./678002.js");
var u = require("./303754.js");
var c = require("./973776.js");
var d = require("./883310.js");
var p = require("./177205.js");
var f = require("./143130.js");
var _ = require("./257845.js");
var g = require("./790215.js");
var m = require("./267420.js");
var h = require("./952243.js");
var y = require("./872662.js");
var E = require("./859267.js");
var S = require("./126249.js");
var v = require("./525773.js");
var T = require("./91923.js");
var M = require("./76256.js");
function A() {
  return (A = (0, i.default)(function* (e, t) {
    const {
      bizInfo: n,
      msgInfo: r,
      paymentInfo: u,
      deviceIdentity: A,
      encs: C,
      msgMeta: P,
      rcat: O,
      hsmInfo: I,
      msgBotInfo: R
    } = e;
    const N = (0, m.getFrom)(r);
    b(C, r);
    if (r.author.device != null && r.author.device !== 0) {
      if (!(yield (0, l.validateADVwithEncs)(r.author, A, C, !!r.offline))) {
        __LOG__(3, undefined, undefined, undefined, ["messaging"])`decryptE2EPayload: msgId::${r.externalId}, validateADVIdentity failed`;
        return {
          result: _.E2EProcessResult.RETRY,
          retryCount: C[0].retryCount,
          retryReason: v.RetryReason.AdvFailure
        };
      }
    }
    if ((0, s.getABPropConfigValue)("web_migrate_message_decrypt_api")) {
      let i = false;
      const a = (0, y.createDecryptionHandler)(e);
      for (const o of C) {
        if (a.canDecryptNext(o)) {
          try {
            const a = yield (0, h.decryptEnc)(o, N, r.author, e);
            __LOG__(2, undefined, undefined, undefined, ["messaging"])`decryptE2EPayload: msgId::${r.externalId} e2eType:${o.e2eType} done`;
            (0, E.postSuccessE2eMessageRecvMetric)({
              enc: o,
              from: N,
              msgMeta: P,
              msgInfo: r
            });
            const s = {
              retryCount: o.retryCount,
              e2eType: o.e2eType,
              encMediaType: o.encMediaType,
              hideFail: o.hideFail
            };
            if ((yield t({
              decrypted: a,
              info: r,
              paymentInfo: u,
              e2eInfo: s,
              bizInfo: n,
              hsmInfo: I,
              msgMeta: P,
              rcat: O,
              msgBotInfo: R
            })).hasInactiveMsg) {
              i = true;
            }
            __LOG__(2, undefined, undefined, undefined, ["messaging"])`processDecryptedProto: msgId::${r.externalId} e2eType:${o.e2eType} done`;
          } catch (e) {
            a.handleError(o, e);
          }
        }
      }
      yield (0, M.getSignalProtocolStore)().flushBufferToDiskIfNotMemOnlyMode();
      return a.getResult(i);
    }
    const D = yield (0, o.promiseReduce)(e.encs, (o, s) => o.result !== _.E2EProcessResult.SUCCESS ? Promise.resolve(o) : (0, h.decryptEnc)(s, N, r.author, e).then(function () {
      var e = (0, i.default)(function* (e) {
        __LOG__(2, undefined, undefined, undefined, ["messaging"])`decryptE2EPayload: msgId::${r.externalId} e2eType:${s.e2eType} done`;
        (0, E.postSuccessE2eMessageRecvMetric)({
          enc: s,
          from: N,
          msgMeta: P,
          msgInfo: r
        });
        const i = {
          retryCount: s.retryCount,
          e2eType: s.e2eType,
          encMediaType: s.encMediaType,
          hideFail: s.hideFail
        };
        const {
          hasInactiveMsg: a
        } = yield t({
          decrypted: e,
          info: r,
          paymentInfo: u,
          e2eInfo: i,
          bizInfo: n,
          hsmInfo: I,
          msgMeta: P,
          rcat: O,
          msgBotInfo: R
        });
        __LOG__(2, undefined, undefined, undefined, ["messaging"])`processDecryptedProto: msgId::${r.externalId} e2eType:${s.e2eType} done`;
        return {
          result: _.E2EProcessResult.SUCCESS,
          hasInactiveMsg: a
        };
      });
      return function () {
        return e.apply(this, arguments);
      };
    }()).catch((0, a.filteredCatch)([T.SignalDecryptionError, p.UnknownDeviceMessageError], function () {
      var e = (0, i.default)(function* (e) {
        __LOG__(3, undefined, undefined, undefined, ["messaging"])`decryptE2EPayload: msgId::${r.externalId} e2eType:${s.e2eType} error:${e.stack}`;
        (0, E.postFailureE2eMessageRecvMetric)({
          enc: s,
          from: N,
          msgMeta: P,
          msgInfo: r
        });
        if (!s.hideFail) {
          const t = (0, c.getPlaceholderAddReason)(e);
          yield (0, f.processPlaceholderMsg)(r, _.PlaceholderType.E2E, t);
        }
        return {
          result: _.E2EProcessResult.RETRY,
          retryCount: s.retryCount,
          retryReason: (0, v.getRetryReasonFromError)(e)
        };
      });
      return function () {
        return e.apply(this, arguments);
      };
    }())).catch((0, a.filteredCatch)(T.SignalMessageCounterError, e => {
      __LOG__(3, undefined, undefined, undefined, ["messaging"])`decryptE2EPayload: msgId::${r.externalId} e2eType:${s.e2eType} error:${e.stack}`;
      if ((0, g.isSendMessageDropOldCounterNackEnabled)()) {
        return {
          result: _.E2EProcessResult.SIGNAL_OLD_COUNTER_ERROR,
          failedEnc: s
        };
      } else {
        (0, S.maybePostIncomingMessageDropOldCounter)({
          msgInfo: r,
          msgMeta: P,
          enc: s
        });
        return {
          result: _.E2EProcessResult.SUCCESS
        };
      }
    })).catch((0, a.filteredCatch)(d.HsmMismatchError, e => {
      __LOG__(3, undefined, undefined, undefined, ["messaging"])`decryptE2EPayload: msgId::${r.externalId} e2eType:${s.e2eType} error:${e.stack}`;
      __LOG__(3, undefined, undefined, true, ["messaging"])`decryptE2EPayload: e2eType:${s.e2eType} error:${e}`;
      SEND_LOGS("handleMsg: hsm mismatch error", 1, "messaging");
      (0, E.postFailureE2eMessageRecvMetric)({
        enc: s,
        from: N,
        msgMeta: P,
        msgInfo: r
      });
      return {
        result: _.E2EProcessResult.HSM_MISMATCH
      };
    })).catch((0, a.filteredCatch)([p.MessageValidationError], e => {
      __LOG__(3, undefined, undefined, undefined, ["messaging"])`decryptE2EPayload: msgId::${r.externalId} e2eType:${s.e2eType} error:${e.stack}`;
      if (e.sendLogs) {
        __LOG__(3, undefined, undefined, true, ["messaging"])`decryptE2EPayload: e2eType:${s.e2eType} error:${e}`;
        SEND_LOGS(`handleMsg: ${e.name}`, 1, "messaging");
      }
      (0, S.postIncomingMessageDropInvalidProtobuf)({
        msgInfo: r,
        msgMeta: P,
        enc: s,
        error: e
      });
      return {
        result: _.E2EProcessResult.PARSE_VALIDATION_ERROR
      };
    })).catch((0, a.filteredCatch)(p.DeviceSentMessageError, e => {
      __LOG__(3, undefined, undefined, undefined, ["messaging"])`decryptE2EPayload: msgId::${r.externalId} e2eType:${s.e2eType} error:${e.stack}`;
      __LOG__(3, undefined, undefined, true, ["messaging"])`decryptE2EPayload: e2eType:${s.e2eType} infoType:${r.type} isDirect:${r.isDirect} error:${e}`;
      SEND_LOGS("handleMsg: parse device sent message error", 1, "messaging");
      (0, E.postFailureE2eMessageRecvMetric)({
        enc: s,
        from: N,
        msgMeta: P,
        msgInfo: r
      });
      (0, S.postIncomingMessageDropInvalidProtobuf)({
        msgInfo: r,
        msgMeta: P,
        enc: s
      });
      return {
        result: _.E2EProcessResult.PARSE_ERROR
      };
    })).catch(e => {
      __LOG__(3, undefined, undefined, undefined, ["messaging"])`decryptE2EPayload: msgId::${r.externalId} e2eType:${s.e2eType} error:${e.stack}`;
      __LOG__(3, undefined, undefined, true, ["messaging"])`decryptE2EPayload: e2eType:${s.e2eType} error:${e}`;
      SEND_LOGS("handleMsg: parse decrypted message error", 1, "messaging");
      (0, E.postFailureE2eMessageRecvMetric)({
        enc: s,
        from: N,
        msgMeta: P,
        msgInfo: r
      });
      (0, S.postIncomingMessageDropInvalidProtobuf)({
        msgInfo: r,
        msgMeta: P,
        enc: s
      });
      return {
        result: _.E2EProcessResult.PARSE_ERROR
      };
    }), {
      result: _.E2EProcessResult.SUCCESS
    });
    yield (0, M.getSignalProtocolStore)().flushBufferToDiskIfNotMemOnlyMode();
    return D;
  })).apply(this, arguments);
}
function b(e, t) {
  if (e.length === 2 && e[0].e2eType === u.CiphertextType.Skmsg) {
    __LOG__(4, undefined, new Error(), true, ["messaging"])`decryptE2EPayload: msgId::${t.externalId} skMsg is out of order`;
    SEND_LOGS("handleMsg: invalid encs order", 0.1, "messaging");
  }
}