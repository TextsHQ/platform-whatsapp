Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SyncActionValueSpec = exports.SyncActionValue$UserStatusMuteActionSpec = exports.SyncActionValue$UnarchiveChatsSettingSpec = exports.SyncActionValue$TimeFormatActionSpec = exports.SyncActionValue$SyncActionMessageSpec = exports.SyncActionValue$SyncActionMessageRangeSpec = exports.SyncActionValue$SubscriptionActionSpec = exports.SyncActionValue$StickerActionSpec = exports.SyncActionValue$StatusPrivacyActionSpec = exports.SyncActionValue$StatusPrivacyAction$StatusDistributionMode = exports.SyncActionValue$StarActionSpec = exports.SyncActionValue$SecurityNotificationSettingSpec = exports.SyncActionValue$RemoveRecentStickerActionSpec = exports.SyncActionValue$RecentEmojiWeightsActionSpec = exports.SyncActionValue$QuickReplyActionSpec = exports.SyncActionValue$PushNameSettingSpec = exports.SyncActionValue$PrivacySettingRelayAllCallsSpec = exports.SyncActionValue$PrimaryVersionActionSpec = exports.SyncActionValue$PrimaryFeatureSpec = exports.SyncActionValue$PnForLidChatActionSpec = exports.SyncActionValue$PinActionSpec = exports.SyncActionValue$NuxActionSpec = exports.SyncActionValue$MuteActionSpec = exports.SyncActionValue$MarketingMessageBroadcastActionSpec = exports.SyncActionValue$MarketingMessageActionSpec = exports.SyncActionValue$MarketingMessageAction$MarketingMessagePrototypeType = exports.SyncActionValue$MarkChatAsReadActionSpec = exports.SyncActionValue$LocaleSettingSpec = exports.SyncActionValue$LabelEditActionSpec = exports.SyncActionValue$LabelAssociationActionSpec = exports.SyncActionValue$KeyExpirationSpec = exports.SyncActionValue$ExternalWebBetaActionSpec = exports.SyncActionValue$DeleteMessageForMeActionSpec = exports.SyncActionValue$DeleteChatActionSpec = exports.SyncActionValue$ContactActionSpec = exports.SyncActionValue$ClearChatActionSpec = exports.SyncActionValue$ChatAssignmentOpenedStatusActionSpec = exports.SyncActionValue$ChatAssignmentActionSpec = exports.SyncActionValue$CallLogActionSpec = exports.SyncActionValue$BotWelcomeRequestActionSpec = exports.SyncActionValue$ArchiveChatActionSpec = exports.SyncActionValue$AndroidUnsupportedActionsSpec = exports.SyncActionValue$AgentActionSpec = exports.SyncActionDataSpec = exports.RecentEmojiWeightSpec = exports.CallLogRecordSpec = exports.CallLogRecord$SilenceReason = exports.CallLogRecord$ParticipantInfoSpec = exports.CallLogRecord$CallResult = undefined;
var r = require("./751206.js");
var i = require("./557871.js");
const a = require("../vendor/654302.js")({
  NONE: 0,
  SCHEDULED: 1,
  PRIVACY: 2,
  LIGHTWEIGHT: 3
});
exports.CallLogRecord$SilenceReason = a;
const o = require("../vendor/654302.js")({
  CONNECTED: 0,
  REJECTED: 1,
  CANCELLED: 2,
  ACCEPTEDELSEWHERE: 3,
  MISSED: 4,
  INVALID: 5,
  UNAVAILABLE: 6,
  UPCOMING: 7,
  FAILED: 8,
  ABANDONED: 9,
  ONGOING: 10
});
exports.CallLogRecord$CallResult = o;
const s = require("../vendor/654302.js")({
  ALLOW_LIST: 0,
  DENY_LIST: 1,
  CONTACTS: 2
});
exports.SyncActionValue$StatusPrivacyAction$StatusDistributionMode = s;
const l = require("../vendor/654302.js")({
  PERSONALIZED: 0
});
exports.SyncActionValue$MarketingMessageAction$MarketingMessagePrototypeType = l;
const u = {};
exports.RecentEmojiWeightSpec = u;
const c = {};
exports.CallLogRecordSpec = c;
const d = {};
exports.CallLogRecord$ParticipantInfoSpec = d;
const p = {};
exports.SyncActionValueSpec = p;
const f = {};
exports.SyncActionValue$BotWelcomeRequestActionSpec = f;
const _ = {};
exports.SyncActionValue$StatusPrivacyActionSpec = _;
const g = {};
exports.SyncActionValue$CallLogActionSpec = g;
const m = {};
exports.SyncActionValue$PrivacySettingRelayAllCallsSpec = m;
const h = {};
exports.SyncActionValue$ExternalWebBetaActionSpec = h;
const y = {};
exports.SyncActionValue$MarketingMessageBroadcastActionSpec = y;
const E = {};
exports.SyncActionValue$MarketingMessageActionSpec = E;
const S = {};
exports.SyncActionValue$PnForLidChatActionSpec = S;
const v = {};
exports.SyncActionValue$ChatAssignmentOpenedStatusActionSpec = v;
const T = {};
exports.SyncActionValue$ChatAssignmentActionSpec = T;
const M = {};
exports.SyncActionValue$StickerActionSpec = M;
const A = {};
exports.SyncActionValue$RemoveRecentStickerActionSpec = A;
const b = {};
exports.SyncActionValue$PrimaryVersionActionSpec = b;
const C = {};
exports.SyncActionValue$NuxActionSpec = C;
const P = {};
exports.SyncActionValue$TimeFormatActionSpec = P;
const O = {};
exports.SyncActionValue$UserStatusMuteActionSpec = O;
const I = {};
exports.SyncActionValue$SubscriptionActionSpec = I;
const R = {};
exports.SyncActionValue$AgentActionSpec = R;
const N = {};
exports.SyncActionValue$AndroidUnsupportedActionsSpec = N;
const D = {};
exports.SyncActionValue$PrimaryFeatureSpec = D;
const w = {};
exports.SyncActionValue$KeyExpirationSpec = w;
const L = {};
exports.SyncActionValue$SyncActionMessageSpec = L;
const k = {};
exports.SyncActionValue$SyncActionMessageRangeSpec = k;
const G = {};
exports.SyncActionValue$UnarchiveChatsSettingSpec = G;
const U = {};
exports.SyncActionValue$DeleteChatActionSpec = U;
const x = {};
exports.SyncActionValue$ClearChatActionSpec = x;
const B = {};
exports.SyncActionValue$MarkChatAsReadActionSpec = B;
const F = {};
exports.SyncActionValue$DeleteMessageForMeActionSpec = F;
const j = {};
exports.SyncActionValue$ArchiveChatActionSpec = j;
const Y = {};
exports.SyncActionValue$RecentEmojiWeightsActionSpec = Y;
const K = {};
exports.SyncActionValue$LabelEditActionSpec = K;
const W = {};
exports.SyncActionValue$LabelAssociationActionSpec = W;
const V = {};
exports.SyncActionValue$QuickReplyActionSpec = V;
const H = {};
exports.SyncActionValue$LocaleSettingSpec = H;
const $ = {};
exports.SyncActionValue$PushNameSettingSpec = $;
const z = {};
exports.SyncActionValue$SecurityNotificationSettingSpec = z;
const q = {};
exports.SyncActionValue$PinActionSpec = q;
const J = {};
exports.SyncActionValue$MuteActionSpec = J;
const Q = {};
exports.SyncActionValue$ContactActionSpec = Q;
const X = {};
exports.SyncActionValue$StarActionSpec = X;
const Z = {};
exports.SyncActionDataSpec = Z;
u.internalSpec = {
  emoji: [1, r.TYPES.STRING],
  weight: [2, r.TYPES.FLOAT]
};
c.internalSpec = {
  callResult: [1, r.TYPES.ENUM, o],
  isDndMode: [2, r.TYPES.BOOL],
  silenceReason: [3, r.TYPES.ENUM, a],
  duration: [4, r.TYPES.INT64],
  startTime: [5, r.TYPES.INT64],
  isIncoming: [6, r.TYPES.BOOL],
  isVideo: [7, r.TYPES.BOOL],
  isCallLink: [8, r.TYPES.BOOL],
  callLinkToken: [9, r.TYPES.STRING],
  scheduledCallId: [10, r.TYPES.STRING],
  callId: [11, r.TYPES.STRING],
  callCreatorJid: [12, r.TYPES.STRING],
  groupJid: [13, r.TYPES.STRING],
  participants: [14, r.FLAGS.REPEATED | r.TYPES.MESSAGE, d]
};
d.internalSpec = {
  userJid: [1, r.TYPES.STRING],
  callResult: [2, r.TYPES.ENUM, o]
};
p.internalSpec = {
  timestamp: [1, r.TYPES.INT64],
  starAction: [2, r.TYPES.MESSAGE, X],
  contactAction: [3, r.TYPES.MESSAGE, Q],
  muteAction: [4, r.TYPES.MESSAGE, J],
  pinAction: [5, r.TYPES.MESSAGE, q],
  securityNotificationSetting: [6, r.TYPES.MESSAGE, z],
  pushNameSetting: [7, r.TYPES.MESSAGE, $],
  quickReplyAction: [8, r.TYPES.MESSAGE, V],
  recentEmojiWeightsAction: [11, r.TYPES.MESSAGE, Y],
  labelEditAction: [14, r.TYPES.MESSAGE, K],
  labelAssociationAction: [15, r.TYPES.MESSAGE, W],
  localeSetting: [16, r.TYPES.MESSAGE, H],
  archiveChatAction: [17, r.TYPES.MESSAGE, j],
  deleteMessageForMeAction: [18, r.TYPES.MESSAGE, F],
  keyExpiration: [19, r.TYPES.MESSAGE, w],
  markChatAsReadAction: [20, r.TYPES.MESSAGE, B],
  clearChatAction: [21, r.TYPES.MESSAGE, x],
  deleteChatAction: [22, r.TYPES.MESSAGE, U],
  unarchiveChatsSetting: [23, r.TYPES.MESSAGE, G],
  primaryFeature: [24, r.TYPES.MESSAGE, D],
  androidUnsupportedActions: [26, r.TYPES.MESSAGE, N],
  agentAction: [27, r.TYPES.MESSAGE, R],
  subscriptionAction: [28, r.TYPES.MESSAGE, I],
  userStatusMuteAction: [29, r.TYPES.MESSAGE, O],
  timeFormatAction: [30, r.TYPES.MESSAGE, P],
  nuxAction: [31, r.TYPES.MESSAGE, C],
  primaryVersionAction: [32, r.TYPES.MESSAGE, b],
  stickerAction: [33, r.TYPES.MESSAGE, M],
  removeRecentStickerAction: [34, r.TYPES.MESSAGE, A],
  chatAssignment: [35, r.TYPES.MESSAGE, T],
  chatAssignmentOpenedStatus: [36, r.TYPES.MESSAGE, v],
  pnForLidChatAction: [37, r.TYPES.MESSAGE, S],
  marketingMessageAction: [38, r.TYPES.MESSAGE, E],
  marketingMessageBroadcastAction: [39, r.TYPES.MESSAGE, y],
  externalWebBetaAction: [40, r.TYPES.MESSAGE, h],
  privacySettingRelayAllCalls: [41, r.TYPES.MESSAGE, m],
  callLogAction: [42, r.TYPES.MESSAGE, g],
  statusPrivacy: [44, r.TYPES.MESSAGE, _],
  botWelcomeRequestAction: [45, r.TYPES.MESSAGE, f]
};
f.internalSpec = {
  isSent: [1, r.TYPES.BOOL]
};
_.internalSpec = {
  mode: [1, r.TYPES.ENUM, s],
  userJid: [2, r.FLAGS.REPEATED | r.TYPES.STRING]
};
g.internalSpec = {
  callLogRecord: [1, r.TYPES.MESSAGE, c]
};
m.internalSpec = {
  isEnabled: [1, r.TYPES.BOOL]
};
h.internalSpec = {
  isOptIn: [1, r.TYPES.BOOL]
};
y.internalSpec = {
  repliedCount: [1, r.TYPES.INT32]
};
E.internalSpec = {
  name: [1, r.TYPES.STRING],
  message: [2, r.TYPES.STRING],
  type: [3, r.TYPES.ENUM, l],
  createdAt: [4, r.TYPES.INT64],
  lastSentAt: [5, r.TYPES.INT64],
  isDeleted: [6, r.TYPES.BOOL],
  mediaId: [7, r.TYPES.STRING]
};
S.internalSpec = {
  pnJid: [1, r.TYPES.STRING]
};
v.internalSpec = {
  chatOpened: [1, r.TYPES.BOOL]
};
T.internalSpec = {
  deviceAgentID: [1, r.TYPES.STRING]
};
M.internalSpec = {
  url: [1, r.TYPES.STRING],
  fileEncSha256: [2, r.TYPES.BYTES],
  mediaKey: [3, r.TYPES.BYTES],
  mimetype: [4, r.TYPES.STRING],
  height: [5, r.TYPES.UINT32],
  width: [6, r.TYPES.UINT32],
  directPath: [7, r.TYPES.STRING],
  fileLength: [8, r.TYPES.UINT64],
  isFavorite: [9, r.TYPES.BOOL],
  deviceIdHint: [10, r.TYPES.UINT32]
};
A.internalSpec = {
  lastStickerSentTs: [1, r.TYPES.INT64]
};
b.internalSpec = {
  version: [1, r.TYPES.STRING]
};
C.internalSpec = {
  acknowledged: [1, r.TYPES.BOOL]
};
P.internalSpec = {
  isTwentyFourHourFormatEnabled: [1, r.TYPES.BOOL]
};
O.internalSpec = {
  muted: [1, r.TYPES.BOOL]
};
I.internalSpec = {
  isDeactivated: [1, r.TYPES.BOOL],
  isAutoRenewing: [2, r.TYPES.BOOL],
  expirationDate: [3, r.TYPES.INT64]
};
R.internalSpec = {
  name: [1, r.TYPES.STRING],
  deviceID: [2, r.TYPES.INT32],
  isDeleted: [3, r.TYPES.BOOL]
};
N.internalSpec = {
  allowed: [1, r.TYPES.BOOL]
};
D.internalSpec = {
  flags: [1, r.FLAGS.REPEATED | r.TYPES.STRING]
};
w.internalSpec = {
  expiredKeyEpoch: [1, r.TYPES.INT32]
};
L.internalSpec = {
  key: [1, r.TYPES.MESSAGE, i.MessageKeySpec],
  timestamp: [2, r.TYPES.INT64]
};
k.internalSpec = {
  lastMessageTimestamp: [1, r.TYPES.INT64],
  lastSystemMessageTimestamp: [2, r.TYPES.INT64],
  messages: [3, r.FLAGS.REPEATED | r.TYPES.MESSAGE, L]
};
G.internalSpec = {
  unarchiveChats: [1, r.TYPES.BOOL]
};
U.internalSpec = {
  messageRange: [1, r.TYPES.MESSAGE, k]
};
x.internalSpec = {
  messageRange: [1, r.TYPES.MESSAGE, k]
};
B.internalSpec = {
  read: [1, r.TYPES.BOOL],
  messageRange: [2, r.TYPES.MESSAGE, k]
};
F.internalSpec = {
  deleteMedia: [1, r.TYPES.BOOL],
  messageTimestamp: [2, r.TYPES.INT64]
};
j.internalSpec = {
  archived: [1, r.TYPES.BOOL],
  messageRange: [2, r.TYPES.MESSAGE, k]
};
Y.internalSpec = {
  weights: [1, r.FLAGS.REPEATED | r.TYPES.MESSAGE, u]
};
K.internalSpec = {
  name: [1, r.TYPES.STRING],
  color: [2, r.TYPES.INT32],
  predefinedId: [3, r.TYPES.INT32],
  deleted: [4, r.TYPES.BOOL]
};
W.internalSpec = {
  labeled: [1, r.TYPES.BOOL]
};
V.internalSpec = {
  shortcut: [1, r.TYPES.STRING],
  message: [2, r.TYPES.STRING],
  keywords: [3, r.FLAGS.REPEATED | r.TYPES.STRING],
  count: [4, r.TYPES.INT32],
  deleted: [5, r.TYPES.BOOL]
};
H.internalSpec = {
  locale: [1, r.TYPES.STRING]
};
$.internalSpec = {
  name: [1, r.TYPES.STRING]
};
z.internalSpec = {
  showNotification: [1, r.TYPES.BOOL]
};
q.internalSpec = {
  pinned: [1, r.TYPES.BOOL]
};
J.internalSpec = {
  muted: [1, r.TYPES.BOOL],
  muteEndTimestamp: [2, r.TYPES.INT64],
  autoMuted: [3, r.TYPES.BOOL]
};
Q.internalSpec = {
  fullName: [1, r.TYPES.STRING],
  firstName: [2, r.TYPES.STRING],
  lidJid: [3, r.TYPES.STRING]
};
X.internalSpec = {
  starred: [1, r.TYPES.BOOL]
};
Z.internalSpec = {
  index: [1, r.TYPES.BYTES],
  value: [2, r.TYPES.MESSAGE, p],
  padding: [3, r.TYPES.BYTES],
  version: [4, r.TYPES.INT32]
};