var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllCriticalDataSynced = function () {
  return o.userPrefsIdb.get(s.BACKEND_ONLY_KEYS.CRITICAL_DATA_SYNCED) === true;
};
exports.getLastPeriodicAppStateSyncTs = function () {
  return o.userPrefsIdb.get(s.BACKEND_ONLY_KEYS.RECENT_MAILBOX_AGE_DAYS);
};
exports.getMdSyncActionsActionSanitized = function () {
  return o.userPrefsIdb.get(s.BACKEND_ONLY_KEYS.MD_SYNC_ACTIONS_ACTION_SANITIZED) === true;
};
exports.getNonCriticalDataSyncStatus = f;
exports.getPrimaryAllowsAllMutations = function () {
  return !!l.default.get(s.MD_KEYS.SYNCD_PRIMARY_ALLOWS_ALL_MUTATIONS);
};
exports.setAllCriticalDataSynced = function () {
  return u.apply(this, arguments);
};
exports.setLastPeriodicAppStateSyncTs = function () {
  return c.apply(this, arguments);
};
exports.setMdSyncActionsActionSanitized = function () {
  return p.apply(this, arguments);
};
exports.setNonCriticalDataSyncStatus = function () {
  return _.apply(this, arguments);
};
exports.setPrimaryAllowsAllMutations = function () {
  return l.default.set(s.MD_KEYS.SYNCD_PRIMARY_ALLOWS_ALL_MUTATIONS, true);
};
exports.setShouldCheckContactSyncStatus = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./409847.js");
var s = require("./94872.js");
var l = r(require("./53575.js"));
function u() {
  return (u = (0, a.default)(function* () {
    yield o.userPrefsIdb.set(s.BACKEND_ONLY_KEYS.CRITICAL_DATA_SYNCED, true);
    return l.default.set(s.MD_KEYS.CRITICAL_DATA_SYNCED, true);
  })).apply(this, arguments);
}
function c() {
  return (c = (0, a.default)(function* (e) {
    yield o.userPrefsIdb.set(s.BACKEND_ONLY_KEYS.LAST_PERIODIC_APP_STATE_SYNC_TS, e);
    return l.default.set(s.MD_KEYS.LAST_PERIODIC_APP_STATE_SYNC_TS, e);
  })).apply(this, arguments);
}
function d() {
  return (d = (0, a.default)(function* () {
    yield o.userPrefsIdb.set(s.BACKEND_ONLY_KEYS.SHOULD_CHECK_CONTACT_SYNC_STATUS, true);
    return l.default.set(s.MD_KEYS.SHOULD_CHECK_CONTACT_SYNC_STATUS, true);
  })).apply(this, arguments);
}
function p() {
  return (p = (0, a.default)(function* (e) {
    yield o.userPrefsIdb.set(s.BACKEND_ONLY_KEYS.MD_SYNC_ACTIONS_ACTION_SANITIZED, e);
    l.default.set(s.MD_KEYS.MD_SYNC_ACTIONS_ACTION_SANITIZED, e);
  })).apply(this, arguments);
}
function f() {
  return o.userPrefsIdb.get(s.BACKEND_ONLY_KEYS.NON_CRITICAL_DATA_SYNC_STATUS);
}
function _() {
  return (_ = (0, a.default)(function* (e) {
    var t;
    const n = (t = yield f()) !== null && t !== undefined ? t : {};
    yield o.userPrefsIdb.set(s.BACKEND_ONLY_KEYS.NON_CRITICAL_DATA_SYNC_STATUS, (0, i.default)((0, i.default)({}, n), e));
  })).apply(this, arguments);
}