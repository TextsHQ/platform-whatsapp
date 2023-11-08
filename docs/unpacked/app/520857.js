var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logDailyStats = function () {
  return J.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./632157.js");
var s = require("./287461.js");
var l = require("./626525.js");
var u = require("./257147.js");
var c = require("./849005.js");
var d = require("./781178.js");
var p = require("./177938.js");
var f = require("./355135.js");
var _ = require("./110731.js");
var g = require("./656134.js");
var m = require("./339316.js");
var h = r(require("./495976.js"));
var y = require("./604095.js");
var E = require("./719621.js");
var S = require("./97858.js");
var v = require("./971804.js");
var T = require("./955562.js");
var M = require("./433727.js");
var A = require("./596372.js");
var b = require("./533134.js");
var C = require("./951540.js");
var P = require("./584194.js");
var O = require("./369586.js");
var I = require("./691195.js");
var R = require("./164172.js");
var N = require("./600607.js");
var D = require("./757453.js");
var w = require("./65410.js");
var L = require("./673168.js");
var k = require("./117429.js");
var G = require("./499264.js");
var U = require("./845290.js");
var x = require("./639614.js");
var B = require("./475163.js");
var F = require("./521394.js");
var j = require("./493287.js");
var Y = require("./110359.js");
var K = require("./21008.js");
var W = require("./818674.js");
var V = require("./120408.js");
var H = require("./172493.js");
var $ = r(require("./124928.js"));
function z(e) {
  if (e.goldenBoxContactNarrativeAppearCount > 0 || e.goldenBoxContactDialogAppearCount > 0 || e.goldenBoxContactDialogSelectCount > 0) {
    new P.PrivacyHighlightDailyWamEvent({
      privacyHighlightCategory: B.PRIVACY_HIGHLIGHT_CATEGORY_ENUM.E2EE,
      privacyHighlightSurface: F.PRIVACY_HIGHLIGHT_SURFACE_ENUM.GOLDEN_BOX_CONTACT,
      narrativeAppearCount: e.goldenBoxContactNarrativeAppearCount,
      dialogAppearCount: e.goldenBoxContactDialogAppearCount,
      dialogSelectCount: e.goldenBoxContactDialogSelectCount
    }).commit();
  }
  if (e.goldenBoxGroupNarrativeAppearCount > 0 || e.goldenBoxGroupDialogAppearCount > 0 || e.goldenBoxGroupDialogSelectCount > 0) {
    new P.PrivacyHighlightDailyWamEvent({
      privacyHighlightCategory: B.PRIVACY_HIGHLIGHT_CATEGORY_ENUM.E2EE,
      privacyHighlightSurface: F.PRIVACY_HIGHLIGHT_SURFACE_ENUM.GOLDEN_BOX_GROUP,
      narrativeAppearCount: e.goldenBoxGroupNarrativeAppearCount,
      dialogAppearCount: e.goldenBoxGroupDialogAppearCount,
      dialogSelectCount: e.goldenBoxGroupDialogSelectCount
    }).commit();
  }
  if (e.infoScreenGroupNarrativeAppearCount > 0 || e.infoScreenGroupDialogAppearCount > 0 || e.infoScreenGroupDialogSelectCount > 0) {
    new P.PrivacyHighlightDailyWamEvent({
      privacyHighlightCategory: B.PRIVACY_HIGHLIGHT_CATEGORY_ENUM.E2EE,
      privacyHighlightSurface: F.PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_GROUP,
      narrativeAppearCount: e.infoScreenGroupNarrativeAppearCount,
      dialogAppearCount: e.infoScreenGroupDialogAppearCount,
      dialogSelectCount: e.infoScreenGroupDialogSelectCount
    }).commit();
  }
  if (e.chatsListNarrativeAppearCount > 0 || e.chatsListDialogAppearCount > 0 || e.chatsListDialogSelectCount > 0) {
    new P.PrivacyHighlightDailyWamEvent({
      privacyHighlightCategory: B.PRIVACY_HIGHLIGHT_CATEGORY_ENUM.E2EE,
      privacyHighlightSurface: F.PRIVACY_HIGHLIGHT_SURFACE_ENUM.CHATS_LIST,
      narrativeAppearCount: e.chatsListNarrativeAppearCount,
      dialogAppearCount: e.chatsListDialogAppearCount,
      dialogSelectCount: e.chatsListDialogSelectCount
    }).commit();
  }
  if (e.statusListNarrativeAppearCount > 0 || e.statusListDialogAppearCount > 0 || e.statusListDialogSelectCount > 0) {
    new P.PrivacyHighlightDailyWamEvent({
      privacyHighlightCategory: B.PRIVACY_HIGHLIGHT_CATEGORY_ENUM.E2EE,
      privacyHighlightSurface: F.PRIVACY_HIGHLIGHT_SURFACE_ENUM.STATUS_LIST,
      narrativeAppearCount: e.statusListNarrativeAppearCount,
      dialogAppearCount: e.statusListDialogAppearCount,
      dialogSelectCount: e.statusListDialogSelectCount
    }).commit();
  }
  if (e.callingScreenAudioNarrativeAppearCount > 0 || e.callingScreenAudioDialogAppearCount > 0 || e.callingScreenAudioDialogSelectCount > 0) {
    new P.PrivacyHighlightDailyWamEvent({
      privacyHighlightCategory: B.PRIVACY_HIGHLIGHT_CATEGORY_ENUM.E2EE,
      privacyHighlightSurface: F.PRIVACY_HIGHLIGHT_SURFACE_ENUM.CALLING_SCREEN_AUDIO,
      narrativeAppearCount: e.callingScreenAudioNarrativeAppearCount,
      dialogAppearCount: e.callingScreenAudioDialogAppearCount,
      dialogSelectCount: e.callingScreenAudioDialogSelectCount
    }).commit();
  }
}
function q() {
  const e = !v.MuteCollection.globalReactionsMute();
  const t = !!(0, k.getIgnoreNondirectGroupMsg)();
  const n = new A.NotificationSettingWamEvent();
  n.set({
    groupReactionNotification: t && e,
    groupShowNotification: t,
    groupSoundTone: x.NOTIFICATION_SOUND_TONE.DEFAULT,
    inAppNotificationSound: (0, k.getGlobalSounds)(),
    messageReactionNotification: e,
    messageShowNotification: (0, k.getGlobalNotifications)(),
    messageSoundTone: x.NOTIFICATION_SOUND_TONE.DEFAULT,
    showPreview: (0, k.getGlobalPreviews)(),
    offlineNotification: (0, k.getGlobalOfflineNotifications)()
  });
  n.commit();
}
function J() {
  return (J = (0, a.default)(function* () {
    const e = yield Q();
    const t = yield Z();
    const n = yield re();
    const r = yield ae();
    const a = oe();
    const s = yield se();
    const l = (0, i.default)((0, i.default)((0, i.default)((0, i.default)((0, i.default)({}, e), t), n), a), s);
    const p = new _.DailyWamEvent();
    p.set(l);
    p.commit();
    q();
    const g = new V.WebcFtsStorageWamEvent();
    g.set({
      ftsTotalSize: r
    });
    g.commit();
    const m = new N.ScreenLockSettingsWamEvent();
    const h = ue();
    if (h) {
      m.set(h);
    }
    m.commit();
    const E = new R.ScreenLockSettingsDataWamEvent();
    const S = ce();
    if (S) {
      E.set(S);
    }
    E.commit();
    const v = (0, L.getPairingTimestamp)();
    const T = new H.WebcStorageStatWamEvent();
    T.set({
      webcStorageQuota: n.storageTotalSize,
      webcStorageUsage: n.storageUsed,
      webcAgeOfStorage: v != null ? (0, o.unixTimeWithoutClockSkewCorrection)() - v : -1,
      webcPackingEnabled: false
    });
    T.commit();
    const A = yield (0, D.getOfflineNotificationEngagement)();
    var P;
    var I;
    if (A) {
      new M.NotificationEngagementWamEvent({
        isWebBackgroundSyncNotif: true,
        totalNotifShown: (P = A.totalNotifShown) !== null && P !== undefined ? P : 0,
        totalNotifTapToOpen: (I = A.totalNotifTapToOpen) !== null && I !== undefined ? I : 0
      }).commit();
      (0, D.clearOfflineNotificationContentEngagement)();
    }
    (0, W.logDailyPrivateStatsTestEvents)();
    const w = f.DailyAggregatedStatsCollection.toArray().filter(e => e.shouldBeSubmitted());
    f.DailyAggregatedStatsCollection.remove(w);
    w.forEach(e => {
      new O.PttDailyWamEvent({
        pttCancelBroadcast: e.pttCancelBroadcast,
        pttCancelGroup: e.pttCancelGroup,
        pttCancelIndividual: e.pttCancelIndividual,
        pttCancelNewsletter: e.pttCancelNewsletter,
        pttDraftReviewBroadcast: e.pttDraftReviewBroadcast,
        pttDraftReviewGroup: e.pttDraftReviewGroup,
        pttDraftReviewIndividual: e.pttDraftReviewIndividual,
        pttDraftReviewNewsletter: e.pttDraftReviewNewsletter,
        pttFastplaybackBroadcast: e.pttFastplaybackBroadcast,
        pttFastplaybackGroup: e.pttFastplaybackGroup,
        pttFastplaybackIndividual: e.pttFastplaybackIndividual,
        pttFastplaybackNewsletter: e.pttFastplaybackNewsletter,
        pttLockBroadcast: e.pttLockBroadcast,
        pttLockGroup: e.pttLockGroup,
        pttLockIndividual: e.pttLockIndividual,
        pttLockNewsletter: e.pttLockNewsletter,
        pttOutOfChatBroadcast: e.pttOutOfChatBroadcast,
        pttOutOfChatGroup: e.pttOutOfChatGroup,
        pttOutOfChatIndividual: e.pttOutOfChatIndividual,
        pttOutOfChatNewsletter: e.pttOutOfChatNewsletter,
        pttPlaybackBroadcast: e.pttPlaybackBroadcast,
        pttPlaybackGroup: e.pttPlaybackGroup,
        pttPlaybackIndividual: e.pttPlaybackIndividual,
        pttPlaybackNewsletter: e.pttPlaybackNewsletter,
        pttRecordBroadcast: e.pttRecordBroadcast,
        pttRecordGroup: e.pttRecordGroup,
        pttRecordIndividual: e.pttRecordIndividual,
        pttRecordNewsletter: e.pttRecordNewsletter,
        pttSendBroadcast: e.pttSendBroadcast,
        pttSendGroup: e.pttSendGroup,
        pttSendIndividual: e.pttSendIndividual,
        pttSendNewsletter: e.pttSendNewsletter,
        pttPausedRecordBroadcast: e.pttPausedRecordBroadcast,
        pttPausedRecordGroup: e.pttPausedRecordGroup,
        pttPausedRecordIndividual: e.pttPausedRecordIndividual,
        pttPausedRecordNewsletter: e.pttPausedRecordNewsletter,
        pttStopTapBroadcast: e.pttStopTapBroadcast,
        pttStopTapGroup: e.pttStopTapGroup,
        pttStopTapIndividual: e.pttStopTapIndividual,
        pttStopTapNewsletter: e.pttStopTapNewsletter
      }).commit();
      z(e);
      new d.CommunityTabActionWamEvent({
        communityTabGroupNavigations: e.communityTabGroupNavigations,
        communityTabToHomeViews: e.communityTabToHomeViews,
        communityTabViews: e.communityTabViews,
        communityTabViewsViaContextMenu: e.communityTabViewsViaContextMenu
      }).commit();
      if (e.communityHome != null) {
        Object.keys(e.communityHome).forEach(t => {
          const n = $.default.user(t);
          if (n == null) {
            return;
          }
          const {
            communityHomeGroupDiscoveries: r,
            communityHomeGroupJoins: i,
            communityHomeGroupNavigations: a,
            communityHomeViews: o
          } = e.communityHome[t];
          new c.CommunityHomeActionWamEvent({
            communityHomeId: n,
            communityHomeGroupDiscoveries: r,
            communityHomeGroupJoins: i,
            communityHomeGroupNavigations: a,
            communityHomeViews: o
          }).commit();
        });
      }
      if (e.pnhCagActions != null) {
        Object.keys(e.pnhCagActions).forEach(t => {
          const {
            pnhIndicatorClicksChat: n,
            pnhIndicatorClicksInfoScreen: r,
            reactionDeleteCount: i,
            reactionOpenTrayCount: a
          } = e.pnhCagActions[t];
          new C.PnhDailyWamEvent({
            communityId: t,
            pnhIndicatorClicksChat: n,
            pnhIndicatorClicksInfoScreen: r,
            reactionDeleteCount: i,
            reactionOpenTrayCount: a,
            typeOfGroup: K.TYPE_OF_GROUP_ENUM.DEFAULT_SUBGROUP
          }).commit();
        });
      }
      if (e.pnhCtwaActions != null) {
        Object.keys(e.pnhCtwaActions).forEach(t => {
          new b.PnhDailyCtwaWamEvent({
            threadDs: (0, u.getThreadDs)(e.startTime),
            threadId: t,
            matMessagesReceived: e.pnhCtwaActions[t]
          }).commit();
        });
      }
      new y.KeepInChatNotifWamEvent({
        kicGroupNotificationTaps: e.kicGroupNotificationTaps,
        kicGroupNotifications: e.kicGroupNotifications,
        kicNotificationTaps: e.kicNotificationTaps,
        kicNotifications: e.kicNotifications
      }).commit();
    });
  })).apply(this, arguments);
}
function Q() {
  return X.apply(this, arguments);
}
function X() {
  return (X = (0, a.default)(function* () {
    const e = yield w.deviceInfo.get();
    return {
      languageCode: e.lg,
      locationCode: e.lc,
      osBuildNumber: e.osBuild,
      simMcc: parseInt(e.mcc, 10),
      simMnc: parseInt(e.mnc, 10)
    };
  })).apply(this, arguments);
}
function Z() {
  return ee.apply(this, arguments);
}
function ee() {
  return (ee = (0, a.default)(function* () {
    var e;
    var t;
    var n;
    var r;
    const i = (0, D.getUserPrivacySettings)();
    const a = {
      receiptsEnabled: i.readReceipts !== "none"
    };
    const o = yield (0, l.queryDisallowedLists)();
    a.privacySettingsAbout = te(i.about);
    a.privacySettingsAboutExceptNum = i.about === "contact_blacklist" ? ne((e = o.about) === null || e === undefined ? undefined : e.disallowedList.length) : null;
    a.privacySettingsGroups = te(i.groupAdd);
    a.privacySettingsGroupsExceptNum = i.groupAdd === "contact_blacklist" ? ne((t = o.groupadd) === null || t === undefined ? undefined : t.disallowedList.length) : null;
    a.privacySettingsLastSeen = te(i.lastSeen);
    a.privacySettingsLastSeenExceptNum = i.lastSeen === "contact_blacklist" ? ne((n = o.last) === null || n === undefined ? undefined : n.disallowedList.length) : null;
    a.privacySettingsProfilePhoto = te(i.profilePicture);
    a.privacySettingsProfilePhotoExceptNum = i.profilePicture === "contact_blacklist" ? ne((r = o.profile) === null || r === undefined ? undefined : r.disallowedList.length) : null;
    const s = (0, g.getEphemeralDurationForUser)(p.ContactCollection.getMeContact());
    a.defaultDisappearingDuration = s != null ? s : 0;
    return a;
  })).apply(this, arguments);
}
function te(e) {
  if (e == null) {
    return null;
  }
  switch (e) {
    case "all":
      return Y.PRIVACY_SETTINGS_VALUE_TYPE.EVERYONE;
    case "contacts":
      return Y.PRIVACY_SETTINGS_VALUE_TYPE.MY_CONTACTS;
    case "contact_blacklist":
      return Y.PRIVACY_SETTINGS_VALUE_TYPE.MY_CONTACTS_EXCEPT;
    case "none":
      return Y.PRIVACY_SETTINGS_VALUE_TYPE.NOBODY;
  }
}
function ne(e) {
  if (e == null) {
    return null;
  } else if (e === 0) {
    return j.PRIVACY_SETTINGS_CONTACTS_BUCKETS.B0;
  } else if (e < 5) {
    return j.PRIVACY_SETTINGS_CONTACTS_BUCKETS.B1;
  } else if (e < 10) {
    return j.PRIVACY_SETTINGS_CONTACTS_BUCKETS.B5;
  } else if (e < 15) {
    return j.PRIVACY_SETTINGS_CONTACTS_BUCKETS.B10;
  } else if (e < 20) {
    return j.PRIVACY_SETTINGS_CONTACTS_BUCKETS.B15;
  } else if (e < 30) {
    return j.PRIVACY_SETTINGS_CONTACTS_BUCKETS.B20;
  } else if (e < 40) {
    return j.PRIVACY_SETTINGS_CONTACTS_BUCKETS.B30;
  } else if (e < 50) {
    return j.PRIVACY_SETTINGS_CONTACTS_BUCKETS.B40;
  } else if (e < 60) {
    return j.PRIVACY_SETTINGS_CONTACTS_BUCKETS.B50;
  } else if (e < 70) {
    return j.PRIVACY_SETTINGS_CONTACTS_BUCKETS.B60;
  } else if (e < 80) {
    return j.PRIVACY_SETTINGS_CONTACTS_BUCKETS.B70;
  } else if (e < 90) {
    return j.PRIVACY_SETTINGS_CONTACTS_BUCKETS.B80;
  } else if (e < 100) {
    return j.PRIVACY_SETTINGS_CONTACTS_BUCKETS.B90;
  } else {
    return j.PRIVACY_SETTINGS_CONTACTS_BUCKETS.B100;
  }
}
function re() {
  return ie.apply(this, arguments);
}
function ie() {
  return (ie = (0, a.default)(function* () {
    const e = yield (0, I.getContactTable)().equals(["isAddressBookContact"], 1).then(e => e.length);
    const t = yield (0, h.default)();
    const n = yield E.LruMediaStore.count();
    const r = yield Promise.all([t, e, n]);
    let i = 0;
    let a = 0;
    let o = 0;
    const s = r[0];
    if (s != null) {
      i = s.available;
      a = s.quota;
      o = s.usage;
    }
    return {
      addressbookWhatsappSize: de(r[1], 10),
      storageAvailSize: de(i, 100),
      storageTotalSize: de(a, 100),
      storageUsed: de(o, 100),
      mediaFolderFileCount: r[2]
    };
  })).apply(this, arguments);
}
function ae() {
  return (0, m.getEstimatedFTSDbSize)();
}
function oe() {
  let e = U.NOTIFICATION_SETTING_TYPE.UNKNOWN;
  if (window.Notification != null) {
    switch (window.Notification.permission) {
      case T.PERMISSION_ALLOWED:
        e = U.NOTIFICATION_SETTING_TYPE.ALLOWED;
        break;
      case T.PERMISSION_DENIED:
        e = U.NOTIFICATION_SETTING_TYPE.BLOCKED;
        break;
      default:
        e = U.NOTIFICATION_SETTING_TYPE.UNKNOWN;
    }
  }
  return {
    osNotificationSetting: e
  };
}
function se() {
  return le.apply(this, arguments);
}
function le() {
  return (le = (0, a.default)(function* () {
    const e = [];
    const t = [];
    const {
      mediaCapabilities: n
    } = window.navigator;
    if (n != null && (0, s.getABPropConfigValue)("supported_encoder_decoder_logging_enabled")) {
      const r = {
        width: 800,
        height: 600,
        bitrate: 10000,
        framerate: 30
      };
      const a = {
        type: "record"
      };
      const o = {
        type: "file"
      };
      const s = {
        contentType: "video/mp4; codecs=\"hev1.1.6.L93.B0\""
      };
      const l = {
        contentType: "video/mp4; codecs=\"av01.0.00M.08\""
      };
      const u = (0, i.default)((0, i.default)({}, a), {}, {
        video: (0, i.default)((0, i.default)({}, s), r)
      });
      const c = (0, i.default)((0, i.default)({}, a), {}, {
        video: (0, i.default)((0, i.default)({}, l), r)
      });
      const d = (0, i.default)((0, i.default)({}, o), {}, {
        video: (0, i.default)((0, i.default)({}, s), r)
      });
      const p = (0, i.default)((0, i.default)({}, o), {}, {
        video: (0, i.default)((0, i.default)({}, l), r)
      });
      if (n.encodingInfo != null) {
        try {
          if ((yield n.encodingInfo(u)).supported) {
            e.push("hevc");
          }
        } catch (e) {}
        try {
          if ((yield n.encodingInfo(c)).supported) {
            e.push("av1");
          }
        } catch (e) {}
      }
      if (n.decodingInfo != null) {
        try {
          if ((yield n.decodingInfo(d)).supported) {
            t.push("hevc");
          }
        } catch (e) {}
        try {
          if ((yield n.decodingInfo(p)).supported) {
            t.push("av1");
          }
        } catch (e) {}
      }
    }
    return {
      supportedEncoders: e.join(","),
      supportedDecoders: t.join(",")
    };
  })).apply(this, arguments);
}
function ue() {
  if ((0, S.screenLockFeatureSupported)()) {
    return {
      screenLockDuration: (0, G.getScreenLockDurationForLogging)()
    };
  }
}
function ce() {
  if ((0, S.screenLockFeatureSupported)()) {
    return {
      screenAutoLockDuration: (0, G.getScreenLockDurationForLogging)()
    };
  }
}
function de(e, t) {
  return Math.round(e / t) * t;
}