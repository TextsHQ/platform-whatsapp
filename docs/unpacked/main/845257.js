var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsStepIcon = function (e) {
  const {
    setting: t
  } = e;
  switch (t) {
    case s.SettingsSteps.DataSharing:
      return _.default.createElement(r.BusinessDataSharingIcon, {
        width: 24,
        height: 24
      });
    case s.SettingsSteps.Notifications:
      return _.default.createElement(m.SettingsNotificationsIcon, {
        width: 27,
        height: 27
      });
    case s.SettingsSteps.PrivacySettings:
      return _.default.createElement(u.SecurityLockIcon, {
        width: 23,
        height: 23
      });
    case s.SettingsSteps.Security:
      return _.default.createElement(h.SettingsSecurityIcon, {
        width: 26,
        height: 26
      });
    case s.SettingsSteps.Wallpaper:
      return _.default.createElement(E.SettingsWallpaperIcon, null);
    case s.SettingsSteps.MediaAutoDownload:
      return _.default.createElement(i.MediaDownloadIcon, {
        width: 25,
        height: 25
      });
    case s.SettingsSteps.RequestAccountInfoSettings:
      return _.default.createElement(d.SettingsDocumentIcon, {
        width: 24,
        height: 24
      });
    case s.SettingsSteps.Help:
      return _.default.createElement(f.SettingsHelpIcon, {
        width: 27,
        height: 27
      });
    case s.SettingsSteps.Developer:
      return _.default.createElement(o.DeveloperIcon, null);
    case s.SettingsSteps.DesktopSettings:
      return _.default.createElement(c.SettingsDesktopIcon, null);
    case s.SettingsSteps.KeyboardShortcuts:
      return _.default.createElement(p.SettingsKeyboardIcon, null);
    case s.SettingsSteps.Theme:
      return _.default.createElement(g.SettingsThemeIcon, null);
    case s.SettingsSteps.Logout:
      return _.default.createElement(l.ExitIcon, {
        color: v.SvgColorProp.CRITICAL
      });
    default:
      return null;
  }
};
var r = require("../app/811026.js");
var o = require("./331464.js");
var l = require("./69943.js");
var i = require("./844443.js");
var u = require("./525821.js");
var s = require("./73016.js");
var c = require("./154960.js");
var d = require("./163980.js");
var f = require("./72655.js");
var p = require("./394126.js");
var m = require("./531067.js");
var h = require("./65034.js");
var g = require("./55160.js");
var E = require("./72733.js");
var v = require("../app/220584.js");
var _ = a(require("../vendor/667294.js"));