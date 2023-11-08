var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsSteps = undefined;
exports.getLabel = function (e) {
  switch (e) {
    case u.DataSharing:
      return i.fbt._("Ads Data Sharing", null, {
        hk: "3fBb6x"
      });
    case u.Wallpaper:
      return i.fbt._("Chat wallpaper", null, {
        hk: "1QtrdH"
      });
    case u.RequestAccountInfoSettings:
      return i.fbt._("Request Account Info", null, {
        hk: "3Xtg52"
      });
    case u.Notifications:
      return i.fbt._("Notifications", null, {
        hk: "aXthJ"
      });
    case u.TwoFactorAuthentication:
      return i.fbt._("Two-Step Verification", null, {
        hk: "1m2nwe"
      });
    case u.MediaAutoDownload:
      return i.fbt._("Media auto-download", null, {
        hk: "Xld4T"
      });
    case u.Security:
      return i.fbt._("Security", null, {
        hk: "2ucAX"
      });
    case u.PrivacySettings:
      return i.fbt._("Privacy", null, {
        hk: "4tjoQy"
      });
    case u.DesktopSettings:
      return i.fbt._("Desktop settings", null, {
        hk: "2f7GS5"
      });
    case u.Help:
      return i.fbt._("Help", null, {
        hk: "2IULqT"
      });
    case u.Developer:
      return "Developer";
    default:
      throw (0, l.default)("Unsupported setting.");
  }
};
exports.isSettingAvailable = function (e) {
  switch (e) {
    case u.DataSharing:
      return (0, r.smbDataSharingConsentEnabled)() === true;
    case u.PrivacySettings:
    case u.Security:
      return true;
    case u.TwoFactorAuthentication:
      return (0, o.web2FAEnabled)();
    case u.Wallpaper:
    case u.MediaAutoDownload:
    case u.RequestAccountInfoSettings:
      return true;
    case u.DesktopSettings:
      return false;
    case u.Help:
      return true;
    case u.Developer:
      return false;
    case u.Notifications:
      return true;
    default:
      return false;
  }
};
var r = require("../app/72696.js");
var o = require("../app/97858.js");
var l = a(require("../app/556869.js"));
var i = require("../vendor/548360.js");
const u = require("../vendor/76672.js").Mirrored(["Settings", "Wallpaper", "RequestAccountInfoSettings", "Blocked", "Profile", "Notifications", "TwoFactorAuthentication", "TwoFactorUpdateEmail", "TwoFactorUpdatePin", "TwoFactorRegistration", "TwoFactorDisable", "MediaAutoDownload", "Security", "PrivacyVisiblityEdit", "PrivacySettings", "DefaultEphemerality", "UserEphemerality", "DesktopSettings", "Help", "Developer", "ScreenLock", "DataSharing"]);
exports.SettingsSteps = u;