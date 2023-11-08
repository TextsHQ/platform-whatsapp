var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureNonCriticalDataSyncIsInitialized = function () {
  return _.apply(this, arguments);
};
exports.handlePnhGroupLidABPropConfigValueChange = function () {
  return f.apply(this, arguments);
};
exports.handleServiceImprovementOptOutFlagABPropConfigValueChange = function (e) {
  if (e !== (0, a.getABPropConfigValue)("service_improvement_opt_out_flag")) {
    (0, o.setAbPropDependingGlobalWamAttributes)();
  }
};
var i = r(require("../vendor/348926.js"));
var a = require("./287461.js");
var o = require("./100898.js");
var s = require("./533494.js");
var l = require("./274054.js");
var u = require("./437911.js");
var c = r(require("./775410.js"));
var d = require("./960523.js");
var p = require("./128378.js");
function f() {
  return (f = (0, i.default)(function* (e) {
    if (!c.default.isSyncDBootstrapGroupMetadataQueryInProcess()) {
      if ((0, a.getABPropConfigValue)("pnh_group_lid") > e) {
        yield (0, l.queryAndUpdateAllGroupMetadata)();
      }
    }
  })).apply(this, arguments);
}
function _() {
  return (_ = (0, i.default)(function* () {
    if ((0, a.getABPropConfigValue)("recent_sticker_rollout_phase") < 3) {
      return;
    }
    const e = yield (0, d.getNonCriticalDataSyncStatus)();
    if ((e == null ? undefined : e[p.NON_CRITICAL_DATA_SYNC_STATUS_TYPE.RECENT_STICKER_INITIALIZED]) === p.RECENT_STICKER_INITIALIZED_STATUS_TYPE.NEED_REQUEST_BOOTSTRAP) {
      __LOG__(2)`Recent Stickers: request peer message for recent sticker bootstrap.`;
      yield (0, u.sendPeerDataOperationRequest)(s.Message$PeerDataOperationRequestType.SEND_RECENT_STICKER_BOOTSTRAP, {});
    }
  })).apply(this, arguments);
}