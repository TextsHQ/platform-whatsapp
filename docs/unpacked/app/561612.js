var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./194121.js");
var o = require("./135781.js");
var s = require("./628044.js");
var l = require("./715346.js");
var u = require("./775228.js");
var c = require("./685419.js");
var d = require("./513611.js");
var p = require("./122470.js");
var f = require("./67106.js");
var _ = require("./2336.js");
var g = require("./632157.js");
var m = require("./130309.js");
var h = require("./394629.js");
class y {
  createSenderKeyDistributionMsg(e, t, n, r) {
    return (0, i.default)(function* () {
      let i = yield e(n, r);
      if (!i.success && i.error === "errLoadSenderKeySession") {
        const a = yield (0, c.makeKeyPair)();
        yield (0, m.getCryptoLibModule)().rotateGroupSenderKey({
          saveSenderKeySession: t
        }, n, r, a);
        i = yield e(n, r);
      }
      if (i.success) {
        const e = i.value.senderKeyStates.slice(-1);
        if (e.length > 0) {
          return (0, o.makeResult)((0, l.createSenderKeyDistributionProto)((0, u.convertFromRawToSenderKeyState)(e[0])));
        }
      }
      return (0, o.makeError)("errGetSenderKeyProto");
    })();
  }
  getSessionAliceBaseKey(e, t) {
    return (0, i.default)(function* () {
      const n = yield t(e);
      if (n == null ? undefined : n.aliceBaseKey) {
        return (0, o.makeResult)((0, d.toBuffer)(n.aliceBaseKey));
      } else {
        return (0, o.makeError)("errSessionExists");
      }
    })();
  }
  extractIdentityKey(e) {
    const t = (0, s.readContent)(e, p.FORMAT_VERSION, 0);
    if (!t.success) {
      return t;
    }
    try {
      const e = (0, h.decodeProtobuf)(_.PreKeySignalMessageSpec, t.value);
      const {
        registrationId: n,
        signedPreKeyId: r,
        baseKey: i,
        identityKey: a,
        message: s
      } = e;
      if (n == null || r == null || i == null || a == null || s == null) {
        return (0, o.makeError)("errSignalDeserializePkInvalidProtoFormat");
      } else {
        (0, d.ensureSize)(new Uint8Array(a), 33);
        return (0, o.makeResult)(a);
      }
    } catch (e) {
      __LOG__(3)`extractIdentityKey: parse proto failed`;
      return (0, o.makeError)("errSignalDeserializePkKeyBadFormat");
    }
  }
  verifySignature(e, t, n) {
    const r = (0, f.convertPublicKeyToSerializedPubKey)(e);
    const i = (0, d.ensureSize)(n, 64);
    return (0, f.verifyMsgSignalVariant)(r, t, i);
  }
  signMsg(e, t, n) {
    return (0, i.default)(function* () {
      const r = (0, c.makeKeyPairFromArrayBuffers)(e, t);
      const i = yield (0, f.signMsg)(r, new Uint8Array(n));
      return (0, d.toBuffer)(i);
    })();
  }
  makePreKey(e) {
    const t = (0, c.makePreKeys)(e, 1);
    const {
      id: n,
      keyPair: r
    } = t[0].plainObject;
    return {
      preKeyId: n,
      privKey: (0, d.toBuffer)(r.privateKey),
      pubKey: (0, d.toBuffer)(r.publicKey)
    };
  }
  makeSignedPreKey(e, t) {
    const n = (0, c.makeKeyPairFromArrayBuffers)(e.pubKey, e.privKey);
    const r = (0, f.makeSignedPreKey)(t, (0, g.unixTimeMs)(), n);
    return {
      preKeyId: r.id,
      signature: (0, d.toBuffer)(r.signature),
      pubKey: (0, d.toBuffer)(r.keyPair.publicKey),
      privKey: (0, d.toBuffer)(r.keyPair.privateKey)
    };
  }
  makeKeyPair() {
    const {
      privateKey: e,
      publicKey: t
    } = (0, c.makeKeyPair)();
    return {
      privKey: (0, d.toBuffer)(e),
      pubKey: (0, d.toBuffer)(t)
    };
  }
}
y.prototype.verify = a.verify;
y.prototype.makeRegistrationId = d.makeRegistrationId;
y.prototype.makeSenderKeyId = d.makeSenderKeyId;
var E = new y();
exports.default = E;