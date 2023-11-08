var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateSignature = function () {
  return g.apply(this, arguments);
};
exports.isValidCurveKeyPair = d;
exports.keyPair = function (e) {
  let t;
  if (e === undefined) {
    t = new Uint8Array(32);
    self.crypto.getRandomValues(t);
  } else {
    t = new Uint8Array(e);
  }
  t[0] &= 248;
  t[31] &= 127;
  t[31] |= 64;
  return _({
    pubKey: 32,
    privKey: t,
    basepoint: u
  }, function (e) {
    const n = l._curve25519_donna(e.pubKey, e.privKey, e.basepoint);
    if (n) {
      throw (0, s.default)(`Curve25519:keyPair Error Code ${n}`);
    }
    return {
      pubKey: f(e.pubKey, 32),
      privKey: t.buffer
    };
  });
};
exports.sharedSecret = function (e, t) {
  return Promise.resolve().then(() => _({
    sharedKey: 32,
    pubKey: e,
    privKey: t
  }, function (e) {
    const t = l._curve25519_donna(e.sharedKey, e.privKey, e.pubKey);
    if (t) {
      throw (0, s.default)(`Curve25519:sharedSecret Error Code ${t}`);
    }
    return f(e.sharedKey, 32);
  }));
};
exports.toCurveKeyPair = function (e) {
  if (d(e)) {
    return e;
  }
  if (e.pubKey.byteLength !== 33 || e.privKey.byteLength !== 32) {
    throw (0, s.default)("Invalid key pair type");
  }
  const t = new Uint8Array(32);
  const n = new Uint8Array(32);
  t.set(new Uint8Array(e.pubKey).subarray(1));
  n.set(new Uint8Array(e.privKey));
  return {
    pubKey: t.buffer,
    privKey: n.buffer
  };
};
exports.toCurveKeyPubKey = function (e) {
  if (e.byteLength !== 33) {
    throw (0, s.default)("Invalid key type");
  }
  const t = new Uint8Array(32);
  t.set(new Uint8Array(e).subarray(1));
  return t.buffer;
};
exports.toSignalCurveKeyPair = function (e) {
  if (function (e) {
    return e.pubKey.byteLength === 33 && e.privKey.byteLength === 32;
  }(e)) {
    return e;
  }
  if (e.pubKey.byteLength !== 32 || e.privKey.byteLength !== 32) {
    throw (0, s.default)("Invalid key pair type");
  }
  const t = c(e.pubKey);
  const n = new Uint8Array(32);
  n.set(new Uint8Array(e.privKey));
  return {
    pubKey: t,
    privKey: n.buffer
  };
};
exports.toSignalCurvePubKey = c;
exports.verifySignature = function (e, t, n) {
  if (e.byteLength !== 32) {
    throw (0, s.default)(`Invalid public key length: ${e.byteLength}`);
  }
  const r = new Uint8Array(33);
  r[0] = 5;
  r.set(e, 1);
  if ((0, a.isCryptoLibraryEnabled)()) {
    return o.default.verifySignature(r, t, n);
  }
  return self.libsignal.Curve.verifySignature(r, t, n) === false;
};
var i = r(require("../vendor/348926.js"));
var a = require("./492917.js");
var o = r(require("./561612.js"));
var s = r(require("./556869.js"));
let l;
const u = new Uint8Array(32);
u[0] = 9;
function c(e) {
  if (e.byteLength !== 32) {
    throw (0, s.default)("Invalid key type");
  }
  const t = new Uint8Array(33);
  t[0] = 5;
  t.set(new Uint8Array(e), 1);
  return t.buffer;
}
function d(e) {
  return e.privKey.byteLength === 32 && e.pubKey.byteLength === 32;
}
function p(e) {
  if (typeof e == "number") {
    return l._malloc(e);
  }
  const t = new Uint8Array(e.buffer || e);
  const n = l._malloc(t.length);
  l.HEAPU8.set(t, n);
  return n;
}
function f(e, t) {
  const n = new Uint8Array(t);
  n.set(l.HEAPU8.subarray(e, e + t));
  return n.buffer;
}
function _(e, t) {
  if (!l) {
    l = require("./863503.js");
  }
  const r = {};
  try {
    for (const t in e) {
      r[t] = p(e[t]);
    }
    return t(r);
  } finally {
    for (const e in r) {
      l._free(r[e]);
    }
  }
}
function g() {
  return (g = (0, i.default)(function* (e, t) {
    if ((0, a.isCryptoLibraryEnabled)()) {
      return yield o.default.signMsg(e.pubKey, e.privKey, t);
    }
    return self.libsignal.Curve.calculateSignature(e.privKey, t);
  })).apply(this, arguments);
}