var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateRatchet = h;
exports.deriveMsgKey = function () {
  return g.apply(this, arguments);
};
exports.deriveSenderKeyMsgKey = function () {
  return m.apply(this, arguments);
};
exports.initiateSenderKeySessionIncoming = function (e, t, n, r, i) {
  const a = (0, o.makeSenderKeyState)(n, undefined, (0, o.makeSenderKeyChainKey)(t, r), e, []);
  let s = null;
  s = i ? (0, o.updateSessionWithNewSenderKeyState)(i, a) : (0, o.makeNewSenderKeySession)(a);
  return Promise.resolve(s);
};
exports.initiateSenderKeySessionOutgoing = function (e) {
  const t = (0, o.makeSenderKeyState)((0, s.serializePubKey)(e), e.privateKey, (0, o.makeSenderKeyChainKey)(0, (0, s.makeRawSenderKey)()), (0, l.makeSenderKeyId)(), []);
  return Promise.resolve((0, o.makeNewSenderKeySession)(t));
};
exports.initiateSessionIncoming = function () {
  return _.apply(this, arguments);
};
exports.initiateSessionOutgoing = function () {
  return f.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./904704.js");
var o = require("./775228.js");
var s = require("./685419.js");
var l = require("./513611.js");
var u = require("./122470.js");
const c = new Uint8Array(32);
c.fill(255);
const d = new Uint8Array([1]);
const p = new Uint8Array([2]);
function f() {
  return (f = (0, i.default)(function* (e, t, n) {
    var r;
    let {
      regId: i,
      staticKeyPair: o
    } = e;
    const l = t.identity;
    const d = t.signedKey.publicKey;
    const p = n.privateKey;
    const f = o.privateKey;
    const _ = (r = t.oneTimeKey) === null || r === undefined ? undefined : r.publicKey;
    const g = a.Binary.build(c, v(f, d), v(p, l), v(p, d), _ && v(p, _)).readByteArray();
    const [m, y] = yield E(g, "WhisperText");
    const S = t.ratchetKey;
    const T = (0, u.makeFreshRecvChain)(S, y);
    const M = (0, s.makeSerializedKeyPair)();
    const A = yield h(m, M, S);
    const b = (0, u.makeInitialExchangeInfo)(t.oneTimeKey == null ? null : t.oneTimeKey.id, t.signedKey.id, (0, s.serializePubKey)(n));
    return (0, u.makeFreshSession)({
      regId: i,
      pubKey: (0, s.serializePubKey)(o)
    }, {
      regId: t.regId,
      pubKey: l
    }, A.rootKey, [T], (0, u.makeFreshSendChain)(M, A.chainKey), b, (0, s.serializePubKey)(n));
  })).apply(this, arguments);
}
function _() {
  return (_ = (0, i.default)(function* (e, t, n, r) {
    var i;
    let {
      regId: o,
      staticKeyPair: l
    } = e;
    const d = l.privateKey;
    const p = r.signed.privateKey;
    const f = n;
    const _ = t.pubKey;
    const g = (i = r.oneTime) === null || i === undefined ? undefined : i.privateKey;
    const m = a.Binary.build(c, T(_, p), T(f, d), T(f, p), g && T(f, g)).readByteArray();
    const [h, y] = yield E(m, "WhisperText");
    const S = r.ratchet;
    const v = (0, u.makeFreshSendChain)(S, y);
    return (0, u.makeSession)({
      regId: o,
      pubKey: (0, s.serializePubKey)(l)
    }, t, h, [], v, null, 0, [], n);
  })).apply(this, arguments);
}
function g() {
  return (g = (0, i.default)(function* (e, t) {
    const n = yield (0, l.makeCryptoKey)(t, "hmac-sha256");
    const r = e => self.crypto.subtle.sign({
      name: "HMAC",
      hash: "SHA-256"
    }, n, e);
    const i = r(d).then(e => (0, l.hkdf)(new Uint8Array(e), null, "WhisperMessageKeys", 80)).then(t => (0, u.splitMsgKey)(e, t));
    const a = r(p).then(e => (0, l.toBytes)(e, 32));
    return Promise.all([a, i]);
  })).apply(this, arguments);
}
function m() {
  return (m = (0, i.default)(function* (e, t) {
    const n = yield (0, l.makeCryptoKey)(t, "hmac-sha256");
    const r = e => self.crypto.subtle.sign({
      name: "HMAC",
      hash: "SHA-256"
    }, n, e);
    const i = r(d).then(e => (0, l.hkdf)(new Uint8Array(e), null, "WhisperGroup", 50)).then(t => (0, o.makeSenderKeyMsgKey)(e, t));
    const a = r(p).then(e => (0, l.toBytes)(e, 32));
    return Promise.all([a, i]);
  })).apply(this, arguments);
}
function h() {
  return y.apply(this, arguments);
}
function y() {
  return (y = (0, i.default)(function* (e, t, n) {
    const r = t.privateKey;
    const i = (0, s.ecdh)(r, n);
    const [a, o] = yield E(new Uint8Array(i), "WhisperRatchet", e);
    return {
      rootKey: a,
      chainKey: o
    };
  })).apply(this, arguments);
}
function E() {
  return S.apply(this, arguments);
}
function S() {
  return (S = (0, i.default)(function* (e, t) {
    let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    const r = yield (0, l.hkdf)(e, n, t, 64);
    return [(0, l.sliceBytes)(r, 0, 32), (0, l.sliceBytes)(r, 32, 32)];
  })).apply(this, arguments);
}
function v(e, t) {
  return new Uint8Array((0, s.ecdh)(e, t));
}
function T(e, t) {
  return v(t, e);
}