Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SyncActionValueSpec = exports.SyncActionValue$UserStatusMuteActionSpec = exports.SyncActionValue$UnarchiveChatsSettingSpec = exports.SyncActionValue$TimeFormatActionSpec = exports.SyncActionValue$SyncActionMessageSpec = exports.SyncActionValue$SyncActionMessageRangeSpec = exports.SyncActionValue$SubscriptionActionSpec = exports.SyncActionValue$StickerActionSpec = exports.SyncActionValue$StatusPrivacyActionSpec = exports.SyncActionValue$StatusPrivacyAction$StatusDistributionMode = exports.SyncActionValue$StarActionSpec = exports.SyncActionValue$SecurityNotificationSettingSpec = exports.SyncActionValue$RemoveRecentStickerActionSpec = exports.SyncActionValue$RecentEmojiWeightsActionSpec = exports.SyncActionValue$QuickReplyActionSpec = exports.SyncActionValue$PushNameSettingSpec = exports.SyncActionValue$PrivacySettingRelayAllCallsSpec = exports.SyncActionValue$PrimaryVersionActionSpec = exports.SyncActionValue$PrimaryFeatureSpec = exports.SyncActionValue$PnForLidChatActionSpec = exports.SyncActionValue$PinActionSpec = exports.SyncActionValue$NuxActionSpec = exports.SyncActionValue$MuteActionSpec = exports.SyncActionValue$MarketingMessageBroadcastActionSpec = exports.SyncActionValue$MarketingMessageActionSpec = exports.SyncActionValue$MarketingMessageAction$MarketingMessagePrototypeType = exports.SyncActionValue$MarkChatAsReadActionSpec = exports.SyncActionValue$LocaleSettingSpec = exports.SyncActionValue$LabelEditActionSpec = exports.SyncActionValue$LabelAssociationActionSpec = exports.SyncActionValue$KeyExpirationSpec = exports.SyncActionValue$ExternalWebBetaActionSpec = exports.SyncActionValue$DeleteMessageForMeActionSpec = exports.SyncActionValue$DeleteIndividualCallLogActionSpec = exports.SyncActionValue$DeleteChatActionSpec = exports.SyncActionValue$ContactActionSpec = exports.SyncActionValue$ClearChatActionSpec = exports.SyncActionValue$ChatAssignmentOpenedStatusActionSpec = exports.SyncActionValue$ChatAssignmentActionSpec = exports.SyncActionValue$CallLogActionSpec = exports.SyncActionValue$BotWelcomeRequestActionSpec = exports.SyncActionValue$ArchiveChatActionSpec = exports.SyncActionValue$AndroidUnsupportedActionsSpec = exports.SyncActionValue$AgentActionSpec = exports.SyncActionDataSpec = exports.RecentEmojiWeightSpec = exports.CallLogRecordSpec = exports.CallLogRecord$SilenceReason = exports.CallLogRecord$ParticipantInfoSpec = exports.CallLogRecord$CallType = exports.CallLogRecord$CallResult = undefined;
var r = require("./751206.js");
var i = require("./933734.js");
const a = require("../vendor/76672.js")({
  REGULAR: 0,
  SCHEDULED_CALL: 1,
  VOICE_CHAT: 2
});
exports.CallLogRecord$CallType = a;
const o = require("../vendor/76672.js")({
  NONE: 0,
  SCHEDULED: 1,
  PRIVACY: 2,
  LIGHTWEIGHT: 3
});
exports.CallLogRecord$SilenceReason = o;
const s = require("../vendor/76672.js")({
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
exports.CallLogRecord$CallResult = s;
const l = require("../vendor/76672.js")({
  ALLOW_LIST: 0,
  DENY_LIST: 1,
  CONTACTS: 2
});
exports.SyncActionValue$StatusPrivacyAction$StatusDistributionMode = l;
const u = require("../vendor/76672.js")({
  PERSONALIZED: 0
});
exports.SyncActionValue$MarketingMessageAction$MarketingMessagePrototypeType = u;
const c = {};
exports.RecentEmojiWeightSpec = c;
const d = {};
exports.CallLogRecordSpec = d;
const p = {};
exports.CallLogRecord$ParticipantInfoSpec = p;
const f = {};
exports.SyncActionValueSpec = f;
const _ = {};
exports.SyncActionValue$DeleteIndividualCallLogActionSpec = _;
const g = {};
exports.SyncActionValue$BotWelcomeRequestActionSpec = g;
const m = {};
exports.SyncActionValue$StatusPrivacyActionSpec = m;
const h = {};
exports.SyncActionValue$CallLogActionSpec = h;
const y = {};
exports.SyncActionValue$PrivacySettingRelayAllCallsSpec = y;
const E = {};
exports.SyncActionValue$ExternalWebBetaActionSpec = E;
const S = {};
exports.SyncActionValue$MarketingMessageBroadcastActionSpec = S;
const v = {};
exports.SyncActionValue$MarketingMessageActionSpec = v;
const T = {};
exports.SyncActionValue$PnForLidChatActionSpec = T;
const M = {};
exports.SyncActionValue$ChatAssignmentOpenedStatusActionSpec = M;
const A = {};
exports.SyncActionValue$ChatAssignmentActionSpec = A;
const b = {};
exports.SyncActionValue$StickerActionSpec = b;
const C = {};
exports.SyncActionValue$RemoveRecentStickerActionSpec = C;
const P = {};
exports.SyncActionValue$PrimaryVersionActionSpec = P;
const O = {};
exports.SyncActionValue$NuxActionSpec = O;
const I = {};
exports.SyncActionValue$TimeFormatActionSpec = I;
const R = {};
exports.SyncActionValue$UserStatusMuteActionSpec = R;
const N = {};
exports.SyncActionValue$SubscriptionActionSpec = N;
const D = {};
exports.SyncActionValue$AgentActionSpec = D;
const w = {};
exports.SyncActionValue$AndroidUnsupportedActionsSpec = w;
const L = {};
exports.SyncActionValue$PrimaryFeatureSpec = L;
const k = {};
exports.SyncActionValue$KeyExpirationSpec = k;
const G = {};
exports.SyncActionValue$SyncActionMessageSpec = G;
const U = {};
exports.SyncActionValue$SyncActionMessageRangeSpec = U;
const x = {};
exports.SyncActionValue$UnarchiveChatsSettingSpec = x;
const B = {};
exports.SyncActionValue$DeleteChatActionSpec = B;
const F = {};
exports.SyncActionValue$ClearChatActionSpec = F;
const j = {};
exports.SyncActionValue$MarkChatAsReadActionSpec = j;
const Y = {};
exports.SyncActionValue$DeleteMessageForMeActionSpec = Y;
const K = {};
exports.SyncActionValue$ArchiveChatActionSpec = K;
const W = {};
exports.SyncActionValue$RecentEmojiWeightsActionSpec = W;
const V = {};
exports.SyncActionValue$LabelEditActionSpec = V;
const H = {};
exports.SyncActionValue$LabelAssociationActionSpec = H;
const $ = {};
exports.SyncActionValue$QuickReplyActionSpec = $;
const z = {};
exports.SyncActionValue$LocaleSettingSpec = z;
const q = {};
exports.SyncActionValue$PushNameSettingSpec = q;
const J = {};
exports.SyncActionValue$SecurityNotificationSettingSpec = J;
const Q = {};
exports.SyncActionValue$PinActionSpec = Q;
const X = {};
exports.SyncActionValue$MuteActionSpec = X;
const Z = {};
exports.SyncActionValue$ContactActionSpec = Z;
const ee = {};
exports.SyncActionValue$StarActionSpec = ee;
const te = {};
exports.SyncActionDataSpec = te;
c.internalSpec = {
  emoji: [1, r.TYPES.STRING],
  weight: [2, r.TYPES.FLOAT]
};
d.internalSpec = {
  callResult: [1, r.TYPES.ENUM, s],
  isDndMode: [2, r.TYPES.BOOL],
  silenceReason: [3, r.TYPES.ENUM, o],
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
  participants: [14, r.FLAGS.REPEATED | r.TYPES.MESSAGE, p],
  callType: [15, r.TYPES.ENUM, a]
};
p.internalSpec = {
  userJid: [1, r.TYPES.STRING],
  callResult: [2, r.TYPES.ENUM, s]
};
f.internalSpec = {
  timestamp: [1, r.TYPES.INT64],
  starAction: [2, r.TYPES.MESSAGE, ee],
  contactAction: [3, r.TYPES.MESSAGE, Z],
  muteAction: [4, r.TYPES.MESSAGE, X],
  pinAction: [5, r.TYPES.MESSAGE, Q],
  securityNotificationSetting: [6, r.TYPES.MESSAGE, J],
  pushNameSetting: [7, r.TYPES.MESSAGE, q],
  quickReplyAction: [8, r.TYPES.MESSAGE, $],
  recentEmojiWeightsAction: [11, r.TYPES.MESSAGE, W],
  labelEditAction: [14, r.TYPES.MESSAGE, V],
  labelAssociationAction: [15, r.TYPES.MESSAGE, H],
  localeSetting: [16, r.TYPES.MESSAGE, z],
  archiveChatAction: [17, r.TYPES.MESSAGE, K],
  deleteMessageForMeAction: [18, r.TYPES.MESSAGE, Y],
  keyExpiration: [19, r.TYPES.MESSAGE, k],
  markChatAsReadAction: [20, r.TYPES.MESSAGE, j],
  clearChatAction: [21, r.TYPES.MESSAGE, F],
  deleteChatAction: [22, r.TYPES.MESSAGE, B],
  unarchiveChatsSetting: [23, r.TYPES.MESSAGE, x],
  primaryFeature: [24, r.TYPES.MESSAGE, L],
  androidUnsupportedActions: [26, r.TYPES.MESSAGE, w],
  agentAction: [27, r.TYPES.MESSAGE, D],
  subscriptionAction: [28, r.TYPES.MESSAGE, N],
  userStatusMuteAction: [29, r.TYPES.MESSAGE, R],
  timeFormatAction: [30, r.TYPES.MESSAGE, I],
  nuxAction: [31, r.TYPES.MESSAGE, O],
  primaryVersionAction: [32, r.TYPES.MESSAGE, P],
  stickerAction: [33, r.TYPES.MESSAGE, b],
  removeRecentStickerAction: [34, r.TYPES.MESSAGE, C],
  chatAssignment: [35, r.TYPES.MESSAGE, A],
  chatAssignmentOpenedStatus: [36, r.TYPES.MESSAGE, M],
  pnForLidChatAction: [37, r.TYPES.MESSAGE, T],
  marketingMessageAction: [38, r.TYPES.MESSAGE, v],
  marketingMessageBroadcastAction: [39, r.TYPES.MESSAGE, S],
  externalWebBetaAction: [40, r.TYPES.MESSAGE, E],
  privacySettingRelayAllCalls: [41, r.TYPES.MESSAGE, y],
  callLogAction: [42, r.TYPES.MESSAGE, h],
  statusPrivacy: [44, r.TYPES.MESSAGE, m],
  botWelcomeRequestAction: [45, r.TYPES.MESSAGE, g],
  deleteIndividualCallLog: [46, r.TYPES.MESSAGE, _]
};
_.internalSpec = {
  peerJid: [1, r.TYPES.STRING],
  isIncoming: [2, r.TYPES.BOOL]
};
g.internalSpec = {
  isSent: [1, r.TYPES.BOOL]
};
m.internalSpec = {
  mode: [1, r.TYPES.ENUM, l],
  userJid: [2, r.FLAGS.REPEATED | r.TYPES.STRING]
};
h.internalSpec = {
  callLogRecord: [1, r.TYPES.MESSAGE, d]
};
y.internalSpec = {
  isEnabled: [1, r.TYPES.BOOL]
};
E.internalSpec = {
  isOptIn: [1, r.TYPES.BOOL]
};
S.internalSpec = {
  repliedCount: [1, r.TYPES.INT32]
};
v.internalSpec = {
  name: [1, r.TYPES.STRING],
  message: [2, r.TYPES.STRING],
  type: [3, r.TYPES.ENUM, u],
  createdAt: [4, r.TYPES.INT64],
  lastSentAt: [5, r.TYPES.INT64],
  isDeleted: [6, r.TYPES.BOOL],
  mediaId: [7, r.TYPES.STRING]
};
T.internalSpec = {
  pnJid: [1, r.TYPES.STRING]
};
M.internalSpec = {
  chatOpened: [1, r.TYPES.BOOL]
};
A.internalSpec = {
  deviceAgentID: [1, r.TYPES.STRING]
};
b.internalSpec = {
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
C.internalSpec = {
  lastStickerSentTs: [1, r.TYPES.INT64]
};
P.internalSpec = {
  version: [1, r.TYPES.STRING]
};
O.internalSpec = {
  acknowledged: [1, r.TYPES.BOOL]
};
I.internalSpec = {
  isTwentyFourHourFormatEnabled: [1, r.TYPES.BOOL]
};
R.internalSpec = {
  muted: [1, r.TYPES.BOOL]
};
N.internalSpec = {
  isDeactivated: [1, r.TYPES.BOOL],
  isAutoRenewing: [2, r.TYPES.BOOL],
  expirationDate: [3, r.TYPES.INT64]
};
D.internalSpec = {
  name: [1, r.TYPES.STRING],
  deviceID: [2, r.TYPES.INT32],
  isDeleted: [3, r.TYPES.BOOL]
};
w.internalSpec = {
  allowed: [1, r.TYPES.BOOL]
};
L.internalSpec = {
  flags: [1, r.FLAGS.REPEATED | r.TYPES.STRING]
};
k.internalSpec = {
  expiredKeyEpoch: [1, r.TYPES.INT32]
};
G.internalSpec = {
  key: [1, r.TYPES.MESSAGE, i.MessageKeySpec],
  timestamp: [2, r.TYPES.INT64]
};
U.internalSpec = {
  lastMessageTimestamp: [1, r.TYPES.INT64],
  lastSystemMessageTimestamp: [2, r.TYPES.INT64],
  messages: [3, r.FLAGS.REPEATED | r.TYPES.MESSAGE, G]
};
x.internalSpec = {
  unarchiveChats: [1, r.TYPES.BOOL]
};
B.internalSpec = {
  messageRange: [1, r.TYPES.MESSAGE, U]
};
F.internalSpec = {
  messageRange: [1, r.TYPES.MESSAGE, U]
};
j.internalSpec = {
  read: [1, r.TYPES.BOOL],
  messageRange: [2, r.TYPES.MESSAGE, U]
};
Y.internalSpec = {
  deleteMedia: [1, r.TYPES.BOOL],
  messageTimestamp: [2, r.TYPES.INT64]
};
K.internalSpec = {
  archived: [1, r.TYPES.BOOL],
  messageRange: [2, r.TYPES.MESSAGE, U]
};
W.internalSpec = {
  weights: [1, r.FLAGS.REPEATED | r.TYPES.MESSAGE, c]
};
V.internalSpec = {
  name: [1, r.TYPES.STRING],
  color: [2, r.TYPES.INT32],
  predefinedId: [3, r.TYPES.INT32],
  deleted: [4, r.TYPES.BOOL]
};
H.internalSpec = {
  labeled: [1, r.TYPES.BOOL]
};
$.internalSpec = {
  shortcut: [1, r.TYPES.STRING],
  message: [2, r.TYPES.STRING],
  keywords: [3, r.FLAGS.REPEATED | r.TYPES.STRING],
  count: [4, r.TYPES.INT32],
  deleted: [5, r.TYPES.BOOL]
};
z.internalSpec = {
  locale: [1, r.TYPES.STRING]
};
q.internalSpec = {
  name: [1, r.TYPES.STRING]
};
J.internalSpec = {
  showNotification: [1, r.TYPES.BOOL]
};
Q.internalSpec = {
  pinned: [1, r.TYPES.BOOL]
};
X.internalSpec = {
  muted: [1, r.TYPES.BOOL],
  muteEndTimestamp: [2, r.TYPES.INT64],
  autoMuted: [3, r.TYPES.BOOL]
};
Z.internalSpec = {
  fullName: [1, r.TYPES.STRING],
  firstName: [2, r.TYPES.STRING],
  lidJid: [3, r.TYPES.STRING]
};
ee.internalSpec = {
  starred: [1, r.TYPES.BOOL]
};
te.internalSpec = {
  index: [1, r.TYPES.BYTES],
  value: [2, r.TYPES.MESSAGE, f],
  padding: [3, r.TYPES.BYTES],
  version: [4, r.TYPES.INT32]
};