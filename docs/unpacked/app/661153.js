var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOutgoingSession = h;
exports.createSenderKeyDistributionMsg = function () {
  return I.apply(this, arguments);
};
exports.decryptContent = function () {
  return v.apply(this, arguments);
};
exports.decryptGroupContent = function () {
  return b.apply(this, arguments);
};
exports.encryptContent = function () {
  return S.apply(this, arguments);
};
exports.encryptGroupContent = function () {
  return A.apply(this, arguments);
};
exports.establishOutgoingSession = function () {
  return E.apply(this, arguments);
};
exports.publishLogs = function (e) {
  e(g);
  g = [];
};
exports.rotateGroupSenderKey = P;
exports.saveSenderKeySession = function () {
  return C.apply(this, arguments);
};
var i = r(require("../vendor/73982.js"));
var a = r(require("../vendor/311504.js"));
var o = require("./31549.js");
var s = require("./135781.js");
var l = require("./628044.js");
var u = require("./715346.js");
var c = require("./775228.js");
var d = require("./685419.js");
var p = require("./513611.js");
var f = require("./67106.js");
var _ = require("./491296.js");
let g = [];
function m(e) {
  g.push(e);
  if (g.length >= 300) {
    g.shift();
  }
}
function h() {
  return y.apply(this, arguments);
}
function y() {
  return (y = (0, a.default)(function* (e, t) {
    m("createOutgoingSession");
    const n = R(t);
    const {
      signedKey: r
    } = n;
    if (!(yield (0, f.verifyMsgSignalVariant)(n.identity, r.publicKey, r.signature))) {
      m("createOutgoingSession: errSignalInvalidKey");
      return (0, s.makeError)("errSignalInvalidKey");
    }
    const i = yield (0, _.initiateSessionOutgoing)(e, n, (0, d.makeKeyPair)());
    return (0, s.makeResult)(i);
  })).apply(this, arguments);
}
function E() {
  return (E = (0, a.default)(function* (e, t, n, r, i) {
    let {
      handleNewSession: a
    } = e;
    m("establishOutgoingSession");
    const o = yield h(t, r);
    if (!o.success) {
      return o;
    }
    const s = o.value;
    return a(n, s, s.remote.pubKey, null, i);
  })).apply(this, arguments);
}
function S() {
  return (S = (0, a.default)(function* (e, t, n, r) {
    let {
      loadSession: a,
      handleNewSession: u
    } = e;
    m("encryptContent");
    let c = null;
    do {
      const e = yield a(t, "cryptoLibraryEncryptContent");
      if (e == null) {
        m("encryptContent: errSignalInvalidKey");
        return (0, s.makeError)("errSignalInvalidKey");
      }
      if (r != null && !(0, o.uint8ArraysEqual)(r, e.remote.pubKey)) {
        m("encryptContent: identity-mismatch");
        return (0, s.makeError)("identity-mismatch");
      }
      const [d, p] = yield (0, l.encryptMsg)(e, n);
      const f = yield u(t, d, d.remote.pubKey);
      if (f.success) {
        c = (0, s.makeResult)((0, i.default)((0, i.default)({}, p), {}, {
          baseKey: d.aliceBaseKey
        }));
      } else {
        f.error;
      }
    } while (c == null);
    return c;
  })).apply(this, arguments);
}
function v() {
  return (v = (0, a.default)(function* (e, t, n, r, i) {
    let {
      loadSession: a,
      handleNewSession: o,
      loadSignedPreKey: u,
      loadOneTimePreKey: c
    } = e;
    m("decryptContent");
    let d = false;
    const p = yield a(n, "decryptContent");
    let f;
    if (r.type === "pkmsg") {
      const e = (0, l.deserializePkMsg)(r.ciphertext);
      if (!e.success) {
        m("decryptContent: errCryptoDeserialization");
        return (0, s.makeError)("errCryptoDeserialization");
      }
      const n = e.value;
      const i = yield T({
        loadSignedPreKey: u,
        loadOneTimePreKey: c
      }, t, n, p);
      if (!i.success) {
        return i;
      }
      f = i.value;
    } else {
      r.type;
      const e = (0, l.deserializeMsg)(r.ciphertext);
      if (!e.success) {
        m("decryptContent: errCryptoDeserialization");
        return (0, s.makeError)("errCryptoDeserialization");
      }
      const t = e.value;
      const n = yield (0, l.decryptMsg)(p, t);
      if (!n.success) {
        return n;
      }
      f = n.value;
    }
    const {
      newSessionInfo: _
    } = f;
    if (!(!_ || _.newIdentity == null && _.usedPreKey == null)) {
      yield o(n, _.baseSession, _.newIdentity, _.usedPreKey);
    }
    if (!d) {
      const e = _ == null ? undefined : _.baseSession.remote.pubKey;
      yield i(new Uint8Array(f.plaintext), e);
      d = true;
    }
    yield o(n, f.updatedSession, f.updatedSession.remote.pubKey);
    return (0, s.makeResult)();
  })).apply(this, arguments);
}
function T() {
  return M.apply(this, arguments);
}
function M() {
  return (M = (0, a.default)(function* (e, t, n, r) {
    let {
      loadSignedPreKey: i,
      loadOneTimePreKey: a
    } = e;
    m("decryptPkMsg");
    const o = r && (0, l.findMatchingSession)(r, n.sessionBaseKey);
    if (o) {
      const e = yield (0, l.decryptMsgFromSession)(o, n);
      if (!e.success) {
        return e;
      }
      const [t, r] = e.value;
      return (0, s.makeResult)({
        newSessionInfo: null,
        updatedSession: t,
        plaintext: r
      });
    }
    {
      const e = n.localOneTimeKeyId;
      const o = yield i(n.localSignedPreKeyId);
      const u = e == null ? null : yield a(e);
      const c = yield (0, l.decryptPkMsgWithNewSession)(t, r, n, {
        localSignedPreKey: o,
        localOneTimeKey: u
      });
      if (!c.success) {
        return c;
      }
      const {
        newIdentity: d,
        baseSession: p,
        updatedSession: f,
        plaintext: _
      } = c.value;
      return (0, s.makeResult)({
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
function A() {
  return (A = (0, a.default)(function* (e, t, n, r) {
    let {
      loadSenderKeySession: i,
      saveSenderKeySession: a
    } = e;
    m("encryptGroupContent");
    let o = null;
    do {
      const e = yield i(t, n);
      if (!e.success) {
        return (0, s.makeError)(e.error);
      }
      const l = e.value;
      const d = yield (0, u.encryptSenderKeyMsgWithSession)(l, r);
      if (!d.success) {
        m("encryptGroupContent: sender-key-no-session");
        return (0, s.makeError)("sender-key-no-session");
      }
      {
        const [e, r] = d.value;
        yield a(t, n, e);
        const i = l.senderKeyStates[l.senderKeyStates.length - 1];
        o = (0, s.makeResult)({
          ciphertext: {
            ciphertext: r,
            type: "skmsg"
          },
          senderKeyId: i.senderKeyId,
          senderKeyDistributionProto: (0, u.createSenderKeyDistributionProto)((0, c.convertFromRawToSenderKeyState)(i))
        });
      }
    } while (o == null);
    return o;
  })).apply(this, arguments);
}
function b() {
  return (b = (0, a.default)(function* (e, t, n, r, i) {
    let {
      loadSenderKeySession: a,
      saveSenderKeySession: o
    } = e;
    m("decryptGroupContent");
    let l = false;
    const c = yield a(t, n);
    if (!c.success) {
      return (0, s.makeError)(c.error);
    }
    const d = (0, u.deserializeSenderKeyMsg)(r);
    if (!d.success) {
      m("decryptGroupContent: errCryptoDeserialization");
      return (0, s.makeError)("errCryptoDeserialization");
    }
    const p = c.value;
    const f = yield (0, u.decryptSenderKeyMsgFromSession)(p, d.value);
    if (!f.success) {
      return f;
    }
    const [_, g] = f.value;
    if (!l) {
      yield i(new Uint8Array(g));
      l = true;
    }
    yield o(t, n, _);
    return (0, s.makeResult)();
  })).apply(this, arguments);
}
function C() {
  return (C = (0, a.default)(function* (e, t, n, r) {
    let {
      loadSenderKeySession: i,
      saveSenderKeySession: a
    } = e;
    m("saveSenderKeySession");
    let o = null;
    if (i) {
      const e = yield i(t, n);
      o = e.success ? e.value : null;
    }
    const l = yield (0, u.processSenderKeyDistributionMsg)(r, o);
    if (!l.success) {
      return l;
    }
    const c = l.value;
    yield a(t, n, c);
    return (0, s.makeResult)();
  })).apply(this, arguments);
}
function P() {
  return O.apply(this, arguments);
}
function O() {
  return (O = (0, a.default)(function* (e, t, n, r) {
    let {
      saveSenderKeySession: i
    } = e;
    m("rotateGroupSenderKey");
    const a = yield (0, _.initiateSenderKeySessionOutgoing)(r);
    const o = a.senderKeyStates[0].senderKeyId;
    yield i(t, n, a);
    return {
      senderKeyId: o
    };
  })).apply(this, arguments);
}
function I() {
  return (I = (0, a.default)(function* (e, t, n) {
    let {
      loadSenderKeySession: r,
      saveSenderKeySession: i
    } = e;
    m("createSenderKeyDistributionMsg");
    let a = yield r(t, n);
    const o = a.error;
    if (!a.success && o === "errLoadSenderKeySession") {
      const e = yield (0, d.makeKeyPair)();
      yield P({
        saveSenderKeySession: i
      }, t, n, e);
      a = yield r(t, n);
    }
    if (a.success) {
      const e = a.value.senderKeyStates.slice(-1);
      if (e.length > 0) {
        return (0, s.makeResult)((0, u.createSenderKeyDistributionProto)((0, c.convertFromRawToSenderKeyState)(e[0])));
      }
    }
    m("createSenderKeyDistributionMsg: errGetSenderKeyProto");
    return (0, s.makeError)("errGetSenderKeyProto");
  })).apply(this, arguments);
}
function R(e) {
  let {
    regId: t,
    identity: n,
    signedKey: r,
    oneTimeKey: i
  } = e;
  m("sanitizeInitialSessionInfo");
  const a = (0, d.castToSerializedPubKey)(r.publicKey);
  return {
    regId: (0, p.castRegistrationId)(t),
    identity: (0, d.castToSerializedPubKey)(n),
    signedKey: {
      id: (0, d.castToSignedPreKeyId)(r.id),
      publicKey: a,
      signature: (0, p.ensureSize)(r.signature, 64)
    },
    oneTimeKey: i && {
      id: (0, d.castToPreKeyId)(i.id),
      publicKey: (0, d.castToSerializedPubKey)(i.publicKey)
    },
    ratchetKey: a
  };
}