var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCryptoDbCallbacks = function () {
  return {
    loadSession: function () {
      var e = (0, i.default)(function* (e) {
        const t = (0, c.createSignalAddress)((0, p.createDeviceWid)(e));
        const n = yield (0, d.getSignalProtocolStore)().loadSession(t);
        if (n != null) {
          return n;
        } else {
          return null;
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    }(),
    handleNewSession: (e, t, n, r) => {
      const i = (0, c.createSignalAddress)((0, p.createDeviceWid)(e));
      return Promise.all([(0, d.getSignalProtocolStore)().storeSession(i, t), n && (0, d.getSignalProtocolStore)().saveIdentity(i, (0, a.uint8ArrayToBuffer)(n)), r != null && (0, d.getSignalProtocolStore)().removePreKey(r)]).then(() => (0, o.makeResult)());
    },
    loadSignedPreKey: e => (0, d.getSignalProtocolStore)().loadSignedPreKey(e).then(t => {
      if (t == null) {
        return null;
      }
      const n = (0, s.makeKeyPairFromArrayBuffers)(t.pubKey, t.privKey);
      const r = (0, u.encodeSignalProto)(l.SignedPreKeyRecordStructureSpec, {
        id: e,
        publicKey: (0, s.serializePubKey)(n),
        privateKey: n.privateKey,
        signature: new Uint8Array(t.signature),
        timestamp: 0
      });
      return (0, u.castToByteEncoded)(r);
    }),
    loadOneTimePreKey: e => (0, d.getSignalProtocolStore)().loadPreKey(e).then(t => {
      if (t == null) {
        return null;
      }
      const n = (0, s.makeKeyPairFromArrayBuffers)(t.pubKey, t.privKey);
      const r = (0, u.encodeSignalProto)(l.PreKeyRecordStructureSpec, {
        id: e,
        publicKey: (0, s.serializePubKey)(n),
        privateKey: n.privateKey
      });
      return (0, u.castToByteEncoded)(r);
    }),
    loadSenderKeySession: (e, t) => {
      const n = (0, c.createSignalLikeSenderKeyName)(e, (0, p.createDeviceWid)(t));
      return (0, d.getSignalProtocolStore)().loadSenderKey(n).then(e => e == null ? (0, o.makeError)("errLoadSenderKeySession") : (0, o.makeResult)(e));
    },
    saveSenderKeySession: (e, t, n) => {
      const r = (0, c.createSignalLikeSenderKeyName)(e, (0, p.createDeviceWid)(t));
      return (0, d.getSignalProtocolStore)().storeSenderKey(r, n);
    },
    getRegistrationInfo: (e = (0, i.default)(function* () {
      const e = yield (0, d.getSignalProtocolStore)().getLocalRegistrationId();
      const t = yield (0, d.getSignalProtocolStore)().getIdentityKeyPair();
      if (e != null && t != null) {
        if (e && t) {
          return {
            regId: (0, u.castRegistrationId)(e),
            staticKeyPair: (0, s.makeKeyPairFromArrayBuffers)(t.pubKey.slice(1), t.privKey)
          };
        } else {
          return undefined;
        }
      }
    }), function () {
      return e.apply(this, arguments);
    })
  };
  var e;
};
var i = r(require("../vendor/348926.js"));
var a = require("./881841.js");
var o = require("./135781.js");
var s = require("./685419.js");
var l = require("./984661.js");
var u = require("./513611.js");
var c = require("./999821.js");
var d = require("./76256.js");
var p = require("./669050.js");