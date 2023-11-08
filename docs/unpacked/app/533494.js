Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Message$InteractiveResponseMessage$BodySpec = exports.Message$InteractiveResponseMessage$Body$Format = exports.Message$InteractiveMessageSpec = exports.Message$InteractiveMessage$ShopMessageSpec = exports.Message$InteractiveMessage$ShopMessage$Surface = exports.Message$InteractiveMessage$NativeFlowMessageSpec = exports.Message$InteractiveMessage$NativeFlowMessage$NativeFlowButtonSpec = exports.Message$InteractiveMessage$HeaderSpec = exports.Message$InteractiveMessage$FooterSpec = exports.Message$InteractiveMessage$CollectionMessageSpec = exports.Message$InteractiveMessage$CarouselMessageSpec = exports.Message$InteractiveMessage$BodySpec = exports.Message$InitialSecurityNotificationSettingSyncSpec = exports.Message$ImageMessageSpec = exports.Message$HistorySyncNotificationSpec = exports.Message$HistorySyncNotification$HistorySyncType = exports.Message$HighlyStructuredMessageSpec = exports.Message$HighlyStructuredMessage$HSMLocalizableParameterSpec = exports.Message$HighlyStructuredMessage$HSMLocalizableParameter$HSMDateTimeSpec = exports.Message$HighlyStructuredMessage$HSMLocalizableParameter$HSMDateTime$HSMDateTimeUnixEpochSpec = exports.Message$HighlyStructuredMessage$HSMLocalizableParameter$HSMDateTime$HSMDateTimeComponentSpec = exports.Message$HighlyStructuredMessage$HSMLocalizableParameter$HSMDateTime$HSMDateTimeComponent$DayOfWeekType = exports.Message$HighlyStructuredMessage$HSMLocalizableParameter$HSMDateTime$HSMDateTimeComponent$CalendarType = exports.Message$HighlyStructuredMessage$HSMLocalizableParameter$HSMCurrencySpec = exports.Message$GroupInviteMessageSpec = exports.Message$GroupInviteMessage$GroupType = exports.Message$FutureProofMessageSpec = exports.Message$ExtendedTextMessageSpec = exports.Message$ExtendedTextMessage$PreviewType = exports.Message$ExtendedTextMessage$InviteLinkGroupType = exports.Message$ExtendedTextMessage$FontType = exports.Message$EventResponseMessageSpec = exports.Message$EventResponseMessage$EventResponseType = exports.Message$EventMessageSpec = exports.Message$EncReactionMessageSpec = exports.Message$EncEventResponseMessageSpec = exports.Message$EncCommentMessageSpec = exports.Message$DocumentMessageSpec = exports.Message$DeviceSentMessageSpec = exports.Message$DeclinePaymentRequestMessageSpec = exports.Message$ContactsArrayMessageSpec = exports.Message$ContactMessageSpec = exports.Message$CommentMessageSpec = exports.Message$ChatSpec = exports.Message$CancelPaymentRequestMessageSpec = exports.Message$CallSpec = exports.Message$CallLogMessageSpec = exports.Message$CallLogMessage$CallType = exports.Message$CallLogMessage$CallParticipantSpec = exports.Message$CallLogMessage$CallOutcome = exports.Message$ButtonsResponseMessageSpec = exports.Message$ButtonsResponseMessage$Type = exports.Message$ButtonsMessageSpec = exports.Message$ButtonsMessage$HeaderType = exports.Message$ButtonsMessage$ButtonSpec = exports.Message$ButtonsMessage$Button$Type = exports.Message$ButtonsMessage$Button$NativeFlowInfoSpec = exports.Message$ButtonsMessage$Button$ButtonTextSpec = exports.Message$BotFeedbackMessageSpec = exports.Message$BotFeedbackMessage$BotFeedbackKindMultiplePositive = exports.Message$BotFeedbackMessage$BotFeedbackKindMultipleNegative = exports.Message$BotFeedbackMessage$BotFeedbackKind = exports.Message$BCallMessageSpec = exports.Message$BCallMessage$MediaType = exports.Message$AudioMessageSpec = exports.Message$AppStateSyncKeySpec = exports.Message$AppStateSyncKeyShareSpec = exports.Message$AppStateSyncKeyRequestSpec = exports.Message$AppStateSyncKeyIdSpec = exports.Message$AppStateSyncKeyFingerprintSpec = exports.Message$AppStateSyncKeyDataSpec = exports.Message$AppStateFatalExceptionNotificationSpec = exports.LocationSpec = exports.KeepType = exports.InteractiveAnnotationSpec = exports.HydratedTemplateButtonSpec = exports.HydratedTemplateButton$HydratedURLButtonSpec = exports.HydratedTemplateButton$HydratedURLButton$WebviewPresentationType = exports.HydratedTemplateButton$HydratedQuickReplyButtonSpec = exports.HydratedTemplateButton$HydratedCallButtonSpec = exports.GroupMentionSpec = exports.DisappearingModeSpec = exports.DisappearingMode$Trigger = exports.DisappearingMode$Initiator = exports.DeviceListMetadataSpec = exports.ContextInfoSpec = exports.ContextInfo$UTMInfoSpec = exports.ContextInfo$ForwardedNewsletterMessageInfoSpec = exports.ContextInfo$ExternalAdReplyInfoSpec = exports.ContextInfo$ExternalAdReplyInfo$MediaType = exports.ContextInfo$DataSharingContextSpec = exports.ContextInfo$BusinessMessageForwardInfoSpec = exports.ContextInfo$AdReplyInfoSpec = exports.ContextInfo$AdReplyInfo$MediaType = exports.BotPluginMetadataSpec = exports.BotPluginMetadata$SearchProvider = exports.BotPluginMetadata$PluginType = exports.BotMetadataSpec = exports.BotAvatarMetadataSpec = exports.ActionLinkSpec = undefined;
exports.TemplateButtonSpec = exports.TemplateButton$URLButtonSpec = exports.TemplateButton$QuickReplyButtonSpec = exports.TemplateButton$CallButtonSpec = exports.PointSpec = exports.PaymentBackgroundSpec = exports.PaymentBackground$Type = exports.PaymentBackground$MediaDataSpec = exports.MoneySpec = exports.MessageSpec = exports.MessageSecretMessageSpec = exports.MessageContextInfoSpec = exports.Message$VideoMessageSpec = exports.Message$VideoMessage$Attribution = exports.Message$TemplateMessageSpec = exports.Message$TemplateMessage$HydratedFourRowTemplateSpec = exports.Message$TemplateMessage$FourRowTemplateSpec = exports.Message$TemplateButtonReplyMessageSpec = exports.Message$StickerSyncRMRMessageSpec = exports.Message$StickerMessageSpec = exports.Message$SenderKeyDistributionMessageSpec = exports.Message$SendPaymentMessageSpec = exports.Message$ScheduledCallEditMessageSpec = exports.Message$ScheduledCallEditMessage$EditType = exports.Message$ScheduledCallCreationMessageSpec = exports.Message$ScheduledCallCreationMessage$CallType = exports.Message$RequestWelcomeMessageMetadataSpec = exports.Message$RequestWelcomeMessageMetadata$LocalChatState = exports.Message$RequestPhoneNumberMessageSpec = exports.Message$RequestPaymentMessageSpec = exports.Message$ReactionMessageSpec = exports.Message$ProtocolMessageSpec = exports.Message$ProtocolMessage$Type = exports.Message$ProductMessageSpec = exports.Message$ProductMessage$ProductSnapshotSpec = exports.Message$ProductMessage$CatalogSnapshotSpec = exports.Message$PollVoteMessageSpec = exports.Message$PollUpdateMessageSpec = exports.Message$PollUpdateMessageMetadataSpec = exports.Message$PollEncValueSpec = exports.Message$PollCreationMessageSpec = exports.Message$PollCreationMessage$OptionSpec = exports.Message$PinInChatMessageSpec = exports.Message$PinInChatMessage$Type = exports.Message$PeerDataOperationRequestType = exports.Message$PeerDataOperationRequestResponseMessageSpec = exports.Message$PeerDataOperationRequestResponseMessage$PeerDataOperationResultSpec = exports.Message$PeerDataOperationRequestResponseMessage$PeerDataOperationResult$PlaceholderMessageResendResponseSpec = exports.Message$PeerDataOperationRequestResponseMessage$PeerDataOperationResult$LinkPreviewResponseSpec = exports.Message$PeerDataOperationRequestResponseMessage$PeerDataOperationResult$LinkPreviewResponse$LinkPreviewHighQualityThumbnailSpec = exports.Message$PeerDataOperationRequestMessageSpec = exports.Message$PeerDataOperationRequestMessage$RequestUrlPreviewSpec = exports.Message$PeerDataOperationRequestMessage$RequestStickerReuploadSpec = exports.Message$PeerDataOperationRequestMessage$PlaceholderMessageResendRequestSpec = exports.Message$PeerDataOperationRequestMessage$HistorySyncOnDemandRequestSpec = exports.Message$PaymentInviteMessageSpec = exports.Message$PaymentInviteMessage$ServiceType = exports.Message$OrderMessageSpec = exports.Message$OrderMessage$OrderSurface = exports.Message$OrderMessage$OrderStatus = exports.Message$NewsletterAdminInviteMessageSpec = exports.Message$MessageHistoryBundleSpec = exports.Message$LocationMessageSpec = exports.Message$LiveLocationMessageSpec = exports.Message$ListResponseMessageSpec = exports.Message$ListResponseMessage$SingleSelectReplySpec = exports.Message$ListResponseMessage$ListType = exports.Message$ListMessageSpec = exports.Message$ListMessage$SectionSpec = exports.Message$ListMessage$RowSpec = exports.Message$ListMessage$ProductSpec = exports.Message$ListMessage$ProductSectionSpec = exports.Message$ListMessage$ProductListInfoSpec = exports.Message$ListMessage$ProductListHeaderImageSpec = exports.Message$ListMessage$ListType = exports.Message$KeepInChatMessageSpec = exports.Message$InvoiceMessageSpec = exports.Message$InvoiceMessage$AttachmentType = exports.Message$InteractiveResponseMessageSpec = exports.Message$InteractiveResponseMessage$NativeFlowResponseMessageSpec = exports.Message$InteractiveResponseMessage$BodySpec = exports.Message$InteractiveResponseMessage$Body$Format = exports.Message$InteractiveMessageSpec = exports.Message$InteractiveMessage$ShopMessageSpec = exports.Message$InteractiveMessage$ShopMessage$Surface = exports.Message$InteractiveMessage$NativeFlowMessageSpec = exports.Message$InteractiveMessage$NativeFlowMessage$NativeFlowButtonSpec = exports.Message$InteractiveMessage$HeaderSpec = exports.Message$InteractiveMessage$FooterSpec = exports.Message$InteractiveMessage$CollectionMessageSpec = exports.Message$InteractiveMessage$CarouselMessageSpec = exports.Message$InteractiveMessage$BodySpec = exports.Message$InitialSecurityNotificationSettingSyncSpec = exports.Message$ImageMessageSpec = exports.Message$HistorySyncNotificationSpec = exports.Message$HistorySyncNotification$HistorySyncType = exports.Message$HighlyStructuredMessageSpec = exports.Message$HighlyStructuredMessage$HSMLocalizableParameterSpec = exports.Message$HighlyStructuredMessage$HSMLocalizableParameter$HSMDateTimeSpec = exports.Message$HighlyStructuredMessage$HSMLocalizableParameter$HSMDateTime$HSMDateTimeUnixEpochSpec = exports.Message$HighlyStructuredMessage$HSMLocalizableParameter$HSMDateTime$HSMDateTimeComponentSpec = exports.Message$HighlyStructuredMessage$HSMLocalizableParameter$HSMDateTime$HSMDateTimeComponent$DayOfWeekType = exports.Message$HighlyStructuredMessage$HSMLocalizableParameter$HSMDateTime$HSMDateTimeComponent$CalendarType = exports.Message$HighlyStructuredMessage$HSMLocalizableParameter$HSMCurrencySpec = exports.Message$GroupInviteMessageSpec = exports.Message$GroupInviteMessage$GroupType = exports.Message$FutureProofMessageSpec = exports.Message$ExtendedTextMessageSpec = exports.Message$ExtendedTextMessage$PreviewType = exports.Message$ExtendedTextMessage$InviteLinkGroupType = exports.Message$ExtendedTextMessage$FontType = exports.Message$EventResponseMessageSpec = exports.Message$EventResponseMessage$EventResponseType = exports.Message$EventMessageSpec = exports.Message$EncReactionMessageSpec = exports.Message$EncEventResponseMessageSpec = exports.Message$EncCommentMessageSpec = exports.Message$DocumentMessageSpec = exports.Message$DeviceSentMessageSpec = exports.Message$DeclinePaymentRequestMessageSpec = exports.Message$ContactsArrayMessageSpec = exports.Message$ContactMessageSpec = exports.Message$CommentMessageSpec = exports.Message$ChatSpec = exports.Message$CancelPaymentRequestMessageSpec = exports.Message$CallSpec = exports.Message$CallLogMessageSpec = exports.Message$CallLogMessage$CallType = exports.Message$CallLogMessage$CallParticipantSpec = exports.Message$CallLogMessage$CallOutcome = exports.Message$ButtonsResponseMessageSpec = exports.Message$ButtonsResponseMessage$Type = exports.Message$ButtonsMessageSpec = exports.Message$ButtonsMessage$HeaderType = exports.Message$ButtonsMessage$ButtonSpec = exports.Message$ButtonsMessage$Button$Type = exports.Message$ButtonsMessage$Button$NativeFlowInfoSpec = exports.Message$ButtonsMessage$Button$ButtonTextSpec = exports.Message$BotFeedbackMessageSpec = exports.Message$BotFeedbackMessage$BotFeedbackKindMultiplePositive = exports.Message$BotFeedbackMessage$BotFeedbackKindMultipleNegative = exports.Message$BotFeedbackMessage$BotFeedbackKind = exports.Message$BCallMessageSpec = exports.Message$BCallMessage$MediaType = exports.Message$AudioMessageSpec = exports.Message$AppStateSyncKeySpec = exports.Message$AppStateSyncKeyShareSpec = exports.Message$AppStateSyncKeyRequestSpec = exports.Message$AppStateSyncKeyIdSpec = exports.Message$AppStateSyncKeyFingerprintSpec = exports.Message$AppStateSyncKeyDataSpec = exports.Message$AppStateFatalExceptionNotificationSpec = exports.LocationSpec = exports.KeepType = exports.InteractiveAnnotationSpec = exports.HydratedTemplateButtonSpec = exports.HydratedTemplateButton$HydratedURLButtonSpec = exports.HydratedTemplateButton$HydratedURLButton$WebviewPresentationType = exports.HydratedTemplateButton$HydratedQuickReplyButtonSpec = exports.HydratedTemplateButton$HydratedCallButtonSpec = exports.GroupMentionSpec = exports.DisappearingModeSpec = exports.DisappearingMode$Trigger = exports.DisappearingMode$Initiator = exports.DeviceListMetadataSpec = exports.ContextInfoSpec = exports.ContextInfo$UTMInfoSpec = exports.ContextInfo$ForwardedNewsletterMessageInfoSpec = exports.ContextInfo$ExternalAdReplyInfoSpec = exports.ContextInfo$ExternalAdReplyInfo$MediaType = exports.ContextInfo$DataSharingContextSpec = exports.ContextInfo$BusinessMessageForwardInfoSpec = exports.ContextInfo$AdReplyInfoSpec = exports.ContextInfo$AdReplyInfo$MediaType = exports.BotPluginMetadataSpec = exports.BotPluginMetadata$SearchProvider = exports.BotPluginMetadata$PluginType = exports.BotMetadataSpec = exports.BotAvatarMetadataSpec = exports.ActionLinkSpec = undefined;
var r = require("./751206.js");
var i = require("./933734.js");
var a = require("./229479.js");
var o = require("./962559.js");
const s = require("../vendor/76672.js")({
  UNKNOWN: 0,
  AUDIO: 1,
  VIDEO: 2
});
exports.Message$BCallMessage$MediaType = s;
const l = require("../vendor/76672.js")({
  CONNECTED: 0,
  MISSED: 1,
  FAILED: 2,
  REJECTED: 3,
  ACCEPTED_ELSEWHERE: 4,
  ONGOING: 5,
  SILENCED_BY_DND: 6,
  SILENCED_UNKNOWN_CALLER: 7
});
exports.Message$CallLogMessage$CallOutcome = l;
const u = require("../vendor/76672.js")({
  REGULAR: 0,
  SCHEDULED_CALL: 1,
  VOICE_CHAT: 2
});
exports.Message$CallLogMessage$CallType = u;
const c = require("../vendor/76672.js")({
  UNKNOWN: 0,
  CANCEL: 1
});
exports.Message$ScheduledCallEditMessage$EditType = c;
const d = require("../vendor/76672.js")({
  UNKNOWN: 0,
  VOICE: 1,
  VIDEO: 2
});
exports.Message$ScheduledCallCreationMessage$CallType = d;
const p = require("../vendor/76672.js")({
  UNKNOWN: 0,
  GOING: 1,
  NOT_GOING: 2
});
exports.Message$EventResponseMessage$EventResponseType = p;
const f = require("../vendor/76672.js")({
  UNKNOWN_TYPE: 0,
  PIN_FOR_ALL: 1,
  UNPIN_FOR_ALL: 2
});
exports.Message$PinInChatMessage$Type = f;
const _ = require("../vendor/76672.js")({
  UNKNOWN: 0,
  DISPLAY_TEXT: 1
});
exports.Message$ButtonsResponseMessage$Type = _;
const g = require("../vendor/76672.js")({
  UNKNOWN: 0,
  RESPONSE: 1,
  NATIVE_FLOW: 2
});
exports.Message$ButtonsMessage$Button$Type = g;
const m = require("../vendor/76672.js")({
  UNKNOWN: 0,
  EMPTY: 1,
  TEXT: 2,
  DOCUMENT: 3,
  IMAGE: 4,
  VIDEO: 5,
  LOCATION: 6
});
exports.Message$ButtonsMessage$HeaderType = m;
const h = require("../vendor/76672.js")({
  DEFAULT: 0,
  PARENT: 1
});
exports.Message$GroupInviteMessage$GroupType = h;
const y = require("../vendor/76672.js")({
  DEFAULT: 0,
  EXTENSIONS_1: 1
});
exports.Message$InteractiveResponseMessage$Body$Format = y;
const E = require("../vendor/76672.js")({
  UNKNOWN_SURFACE: 0,
  FB: 1,
  IG: 2,
  WA: 3
});
exports.Message$InteractiveMessage$ShopMessage$Surface = E;
const S = require("../vendor/76672.js")({
  UNKNOWN: 0,
  SINGLE_SELECT: 1
});
exports.Message$ListResponseMessage$ListType = S;
const v = require("../vendor/76672.js")({
  UNKNOWN: 0,
  SINGLE_SELECT: 1,
  PRODUCT_LIST: 2
});
exports.Message$ListMessage$ListType = v;
const T = require("../vendor/76672.js")({
  CATALOG: 1
});
exports.Message$OrderMessage$OrderSurface = T;
const M = require("../vendor/76672.js")({
  INQUIRY: 1,
  ACCEPTED: 2,
  DECLINED: 3
});
exports.Message$OrderMessage$OrderStatus = M;
const A = require("../vendor/76672.js")({
  UNKNOWN: 0,
  FBPAY: 1,
  NOVI: 2,
  UPI: 3
});
exports.Message$PaymentInviteMessage$ServiceType = A;
const b = require("../vendor/76672.js")({
  GREGORIAN: 1,
  SOLAR_HIJRI: 2
});
exports.Message$HighlyStructuredMessage$HSMLocalizableParameter$HSMDateTime$HSMDateTimeComponent$CalendarType = b;
const C = require("../vendor/76672.js")({
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6,
  SUNDAY: 7
});
exports.Message$HighlyStructuredMessage$HSMLocalizableParameter$HSMDateTime$HSMDateTimeComponent$DayOfWeekType = C;
const P = require("../vendor/76672.js")({
  UPLOAD_STICKER: 0,
  SEND_RECENT_STICKER_BOOTSTRAP: 1,
  GENERATE_LINK_PREVIEW: 2,
  HISTORY_SYNC_ON_DEMAND: 3,
  PLACEHOLDER_MESSAGE_RESEND: 4
});
exports.Message$PeerDataOperationRequestType = P;
const O = require("../vendor/76672.js")({
  INITIAL_BOOTSTRAP: 0,
  INITIAL_STATUS_V3: 1,
  FULL: 2,
  RECENT: 3,
  PUSH_NAME: 4,
  NON_BLOCKING_DATA: 5,
  ON_DEMAND: 6
});
exports.Message$HistorySyncNotification$HistorySyncType = O;
const I = require("../vendor/76672.js")({
  EMPTY: 0,
  NON_EMPTY: 1
});
exports.Message$RequestWelcomeMessageMetadata$LocalChatState = I;
const R = require("../vendor/76672.js")({
  REVOKE: 0,
  EPHEMERAL_SETTING: 3,
  EPHEMERAL_SYNC_RESPONSE: 4,
  HISTORY_SYNC_NOTIFICATION: 5,
  APP_STATE_SYNC_KEY_SHARE: 6,
  APP_STATE_SYNC_KEY_REQUEST: 7,
  MSG_FANOUT_BACKFILL_REQUEST: 8,
  INITIAL_SECURITY_NOTIFICATION_SETTING_SYNC: 9,
  APP_STATE_FATAL_EXCEPTION_NOTIFICATION: 10,
  SHARE_PHONE_NUMBER: 11,
  MESSAGE_EDIT: 14,
  PEER_DATA_OPERATION_REQUEST_MESSAGE: 16,
  PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE: 17,
  REQUEST_WELCOME_MESSAGE: 18,
  BOT_FEEDBACK_MESSAGE: 19
});
exports.Message$ProtocolMessage$Type = R;
const N = require("../vendor/76672.js")({
  BOT_FEEDBACK_MULTIPLE_POSITIVE_GENERIC: 1
});
exports.Message$BotFeedbackMessage$BotFeedbackKindMultiplePositive = N;
const D = require("../vendor/76672.js")({
  BOT_FEEDBACK_MULTIPLE_NEGATIVE_GENERIC: 1,
  BOT_FEEDBACK_MULTIPLE_NEGATIVE_HELPFUL: 2,
  BOT_FEEDBACK_MULTIPLE_NEGATIVE_INTERESTING: 4,
  BOT_FEEDBACK_MULTIPLE_NEGATIVE_ACCURATE: 8,
  BOT_FEEDBACK_MULTIPLE_NEGATIVE_SAFE: 16,
  BOT_FEEDBACK_MULTIPLE_NEGATIVE_OTHER: 32,
  BOT_FEEDBACK_MULTIPLE_NEGATIVE_REFUSED: 64,
  BOT_FEEDBACK_MULTIPLE_NEGATIVE_NOT_VISUALLY_APPEALING: 128,
  BOT_FEEDBACK_MULTIPLE_NEGATIVE_NOT_RELEVANT_TO_TEXT: 256
});
exports.Message$BotFeedbackMessage$BotFeedbackKindMultipleNegative = D;
const w = require("../vendor/76672.js")({
  BOT_FEEDBACK_POSITIVE: 0,
  BOT_FEEDBACK_NEGATIVE_GENERIC: 1,
  BOT_FEEDBACK_NEGATIVE_HELPFUL: 2,
  BOT_FEEDBACK_NEGATIVE_INTERESTING: 3,
  BOT_FEEDBACK_NEGATIVE_ACCURATE: 4,
  BOT_FEEDBACK_NEGATIVE_SAFE: 5,
  BOT_FEEDBACK_NEGATIVE_OTHER: 6,
  BOT_FEEDBACK_NEGATIVE_REFUSED: 7,
  BOT_FEEDBACK_NEGATIVE_NOT_VISUALLY_APPEALING: 8,
  BOT_FEEDBACK_NEGATIVE_NOT_RELEVANT_TO_TEXT: 9
});
exports.Message$BotFeedbackMessage$BotFeedbackKind = w;
const L = require("../vendor/76672.js")({
  NONE: 0,
  GIPHY: 1,
  TENOR: 2
});
exports.Message$VideoMessage$Attribution = L;
const k = require("../vendor/76672.js")({
  DEFAULT: 0,
  PARENT: 1,
  SUB: 2,
  DEFAULT_SUB: 3
});
exports.Message$ExtendedTextMessage$InviteLinkGroupType = k;
const G = require("../vendor/76672.js")({
  NONE: 0,
  VIDEO: 1,
  PLACEHOLDER: 4,
  IMAGE: 5
});
exports.Message$ExtendedTextMessage$PreviewType = G;
const U = require("../vendor/76672.js")({
  SYSTEM: 0,
  SYSTEM_TEXT: 1,
  FB_SCRIPT: 2,
  SYSTEM_BOLD: 6,
  MORNINGBREEZE_REGULAR: 7,
  CALISTOGA_REGULAR: 8,
  EXO2_EXTRABOLD: 9,
  COURIERPRIME_BOLD: 10
});
exports.Message$ExtendedTextMessage$FontType = U;
const x = require("../vendor/76672.js")({
  IMAGE: 0,
  PDF: 1
});
exports.Message$InvoiceMessage$AttachmentType = x;
const B = require("../vendor/76672.js")({
  NONE: 0,
  IMAGE: 1,
  VIDEO: 2
});
exports.ContextInfo$ExternalAdReplyInfo$MediaType = B;
const F = require("../vendor/76672.js")({
  NONE: 0,
  IMAGE: 1,
  VIDEO: 2
});
exports.ContextInfo$AdReplyInfo$MediaType = F;
const j = require("../vendor/76672.js")({
  REELS: 1,
  SEARCH: 2
});
exports.BotPluginMetadata$PluginType = j;
const Y = require("../vendor/76672.js")({
  BING: 1,
  GOOGLE: 2
});
exports.BotPluginMetadata$SearchProvider = Y;
const K = require("../vendor/76672.js")({
  FULL: 1,
  TALL: 2,
  COMPACT: 3
});
exports.HydratedTemplateButton$HydratedURLButton$WebviewPresentationType = K;
const W = require("../vendor/76672.js")({
  UNKNOWN: 0,
  DEFAULT: 1
});
exports.PaymentBackground$Type = W;
const V = require("../vendor/76672.js")({
  UNKNOWN: 0,
  CHAT_SETTING: 1,
  ACCOUNT_SETTING: 2,
  BULK_CHANGE: 3
});
exports.DisappearingMode$Trigger = V;
const H = require("../vendor/76672.js")({
  CHANGED_IN_CHAT: 0,
  INITIATED_BY_ME: 1,
  INITIATED_BY_OTHER: 2
});
exports.DisappearingMode$Initiator = H;
const $ = require("../vendor/76672.js")({
  UNKNOWN: 0,
  KEEP_FOR_ALL: 1,
  UNDO_KEEP_FOR_ALL: 2
});
exports.KeepType = $;
const z = {};
exports.MessageSpec = z;
const q = {};
exports.Message$BCallMessageSpec = q;
const J = {};
exports.Message$MessageHistoryBundleSpec = J;
const Q = {};
exports.Message$CallLogMessageSpec = Q;
const X = {};
exports.Message$CallLogMessage$CallParticipantSpec = X;
const Z = {};
exports.Message$ScheduledCallEditMessageSpec = Z;
const ee = {};
exports.Message$ScheduledCallCreationMessageSpec = ee;
const te = {};
exports.Message$EventResponseMessageSpec = te;
const ne = {};
exports.Message$EncEventResponseMessageSpec = ne;
const re = {};
exports.Message$EventMessageSpec = re;
const ie = {};
exports.Message$CommentMessageSpec = ie;
const ae = {};
exports.Message$EncCommentMessageSpec = ae;
const oe = {};
exports.Message$EncReactionMessageSpec = oe;
const se = {};
exports.Message$PinInChatMessageSpec = se;
const le = {};
exports.Message$KeepInChatMessageSpec = le;
const ue = {};
exports.Message$PollVoteMessageSpec = ue;
const ce = {};
exports.Message$PollEncValueSpec = ce;
const de = {};
exports.Message$PollUpdateMessageMetadataSpec = de;
const pe = {};
exports.Message$PollUpdateMessageSpec = pe;
const fe = {};
exports.Message$PollCreationMessageSpec = fe;
const _e = {};
exports.Message$PollCreationMessage$OptionSpec = _e;
const ge = {};
exports.Message$StickerSyncRMRMessageSpec = ge;
const me = {};
exports.Message$ReactionMessageSpec = me;
const he = {};
exports.Message$ButtonsResponseMessageSpec = he;
const ye = {};
exports.Message$ButtonsMessageSpec = ye;
const Ee = {};
exports.Message$ButtonsMessage$ButtonSpec = Ee;
const Se = {};
exports.Message$ButtonsMessage$Button$NativeFlowInfoSpec = Se;
const ve = {};
exports.Message$ButtonsMessage$Button$ButtonTextSpec = ve;
const Te = {};
exports.Message$FutureProofMessageSpec = Te;
const Me = {};
exports.Message$DeviceSentMessageSpec = Me;
const Ae = {};
exports.Message$RequestPhoneNumberMessageSpec = Ae;
const be = {};
exports.Message$NewsletterAdminInviteMessageSpec = be;
const Ce = {};
exports.Message$GroupInviteMessageSpec = Ce;
const Pe = {};
exports.Message$InteractiveResponseMessageSpec = Pe;
const Oe = {};
exports.Message$InteractiveResponseMessage$NativeFlowResponseMessageSpec = Oe;
const Ie = {};
exports.Message$InteractiveResponseMessage$BodySpec = Ie;
const Re = {};
exports.Message$InteractiveMessageSpec = Re;
const Ne = {};
exports.Message$InteractiveMessage$CarouselMessageSpec = Ne;
const De = {};
exports.Message$InteractiveMessage$NativeFlowMessageSpec = De;
const we = {};
exports.Message$InteractiveMessage$NativeFlowMessage$NativeFlowButtonSpec = we;
const Le = {};
exports.Message$InteractiveMessage$CollectionMessageSpec = Le;
const ke = {};
exports.Message$InteractiveMessage$ShopMessageSpec = ke;
const Ge = {};
exports.Message$InteractiveMessage$FooterSpec = Ge;
const Ue = {};
exports.Message$InteractiveMessage$BodySpec = Ue;
const xe = {};
exports.Message$InteractiveMessage$HeaderSpec = xe;
const Be = {};
exports.Message$ListResponseMessageSpec = Be;
const Fe = {};
exports.Message$ListResponseMessage$SingleSelectReplySpec = Fe;
const je = {};
exports.Message$ListMessageSpec = je;
const Ye = {};
exports.Message$ListMessage$ProductListInfoSpec = Ye;
const Ke = {};
exports.Message$ListMessage$ProductListHeaderImageSpec = Ke;
const We = {};
exports.Message$ListMessage$ProductSectionSpec = We;
const Ve = {};
exports.Message$ListMessage$ProductSpec = Ve;
const He = {};
exports.Message$ListMessage$SectionSpec = He;
const $e = {};
exports.Message$ListMessage$RowSpec = $e;
const ze = {};
exports.Message$OrderMessageSpec = ze;
const qe = {};
exports.Message$ProductMessageSpec = qe;
const Je = {};
exports.Message$ProductMessage$ProductSnapshotSpec = Je;
const Qe = {};
exports.Message$ProductMessage$CatalogSnapshotSpec = Qe;
const Xe = {};
exports.Message$TemplateButtonReplyMessageSpec = Xe;
const Ze = {};
exports.Message$TemplateMessageSpec = Ze;
const et = {};
exports.Message$TemplateMessage$HydratedFourRowTemplateSpec = et;
const tt = {};
exports.Message$TemplateMessage$FourRowTemplateSpec = tt;
const nt = {};
exports.Message$StickerMessageSpec = nt;
const rt = {};
exports.Message$LiveLocationMessageSpec = rt;
const it = {};
exports.Message$PaymentInviteMessageSpec = it;
const at = {};
exports.Message$CancelPaymentRequestMessageSpec = at;
const ot = {};
exports.Message$DeclinePaymentRequestMessageSpec = ot;
const st = {};
exports.Message$RequestPaymentMessageSpec = st;
const lt = {};
exports.Message$SendPaymentMessageSpec = lt;
const ut = {};
exports.Message$HighlyStructuredMessageSpec = ut;
const ct = {};
exports.Message$HighlyStructuredMessage$HSMLocalizableParameterSpec = ct;
const dt = {};
exports.Message$HighlyStructuredMessage$HSMLocalizableParameter$HSMDateTimeSpec = dt;
const pt = {};
exports.Message$HighlyStructuredMessage$HSMLocalizableParameter$HSMDateTime$HSMDateTimeUnixEpochSpec = pt;
const ft = {};
exports.Message$HighlyStructuredMessage$HSMLocalizableParameter$HSMDateTime$HSMDateTimeComponentSpec = ft;
const _t = {};
exports.Message$HighlyStructuredMessage$HSMLocalizableParameter$HSMCurrencySpec = _t;
const gt = {};
exports.Message$ContactsArrayMessageSpec = gt;
const mt = {};
exports.Message$InitialSecurityNotificationSettingSyncSpec = mt;
const ht = {};
exports.Message$PeerDataOperationRequestResponseMessageSpec = ht;
const yt = {};
exports.Message$PeerDataOperationRequestResponseMessage$PeerDataOperationResultSpec = yt;
const Et = {};
exports.Message$PeerDataOperationRequestResponseMessage$PeerDataOperationResult$PlaceholderMessageResendResponseSpec = Et;
const St = {};
exports.Message$PeerDataOperationRequestResponseMessage$PeerDataOperationResult$LinkPreviewResponseSpec = St;
const vt = {};
exports.Message$PeerDataOperationRequestResponseMessage$PeerDataOperationResult$LinkPreviewResponse$LinkPreviewHighQualityThumbnailSpec = vt;
const Tt = {};
exports.Message$PeerDataOperationRequestMessageSpec = Tt;
const Mt = {};
exports.Message$PeerDataOperationRequestMessage$PlaceholderMessageResendRequestSpec = Mt;
const At = {};
exports.Message$PeerDataOperationRequestMessage$HistorySyncOnDemandRequestSpec = At;
const bt = {};
exports.Message$PeerDataOperationRequestMessage$RequestUrlPreviewSpec = bt;
const Ct = {};
exports.Message$PeerDataOperationRequestMessage$RequestStickerReuploadSpec = Ct;
const Pt = {};
exports.Message$AppStateFatalExceptionNotificationSpec = Pt;
const Ot = {};
exports.Message$AppStateSyncKeyRequestSpec = Ot;
const It = {};
exports.Message$AppStateSyncKeyShareSpec = It;
const Rt = {};
exports.Message$AppStateSyncKeyDataSpec = Rt;
const Nt = {};
exports.Message$AppStateSyncKeyFingerprintSpec = Nt;
const Dt = {};
exports.Message$AppStateSyncKeyIdSpec = Dt;
const wt = {};
exports.Message$AppStateSyncKeySpec = wt;
const Lt = {};
exports.Message$HistorySyncNotificationSpec = Lt;
const kt = {};
exports.Message$RequestWelcomeMessageMetadataSpec = kt;
const Gt = {};
exports.Message$ProtocolMessageSpec = Gt;
const Ut = {};
exports.Message$BotFeedbackMessageSpec = Ut;
const xt = {};
exports.Message$ChatSpec = xt;
const Bt = {};
exports.Message$CallSpec = Bt;
const Ft = {};
exports.Message$VideoMessageSpec = Ft;
const jt = {};
exports.Message$AudioMessageSpec = jt;
const Yt = {};
exports.Message$DocumentMessageSpec = Yt;
const Kt = {};
exports.Message$ExtendedTextMessageSpec = Kt;
const Wt = {};
exports.Message$LocationMessageSpec = Wt;
const Vt = {};
exports.Message$ContactMessageSpec = Vt;
const Ht = {};
exports.Message$InvoiceMessageSpec = Ht;
const $t = {};
exports.Message$ImageMessageSpec = $t;
const zt = {};
exports.Message$SenderKeyDistributionMessageSpec = zt;
const qt = {};
exports.ContextInfoSpec = qt;
const Jt = {};
exports.ContextInfo$DataSharingContextSpec = Jt;
const Qt = {};
exports.ContextInfo$ForwardedNewsletterMessageInfoSpec = Qt;
const Xt = {};
exports.ContextInfo$UTMInfoSpec = Xt;
const Zt = {};
exports.ContextInfo$ExternalAdReplyInfoSpec = Zt;
const en = {};
exports.ContextInfo$AdReplyInfoSpec = en;
const tn = {};
exports.ContextInfo$BusinessMessageForwardInfoSpec = tn;
const nn = {};
exports.BotAvatarMetadataSpec = nn;
const rn = {};
exports.BotPluginMetadataSpec = rn;
const an = {};
exports.BotMetadataSpec = an;
const on = {};
exports.MessageContextInfoSpec = on;
const sn = {};
exports.DeviceListMetadataSpec = sn;
const ln = {};
exports.InteractiveAnnotationSpec = ln;
const un = {};
exports.PointSpec = un;
const cn = {};
exports.LocationSpec = cn;
const dn = {};
exports.TemplateButtonSpec = dn;
const pn = {};
exports.TemplateButton$CallButtonSpec = pn;
const fn = {};
exports.TemplateButton$URLButtonSpec = fn;
const _n = {};
exports.TemplateButton$QuickReplyButtonSpec = _n;
const gn = {};
exports.HydratedTemplateButtonSpec = gn;
const mn = {};
exports.HydratedTemplateButton$HydratedCallButtonSpec = mn;
const hn = {};
exports.HydratedTemplateButton$HydratedURLButtonSpec = hn;
const yn = {};
exports.HydratedTemplateButton$HydratedQuickReplyButtonSpec = yn;
const En = {};
exports.MoneySpec = En;
const Sn = {};
exports.PaymentBackgroundSpec = Sn;
const vn = {};
exports.PaymentBackground$MediaDataSpec = vn;
const Tn = {};
exports.DisappearingModeSpec = Tn;
const Mn = {};
exports.ActionLinkSpec = Mn;
const An = {};
exports.GroupMentionSpec = An;
const bn = {};
exports.MessageSecretMessageSpec = bn;
z.internalSpec = {
  conversation: [1, r.TYPES.STRING],
  senderKeyDistributionMessage: [2, r.TYPES.MESSAGE, zt],
  imageMessage: [3, r.TYPES.MESSAGE, $t],
  contactMessage: [4, r.TYPES.MESSAGE, Vt],
  locationMessage: [5, r.TYPES.MESSAGE, Wt],
  extendedTextMessage: [6, r.TYPES.MESSAGE, Kt],
  documentMessage: [7, r.TYPES.MESSAGE, Yt],
  audioMessage: [8, r.TYPES.MESSAGE, jt],
  videoMessage: [9, r.TYPES.MESSAGE, Ft],
  call: [10, r.TYPES.MESSAGE, Bt],
  chat: [11, r.TYPES.MESSAGE, xt],
  protocolMessage: [12, r.TYPES.MESSAGE, Gt],
  contactsArrayMessage: [13, r.TYPES.MESSAGE, gt],
  highlyStructuredMessage: [14, r.TYPES.MESSAGE, ut],
  fastRatchetKeySenderKeyDistributionMessage: [15, r.TYPES.MESSAGE, zt],
  sendPaymentMessage: [16, r.TYPES.MESSAGE, lt],
  liveLocationMessage: [18, r.TYPES.MESSAGE, rt],
  requestPaymentMessage: [22, r.TYPES.MESSAGE, st],
  declinePaymentRequestMessage: [23, r.TYPES.MESSAGE, ot],
  cancelPaymentRequestMessage: [24, r.TYPES.MESSAGE, at],
  templateMessage: [25, r.TYPES.MESSAGE, Ze],
  stickerMessage: [26, r.TYPES.MESSAGE, nt],
  groupInviteMessage: [28, r.TYPES.MESSAGE, Ce],
  templateButtonReplyMessage: [29, r.TYPES.MESSAGE, Xe],
  productMessage: [30, r.TYPES.MESSAGE, qe],
  deviceSentMessage: [31, r.TYPES.MESSAGE, Me],
  messageContextInfo: [35, r.TYPES.MESSAGE, on],
  listMessage: [36, r.TYPES.MESSAGE, je],
  viewOnceMessage: [37, r.TYPES.MESSAGE, Te],
  orderMessage: [38, r.TYPES.MESSAGE, ze],
  listResponseMessage: [39, r.TYPES.MESSAGE, Be],
  ephemeralMessage: [40, r.TYPES.MESSAGE, Te],
  invoiceMessage: [41, r.TYPES.MESSAGE, Ht],
  buttonsMessage: [42, r.TYPES.MESSAGE, ye],
  buttonsResponseMessage: [43, r.TYPES.MESSAGE, he],
  paymentInviteMessage: [44, r.TYPES.MESSAGE, it],
  interactiveMessage: [45, r.TYPES.MESSAGE, Re],
  reactionMessage: [46, r.TYPES.MESSAGE, me],
  stickerSyncRmrMessage: [47, r.TYPES.MESSAGE, ge],
  interactiveResponseMessage: [48, r.TYPES.MESSAGE, Pe],
  pollCreationMessage: [49, r.TYPES.MESSAGE, fe],
  pollUpdateMessage: [50, r.TYPES.MESSAGE, pe],
  keepInChatMessage: [51, r.TYPES.MESSAGE, le],
  documentWithCaptionMessage: [53, r.TYPES.MESSAGE, Te],
  requestPhoneNumberMessage: [54, r.TYPES.MESSAGE, Ae],
  viewOnceMessageV2: [55, r.TYPES.MESSAGE, Te],
  encReactionMessage: [56, r.TYPES.MESSAGE, oe],
  editedMessage: [58, r.TYPES.MESSAGE, Te],
  viewOnceMessageV2Extension: [59, r.TYPES.MESSAGE, Te],
  pollCreationMessageV2: [60, r.TYPES.MESSAGE, fe],
  scheduledCallCreationMessage: [61, r.TYPES.MESSAGE, ee],
  groupMentionedMessage: [62, r.TYPES.MESSAGE, Te],
  pinInChatMessage: [63, r.TYPES.MESSAGE, se],
  pollCreationMessageV3: [64, r.TYPES.MESSAGE, fe],
  scheduledCallEditMessage: [65, r.TYPES.MESSAGE, Z],
  ptvMessage: [66, r.TYPES.MESSAGE, Ft],
  botInvokeMessage: [67, r.TYPES.MESSAGE, Te],
  callLogMesssage: [69, r.TYPES.MESSAGE, Q],
  messageHistoryBundle: [70, r.TYPES.MESSAGE, J],
  encCommentMessage: [71, r.TYPES.MESSAGE, ae],
  bcallMessage: [72, r.TYPES.MESSAGE, q],
  lottieStickerMessage: [74, r.TYPES.MESSAGE, Te],
  eventMessage: [75, r.TYPES.MESSAGE, re],
  encEventResponseMessage: [76, r.TYPES.MESSAGE, ne],
  commentMessage: [77, r.TYPES.MESSAGE, ie],
  newsletterAdminInviteMessage: [78, r.TYPES.MESSAGE, be]
};
q.internalSpec = {
  sessionId: [1, r.TYPES.STRING],
  mediaType: [2, r.TYPES.ENUM, s],
  masterKey: [3, r.TYPES.BYTES],
  caption: [4, r.TYPES.STRING]
};
J.internalSpec = {
  mimetype: [2, r.TYPES.STRING],
  fileSha256: [3, r.TYPES.BYTES],
  mediaKey: [5, r.TYPES.BYTES],
  fileEncSha256: [6, r.TYPES.BYTES],
  directPath: [7, r.TYPES.STRING],
  mediaKeyTimestamp: [8, r.TYPES.INT64],
  contextInfo: [9, r.TYPES.MESSAGE, qt],
  participants: [10, r.FLAGS.REPEATED | r.TYPES.STRING]
};
Q.internalSpec = {
  isVideo: [1, r.TYPES.BOOL],
  callOutcome: [2, r.TYPES.ENUM, l],
  durationSecs: [3, r.TYPES.INT64],
  callType: [4, r.TYPES.ENUM, u],
  participants: [5, r.FLAGS.REPEATED | r.TYPES.MESSAGE, X]
};
X.internalSpec = {
  jid: [1, r.TYPES.STRING],
  callOutcome: [2, r.TYPES.ENUM, l]
};
Z.internalSpec = {
  key: [1, r.TYPES.MESSAGE, i.MessageKeySpec],
  editType: [2, r.TYPES.ENUM, c]
};
ee.internalSpec = {
  scheduledTimestampMs: [1, r.TYPES.INT64],
  callType: [2, r.TYPES.ENUM, d],
  title: [3, r.TYPES.STRING]
};
te.internalSpec = {
  response: [1, r.TYPES.ENUM, p],
  timestampMs: [2, r.TYPES.INT64]
};
ne.internalSpec = {
  eventCreationMessageKey: [1, r.TYPES.MESSAGE, i.MessageKeySpec],
  encPayload: [2, r.TYPES.BYTES],
  encIv: [3, r.TYPES.BYTES]
};
re.internalSpec = {
  contextInfo: [1, r.TYPES.MESSAGE, qt],
  isCanceled: [2, r.TYPES.BOOL],
  name: [3, r.TYPES.STRING],
  description: [4, r.TYPES.STRING],
  location: [5, r.TYPES.MESSAGE, Wt],
  joinLink: [6, r.TYPES.STRING],
  startTime: [7, r.TYPES.INT64]
};
ie.internalSpec = {
  message: [1, r.TYPES.MESSAGE, z],
  targetMessageKey: [2, r.TYPES.MESSAGE, i.MessageKeySpec]
};
ae.internalSpec = {
  targetMessageKey: [1, r.TYPES.MESSAGE, i.MessageKeySpec],
  encPayload: [2, r.TYPES.BYTES],
  encIv: [3, r.TYPES.BYTES]
};
oe.internalSpec = {
  targetMessageKey: [1, r.TYPES.MESSAGE, i.MessageKeySpec],
  encPayload: [2, r.TYPES.BYTES],
  encIv: [3, r.TYPES.BYTES]
};
se.internalSpec = {
  key: [1, r.TYPES.MESSAGE, i.MessageKeySpec],
  type: [2, r.TYPES.ENUM, f],
  senderTimestampMs: [3, r.TYPES.INT64]
};
le.internalSpec = {
  key: [1, r.TYPES.MESSAGE, i.MessageKeySpec],
  keepType: [2, r.TYPES.ENUM, $],
  timestampMs: [3, r.TYPES.INT64]
};
ue.internalSpec = {
  selectedOptions: [1, r.FLAGS.REPEATED | r.TYPES.BYTES]
};
ce.internalSpec = {
  encPayload: [1, r.TYPES.BYTES],
  encIv: [2, r.TYPES.BYTES]
};
de.internalSpec = {};
pe.internalSpec = {
  pollCreationMessageKey: [1, r.TYPES.MESSAGE, i.MessageKeySpec],
  vote: [2, r.TYPES.MESSAGE, ce],
  metadata: [3, r.TYPES.MESSAGE, de],
  senderTimestampMs: [4, r.TYPES.INT64]
};
fe.internalSpec = {
  encKey: [1, r.TYPES.BYTES],
  name: [2, r.TYPES.STRING],
  options: [3, r.FLAGS.REPEATED | r.TYPES.MESSAGE, _e],
  selectableOptionsCount: [4, r.TYPES.UINT32],
  contextInfo: [5, r.TYPES.MESSAGE, qt]
};
_e.internalSpec = {
  optionName: [1, r.TYPES.STRING]
};
ge.internalSpec = {
  filehash: [1, r.FLAGS.REPEATED | r.TYPES.STRING],
  rmrSource: [2, r.TYPES.STRING],
  requestTimestamp: [3, r.TYPES.INT64]
};
me.internalSpec = {
  key: [1, r.TYPES.MESSAGE, i.MessageKeySpec],
  text: [2, r.TYPES.STRING],
  groupingKey: [3, r.TYPES.STRING],
  senderTimestampMs: [4, r.TYPES.INT64]
};
he.internalSpec = {
  selectedButtonId: [1, r.TYPES.STRING],
  selectedDisplayText: [2, r.TYPES.STRING],
  contextInfo: [3, r.TYPES.MESSAGE, qt],
  type: [4, r.TYPES.ENUM, _],
  __oneofs__: {
    response: ["selectedDisplayText"]
  }
};
ye.internalSpec = {
  text: [1, r.TYPES.STRING],
  documentMessage: [2, r.TYPES.MESSAGE, Yt],
  imageMessage: [3, r.TYPES.MESSAGE, $t],
  videoMessage: [4, r.TYPES.MESSAGE, Ft],
  locationMessage: [5, r.TYPES.MESSAGE, Wt],
  contentText: [6, r.TYPES.STRING],
  footerText: [7, r.TYPES.STRING],
  contextInfo: [8, r.TYPES.MESSAGE, qt],
  buttons: [9, r.FLAGS.REPEATED | r.TYPES.MESSAGE, Ee],
  headerType: [10, r.TYPES.ENUM, m],
  __oneofs__: {
    header: ["text", "documentMessage", "imageMessage", "videoMessage", "locationMessage"]
  }
};
Ee.internalSpec = {
  buttonId: [1, r.TYPES.STRING],
  buttonText: [2, r.TYPES.MESSAGE, ve],
  type: [3, r.TYPES.ENUM, g],
  nativeFlowInfo: [4, r.TYPES.MESSAGE, Se]
};
Se.internalSpec = {
  name: [1, r.TYPES.STRING],
  paramsJson: [2, r.TYPES.STRING]
};
ve.internalSpec = {
  displayText: [1, r.TYPES.STRING]
};
Te.internalSpec = {
  message: [1, r.TYPES.MESSAGE, z]
};
Me.internalSpec = {
  destinationJid: [1, r.TYPES.STRING],
  message: [2, r.TYPES.MESSAGE, z],
  phash: [3, r.TYPES.STRING]
};
Ae.internalSpec = {
  contextInfo: [1, r.TYPES.MESSAGE, qt]
};
be.internalSpec = {
  newsletterJid: [1, r.TYPES.STRING],
  newsletterName: [2, r.TYPES.STRING],
  jpegThumbnail: [3, r.TYPES.BYTES],
  caption: [4, r.TYPES.STRING],
  inviteExpiration: [5, r.TYPES.INT64]
};
Ce.internalSpec = {
  groupJid: [1, r.TYPES.STRING],
  inviteCode: [2, r.TYPES.STRING],
  inviteExpiration: [3, r.TYPES.INT64],
  groupName: [4, r.TYPES.STRING],
  jpegThumbnail: [5, r.TYPES.BYTES],
  caption: [6, r.TYPES.STRING],
  contextInfo: [7, r.TYPES.MESSAGE, qt],
  groupType: [8, r.TYPES.ENUM, h]
};
Pe.internalSpec = {
  body: [1, r.TYPES.MESSAGE, Ie],
  nativeFlowResponseMessage: [2, r.TYPES.MESSAGE, Oe],
  contextInfo: [15, r.TYPES.MESSAGE, qt],
  __oneofs__: {
    interactiveResponseMessage: ["nativeFlowResponseMessage"]
  }
};
Oe.internalDefaults = {
  version: 1
};
Oe.internalSpec = {
  name: [1, r.TYPES.STRING],
  paramsJson: [2, r.TYPES.STRING],
  version: [3, r.TYPES.INT32]
};
Ie.internalDefaults = {
  format: y.DEFAULT
};
Ie.internalSpec = {
  text: [1, r.TYPES.STRING],
  format: [2, r.TYPES.ENUM, y]
};
Re.internalSpec = {
  header: [1, r.TYPES.MESSAGE, xe],
  body: [2, r.TYPES.MESSAGE, Ue],
  footer: [3, r.TYPES.MESSAGE, Ge],
  shopStorefrontMessage: [4, r.TYPES.MESSAGE, ke],
  collectionMessage: [5, r.TYPES.MESSAGE, Le],
  nativeFlowMessage: [6, r.TYPES.MESSAGE, De],
  carouselMessage: [7, r.TYPES.MESSAGE, Ne],
  contextInfo: [15, r.TYPES.MESSAGE, qt],
  __oneofs__: {
    interactiveMessage: ["shopStorefrontMessage", "collectionMessage", "nativeFlowMessage", "carouselMessage"]
  }
};
Ne.internalDefaults = {
  messageVersion: 1
};
Ne.internalSpec = {
  cards: [1, r.FLAGS.REPEATED | r.TYPES.MESSAGE, Re],
  messageVersion: [2, r.TYPES.INT32]
};
De.internalDefaults = {
  messageVersion: 1
};
De.internalSpec = {
  buttons: [1, r.FLAGS.REPEATED | r.TYPES.MESSAGE, we],
  messageParamsJson: [2, r.TYPES.STRING],
  messageVersion: [3, r.TYPES.INT32]
};
we.internalSpec = {
  name: [1, r.TYPES.STRING],
  buttonParamsJson: [2, r.TYPES.STRING]
};
Le.internalDefaults = {
  messageVersion: 1
};
Le.internalSpec = {
  bizJid: [1, r.TYPES.STRING],
  id: [2, r.TYPES.STRING],
  messageVersion: [3, r.TYPES.INT32]
};
ke.internalDefaults = {
  messageVersion: 1
};
ke.internalSpec = {
  id: [1, r.TYPES.STRING],
  surface: [2, r.TYPES.ENUM, E],
  messageVersion: [3, r.TYPES.INT32]
};
Ge.internalSpec = {
  text: [1, r.TYPES.STRING]
};
Ue.internalSpec = {
  text: [1, r.TYPES.STRING]
};
xe.internalSpec = {
  title: [1, r.TYPES.STRING],
  subtitle: [2, r.TYPES.STRING],
  documentMessage: [3, r.TYPES.MESSAGE, Yt],
  imageMessage: [4, r.TYPES.MESSAGE, $t],
  jpegThumbnail: [6, r.TYPES.BYTES],
  videoMessage: [7, r.TYPES.MESSAGE, Ft],
  locationMessage: [8, r.TYPES.MESSAGE, Wt],
  hasMediaAttachment: [5, r.TYPES.BOOL],
  __oneofs__: {
    media: ["documentMessage", "imageMessage", "jpegThumbnail", "videoMessage", "locationMessage"]
  }
};
Be.internalSpec = {
  title: [1, r.TYPES.STRING],
  listType: [2, r.TYPES.ENUM, S],
  singleSelectReply: [3, r.TYPES.MESSAGE, Fe],
  contextInfo: [4, r.TYPES.MESSAGE, qt],
  description: [5, r.TYPES.STRING]
};
Fe.internalSpec = {
  selectedRowId: [1, r.TYPES.STRING]
};
je.internalSpec = {
  title: [1, r.TYPES.STRING],
  description: [2, r.TYPES.STRING],
  buttonText: [3, r.TYPES.STRING],
  listType: [4, r.TYPES.ENUM, v],
  sections: [5, r.FLAGS.REPEATED | r.TYPES.MESSAGE, He],
  productListInfo: [6, r.TYPES.MESSAGE, Ye],
  footerText: [7, r.TYPES.STRING],
  contextInfo: [8, r.TYPES.MESSAGE, qt]
};
Ye.internalSpec = {
  productSections: [1, r.FLAGS.REPEATED | r.TYPES.MESSAGE, We],
  headerImage: [2, r.TYPES.MESSAGE, Ke],
  businessOwnerJid: [3, r.TYPES.STRING]
};
Ke.internalSpec = {
  productId: [1, r.TYPES.STRING],
  jpegThumbnail: [2, r.TYPES.BYTES]
};
We.internalSpec = {
  title: [1, r.TYPES.STRING],
  products: [2, r.FLAGS.REPEATED | r.TYPES.MESSAGE, Ve]
};
Ve.internalSpec = {
  productId: [1, r.TYPES.STRING]
};
He.internalSpec = {
  title: [1, r.TYPES.STRING],
  rows: [2, r.FLAGS.REPEATED | r.TYPES.MESSAGE, $e]
};
$e.internalSpec = {
  title: [1, r.TYPES.STRING],
  description: [2, r.TYPES.STRING],
  rowId: [3, r.TYPES.STRING]
};
ze.internalDefaults = {
  messageVersion: 1
};
ze.internalSpec = {
  orderId: [1, r.TYPES.STRING],
  thumbnail: [2, r.TYPES.BYTES],
  itemCount: [3, r.TYPES.INT32],
  status: [4, r.TYPES.ENUM, M],
  surface: [5, r.TYPES.ENUM, T],
  message: [6, r.TYPES.STRING],
  orderTitle: [7, r.TYPES.STRING],
  sellerJid: [8, r.TYPES.STRING],
  token: [9, r.TYPES.STRING],
  totalAmount1000: [10, r.TYPES.INT64],
  totalCurrencyCode: [11, r.TYPES.STRING],
  contextInfo: [17, r.TYPES.MESSAGE, qt],
  messageVersion: [12, r.TYPES.INT32],
  orderRequestMessageId: [13, r.TYPES.MESSAGE, i.MessageKeySpec]
};
qe.internalSpec = {
  product: [1, r.TYPES.MESSAGE, Je],
  businessOwnerJid: [2, r.TYPES.STRING],
  catalog: [4, r.TYPES.MESSAGE, Qe],
  body: [5, r.TYPES.STRING],
  footer: [6, r.TYPES.STRING],
  contextInfo: [17, r.TYPES.MESSAGE, qt]
};
Je.internalSpec = {
  productImage: [1, r.TYPES.MESSAGE, $t],
  productId: [2, r.TYPES.STRING],
  title: [3, r.TYPES.STRING],
  description: [4, r.TYPES.STRING],
  currencyCode: [5, r.TYPES.STRING],
  priceAmount1000: [6, r.TYPES.INT64],
  retailerId: [7, r.TYPES.STRING],
  url: [8, r.TYPES.STRING],
  productImageCount: [9, r.TYPES.UINT32],
  firstImageId: [11, r.TYPES.STRING],
  salePriceAmount1000: [12, r.TYPES.INT64]
};
Qe.internalSpec = {
  catalogImage: [1, r.TYPES.MESSAGE, $t],
  title: [2, r.TYPES.STRING],
  description: [3, r.TYPES.STRING]
};
Xe.internalSpec = {
  selectedId: [1, r.TYPES.STRING],
  selectedDisplayText: [2, r.TYPES.STRING],
  contextInfo: [3, r.TYPES.MESSAGE, qt],
  selectedIndex: [4, r.TYPES.UINT32]
};
Ze.internalSpec = {
  fourRowTemplate: [1, r.TYPES.MESSAGE, tt],
  hydratedFourRowTemplate: [2, r.TYPES.MESSAGE, et],
  interactiveMessageTemplate: [5, r.TYPES.MESSAGE, Re],
  contextInfo: [3, r.TYPES.MESSAGE, qt],
  hydratedTemplate: [4, r.TYPES.MESSAGE, et],
  templateId: [9, r.TYPES.STRING],
  __oneofs__: {
    format: ["fourRowTemplate", "hydratedFourRowTemplate", "interactiveMessageTemplate"]
  }
};
et.internalSpec = {
  documentMessage: [1, r.TYPES.MESSAGE, Yt],
  hydratedTitleText: [2, r.TYPES.STRING],
  imageMessage: [3, r.TYPES.MESSAGE, $t],
  videoMessage: [4, r.TYPES.MESSAGE, Ft],
  locationMessage: [5, r.TYPES.MESSAGE, Wt],
  hydratedContentText: [6, r.TYPES.STRING],
  hydratedFooterText: [7, r.TYPES.STRING],
  hydratedButtons: [8, r.FLAGS.REPEATED | r.TYPES.MESSAGE, gn],
  templateId: [9, r.TYPES.STRING],
  __oneofs__: {
    title: ["documentMessage", "hydratedTitleText", "imageMessage", "videoMessage", "locationMessage"]
  }
};
tt.internalSpec = {
  documentMessage: [1, r.TYPES.MESSAGE, Yt],
  highlyStructuredMessage: [2, r.TYPES.MESSAGE, ut],
  imageMessage: [3, r.TYPES.MESSAGE, $t],
  videoMessage: [4, r.TYPES.MESSAGE, Ft],
  locationMessage: [5, r.TYPES.MESSAGE, Wt],
  content: [6, r.TYPES.MESSAGE, ut],
  footer: [7, r.TYPES.MESSAGE, ut],
  buttons: [8, r.FLAGS.REPEATED | r.TYPES.MESSAGE, dn],
  __oneofs__: {
    title: ["documentMessage", "highlyStructuredMessage", "imageMessage", "videoMessage", "locationMessage"]
  }
};
nt.internalSpec = {
  url: [1, r.TYPES.STRING],
  fileSha256: [2, r.TYPES.BYTES],
  fileEncSha256: [3, r.TYPES.BYTES],
  mediaKey: [4, r.TYPES.BYTES],
  mimetype: [5, r.TYPES.STRING],
  height: [6, r.TYPES.UINT32],
  width: [7, r.TYPES.UINT32],
  directPath: [8, r.TYPES.STRING],
  fileLength: [9, r.TYPES.UINT64],
  mediaKeyTimestamp: [10, r.TYPES.INT64],
  firstFrameLength: [11, r.TYPES.UINT32],
  firstFrameSidecar: [12, r.TYPES.BYTES],
  isAnimated: [13, r.TYPES.BOOL],
  pngThumbnail: [16, r.TYPES.BYTES],
  contextInfo: [17, r.TYPES.MESSAGE, qt],
  stickerSentTs: [18, r.TYPES.INT64],
  isAvatar: [19, r.TYPES.BOOL],
  isAiSticker: [20, r.TYPES.BOOL],
  isLottie: [21, r.TYPES.BOOL]
};
rt.internalSpec = {
  degreesLatitude: [1, r.TYPES.DOUBLE],
  degreesLongitude: [2, r.TYPES.DOUBLE],
  accuracyInMeters: [3, r.TYPES.UINT32],
  speedInMps: [4, r.TYPES.FLOAT],
  degreesClockwiseFromMagneticNorth: [5, r.TYPES.UINT32],
  caption: [6, r.TYPES.STRING],
  sequenceNumber: [7, r.TYPES.INT64],
  timeOffset: [8, r.TYPES.UINT32],
  jpegThumbnail: [16, r.TYPES.BYTES],
  contextInfo: [17, r.TYPES.MESSAGE, qt]
};
it.internalSpec = {
  serviceType: [1, r.TYPES.ENUM, A],
  expiryTimestamp: [2, r.TYPES.INT64]
};
at.internalSpec = {
  key: [1, r.TYPES.MESSAGE, i.MessageKeySpec]
};
ot.internalSpec = {
  key: [1, r.TYPES.MESSAGE, i.MessageKeySpec]
};
st.internalSpec = {
  noteMessage: [4, r.TYPES.MESSAGE, z],
  currencyCodeIso4217: [1, r.TYPES.STRING],
  amount1000: [2, r.TYPES.UINT64],
  requestFrom: [3, r.TYPES.STRING],
  expiryTimestamp: [5, r.TYPES.INT64],
  amount: [6, r.TYPES.MESSAGE, En],
  background: [7, r.TYPES.MESSAGE, Sn]
};
lt.internalSpec = {
  noteMessage: [2, r.TYPES.MESSAGE, z],
  requestMessageKey: [3, r.TYPES.MESSAGE, i.MessageKeySpec],
  background: [4, r.TYPES.MESSAGE, Sn]
};
ut.internalSpec = {
  namespace: [1, r.TYPES.STRING],
  elementName: [2, r.TYPES.STRING],
  params: [3, r.FLAGS.REPEATED | r.TYPES.STRING],
  fallbackLg: [4, r.TYPES.STRING],
  fallbackLc: [5, r.TYPES.STRING],
  localizableParams: [6, r.FLAGS.REPEATED | r.TYPES.MESSAGE, ct],
  deterministicLg: [7, r.TYPES.STRING],
  deterministicLc: [8, r.TYPES.STRING],
  hydratedHsm: [9, r.TYPES.MESSAGE, Ze]
};
ct.internalSpec = {
  default: [1, r.TYPES.STRING],
  currency: [2, r.TYPES.MESSAGE, _t],
  dateTime: [3, r.TYPES.MESSAGE, dt],
  __oneofs__: {
    paramOneof: ["currency", "dateTime"]
  }
};
dt.internalSpec = {
  component: [1, r.TYPES.MESSAGE, ft],
  unixEpoch: [2, r.TYPES.MESSAGE, pt],
  __oneofs__: {
    datetimeOneof: ["component", "unixEpoch"]
  }
};
pt.internalSpec = {
  timestamp: [1, r.TYPES.INT64]
};
ft.internalSpec = {
  dayOfWeek: [1, r.TYPES.ENUM, C],
  year: [2, r.TYPES.UINT32],
  month: [3, r.TYPES.UINT32],
  dayOfMonth: [4, r.TYPES.UINT32],
  hour: [5, r.TYPES.UINT32],
  minute: [6, r.TYPES.UINT32],
  calendar: [7, r.TYPES.ENUM, b]
};
_t.internalSpec = {
  currencyCode: [1, r.TYPES.STRING],
  amount1000: [2, r.TYPES.INT64]
};
gt.internalSpec = {
  displayName: [1, r.TYPES.STRING],
  contacts: [2, r.FLAGS.REPEATED | r.TYPES.MESSAGE, Vt],
  contextInfo: [17, r.TYPES.MESSAGE, qt]
};
mt.internalSpec = {
  securityNotificationEnabled: [1, r.TYPES.BOOL]
};
ht.internalSpec = {
  peerDataOperationRequestType: [1, r.TYPES.ENUM, P],
  stanzaId: [2, r.TYPES.STRING],
  peerDataOperationResult: [3, r.FLAGS.REPEATED | r.TYPES.MESSAGE, yt]
};
yt.internalSpec = {
  mediaUploadResult: [1, r.TYPES.ENUM, a.MediaRetryNotification$ResultType],
  stickerMessage: [2, r.TYPES.MESSAGE, nt],
  linkPreviewResponse: [3, r.TYPES.MESSAGE, St],
  placeholderMessageResendResponse: [4, r.TYPES.MESSAGE, Et]
};
Et.internalSpec = {
  webMessageInfoBytes: [1, r.TYPES.BYTES]
};
St.internalSpec = {
  url: [1, r.TYPES.STRING],
  title: [2, r.TYPES.STRING],
  description: [3, r.TYPES.STRING],
  thumbData: [4, r.TYPES.BYTES],
  canonicalUrl: [5, r.TYPES.STRING],
  matchText: [6, r.TYPES.STRING],
  previewType: [7, r.TYPES.STRING],
  hqThumbnail: [8, r.TYPES.MESSAGE, vt]
};
vt.internalSpec = {
  directPath: [1, r.TYPES.STRING],
  thumbHash: [2, r.TYPES.STRING],
  encThumbHash: [3, r.TYPES.STRING],
  mediaKey: [4, r.TYPES.BYTES],
  mediaKeyTimestampMs: [5, r.TYPES.INT64],
  thumbWidth: [6, r.TYPES.INT32],
  thumbHeight: [7, r.TYPES.INT32]
};
Tt.internalSpec = {
  peerDataOperationRequestType: [1, r.TYPES.ENUM, P],
  requestStickerReupload: [2, r.FLAGS.REPEATED | r.TYPES.MESSAGE, Ct],
  requestUrlPreview: [3, r.FLAGS.REPEATED | r.TYPES.MESSAGE, bt],
  historySyncOnDemandRequest: [4, r.TYPES.MESSAGE, At],
  placeholderMessageResendRequest: [5, r.FLAGS.REPEATED | r.TYPES.MESSAGE, Mt]
};
Mt.internalSpec = {
  messageKey: [1, r.TYPES.MESSAGE, i.MessageKeySpec]
};
At.internalSpec = {
  chatJid: [1, r.TYPES.STRING],
  oldestMsgId: [2, r.TYPES.STRING],
  oldestMsgFromMe: [3, r.TYPES.BOOL],
  onDemandMsgCount: [4, r.TYPES.INT32],
  oldestMsgTimestampMs: [5, r.TYPES.INT64]
};
bt.internalSpec = {
  url: [1, r.TYPES.STRING],
  includeHqThumbnail: [2, r.TYPES.BOOL]
};
Ct.internalSpec = {
  fileSha256: [1, r.TYPES.STRING]
};
Pt.internalSpec = {
  collectionNames: [1, r.FLAGS.REPEATED | r.TYPES.STRING],
  timestamp: [2, r.TYPES.INT64]
};
Ot.internalSpec = {
  keyIds: [1, r.FLAGS.REPEATED | r.TYPES.MESSAGE, Dt]
};
It.internalSpec = {
  keys: [1, r.FLAGS.REPEATED | r.TYPES.MESSAGE, wt]
};
Rt.internalSpec = {
  keyData: [1, r.TYPES.BYTES],
  fingerprint: [2, r.TYPES.MESSAGE, Nt],
  timestamp: [3, r.TYPES.INT64]
};
Nt.internalSpec = {
  rawId: [1, r.TYPES.UINT32],
  currentIndex: [2, r.TYPES.UINT32],
  deviceIndexes: [3, r.FLAGS.REPEATED | r.FLAGS.PACKED | r.TYPES.UINT32]
};
Dt.internalSpec = {
  keyId: [1, r.TYPES.BYTES]
};
wt.internalSpec = {
  keyId: [1, r.TYPES.MESSAGE, Dt],
  keyData: [2, r.TYPES.MESSAGE, Rt]
};
Lt.internalSpec = {
  fileSha256: [1, r.TYPES.BYTES],
  fileLength: [2, r.TYPES.UINT64],
  mediaKey: [3, r.TYPES.BYTES],
  fileEncSha256: [4, r.TYPES.BYTES],
  directPath: [5, r.TYPES.STRING],
  syncType: [6, r.TYPES.ENUM, O],
  chunkOrder: [7, r.TYPES.UINT32],
  originalMessageId: [8, r.TYPES.STRING],
  progress: [9, r.TYPES.UINT32],
  oldestMsgInChunkTimestampSec: [10, r.TYPES.INT64],
  initialHistBootstrapInlinePayload: [11, r.TYPES.BYTES],
  peerDataRequestSessionId: [12, r.TYPES.STRING]
};
kt.internalSpec = {
  localChatState: [1, r.TYPES.ENUM, I]
};
Gt.internalSpec = {
  key: [1, r.TYPES.MESSAGE, i.MessageKeySpec],
  type: [2, r.TYPES.ENUM, R],
  ephemeralExpiration: [4, r.TYPES.UINT32],
  ephemeralSettingTimestamp: [5, r.TYPES.INT64],
  historySyncNotification: [6, r.TYPES.MESSAGE, Lt],
  appStateSyncKeyShare: [7, r.TYPES.MESSAGE, It],
  appStateSyncKeyRequest: [8, r.TYPES.MESSAGE, Ot],
  initialSecurityNotificationSettingSync: [9, r.TYPES.MESSAGE, mt],
  appStateFatalExceptionNotification: [10, r.TYPES.MESSAGE, Pt],
  disappearingMode: [11, r.TYPES.MESSAGE, Tn],
  editedMessage: [14, r.TYPES.MESSAGE, z],
  timestampMs: [15, r.TYPES.INT64],
  peerDataOperationRequestMessage: [16, r.TYPES.MESSAGE, Tt],
  peerDataOperationRequestResponseMessage: [17, r.TYPES.MESSAGE, ht],
  botFeedbackMessage: [18, r.TYPES.MESSAGE, Ut],
  invokerJid: [19, r.TYPES.STRING],
  requestWelcomeMessageMetadata: [20, r.TYPES.MESSAGE, kt]
};
Ut.internalSpec = {
  messageKey: [1, r.TYPES.MESSAGE, i.MessageKeySpec],
  kind: [2, r.TYPES.ENUM, w],
  text: [3, r.TYPES.STRING],
  kindNegative: [4, r.TYPES.UINT64],
  kindPositive: [5, r.TYPES.UINT64]
};
xt.internalSpec = {
  displayName: [1, r.TYPES.STRING],
  id: [2, r.TYPES.STRING]
};
Bt.internalSpec = {
  callKey: [1, r.TYPES.BYTES],
  conversionSource: [2, r.TYPES.STRING],
  conversionData: [3, r.TYPES.BYTES],
  conversionDelaySeconds: [4, r.TYPES.UINT32]
};
Ft.internalSpec = {
  url: [1, r.TYPES.STRING],
  mimetype: [2, r.TYPES.STRING],
  fileSha256: [3, r.TYPES.BYTES],
  fileLength: [4, r.TYPES.UINT64],
  seconds: [5, r.TYPES.UINT32],
  mediaKey: [6, r.TYPES.BYTES],
  caption: [7, r.TYPES.STRING],
  gifPlayback: [8, r.TYPES.BOOL],
  height: [9, r.TYPES.UINT32],
  width: [10, r.TYPES.UINT32],
  fileEncSha256: [11, r.TYPES.BYTES],
  interactiveAnnotations: [12, r.FLAGS.REPEATED | r.TYPES.MESSAGE, ln],
  directPath: [13, r.TYPES.STRING],
  mediaKeyTimestamp: [14, r.TYPES.INT64],
  jpegThumbnail: [16, r.TYPES.BYTES],
  contextInfo: [17, r.TYPES.MESSAGE, qt],
  streamingSidecar: [18, r.TYPES.BYTES],
  gifAttribution: [19, r.TYPES.ENUM, L],
  viewOnce: [20, r.TYPES.BOOL],
  thumbnailDirectPath: [21, r.TYPES.STRING],
  thumbnailSha256: [22, r.TYPES.BYTES],
  thumbnailEncSha256: [23, r.TYPES.BYTES],
  staticUrl: [24, r.TYPES.STRING]
};
jt.internalSpec = {
  url: [1, r.TYPES.STRING],
  mimetype: [2, r.TYPES.STRING],
  fileSha256: [3, r.TYPES.BYTES],
  fileLength: [4, r.TYPES.UINT64],
  seconds: [5, r.TYPES.UINT32],
  ptt: [6, r.TYPES.BOOL],
  mediaKey: [7, r.TYPES.BYTES],
  fileEncSha256: [8, r.TYPES.BYTES],
  directPath: [9, r.TYPES.STRING],
  mediaKeyTimestamp: [10, r.TYPES.INT64],
  contextInfo: [17, r.TYPES.MESSAGE, qt],
  streamingSidecar: [18, r.TYPES.BYTES],
  waveform: [19, r.TYPES.BYTES],
  backgroundArgb: [20, r.TYPES.FIXED32],
  viewOnce: [21, r.TYPES.BOOL]
};
Yt.internalSpec = {
  url: [1, r.TYPES.STRING],
  mimetype: [2, r.TYPES.STRING],
  title: [3, r.TYPES.STRING],
  fileSha256: [4, r.TYPES.BYTES],
  fileLength: [5, r.TYPES.UINT64],
  pageCount: [6, r.TYPES.UINT32],
  mediaKey: [7, r.TYPES.BYTES],
  fileName: [8, r.TYPES.STRING],
  fileEncSha256: [9, r.TYPES.BYTES],
  directPath: [10, r.TYPES.STRING],
  mediaKeyTimestamp: [11, r.TYPES.INT64],
  contactVcard: [12, r.TYPES.BOOL],
  thumbnailDirectPath: [13, r.TYPES.STRING],
  thumbnailSha256: [14, r.TYPES.BYTES],
  thumbnailEncSha256: [15, r.TYPES.BYTES],
  jpegThumbnail: [16, r.TYPES.BYTES],
  contextInfo: [17, r.TYPES.MESSAGE, qt],
  thumbnailHeight: [18, r.TYPES.UINT32],
  thumbnailWidth: [19, r.TYPES.UINT32],
  caption: [20, r.TYPES.STRING]
};
Kt.internalSpec = {
  text: [1, r.TYPES.STRING],
  matchedText: [2, r.TYPES.STRING],
  canonicalUrl: [4, r.TYPES.STRING],
  description: [5, r.TYPES.STRING],
  title: [6, r.TYPES.STRING],
  textArgb: [7, r.TYPES.FIXED32],
  backgroundArgb: [8, r.TYPES.FIXED32],
  font: [9, r.TYPES.ENUM, U],
  previewType: [10, r.TYPES.ENUM, G],
  jpegThumbnail: [16, r.TYPES.BYTES],
  contextInfo: [17, r.TYPES.MESSAGE, qt],
  doNotPlayInline: [18, r.TYPES.BOOL],
  thumbnailDirectPath: [19, r.TYPES.STRING],
  thumbnailSha256: [20, r.TYPES.BYTES],
  thumbnailEncSha256: [21, r.TYPES.BYTES],
  mediaKey: [22, r.TYPES.BYTES],
  mediaKeyTimestamp: [23, r.TYPES.INT64],
  thumbnailHeight: [24, r.TYPES.UINT32],
  thumbnailWidth: [25, r.TYPES.UINT32],
  inviteLinkGroupType: [26, r.TYPES.ENUM, k],
  inviteLinkParentGroupSubjectV2: [27, r.TYPES.STRING],
  inviteLinkParentGroupThumbnailV2: [28, r.TYPES.BYTES],
  inviteLinkGroupTypeV2: [29, r.TYPES.ENUM, k],
  viewOnce: [30, r.TYPES.BOOL]
};
Wt.internalSpec = {
  degreesLatitude: [1, r.TYPES.DOUBLE],
  degreesLongitude: [2, r.TYPES.DOUBLE],
  name: [3, r.TYPES.STRING],
  address: [4, r.TYPES.STRING],
  url: [5, r.TYPES.STRING],
  isLive: [6, r.TYPES.BOOL],
  accuracyInMeters: [7, r.TYPES.UINT32],
  speedInMps: [8, r.TYPES.FLOAT],
  degreesClockwiseFromMagneticNorth: [9, r.TYPES.UINT32],
  comment: [11, r.TYPES.STRING],
  jpegThumbnail: [16, r.TYPES.BYTES],
  contextInfo: [17, r.TYPES.MESSAGE, qt]
};
Vt.internalSpec = {
  displayName: [1, r.TYPES.STRING],
  vcard: [16, r.TYPES.STRING],
  contextInfo: [17, r.TYPES.MESSAGE, qt]
};
Ht.internalSpec = {
  note: [1, r.TYPES.STRING],
  token: [2, r.TYPES.STRING],
  attachmentType: [3, r.TYPES.ENUM, x],
  attachmentMimetype: [4, r.TYPES.STRING],
  attachmentMediaKey: [5, r.TYPES.BYTES],
  attachmentMediaKeyTimestamp: [6, r.TYPES.INT64],
  attachmentFileSha256: [7, r.TYPES.BYTES],
  attachmentFileEncSha256: [8, r.TYPES.BYTES],
  attachmentDirectPath: [9, r.TYPES.STRING],
  attachmentJpegThumbnail: [10, r.TYPES.BYTES]
};
$t.internalSpec = {
  url: [1, r.TYPES.STRING],
  mimetype: [2, r.TYPES.STRING],
  caption: [3, r.TYPES.STRING],
  fileSha256: [4, r.TYPES.BYTES],
  fileLength: [5, r.TYPES.UINT64],
  height: [6, r.TYPES.UINT32],
  width: [7, r.TYPES.UINT32],
  mediaKey: [8, r.TYPES.BYTES],
  fileEncSha256: [9, r.TYPES.BYTES],
  interactiveAnnotations: [10, r.FLAGS.REPEATED | r.TYPES.MESSAGE, ln],
  directPath: [11, r.TYPES.STRING],
  mediaKeyTimestamp: [12, r.TYPES.INT64],
  jpegThumbnail: [16, r.TYPES.BYTES],
  contextInfo: [17, r.TYPES.MESSAGE, qt],
  firstScanSidecar: [18, r.TYPES.BYTES],
  firstScanLength: [19, r.TYPES.UINT32],
  experimentGroupId: [20, r.TYPES.UINT32],
  scansSidecar: [21, r.TYPES.BYTES],
  scanLengths: [22, r.FLAGS.REPEATED | r.TYPES.UINT32],
  midQualityFileSha256: [23, r.TYPES.BYTES],
  midQualityFileEncSha256: [24, r.TYPES.BYTES],
  viewOnce: [25, r.TYPES.BOOL],
  thumbnailDirectPath: [26, r.TYPES.STRING],
  thumbnailSha256: [27, r.TYPES.BYTES],
  thumbnailEncSha256: [28, r.TYPES.BYTES],
  staticUrl: [29, r.TYPES.STRING]
};
zt.internalSpec = {
  groupId: [1, r.TYPES.STRING],
  axolotlSenderKeyDistributionMessage: [2, r.TYPES.BYTES]
};
qt.internalSpec = {
  stanzaId: [1, r.TYPES.STRING],
  participant: [2, r.TYPES.STRING],
  quotedMessage: [3, r.TYPES.MESSAGE, z],
  remoteJid: [4, r.TYPES.STRING],
  mentionedJid: [15, r.FLAGS.REPEATED | r.TYPES.STRING],
  conversionSource: [18, r.TYPES.STRING],
  conversionData: [19, r.TYPES.BYTES],
  conversionDelaySeconds: [20, r.TYPES.UINT32],
  forwardingScore: [21, r.TYPES.UINT32],
  isForwarded: [22, r.TYPES.BOOL],
  quotedAd: [23, r.TYPES.MESSAGE, en],
  placeholderKey: [24, r.TYPES.MESSAGE, i.MessageKeySpec],
  expiration: [25, r.TYPES.UINT32],
  ephemeralSettingTimestamp: [26, r.TYPES.INT64],
  ephemeralSharedSecret: [27, r.TYPES.BYTES],
  externalAdReply: [28, r.TYPES.MESSAGE, Zt],
  entryPointConversionSource: [29, r.TYPES.STRING],
  entryPointConversionApp: [30, r.TYPES.STRING],
  entryPointConversionDelaySeconds: [31, r.TYPES.UINT32],
  disappearingMode: [32, r.TYPES.MESSAGE, Tn],
  actionLink: [33, r.TYPES.MESSAGE, Mn],
  groupSubject: [34, r.TYPES.STRING],
  parentGroupJid: [35, r.TYPES.STRING],
  trustBannerType: [37, r.TYPES.STRING],
  trustBannerAction: [38, r.TYPES.UINT32],
  isSampled: [39, r.TYPES.BOOL],
  groupMentions: [40, r.FLAGS.REPEATED | r.TYPES.MESSAGE, An],
  utm: [41, r.TYPES.MESSAGE, Xt],
  forwardedNewsletterMessageInfo: [43, r.TYPES.MESSAGE, Qt],
  businessMessageForwardInfo: [44, r.TYPES.MESSAGE, tn],
  smbClientCampaignId: [45, r.TYPES.STRING],
  smbServerCampaignId: [46, r.TYPES.STRING],
  dataSharingContext: [47, r.TYPES.MESSAGE, Jt]
};
Jt.internalSpec = {
  showMmDisclosure: [1, r.TYPES.BOOL]
};
Qt.internalSpec = {
  newsletterJid: [1, r.TYPES.STRING],
  serverMessageId: [2, r.TYPES.INT32],
  newsletterName: [3, r.TYPES.STRING]
};
Xt.internalSpec = {
  utmSource: [1, r.TYPES.STRING],
  utmCampaign: [2, r.TYPES.STRING]
};
Zt.internalSpec = {
  title: [1, r.TYPES.STRING],
  body: [2, r.TYPES.STRING],
  mediaType: [3, r.TYPES.ENUM, B],
  thumbnailUrl: [4, r.TYPES.STRING],
  mediaUrl: [5, r.TYPES.STRING],
  thumbnail: [6, r.TYPES.BYTES],
  sourceType: [7, r.TYPES.STRING],
  sourceId: [8, r.TYPES.STRING],
  sourceUrl: [9, r.TYPES.STRING],
  containsAutoReply: [10, r.TYPES.BOOL],
  renderLargerThumbnail: [11, r.TYPES.BOOL],
  showAdAttribution: [12, r.TYPES.BOOL],
  ctwaClid: [13, r.TYPES.STRING],
  ref: [14, r.TYPES.STRING]
};
en.internalSpec = {
  advertiserName: [1, r.TYPES.STRING],
  mediaType: [2, r.TYPES.ENUM, F],
  jpegThumbnail: [16, r.TYPES.BYTES],
  caption: [17, r.TYPES.STRING]
};
tn.internalSpec = {
  businessOwnerJid: [1, r.TYPES.STRING]
};
nn.internalSpec = {
  sentiment: [1, r.TYPES.UINT32],
  behaviorGraph: [2, r.TYPES.STRING],
  action: [3, r.TYPES.UINT32],
  intensity: [4, r.TYPES.UINT32],
  wordCount: [5, r.TYPES.UINT32]
};
rn.internalSpec = {
  provider: [1, r.TYPES.ENUM, Y],
  pluginType: [2, r.TYPES.ENUM, j],
  thumbnailCdnUrl: [3, r.TYPES.STRING],
  profilePhotoCdnUrl: [4, r.TYPES.STRING],
  searchProviderUrl: [5, r.TYPES.STRING],
  referenceIndex: [6, r.TYPES.UINT32]
};
an.internalSpec = {
  avatarMetadata: [1, r.TYPES.MESSAGE, nn],
  personaId: [2, r.TYPES.STRING],
  pluginMetadata: [3, r.TYPES.MESSAGE, rn]
};
on.internalSpec = {
  deviceListMetadata: [1, r.TYPES.MESSAGE, sn],
  deviceListMetadataVersion: [2, r.TYPES.INT32],
  messageSecret: [3, r.TYPES.BYTES],
  paddingBytes: [4, r.TYPES.BYTES],
  messageAddOnDurationInSecs: [5, r.TYPES.UINT32],
  botMessageSecret: [6, r.TYPES.BYTES],
  botMetadata: [7, r.TYPES.MESSAGE, an]
};
sn.internalDefaults = {
  senderAccountType: o.ADVEncryptionType.E2EE,
  receiverAccountType: o.ADVEncryptionType.E2EE
};
sn.internalSpec = {
  senderKeyHash: [1, r.TYPES.BYTES],
  senderTimestamp: [2, r.TYPES.UINT64],
  senderKeyIndexes: [3, r.FLAGS.REPEATED | r.FLAGS.PACKED | r.TYPES.UINT32],
  senderAccountType: [4, r.TYPES.ENUM, o.ADVEncryptionType],
  receiverAccountType: [5, r.TYPES.ENUM, o.ADVEncryptionType],
  recipientKeyHash: [8, r.TYPES.BYTES],
  recipientTimestamp: [9, r.TYPES.UINT64],
  recipientKeyIndexes: [10, r.FLAGS.REPEATED | r.FLAGS.PACKED | r.TYPES.UINT32]
};
ln.internalSpec = {
  polygonVertices: [1, r.FLAGS.REPEATED | r.TYPES.MESSAGE, un],
  location: [2, r.TYPES.MESSAGE, cn],
  newsletter: [3, r.TYPES.MESSAGE, Qt],
  __oneofs__: {
    action: ["location", "newsletter"]
  }
};
un.internalSpec = {
  xDeprecated: [1, r.TYPES.INT32],
  yDeprecated: [2, r.TYPES.INT32],
  x: [3, r.TYPES.DOUBLE],
  y: [4, r.TYPES.DOUBLE]
};
cn.internalSpec = {
  degreesLatitude: [1, r.TYPES.DOUBLE],
  degreesLongitude: [2, r.TYPES.DOUBLE],
  name: [3, r.TYPES.STRING]
};
dn.internalSpec = {
  quickReplyButton: [1, r.TYPES.MESSAGE, _n],
  urlButton: [2, r.TYPES.MESSAGE, fn],
  callButton: [3, r.TYPES.MESSAGE, pn],
  index: [4, r.TYPES.UINT32],
  __oneofs__: {
    button: ["quickReplyButton", "urlButton", "callButton"]
  }
};
pn.internalSpec = {
  displayText: [1, r.TYPES.MESSAGE, ut],
  phoneNumber: [2, r.TYPES.MESSAGE, ut]
};
fn.internalSpec = {
  displayText: [1, r.TYPES.MESSAGE, ut],
  url: [2, r.TYPES.MESSAGE, ut]
};
_n.internalSpec = {
  displayText: [1, r.TYPES.MESSAGE, ut],
  id: [2, r.TYPES.STRING]
};
gn.internalSpec = {
  quickReplyButton: [1, r.TYPES.MESSAGE, yn],
  urlButton: [2, r.TYPES.MESSAGE, hn],
  callButton: [3, r.TYPES.MESSAGE, mn],
  index: [4, r.TYPES.UINT32],
  __oneofs__: {
    hydratedButton: ["quickReplyButton", "urlButton", "callButton"]
  }
};
mn.internalSpec = {
  displayText: [1, r.TYPES.STRING],
  phoneNumber: [2, r.TYPES.STRING]
};
hn.internalSpec = {
  displayText: [1, r.TYPES.STRING],
  url: [2, r.TYPES.STRING],
  consentedUsersUrl: [3, r.TYPES.STRING],
  webviewPresentation: [4, r.TYPES.ENUM, K]
};
yn.internalSpec = {
  displayText: [1, r.TYPES.STRING],
  id: [2, r.TYPES.STRING]
};
En.internalSpec = {
  value: [1, r.TYPES.INT64],
  offset: [2, r.TYPES.UINT32],
  currencyCode: [3, r.TYPES.STRING]
};
Sn.internalSpec = {
  id: [1, r.TYPES.STRING],
  fileLength: [2, r.TYPES.UINT64],
  width: [3, r.TYPES.UINT32],
  height: [4, r.TYPES.UINT32],
  mimetype: [5, r.TYPES.STRING],
  placeholderArgb: [6, r.TYPES.FIXED32],
  textArgb: [7, r.TYPES.FIXED32],
  subtextArgb: [8, r.TYPES.FIXED32],
  mediaData: [9, r.TYPES.MESSAGE, vn],
  type: [10, r.TYPES.ENUM, W]
};
vn.internalSpec = {
  mediaKey: [1, r.TYPES.BYTES],
  mediaKeyTimestamp: [2, r.TYPES.INT64],
  fileSha256: [3, r.TYPES.BYTES],
  fileEncSha256: [4, r.TYPES.BYTES],
  directPath: [5, r.TYPES.STRING]
};
Tn.internalSpec = {
  initiator: [1, r.TYPES.ENUM, H],
  trigger: [2, r.TYPES.ENUM, V],
  initiatorDeviceJid: [3, r.TYPES.STRING],
  initiatedByMe: [4, r.TYPES.BOOL]
};
Mn.internalSpec = {
  url: [1, r.TYPES.STRING],
  buttonTitle: [2, r.TYPES.STRING]
};
An.internalSpec = {
  groupJid: [1, r.TYPES.STRING],
  groupSubject: [2, r.TYPES.STRING]
};
bn.internalSpec = {
  version: [1, r.TYPES.SFIXED32],
  encIv: [2, r.TYPES.BYTES],
  encPayload: [3, r.TYPES.BYTES]
};