var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DecryptionErrorType = undefined;
exports.createDecryptionHandler = function (e) {
  const t = {
    accessedEncs: new Set(),
    pkOrMsgFailedEnc: null,
    skMsgFailedEnc: null
  };
  return {
    handleError(n, r) {
      const i = function (e) {
        if (e instanceof u.UnknownDeviceMessageError) {
          return y.UnknownDevice;
        }
        if (e instanceof h.SignalDecryptionError) {
          return function (e) {
            if ((0, s.isCryptoLibraryEnabled)()) {
              if (e.message === "errDuplicateMsg") {
                return y.SignalDuplicateMessage;
              }
            } else if (e.message.includes("Incompatible version number on")) {
              return y.SignalLegacyMessage;
            }
            return y.SignalRetryable;
          }(e);
        }
        if (e instanceof h.SignalMessageCounterError) {
          return y.SignalDuplicateMessage;
        }
        if (e instanceof u.DeviceSentMessageError) {
          return y.DeviceSentMessage;
        }
        if (e instanceof u.MessageValidationError) {
          return y.InvalidProtobuf;
        }
        if (e instanceof l.HsmMismatchError) {
          return y.HsmMismatch;
        }
        return y.Unknown;
      }(r);
      if (n.e2eType === a.CiphertextType.Skmsg) {
        t.skMsgFailedEnc = {
          enc: n,
          error: r,
          errorType: i
        };
      } else {
        t.pkOrMsgFailedEnc = {
          enc: n,
          error: r,
          errorType: i
        };
      }
      (function (e, t) {
        const {
          msgInfo: n,
          msgMeta: r
        } = e;
        const {
          enc: i,
          error: a,
          errorType: o
        } = t;
        const s = (0, f.getFrom)(n);
        (0, _.postFailureE2eMessageRecvMetric)({
          enc: i,
          from: s,
          msgMeta: r,
          msgInfo: n
        });
        __LOG__(3, undefined, undefined, undefined, ["messaging"])`decryptE2EPayload: msgId::${n.externalId} e2eType:${i.e2eType} error:${a.stack}`;
        switch (o) {
          case y.SignalDuplicateMessage:
            break;
          case y.SignalRetryable:
          case y.SignalLegacyMessage:
          case y.UnknownDevice:
            break;
          case y.InvalidProtobuf:
            if (a instanceof u.MessageValidationError && a.sendLogs) {
              __LOG__(3, undefined, undefined, true, ["messaging"])`decryptE2EPayload: e2eType:${i.e2eType} error:${a}`;
              SEND_LOGS(`handleMsg: ${a.name}`, 1, "messaging");
            }
            break;
          case y.DeviceSentMessage:
            __LOG__(3, undefined, undefined, true, ["messaging"])`decryptE2EPayload: e2eType:${i.e2eType} infoType:${n.type} isDirect:${n.isDirect} error:${a}`;
            SEND_LOGS("handleMsg: parse device sent message error", 1, "messaging");
            break;
          case y.HsmMismatch:
            __LOG__(3, undefined, undefined, true, ["messaging"])`decryptE2EPayload: e2eType:${i.e2eType} error:${a}`;
            SEND_LOGS("handleMsg: hsm mismatch error", 1, "messaging");
            break;
          case y.Unknown:
            __LOG__(3, undefined, undefined, true, ["messaging"])`decryptE2EPayload: e2eType:${i.e2eType} error:${a}`;
            SEND_LOGS("handleMsg: parse decrypted message error", 1, "messaging");
        }
      })(e, {
        enc: n,
        error: r,
        errorType: i
      });
    },
    canDecryptNext(e) {
      var n;
      const r = (n = t.pkOrMsgFailedEnc) === null || n === undefined ? undefined : n.errorType;
      return (r == null || !E.has(r)) && (t.accessedEncs.add(e.e2eType), true);
    },
    getResult: n => function () {
      return S.apply(this, arguments);
    }(e, t, n)
  };
};
var i = r(require("../vendor/348926.js"));
var a = require("./303754.js");
var o = require("./973776.js");
var s = require("./492917.js");
var l = require("./883310.js");
var u = require("./177205.js");
var c = require("./143130.js");
var d = require("./257845.js");
var p = require("./790215.js");
var f = require("./267420.js");
var _ = require("./859267.js");
var g = require("./126249.js");
var m = require("./525773.js");
var h = require("./91923.js");
const y = require("../vendor/76672.js").Mirrored(["SignalRetryable", "SignalDuplicateMessage", "SignalLegacyMessage", "UnknownDevice", "DeviceSentMessage", "InvalidProtobuf", "HsmMismatch", "Unknown"]);
exports.DecryptionErrorType = y;
const E = new Set([y.SignalLegacyMessage, y.SignalRetryable]);
function S() {
  return (S = (0, i.default)(function* (e, t, n) {
    var r;
    const i = (r = t.skMsgFailedEnc) !== null && r !== undefined ? r : t.pkOrMsgFailedEnc;
    if (i == null || t.accessedEncs.has(a.CiphertextType.Skmsg) && t.skMsgFailedEnc == null) {
      return {
        result: d.E2EProcessResult.SUCCESS,
        hasInactiveMsg: n
      };
    }
    v(e, t);
    const {
      enc: s,
      error: l,
      errorType: f
    } = i;
    let _;
    if ((l instanceof h.SignalDecryptionError || l instanceof u.UnknownDeviceMessageError) && (_ = (0, m.getRetryReasonFromError)(l), f !== y.SignalDuplicateMessage && f !== y.SignalLegacyMessage && !s.hideFail)) {
      const t = (0, o.getPlaceholderAddReason)(l);
      yield (0, c.processPlaceholderMsg)(e.msgInfo, d.PlaceholderType.E2E, t);
    }
    switch (f) {
      case y.SignalRetryable:
      case y.UnknownDevice:
        return {
          result: d.E2EProcessResult.RETRY,
          retryCount: s.retryCount,
          retryReason: _
        };
      case y.SignalLegacyMessage:
        return {
          result: d.E2EProcessResult.SUCCESS
        };
      case y.SignalDuplicateMessage:
        if ((0, p.isSendMessageDropOldCounterNackEnabled)()) {
          return {
            result: d.E2EProcessResult.SIGNAL_OLD_COUNTER_ERROR,
            failedEnc: s
          };
        } else {
          return {
            result: d.E2EProcessResult.SUCCESS
          };
        }
      case y.InvalidProtobuf:
        return {
          result: d.E2EProcessResult.PARSE_VALIDATION_ERROR
        };
      case y.HsmMismatch:
        return {
          result: d.E2EProcessResult.HSM_MISMATCH
        };
      case y.DeviceSentMessage:
      case y.Unknown:
        return {
          result: d.E2EProcessResult.PARSE_ERROR
        };
    }
  })).apply(this, arguments);
}
function v(e, t) {
  let {
    skMsgFailedEnc: n,
    pkOrMsgFailedEnc: r
  } = t;
  const {
    msgInfo: i,
    msgMeta: a
  } = e;
  const o = n != null ? n : r;
  if (o == null) {
    return;
  }
  const {
    enc: s,
    errorType: l,
    error: c
  } = o;
  switch (l) {
    case y.SignalRetryable:
    case y.SignalLegacyMessage:
    case y.UnknownDevice:
    case y.HsmMismatch:
      break;
    case y.SignalDuplicateMessage:
      if (!((0, p.isSendMessageDropOldCounterNackEnabled)() || (r == null ? undefined : r.errorType) === y.SignalLegacyMessage)) {
        (0, g.maybePostIncomingMessageDropOldCounter)({
          msgInfo: i,
          msgMeta: a,
          enc: s
        });
      }
      break;
    case y.InvalidProtobuf:
    case y.DeviceSentMessage:
    case y.Unknown:
      (0, g.postIncomingMessageDropInvalidProtobuf)({
        msgInfo: i,
        msgMeta: a,
        enc: s,
        error: c instanceof u.MessageValidationError ? c : undefined
      });
  }
}