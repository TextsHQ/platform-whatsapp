var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIsInitialE2ENotification = exports.getIsImportantMessage = exports.getIsIAS = exports.getIsGroupsV4InviteExpired = exports.getIsGroupMsg = exports.getIsGif = exports.getIsFutureproof = exports.getIsFromTemplate = exports.getIsFrequentlyForwarded = exports.getIsForwarded = exports.getIsFailed = exports.getIsEphemeral = exports.getIsEdited = exports.getIsEditProtocolMsg = exports.getIsDynamicReplyButtonsMsg = exports.getIsDisappearingModeSystemMessage = exports.getIsCarouselCard = exports.getIsCaptionByUser = exports.getIsCAPISupport = exports.getIsBotSearchResponse = exports.getIsBotResponse = exports.getIsBotQuery = exports.getIsBotPluginCarouselMsg = exports.getIsBotFutureproofPlaceholder = exports.getIsBotFeedbackMessage = exports.getIsBizNotification = exports.getIsBizBot3pResponse = exports.getIsBizBot1pResponse = exports.getIsAvatar = exports.getIsAuthenticationMessage = exports.getIsAckPlayable = exports.getInviteGrpType = exports.getInviteGrpName = exports.getInviteGrpJpegThum = exports.getInviteGrp = exports.getInviteCodeExp = exports.getInviteCode = exports.getInvis = exports.getInteractiveType = exports.getInteractiveHeader = exports.getInteractiveAnnotations = exports.getInitialPageSize = exports.getId = exports.getHsmTag = exports.getHeaderType = exports.getHasReaction = exports.getHasOriginatedFromNewsletter = exports.getHasMentionOfMe = exports.getGroupMentions = exports.getGifAttribution = exports.getFutureproofType = exports.getFutureproofSubtype = exports.getFrom = exports.getForwardingScore = exports.getForwardedNewsletterMessageInfo = exports.getFooter = exports.getFinalLng = exports.getFinalLat = exports.getFilename = exports.getFilehash = exports.getErrorCode = exports.getEphemeralSettingUser = exports.getEphemeralOutOfSync = exports.getEphemeralExpirationTimestamp = exports.getEphemeralDuration = exports.getDynamicReplyButtons = exports.getDoNotPlayInline = exports.getDisappearingModeTrigger = exports.getDisappearingModeInitiator = exports.getDisappearingModeInitiatedByMe = exports.getDescription = exports.getDeprecatedMms3Url = exports.getCurrencyCode = exports.getCtwaContext = exports.getComment = exports.getClientUrl = exports.getCaption = exports.getCanonicalUrl = exports.getCampaignId = exports.getBusinessOwnerJid = exports.getBroadcastId = exports.getBroadcast = exports.getBotTargetSenderJid = exports.getBotResponseTargetId = exports.getBotRespOrInvocationRevokeBotWid = exports.getBotPluginType = exports.getBotPluginSearchUrl = exports.getBotPluginSearchProvider = exports.getBotPluginReferenceIndex = exports.getBotEditType = exports.getBody = exports.getBizSource = exports.getBizPrivacyStatus = exports.getBizBotType = exports.getBackgroundColor = exports.getAuthor = exports.getAgendId = exports.getActiveBotMsgStreamingInProgress = exports.getAck = exports.clearMsgGetterCacheFor = undefined;
exports.getThumbnail = exports.getTemplateParams = exports.getT = exports.getSupportsMessageFooterLinks = exports.getSupportsMessageFooter = exports.getSubtype = exports.getStatusV3CanvasColor = exports.getStar = exports.getSmbClientCampaignId = exports.getSize = exports.getShouldDisplayAsForwarded = exports.getShareDuration = exports.getSender = exports.getSalePriceAmount1000 = exports.getRichPreviewType = exports.getRevokeSender = exports.getRevokeDuration = exports.getRetailerId = exports.getRecipients = exports.getRcatString = exports.getRcat = exports.getQuotedRemoteJid = exports.getQuotedParticipant = exports.getQuotedMsg = exports.getProductListHeaderImage = exports.getProductImageCount = exports.getProductId = exports.getProductHeaderImageRejected = exports.getPriceAmount1000 = exports.getPollSelectableOptionsCount = exports.getPollOptions = exports.getPollName = exports.getPollInvalidated = exports.getPaymentTxnStatus = exports.getPaymentTransactionTimestamp = exports.getPaymentStatus = exports.getPaymentRequestMessageKey = exports.getPaymentNoteMsg = exports.getPaymentMessageReceiverJid = exports.getPaymentInviteServiceType = exports.getPaymentExpiryTimestamp = exports.getPaymentCurrency = exports.getPaymentBackground = exports.getPaymentAmount1000 = exports.getOriginalSender = exports.getOriginalSelfAuthor = exports.getOrderTitle = exports.getNumTimesForwarded = exports.getNativeFlowName = exports.getNativeFlowButtons = exports.getMsgUnsafe = exports.getMimetype = exports.getMessageSecret = exports.getMessage = exports.getMentionedJidList = exports.getMediaKey = exports.getMatchedText = exports.getLocal = exports.getLoc = exports.getLng = exports.getList = exports.getLinkPreview = exports.getLatestEditMsgKey = exports.getLat = exports.getLastBotEditBodyLength = exports.getLabels = exports.getKicTimestampMs = exports.getKicState = exports.getKicSender = exports.getKicKey = exports.getItemCount = exports.getIsViewOnce = exports.getIsVcardOverMmsDocument = exports.getIsUserCreatedType = exports.getIsUnreadType = exports.getIsUnkept = exports.getIsStickerMsg = exports.getIsStatusV3 = exports.getIsSentByMeFromWeb = exports.getIsSentByMe = exports.getIsSendFailure = exports.getIsRevokedByMe = exports.getIsRevokeForMsgFromOrDeliveredToBot = exports.getIsRevoke = exports.getIsReply = exports.getIsReaction = exports.getIsProductListMessage = exports.getIsPollVote = exports.getIsPSA = exports.getIsOpus = exports.getIsNotification = exports.getIsNewsletterMsg = exports.getIsNewMsg = exports.getIsMetaBotResponse = exports.getIsMetaBotInvokeResponse = exports.getIsMedia = exports.getIsMdHistoryMsg = exports.getIsLive = exports.getIsKept = exports.getIsInternational = exports.getIsInitialE2ENotification = exports.getIsImportantMessage = exports.getIsIAS = exports.getIsGroupsV4InviteExpired = exports.getIsGroupMsg = exports.getIsGif = exports.getIsFutureproof = exports.getIsFromTemplate = exports.getIsFrequentlyForwarded = exports.getIsForwarded = exports.getIsFailed = exports.getIsEphemeral = exports.getIsEdited = exports.getIsEditProtocolMsg = exports.getIsDynamicReplyButtonsMsg = exports.getIsDisappearingModeSystemMessage = exports.getIsCarouselCard = exports.getIsCaptionByUser = exports.getIsCAPISupport = exports.getIsBotSearchResponse = exports.getIsBotResponse = exports.getIsBotQuery = exports.getIsBotPluginCarouselMsg = exports.getIsBotFutureproofPlaceholder = exports.getIsBotFeedbackMessage = exports.getIsBizNotification = exports.getIsBizBot3pResponse = exports.getIsBizBot1pResponse = exports.getIsAvatar = exports.getIsAuthenticationMessage = exports.getIsAckPlayable = exports.getInviteGrpType = exports.getInviteGrpName = exports.getInviteGrpJpegThum = exports.getInviteGrp = exports.getInviteCodeExp = exports.getInviteCode = exports.getInvis = exports.getInteractiveType = exports.getInteractiveHeader = exports.getInteractiveAnnotations = exports.getInitialPageSize = exports.getId = exports.getHsmTag = exports.getHeaderType = exports.getHasReaction = exports.getHasOriginatedFromNewsletter = exports.getHasMentionOfMe = exports.getGroupMentions = exports.getGifAttribution = exports.getFutureproofType = exports.getFutureproofSubtype = exports.getFrom = exports.getForwardingScore = exports.getForwardedNewsletterMessageInfo = exports.getFooter = exports.getFinalLng = exports.getFinalLat = exports.getFilename = exports.getFilehash = exports.getErrorCode = exports.getEphemeralSettingUser = exports.getEphemeralOutOfSync = exports.getEphemeralExpirationTimestamp = exports.getEphemeralDuration = exports.getDynamicReplyButtons = exports.getDoNotPlayInline = exports.getDisappearingModeTrigger = exports.getDisappearingModeInitiator = exports.getDisappearingModeInitiatedByMe = exports.getDescription = exports.getDeprecatedMms3Url = exports.getCurrencyCode = exports.getCtwaContext = exports.getComment = exports.getClientUrl = exports.getCaption = exports.getCanonicalUrl = exports.getCampaignId = exports.getBusinessOwnerJid = exports.getBroadcastId = exports.getBroadcast = exports.getBotTargetSenderJid = exports.getBotResponseTargetId = exports.getBotRespOrInvocationRevokeBotWid = exports.getBotPluginType = exports.getBotPluginSearchUrl = exports.getBotPluginSearchProvider = exports.getBotPluginReferenceIndex = exports.getBotEditType = exports.getBody = exports.getBizSource = exports.getBizPrivacyStatus = exports.getBizBotType = exports.getBackgroundColor = exports.getAuthor = exports.getAgendId = exports.getActiveBotMsgStreamingInProgress = exports.getAck = exports.clearMsgGetterCacheFor = undefined;
exports.isMetaBotResponseToMyInvoke = exports.getWaveform = exports.getWamEditType = exports.getWamDisappearingModeTrigger = exports.getWamDisappearingModeInitiator = exports.getWamDisappearingModeInitiatedByMe = exports.getViewed = exports.getViewCount = exports.getVerifiedBizName = exports.getVcardList = exports.getVcardFormattedName = exports.getVcard = exports.getUrl = exports.getType = exports.getTotalCurrencyCode = exports.getTotalAmount1000 = exports.getTo = exports.getTitle = exports.getThumbnailWidth = exports.getThumbnailHeight = exports.getThumbnailHQ = exports.getThumbnailDirectPath = exports.getThumbnail = exports.getTemplateParams = exports.getT = exports.getSupportsMessageFooterLinks = exports.getSupportsMessageFooter = exports.getSubtype = exports.getStatusV3CanvasColor = exports.getStar = exports.getSmbClientCampaignId = exports.getSize = exports.getShouldDisplayAsForwarded = exports.getShareDuration = exports.getSender = exports.getSalePriceAmount1000 = exports.getRichPreviewType = exports.getRevokeSender = exports.getRevokeDuration = exports.getRetailerId = exports.getRecipients = exports.getRcatString = exports.getRcat = exports.getQuotedRemoteJid = exports.getQuotedParticipant = exports.getQuotedMsg = exports.getProductListHeaderImage = exports.getProductImageCount = exports.getProductId = exports.getProductHeaderImageRejected = exports.getPriceAmount1000 = exports.getPollSelectableOptionsCount = exports.getPollOptions = exports.getPollName = exports.getPollInvalidated = exports.getPaymentTxnStatus = exports.getPaymentTransactionTimestamp = exports.getPaymentStatus = exports.getPaymentRequestMessageKey = exports.getPaymentNoteMsg = exports.getPaymentMessageReceiverJid = exports.getPaymentInviteServiceType = exports.getPaymentExpiryTimestamp = exports.getPaymentCurrency = exports.getPaymentBackground = exports.getPaymentAmount1000 = exports.getOriginalSender = exports.getOriginalSelfAuthor = exports.getOrderTitle = exports.getNumTimesForwarded = exports.getNativeFlowName = exports.getNativeFlowButtons = exports.getMsgUnsafe = exports.getMimetype = exports.getMessageSecret = exports.getMessage = exports.getMentionedJidList = exports.getMediaKey = exports.getMatchedText = exports.getLocal = exports.getLoc = exports.getLng = exports.getList = exports.getLinkPreview = exports.getLatestEditMsgKey = exports.getLat = exports.getLastBotEditBodyLength = exports.getLabels = exports.getKicTimestampMs = exports.getKicState = exports.getKicSender = exports.getKicKey = exports.getItemCount = exports.getIsViewOnce = exports.getIsVcardOverMmsDocument = exports.getIsUserCreatedType = exports.getIsUnreadType = exports.getIsUnkept = exports.getIsStickerMsg = exports.getIsStatusV3 = exports.getIsSentByMeFromWeb = exports.getIsSentByMe = exports.getIsSendFailure = exports.getIsRevokedByMe = exports.getIsRevokeForMsgFromOrDeliveredToBot = exports.getIsRevoke = exports.getIsReply = exports.getIsReaction = exports.getIsProductListMessage = exports.getIsPollVote = exports.getIsPSA = exports.getIsOpus = exports.getIsNotification = exports.getIsNewsletterMsg = exports.getIsNewMsg = exports.getIsMetaBotResponse = exports.getIsMetaBotInvokeResponse = exports.getIsMedia = exports.getIsMdHistoryMsg = exports.getIsLive = exports.getIsKept = exports.getIsInternational = exports.getIsInitialE2ENotification = exports.getIsImportantMessage = exports.getIsIAS = exports.getIsGroupsV4InviteExpired = exports.getIsGroupMsg = exports.getIsGif = exports.getIsFutureproof = exports.getIsFromTemplate = exports.getIsFrequentlyForwarded = exports.getIsForwarded = exports.getIsFailed = exports.getIsEphemeral = exports.getIsEdited = exports.getIsEditProtocolMsg = exports.getIsDynamicReplyButtonsMsg = exports.getIsDisappearingModeSystemMessage = exports.getIsCarouselCard = exports.getIsCaptionByUser = exports.getIsCAPISupport = exports.getIsBotSearchResponse = exports.getIsBotResponse = exports.getIsBotQuery = exports.getIsBotPluginCarouselMsg = exports.getIsBotFutureproofPlaceholder = exports.getIsBotFeedbackMessage = exports.getIsBizNotification = exports.getIsBizBot3pResponse = exports.getIsBizBot1pResponse = exports.getIsAvatar = exports.getIsAuthenticationMessage = exports.getIsAckPlayable = exports.getInviteGrpType = exports.getInviteGrpName = exports.getInviteGrpJpegThum = exports.getInviteGrp = exports.getInviteCodeExp = exports.getInviteCode = exports.getInvis = exports.getInteractiveType = exports.getInteractiveHeader = exports.getInteractiveAnnotations = exports.getInitialPageSize = exports.getId = exports.getHsmTag = exports.getHeaderType = exports.getHasReaction = exports.getHasOriginatedFromNewsletter = exports.getHasMentionOfMe = exports.getGroupMentions = exports.getGifAttribution = exports.getFutureproofType = exports.getFutureproofSubtype = exports.getFrom = exports.getForwardingScore = exports.getForwardedNewsletterMessageInfo = exports.getFooter = exports.getFinalLng = exports.getFinalLat = exports.getFilename = exports.getFilehash = exports.getErrorCode = exports.getEphemeralSettingUser = exports.getEphemeralOutOfSync = exports.getEphemeralExpirationTimestamp = exports.getEphemeralDuration = exports.getDynamicReplyButtons = exports.getDoNotPlayInline = exports.getDisappearingModeTrigger = exports.getDisappearingModeInitiator = exports.getDisappearingModeInitiatedByMe = exports.getDescription = exports.getDeprecatedMms3Url = exports.getCurrencyCode = exports.getCtwaContext = exports.getComment = exports.getClientUrl = exports.getCaption = exports.getCanonicalUrl = exports.getCampaignId = exports.getBusinessOwnerJid = exports.getBroadcastId = exports.getBroadcast = exports.getBotTargetSenderJid = exports.getBotResponseTargetId = exports.getBotRespOrInvocationRevokeBotWid = exports.getBotPluginType = exports.getBotPluginSearchUrl = exports.getBotPluginSearchProvider = exports.getBotPluginReferenceIndex = exports.getBotEditType = exports.getBody = exports.getBizSource = exports.getBizPrivacyStatus = exports.getBizBotType = exports.getBackgroundColor = exports.getAuthor = exports.getAgendId = exports.getActiveBotMsgStreamingInProgress = exports.getAck = exports.clearMsgGetterCacheFor = undefined;
var i = r(require("../vendor/441609.js"));
var a = require("./417405.js");
var o = require("./986120.js");
var s = require("./724976.js");
var l = require("./402994.js");
var u = require("./832547.js");
var c = require("./37237.js");
var d = require("./382895.js");
var p = require("./147980.js");
var f = r(require("./846870.js"));
var _ = require("./784427.js");
var g = require("./303857.js");
var m = require("./272619.js");
var h = require("./535979.js");
var y = require("./937484.js");
var E = require("./373070.js");
var S = require("./533494.js");
var v = require("./459857.js");
var T = require("./517660.js");
var M = require("./616615.js");
var A = r(require("./124928.js"));
var b = require("./669050.js");
const {
  field: C,
  computed: P,
  unsafeIdentityGetter: O,
  clearCacheFor: I
} = (0, m.createGetterFactories)({
  createCache: h.createMessagesCache
});
const R = I;
exports.clearMsgGetterCacheFor = R;
const N = O;
function D(e) {
  if (e instanceof A.default) {
    return e;
  } else if (e.user != null) {
    return (0, b.createUserWid)(e.user, e.server);
  } else {
    return e;
  }
}
exports.getMsgUnsafe = N;
const w = Object.defineProperty(C("type"), "name", {
  value: "getType"
});
exports.getType = w;
const L = Object.defineProperty(C("subtype"), "name", {
  value: "getSubtype"
});
exports.getSubtype = L;
const k = Object.defineProperty(C("id"), "name", {
  value: "getId"
});
exports.getId = k;
const G = Object.defineProperty(C("to"), "name", {
  value: "getTo"
});
exports.getTo = G;
const U = Object.defineProperty(C("from"), "name", {
  value: "getFrom"
});
exports.getFrom = U;
const x = Object.defineProperty(C("author"), "name", {
  value: "getAuthor"
});
exports.getAuthor = x;
const B = Object.defineProperty(C("ack"), "name", {
  value: "getAck"
});
exports.getAck = B;
const F = Object.defineProperty(C("viewCount"), "name", {
  value: "getViewCount"
});
exports.getViewCount = F;
const j = Object.defineProperty(C("viewed"), "name", {
  value: "getViewed"
});
exports.getViewed = j;
const Y = Object.defineProperty(C("originalSelfAuthor"), "name", {
  value: "getOriginalSelfAuthor"
});
exports.getOriginalSelfAuthor = Y;
const K = Object.defineProperty(C("kicState"), "name", {
  value: "getKicState"
});
exports.getKicState = K;
const W = Object.defineProperty(C("kicTimestampMs"), "name", {
  value: "getKicTimestampMs"
});
exports.getKicTimestampMs = W;
const V = Object.defineProperty(C("list"), "name", {
  value: "getList"
});
exports.getList = V;
const H = Object.defineProperty(C("latestEditMsgKey"), "name", {
  value: "getLatestEditMsgKey"
});
exports.getLatestEditMsgKey = H;
const $ = Object.defineProperty(C("errorCode"), "name", {
  value: "getErrorCode"
});
exports.getErrorCode = $;
const z = Object.defineProperty(C("ephemeralDuration"), "name", {
  value: "getEphemeralDuration"
});
exports.getEphemeralDuration = z;
const q = Object.defineProperty(C("ephemeralSettingUser"), "name", {
  value: "getEphemeralSettingUser"
});
exports.getEphemeralSettingUser = q;
const J = Object.defineProperty(C("t", {
  default: 0
}), "name", {
  value: "getT"
});
exports.getT = J;
const Q = Object.defineProperty(C("backgroundColor"), "name", {
  value: "getBackgroundColor"
});
exports.getBackgroundColor = Q;
const X = Object.defineProperty(C("headerType"), "name", {
  value: "getHeaderType"
});
exports.getHeaderType = X;
const Z = Object.defineProperty(C("interactiveHeader"), "name", {
  value: "getInteractiveHeader"
});
exports.getInteractiveHeader = Z;
const ee = Object.defineProperty(C("interactiveType"), "name", {
  value: "getInteractiveType"
});
exports.getInteractiveType = ee;
const te = Object.defineProperty(C("footer"), "name", {
  value: "getFooter"
});
exports.getFooter = te;
const ne = Object.defineProperty(C("mentionedJidList"), "name", {
  value: "getMentionedJidList"
});
exports.getMentionedJidList = ne;
const re = Object.defineProperty(C("groupMentions", {
  getDefault: () => []
}), "name", {
  value: "getGroupMentions"
});
exports.getGroupMentions = re;
const ie = Object.defineProperty(C("quotedMsg"), "name", {
  value: "getQuotedMsg"
});
exports.getQuotedMsg = ie;
const ae = Object.defineProperty(C("quotedRemoteJid"), "name", {
  value: "getQuotedRemoteJid"
});
exports.getQuotedRemoteJid = ae;
const oe = Object.defineProperty(C("quotedParticipant"), "name", {
  value: "getQuotedParticipant"
});
exports.getQuotedParticipant = oe;
const se = Object.defineProperty(C("rcat"), "name", {
  value: "getRcat"
});
exports.getRcat = se;
const le = Object.defineProperty(C("isViewOnce", {
  default: false
}), "name", {
  value: "getIsViewOnce"
});
exports.getIsViewOnce = le;
const ue = Object.defineProperty(C("isGif", {
  default: false
}), "name", {
  value: "getIsGif"
});
exports.getIsGif = ue;
const ce = Object.defineProperty(C("gifAttribution", {
  default: S.Message$VideoMessage$Attribution.NONE
}), "name", {
  value: "getGifAttribution"
});
exports.getGifAttribution = ce;
const de = Object.defineProperty(C("ctwaContext"), "name", {
  value: "getCtwaContext"
});
exports.getCtwaContext = de;
const pe = Object.defineProperty(C("mimetype"), "name", {
  value: "getMimetype"
});
exports.getMimetype = pe;
const fe = Object.defineProperty(C("filehash"), "name", {
  value: "getFilehash"
});
exports.getFilehash = fe;
const _e = Object.defineProperty(C("deprecatedMms3Url"), "name", {
  value: "getDeprecatedMms3Url"
});
exports.getDeprecatedMms3Url = _e;
const ge = Object.defineProperty(C("waveform"), "name", {
  value: "getWaveform"
});
exports.getWaveform = ge;
const me = Object.defineProperty(C("disappearingModeInitiator"), "name", {
  value: "getDisappearingModeInitiator"
});
exports.getDisappearingModeInitiator = me;
const he = Object.defineProperty(C("disappearingModeTrigger"), "name", {
  value: "getDisappearingModeTrigger"
});
exports.getDisappearingModeTrigger = he;
const ye = Object.defineProperty(C("disappearingModeInitiatedByMe"), "name", {
  value: "getDisappearingModeInitiatedByMe"
});
exports.getDisappearingModeInitiatedByMe = ye;
const Ee = Object.defineProperty(C("botEditType"), "name", {
  value: "getBotEditType"
});
exports.getBotEditType = Ee;
const Se = Object.defineProperty(C("lastBotEditBodyLength"), "name", {
  value: "getLastBotEditBodyLength"
});
exports.getLastBotEditBodyLength = Se;
const ve = Object.defineProperty(C("activeBotMsgStreamingInProgress"), "name", {
  value: "getActiveBotMsgStreamingInProgress"
});
exports.getActiveBotMsgStreamingInProgress = ve;
const Te = Object.defineProperty(C("bizBotType"), "name", {
  value: "getBizBotType"
});
exports.getBizBotType = Te;
const Me = Object.defineProperty(C("botTargetSenderJid"), "name", {
  value: "getBotTargetSenderJid"
});
exports.getBotTargetSenderJid = Me;
const Ae = Object.defineProperty(C("forwardedNewsletterMessageInfo"), "name", {
  value: "getForwardedNewsletterMessageInfo"
});
exports.getForwardedNewsletterMessageInfo = Ae;
const be = Object.defineProperty(P(e => {
  let [t] = e;
  return t != null;
}, [ie]), "name", {
  value: "getIsReply"
});
exports.getIsReply = be;
const Ce = Object.defineProperty(P(e => {
  let [t] = e;
  return (0, y.isOpus)(t);
}, [pe]), "name", {
  value: "getIsOpus"
});
exports.getIsOpus = Ce;
const Pe = Object.defineProperty(P(e => {
  let [t] = e;
  if (t == null) {
    return null;
  } else {
    return (0, a.encodeB64UrlSafe)(t, true);
  }
}, [se]), "name", {
  value: "getRcatString"
});
exports.getRcatString = Pe;
const Oe = Object.defineProperty(P(e => {
  let [t] = e;
  return t != null && t.some(e => (0, v.isMeAccount)(D(e)));
}, [ne]), "name", {
  value: "getHasMentionOfMe"
});
exports.getHasMentionOfMe = Oe;
const Ie = Object.defineProperty(C("local", {
  default: false
}), "name", {
  value: "getLocal"
});
exports.getLocal = Ie;
const Re = Object.defineProperty(P(e => {
  let [t, n] = e;
  return !(!t || !n) && (0, v.isMeAccount)(D(n));
}, [ie, oe]), "name", {
  value: "getRepliedToMyMessage"
});
const Ne = Object.defineProperty(P(e => {
  let [t, n] = e;
  return t || n;
}, [Oe, Re]), "name", {
  value: "getIsImportantMessage"
});
exports.getIsImportantMessage = Ne;
const De = Object.defineProperty(C("botPluginReferenceIndex"), "name", {
  value: "getBotPluginReferenceIndex"
});
exports.getBotPluginReferenceIndex = De;
const we = Object.defineProperty(P(e => {
  let [t, n] = e;
  if (n != null) {
    return false;
  }
  switch (t) {
    case "chat":
    case "image":
    case "video":
    case "ptv":
    case "audio":
    case "ptt":
    case "document":
    case "vcard":
    case "location":
    case "ciphertext":
    case "oversized":
    case "multi_vcard":
    case "sticker":
    case "status_v3":
    case "product":
    case "groups_v4_invite":
    case "poll_creation":
    case "list":
      return true;
    case "revoked":
    case "protocol":
    case "order":
    case "biz-cover-photo":
    case "broadcast_notification":
    case "buttons_response":
    case "call_log":
    case "debug":
    case "e2e_notification":
    case "gp2":
    case "hsm":
    case "interactive":
    case "interactive_response":
    case "keep_in_chat":
    case "list_response":
    case "native_flow":
    case "notification":
    case "notification_template":
    case "payment":
    case "poll_update":
    case "reaction":
    case "reaction_enc":
    case "request_phone_number":
    case "template_button_reply":
    case "pin_message":
    case "pinned_message":
    case "newsletter_notification":
    case "comment":
    case "unknown":
    case "history_bundle":
    default:
      return false;
  }
}, [w, De]), "name", {
  value: "getIsUnreadType"
});
exports.getIsUnreadType = we;
const Le = Object.defineProperty(P(e => {
  let [t, n] = e;
  return A.default.isGroup(t) || A.default.isGroup(n);
}, [U, G]), "name", {
  value: "getIsGroupMsg"
});
exports.getIsGroupMsg = Le;
const ke = Object.defineProperty(P(e => {
  let [t, n] = e;
  return A.default.isNewsletter(t) || A.default.isNewsletter(n);
}, [U, G]), "name", {
  value: "getIsNewsletterMsg"
});
exports.getIsNewsletterMsg = ke;
const Ge = Object.defineProperty(P(e => {
  let [t, n] = e;
  return t || n != null;
}, [ke, Ae]), "name", {
  value: "getHasOriginatedFromNewsletter"
});
exports.getHasOriginatedFromNewsletter = Ge;
const Ue = Object.defineProperty(P(e => {
  let [t] = e;
  return A.default.isStatusV3(t.remote);
}, [k]), "name", {
  value: "getIsStatusV3"
});
exports.getIsStatusV3 = Ue;
const xe = Object.defineProperty(P(e => {
  let [t, n] = e;
  return (0, p.isNotificationType)(t, n);
}, [w, L]), "name", {
  value: "getIsNotification"
});
exports.getIsNotification = xe;
const Be = Object.defineProperty(P(e => {
  let [t, n, r, i] = e;
  if (i) {
    return t.fromMe;
  } else {
    return t.self !== "in" && !r && (0, v.isMeAccount)(n);
  }
}, [k, U, xe, ke]), "name", {
  value: "getIsSentByMe"
});
exports.getIsSentByMe = Be;
const Fe = Object.defineProperty(P(e => {
  let [t, n, r, i, a, o] = e;
  if (t) {
    if (i) {
      return (0, v.getMeUser)();
    } else {
      return a;
    }
  } else if (n || r || (o == null ? undefined : o.isBot())) {
    return o;
  } else {
    return a;
  }
}, [Be, Le, Ue, ke, U, x]), "name", {
  value: "getSender"
});
exports.getSender = Fe;
const je = Object.defineProperty(P(e => {
  var t;
  let [n, r, i] = e;
  const a = n || r;
  if (a != null && a.isUser == null) {
    __LOG__(4, undefined, new Error(), true)`Unexpected non-wid for originalSelfAuthorOrSender; typeof=${typeof a}; msg.type=${i}`;
    SEND_LOGS("non-wid-originalselfauthororsender");
  }
  if (a != null && ((t = a.isUser) === null || t === undefined ? undefined : t.call(a))) {
    return (0, b.toUserWid)(a);
  } else {
    return null;
  }
}, [Y, Fe, w]), "name", {
  value: "getOriginalSender"
});
exports.getOriginalSender = je;
const Ye = Object.defineProperty(P(e => {
  let [t] = e;
  return t === E.MSG_TYPE.REACTION || t === E.MSG_TYPE.REACTION_ENC;
}, [w]), "name", {
  value: "getIsReaction"
});
exports.getIsReaction = Ye;
const Ke = Object.defineProperty(P(e => {
  let [t, n] = e;
  return t === E.MSG_TYPE.POLL_UPDATE && n === "poll_vote";
}, [w, L]), "name", {
  value: "getIsPollVote"
});
exports.getIsPollVote = Ke;
const We = Object.defineProperty(P(e => {
  let [t, n] = e;
  return t === E.MSG_TYPE.UNKNOWN || t === E.MSG_TYPE.PAYMENT && n === "futureproof";
}, [w, L]), "name", {
  value: "getIsFutureproof"
});
exports.getIsFutureproof = We;
const Ve = Object.defineProperty(P(e => {
  let [t] = e;
  return t === E.MSG_TYPE.STICKER;
}, [w]), "name", {
  value: "getIsStickerMsg"
});
exports.getIsStickerMsg = Ve;
const He = Object.defineProperty(P(e => {
  let [t] = e;
  return t === _.KeepInChatState.KEPT;
}, [K]), "name", {
  value: "getIsKept"
});
exports.getIsKept = He;
const $e = Object.defineProperty(P(e => {
  let [t] = e;
  return t === _.KeepInChatState.UNKEPT;
}, [K]), "name", {
  value: "getIsUnkept"
});
exports.getIsUnkept = $e;
const ze = Object.defineProperty(P(e => {
  let [t] = e;
  return A.default.isPSA(t.remote);
}, [k]), "name", {
  value: "getIsPSA"
});
exports.getIsPSA = ze;
const qe = Object.defineProperty(P(e => {
  let [t] = e;
  return A.default.isIAS(t.remote);
}, [k]), "name", {
  value: "getIsIAS"
});
exports.getIsIAS = qe;
const Je = Object.defineProperty(P(e => {
  let [t] = e;
  return A.default.isCAPISupportAccount(t.remote);
}, [k]), "name", {
  value: "getIsCAPISupport"
});
exports.getIsCAPISupport = Je;
const Qe = Object.defineProperty(P(e => {
  let [t, n] = e;
  return t === E.MSG_TYPE.LIST && (n == null ? undefined : n.listType) === S.Message$ListMessage$ListType.PRODUCT_LIST;
}, [w, V]), "name", {
  value: "getIsProductListMessage"
});
exports.getIsProductListMessage = Qe;
const Xe = Object.defineProperty(C("title"), "name", {
  value: "getTitle"
});
exports.getTitle = Xe;
const Ze = Object.defineProperty(C("body", {
  default: ""
}), "name", {
  value: "getBody"
});
exports.getBody = Ze;
const et = Object.defineProperty(C("caption"), "name", {
  value: "getCaption"
});
exports.getCaption = et;
const tt = Object.defineProperty(C("comment"), "name", {
  value: "getComment"
});
exports.getComment = tt;
const nt = Object.defineProperty(C("pollName", {
  default: ""
}), "name", {
  value: "getPollName"
});
exports.getPollName = nt;
const rt = Object.defineProperty(C("pollOptions"), "name", {
  value: "getPollOptions"
});
exports.getPollOptions = rt;
const it = Object.defineProperty(C("pollSelectableOptionsCount", {
  default: 0
}), "name", {
  value: "getPollSelectableOptionsCount"
});
exports.getPollSelectableOptionsCount = it;
const at = Object.defineProperty(C("pollInvalidated", {
  default: false
}), "name", {
  value: "getPollInvalidated"
});
exports.getPollInvalidated = at;
const ot = Object.defineProperty(C("nativeFlowName"), "name", {
  value: "getNativeFlowName"
});
exports.getNativeFlowName = ot;
const st = Object.defineProperty(C("nativeFlowButtons"), "name", {
  value: "getNativeFlowButtons"
});
exports.getNativeFlowButtons = st;
const lt = Object.defineProperty(C("paymentCurrency", {
  default: ""
}), "name", {
  value: "getPaymentCurrency"
});
exports.getPaymentCurrency = lt;
const ut = Object.defineProperty(C("paymentAmount1000", {
  default: 0
}), "name", {
  value: "getPaymentAmount1000"
});
exports.getPaymentAmount1000 = ut;
const ct = Object.defineProperty(C("paymentMessageReceiverJid"), "name", {
  value: "getPaymentMessageReceiverJid"
});
exports.getPaymentMessageReceiverJid = ct;
const dt = Object.defineProperty(C("paymentTransactionTimestamp", {
  default: 0
}), "name", {
  value: "getPaymentTransactionTimestamp"
});
exports.getPaymentTransactionTimestamp = dt;
const pt = Object.defineProperty(C("paymentStatus"), "name", {
  value: "getPaymentStatus"
});
exports.getPaymentStatus = pt;
const ft = Object.defineProperty(C("paymentTxnStatus"), "name", {
  value: "getPaymentTxnStatus"
});
exports.getPaymentTxnStatus = ft;
const _t = Object.defineProperty(C("paymentNoteMsg"), "name", {
  value: "getPaymentNoteMsg"
});
exports.getPaymentNoteMsg = _t;
const gt = Object.defineProperty(C("paymentRequestMessageKey"), "name", {
  value: "getPaymentRequestMessageKey"
});
exports.getPaymentRequestMessageKey = gt;
const mt = Object.defineProperty(C("paymentExpiryTimestamp"), "name", {
  value: "getPaymentExpiryTimestamp"
});
exports.getPaymentExpiryTimestamp = mt;
const ht = Object.defineProperty(C("paymentInviteServiceType"), "name", {
  value: "getPaymentInviteServiceType"
});
exports.getPaymentInviteServiceType = ht;
const yt = Object.defineProperty(C("paymentBackground"), "name", {
  value: "getPaymentBackground"
});
exports.getPaymentBackground = yt;
const Et = Object.defineProperty(C("isFromTemplate", {
  default: false
}), "name", {
  value: "getIsFromTemplate"
});
exports.getIsFromTemplate = Et;
const St = Object.defineProperty(C("isCarouselCard", {
  default: false
}), "name", {
  value: "getIsCarouselCard"
});
exports.getIsCarouselCard = St;
const vt = Object.defineProperty(C("isLive", {
  default: false
}), "name", {
  value: "getIsLive"
});
exports.getIsLive = vt;
const Tt = Object.defineProperty(C("isDynamicReplyButtonsMsg", {
  default: false
}), "name", {
  value: "getIsDynamicReplyButtonsMsg"
});
exports.getIsDynamicReplyButtonsMsg = Tt;
const Mt = Object.defineProperty(C("dynamicReplyButtons"), "name", {
  value: "getDynamicReplyButtons"
});
exports.getDynamicReplyButtons = Mt;
const At = Object.defineProperty(P(e => {
  let [t, n, r] = e;
  return (t !== E.MSG_TYPE.PROTOCOL || n !== "ephemeral_setting") && r != null && r !== 0;
}, [w, L, z]), "name", {
  value: "getIsEphemeral"
});
exports.getIsEphemeral = At;
const bt = Object.defineProperty(P(e => {
  let [t] = e;
  return t != null;
}, [H]), "name", {
  value: "getIsEdited"
});
exports.getIsEdited = bt;
const Ct = Object.defineProperty(P(e => {
  let [t, n] = e;
  return t === E.MSG_TYPE.PROTOCOL && n === "message_edit";
}, [w, L]), "name", {
  value: "getIsEditProtocolMsg"
});
exports.getIsEditProtocolMsg = Ct;
const Pt = Object.defineProperty(P(e => {
  let [t, n] = e;
  if (!t) {
    return null;
  }
  if (n == null || n === 0) {
    return "rgba(86, 150, 255, 255)";
  } else {
    return `rgba(${n >> 16 & 255}, ${n >> 8 & 255}, ${n & 255}, ${n >> 24 & 255})`;
  }
}, [Ue, Q]), "name", {
  value: "getStatusV3CanvasColor"
});
exports.getStatusV3CanvasColor = Pt;
const Ot = Object.defineProperty(P(e => {
  let [t] = e;
  switch (t) {
    case "protocol":
    case "chat":
    case "location":
    case "vcard":
    case "multi_vcard":
    case "image":
    case "video":
    case "ptv":
    case "audio":
    case "ptt":
    case "document":
    case "sticker":
    case "status_v3":
    case "product":
    case "groups_v4_invite":
    case "order":
    case "poll_creation":
      return true;
    case "biz-cover-photo":
    case "broadcast_notification":
    case "buttons_response":
    case "call_log":
    case "ciphertext":
    case "debug":
    case "e2e_notification":
    case "gp2":
    case "newsletter_notification":
    case "hsm":
    case "interactive":
    case "interactive_response":
    case "keep_in_chat":
    case "list":
    case "list_response":
    case "native_flow":
    case "notification":
    case "notification_template":
    case "oversized":
    case "payment":
    case "poll_update":
    case "reaction":
    case "reaction_enc":
    case "request_phone_number":
    case "revoked":
    case "template_button_reply":
    case "pin_message":
    case "pinned_message":
    case "unknown":
    case "comment":
    case "history_bundle":
    default:
      return false;
  }
}, [w]), "name", {
  value: "getIsUserCreatedType"
});
exports.getIsUserCreatedType = Ot;
const It = Object.defineProperty(P(e => {
  let [t, n, r] = e;
  return t.fromMe && n && r;
}, [k, Ie, Ot]), "name", {
  value: "getIsSentByMeFromWeb"
});
exports.getIsSentByMeFromWeb = It;
const Rt = Object.defineProperty(C("revokeSender"), "name", {
  value: "getRevokeSender"
});
exports.getRevokeSender = Rt;
const Nt = Object.defineProperty(P(e => {
  let [t] = e;
  return t != null && (0, v.isMeAccount)(t);
}, [Rt]), "name", {
  value: "getIsRevokedByMe"
});
exports.getIsRevokedByMe = Nt;
const Dt = Object.defineProperty(P(e => {
  var t;
  let [n, r, i] = e;
  const a = n.fromMe ? r == null ? undefined : r.toString({
    legacy: true
  }) : i == null ? undefined : i.toString({
    legacy: true
  });
  const s = (t = (0, v.getMaybeMeUser)()) === null || t === undefined ? undefined : t.toString({
    legacy: true
  });
  if (a && s) {
    return (0, o.phoneCC)(a) !== (0, o.phoneCC)(s);
  } else {
    __LOG__(3)`Msg: could not derive isInternational as some data is missing`;
    return false;
  }
}, [k, G, U]), "name", {
  value: "getIsInternational"
});
exports.getIsInternational = Dt;
const wt = Object.defineProperty(P(e => {
  let [t, n] = e;
  if (t === E.MSG_TYPE.NOTIFICATION_TEMPLATE) {
    if (u.BIZ_SYSTEM_MSG_SUBTYPES.includes(n)) {
      return true;
    }
    if (u.BIZ_SYSTEM_MSG_SUBTYPES_V2.includes(n)) {
      return true;
    }
    switch (n) {
      case "verified_initial_unknown":
      case "verified_initial_low":
      case "verified_initial_high":
      case "verified_transition_any_to_none":
      case "verified_transition_any_to_high":
      case "verified_transition_high_to_low":
      case "verified_transition_high_to_unknown":
      case "verified_transition_unknown_to_low":
      case "verified_transition_low_to_unknown":
      case "verified_transition_none_to_low":
      case "verified_transition_none_to_unknown":
      case "biz_verified_transition_top_to_bottom":
      case "biz_verified_transition_bottom_to_top":
      case "biz_intro_top":
      case "biz_intro_bottom":
      case "biz_name_change":
      case "biz_move_to_consumer_app":
      case "biz_two_tier_migration_top":
      case "biz_two_tier_migration_bottom":
        return true;
      default:
        return false;
    }
  }
  return false;
}, [w, L]), "name", {
  value: "getIsBizNotification"
});
exports.getIsBizNotification = wt;
const Lt = Object.defineProperty(P(e => {
  let [t] = e;
  switch (t) {
    case "image":
    case "video":
    case "audio":
      return true;
    default:
      return false;
  }
}, [w]), "name", {
  value: "getIsMedia"
});
exports.getIsMedia = Lt;
const kt = Object.defineProperty(C("isForwarded", {
  default: false
}), "name", {
  value: "getIsForwarded"
});
exports.getIsForwarded = kt;
const Gt = Object.defineProperty(C("forwardingScore"), "name", {
  value: "getForwardingScore"
});
exports.getForwardingScore = Gt;
const Ut = Object.defineProperty(P(e => {
  let [t, n] = e;
  if (n == null) {
    if (t) {
      return 1;
    } else {
      return 0;
    }
  } else {
    return n || 0;
  }
}, [kt, Gt]), "name", {
  value: "getNumTimesForwarded"
});
exports.getNumTimesForwarded = Ut;
const xt = Object.defineProperty(P(e => {
  let [t] = e;
  return t >= f.default.FREQUENTLY_FORWARDED_SENTINEL;
}, [Ut]), "name", {
  value: "getIsFrequentlyForwarded"
});
exports.getIsFrequentlyForwarded = xt;
const Bt = Object.defineProperty(P(e => {
  let [t, n, r] = e;
  return t || n || !r;
}, [kt, Ge, Be]), "name", {
  value: "getShouldDisplayAsForwarded"
});
exports.getShouldDisplayAsForwarded = Bt;
const Ft = Object.defineProperty(C("invis", {
  default: false
}), "name", {
  value: "getInvis"
});
exports.getInvis = Ft;
const jt = Object.defineProperty(C("isNewMsg", {
  default: false
}), "name", {
  value: "getIsNewMsg"
});
exports.getIsNewMsg = jt;
const Yt = Object.defineProperty(C("isSendFailure", {
  default: false
}), "name", {
  value: "getIsSendFailure"
});
exports.getIsSendFailure = Yt;
const Kt = Object.defineProperty(P(e => {
  let [t, n, r] = e;
  return t && n != null && n < l.ACK.CLOCK || r;
}, [Be, B, Yt]), "name", {
  value: "getIsFailed"
});
exports.getIsFailed = Kt;
const Wt = Object.defineProperty(P(e => {
  let [t, n] = e;
  if (t === E.MSG_TYPE.VCARD) {
    try {
      return (0, T.parseVcard)(n);
    } catch (e) {
      return;
    }
  }
}, [w, Ze]), "name", {
  value: "getVcard"
});
exports.getVcard = Wt;
const Vt = Object.defineProperty(C("description"), "name", {
  value: "getDescription"
});
exports.getDescription = Vt;
const Ht = Object.defineProperty(C("matchedText", {
  default: ""
}), "name", {
  value: "getMatchedText"
});
exports.getMatchedText = Ht;
const $t = Object.defineProperty(C("thumbnail"), "name", {
  value: "getThumbnail"
});
exports.getThumbnail = $t;
const zt = Object.defineProperty(C("thumbnailHQ"), "name", {
  value: "getThumbnailHQ"
});
exports.getThumbnailHQ = zt;
const qt = Object.defineProperty(C("richPreviewType", {
  default: S.Message$ExtendedTextMessage$PreviewType.NONE
}), "name", {
  value: "getRichPreviewType"
});
exports.getRichPreviewType = qt;
const Jt = Object.defineProperty(P(e => {
  let [t, n, r, a] = e;
  return (0, s.isString)(a) && (!(0, i.default)(n) || !(0, i.default)(r)) && t != null && t.includes(a);
}, [Ze, Xe, Vt, Ht]), "name", {
  value: "getLinkPreview"
});
exports.getLinkPreview = Jt;
const Qt = Object.defineProperty(P(e => {
  let [t, n] = e;
  return t || n;
}, [Tt, Et]), "name", {
  value: "getSupportsMessageFooter"
});
exports.getSupportsMessageFooter = Qt;
const Xt = Object.defineProperty(P(e => {
  let [t, n] = e;
  return n || t === E.MSG_TYPE.LIST || t === E.MSG_TYPE.INTERACTIVE;
}, [w, Tt]), "name", {
  value: "getSupportsMessageFooterLinks"
});
exports.getSupportsMessageFooterLinks = Xt;
const Zt = Object.defineProperty(P(e => {
  let [t, n] = e;
  if (n == null ? undefined : n.isBot()) {
    return 1 / 0;
  } else if (t) {
    return 308;
  } else {
    return 768;
  }
}, [xt, Fe]), "name", {
  value: "getInitialPageSize"
});
exports.getInitialPageSize = Zt;
const en = Object.defineProperty(P(e => {
  let [t, n] = e;
  return t === E.MSG_TYPE.E2E_NOTIFICATION && n === "encrypt" || u.BIZ_SYSTEM_MSG_SUBTYPES_V2_INIT.includes(n);
}, [w, L]), "name", {
  value: "getIsInitialE2ENotification"
});
exports.getIsInitialE2ENotification = en;
const tn = Object.defineProperty(P(e => {
  let [t, n] = e;
  return t === E.MSG_TYPE.NOTIFICATION_TEMPLATE && n === "disappearing_mode";
}, [w, L]), "name", {
  value: "getIsDisappearingModeSystemMessage"
});
exports.getIsDisappearingModeSystemMessage = tn;
const nn = Object.defineProperty(C("kicKey"), "name", {
  value: "getKicKey"
});
exports.getKicKey = nn;
const rn = Object.defineProperty(P(e => {
  let [t, n] = e;
  if (t != null) {
    if (t.fromMe) {
      return (0, v.getMaybeMeUser)();
    }
    if (n && t.participant != null) {
      return (0, b.toUserWid)(t.participant);
    }
    if (!n) {
      return (0, b.toUserWid)(t.remote);
    }
  }
}, [nn, Le]), "name", {
  value: "getKicSender"
});
exports.getKicSender = rn;
const an = Object.defineProperty(P(e => {
  let [t, n, r] = e;
  if (r === "ephemeral_setting" || t == null || t === 0) {
    return null;
  } else {
    return n + t;
  }
}, [z, J, L]), "name", {
  value: "getEphemeralExpirationTimestamp"
});
exports.getEphemeralExpirationTimestamp = an;
const on = Object.defineProperty(P(e => {
  let [t, n] = e;
  return t === E.MSG_TYPE.PROTOCOL && (n === "sender_revoke" || n === "admin_revoke");
}, [w, L]), "name", {
  value: "getIsRevoke"
});
exports.getIsRevoke = on;
const sn = Object.defineProperty(C("revokeDuration"), "name", {
  value: "getRevokeDuration"
});
exports.getRevokeDuration = sn;
const ln = Object.defineProperty(P(e => {
  let [t, n, r] = e;
  if (n) {
    if (t === "admin_revoke") {
      return M.EDIT_TYPE.ADMIN_REVOKE;
    } else {
      return M.EDIT_TYPE.SENDER_REVOKE;
    }
  } else if (r) {
    return M.EDIT_TYPE.EDITED;
  } else {
    return M.EDIT_TYPE.NOT_EDITED;
  }
}, [L, on, bt]), "name", {
  value: "getWamEditType"
});
exports.getWamEditType = ln;
const un = Object.defineProperty(P(e => {
  let [t] = e;
  if (t != null) {
    return (0, g.getWamDisappearingModeTrigger)(t);
  }
}, [he]), "name", {
  value: "getWamDisappearingModeTrigger"
});
exports.getWamDisappearingModeTrigger = un;
const cn = Object.defineProperty(P(e => {
  let [t] = e;
  if (t != null) {
    return (0, g.getWamDisappearingModeInitiatedByMe)(t);
  }
}, [ye]), "name", {
  value: "getWamDisappearingModeInitiatedByMe"
});
exports.getWamDisappearingModeInitiatedByMe = cn;
const dn = Object.defineProperty(P(e => {
  let [t] = e;
  if (t != null) {
    return (0, g.getWamDisappearingModeInitiator)(t);
  }
}, [me]), "name", {
  value: "getWamDisappearingModeInitiator"
});
exports.getWamDisappearingModeInitiator = dn;
const pn = Object.defineProperty(C("inviteCode", {
  default: ""
}), "name", {
  value: "getInviteCode"
});
exports.getInviteCode = pn;
const fn = Object.defineProperty(C("inviteCodeExp", {
  default: ""
}), "name", {
  value: "getInviteCodeExp"
});
exports.getInviteCodeExp = fn;
const _n = Object.defineProperty(C("inviteGrp", {
  default: ""
}), "name", {
  value: "getInviteGrp"
});
exports.getInviteGrp = _n;
const gn = Object.defineProperty(C("inviteGrpName"), "name", {
  value: "getInviteGrpName"
});
exports.getInviteGrpName = gn;
const mn = Object.defineProperty(C("inviteGrpJpegThum"), "name", {
  value: "getInviteGrpJpegThum"
});
exports.getInviteGrpJpegThum = mn;
const hn = Object.defineProperty(C("inviteGrpType"), "name", {
  value: "getInviteGrpType"
});
exports.getInviteGrpType = hn;
const yn = Object.defineProperty(P(e => {
  let [t, n, r] = e;
  if (t !== E.MSG_TYPE.GROUPS_V4_INVITE) {
    return false;
  }
  if (!n) {
    return true;
  }
  const i = new Date().getTime() / 1000;
  return parseInt(i, 10) >= parseInt(r, 10);
}, [w, pn, fn]), "name", {
  value: "getIsGroupsV4InviteExpired"
});
exports.getIsGroupsV4InviteExpired = yn;
const En = Object.defineProperty(C("productHeaderImageRejected", {
  default: false
}), "name", {
  value: "getProductHeaderImageRejected"
});
exports.getProductHeaderImageRejected = En;
const Sn = Object.defineProperty(P(e => {
  var t;
  var n;
  var r;
  let [i, a] = e;
  if (i === true) {
    return null;
  } else if ((t = a == null || (n = a.productListInfo) === null || n === undefined || (r = n.headerImage) === null || r === undefined ? undefined : r.jpegThumbnail) !== null && t !== undefined) {
    return t;
  } else {
    return null;
  }
}, [En, V]), "name", {
  value: "getProductListHeaderImage"
});
exports.getProductListHeaderImage = Sn;
const vn = Object.defineProperty(P(e => {
  let [t] = e;
  return t === E.MSG_TYPE.PTT || t === E.MSG_TYPE.PTV;
}, [w]), "name", {
  value: "getIsAckPlayable"
});
exports.getIsAckPlayable = vn;
const Tn = Object.defineProperty(C("hasReaction", {
  default: false
}), "name", {
  value: "getHasReaction"
});
exports.getHasReaction = Tn;
const Mn = Object.defineProperty(C("recipients", {
  getDefault: () => []
}), "name", {
  value: "getRecipients"
});
exports.getRecipients = Mn;
const An = Object.defineProperty(C("templateParams", {
  getDefault: () => []
}), "name", {
  value: "getTemplateParams"
});
exports.getTemplateParams = An;
const bn = Object.defineProperty(C("clientUrl", {
  default: ""
}), "name", {
  value: "getClientUrl"
});
exports.getClientUrl = bn;
const Cn = Object.defineProperty(C("loc", {
  default: ""
}), "name", {
  value: "getLoc"
});
exports.getLoc = Cn;
const Pn = Object.defineProperty(C("lat"), "name", {
  value: "getLat"
});
exports.getLat = Pn;
const On = Object.defineProperty(C("lng"), "name", {
  value: "getLng"
});
exports.getLng = On;
const In = Object.defineProperty(C("shareDuration"), "name", {
  value: "getShareDuration"
});
exports.getShareDuration = In;
const Rn = Object.defineProperty(C("finalLat"), "name", {
  value: "getFinalLat"
});
exports.getFinalLat = Rn;
const Nn = Object.defineProperty(C("finalLng"), "name", {
  value: "getFinalLng"
});
exports.getFinalLng = Nn;
const Dn = Object.defineProperty(C("star", {
  default: false
}), "name", {
  value: "getStar"
});
exports.getStar = Dn;
const wn = Object.defineProperty(C("currencyCode"), "name", {
  value: "getCurrencyCode"
});
exports.getCurrencyCode = wn;
const Ln = Object.defineProperty(C("priceAmount1000"), "name", {
  value: "getPriceAmount1000"
});
exports.getPriceAmount1000 = Ln;
const kn = Object.defineProperty(C("salePriceAmount1000"), "name", {
  value: "getSalePriceAmount1000"
});
exports.getSalePriceAmount1000 = kn;
const Gn = Object.defineProperty(C("isVcardOverMmsDocument", {
  default: false
}), "name", {
  value: "getIsVcardOverMmsDocument"
});
exports.getIsVcardOverMmsDocument = Gn;
const Un = Object.defineProperty(C("interactiveAnnotations"), "name", {
  value: "getInteractiveAnnotations"
});
exports.getInteractiveAnnotations = Un;
const xn = Object.defineProperty(C("messageSecret"), "name", {
  value: "getMessageSecret"
});
exports.getMessageSecret = xn;
const Bn = Object.defineProperty(C("broadcastId"), "name", {
  value: "getBroadcastId"
});
exports.getBroadcastId = Bn;
const Fn = Object.defineProperty(C("broadcast", {
  default: false
}), "name", {
  value: "getBroadcast"
});
exports.getBroadcast = Fn;
const jn = Object.defineProperty(C("vcardList", {
  getDefault: () => []
}), "name", {
  value: "getVcardList"
});
exports.getVcardList = jn;
const Yn = Object.defineProperty(C("vcardFormattedName"), "name", {
  value: "getVcardFormattedName"
});
exports.getVcardFormattedName = Yn;
const Kn = Object.defineProperty(C("labels", {
  getDefault: () => []
}), "name", {
  value: "getLabels"
});
exports.getLabels = Kn;
const Wn = Object.defineProperty(C("agentId"), "name", {
  value: "getAgendId"
});
exports.getAgendId = Wn;
const Vn = Object.defineProperty(C("url"), "name", {
  value: "getUrl"
});
exports.getUrl = Vn;
const Hn = Object.defineProperty(C("retailerId"), "name", {
  value: "getRetailerId"
});
exports.getRetailerId = Hn;
const $n = Object.defineProperty(C("businessOwnerJid"), "name", {
  value: "getBusinessOwnerJid"
});
exports.getBusinessOwnerJid = $n;
const zn = Object.defineProperty(C("productId"), "name", {
  value: "getProductId"
});
exports.getProductId = zn;
const qn = Object.defineProperty(C("productImageCount"), "name", {
  value: "getProductImageCount"
});
exports.getProductImageCount = qn;
const Jn = Object.defineProperty(C("isMdHistoryMsg", {
  default: false
}), "name", {
  value: "getIsMdHistoryMsg"
});
exports.getIsMdHistoryMsg = Jn;
const Qn = Object.defineProperty(C("campaignId"), "name", {
  value: "getCampaignId"
});
exports.getCampaignId = Qn;
const Xn = Object.defineProperty(C("filename"), "name", {
  value: "getFilename"
});
exports.getFilename = Xn;
const Zn = Object.defineProperty(C("smbClientCampaignId"), "name", {
  value: "getSmbClientCampaignId"
});
exports.getSmbClientCampaignId = Zn;
const er = Object.defineProperty(C("isCaptionByUser", {
  default: false
}), "name", {
  value: "getIsCaptionByUser"
});
exports.getIsCaptionByUser = er;
const tr = Object.defineProperty(C("doNotPlayInline"), "name", {
  value: "getDoNotPlayInline"
});
exports.getDoNotPlayInline = tr;
const nr = Object.defineProperty(C("thumbnailDirectPath"), "name", {
  value: "getThumbnailDirectPath"
});
exports.getThumbnailDirectPath = nr;
const rr = Object.defineProperty(C("thumbnailHeight"), "name", {
  value: "getThumbnailHeight"
});
exports.getThumbnailHeight = rr;
const ir = Object.defineProperty(C("thumbnailWidth"), "name", {
  value: "getThumbnailWidth"
});
exports.getThumbnailWidth = ir;
const ar = Object.defineProperty(C("orderTitle"), "name", {
  value: "getOrderTitle"
});
exports.getOrderTitle = ar;
const or = Object.defineProperty(C("itemCount"), "name", {
  value: "getItemCount"
});
exports.getItemCount = or;
const sr = Object.defineProperty(C("totalAmount1000"), "name", {
  value: "getTotalAmount1000"
});
exports.getTotalAmount1000 = sr;
const lr = Object.defineProperty(C("totalCurrencyCode"), "name", {
  value: "getTotalCurrencyCode"
});
exports.getTotalCurrencyCode = lr;
const ur = Object.defineProperty(C("futureproofType"), "name", {
  value: "getFutureproofType"
});
exports.getFutureproofType = ur;
const cr = Object.defineProperty(C("futureproofSubtype"), "name", {
  value: "getFutureproofSubtype"
});
exports.getFutureproofSubtype = cr;
const dr = Object.defineProperty(C("ephemeralOutOfSync"), "name", {
  value: "getEphemeralOutOfSync"
});
exports.getEphemeralOutOfSync = dr;
const pr = Object.defineProperty(C("isAvatar"), "name", {
  value: "getIsAvatar"
});
exports.getIsAvatar = pr;
const fr = Object.defineProperty(C("bizPrivacyStatus"), "name", {
  value: "getBizPrivacyStatus"
});
exports.getBizPrivacyStatus = fr;
const _r = Object.defineProperty(C("verifiedBizName"), "name", {
  value: "getVerifiedBizName"
});
exports.getVerifiedBizName = _r;
const gr = Object.defineProperty(C("canonicalUrl", {
  default: ""
}), "name", {
  value: "getCanonicalUrl"
});
exports.getCanonicalUrl = gr;
const mr = Object.defineProperty(C("mediaKey"), "name", {
  value: "getMediaKey"
});
exports.getMediaKey = mr;
const hr = Object.defineProperty(C("message", {
  default: ""
}), "name", {
  value: "getMessage"
});
exports.getMessage = hr;
const yr = Object.defineProperty(C("size", {
  default: 0
}), "name", {
  value: "getSize"
});
exports.getSize = yr;
const Er = Object.defineProperty(C("bizSource"), "name", {
  value: "getBizSource"
});
exports.getBizSource = Er;
const Sr = Object.defineProperty(P(e => {
  let [t] = e;
  return t === "bot_unavailable_fanout";
}, [L]), "name", {
  value: "getIsBotFutureproofPlaceholder"
});
exports.getIsBotFutureproofPlaceholder = Sr;
const vr = Object.defineProperty(P(e => {
  let [t, n] = e;
  if (t.remote.isBot()) {
    return t.fromMe;
  } else {
    return n != null && n.some(e => e.isBot());
  }
}, [k, ne]), "name", {
  value: "getIsBotQuery"
});
exports.getIsBotQuery = vr;
const Tr = Object.defineProperty(P(e => {
  let [t] = e;
  return t === c.BizBotType.BIZ_1P;
}, [Te]), "name", {
  value: "getIsBizBot1pResponse"
});
exports.getIsBizBot1pResponse = Tr;
const Mr = Object.defineProperty(P(e => {
  let [t] = e;
  return t === c.BizBotType.BIZ_3P;
}, [Te]), "name", {
  value: "getIsBizBot3pResponse"
});
exports.getIsBizBot3pResponse = Mr;
const Ar = Object.defineProperty(C("botPluginSearchProvider"), "name", {
  value: "getBotPluginSearchProvider"
});
exports.getBotPluginSearchProvider = Ar;
const br = Object.defineProperty(C("botPluginSearchUrl"), "name", {
  value: "getBotPluginSearchUrl"
});
exports.getBotPluginSearchUrl = br;
const Cr = Object.defineProperty(C("botResponseTargetId"), "name", {
  value: "getBotResponseTargetId"
});
exports.getBotResponseTargetId = Cr;
const Pr = Object.defineProperty(C("botPluginType"), "name", {
  value: "getBotPluginType"
});
exports.getBotPluginType = Pr;
const Or = Object.defineProperty(P(e => {
  let [t, n] = e;
  return t != null && n != null;
}, [Ar, br]), "name", {
  value: "getIsBotSearchResponse"
});
exports.getIsBotSearchResponse = Or;
const Ir = Object.defineProperty(P(e => {
  let [t] = e;
  return (t == null ? undefined : t.isBot()) === true;
}, [Fe]), "name", {
  value: "getIsMetaBotResponse"
});
exports.getIsMetaBotResponse = Ir;
const Rr = Object.defineProperty(P(e => {
  let [t, n] = e;
  return Boolean(t && (n == null ? undefined : n.isSameAccount((0, v.getMeUser)())));
}, [Ir, Me]), "name", {
  value: "isMetaBotResponseToMyInvoke"
});
exports.isMetaBotResponseToMyInvoke = Rr;
const Nr = Object.defineProperty(P(e => {
  let [t, n] = e;
  return n && !t.remote.isBot();
}, [k, Ir]), "name", {
  value: "getIsMetaBotInvokeResponse"
});
exports.getIsMetaBotInvokeResponse = Nr;
const Dr = Object.defineProperty(P(e => {
  let [t, n, r] = e;
  return t || n || r;
}, [Ir, Tr, Mr]), "name", {
  value: "getIsBotResponse"
});
exports.getIsBotResponse = Dr;
const wr = Object.defineProperty(P(e => {
  let [t, n] = e;
  return t === E.MSG_TYPE.PROTOCOL && n === "bot_feedback";
}, [w, L]), "name", {
  value: "getIsBotFeedbackMessage"
});
exports.getIsBotFeedbackMessage = wr;
const Lr = Object.defineProperty(C("hsmTag"), "name", {
  value: "getHsmTag"
});
exports.getHsmTag = Lr;
const kr = Object.defineProperty(P(e => {
  let [t] = e;
  return t === d.HSM_TAG_TYPE.AUTHENTICATION;
}, [Lr]), "name", {
  value: "getIsAuthenticationMessage"
});
exports.getIsAuthenticationMessage = kr;
const Gr = Object.defineProperty(C("botRespOrInvocationRevokeBotWid"), "name", {
  value: "getBotRespOrInvocationRevokeBotWid"
});
exports.getBotRespOrInvocationRevokeBotWid = Gr;
const Ur = Object.defineProperty(P(e => {
  let [t, n] = e;
  return Boolean((t == null ? undefined : t.isBot()) && n);
}, [Gr, on]), "name", {
  value: "getIsRevokeForMsgFromOrDeliveredToBot"
});
exports.getIsRevokeForMsgFromOrDeliveredToBot = Ur;
const xr = Object.defineProperty(P(e => {
  let [t, n] = e;
  return n && t === S.BotPluginMetadata$PluginType.SEARCH;
}, [Pr, Ir]), "name", {
  value: "getIsBotPluginCarouselMsg"
});
exports.getIsBotPluginCarouselMsg = xr;