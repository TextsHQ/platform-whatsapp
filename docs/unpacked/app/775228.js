Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FORMAT_VERSION = undefined;
exports._parseSession = s;
exports.convertFromRawToSenderKeyState = function (e) {
  return e;
};
exports.findSenderKeyState = function (e, t) {
  const n = e.senderKeyStates.findIndex(e => e.senderKeyId === t);
  if (n === -1) {
    return;
  }
  return e.senderKeyStates[n];
};
exports.makeNewSenderKeySession = function (e) {
  return {
    senderKeyStates: [e]
  };
};
exports.makeSenderKeyChainKey = o;
exports.makeSenderKeyMsgKey = a;
exports.makeSenderKeySessionFromRecord = l;
exports.makeSenderKeyState = function (e, t, n, r, i) {
  return {
    senderSigningKeyPublic: e,
    senderSigningKeyPrivate: t,
    senderKeyChainKey: n,
    senderKeyId: r,
    unusedMsgKeys: i == null ? [] : i
  };
};
exports.parseSessionFromRecord = function (e) {
  return s((0, i.definedOrThrow)(e.senderKeyStates, "senderKeyStates"));
};
exports.serializeSenderKeyState = u;
exports.serializeSession = function (e) {
  return {
    senderKeyStates: e.senderKeyStates.map(e => u(e))
  };
};
exports.updateSessionWithNewSenderKeyState = function (e, t) {
  const n = e.senderKeyStates.slice(e.senderKeyStates.length > 4 ? 1 : 0);
  n.push(t);
  return {
    senderKeyStates: n
  };
};
exports.updateSessionWithUpdatedSenderKeyState = function (e, t) {
  const n = e.senderKeyStates.findIndex(e => e.senderKeyId === t.senderKeyId);
  return {
    senderKeyStates: e.senderKeyStates.map((e, r) => r === n ? t : e)
  };
};
var r = require("./685419.js");
var i = require("./122470.js");
function a(e, t) {
  return {
    iteration: e,
    seed: t
  };
}
function o(e, t) {
  return {
    nextMsgIndex: e,
    chainKey: t
  };
}
function s(e) {
  return l(e);
}
function l(e) {
  return {
    senderKeyStates: e.map(e => function (e) {
      const t = (0, i.definedOrThrow)(e.senderSigningKey, "senderSigningKey");
      const n = (0, i.definedOrThrow)(e.senderMessageKeys, "senderMessageKeys");
      const r = (0, i.definedOrThrow)(e.senderChainKey, "senderChainKey");
      return {
        senderSigningKeyPublic: c(t.public, "public"),
        senderSigningKeyPrivate: t.private ? (0, i.bytesOrThrow)(t.private, 32, "private") : undefined,
        senderKeyId: (0, i.definedOrThrow)(e.senderKeyId, "senderKeyId"),
        unusedMsgKeys: n.map(e => a((0, i.definedOrThrow)(e.iteration, "iteration"), (0, i.bytesOrThrow)(e.seed, 50, "seed"))),
        senderKeyChainKey: o((0, i.definedOrThrow)(r.iteration, "iteration"), (0, i.bytesOrThrow)(r.seed, 32, "seed"))
      };
    }(e))
  };
}
function u(e) {
  return {
    senderKeyId: e.senderKeyId,
    senderChainKey: {
      iteration: e.senderKeyChainKey.nextMsgIndex,
      seed: e.senderKeyChainKey.chainKey
    },
    senderSigningKey: {
      public: e.senderSigningKeyPublic,
      private: e.senderSigningKeyPrivate
    },
    senderMessageKeys: e.unusedMsgKeys.map(e => {
      let {
        iteration: t,
        seed: n
      } = e;
      return {
        iteration: t,
        seed: n
      };
    })
  };
}
function c(e, t) {
  return (0, r.castToSerializedPubKey)(new Uint8Array((0, i.definedOrThrow)(e, t)));
}
exports.FORMAT_VERSION = 3;