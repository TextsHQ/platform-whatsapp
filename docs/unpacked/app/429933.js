var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfigImpl = undefined;
var i = r(require("./670983.js"));
var a = require("./287461.js");
var o = r(require("./542817.js"));
var s = require("./304528.js");
var l = require("./445729.js");
var u = r(require("./174285.js"));
var c = require("./937001.js");
var d = require("./94872.js");
var p = r(require("./556869.js"));
const f = {
  isCompanion: () => true,
  logoutInProgress: () => o.default.isLogoutInProgress,
  mediaImagePreviewHkdfInfo: () => {
    throw (0, p.default)("config: No config for mediaImagePreviewHkdfInfo");
  },
  mediaVideoPreviewHkdfInfo: () => {
    throw (0, p.default)("config: No config for mediaVideoPreviewHkdfInfo");
  },
  offlineProcessingState: () => require("./359484.js").OfflineMessageHandler.isResumeFromRestartComplete() ? "idle" : "processing",
  orchestratorVersion: () => "default",
  primaryPlatform: () => l.Conn.platform,
  syncdActionHandlers: () => s.ActionHandlers,
  syncdAdditionalMutations: () => (0, a.getABPropConfigValue)("syncd_additional_mutations_count"),
  syncdDisabled: () => (0, i.default)(u.default, "localStorage").getItem(d.KEYS.SYNCD_DISABLED_DUE_TO_FATAL) === "true",
  syncdInlineMutationsMaxCount: () => c.ServerProps.syncdInlineMutationsMaxCount,
  syncdKeyMaxUseDays: () => c.ServerProps.syncdKeyMaxUseDays,
  syncdMaxMutationsToProcessDuringResume: () => (0, a.getABPropConfigValue)("web_syncd_max_mutations_to_process_during_resume"),
  syncdPatchDeviceIndexIncluded: () => true,
  syncdPatchProtobufMaxSize: () => c.ServerProps.syncdPatchProtobufMaxSize,
  syncdQPLLoggingEnabled: () => c.ServerProps.syncdQPLLoggingEnabled,
  syncdShouldFatalOnMissingPatch: () => (0, a.getABPropConfigValue)("web_should_fatal_on_missing_patch"),
  syncdShouldNotFatalOnSnapshotMacMismatchInPatches: () => (0, a.getABPropConfigValue)("syncd_do_not_fatal_on_snapshot_mac_mismatch_in_patches"),
  syncdWaitForKeyTimeoutDays: () => c.ServerProps.syncdWaitForKeyTimeoutDays,
  maxPrekeysToUpload: () => c.ServerProps.maxKeys,
  forceNonPersistedJobs: () => false,
  ignoreForceNonPersistedJobList: () => [],
  orchestratorConfig: () => {},
  waitForConnection: () => false,
  isUseridAnnotationEnabled: () => false,
  isEmployee: () => false,
  useUpdatedSenderKeySession: () => false
};
exports.ConfigImpl = f;