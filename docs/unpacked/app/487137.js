var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasADeviceBeenRemoved = function (e, t) {
  const n = e.fingerprint;
  const {
    rawId: r,
    currentIndex: i,
    deviceIndexes: a
  } = t;
  const o = new Set(n.deviceIndexes);
  for (let e = n.currentIndex + 1; e <= i; e++) {
    o.add(e);
  }
  return n.rawId !== r || !(0, d.default)(o, new Set(a));
};
exports.hasKeyExpired = function (e) {
  const t = e.timestamp;
  const n = Math.min(90, Math.max(1, (0, a.getConfig)().syncdKeyMaxUseDays()));
  return (0, c.unixTimeMs)() - t > n * c.DAY_MILLISECONDS;
};
exports.rotateKey = function (e, t) {
  const {
    keyId: n,
    keyEpoch: r
  } = function (e) {
    let t;
    if (e == null) {
      const e = new Uint8Array(16);
      self.crypto.getRandomValues(e);
      t = (0, l.generateNewKeyEpoch)((0, u.toSyncKeyId)(e.buffer));
    } else {
      t = (0, l.generateNewKeyEpoch)(e.keyId);
    }
    const n = (0, s.interpretAsNumber)((0, s.extractDeviceId)((0, a.getMyDeviceJid)()));
    return {
      keyId: (0, u.toSyncKeyId)(new Uint8Array((0, i.concatArrayBuffers)((0, o.intToBytes)(2, n).buffer, (0, o.intToBytes)(4, t).buffer)).buffer),
      keyEpoch: t
    };
  }(t);
  const d = (0, u.toSyncKeyData)(self.crypto.getRandomValues(new Uint8Array(32)).buffer);
  const p = (0, c.unixTimeMs)();
  return {
    keyId: n,
    keyEpoch: r,
    keyData: d,
    fingerprint: e,
    timestamp: p
  };
};
var i = require("./145335.js");
var a = require("./819416.js");
var o = require("./881841.js");
var s = require("./418987.js");
var l = require("./840266.js");
var u = require("./347197.js");
var c = require("./632157.js");
var d = r(require("./900628.js"));