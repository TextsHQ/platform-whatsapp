var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getActiveKey = function () {
  let e = !(arguments.length > 0 && arguments[0] !== undefined) || arguments[0];
  return f.enqueue(() => _(e));
};
exports.getNewestKeyPair = m;
var i = r(require("../vendor/311504.js"));
var a = require("./819416.js");
var o = r(require("./415227.js"));
var s = require("./522815.js");
var l = require("./652204.js");
var u = require("./405057.js");
var c = require("./840266.js");
var d = require("./220816.js");
var p = require("./487137.js");
const f = new l.PromiseQueue();
function _() {
  return g.apply(this, arguments);
}
function g() {
  return (g = (0, i.default)(function* () {
    let e = !(arguments.length > 0 && arguments[0] !== undefined) || arguments[0];
    const t = yield m();
    const n = yield (0, a.getDbImpls)().getDeviceFingerprint();
    let r = false;
    let i = false;
    if (t != null) {
      r = (0, p.hasKeyExpired)(t);
      i = (0, p.hasADeviceBeenRemoved)(t, n);
      if (!e || !r && !i) {
        return {
          keyId: t.keyId,
          keyData: t.keyData
        };
      }
    } else if (!e || (0, a.getConfig)().isCompanion()) {
      throw (0, o.default)("syncd: No sync key available");
    }
    const l = (0, p.rotateKey)(n, t);
    __LOG__(2)`syncd: stored key rotation key id ${(0, u.syncKeyIdToHex)(l.keyId)}`;
    yield (0, s.setSyncKeyInTransaction)(l);
    yield (0, a.getDbImpls)().sendSyncdKeyRotation([l]);
    if (r) {
      __LOG__(2)`syncd: key rotation due to key expiry`;
      (0, d.reportSyncdKeyRotationEvent)(d.SyncdKeyRotationEventType.APP_STATE_SYNC_KEY_EXPIRY);
    }
    if (i) {
      __LOG__(2)`syncd: key rotation due to device removal`;
      (0, d.reportSyncdKeyRotationEvent)(d.SyncdKeyRotationEventType.DEVICE_DEREGISTERATION);
    }
    if (t == null) {
      __LOG__(2)`syncd: key rotation due to no key present`;
      (0, d.reportSyncdKeyRotationEvent)(d.SyncdKeyRotationEventType.NO_KEYS);
    }
    return _(e);
  })).apply(this, arguments);
}
function m() {
  return h.apply(this, arguments);
}
function h() {
  return (h = (0, i.default)(function* () {
    const e = yield (0, s.getAllSyncKeysInTransaction)();
    if (e.length === 0) {
      return null;
    }
    const t = e.map(e => (0, c.getKeyEpoch)(e.keyId));
    const n = Math.max(...t);
    const r = e.filter(e => (0, c.getKeyEpoch)(e.keyId) === n);
    const i = r.map(e => (0, c.getKeyDeviceId)(e.keyId));
    const a = Math.min(...i);
    return r[i.indexOf(a)];
  })).apply(this, arguments);
}