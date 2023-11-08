var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addKeyRotationRemoveCount = function (e) {
  if (e === 0) {
    return;
  }
  l.keyRotationRemoveCount += e;
  d();
};
exports.addMutationCount = function (e) {
  if (e === 0) {
    return;
  }
  l.mutationCount += e;
  d();
};
exports.addUnsetActionCount = function (e) {
  if (e === 0) {
    return;
  }
  l.unsetActionCount += e;
  d();
};
exports.clear = c;
exports.convertAppStateSyncDailyFromAnnotations = function (e) {
  var t;
  var n;
  var r;
  var i;
  var a;
  var o;
  var s;
  var l;
  return {
    mutationCount: (e == null || (t = e.int) === null || t === undefined ? undefined : t.mutationCount) || 0,
    invalidActionCount: (e == null || (n = e.int) === null || n === undefined ? undefined : n.invalidActionCount) || 0,
    unsupportedActionCount: (e == null || (r = e.int) === null || r === undefined ? undefined : r.unsupportedActionCount) || 0,
    keyRotationRemoveCount: (e == null || (i = e.int) === null || i === undefined ? undefined : i.keyRotationRemoveCount) || 0,
    storedMutationCount: (e == null || (a = e.int) === null || a === undefined ? undefined : a.storedMutationCount) || 0,
    uploadConflictCount: (e == null || (o = e.int) === null || o === undefined ? undefined : o.uploadConflictCount) || 0,
    unsetActionCount: (e == null || (s = e.int) === null || s === undefined ? undefined : s.unsetActionCount) || 0,
    missingKeyCount: (e == null || (l = e.int) === null || l === undefined ? undefined : l.missingKeyCount) || 0
  };
};
exports.forceCommitAppState = function () {
  if (u.isScheduled()) {
    u.forceRunNow();
  }
};
exports.incConflict = function () {
  l.uploadConflictCount++;
  d();
};
exports.setInvalidActionCount = function (e) {
  l.invalidActionCount = e;
  d();
};
exports.setMissingKeyCount = function (e) {
  l.missingKeyCount = e;
  d();
};
exports.setStoredMutationCount = function (e) {
  l.storedMutationCount = e;
  d();
};
exports.setUnsupportedActionCount = function (e) {
  l.unsupportedActionCount = e;
  d();
};
var i = r(require("../vendor/73982.js"));
var a = require("./489783.js");
var o = require("./947339.js");
var s = require("./685639.js");
let l = {
  mutationCount: 0,
  invalidActionCount: 0,
  unsupportedActionCount: 0,
  keyRotationRemoveCount: 0,
  storedMutationCount: 0,
  uploadConflictCount: 0,
  unsetActionCount: 0,
  missingKeyCount: 0
};
const u = new s.ShiftTimer(function () {
  t = l;
  const e = {
    int: (0, i.default)({}, t)
  };
  var t;
  c();
  (0, o.startMetric)(a.PRE_METRIC.APP_STATE_SYNC_DAILY).endSuccess(e);
});
function c() {
  l = {
    mutationCount: 0,
    invalidActionCount: 0,
    unsupportedActionCount: 0,
    keyRotationRemoveCount: 0,
    storedMutationCount: 0,
    uploadConflictCount: 0,
    unsetActionCount: 0,
    missingKeyCount: 0
  };
}
function d() {
  u.onOrBefore(300000);
}