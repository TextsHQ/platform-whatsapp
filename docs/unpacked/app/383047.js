Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getErrorCodeFromLogoutReason = function (e) {
  switch (e) {
    case r.LogoutReason.ClientFatalError:
      return r.LOGOUT_REASON_CODE.CLIENT_FATAL;
    case r.LogoutReason.SyncdFailure:
    case r.LogoutReason.SyncdErrorDuringBootstrap:
    case r.LogoutReason.AccountSyncError:
    case r.LogoutReason.SyncdTimeout:
    case r.LogoutReason.CriticalSyncTimeout:
      return r.LOGOUT_REASON_CODE.SYNC_FAIL;
    case r.LogoutReason.HistorySyncTimeout:
      return r.LOGOUT_REASON_CODE.INITIAL_HISTORY_SYNC_TIMEOUT;
    case r.LogoutReason.AccountLocked:
      return r.LOGOUT_REASON_CODE.ACCOUNT_LOCKED;
    default:
      return null;
  }
};
exports.getPrevCustomLogoutMessage = function () {
  return a;
};
exports.getPrevLogoutReasonCode = function () {
  return i;
};
exports.setPrevCustomLogoutMessage = function (e) {
  a = e;
};
exports.setPrevLogoutReasonCode = function (e) {
  i = e;
};
var r = require("./332108.js");
let i = null;
let a = null;