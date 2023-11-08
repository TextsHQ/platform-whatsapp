Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syncdCriticalBootstrapStageLogger = function (e) {
  if (e.stage !== "SUCCESS") {
    return;
  }
  const t = (0, r.convertSyncdCriticalBootstrapStageFromAnnotations)(e.annotations);
  if (t == null) {
    return;
  }
  (0, a.logCriticalBootstrapStageIfNecessary)(function (e) {
    switch (e) {
      case r.SyncdCriticalBootstrapStageType.ABOUT_TO_APPLY_MUTATIONS:
        return o.BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.ABOUT_TO_APPLY_MUTATIONS;
      case r.SyncdCriticalBootstrapStageType.APPLIED_MUTATIONS:
        return o.BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.APPLIED_MUTATIONS;
      case r.SyncdCriticalBootstrapStageType.MUTATIONS_DECRYPTED:
        return o.BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.MUTATIONS_DECRYPTED;
      case r.SyncdCriticalBootstrapStageType.REQUEST_BUILT:
        return o.BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.REQUEST_BUILT;
      case r.SyncdCriticalBootstrapStageType.RESPONSE_RECEIVED:
        return o.BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.RESPONSE_RECEIVED;
      case r.SyncdCriticalBootstrapStageType.RESPONSE_PARSED_VALID:
        return o.BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.RESPONSE_PARSED_VALID;
      case r.SyncdCriticalBootstrapStageType.ENTERED_RETRY_MODE:
        return o.BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.ENTERED_RETRY_MODE;
      case r.SyncdCriticalBootstrapStageType.MISSING_KEYS_RECEIVED:
        return o.BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.MISSING_KEYS_RECEIVED;
    }
  }(t.type));
};
exports.syncdDecryptMutationsMetricsLogger = function (e) {
  const {
    stage: t,
    annotations: n
  } = e;
  if (t !== "SUCCESS") {
    return;
  }
  const a = (0, r.convertSyncdDecryptMutationsMetricsFromAnnotations)(n);
  if (a == null) {
    return;
  }
  a.decryptedMutationMessageRangeCountArray.forEach(e => (0, i.logMetricsForMutationLength)(e));
};
var r = require("./751691.js");
var i = require("./372088.js");
var a = require("./916260.js");
var o = require("./25942.js");