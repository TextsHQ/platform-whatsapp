var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleAppStateSyncKeyRequest = function () {
  return d.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/405057.js");
var l = require("./46811.js");
var i = require("../app/347197.js");
var u = require("../app/323829.js");
var s = require("../app/628905.js");
var c = require("../app/459857.js");
function d() {
  return (d = (0, r.default)(function* (e, t) {
    if (!(0, c.isMeAccountNonLid)(t)) {
      __LOG__(4, undefined, new Error(), true)`syncd: key request wid error`;
      return void SEND_LOGS("syncd: key request wid error");
    }
    const n = e.keyIds;
    if (n) {
      const e = n.map(e => e.keyId).filter(Boolean).map(i.toSyncKeyId);
      __LOG__(2)`syncd: handleAppStateSyncKeyRequest from device ${t.getDeviceId()}
\t for keyIds: [${e.map(o.syncKeyIdToHex)}]`;
      if (e) {
        const {
          keys: n,
          orphanKeys: a
        } = yield (0, l.getKeysForKeyRequest)(e);
        __LOG__(2)`syncd: handleAppStateSyncKeyRequest from device ${t.getDeviceId()}: about to send key share
\t keys with keydata: [${n.map(e => (0, o.syncKeyIdToHex)(e.keyId))}]
\t keys without keydata: [${a.map(e => (0, o.syncKeyIdToHex)(e))}]`;
        return (0, s.getJobManager)().waitUntilPersisted(u.jobSerializers.sendRequestedKeyShare(n, a, t));
      }
    }
  })).apply(this, arguments);
}