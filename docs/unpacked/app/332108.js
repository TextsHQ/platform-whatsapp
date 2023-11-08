Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogoutReason = exports.LOGOUT_REASON_CODE = undefined;
const r = require("../vendor/76672.js")({
  UserInitiated: "user_initiated",
  SyncdFailure: "syncd_failure",
  InvalidAdvStatus: "invalid_adv_status",
  CriticalSyncTimeout: "critical_sync_timeout",
  SyncdTimeout: "syncd_timeout",
  HistorySyncTimeout: "history_sync_timeout",
  AccountSyncTimeout: "account_sync_timeout",
  MDOptOut: "md_opt_out",
  UnknownCompanion: "unknown_companion",
  ClientVersionOutdated: "client_version_outdated",
  SyncdErrorDuringBootstrap: "syncd_error_during_bootstrap",
  AccountSyncError: "account_sync_error",
  ClientFatalError: "client_fatal_error",
  StorageQuotaExceeded: "storage_quota_exceeded",
  PrimaryIdentityKeyChange: "primary_identity_key_change",
  MissingEncSalt: "missing_enc_salt",
  MissingScreenLockSalt: "missing_screen_lock_salt",
  AccountLocked: "account_locked",
  MacElectronDeprecationSoftMigration: "mac_electron_deprecation_soft_migration",
  MacElectronDeprecationAppExpiry: "mac_electron_deprecation_app_expiry"
});
exports.LogoutReason = r;
exports.LOGOUT_REASON_CODE = {
  CLIENT_FATAL: "0",
  SYNC_FAIL: "1",
  INITIAL_HISTORY_SYNC_TIMEOUT: "2",
  ACCOUNT_LOCKED: "3"
};