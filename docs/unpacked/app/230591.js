var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commitBootstrapAppStateDownloadMetric = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./229079.js");
var o = require("./122393.js");
var s = require("./632157.js");
var l = require("./780386.js");
var u = require("./366891.js");
var c = require("./599764.js");
var d = require("./355933.js");
function p() {
  return (p = (0, i.default)(function* (e, t, n, r) {
    const i = new l.MdBootstrapAppStateDataDownloadedWamEvent({
      mdBootstrapPayloadType: [o.CollectionName.CriticalBlock, o.CollectionName.CriticalUnblockLow].includes(e) ? c.MD_BOOTSTRAP_PAYLOAD_TYPE.CRITICAL : c.MD_BOOTSTRAP_PAYLOAD_TYPE.NON_CRITICAL,
      mdTimestamp: (0, s.unixTimeMs)(),
      mdBootstrapStepDuration: (0, s.unixTimeMs)() - t,
      mdBootstrapStepResult: r === "success" ? d.MD_BOOTSTRAP_STEP_RESULT.SUCCESS : d.MD_BOOTSTRAP_STEP_RESULT.FAILURE,
      mdSessionId: yield u.MdSyncFieldStatsMeta.getMdSessionId()
    });
    const p = yield u.MdSyncFieldStatsMeta.getStorageEstimation();
    if (p.mdStorageQuotaBytes !== u.STORAGE_QUOTA_UNAVAILABLE) {
      i.mdStorageQuotaUsedBytes = p.mdStorageQuotaUsedBytes;
      i.mdStorageQuotaBytes = p.mdStorageQuotaBytes;
    }
    try {
      const e = (0, a.maybeNumberOrThrowIfTooLarge)(n);
      if (e != null) {
        i.mdBootstrapPayloadSize = e;
      }
    } catch (e) {}
    i.commit();
  })).apply(this, arguments);
}