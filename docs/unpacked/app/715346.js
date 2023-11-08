var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSenderKeyDistributionProto = function (e) {
  const t = (0, l.serializeSenderKeyState)(e);
  const n = new a.Binary();
  n.writeUint8((0, s.versionByte)(l.FORMAT_VERSION, l.FORMAT_VERSION));
  (0, m.encodeProtobuf)(f.SenderKeyDistributionMessageSpec, {
    id: t.senderKeyId,
    iteration: (0, d.definedOrThrow)(t.senderChainKey, "senderChainKey").iteration,
    chainKey: (0, d.definedOrThrow)(t.senderChainKey, "senderChainKey").seed,
    signingKey: (0, d.definedOrThrow)(t.senderSigningKey, "senderSigningKey").public
  }, n);
  return n.readByteArray();
};
exports.decryptSenderKeyMsgFromSession = function () {
  return E.apply(this, arguments);
};
exports.deserializeSenderKeyMsg = function (e) {
  if (e.length < 1) {
    return (0, o.makeError)("errSignalGrpVersionContentEmpty");
  }
  const t = e[0] >>> 4;
  if (t !== l.FORMAT_VERSION) {
    if (t < l.FORMAT_VERSION) {
      return (0, o.makeError)("errSignalLegacyMsg");
    } else {
      return (0, o.makeError)("errSignalInvalidVersion");
    }
  }
  if (e.length < 65) {
    return (0, o.makeError)("errSignalGrpInvalidVersionContentLength");
  }
  let n;
  let r;
  let i;
  try {
    const t = e.subarray(1, -64);
    const a = (0, g.decodeProtobuf)(f.SenderKeyMessageSpec, t);
    n = a.id;
    r = a.iteration;
    i = a.ciphertext;
    if (n == null || r == null || i == null) {
      return (0, o.makeError)("errSignalGrpSenderKeyInvalidProtoFormat");
    }
  } catch (e) {
    __LOG__(4, undefined, new Error())`Exception caught during SenderKeyMessageSpec Proto: ${e}`;
    return (0, o.makeError)("errSignalGrpSenderKeyProtoError");
  }
  return (0, o.makeResult)({
    senderKeyMessageId: n,
    iteration: r,
    ciphertext: new Uint8Array(i),
    versionContentMac: e
  });
};
exports.encryptSenderKeyMsgWithSession = function () {
  return y.apply(this, arguments);
};
exports.processSenderKeyDistributionMsg = function () {
  return h.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./904704.js");
var o = require("./135781.js");
var s = require("./628044.js");
var l = require("./775228.js");
var u = require("./685419.js");
var c = require("./513611.js");
var d = require("./122470.js");
var p = require("./67106.js");
var f = require("./2336.js");
var _ = require("./491296.js");
var g = require("./394629.js");
var m = require("./385914.js");
function h() {
  return (h = (0, i.default)(function* (e, t) {
    const n = S(e);
    if (!n.success) {
      return n;
    }
    const {
      senderKeyId: r,
      iteration: i,
      signingKeyPublic: a,
      chainKey: s
    } = n.value;
    const l = yield (0, _.initiateSenderKeySessionIncoming)(r, i, a, s, t);
    return (0, o.makeResult)(l);
  })).apply(this, arguments);
}
function y() {
  return (y = (0, i.default)(function* (e, t) {
    if (!e.senderKeyStates || e.senderKeyStates.length === 0) {
      return (0, o.makeError)("errSignalNoSession");
    }
    const n = e.senderKeyStates[e.senderKeyStates.length - 1];
    const [r, i] = yield (0, _.deriveSenderKeyMsgKey)(n.senderKeyChainKey.nextMsgIndex, n.senderKeyChainKey.chainKey);
    const [c, g] = yield v(i.seed);
    const h = yield self.crypto.subtle.encrypt({
      name: "AES-CBC",
      iv: g
    }, c, t);
    const y = new a.Binary();
    (0, m.encodeProtobuf)(f.SenderKeyMessageSpec, {
      id: n.senderKeyId,
      iteration: i.iteration,
      ciphertext: h
    }, y);
    const E = new a.Binary();
    E.writeUint8((0, s.versionByte)(l.FORMAT_VERSION, l.FORMAT_VERSION));
    E.writeBinary(y);
    const S = (0, u.makeKeyPairFromSerialized)((0, d.definedOrThrow)(n.senderSigningKeyPrivate, "senderSigningKeyPrivate"), n.senderSigningKeyPublic);
    const T = (0, p.signSenderKeyMessage)(S, E.readByteArray());
    const M = new a.Binary();
    M.writeUint8((0, s.versionByte)(l.FORMAT_VERSION, l.FORMAT_VERSION));
    M.writeBinary(y);
    M.writeByteArray(T);
    const A = (0, l.makeSenderKeyChainKey)(i.iteration + 1, r);
    const b = (0, l.updateSessionWithUpdatedSenderKeyState)(e, (0, l.makeSenderKeyState)(n.senderSigningKeyPublic, n.senderSigningKeyPrivate, A, n.senderKeyId, n.unusedMsgKeys));
    return (0, o.makeResult)([b, M.readByteArray()]);
  })).apply(this, arguments);
}
function E() {
  return (E = (0, i.default)(function* (e, t) {
    let {
      senderKeyMessageId: n,
      iteration: r,
      ciphertext: i,
      versionContentMac: a
    } = t;
    const s = (0, l.findSenderKeyState)(e, n);
    if (s == null) {
      return (0, o.makeError)("errSignalNoSession");
    }
    if (!M(a, s.senderSigningKeyPublic)) {
      return (0, o.makeError)("errSignalInvalidKey");
    }
    const u = yield A(s, r);
    if (!u.success) {
      return u;
    }
    const c = u.value;
    const d = c.msgKey;
    const p = (0, l.updateSessionWithUpdatedSenderKeyState)(e, c.updatedSenderKeyState);
    const [f, _] = yield v(d.seed);
    const g = yield self.crypto.subtle.decrypt({
      name: "AES-CBC",
      iv: _
    }, f, i);
    return (0, o.makeResult)([p, g]);
  })).apply(this, arguments);
}
function S(e) {
  let t;
  let n;
  let r;
  let i;
  let a;
  try {
    a = (0, s.readContent)(e, l.FORMAT_VERSION, 0);
    if (!a.success) {
      return a;
    }
    const c = (0, g.decodeProtobuf)(f.SenderKeyDistributionMessageSpec, a.value);
    t = c.id;
    n = c.iteration;
    const p = (0, d.bytesOrThrow)(c.signingKey, 33, "signingKey");
    r = (0, u.castToSerializedPubKey)(p);
    i = (0, d.bytesOrThrow)(c.chainKey, 32, "chainKey");
    if (t == null || n == null) {
      return (0, o.makeError)("errSignalGrpInvalidProtoFormat");
    }
  } catch (e) {
    return (0, o.makeError)("errSignalGrpInvalidKeyFormat");
  }
  return (0, o.makeResult)({
    senderKeyId: t,
    iteration: n,
    signingKeyPublic: r,
    chainKey: i
  });
}
function v() {
  return T.apply(this, arguments);
}
function T() {
  return (T = (0, i.default)(function* (e) {
    const t = new a.Binary(e);
    const n = (0, c.readBytes)(t, 16);
    const r = (0, c.readBytes)(t, 32);
    return [yield (0, c.makeCryptoKey)(r, "aes-cbc"), n];
  })).apply(this, arguments);
}
function M(e, t) {
  const n = e.subarray(e.length - 64);
  const r = e.subarray(0, e.length - 64);
  return (0, p.verifyMsgSignalVariant)(t, r, (0, c.toBytes)((0, c.toBuffer)(n), 64));
}
function A() {
  return b.apply(this, arguments);
}
function b() {
  return (b = (0, i.default)(function* (e, t) {
    const n = e;
    const r = t - n.senderKeyChainKey.nextMsgIndex;
    if (r > 2000) {
      return (0, o.makeError)("errSignalGrpTooManyMessagesInFuture");
    }
    const i = e.unusedMsgKeys || [];
    if (r < 0) {
      const e = i.findIndex(e => e.iteration === t);
      if (e === -1) {
        return (0, o.makeError)("errDuplicateMsg");
      } else {
        return (0, o.makeResult)({
          msgKey: i[e],
          updatedSenderKeyState: (0, l.makeSenderKeyState)(n.senderSigningKeyPublic, n.senderSigningKeyPrivate, n.senderKeyChainKey, n.senderKeyId, C(i, e))
        });
      }
    }
    const a = n.senderKeyChainKey.nextMsgIndex;
    let [u, c] = yield (0, _.deriveSenderKeyMsgKey)(a, n.senderKeyChainKey.chainKey);
    let d = null;
    if (r > 0) {
      let e = r + i.length - s.MAX_UNUSED_KEYS;
      if (e > 0) {
        d = i.slice(e);
        e -= i.length;
      } else {
        d = i.slice();
      }
      for (let n = a + 1; n <= t; n++) {
        if (e > 0) {
          e--;
        } else {
          d.push(c);
        }
        const t = yield (0, _.deriveSenderKeyMsgKey)(n, u);
        u = t[0];
        c = t[1];
      }
    }
    return (0, o.makeResult)({
      msgKey: c,
      updatedSenderKeyState: (0, l.makeSenderKeyState)(n.senderSigningKeyPublic, n.senderSigningKeyPrivate, (0, l.makeSenderKeyChainKey)(t + 1, u), e.senderKeyId, d || i)
    });
  })).apply(this, arguments);
}
function C(e, t) {
  const n = [];
  for (let r = 0; r < e.length; r++) {
    if (r !== t) {
      n.push(e[r]);
    }
  }
  return n;
}