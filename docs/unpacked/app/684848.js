var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOutgoingSession = S;
exports.createSenderKeyDistributionMsg = function () {
  return b.apply(this, arguments);
};
exports.decryptContent = function (e, t, n, r, i) {
  let {
    loadSession: o,
    handleNewSession: l,
    loadSignedPreKey: d,
    loadOneTimePreKey: p
  } = e;
  E("decryptContent");
  return h.lock([(0, s.extractUserJid)(n)], (0, a.default)(function* () {
    let e = false;
    const a = yield o(n, "decryptContent");
    let s;
    if (r.type === "pkmsg") {
      const e = (0, c.deserializePkMsg)(r.ciphertext);
      if (!e.success) {
        E("decryptContent: errCryptoDeserialization");
        return (0, u.makeError)("errCryptoDeserialization");
      }
      const n = e.value;
      const i = yield function () {
        return M.apply(this, arguments);
      }({
        loadSignedPreKey: d,
        loadOneTimePreKey: p
      }, t, n, a);
      if (!i.success) {
        return i;
      }
      s = i.value;
    } else {
      r.type;
      const e = (0, c.deserializeMsg)(r.ciphertext);
      if (!e.success) {
        E("decryptContent: errCryptoDeserialization");
        return (0, u.makeError)("errCryptoDeserialization");
      }
      const t = e.value;
      const n = yield (0, c.decryptMsg)(a, t);
      if (!n.success) {
        return n;
      }
      s = n.value;
    }
    const {
      newSessionInfo: f
    } = s;
    if (!(!f || f.newIdentity == null && f.usedPreKey == null)) {
      yield l(n, f.baseSession, f.newIdentity, f.usedPreKey);
    }
    if (!e) {
      const t = f == null ? undefined : f.baseSession.remote.pubKey;
      yield i(new Uint8Array(s.plaintext), t);
      e = true;
    }
    yield l(n, s.updatedSession, s.updatedSession.remote.pubKey);
    return (0, u.makeResult)();
  }));
};
exports.decryptGroupContent = function (e, t, n, r, i) {
  let {
    loadSenderKeySession: o,
    saveSenderKeySession: l
  } = e;
  E("decryptGroupContent");
  return h.lock([t, (0, s.extractUserJid)(n)], (0, a.default)(function* () {
    let e = false;
    const a = yield o(t, n);
    if (!a.success) {
      return (0, u.makeError)(a.error);
    }
    const s = (0, d.deserializeSenderKeyMsg)(r);
    if (!s.success) {
      E("decryptGroupContent: errCryptoDeserialization");
      return (0, u.makeError)("errCryptoDeserialization");
    }
    const c = a.value;
    const p = yield (0, d.decryptSenderKeyMsgFromSession)(c, s.value);
    if (!p.success) {
      return p;
    }
    const [f, _] = p.value;
    if (!e) {
      yield i(new Uint8Array(_));
      e = true;
    }
    yield l(t, n, f);
    return (0, u.makeResult)();
  }));
};
exports.encryptContent = function (e, t, n, r) {
  let {
    loadSession: l,
    handleNewSession: d
  } = e;
  E("encryptContent");
  return h.lock([(0, s.extractUserJid)(t)], (0, a.default)(function* () {
    let e = null;
    do {
      const a = yield l(t, "cryptoLibraryEncryptContent");
      if (a == null) {
        E("encryptContent: errSignalInvalidKey");
        return (0, u.makeError)("errSignalInvalidKey");
      }
      if (r != null && !(0, o.uint8ArraysEqual)(r, a.remote.pubKey)) {
        E("encryptContent: identity-mismatch");
        return (0, u.makeError)("identity-mismatch");
      }
      const [s, p] = yield (0, c.encryptMsg)(a, n);
      const f = yield d(t, s, s.remote.pubKey);
      if (f.success) {
        e = (0, u.makeResult)((0, i.default)((0, i.default)({}, p), {}, {
          baseKey: s.aliceBaseKey
        }));
      } else {
        f.error;
      }
    } while (e == null);
    return e;
  }));
};
exports.encryptGroupContent = function (e, t, n, r) {
  let {
    loadSenderKeySession: i,
    saveSenderKeySession: o
  } = e;
  E("encryptGroupContent");
  return h.lock([t, (0, s.extractUserJid)(n)], (0, a.default)(function* () {
    let e = null;
    do {
      const a = yield i(t, n);
      if (!a.success) {
        return (0, u.makeError)(a.error);
      }
      const s = a.value;
      const l = yield (0, d.encryptSenderKeyMsgWithSession)(s, r);
      if (!l.success) {
        E("encryptGroupContent: sender-key-no-session");
        return (0, u.makeError)("sender-key-no-session");
      }
      {
        const [r, i] = l.value;
        yield o(t, n, r);
        const a = s.senderKeyStates[s.senderKeyStates.length - 1];
        e = (0, u.makeResult)({
          ciphertext: {
            ciphertext: i,
            type: "skmsg"
          },
          senderKeyId: a.senderKeyId,
          senderKeyDistributionProto: (0, d.createSenderKeyDistributionProto)((0, p.convertFromRawToSenderKeyState)(a))
        });
      }
    } while (e == null);
    return e;
  }));
};
exports.establishOutgoingSession = function () {
  return T.apply(this, arguments);
};
exports.publishLogs = function (e) {
  e(y);
  y = [];
};
exports.rotateGroupSenderKey = A;
exports.saveSenderKeySession = function (e, t, n, r) {
  let {
    loadSenderKeySession: i,
    saveSenderKeySession: o
  } = e;
  E("saveSenderKeySession");
  return h.lock([t, (0, s.extractUserJid)(n)], (0, a.default)(function* () {
    let e = null;
    if (i) {
      const r = yield i(t, n);
      e = r.success ? r.value : null;
    }
    const a = yield (0, d.processSenderKeyDistributionMsg)(r, e);
    if (!a.success) {
      return a;
    }
    const s = a.value;
    yield o(t, n, s);
    return (0, u.makeResult)();
  }));
};
var i = r(require("../vendor/73982.js"));
var a = r(require("../vendor/311504.js"));
var o = require("./31549.js");
var s = require("./418987.js");
var l = require("./741699.js");
var u = require("./135781.js");
var c = require("./628044.js");
var d = require("./715346.js");
var p = require("./775228.js");
var f = require("./685419.js");
var _ = require("./513611.js");
var g = require("./67106.js");
var m = require("./491296.js");
const h = (0, l.makeLockMap)(60000);
let y = [];
function E(e) {
  y.push(e);
  if (y.length >= 300) {
    y.shift();
  }
}
function S() {
  return v.apply(this, arguments);
}
function v() {
  return (v = (0, a.default)(function* (e, t) {
    E("createOutgoingSession");
    const n = C(t);
    const {
      signedKey: r
    } = n;
    if (!(yield (0, g.verifyMsgSignalVariant)(n.identity, r.publicKey, r.signature))) {
      E("createOutgoingSession: errSignalInvalidKey");
      return (0, u.makeError)("errSignalInvalidKey");
    }
    const i = yield (0, m.initiateSessionOutgoing)(e, n, (0, f.makeKeyPair)());
    return (0, u.makeResult)(i);
  })).apply(this, arguments);
}
function T() {
  return (T = (0, a.default)(function* (e, t, n, r, i) {
    let {
      handleNewSession: a
    } = e;
    E("establishOutgoingSession");
    const o = yield S(t, r);
    if (!o.success) {
      return o;
    }
    const s = o.value;
    return a(n, s, s.remote.pubKey, null, i);
  })).apply(this, arguments);
}
function M() {
  return (M = (0, a.default)(function* (e, t, n, r) {
    let {
      loadSignedPreKey: i,
      loadOneTimePreKey: a
    } = e;
    E("decryptPkMsg");
    const o = r && (0, c.findMatchingSession)(r, n.sessionBaseKey);
    if (o) {
      const e = yield (0, c.decryptMsgFromSession)(o, n);
      if (!e.success) {
        return e;
      }
      const [t, r] = e.value;
      return (0, u.makeResult)({
        newSessionInfo: null,
        updatedSession: t,
        plaintext: r
      });
    }
    {
      const e = n.localOneTimeKeyId;
      const o = yield i(n.localSignedPreKeyId);
      const s = e == null ? null : yield a(e);
      const l = yield (0, c.decryptPkMsgWithNewSession)(t, r, n, {
        localSignedPreKey: o,
        localOneTimeKey: s
      });
      if (!l.success) {
        return l;
      }
      const {
        newIdentity: d,
        baseSession: p,
        updatedSession: f,
        plaintext: _
      } = l.value;
      return (0, u.makeResult)({
        newSessionInfo: {
          newIdentity: d,
          baseSession: p,
          usedPreKey: e
        },
        updatedSession: f,
        plaintext: _
      });
    }
  })).apply(this, arguments);
}
function A(e, t, n, r) {
  let {
    saveSenderKeySession: i
  } = e;
  E("rotateGroupSenderKey");
  return h.lock([t, (0, s.extractUserJid)(n)], (0, a.default)(function* () {
    const e = yield (0, m.initiateSenderKeySessionOutgoing)(r);
    const a = e.senderKeyStates[0].senderKeyId;
    yield i(t, n, e);
    return {
      senderKeyId: a
    };
  }));
}
function b() {
  return (b = (0, a.default)(function* (e, t, n) {
    let {
      loadSenderKeySession: r,
      saveSenderKeySession: i
    } = e;
    E("createSenderKeyDistributionMsg");
    let a = yield r(t, n);
    const o = a.error;
    if (!a.success && o === "errLoadSenderKeySession") {
      const e = yield (0, f.makeKeyPair)();
      yield A({
        saveSenderKeySession: i
      }, t, n, e);
      a = yield r(t, n);
    }
    if (a.success) {
      const e = a.value.senderKeyStates.slice(-1);
      if (e.length > 0) {
        return (0, u.makeResult)((0, d.createSenderKeyDistributionProto)((0, p.convertFromRawToSenderKeyState)(e[0])));
      }
    }
    E("createSenderKeyDistributionMsg: errGetSenderKeyProto");
    return (0, u.makeError)("errGetSenderKeyProto");
  })).apply(this, arguments);
}
function C(e) {
  let {
    regId: t,
    identity: n,
    signedKey: r,
    oneTimeKey: i
  } = e;
  E("sanitizeInitialSessionInfo");
  const a = (0, f.castToSerializedPubKey)(r.publicKey);
  return {
    regId: (0, _.castRegistrationId)(t),
    identity: (0, f.castToSerializedPubKey)(n),
    signedKey: {
      id: (0, f.castToSignedPreKeyId)(r.id),
      publicKey: a,
      signature: (0, _.ensureSize)(r.signature, 64)
    },
    oneTimeKey: i && {
      id: (0, f.castToPreKeyId)(i.id),
      publicKey: (0, f.castToSerializedPubKey)(i.publicKey)
    },
    ratchetKey: a
  };
}