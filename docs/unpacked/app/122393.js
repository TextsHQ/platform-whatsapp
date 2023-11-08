Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SyncModelType = exports.SyncDataType = exports.SyncActionState = exports.MIN_PATCH_SIZE = exports.MIN_INLINE_MUTATIONS = exports.MAX_PATCH_SIZE = exports.MAX_INLINE_MUTATIONS = exports.LABEL_ASSOCIATION_SYNC_VERSION = exports.FINITE_FAILURE_EXPIRY_DURATION = exports.DEFAULT_COLLECTION_VERSION = exports.ConflictResolutionState = exports.CollectionSyncState = exports.CollectionState = exports.CollectionName = exports.CHAT_ASSIGNMENT_SYNC_VERSION = exports.BACKOFF_MIN_TIMEOUT = exports.BACKOFF_MAX_TIMEOUT = exports.BACKOFF_BASE = exports.Actions = undefined;
var r = require("./632157.js");
exports.BACKOFF_MIN_TIMEOUT = 1000;
exports.BACKOFF_MAX_TIMEOUT = 3600000;
exports.BACKOFF_BASE = 2;
const i = r.DAY_MILLISECONDS * 2;
exports.FINITE_FAILURE_EXPIRY_DURATION = i;
exports.MIN_INLINE_MUTATIONS = 100;
exports.MAX_INLINE_MUTATIONS = 2000;
exports.MIN_PATCH_SIZE = 10;
exports.MAX_PATCH_SIZE = 100;
exports.DEFAULT_COLLECTION_VERSION = 0;
exports.LABEL_ASSOCIATION_SYNC_VERSION = 3;
exports.CHAT_ASSIGNMENT_SYNC_VERSION = 7;
const a = require("../vendor/654302.js")({
  Star: "star",
  Contact: "contact",
  Mute: "mute",
  PinDEPRECATED: "pin",
  Pin: "pin_v1",
  SettingPushName: "setting_pushName",
  LabelEdit: "label_edit",
  LabelMessage: "label_message",
  LabelJid: "label_jid",
  QuickReply: "quick_reply",
  LocaleSetting: "setting_locale",
  Archive: "archive",
  MarkChatAsRead: "markChatAsRead",
  ClearChat: "clearChat",
  DeleteMessageForMe: "deleteMessageForMe",
  Sentinel: "sentinel",
  UnarchiveChatsSetting: "setting_unarchiveChats",
  DeleteChat: "deleteChat",
  AndroidUnsupportedActions: "android_unsupported_actions",
  PrimaryFeature: "primary_feature",
  Subscription: "subscription",
  Nux: "nux",
  Agent: "deviceAgent",
  TimeFormat: "time_format",
  UserStatusMute: "userStatusMute",
  PrimaryVersion: "primary_version",
  RemoveRecentSticker: "removeRecentSticker",
  ChatAssignment: "agentChatAssignment",
  ChatAssignmentOpenedStatus: "agentChatAssignmentOpenedStatus",
  FavoriteSticker: "favoriteSticker",
  PnForLidChat: "pnForLidChat",
  ShareOwnPn: "shareOwnPn",
  ExternalWebBeta: "external_web_beta",
  MarketingMessage: "marketingMessage",
  MarketingMessageBroadcast: "marketingMessageBroadcast",
  StatusPrivacy: "status_privacy",
  BotWelcomeRequest: "bot_welcome_request"
});
exports.Actions = a;
const o = require("../vendor/654302.js")({
  Regular: "regular",
  RegularLow: "regular_low",
  RegularHigh: "regular_high",
  CriticalBlock: "critical_block",
  CriticalUnblockLow: "critical_unblock_low"
});
exports.CollectionName = o;
const s = require("../vendor/654302.js").Mirrored(["Success", "SuccessHasMore", "Conflict", "ConflictHasMore", "ErrorRetry", "ErrorFatal", "Blocked"]);
exports.CollectionState = s;
const l = require("../vendor/654302.js").Mirrored(["UpToDate", "Dirty", "FailingFiniteRetry", "Fatal", "Blocked"]);
exports.CollectionSyncState = l;
const u = require("../vendor/654302.js").Mirrored(["Success", "Malformed", "Orphan", "Unsupported", "Skipped", "Failed"]);
exports.SyncActionState = u;
const c = require("../vendor/654302.js").Mirrored(["Msg", "Chat", "Agent", "ChatAssignment", "UserStatusMute"]);
exports.SyncModelType = c;
const d = require("../vendor/654302.js").Mirrored(["ApplyRemoteAndDropLocal", "SkipRemote", "SkipRemoteAndDropLocal"]);
exports.ConflictResolutionState = d;
const p = require("../vendor/654302.js").Mirrored(["Patch", "Snapshot", "Local"]);
exports.SyncDataType = p;