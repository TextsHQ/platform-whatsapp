var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KEY_TYPE = undefined;
exports.castToPreKeyId = g;
exports.castToSerializedPubKey = m;
exports.castToSignedPreKeyId = function (e) {
  return (0, s.ensureIntInRange)(e, 0, u);
};
exports.deserializePreKey = function (e) {
  try {
    const {
      id: t,
      publicKey: n,
      privateKey: r
    } = (0, l.decodeProtobuf)(o.PreKeyRecordStructureSpec, e);
    if (t == null || n == null || r == null) {
      return null;
    } else {
      return {
        id: g(t),
        keyPair: p((0, s.toBytes)(r, 32), m(new Uint8Array(n)))
      };
    }
  } catch (e) {
    return null;
  }
};
exports.ecdh = function (e, t) {
  return (0, i.scalarMult)(e, t.subarray(1)).buffer;
};
exports.makeKeyPair = d;
exports.makeKeyPairFrom = function (e) {
  const {
    publicKey: t,
    secretKey: n
  } = (0, i.keypairFromSecretKey)(e);
  return c((0, s.ensureSize)(t, 32), (0, s.ensureSize)(n, 32));
};
exports.makeKeyPairFromArrayBuffers = function (e, t) {
  return {
    publicKey: (0, s.toBytes)(e, 32),
    privateKey: (0, s.toBytes)(t, 32)
  };
};
exports.makeKeyPairFromSerialized = p;
exports.makePreKeys = function (e, t) {
  let n = (e - 1) % u;
  if (n <= 0) {
    n += u;
  }
  const r = [];
  for (let e = 0; e < t; e++) {
    const e = n === u ? 1 : n + 1;
    const t = d();
    const i = (0, s.encodeSignalProto)(o.PreKeyRecordStructureSpec, {
      id: e,
      publicKey: _(t),
      privateKey: t.privateKey
    });
    r.push({
      plainObject: {
        id: e,
        keyPair: t
      },
      record: i
    });
    n = e;
  }
  return r;
};
exports.makeRawSenderKey = function () {
  const e = (0, s.makeBytes)(32);
  self.crypto.getRandomValues(e);
  return e;
};
exports.makeSerializedKeyPair = function () {
  const e = d();
  return f(e.privateKey, _(e));
};
exports.makeSerializedKeyPairFrom = f;
exports.serializeIdentity = function (e) {
  const t = (0, s.makeBytes)(33);
  t[0] = 5;
  t.set((0, s.ensureSize)(e, 32), 1);
  return t;
};
exports.serializePubKey = _;
exports.toSerializedKeyPair = function (e) {
  return f(e.privateKey, _(e));
};
var i = require("./194121.js");
var a = r(require("./415227.js"));
var o = require("./984661.js");
var s = require("./513611.js");
var l = require("./394629.js");
exports.KEY_TYPE = 5;
const u = 16777215;
function c(e, t) {
  return {
    publicKey: e,
    privateKey: t
  };
}
function d() {
  const {
    publicKey: e,
    secretKey: t
  } = (0, i.keyPair)();
  t[0] &= 248;
  t[31] = t[31] & 63 | 64;
  return c((0, s.ensureSize)(e, 32), (0, s.ensureSize)(t, 32));
}
function p(e, t) {
  return c((0, s.sliceBytes)(t, 1, 32), e);
}
function f(e, t) {
  return {
    serializedPubKey: t,
    privateKey: e
  };
}
function _(e) {
  const t = (0, s.makeBytes)(33);
  t[0] = 5;
  t.set(e.publicKey, 1);
  return t;
}
function g(e) {
  return (0, s.ensureIntInRange)(e, 1, u);
}
function m(e) {
  if (e.length === 0 || e[0] !== 5) {
    throw (0, a.default)("Unrecognized public key type");
  }
  return (0, s.ensureSize)(e, 33);
}