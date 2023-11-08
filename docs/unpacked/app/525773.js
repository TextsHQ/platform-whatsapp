var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RetryReason = undefined;
exports.getRetryReasonFromError = function (e) {
  if (e instanceof f.UnknownDeviceMessageError) {
    return M.UnknownCompanionNoPrekey;
  }
  if (e instanceof g.SignalDecryptionError) {
    if ((0, p.isCryptoLibraryEnabled)()) {
      switch (e.message) {
        case "errSignalNoSession":
        case "errLoadSenderKeySession":
          return M.SignalErrorNoSession;
        case "errSignalInvalidMsg":
          return M.SignalErrorInvalidMessage;
        case "errSignalInvalidKey":
          return M.SignalErrorInvalidKey;
        case "errSignalTooManyMessagesInFuture":
        case "errSignalGrpTooManyMessagesInFuture":
          return M.SignalErrorFutureMessage;
        case "errInvalidMacWithDecryptedPlaintext":
        case "errInvalidMacInvalidCipherKey":
        case "errInvalidMacInvalidCipherKeyNewChain":
          return M.SignalErrorBadMac;
      }
    } else if (e.toString().includes("No session found to decrypt message")) {
      return M.SignalErrorNoSession;
    }
  }
};
exports.prepareKeysForRetry = b;
exports.sendRetryReceipt = function () {
  return A.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./716358.js");
var s = require("./678002.js");
var l = require("./707065.js");
var u = require("./355813.js");
var c = r(require("./846870.js"));
var d = require("./403206.js");
var p = require("./492917.js");
var f = require("./177205.js");
var _ = require("./790215.js");
var g = require("./91923.js");
var m = require("./431028.js");
var h = require("./76256.js");
var y = require("./326314.js");
var E = require("./732974.js");
var S = require("./459857.js");
var v = require("./669050.js");
var T = r(require("./556869.js"));
const M = require("../vendor/76672.js")({
  UnknownError: 0,
  SignalErrorNoSession: 1,
  SignalErrorInvalidKey: 2,
  SignalErrorInvalidKeyId: 3,
  SignalErrorInvalidMessage: 4,
  SignalErrorInvalidSignature: 5,
  SignalErrorFutureMessage: 6,
  SignalErrorBadMac: 7,
  SignalErrorInvalidSession: 8,
  SignalErrorInvalidMsgKey: 9,
  BadBroadcastEphemeralSetting: 10,
  UnknownCompanionNoPrekey: 11,
  AdvFailure: 12,
  StatusRevokeDelay: 13
});
function A() {
  return (A = (0, i.default)(function* (e) {
    let {
      retryCount: t,
      to: n,
      participant: r,
      recipient: i,
      externalId: s,
      rawTs: c,
      isPeer: p = false,
      retryReason: f
    } = e;
    try {
      const e = (0, h.getSignalProtocolStore)();
      const [g, m] = yield Promise.all([e.getLocalRegistrationId(), e.getIdentityKeyPair()]);
      if (g == null || m == null) {
        throw (0, T.default)("No registration info found");
      }
      const y = yield b(t, (0, d.toCurveKeyPair)(m));
      if (!n.isBot() && Boolean(r == null ? undefined : r.isBot())) {
        return;
      }
      let E;
      let M = o.DROP_ATTR;
      let A = o.DROP_ATTR;
      let C = o.DROP_ATTR;
      if (n.isUser()) {
        E = (0, u.DEVICE_JID)(n);
        if ((0, S.getMeUser)().equals((0, v.toUserWid)(n))) {
          if (p) {
            M = (0, o.CUSTOM_STRING)("peer");
          } else {
            if (!i) {
              return Promise.reject((0, T.default)("sendRetryReceipt: send retry to peer device without recipient"));
            }
            A = (0, u.USER_JID)(i);
          }
        }
      } else {
        E = (0, u.CHAT_JID)(n);
        C = r ? (0, u.DEVICE_JID)(r) : o.DROP_ATTR;
      }
      const P = (0, o.wap)("receipt", {
        id: (0, o.CUSTOM_STRING)(s),
        to: E,
        participant: C,
        recipient: A,
        type: "retry",
        category: M
      }, (0, o.wap)("retry", {
        v: "1",
        count: (0, o.INT)(t),
        id: (0, o.CUSTOM_STRING)(s),
        t: (0, o.CUSTOM_STRING)(c),
        error: (0, _.isRetryReceiptErrorCodeEnabled)() && f != null ? (0, o.INT)(f) : o.DROP_ATTR
      }), (0, o.wap)("registration", null, (0, o.BIG_ENDIAN_CONTENT)(g)), y);
      return (0, a.deprecatedSendStanzaAndWaitForAck)(P, (0, l.toCoreAckTemplate)({
        id: s,
        class: "receipt",
        from: n,
        participant: r,
        type: "retry"
      }));
    } catch (e) {
      __LOG__(4, undefined, new Error(), true)`error: ${e}`;
      SEND_LOGS("sendRetryReceipt: error while creating or sending the retry message");
    }
  })).apply(this, arguments);
}
function b() {
  return C.apply(this, arguments);
}
function C() {
  return (C = (0, i.default)(function* (e, t) {
    const [n, r] = yield P(e, t);
    if (r) {
      yield y.waSignalStore.markKeyAsUploaded(r.keyId);
      yield y.waSignalStore.markPreKeyAsDirectDistribution(r.keyId);
    }
    return n;
  })).apply(this, arguments);
}
function P() {
  return O.apply(this, arguments);
}
function O() {
  return (O = (0, i.default)(function* (e, t) {
    if (e < 2) {
      return Promise.resolve([null, null]);
    }
    try {
      const [e, n, r] = yield Promise.all([y.waSignalStore.getSignedPreKey(), y.waSignalStore.getOrGenSinglePreKey(m.generatePreKeyPair), (0, s.getADVEncodedIdentity)().then(e => (0, o.wap)("device-identity", null, e))]);
      if (!e) {
        throw (0, T.default)("Signed pre key is not available");
      }
      return [(0, o.wap)("keys", null, (0, o.wap)("type", null, c.default.KEY_BUNDLE_TYPE), (0, o.wap)("identity", null, t.pubKey), (0, E.xmppPreKey)(n), (0, E.xmppSignedPreKey)(e), r), n];
    } catch (e) {
      throw (0, T.default)("Could not create keys section for retry");
    }
  })).apply(this, arguments);
}
exports.RetryReason = M;