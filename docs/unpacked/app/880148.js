var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLoggedOutAppExpiryTime = _;
exports.useWAWebElectronDeprecationShouldShowLoggedOutExpiryNoticeScreen = function () {
  const e = (0, p.useQRScreenKillswitchValue)(l.Killswitch.ELECTRON_MAC_DEPRECATION_BANNER_EXPIRY_ENABLED);
  const t = _();
  let n;
  n = e == null || t == null ? {
    loading: true
  } : {
    loading: false,
    shouldShowExpiryNoticeScreen: false,
    appExpiryTime: t
  };
  (function (e) {
    var t;
    var n;
    const r = (0, d.default)();
    (0, f.useAlarm)(r, (t = e.appExpiryTime) !== null && t !== undefined ? t : (0, i.unixTime)(), {
      immediate: !e.loading,
      isGlobal: true
    });
    let a = null;
    if (!e.loading && e.shouldShowExpiryNoticeScreen) {
      a = (0, o.getNextExpirationTextUpdateTimestamp)(e.appExpiryTime);
    }
    const [s] = (0, f.useAlarm)(r, (n = a) !== null && n !== undefined ? n : (0, i.unixTime)(), {
      isGlobal: true
    });
    if (a != null) {
      s();
    }
  })(n);
  return n;
};
exports.useWAWebElectronDeprecationStage2ExpiryAlarm = function () {
  const e = (0, c.useABPropConfigValue)("web_electron_deprecation_mac_sideload_stage_2_expiry_kickoff");
  const t = (0, c.useABPropConfigValue)("web_electron_deprecation_mac_sideload_stage_2_expiry_delay");
  const n = (0, a.getElectronAppExpiryTime)(t);
  (0, f.useAlarm)(() => {
    u.Socket.logout(s.LogoutReason.MacElectronDeprecationSoftMigration);
  }, n, {
    immediate: e,
    isGlobal: true
  });
  const r = (0, d.default)();
  const i = (0, o.getNextExpirationTextUpdateTimestamp)(n);
  (0, f.useAlarm)(r, i, {
    immediate: e,
    isGlobal: true
  });
  return {
    stage2Enabled: e,
    stage2ExpiryTime: n
  };
};
var i = require("./632157.js");
var a = require("./17511.js");
var o = require("./227863.js");
var s = require("./332108.js");
var l = require("./430252.js");
var u = require("./38878.js");
var c = require("./325390.js");
var d = r(require("./969651.js"));
var p = require("./822301.js");
var f = require("./441673.js");
function _() {
  const e = (0, p.useQRScreenKillswitchValue)(l.Killswitch.ELECTRON_MAC_DEPRECATION_BANNER_EXPIRY_OFFSET);
  if (e != null) {
    return (0, a.getElectronAppExpiryTime)(e);
  } else {
    return null;
  }
}