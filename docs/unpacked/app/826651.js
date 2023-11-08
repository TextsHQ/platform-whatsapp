var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encryptMutation = function () {
  return y.apply(this, arguments);
};
var i = r(require("../vendor/73982.js"));
var a = r(require("../vendor/311504.js"));
var o = require("./459617.js");
var s = require("./526835.js");
var l = require("./679905.js");
var u = require("./527796.js");
var c = require("./216728.js");
var d = require("./47371.js");
var p = require("./405057.js");
var f = require("./256764.js");
var _ = require("./36686.js");
var g = require("./787685.js");
var m = require("./507809.js");
var h = require("./394629.js");
function y() {
  return (y = (0, a.default)(function* (e, t) {
    const {
      index: n,
      operation: r
    } = e;
    let a = t.keyId;
    let o = t.keyData;
    switch (r) {
      case l.SyncdMutation$SyncdOperation.SET:
        break;
      case l.SyncdMutation$SyncdOperation.REMOVE:
        {
          const e = yield (0, s.getSyncActionInTransaction)(n);
          if (!e) {
            throw new f.SyncdFatalError("no corresponding set mutation");
          }
          const t = e.keyId;
          const r = yield (0, _.getKeyData)(t);
          if (r == null) {
            throw new f.SyncdFatalError("no key data for corresponding mutation");
          }
          a = t;
          o = r;
        }
    }
    const {
      indexMac: u,
      indexAndValueCipherText: d
    } = yield E(e, a, o);
    const p = (0, c.valueMacFromIndexAndValueCipherText)(d);
    return (0, i.default)((0, i.default)({}, e), {}, {
      keyId: a,
      keyData: o,
      indexMac: u,
      indexAndValueCipherText: d,
      valueMac: p
    });
  })).apply(this, arguments);
}
function E() {
  return S.apply(this, arguments);
}
function S() {
  return (S = (0, a.default)(function* (e, t, n) {
    try {
      const {
        index: r,
        binarySyncAction: i,
        operation: a,
        version: s
      } = e;
      const l = (0, o.stringToArrayBuffer)(r);
      const u = yield (0, c.generateEncryptionKeys)(n);
      const {
        indexKey: f,
        valueEncryptionKey: _,
        valueMacKey: g
      } = u;
      const m = yield self.crypto.getRandomValues(new Uint8Array(d.IV_LENGTH));
      const h = v(l, i, (0, c.generatePadding)(l.byteLength, i.byteLength), s);
      const y = yield (0, c.generateCipherText)(m, _, h);
      const E = (0, c.generateAssociatedData)(a, t);
      const S = yield (0, c.generateMac)(E, y, g);
      const T = (0, p.combine)([y, S]);
      return {
        indexMac: yield (0, c.generateIndexMac)(f, l),
        indexAndValueCipherText: T
      };
    } catch (e) {
      (0, g.reportSyncdFatalError)(g.SyncdFatalErrorType.ENCRYPTION_FAILED);
      throw new f.SyncdFatalError("encryption failure");
    }
  })).apply(this, arguments);
}
function v(e, t, n, r) {
  return (0, m.encodeSyncActionData)({
    index: e,
    value: (0, h.decodeProtobuf)(u.SyncActionValueSpec, t),
    padding: n,
    version: r
  });
}