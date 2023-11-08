var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertPublicKeyHexToUint8Array = function (e) {
  return new Uint8Array((0, s.parseHex)(e));
};
exports.convertPublicKeyToSerializedPubKey = function (e) {
  if (e.length === 33) {
    return (0, u.castToSerializedPubKey)(e);
  }
  if (e.length === 32) {
    return (0, u.serializeIdentity)(e);
  }
  throw (0, o.default)("verifyCertificate publicKey incorrect length");
};
exports.deserializeSignedPreKey = function (e) {
  try {
    const {
      id: t,
      publicKey: n,
      privateKey: r,
      signature: i,
      timestamp: a
    } = (0, p.decodeProtobuf)(c.SignedPreKeyRecordStructureSpec, e);
    if (t == null || n == null || r == null || i == null || a == null) {
      return null;
    } else {
      return {
        id: (0, u.castToSignedPreKeyId)(t),
        ts: (0, l.numberOrThrowIfTooLarge)(a),
        keyPair: (0, u.makeKeyPairFromSerialized)((0, d.toBytes)(r, 32), (0, u.castToSerializedPubKey)(new Uint8Array(n))),
        signature: (0, d.toBytes)(i, 64)
      };
    }
  } catch (e) {
    return null;
  }
};
exports.generateSignedPreKey = function (e, t, n) {
  return Promise.resolve().then(() => {
    const r = _(e, t, n);
    return {
      plainObject: r,
      record: g(r)
    };
  });
};
exports.makeSignature = f;
exports.makeSignedPreKey = _;
exports.serializeSignedPreKeyForPrivateStorage = g;
exports.signMsg = function (e, t) {
  return Promise.resolve().then(() => {
    const n = (0, d.makeBytes)(64);
    self.crypto.getRandomValues(n);
    return f(e, t, n);
  });
};
exports.signSenderKeyMessage = function (e, t) {
  const n = (0, d.makeBytes)(64);
  self.crypto.getRandomValues(n);
  return f(e, t, n);
};
exports.verifyMsgSignalVariant = function (e, t, n) {
  const r = n[63];
  if (r & 96) {
    return false;
  }
  return (0, i.runInAllocationScope)(() => {
    const {
      A: o,
      M: s,
      Z: l,
      pack25519: u,
      unpack25519: c
    } = a.lowlevel;
    const d = (0, i.allocate)(Uint8Array, 64);
    d.set(n);
    d[63] = r & 127;
    const p = (0, i.fieldElement)();
    const f = (0, i.fieldElement)();
    const _ = (0, i.fieldElement)();
    const g = (0, i.fieldElement)();
    const m = (0, i.fieldElement)();
    const h = (0, i.allocate)(Uint8Array, 32);
    const y = (0, i.fieldElement)();
    y[0] = 1;
    c(p, e.subarray(1));
    l(f, p, y);
    o(_, p, y);
    (0, i.inv25519)(g, _);
    s(m, f, g);
    u(h, m);
    h[31] = h[31] & 127 | r & 128;
    return (0, a.signDetachedVerify)(t, d, h);
  });
};
var i = require("./278071.js");
var a = require("./194121.js");
var o = r(require("./415227.js"));
var s = require("./390934.js");
var l = require("./229079.js");
var u = require("./685419.js");
var c = require("./984661.js");
var d = require("./513611.js");
var p = require("./394629.js");
function f(e, t, n) {
  const r = function (e, t, n) {
    return (0, i.runInAllocationScope)(() => {
      const r = t.length;
      const a = e.privateKey;
      const o = new Uint8Array(32);
      (0, i.scalarmultBase)(o, a);
      const s = o[31] & 128;
      const l = new Uint8Array(r + 128);
      l[0] = 254;
      l.fill(255, 1, 32);
      l.set(a, 32);
      l.set(t, 64);
      l.set(n, r + 64);
      const u = (0, i.allocate)(Uint8Array, 64);
      (0, i.hashSha512)(u, l, r + 128);
      l.set(o, 32);
      const c = (0, i.allocate)(Float64Array, 64);
      (0, i.reduce)(u, c);
      (0, i.scalarmultBase)(l, u);
      const d = (0, i.allocate)(Uint8Array, 64);
      let p;
      let f;
      (0, i.hashSha512)(d, l, r + 64);
      (0, i.reduce)(d, c);
      p = 0;
      for (; p < 32; ++p) {
        c[p] = u[p];
      }
      for (p = 0; p < 32; ++p) {
        for (f = 0; f < 32; ++f) {
          c[p + f] += d[p] * a[f];
        }
      }
      (0, i.modL)(l.subarray(32, 64), c);
      return {
        pubKeyNegative: s !== 0,
        signedMsg: l
      };
    });
  }(e, t, n);
  const a = (0, d.sliceBytes)(r.signedMsg, 0, 64);
  a[63] = a[63] & 127 | (r.pubKeyNegative ? 128 : 0);
  return a;
}
function _(e, t, n) {
  const r = (0, u.makeKeyPair)();
  const i = (0, d.makeBytes)(64);
  self.crypto.getRandomValues(i);
  const a = f(n, (0, u.serializePubKey)(r), i);
  if (!Number.isSafeInteger(t)) {
    throw (0, o.default)(`Expected timestamp to be a safe integer, given ${String(t)}`);
  }
  return {
    id: (0, u.castToPreKeyId)(e),
    ts: t,
    keyPair: r,
    signature: a
  };
}
function g(e) {
  const {
    id: t,
    keyPair: n
  } = e;
  return (0, d.encodeSignalProto)(c.SignedPreKeyRecordStructureSpec, {
    id: t,
    publicKey: (0, u.serializePubKey)(n),
    privateKey: n.privateKey,
    signature: e.signature,
    timestamp: e.ts
  });
}