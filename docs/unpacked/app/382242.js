var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toCryptoLibrarySessionPrevSessions = function () {
  return c.apply(this, arguments);
};
exports.toCryptoManagerSession = d;
var i = r(require("../vendor/348926.js"));
var a = require("./459617.js");
var o = require("./685419.js");
var s = require("./513611.js");
var l = require("./122470.js");
var u = r(require("./556869.js"));
function c() {
  return (c = (0, i.default)(function* (e, t) {
    const n = f(e);
    const r = yield d(n, t);
    const i = [];
    for (const n in e.sessions) {
      if (e.sessions[n].indexInfo.closed !== -1) {
        const r = yield d(e.sessions[n], t);
        const a = (0, l.detachSession)(r);
        i.push(a);
      }
    }
    return (0, l.setPrevSessions)(r, i);
  })).apply(this, arguments);
}
function d() {
  return p.apply(this, arguments);
}
function p() {
  return (p = (0, i.default)(function* (e, t) {
    try {
      const n = [];
      if (e.currentRatchet.lastRemoteEphemeralKey) {
        const t = e[(0, a.arrayBufferToString)(e.currentRatchet.lastRemoteEphemeralKey)];
        if (t) {
          const r = [];
          for (let e = 0; e < t.messageKeys.length; e++) {
            const n = t.messageKeys[e];
            const i = yield (0, s.hkdf)(new Uint8Array(n), null, "WhisperMessageKeys", 80).then(t => (0, l.splitMsgKey)(e, t));
            r.push(i);
          }
          const i = e.currentRatchet.lastRemoteEphemeralKey;
          const a = t.chainKey.key;
          if (i != null && a != null) {
            const e = (0, l.makeRecvChain)((0, o.castToSerializedPubKey)(new Uint8Array(i)), t.chainKey.counter + 1, (0, s.toBytes)(a, 32), r);
            n.push(e);
          }
        }
      }
      const r = e[(0, a.arrayBufferToString)(e.currentRatchet.ephemeralKeyPair.pubKey)];
      const i = (0, o.castToSerializedPubKey)(new Uint8Array(e.currentRatchet.ephemeralKeyPair.pubKey));
      const u = r.chainKey.key;
      const c = (0, s.toBytes)(e.currentRatchet.ephemeralKeyPair.privKey, 32);
      const d = (0, o.makeSerializedKeyPairFrom)(c, i);
      const p = (0, l.makeSendChain)(d, r.chainKey.counter + 1, (0, s.toBytes)(u, 32));
      const f = t && {
        regId: t.registrationId,
        pubKey: (0, o.serializeIdentity)(new Uint8Array(t.identityKeyPair.pubKey))
      };
      const _ = t && {
        regId: e.registrationId,
        pubKey: new Uint8Array(e.indexInfo.remoteIdentityKey)
      };
      const g = e.indexInfo.baseKey && (0, o.castToSerializedPubKey)(new Uint8Array(e.indexInfo.baseKey));
      const m = e.currentRatchet.previousCounter;
      if (m === -1) {
        __LOG__(4, undefined, new Error(), true)`toLibsignalSession: prevSendChainHighestIndex is -1`;
        SEND_LOGS("session-negative-previous-counter");
      }
      const h = (0, s.toBytes)(e.currentRatchet.rootKey, 32);
      let y;
      if (e.pendingPreKey != null) {
        y = (0, l.makeInitialExchangeInfo)(e.pendingPreKey.preKeyId, e.pendingPreKey.signedKeyId, (0, o.castToSerializedPubKey)(new Uint8Array(e.pendingPreKey.baseKey)));
      }
      return (0, l.makeSession)(f, _, h, n, p, y, Math.max(m, 0), [], g);
    } catch (e) {
      throw e;
    }
  })).apply(this, arguments);
}
function f(e) {
  const t = e.sessions;
  for (const e in t) {
    if (t[e].indexInfo.closed === -1) {
      return t[e];
    }
  }
  throw (0, u.default)("getOpenSession: There are no open session");
}