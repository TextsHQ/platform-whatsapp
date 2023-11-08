var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MAX_UNUSED_KEYS = undefined;
exports.decryptMsg = function () {
  return E.apply(this, arguments);
};
exports.decryptMsgFromSession = T;
exports.decryptPkMsgWithNewSession = function () {
  return S.apply(this, arguments);
};
exports.deserializeMsg = v;
exports.deserializePkMsg = function (e) {
  const t = C(e, d.FORMAT_VERSION, 0);
  if (!t.success) {
    return t;
  }
  let n;
  let r;
  let a;
  let o;
  let s;
  try {
    const e = (0, g.decodeProtobuf)(f.PreKeySignalMessageSpec, t.value);
    const {
      registrationId: i,
      preKeyId: d,
      signedPreKeyId: p,
      baseKey: _,
      identityKey: m,
      message: h
    } = e;
    if (i == null || p == null || _ == null || m == null || h == null) {
      return (0, l.makeError)("errSignalDeserializePkInvalidProtoFormat");
    }
    o = (0, u.castToSerializedPubKey)(new Uint8Array(_));
    n = {
      regId: (0, c.castRegistrationId)(i),
      pubKey: (0, u.castToSerializedPubKey)(new Uint8Array(m))
    };
    a = d != null ? (0, u.castToPreKeyId)(d) : null;
    r = (0, u.castToSignedPreKeyId)(p);
    s = new Uint8Array(h);
  } catch (e) {
    return (0, l.makeError)("errSignalDeserializePkKeyBadFormat");
  }
  const p = v(s);
  if (!p.success) {
    return p;
  }
  return (0, l.makeResult)((0, i.default)((0, i.default)({}, p.value), {}, {
    remote: n,
    sessionBaseKey: o,
    localSignedPreKeyId: r,
    localOneTimeKeyId: a
  }));
};
exports.encryptMsg = function () {
  return y.apply(this, arguments);
};
exports.findMatchingSession = function (e, t) {
  if (N(e, t)) {
    return e;
  }
  const {
    prevSessions: n
  } = e;
  for (let r = 0; r < n.length; r++) {
    const i = (0, d.parseSession)(n[r]);
    if (N(i, t)) {
      return (0, d.setPrevSessions)(i, [(0, d.detachSession)(e), ...n.slice(0, r), ...n.slice(r + 1)]);
    }
  }
  return null;
};
exports.readContent = C;
exports.versionByte = P;
var i = r(require("../vendor/73982.js"));
var a = r(require("../vendor/311504.js"));
var o = require("./904704.js");
var s = require("./31549.js");
var l = require("./135781.js");
var u = require("./685419.js");
var c = require("./513611.js");
var d = require("./122470.js");
var p = require("./67106.js");
var f = require("./2336.js");
var _ = require("./491296.js");
var g = require("./394629.js");
var m = require("./385914.js");
const h = 2000;
function y() {
  return (y = (0, a.default)(function* (e, t) {
    const n = e.sendChain;
    const [r, i] = yield (0, _.deriveMsgKey)(n.nextMsgIndex, n.chainKey);
    const {
      cipherKey: a,
      macKey: s
    } = yield R(i);
    const l = yield self.crypto.subtle.encrypt({
      name: "AES-CBC",
      iv: i.iv
    }, a, t);
    const u = new o.Binary();
    u.writeByteArray(e.local.pubKey);
    u.writeByteArray(e.remote.pubKey);
    const c = u.size();
    u.writeUint8(P(d.FORMAT_VERSION, d.FORMAT_VERSION));
    (0, m.encodeProtobuf)(f.SignalMessageSpec, {
      ratchetKey: n.ratchetKey.serializedPubKey,
      counter: i.index,
      previousCounter: e.prevSendChainHighestIndex,
      ciphertext: l
    }, u);
    const p = u.readByteArray();
    const g = yield I(s, p);
    const h = p.subarray(c);
    const y = o.Binary.build(h, new Uint8Array(g, 0, 8)).readByteArray();
    let E;
    let S;
    const v = e.initialExchangeInfo;
    if (v != null) {
      var T;
      const t = new o.Binary();
      t.writeUint8(P(d.FORMAT_VERSION, d.FORMAT_VERSION));
      (0, m.encodeProtobuf)(f.PreKeySignalMessageSpec, {
        registrationId: e.local.regId,
        preKeyId: (T = v.remoteOneTimeId) !== null && T !== undefined ? T : undefined,
        signedPreKeyId: v.remoteSignedId,
        baseKey: v.localOneTimePubKey,
        identityKey: e.local.pubKey,
        message: y
      }, t);
      E = "pkmsg";
      S = t.readByteArray();
    } else {
      E = "msg";
      S = y;
    }
    const M = (0, d.makeSendChain)(n.ratchetKey, i.index + 1, r);
    return [(0, d.updateChains)(e, e.recvChains, M), {
      type: E,
      ciphertext: S
    }];
  })).apply(this, arguments);
}
function E() {
  return (E = (0, a.default)(function* (e, t) {
    if (e == null) {
      return (0, l.makeError)("errSignalNoSession");
    }
    const n = yield T(e, t);
    if (n.success) {
      const [e, t] = n.value;
      return (0, l.makeResult)({
        newSessionInfo: null,
        updatedSession: e,
        plaintext: t
      });
    }
    {
      const {
        prevSessions: r
      } = e;
      let i = n;
      for (let n = 0; !i.success && n < r.length; n++) {
        const a = (0, d.parseSession)(r[n]);
        const o = yield T(a, t);
        if (o.success) {
          const [t, u] = o.value;
          const c = (0, d.setPrevSessions)(t, [(0, d.detachSession)(e), ...r.slice(0, n), ...r.slice(n + 1)]);
          const p = e && (0, s.serializedPubKeysEqual)(c.remote.pubKey, e.remote.pubKey) ? null : c.remote.pubKey;
          i = (0, l.makeResult)({
            newSessionInfo: {
              newIdentity: p,
              baseSession: a,
              usedPreKey: null
            },
            updatedSession: c,
            plaintext: u
          });
        }
      }
      return i;
    }
  })).apply(this, arguments);
}
function S() {
  return (S = (0, a.default)(function* (e, t, n, r) {
    var i;
    const {
      localSignedPreKey: a
    } = r;
    if (a == null) {
      return (0, l.makeError)("errSignalInvalidSignedPreKey");
    }
    const o = (0, p.deserializeSignedPreKey)(a);
    if (o == null) {
      return (0, l.makeError)("errSignalSignedPreKeyDeserialization");
    }
    if (o.id !== n.localSignedPreKeyId) {
      return (0, l.makeError)("errSignalSignedPreKeyIdMismatch");
    }
    let c = null;
    if (n.localOneTimeKeyId != null) {
      const {
        localOneTimeKey: e
      } = r;
      if (e == null) {
        return (0, l.makeError)("errSignalInvalidOneTimeKey");
      }
      c = (0, u.deserializePreKey)(e);
      if (c == null) {
        return (0, l.makeError)("errSignalOneTimeKeyDeserialization");
      }
      if (c.id !== n.localOneTimeKeyId) {
        return (0, l.makeError)("errSignalOneTimeKeyMismatch");
      }
    }
    let f = yield (0, _.initiateSessionIncoming)(e, n.remote, n.sessionBaseKey, {
      signed: o.keyPair,
      oneTime: (i = c) === null || i === undefined ? undefined : i.keyPair,
      ratchet: (0, u.toSerializedKeyPair)(o.keyPair)
    });
    const g = f.remote.pubKey;
    const m = t && (0, s.serializedPubKeysEqual)(g, t.remote.pubKey) ? null : g;
    if (t && !m) {
      f = (0, d.setPrevSessions)(f, [(0, d.detachSession)(t), ...t.prevSessions.slice(0, 39)]);
    }
    const h = yield T(f, n);
    if (!h.success) {
      return h;
    }
    const [y, E] = h.value;
    return (0, l.makeResult)({
      newIdentity: m,
      baseSession: f,
      updatedSession: y,
      plaintext: E
    });
  })).apply(this, arguments);
}
function v(e) {
  let t;
  let n;
  let r = null;
  try {
    const i = C(e, d.FORMAT_VERSION, 8);
    if (!i.success) {
      return i;
    }
    const a = (0, g.decodeProtobuf)(f.SignalMessageSpec, i.value);
    const o = a.ratchetKey;
    r = a.counter;
    n = a.ciphertext;
    if (o == null || r == null || n == null) {
      return (0, l.makeError)("errSignalDeserializeInvalidProtoFormat");
    }
    t = (0, u.castToSerializedPubKey)(new Uint8Array(o));
  } catch (e) {
    return (0, l.makeError)("errSignalDeserializeRatchetKeyBadFormat");
  }
  const i = {
    ratchetPubKey: t,
    counter: r,
    ciphertext: new Uint8Array(n),
    versionContentMac: e
  };
  return (0, l.makeResult)(i);
}
function T() {
  return M.apply(this, arguments);
}
function M() {
  return (M = (0, a.default)(function* (e, t) {
    let {
      ratchetPubKey: n,
      counter: r,
      ciphertext: i,
      versionContentMac: a
    } = t;
    const c = e.recvChains;
    const p = e.recvChains.findIndex(e => (0, s.serializedPubKeysEqual)(e.ratchetPubKey, n));
    let f;
    let g;
    if (p === -1) {
      const t = yield (0, _.calculateRatchet)(e.rootKey, e.sendChain.ratchetKey, n);
      const i = (0, d.makeFreshRecvChain)(n, t.chainKey);
      const a = yield A(i, r);
      if (!a.success) {
        return a;
      }
      const o = a.value;
      const s = (0, u.makeSerializedKeyPair)();
      const l = yield (0, _.calculateRatchet)(t.rootKey, s, n);
      const p = c.slice(-4);
      p.push(o.updatedChain);
      g = o.msgKey;
      f = (0, d.ratchetSession)(e, p, (0, d.makeFreshSendChain)(s, l.chainKey), l.rootKey);
    } else {
      const t = yield A(c[p], r);
      if (!t.success) {
        return t;
      }
      const n = t.value;
      const i = c.slice();
      i[p] = n.updatedChain;
      g = n.msgKey;
      f = (0, d.updateChains)(e, i, e.sendChain);
    }
    const {
      cipherKey: m,
      macKey: h
    } = yield R(g);
    const y = o.Binary.build(e.remote.pubKey, e.local.pubKey, a.subarray(0, -8)).readByteArray();
    const E = yield I(h, y);
    const S = a.subarray(-8);
    const v = !(0, s.uint8ArraysEqual)(new Uint8Array(E, 0, 8), S);
    let T = null;
    try {
      T = yield self.crypto.subtle.decrypt({
        name: "AES-CBC",
        iv: g.iv
      }, m, i);
    } catch (e) {}
    if (v && T == null) {
      if (p === -1) {
        return (0, l.makeError)("errInvalidMacInvalidCipherKeyNewChain");
      } else {
        return (0, l.makeError)("errInvalidMacInvalidCipherKey");
      }
    } else if (v) {
      return (0, l.makeError)("errInvalidMacWithDecryptedPlaintext");
    } else if (T == null) {
      return (0, l.makeError)("errUnknownInvalidCipherKey");
    } else {
      return (0, l.makeResult)([f, T]);
    }
  })).apply(this, arguments);
}
function A() {
  return b.apply(this, arguments);
}
function b() {
  return (b = (0, a.default)(function* (e, t) {
    const n = t - e.nextMsgIndex;
    if (n > 2000) {
      return (0, l.makeError)("errSignalTooManyMessagesInFuture");
    }
    const r = e.unusedMsgKeys;
    if (n < 0) {
      const n = r.findIndex(e => e.index === t);
      if (n === -1) {
        return (0, l.makeError)("errDuplicateMsg");
      } else {
        return (0, l.makeResult)({
          msgKey: r[n],
          updatedChain: (0, d.makeRecvChain)(e.ratchetPubKey, e.nextMsgIndex, e.chainKey, O(r, n))
        });
      }
    }
    const i = e.nextMsgIndex;
    let [a, o] = yield (0, _.deriveMsgKey)(i, e.chainKey);
    let s = null;
    if (n > 0) {
      let e = n + r.length - h;
      if (e > 0) {
        s = r.slice(e);
        e -= r.length;
      } else {
        s = r.slice();
      }
      for (let n = i + 1; n <= t; n++) {
        if (e > 0) {
          e--;
        } else {
          s.push(o);
        }
        const t = yield (0, _.deriveMsgKey)(n, a);
        a = t[0];
        o = t[1];
      }
    }
    return (0, l.makeResult)({
      msgKey: o,
      updatedChain: (0, d.makeRecvChain)(e.ratchetPubKey, t + 1, a, s || r)
    });
  })).apply(this, arguments);
}
function C(e, t, n) {
  if (e.length < 1) {
    return (0, l.makeError)("errSignalEmptyVersionContentSuffix");
  }
  const r = e[0] >>> 4;
  if (r !== t) {
    if (r < t) {
      return (0, l.makeError)("errSignalLegacyMsg");
    } else {
      return (0, l.makeError)("errSignalInvalidVersion");
    }
  }
  const i = e.length - n;
  if (i < 1) {
    return (0, l.makeError)("errSignalContentExceededExpectedLength");
  } else {
    return (0, l.makeResult)(e.subarray(1, i));
  }
}
function P(e, t) {
  return (e << 4 | t) & 255;
}
function O(e, t) {
  const n = [];
  for (let r = 0; r < e.length; r++) {
    if (r !== t) {
      n.push(e[r]);
    }
  }
  return n;
}
function I(e, t) {
  return self.crypto.subtle.sign(c.HMAC_SHA256, e, t);
}
function R(e) {
  return Promise.all([(0, c.makeCryptoKey)(e.cipherKey, "aes-cbc"), (0, c.makeCryptoKey)(e.macKey, "hmac-sha256")]).then(e => {
    let [t, n] = e;
    return {
      cipherKey: t,
      macKey: n
    };
  });
}
function N(e, t) {
  const {
    aliceBaseKey: n
  } = e;
  return !!n && (0, s.serializedPubKeysEqual)(n, t);
}
exports.MAX_UNUSED_KEYS = h;