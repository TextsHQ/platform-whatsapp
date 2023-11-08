var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildSearchableHierarchy = function (e) {
  const t = {};
  return e.map(e => {
    const n = (0, r.default)({}, e);
    if (t[n.id] == null) {
      t[n.id] = n;
    }
    if (n.searchCriteria != null) {
      n.searchCriteria = n.searchCriteria.toLowerCase();
    }
    if (n.parentId != null) {
      n.parent = t[n.parentId];
      if (n.parent != null && n.parent.searchCriteria != null) {
        if (n.searchCriteria == null) {
          n.searchCriteria = "";
        }
        if (n.parent.searchCriteria != null) {
          n.searchCriteria += n.parent.searchCriteria;
        }
      }
    }
    return n;
  });
};
exports.getSettingsSearchHierarchy = function () {
  return [{
    step: i.SettingsSteps.Notifications,
    id: "notifications",
    parentId: null,
    isAvailable: true,
    searchCriteria: (0, l.toProductionString)((0, u.notificationsTitle)()),
    title: u.notificationsTitle,
    testid: "li-notifications",
    wamName: c.SETTINGS_ITEM_TYPE.NOTIFICATIONS
  }, {
    step: i.SettingsSteps.Notifications,
    id: "message_notifications",
    parentId: "notifications",
    isAvailable: true,
    title: u.messageNotificationsTitle,
    searchCriteria: [(0, l.toProductionString)((0, u.messageNotificationsTitle)()), (0, l.toProductionString)((0, u.messageNotificationsSubtitle)())].join(" ").toLowerCase()
  }, {
    step: i.SettingsSteps.Notifications,
    id: "show_previews",
    parentId: "notifications",
    isAvailable: true,
    title: u.showPreviewsTitle,
    searchCriteria: (0, l.toProductionString)((0, u.showPreviewsTitle)()).toLowerCase()
  }, {
    step: i.SettingsSteps.Notifications,
    id: "show_reaction_notifcations",
    parentId: "notifications",
    isAvailable: true,
    title: u.showReactionsTitle,
    searchCriteria: (0, l.toProductionString)((0, u.showReactionsTitle)()).toLowerCase()
  }, {
    step: i.SettingsSteps.Notifications,
    id: "sounds",
    parentId: "notifications",
    isAvailable: true,
    title: u.soundsTitle,
    searchCriteria: [(0, l.toProductionString)((0, u.soundsTitle)()), (0, l.toProductionString)((0, u.soundsSubtitle)())].join(" ").toLowerCase()
  }, null, null, {
    step: i.SettingsSteps.PrivacySettings,
    id: "privacy",
    parentId: null,
    isAvailable: true,
    searchCriteria: (0, l.toProductionString)((0, u.privacyTitle)()),
    title: u.privacyTitle,
    testid: "settings-drawer-item-privacy",
    wamName: c.SETTINGS_ITEM_TYPE.PRIVACY
  }, {
    step: i.SettingsSteps.PrivacyVisiblityEditLastSeen,
    id: "wcs_last_seen",
    parentId: "privacy",
    isAvailable: true,
    title: u.privacyLastSeenOnlineEnabledTitle,
    searchCriteria: (0, l.toProductionString)((0, u.privacyLastSeenOnlineEnabledTitle)()).toLowerCase()
  }, {
    step: i.SettingsSteps.PrivacyVisiblityEditProfilePicture,
    id: "wcs_profile_photo",
    parentId: "privacy",
    isAvailable: true,
    title: u.privacyProfilePhotoTitle,
    searchCriteria: (0, l.toProductionString)((0, u.privacyProfilePhotoTitle)()).toLowerCase()
  }, {
    step: i.SettingsSteps.PrivacyVisiblityEditAbout,
    id: "wcs_about_status",
    parentId: "privacy",
    isAvailable: true,
    title: u.privacyAboutTitle,
    searchCriteria: (0, l.toProductionString)((0, u.privacyAboutTitle)()).toLowerCase()
  }, {
    step: i.SettingsSteps.PrivacySettings,
    id: "wcs_read_receipts",
    parentId: "privacy",
    isAvailable: true,
    title: u.privacyReadReceiptsTitle,
    searchCriteria: (0, l.toProductionString)((0, u.privacyReadReceiptsTitle)()).toLowerCase()
  }, {
    step: i.SettingsSteps.DefaultEphemerality,
    id: "default_message_timer",
    parentId: "privacy",
    isAvailable: true,
    title: u.privacyDDMTitle,
    searchCriteria: [(0, l.toProductionString)((0, u.privacyDDMTitle)()), (0, l.toProductionString)((0, u.privacyDMTitle)())].join(" ").toLowerCase()
  }, {
    step: i.SettingsSteps.PrivacyVisiblityEditGroupAdd,
    id: "privacy_groups",
    parentId: "privacy",
    isAvailable: true,
    title: u.privacyGroupsTitle,
    searchCriteria: (0, l.toProductionString)((0, u.privacyGroupsTitle)()).toLowerCase()
  }, {
    step: i.SettingsSteps.Blocked,
    id: "privacy_blocked",
    parentId: "privacy",
    isAvailable: true,
    title: u.privacyBlockedTitle,
    searchCriteria: (0, l.toProductionString)((0, u.privacyBlockedTitle)()).toLowerCase()
  }, {
    step: i.SettingsSteps.ScreenLock,
    id: "screen_lock",
    parentId: "privacy",
    isAvailable: true,
    title: u.privacyScreenlockTitle,
    searchCriteria: (0, l.toProductionString)((0, u.privacyScreenlockTitle)()).toLowerCase()
  }, null, null, {
    step: i.SettingsSteps.DataSharing,
    id: "data_sharing",
    parentId: null,
    isAvailable: o.default.shouldDisplayDataSharingSetting(),
    searchCriteria: (0, l.toProductionString)((0, u.dataSharingTitle)()).toLowerCase(),
    title: u.dataSharingTitle,
    testid: "li-data-sharing",
    wamName: c.SETTINGS_ITEM_TYPE.DATA_SHARING
  }, {
    step: i.SettingsSteps.Security,
    id: "security",
    parentId: null,
    isAvailable: true,
    searchCriteria: (0, l.toProductionString)((0, u.securityTitle)()),
    title: u.securityTitle,
    testid: "li-security",
    wamName: c.SETTINGS_ITEM_TYPE.SECURITY
  }, {
    step: i.SettingsSteps.Theme,
    id: "theme",
    parentId: null,
    isAvailable: true,
    searchCriteria: [(0, l.toProductionString)((0, u.themeTitle)()), (0, l.toProductionString)((0, u.themeLightLabel)()), (0, l.toProductionString)((0, u.themeDarkLabel)())].join(" ").toLowerCase(),
    title: u.themeTitle,
    wamName: c.SETTINGS_ITEM_TYPE.THEME
  }, {
    step: i.SettingsSteps.Wallpaper,
    id: "wallpaper",
    parentId: null,
    isAvailable: true,
    searchCriteria: (0, l.toProductionString)((0, u.wallpaperTitle)()).toLowerCase(),
    title: u.wallpaperTitle,
    testid: "li-wallpaper",
    wamName: c.SETTINGS_ITEM_TYPE.CHAT_WALLPAPER
  }, {
    step: i.SettingsSteps.MediaAutoDownload,
    id: "media_auto_download",
    parentId: null,
    isAvailable: true,
    searchCriteria: (0, l.toProductionString)((0, u.mediaAutoDownloadTitle)()).toLowerCase(),
    title: u.mediaAutoDownloadTitle,
    testid: "li-media-auto-download",
    wamName: c.SETTINGS_ITEM_TYPE.MEDIA_AUTO_DOWNLOAD
  }, {
    step: i.SettingsSteps.RequestAccountInfoSettings,
    id: "request_account_info",
    parentId: null,
    isAvailable: true,
    searchCriteria: (0, l.toProductionString)((0, u.requestAccountInfoTitle)()).toLowerCase(),
    title: u.requestAccountInfoTitle,
    testid: "li-request-account-info",
    wamName: c.SETTINGS_ITEM_TYPE.REQUEST_ACCOUNT_INFO
  }, {
    step: i.SettingsSteps.DesktopSettings,
    id: "desktop_settings",
    parentId: null,
    isAvailable: () => false,
    title: u.desktopSettingsTitle,
    testid: "li-desktop",
    wamName: c.SETTINGS_ITEM_TYPE.DESKTOP_SETTINGS
  }, {
    step: i.SettingsSteps.DesktopSettings,
    id: "start_on_login",
    parentId: "desktop_settings",
    isAvailable: true,
    searchCriteria: (0, l.toProductionString)((0, u.startOnLoginTitle)()).toLowerCase(),
    title: u.startOnLoginTitle
  }, {
    step: i.SettingsSteps.KeyboardShortcuts,
    id: "keyboard_shortcuts",
    parentId: null,
    isAvailable: true,
    searchCriteria: (0, l.toProductionString)((0, u.keyboardShortcutsTitle)()).toLowerCase(),
    title: u.keyboardShortcutsTitle,
    testid: "li-keyboard-shortcuts",
    wamName: c.SETTINGS_ITEM_TYPE.KEYBOARD_SHORTCUTS
  }, {
    step: i.SettingsSteps.Help,
    id: "help",
    parentId: null,
    isAvailable: true,
    searchCriteria: (0, l.toProductionString)((0, u.helpTitle)()).toLowerCase(),
    title: u.helpTitle,
    testid: "li-help",
    wamName: c.SETTINGS_ITEM_TYPE.HELP
  }, {
    step: i.SettingsSteps.Help,
    id: "help_center",
    parentId: "help",
    isAvailable: true,
    searchCriteria: (0, l.toProductionString)((0, u.helpCenterTitle)()).toLowerCase(),
    title: u.helpCenterTitle
  }, {
    step: i.SettingsSteps.Help,
    id: "contact_us",
    parentId: "help",
    isAvailable: true,
    searchCriteria: (0, l.toProductionString)((0, u.contactUsTitle)()),
    title: u.contactUsTitle
  }, {
    step: i.SettingsSteps.Help,
    id: "terms",
    parentId: "help",
    isAvailable: true,
    searchCriteria: (0, l.toProductionString)((0, u.termsTitle)()).toLowerCase(),
    title: u.termsTitle
  }, {
    step: i.SettingsSteps.Help,
    id: "license",
    parentId: "help",
    isAvailable: () => s.UA.isElectron,
    searchCriteria: (0, l.toProductionString)((0, u.licensesTitle)()).toLowerCase(),
    title: u.licensesTitle
  }, null, {
    step: i.SettingsSteps.Logout,
    id: "logout",
    parentId: null,
    isAvailable: true,
    searchCriteria: (0, l.toProductionString)((0, u.logoutTitle)()),
    title: u.logoutTitle,
    wamName: c.SETTINGS_ITEM_TYPE.LOGOUT,
    testid: "li-logout",
    color: "danger"
  }].filter(Boolean);
};
var r = a(require("../vendor/81109.js"));
var o = a(require("../app/883891.js"));
var l = require("../app/317259.js");
require("../app/814843.js");
var i = require("./73016.js");
var u = require("./603397.js");
var s = require("../app/368170.js");
var c = require("./808581.js");