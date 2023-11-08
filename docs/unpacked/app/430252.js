var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Killswitch = undefined;
exports.didSuccessfulyFetchKillSwitchValues = c;
exports.fetchKillswitchValues = _;
exports.fetchKillswitchValuesAtLeastOnce = function () {
  return f.apply(this, arguments);
};
exports.getKillswitchOverridesMap = function () {
  return null;
};
exports.getKillswitchValue = function () {
  return p.apply(this, arguments);
};
exports.setKillswitchOverride = function () {};
var i = r(require("../vendor/348926.js"));
var a = require("./508247.js");
const o = Object.freeze({
  DESKTOP_UPSELL_MAC_QR_BANNER: "wa_web/logged_out_killswitches:desktop_upsell_mac_qr_banner",
  DESKTOP_UPSELL_WINDOWS_QR_BANNER: "wa_web/logged_out_killswitches:desktop_upsell_windows_qr_banner",
  DESKTOP_UPSELL_WINDOWS_QR_BANNER_VARIATION_2: "wa_web/logged_out_killswitches:desktop_upsell_windows_qr_banner_variation_2",
  ELECTRON_MAC_DEPRECATION_APPSTORE_BANNER_ENABLED: "wa_web/logged_out_killswitches:electron_mac_deprecation_appstore_banner_enabled",
  ELECTRON_MAC_DEPRECATION_APPSTORE_BANNER_EXPIRY_ENABLED: "wa_web/logged_out_killswitches:electron_mac_deprecation_appstore_banner_expiry_enabled",
  ELECTRON_MAC_DEPRECATION_APPSTORE_BANNER_EXPIRY_OFFSET: "wa_web/logged_out_killswitches:electron_mac_deprecation_appstore_banner_expiry_offset",
  ELECTRON_MAC_DEPRECATION_BANNER_ENABLED: "wa_web/logged_out_killswitches:electron_mac_deprecation_banner_enabled",
  ELECTRON_MAC_DEPRECATION_BANNER_EXPIRY_ENABLED: "wa_web/logged_out_killswitches:electron_mac_deprecation_banner_expiry_enabled",
  ELECTRON_MAC_DEPRECATION_BANNER_EXPIRY_OFFSET: "wa_web/logged_out_killswitches:electron_mac_deprecation_banner_expiry_offset",
  SW_UNREGISTER_KILLSWITCH: "wa_web/sw_killswitches:sw_unregister_killswitch",
  SW_PUSH_UNSUBSCRIBE_KILLSWITCH: "wa_web/sw_killswitches:sw_push_unsubscribe_killswitch",
  DB_ROLLOUT_VERSION_MODEL_STORAGE: "wa_web/db_rollout_version:model-storage",
  DB_ROLLOUT_VERSION_FTS_STORAGE: "wa_web/db_rollout_version:fts-storage",
  DB_ROLLOUT_VERSION_JOBS_STORAGE: "wa_web/db_rollout_version:jobs-storage",
  DB_ROLLOUT_VERSION_LRU_MEDIA_STORAGE: "wa_web/db_rollout_version:lru-media-storage-idb",
  DB_ROLLOUT_VERSION_OFFD_STORAGE: "wa_web/db_rollout_version:offd-storage",
  DB_ROLLOUT_VERSION_QPL_STORAGE: "wa_web/db_rollout_version:qpl-storage",
  DB_ROLLOUT_VERSION_SIGNAL_STORAGE: "wa_web/db_rollout_version:signal-storage",
  DB_ROLLOUT_VERSION_WORKER_STORAGE: "wa_web/db_rollout_version:worker-storage",
  DB_ROLLOUT_VERSION_SW: "wa_web/db_rollout_version_1_based:sw",
  DB_ROLLOUT_VERSION_WAWC: "wa_web/db_rollout_version_1_based:wawc",
  DB_ROLLOUT_VERSION_WAWC_DB_ENC: "wa_web/db_rollout_version_1_based:wawc_db_enc",
  DB_ROLLOUT_KILLSWITCH: "wa_web/db_rollout_version:db_rollout_killswitch"
});
exports.Killswitch = o;
let s = false;
let l = {};
let u = null;
function c() {
  return d.apply(this, arguments);
}
function d() {
  return (d = (0, i.default)(function* () {
    yield u;
    return s;
  })).apply(this, arguments);
}
function p() {
  return (p = (0, i.default)(function* (e) {
    try {
      var t;
      yield u;
      if ((t = l[e]) !== null && t !== undefined) {
        return t;
      } else {
        return null;
      }
    } catch (t) {
      __LOG__(2)`Unable to query killswitch ${e}`;
      return null;
    }
  })).apply(this, arguments);
}
function f() {
  return (f = (0, i.default)(function* () {
    return !!(yield c()) || (yield _(), c());
  })).apply(this, arguments);
}
function _() {
  return u || (u = new Promise(e => {
    (function () {
      return g.apply(this, arguments);
    })().then(() => {
      e();
      u = null;
    });
  }), u);
}
function g() {
  return (g = (0, i.default)(function* () {
    try {
      const e = yield self.fetch(`${a.DYN_ORIGIN}killswitch/`, {
        credentials: "include"
      });
      const t = yield e.json();
      if (t && typeof t == "object") {
        l = t;
        s = true;
      }
    } catch (e) {
      __LOG__(4, undefined, new Error(), true, ["non-sad"])`killswitch: Unable to query killswitches`;
      SEND_LOGS("killswitch: Unable to query killswitches", 0.001, "non-sad");
    }
  })).apply(this, arguments);
}