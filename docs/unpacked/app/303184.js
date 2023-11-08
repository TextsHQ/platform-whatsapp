var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tryDecryptPatch = function (e, t) {
  return Promise.all(t.mutations.map(t => h(e, t.operation, t.record)));
};
exports.tryDecryptSnapshot = function (e, t) {
  return Promise.all(t.records.map(t => h(e, s.SyncdMutation$SyncdOperation.SET, t)));
};
var i = r(require("../vendor/311504.js"));
var a = require("./819416.js");
var o = require("./31549.js");
var s = require("./679905.js");
var l = require("./216728.js");
var u = require("./47371.js");
var c = require("./405057.js");
var d = require("./65461.js");
var p = require("./256764.js");
var f = require("./36686.js");
var _ = require("./787685.js");
var g = r(require("./334668.js"));
const m = new TextDecoder();
function h() {
  return y.apply(this, arguments);
}
function y() {
  return (y = (0, i.default)(function* (e, t, n) {
    const r = n.keyId.id;
    const i = yield (0, f.getKeyData)(r);
    if (!i) {
      if (t === s.SyncdMutation$SyncdOperation.REMOVE) {
        yield (0, a.getDbImpls)().writeSyncdLog(e, "exception: no key data for remove mutations");
        throw new p.SyncdFatalError("no key data for remove mutations");
      }
      throw new p.SyncdMissingKeyError();
    }
    const {
      syncAction: o,
      indexMac: l,
      valueMac: u,
      indexValueBinary: c
    } = yield E(e, r, i, t, n);
    const {
      index: d,
      version: _
    } = o;
    return {
      index: m.decode(d),
      action: null,
      version: _,
      keyId: r,
      operation: t,
      indexMac: l,
      valueMac: u,
      collection: e,
      binarySyncData: c
    };
  })).apply(this, arguments);
}
function E() {
  return S.apply(this, arguments);
}
function S() {
  return (S = (0, i.default)(function* (e, t, n, r, i) {
    const a = i.index.blob;
    const s = i.value.blob;
    const f = (0, l.valueMacFromIndexAndValueCipherText)(s);
    const m = (0, c.split)(s, u.IV_LENGTH, s.byteLength - u.MAC_LENGTH - u.IV_LENGTH);
    const h = m[0];
    const y = m[1];
    const E = m[2];
    const S = yield (0, l.generateEncryptionKeys)(n);
    const {
      indexKey: v,
      valueEncryptionKey: T,
      valueMacKey: M
    } = S;
    const A = (0, c.combine)([h, y]);
    const b = (0, l.generateAssociatedData)(r, t);
    const C = yield (0, l.generateMac)(b, A, M);
    if (!(0, o.arrayBuffersEqual)(E, C)) {
      (0, _.reportSyncdFatalError)(_.SyncdFatalErrorType.DECRYPTION_FAILED, e);
      throw new p.SyncdFatalError("decryption failure: valueMAC mismatch");
    }
    const P = yield (0, l.decryptCipherText)(new Uint8Array(h), T, y);
    const O = (0, d.decodeSyncActionData)(e, P);
    const I = g.default.validateSyncActionDataProtobuf(e, O);
    const R = yield (0, l.generateIndexMac)(v, I.index);
    if (!(0, o.arrayBuffersEqual)(a, R)) {
      (0, _.reportSyncdFatalError)(_.SyncdFatalErrorType.DECRYPTION_FAILED, e);
      throw new p.SyncdFatalError("decryption failure: indexMAC mismatch");
    }
    return {
      syncAction: I,
      indexMac: a,
      valueMac: f,
      indexValueBinary: P
    };
  })).apply(this, arguments);
}