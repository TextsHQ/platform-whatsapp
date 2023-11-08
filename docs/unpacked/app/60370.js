Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WallpaperSettingsSpec = exports.StickerMetadataSpec = exports.PushnameSpec = exports.PastParticipantsSpec = exports.PastParticipantSpec = exports.PastParticipant$LeaveReason = exports.NotificationSettingsSpec = exports.MediaVisibility = exports.HistorySyncSpec = exports.HistorySyncMsgSpec = exports.HistorySync$HistorySyncType = exports.HistorySync$BotAIWaitListState = exports.GroupParticipantSpec = exports.GroupParticipant$Rank = exports.GlobalSettingsSpec = exports.ConversationSpec = exports.Conversation$EndOfHistoryTransferType = exports.AvatarUserSettingsSpec = exports.AutoDownloadSettingsSpec = undefined;
var r = require("./751206.js");
var i = require("./968923.js");
var a = require("./533494.js");
var o = require("./623420.js");
const s = require("../vendor/76672.js")({
  IN_WAITLIST: 0,
  AI_AVAILABLE: 1
});
exports.HistorySync$BotAIWaitListState = s;
const l = require("../vendor/76672.js")({
  INITIAL_BOOTSTRAP: 0,
  INITIAL_STATUS_V3: 1,
  FULL: 2,
  RECENT: 3,
  PUSH_NAME: 4,
  NON_BLOCKING_DATA: 5,
  ON_DEMAND: 6
});
exports.HistorySync$HistorySyncType = l;
const u = require("../vendor/76672.js")({
  COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY: 0,
  COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY: 1,
  COMPLETE_ON_DEMAND_SYNC_BUT_MORE_MSG_REMAIN_ON_PRIMARY: 2
});
exports.Conversation$EndOfHistoryTransferType = u;
const c = require("../vendor/76672.js")({
  REGULAR: 0,
  ADMIN: 1,
  SUPERADMIN: 2
});
exports.GroupParticipant$Rank = c;
const d = require("../vendor/76672.js")({
  DEFAULT: 0,
  OFF: 1,
  ON: 2
});
exports.MediaVisibility = d;
const p = require("../vendor/76672.js")({
  LEFT: 0,
  REMOVED: 1
});
exports.PastParticipant$LeaveReason = p;
const f = {};
exports.HistorySyncSpec = f;
const _ = {};
exports.ConversationSpec = _;
const g = {};
exports.HistorySyncMsgSpec = g;
const m = {};
exports.PushnameSpec = m;
const h = {};
exports.GroupParticipantSpec = h;
const y = {};
exports.WallpaperSettingsSpec = y;
const E = {};
exports.GlobalSettingsSpec = E;
const S = {};
exports.AutoDownloadSettingsSpec = S;
const v = {};
exports.StickerMetadataSpec = v;
const T = {};
exports.PastParticipantsSpec = T;
const M = {};
exports.PastParticipantSpec = M;
const A = {};
exports.AvatarUserSettingsSpec = A;
const b = {};
exports.NotificationSettingsSpec = b;
f.internalSpec = {
  syncType: [1, r.FLAGS.REQUIRED | r.TYPES.ENUM, l],
  conversations: [2, r.FLAGS.REPEATED | r.TYPES.MESSAGE, _],
  statusV3Messages: [3, r.FLAGS.REPEATED | r.TYPES.MESSAGE, i.WebMessageInfoSpec],
  chunkOrder: [5, r.TYPES.UINT32],
  progress: [6, r.TYPES.UINT32],
  pushnames: [7, r.FLAGS.REPEATED | r.TYPES.MESSAGE, m],
  globalSettings: [8, r.TYPES.MESSAGE, E],
  threadIdUserSecret: [9, r.TYPES.BYTES],
  threadDsTimeframeOffset: [10, r.TYPES.UINT32],
  recentStickers: [11, r.FLAGS.REPEATED | r.TYPES.MESSAGE, v],
  pastParticipants: [12, r.FLAGS.REPEATED | r.TYPES.MESSAGE, T],
  callLogRecords: [13, r.FLAGS.REPEATED | r.TYPES.MESSAGE, o.CallLogRecordSpec],
  aiWaitListState: [14, r.TYPES.ENUM, s]
};
_.internalSpec = {
  id: [1, r.FLAGS.REQUIRED | r.TYPES.STRING],
  messages: [2, r.FLAGS.REPEATED | r.TYPES.MESSAGE, g],
  newJid: [3, r.TYPES.STRING],
  oldJid: [4, r.TYPES.STRING],
  lastMsgTimestamp: [5, r.TYPES.UINT64],
  unreadCount: [6, r.TYPES.UINT32],
  readOnly: [7, r.TYPES.BOOL],
  endOfHistoryTransfer: [8, r.TYPES.BOOL],
  ephemeralExpiration: [9, r.TYPES.UINT32],
  ephemeralSettingTimestamp: [10, r.TYPES.INT64],
  endOfHistoryTransferType: [11, r.TYPES.ENUM, u],
  conversationTimestamp: [12, r.TYPES.UINT64],
  name: [13, r.TYPES.STRING],
  pHash: [14, r.TYPES.STRING],
  notSpam: [15, r.TYPES.BOOL],
  archived: [16, r.TYPES.BOOL],
  disappearingMode: [17, r.TYPES.MESSAGE, a.DisappearingModeSpec],
  unreadMentionCount: [18, r.TYPES.UINT32],
  markedAsUnread: [19, r.TYPES.BOOL],
  participant: [20, r.FLAGS.REPEATED | r.TYPES.MESSAGE, h],
  tcToken: [21, r.TYPES.BYTES],
  tcTokenTimestamp: [22, r.TYPES.UINT64],
  contactPrimaryIdentityKey: [23, r.TYPES.BYTES],
  pinned: [24, r.TYPES.UINT32],
  muteEndTime: [25, r.TYPES.UINT64],
  wallpaper: [26, r.TYPES.MESSAGE, y],
  mediaVisibility: [27, r.TYPES.ENUM, d],
  tcTokenSenderTimestamp: [28, r.TYPES.UINT64],
  suspended: [29, r.TYPES.BOOL],
  terminated: [30, r.TYPES.BOOL],
  createdAt: [31, r.TYPES.UINT64],
  createdBy: [32, r.TYPES.STRING],
  description: [33, r.TYPES.STRING],
  support: [34, r.TYPES.BOOL],
  isParentGroup: [35, r.TYPES.BOOL],
  parentGroupId: [37, r.TYPES.STRING],
  isDefaultSubgroup: [36, r.TYPES.BOOL],
  displayName: [38, r.TYPES.STRING],
  pnJid: [39, r.TYPES.STRING],
  shareOwnPn: [40, r.TYPES.BOOL],
  pnhDuplicateLidThread: [41, r.TYPES.BOOL],
  lidJid: [42, r.TYPES.STRING],
  username: [43, r.TYPES.STRING],
  lidOriginType: [44, r.TYPES.STRING],
  commentsCount: [45, r.TYPES.UINT32]
};
g.internalSpec = {
  message: [1, r.TYPES.MESSAGE, i.WebMessageInfoSpec],
  msgOrderId: [2, r.TYPES.UINT64]
};
m.internalSpec = {
  id: [1, r.TYPES.STRING],
  pushname: [2, r.TYPES.STRING]
};
h.internalSpec = {
  userJid: [1, r.FLAGS.REQUIRED | r.TYPES.STRING],
  rank: [2, r.TYPES.ENUM, c]
};
y.internalSpec = {
  filename: [1, r.TYPES.STRING],
  opacity: [2, r.TYPES.UINT32]
};
E.internalSpec = {
  lightThemeWallpaper: [1, r.TYPES.MESSAGE, y],
  mediaVisibility: [2, r.TYPES.ENUM, d],
  darkThemeWallpaper: [3, r.TYPES.MESSAGE, y],
  autoDownloadWiFi: [4, r.TYPES.MESSAGE, S],
  autoDownloadCellular: [5, r.TYPES.MESSAGE, S],
  autoDownloadRoaming: [6, r.TYPES.MESSAGE, S],
  showIndividualNotificationsPreview: [7, r.TYPES.BOOL],
  showGroupNotificationsPreview: [8, r.TYPES.BOOL],
  disappearingModeDuration: [9, r.TYPES.INT32],
  disappearingModeTimestamp: [10, r.TYPES.INT64],
  avatarUserSettings: [11, r.TYPES.MESSAGE, A],
  fontSize: [12, r.TYPES.INT32],
  securityNotifications: [13, r.TYPES.BOOL],
  autoUnarchiveChats: [14, r.TYPES.BOOL],
  videoQualityMode: [15, r.TYPES.INT32],
  photoQualityMode: [16, r.TYPES.INT32],
  individualNotificationSettings: [17, r.TYPES.MESSAGE, b],
  groupNotificationSettings: [18, r.TYPES.MESSAGE, b]
};
S.internalSpec = {
  downloadImages: [1, r.TYPES.BOOL],
  downloadAudio: [2, r.TYPES.BOOL],
  downloadVideo: [3, r.TYPES.BOOL],
  downloadDocuments: [4, r.TYPES.BOOL]
};
v.internalSpec = {
  url: [1, r.TYPES.STRING],
  fileSha256: [2, r.TYPES.BYTES],
  fileEncSha256: [3, r.TYPES.BYTES],
  mediaKey: [4, r.TYPES.BYTES],
  mimetype: [5, r.TYPES.STRING],
  height: [6, r.TYPES.UINT32],
  width: [7, r.TYPES.UINT32],
  directPath: [8, r.TYPES.STRING],
  fileLength: [9, r.TYPES.UINT64],
  weight: [10, r.TYPES.FLOAT],
  lastStickerSentTs: [11, r.TYPES.INT64]
};
T.internalSpec = {
  groupJid: [1, r.TYPES.STRING],
  pastParticipants: [2, r.FLAGS.REPEATED | r.TYPES.MESSAGE, M]
};
M.internalSpec = {
  userJid: [1, r.TYPES.STRING],
  leaveReason: [2, r.TYPES.ENUM, p],
  leaveTs: [3, r.TYPES.UINT64]
};
A.internalSpec = {
  fbid: [1, r.TYPES.STRING],
  password: [2, r.TYPES.STRING]
};
b.internalSpec = {
  messageVibrate: [1, r.TYPES.STRING],
  messagePopup: [2, r.TYPES.STRING],
  messageLight: [3, r.TYPES.STRING],
  lowPriorityNotifications: [4, r.TYPES.BOOL],
  reactionsMuted: [5, r.TYPES.BOOL],
  callVibrate: [6, r.TYPES.STRING]
};