Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeLibsignalSession = function (e) {
  const t = {
    sessions: {},
    version: "v1"
  };
  for (let n = 0; n < e.length; n++) {
    if (e[n].indexInfo.baseKey) {
      const i = (0, r.arrayBufferToString)(e[n].indexInfo.baseKey);
      t.sessions[i] = e[n];
    }
  }
  return t;
};
exports.makeLibsignalSessionChainKey = function (e, t) {
  if (t != null) {
    return {
      counter: e,
      key: t
    };
  }
  return {
    counter: e
  };
};
exports.makeLibsignalSessionCurrentRatchet = function (e, t, n, r, i) {
  if (r != null) {
    return {
      rootKey: e,
      ephemeralKeyPair: {
        pubKey: t,
        privKey: n
      },
      lastRemoteEphemeralKey: r,
      previousCounter: i
    };
  }
  __LOG__(2)`makeLibsignalSessionCurrentRatchet: lastRemoteEphemeralKey is none`;
  return {
    rootKey: e,
    ephemeralKeyPair: {
      pubKey: t,
      privKey: n
    },
    previousCounter: i
  };
};
exports.makeLibsignalSessionIndexInfo = function (e, t, n, r) {
  if (e != null) {
    return {
      baseKey: e,
      baseKeyType: t,
      remoteIdentityKey: n,
      closed: r
    };
  }
  __LOG__(2)`makeLibsignalSessionIndexInfo: basekey is none`;
  return {
    baseKeyType: t,
    remoteIdentityKey: n,
    closed: r
  };
};
exports.makeLibsignalSessionMessageKey = function (e) {
  return e;
};
exports.makeLibsignalSessionOldRatchet = function (e, t) {
  return {
    added: e,
    ephemeralKey: t
  };
};
exports.makeLibsignalSessionPendingPreKey = function (e, t, n) {
  if (n != null) {
    return {
      baseKey: e,
      signedKeyId: t,
      preKeyId: n
    };
  }
  __LOG__(2)`makeLibsignalSessionPendingPreKey: prekey id is null`;
  return {
    baseKey: e,
    signedKeyId: t
  };
};
exports.makeLibsignalSessionRecvChains = function (e, t, n) {
  return {
    chainKey: e,
    chainType: n,
    messageKeys: t
  };
};
exports.makeLibsignalSessionSendChain = function (e, t, n) {
  return {
    chainKey: e,
    chainType: n,
    messageKeys: t
  };
};
exports.makeLibsignalSessionState = function (e, t, n, r, i, a, o, s, l) {
  const u = {
    registrationId: e,
    currentRatchet: t,
    indexInfo: n,
    oldRatchetList: r,
    [i]: a,
    pendingPreKey: l
  };
  if (o != null) {
    u[o] = s;
  }
  if (l != null) {
    u.pendingPreKey = l;
  } else {
    delete u.pendingPreKey;
  }
  return u;
};
var r = require("./459617.js");