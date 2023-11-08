var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendAppStateSyncKeyShare = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./405057.js");
var o = require("./347197.js");
var s = require("./731165.js");
var l = require("./348667.js");
var u = r(require("./565754.js"));
var c = require("./635881.js");
var d = require("./459857.js");
function p() {
  return (p = (0, i.default)(function* (e) {
    let t;
    let n;
    if (e.type === "key_rotation") {
      t = f(e.keys);
      n = yield (0, l.getPeerDevices)();
    } else if (e.type === "missing_key") {
      t = f(e.keys, e.orphanKeys);
      n = [e.peerDeviceId];
    }
    if (n == null) {
      return Promise.resolve();
    }
    const r = n;
    const i = r.map(e => ({
      id: new u.default({
        fromMe: true,
        remote: (0, d.assertGetMeUser)(),
        id: u.default.newId_DEPRECATED()
      }),
      to: e,
      type: "protocol",
      subtype: "app_state_sync_key_share",
      appStateSyncKeyShare: t
    }));
    const o = r.map(e => e.getDeviceId());
    const p = e.keys.map(e => (0, a.syncKeyIdToHex)(e.keyId));
    __LOG__(2)`syncd: send key share key id ${p} to peer deviceIds ${o} due to ${e.type}`;
    yield (0, s.storePeerMessages)(i);
    yield Promise.all(i.map(e => (0, c.encryptAndSendKeyMsg)(e)));
  })).apply(this, arguments);
}
function f(e, t) {
  let n = e.map(e => ({
    keyId: {
      keyId: (0, o.fromSyncKeyId)(e.keyId)
    },
    keyData: {
      keyData: (0, o.fromSyncKeyData)(e.keyData),
      fingerprint: {
        rawId: e.fingerprint.rawId,
        currentIndex: e.fingerprint.currentIndex,
        deviceIndexes: e.fingerprint.deviceIndexes
      },
      timestamp: e.timestamp
    }
  }));
  if (t) {
    const e = t.map(e => ({
      keyId: {
        keyId: (0, o.fromSyncKeyId)(e)
      },
      keyData: undefined
    }));
    n = n.concat(e);
  }
  return {
    keys: n
  };
}