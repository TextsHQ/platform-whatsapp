var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FORMAT_VERSION = undefined;
exports._parseSession = _;
exports.bytesOrThrow = m;
exports.definedOrThrow = h;
exports.detachSession = function (e) {
  const {
    local: t,
    remote: n,
    sendChain: r,
    initialExchangeInfo: i
  } = e;
  let a;
  if (i) {
    const {
      remoteOneTimeId: e
    } = i;
    a = {
      preKeyId: e != null ? e : undefined,
      signedPreKeyId: i.remoteSignedId,
      baseKey: (0, s.toBuffer)(i.localOneTimePubKey)
    };
  }
  return {
    sessionVersion: 3,
    localIdentityPublic: (0, s.toBuffer)(t.pubKey),
    remoteIdentityPublic: (0, s.toBuffer)(n.pubKey),
    rootKey: (0, s.toBuffer)(e.rootKey),
    previousCounter: e.prevSendChainHighestIndex,
    senderChain: {
      senderRatchetKey: (0, s.toBuffer)(r.ratchetKey.serializedPubKey),
      senderRatchetKeyPrivate: (0, s.toBuffer)(r.ratchetKey.privateKey),
      chainKey: {
        index: r.nextMsgIndex,
        key: (0, s.toBuffer)(r.chainKey)
      },
      messageKeys: []
    },
    receiverChains: e.recvChains.map(e => ({
      senderRatchetKey: (0, s.toBuffer)(e.ratchetPubKey),
      chainKey: {
        index: e.nextMsgIndex,
        key: (0, s.toBuffer)(e.chainKey)
      },
      messageKeys: e.unusedMsgKeys.map(e => ({
        index: e.index,
        cipherKey: (0, s.toBuffer)(e.cipherKey),
        macKey: (0, s.toBuffer)(e.macKey),
        iv: (0, s.toBuffer)(e.iv)
      }))
    })),
    pendingPreKey: a,
    remoteRegistrationId: n.regId,
    localRegistrationId: t.regId,
    aliceBaseKey: e.aliceBaseKey == null ? undefined : (0, s.toBuffer)(e.aliceBaseKey)
  };
};
exports.makeFreshRecvChain = function (e, t) {
  return l(e, 0, t, []);
};
exports.makeFreshSendChain = function (e, t) {
  return u(e, 0, t);
};
exports.makeFreshSession = function (e, t, n, r, i, a, o) {
  return d(e, t, n, r, i, a, 0, [], o);
};
exports.makeInitialExchangeInfo = c;
exports.makeRecvChain = l;
exports.makeSendChain = u;
exports.makeSession = d;
exports.parseSession = function (e) {
  return _(e, []);
};
exports.parseSessionFromRecord = function (e) {
  return _(h(e.currentSession, "currentSession"), e.previousSessions);
};
exports.ratchetSession = function (e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : e.sendChain;
  let r = arguments.length > 3 ? arguments[3] : undefined;
  return d(e.local, e.remote, r, t, n, null, Math.max(e.sendChain.nextMsgIndex - 1, 0), e.prevSessions, e.aliceBaseKey);
};
exports.serializeSession = function (e) {
  const {
    local: t,
    remote: n,
    initialExchangeInfo: r
  } = e;
  let i;
  if (r) {
    const {
      remoteOneTimeId: e
    } = r;
    i = {
      preKeyId: e != null ? e : undefined,
      signedPreKeyId: r.remoteSignedId,
      baseKey: r.localOneTimePubKey
    };
  }
  return {
    currentSession: {
      sessionVersion: 3,
      localIdentityPublic: t.pubKey,
      remoteIdentityPublic: n.pubKey,
      rootKey: e.rootKey,
      previousCounter: e.prevSendChainHighestIndex,
      senderChain: f(e.sendChain),
      receiverChains: e.recvChains.map(p),
      pendingPreKey: i,
      remoteRegistrationId: n.regId,
      localRegistrationId: t.regId,
      aliceBaseKey: e.aliceBaseKey
    },
    previousSessions: e.prevSessions
  };
};
exports.setPrevSessions = function (e, t) {
  return d(e.local, e.remote, e.rootKey, e.recvChains, e.sendChain, e.initialExchangeInfo, e.prevSendChainHighestIndex, t, e.aliceBaseKey);
};
exports.splitMsgKey = function (e, t) {
  const n = new i.Binary(t);
  const r = (0, s.readBytes)(n, 32);
  const a = (0, s.readBytes)(n, 32);
  const o = (0, s.readBytes)(n, 16);
  return function (e, t, n, r) {
    return {
      index: e,
      cipherKey: t,
      macKey: n,
      iv: r
    };
  }(e, r, a, o);
};
exports.updateChains = function (e, t, n) {
  return d(e.local, e.remote, e.rootKey, t, n, e.initialExchangeInfo, e.prevSendChainHighestIndex, e.prevSessions, e.aliceBaseKey);
};
var i = require("./904704.js");
var a = r(require("./415227.js"));
var o = require("./685419.js");
var s = require("./513611.js");
function l(e, t, n, r) {
  return {
    ratchetPubKey: e,
    nextMsgIndex: t,
    chainKey: n,
    unusedMsgKeys: r
  };
}
function u(e, t, n) {
  return {
    ratchetKey: e,
    nextMsgIndex: t,
    chainKey: n
  };
}
function c(e, t, n) {
  return {
    remoteOneTimeId: e,
    remoteSignedId: t,
    localOneTimePubKey: n
  };
}
function d(e, t, n, r, i, a, o, s, l) {
  return {
    local: e,
    remote: t,
    rootKey: n,
    sendChain: i,
    recvChains: r,
    initialExchangeInfo: a,
    prevSendChainHighestIndex: o,
    prevSessions: s,
    aliceBaseKey: l
  };
}
function p(e) {
  return {
    senderRatchetKey: e.ratchetPubKey,
    chainKey: {
      index: e.nextMsgIndex,
      key: e.chainKey
    },
    messageKeys: e.unusedMsgKeys
  };
}
function f(e) {
  const t = e.ratchetKey;
  return {
    senderRatchetKey: t.serializedPubKey,
    senderRatchetKeyPrivate: t.privateKey,
    chainKey: {
      index: e.nextMsgIndex,
      key: e.chainKey
    }
  };
}
function _(e, t) {
  const n = h(e.sessionVersion, "sessionVersion");
  if (n !== 3) {
    throw (0, a.default)(`Signal: bad session version ${n}`);
  }
  const r = h(e.senderChain, "senderChain");
  const i = h(r.chainKey, "senderChain.chainKey");
  const p = u((0, o.makeSerializedKeyPairFrom)(m(r.senderRatchetKeyPrivate, 32, "senderRatchetKeyPrivate"), g(r.senderRatchetKey, "senderRatchetKey")), h(i.index, "senderChain.chainKey.index"), m(i.key, 32, "senderChain.chainKey.key"));
  const f = h(e.receiverChains, "receiverChains").map(e => {
    const t = h(e.chainKey, "receiverChains[].chainKey");
    return l(g(e.senderRatchetKey, "receiverChains[].senderRatchetKey"), h(t.index, "receiverChains[].chainKey.index"), m(t.key, 32, "receiverChains[].chainKey.key"), e.messageKeys.map(e => ({
      index: h(e.index, "messageKeys[].index"),
      cipherKey: m(e.cipherKey, 32, "messageKeys[].cipherKey"),
      macKey: m(e.macKey, 32, "messageKeys[].macKey"),
      iv: m(e.iv, 16, "messageKeys[].iv")
    })));
  });
  const _ = {
    regId: (0, s.castRegistrationId)(h(e.localRegistrationId, "localRegistrationId")),
    pubKey: g(e.localIdentityPublic, "localIdentityPublic")
  };
  const y = {
    regId: (0, s.castRegistrationId)(h(e.remoteRegistrationId, "remoteRegistrationId")),
    pubKey: g(e.remoteIdentityPublic, "remoteIdentityPublic")
  };
  const E = e.pendingPreKey;
  let S = null;
  if (E) {
    const e = E.preKeyId;
    S = c(e != null ? (0, o.castToPreKeyId)(e) : null, (0, o.castToSignedPreKeyId)(h(E.signedPreKeyId, "pendingPreKey.signedPreKeyId")), g(E.baseKey, "pendingPreKey.baseKey"));
  }
  const v = e.aliceBaseKey == null ? null : g(e.aliceBaseKey, "aliceBaseKey");
  return d(_, y, m(e.rootKey, 32, "rootKey"), f, p, S, e.previousCounter || 0, t, v);
}
function g(e, t) {
  return (0, o.castToSerializedPubKey)(new Uint8Array(h(e, t)));
}
function m(e, t, n) {
  return (0, s.toBytes)(h(e, n), t);
}
function h(e, t) {
  if (e == null) {
    throw (0, a.default)(`Signal: protobuf is missing ${t}`);
  }
  return e;
}
exports.FORMAT_VERSION = 3;