var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendAppStateSyncKeyRequest = function () {
  return _.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./405057.js");
var o = require("./347197.js");
var s = require("./731165.js");
var l = require("./348667.js");
var u = r(require("./565754.js"));
var c = require("./635881.js");
var d = require("./916260.js");
var p = require("./459857.js");
var f = require("./25942.js");
function _() {
  return (_ = (0, i.default)(function* (e) {
    const t = yield (0, l.getPeerDevices)();
    const n = {
      keyIds: e.map(e => ({
        keyId: (0, o.fromSyncKeyId)(e)
      }))
    };
    const r = t.map(e => ({
      id: new u.default({
        fromMe: true,
        remote: (0, p.assertGetMeUser)(),
        id: u.default.newId_DEPRECATED()
      }),
      to: e,
      type: "protocol",
      subtype: "app_state_sync_key_request",
      appStateSyncKeyRequest: n
    }));
    const i = t.map(e => e.getDeviceId());
    const _ = e.map(e => (0, a.syncKeyIdToHex)(e));
    __LOG__(2)`syncd: send key request key id ${_} to peer deviceIds ${i}`;
    yield (0, s.storePeerMessages)(r);
    yield Promise.all(r.map(e => (0, c.encryptAndSendKeyMsg)(e)));
    (0, d.logCriticalBootstrapStageIfNecessary)(f.BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.MISSING_KEYS_REQUESTED);
    return i;
  })).apply(this, arguments);
}