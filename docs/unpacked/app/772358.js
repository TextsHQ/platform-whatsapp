var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Msg = undefined;
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/81109.js"));
var o = r(require("../vendor/23279.js"));
var s = r(require("../vendor/957557.js"));
var l = require("./652204.js");
var u = require("./632157.js");
var c = require("./724976.js");
var d = require("./402994.js");
var p = require("./12643.js");
var f = require("./481173.js");
var _ = require("./388536.js");
var g = require("./354458.js");
var m = require("./169571.js");
var h = require("./37237.js");
var y = require("./817649.js");
var E = r(require("./482503.js"));
var S = require("./642838.js");
var v = require("./534422.js");
var T = require("./374660.js");
var M = require("./780549.js");
var A = require("./445729.js");
var b = r(require("./846870.js"));
var C = require("./177938.js");
var P = require("./891244.js");
var O = require("./263079.js");
var I = require("./448609.js");
var R = require("./56884.js");
var N = r(require("./495976.js"));
var D = r(require("./799132.js"));
var w = require("./714574.js");
var L = require("./163755.js");
var k = r(require("./97359.js"));
var G = ue(require("./644234.js"));
var U = r(require("./116253.js"));
var x = require("./172259.js");
var B = require("./97858.js");
var F = require("./114850.js");
var j = require("./787742.js");
var Y = r(require("./565754.js"));
var K = require("./435711.js");
var W = ue(require("./430231.js"));
var V = require("./373070.js");
var H = require("./971804.js");
var $ = require("./525119.js");
var z = require("./375399.js");
var q = require("./387183.js");
var J = r(require("./241995.js"));
var Q = require("./459857.js");
var X = require("./517660.js");
var Z = require("./239870.js");
var ee = require("./987884.js");
var te = require("./885313.js");
var ne = require("./816793.js");
var re = r(require("./124928.js"));
var ie = require("./931019.js");
var ae = r(require("./556869.js"));
var oe = r(require("./286816.js"));
var se = r(require("../vendor/667294.js"));
function le(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (le = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function ue(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = le(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}
class ce extends f.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, f.prop)();
    this.rowId = (0, f.prop)();
    this.serverId = (0, f.prop)();
    this.viewCount = (0, f.prop)();
    this.viewed = (0, f.prop)(false);
    this.body = (0, f.prop)();
    this.type = (0, f.prop)();
    this.subtype = (0, f.prop)();
    this.t = (0, f.prop)();
    this.revokeTimestamp = (0, f.prop)();
    this.notifyName = (0, f.prop)();
    this.from = (0, f.prop)();
    this.to = (0, f.prop)();
    this.author = (0, f.prop)();
    this.self = (0, f.prop)("in");
    this.ack = (0, f.prop)();
    this.invis = (0, f.prop)();
    this.isNewMsg = (0, f.prop)();
    this.star = (0, f.prop)(false);
    this.kicKey = (0, f.prop)();
    this.kicState = (0, f.prop)();
    this.kicTimestampMs = (0, f.prop)();
    this.kicNotified = (0, f.prop)(false);
    this.keepType = (0, f.prop)();
    this.keptMessageKey = (0, f.prop)();
    this.keptCount = (0, f.prop)();
    this.recvFresh = (0, f.prop)();
    this.caption = (0, f.prop)();
    this.interactiveAnnotations = (0, f.prop)();
    this.contextInfo = (0, f.prop)();
    this.clientUrl = (0, f.prop)();
    this.loc = (0, f.prop)();
    this.lat = (0, f.prop)();
    this.lng = (0, f.prop)();
    this.isLive = (0, f.prop)();
    this.accuracy = (0, f.prop)();
    this.speed = (0, f.prop)();
    this.degrees = (0, f.prop)();
    this.comment = (0, f.prop)();
    this.sequence = (0, f.prop)();
    this.shareDuration = (0, f.prop)();
    this.finalLat = (0, f.prop)();
    this.finalLng = (0, f.prop)();
    this.finalAccuracy = (0, f.prop)();
    this.finalThumbnail = (0, f.prop)();
    this.finalSpeed = (0, f.prop)();
    this.finalDegrees = (0, f.prop)();
    this.finalTimeOffset = (0, f.prop)();
    this.deprecatedMms3Url = (0, f.prop)();
    this.directPath = (0, f.prop)();
    this.mimetype = (0, f.prop)();
    this.duration = (0, f.prop)();
    this.filehash = (0, f.prop)();
    this.encFilehash = (0, f.prop)();
    this.size = (0, f.prop)();
    this.filename = (0, f.prop)();
    this.streamingSidecar = (0, f.prop)();
    this.mediaKey = (0, f.prop)();
    this.mediaKeyTimestamp = (0, f.prop)();
    this.pageCount = (0, f.prop)();
    this.isGif = (0, f.prop)();
    this.gifAttribution = (0, f.prop)();
    this.isViewOnce = (0, f.prop)();
    this.streamable = (0, f.prop)();
    this.width = (0, f.prop)();
    this.height = (0, f.prop)();
    this.thumbnailDirectPath = (0, f.prop)();
    this.thumbnailSha256 = (0, f.prop)();
    this.thumbnailEncSha256 = (0, f.prop)();
    this.thumbnailHeight = (0, f.prop)();
    this.thumbnailWidth = (0, f.prop)();
    this.waveform = (0, f.prop)();
    this.staticUrl = (0, f.prop)();
    this.stickerPackId = (0, f.prop)();
    this.stickerPackName = (0, f.prop)();
    this.stickerPackPublisher = (0, f.prop)();
    this.mediaHandle = (0, f.prop)();
    this.scanLengths = (0, f.prop)();
    this.scansSidecar = (0, f.prop)();
    this.isFromTemplate = (0, f.prop)(false);
    this.devicesAdded = (0, f.prop)();
    this.devicesRemoved = (0, f.prop)();
    this.isThisDeviceAdded = (0, f.prop)();
    this.firstFrameLength = (0, f.prop)();
    this.firstFrameSidecar = (0, f.prop)();
    this.isAnimated = (0, f.prop)();
    this.canonicalUrl = (0, f.prop)();
    this.matchedText = (0, f.prop)();
    this.thumbnail = (0, f.prop)();
    this.thumbnailHQ = (0, f.prop)();
    this.richPreviewType = (0, f.prop)();
    this.doNotPlayInline = (0, f.prop)();
    this.rcat = (0, f.prop)();
    this.title = (0, f.prop)();
    this.description = (0, f.prop)();
    this.businessOwnerJid = (0, f.prop)();
    this.productId = (0, f.prop)();
    this.currencyCode = (0, f.prop)();
    this.priceAmount1000 = (0, f.prop)();
    this.salePriceAmount1000 = (0, f.prop)();
    this.retailerId = (0, f.prop)();
    this.url = (0, f.prop)();
    this.productImageCount = (0, f.prop)();
    this.sessionId = (0, f.prop)();
    this.pollName = (0, f.prop)();
    this.pollOptions = (0, f.prop)();
    this.pollSelectableOptionsCount = (0, f.prop)();
    this.pollInvalidated = (0, f.prop)(false);
    this.isSentCagPollCreation = (0, f.prop)(false);
    this.pollUpdateParentKey = (0, f.prop)();
    this.encPollVote = (0, f.prop)();
    this.selectedOptionLocalIds = (0, f.prop)();
    this.senderTimestampMs = (0, f.prop)();
    this.latestEditMsgKey = (0, f.prop)(null);
    this.latestEditSenderTimestampMs = (0, f.prop)(null);
    this.editMsgType = (0, f.prop)();
    this.recipients = (0, f.prop)();
    this.broadcast = (0, f.prop)();
    this.quotedMsg = (0, f.prop)();
    this.quotedStanzaID = (0, f.prop)();
    this.quotedRemoteJid = (0, f.prop)();
    this.quotedParticipant = (0, f.prop)();
    this.quotedGroupSubject = (0, f.prop)();
    this.quotedParentGroupJid = (0, f.prop)();
    this.mentionedJidList = (0, f.prop)();
    this.reporterJidList = (0, f.prop)();
    this.groupMentions = (0, f.prop)();
    this.footer = (0, f.prop)();
    this.hydratedButtons = (0, f.prop)();
    this.buttons = (0, f.session)();
    this.hsmTag = (0, f.prop)();
    this.hsmCategory = (0, f.prop)();
    this.templateId = (0, f.prop)();
    this.selectedId = (0, f.prop)();
    this.selectedIndex = (0, f.prop)();
    this.multicast = (0, f.prop)();
    this.urlText = (0, f.prop)();
    this.urlNumber = (0, f.prop)();
    this.clearMedia = (0, f.prop)();
    this.isVcardOverMmsDocument = (0, f.prop)(false);
    this.isCaptionByUser = (0, f.prop)();
    this.vcardList = (0, f.prop)();
    this.vcardFormattedName = (0, f.prop)();
    this.revokeSender = (0, f.prop)();
    this.protocolMessageKey = (0, f.prop)();
    this.futureproofBuffer = (0, f.prop)();
    this.futureproofParams = (0, f.prop)();
    this.futureproofType = (0, f.prop)();
    this.futureproofSubtype = (0, f.prop)();
    this.templateParams = (0, f.prop)();
    this.textColor = (0, f.prop)();
    this.backgroundColor = (0, f.prop)();
    this.font = (0, f.prop)();
    this.campaignId = (0, f.prop)();
    this.campaignDuration = (0, f.prop)();
    this.actionLink = (0, f.prop)();
    this.statusPSAReadTimestamp = (0, f.prop)();
    this.isForwarded = (0, f.prop)(false);
    this.forwardingScore = (0, f.prop)();
    this.labels = (0, f.prop)();
    this.hasReaction = (0, f.prop)(false);
    this.paymentCurrency = (0, f.prop)();
    this.paymentAmount1000 = (0, f.prop)();
    this.paymentMessageReceiverJid = (0, f.prop)();
    this.paymentTransactionTimestamp = (0, f.prop)();
    this.paymentStatus = (0, f.prop)();
    this.paymentTxnStatus = (0, f.prop)();
    this.paymentNoteMsg = (0, f.prop)();
    this.paymentRequestMessageKey = (0, f.prop)();
    this.paymentExpiryTimestamp = (0, f.prop)();
    this.paymentInviteServiceType = (0, f.prop)();
    this.paymentBackground = (0, f.prop)();
    this.ephemeralDuration = (0, f.prop)();
    this.ephemeralSettingTimestamp = (0, f.prop)();
    this.ephemeralOutOfSync = (0, f.prop)();
    this.ephemeralSharedSecret = (0, f.prop)();
    this.disappearingModeInitiator = (0, f.prop)();
    this.ephemeralSettingUser = (0, f.prop)();
    this.disappearingModeTrigger = (0, f.prop)();
    this.disappearingModeInitiatedByMe = (0, f.prop)();
    this.messageSecret = (0, f.prop)();
    this.originalSelfAuthor = (0, f.prop)();
    this.bizPrivacyStatus = (0, f.prop)();
    this.privacyModeWhenSent = (0, f.prop)();
    this.verifiedBizName = (0, f.prop)();
    this.inviteCode = (0, f.prop)();
    this.inviteCodeExp = (0, f.prop)();
    this.inviteGrp = (0, f.prop)();
    this.inviteGrpName = (0, f.prop)();
    this.inviteGrpJpegThum = (0, f.prop)();
    this.inviteGrpType = (0, f.prop)();
    this.sellerJid = (0, f.prop)();
    this.message = (0, f.prop)();
    this.orderTitle = (0, f.prop)();
    this.itemCount = (0, f.prop)();
    this.orderId = (0, f.prop)();
    this.surface = (0, f.prop)();
    this.status = (0, f.prop)();
    this.token = (0, f.prop)();
    this.totalAmount1000 = (0, f.prop)();
    this.totalCurrencyCode = (0, f.prop)();
    this.historySyncMetaData = (0, f.prop)();
    this.isSendFailure = (0, f.prop)();
    this.errorCode = (0, f.prop)();
    this.appStateSyncKeyShare = (0, f.prop)();
    this.appStateSyncKeyRequest = (0, f.prop)();
    this.appStateFatalExceptionNotification = (0, f.prop)();
    this.peerDataOperationRequestMessage = (0, f.prop)();
    this.peerDataOperationRequestResponseMessage = (0, f.prop)();
    this.broadcastParticipants = (0, f.prop)();
    this.broadcastEphSettings = (0, f.prop)();
    this.broadcastId = (0, f.prop)();
    this.smbClientCampaignId = (0, f.prop)();
    this.ctwaContext = (0, f.prop)();
    this.utm = (0, f.session)();
    this.list = (0, f.prop)();
    this.listResponse = (0, f.prop)();
    this.productListItemCount = (0, f.prop)();
    this.productHeaderImageRejected = (0, f.prop)(false);
    this.agentId = (0, f.prop)();
    this.lastPlaybackProgress = (0, f.prop)(0);
    this.local = (0, f.session)(false);
    this.search = (0, f.session)();
    this.msgChunk = (0, f.session)();
    this.startOfDay = (0, f.session)();
    this.startOfDaySkew = (0, f.session)();
    this.quotedMsgKey = (0, f.session)();
    this.isQuotedMsgAvailable = (0, f.session)(true);
    this.fromQuotedMsg = (0, f.session)(false);
    this.senderObj = (0, f.session)();
    this.mediaData = (0, f.session)();
    this.forwardedFromWeb = (0, f.session)(false);
    this.nonce = (0, f.session)();
    this.squelch = (0, f.session)();
    this.wamMessageSendReporter = (0, f.session)();
    this.wamMessageSendPerfReporter = (0, f.session)();
    this.pendingDeleteForMe = (0, f.session)(false);
    this.isDynamicReplyButtonsMsg = (0, f.prop)(false);
    this.dynamicReplyButtons = (0, f.prop)();
    this.replyButtons = (0, f.session)();
    this.buttonsResponse = (0, f.prop)();
    this.selectedButtonId = (0, f.prop)();
    this.headerType = (0, f.prop)();
    this.nativeFlowName = (0, f.prop)();
    this.nativeFlowButtons = (0, f.prop)();
    this.interactiveHeader = (0, f.prop)();
    this.interactiveType = (0, f.prop)();
    this.interactivePayload = (0, f.prop)();
    this.carouselCardsParsed = (0, f.prop)();
    this.carouselCards = (0, f.session)();
    this.isCarouselCard = (0, f.session)(false);
    this.reactionParentKey = (0, f.prop)();
    this.reactionText = (0, f.prop)();
    this.reactionTimestamp = (0, f.prop)();
    this.targetMessageKey = (0, f.prop)();
    this.encIv = (0, f.prop)();
    this.encPayload = (0, f.prop)();
    this.pinParentKey = (0, f.prop)();
    this.pinMessageType = (0, f.prop)();
    this.pinSenderTimestampMs = (0, f.prop)();
    this.pinExpiryDuration = (0, f.prop)();
    this.revokeDuration = (0, f.session)();
    this.isMdHistoryMsg = (0, f.prop)(false);
    this.stickerSentTs = (0, f.prop)(0);
    this.isAvatar = (0, f.prop)(false);
    this.bizSource = (0, f.prop)();
    this.pmCampaignId = (0, f.prop)();
    this.lastUpdateFromServerTs = (0, f.prop)(0);
    this.botEditType = (0, f.prop)();
    this.invokedBotWid = (0, f.prop)(null);
    this.botMessageSecret = (0, f.prop)();
    this.botFeedbackKind = (0, f.prop)();
    this.botFeedbackText = (0, f.prop)();
    this.botTargetSenderJid = (0, f.prop)();
    this.bizBotType = (0, f.prop)(null);
    this.botPersonaId = (0, f.prop)();
    this.activeBotMsgStreamingInProgress = (0, f.session)(false);
    this.botEditTimeoutID = (0, f.session)();
    this.lastBotEditBodyLength = (0, f.session)();
    this.botEditTargetId = (0, f.session)();
    this.botRespOrInvocationRevokeBotWid = (0, f.session)(null);
    this.botResponseTargetId = (0, f.prop)(null);
    this.botPluginType = (0, f.prop)(null);
    this.botPluginReferenceIndex = (0, f.prop)(null);
    this.botPluginSearchProvider = (0, f.prop)(null);
    this.botPluginSearchUrl = (0, f.prop)(null);
    this.forwardedNewsletterMessageInfo = (0, f.prop)();
    this.encryptedData = (0, f.prop)();
    this._links = (0, f.session)(() => []);
    this._headerLinks = (0, f.session)(() => []);
    this._footerLinks = (0, f.session)(() => []);
    this.linksIndexParsed = (0, f.session)(0);
    this._pollOptionsToLinks = (0, f.session)();
    this._phoneNumbers = (0, f.session)(() => []);
    this._headerPhoneNumbers = (0, f.session)(() => []);
    this._footerPhoneNumbers = (0, f.session)(() => []);
    this.phoneNumbersIndexParsed = (0, f.session)(0);
    this._waitForPhoneUploadPromise = (0, f.session)();
    this.requiresDirectConnection = (0, f.prop)(null);
    this.isOverwrittenByRevoke = (0, f.session)(false);
    this._saveLastPlaybackProgress = (0, o.default)((e, t) => {
      (0, P.updateMessageTable)(e, {
        lastPlaybackProgress: t
      });
    }, 500);
  }
  initialize() {
    super.initialize();
    if (this.carouselCardsParsed != null) {
      this._initCarouselCards();
    }
    this._pendingAckUpdate = new l.PromiseQueue();
    const e = (0, j.getSender)(this);
    if (e) {
      this.addChild("senderObj", C.ContactCollection.gadd(e));
    } else {
      switch (this.type) {
        case V.MSG_TYPE.NOTIFICATION:
        case V.MSG_TYPE.NOTIFICATION_TEMPLATE:
        case V.MSG_TYPE.GP2:
        case V.MSG_TYPE.BROADCAST_NOTIFICATION:
        case V.MSG_TYPE.E2E_NOTIFICATION:
        case V.MSG_TYPE.CALL_LOG:
        case V.MSG_TYPE.PROTOCOL:
          break;
        default:
          __LOG__(2)`msg:msg with no sender id:${this.id.toString()}, from:${this.from.toString()}, author:${this.author && this.author.toString()}, type:${this.type}`;
      }
    }
    var t;
    var n;
    this.mentionedJidList = this.mentionedJidList || [];
    this.groupMentions = this.groupMentions || [];
    this.mentionedJidList.forEach(e => C.ContactCollection.gadd(e));
    if (this.type === V.MSG_TYPE.CIPHERTEXT) {
      this.listenToOnce(this, "change:type", this._handleCiphertextDecrypted);
    }
    this.mediaObject = undefined;
    if (W.typeIsMms(this)) {
      this._createMediaDataChild();
      if (!(this.isViewOnce && !(0, Z.isUnviewed)(this.safe()))) {
        G.registerMsg(this);
      }
    }
    if (A.Conn.isSMB) {
      (0, _.initializeLabels)(this);
    }
    if (this.isViewOnce) {
      this.listenTo(this, "change:ack", this._handleViewOnceMediaStatusChanged);
      this.listenTo(this.mediaData, "change:mediaStage", this._handleViewOnceMediaStatusChanged);
    }
    if ((0, g.isBotReceiveEnabled)()) {
      if ((0, j.getIsMetaBotResponse)(this)) {
        this.listenTo(this, "change:botEditType", this._handleBotTypingIndicatorTimeout);
      }
      if (this.recvFresh && ((t = this.senderObj) === null || t === undefined || (n = t.id) === null || n === undefined ? undefined : n.isBot())) {
        this.activeBotMsgStreamingInProgress = true;
      }
      this._handleBotTypingIndicatorTimeout();
    }
  }
  _initCarouselCards() {
    const e = this.carouselCardsParsed;
    if (e == null) {
      return;
    }
    const t = new ((0, k.default)(require("./282215.js")))();
    const r = e.map(e => (0, a.default)({}, e));
    t.add(r);
    this.carouselCards = t;
  }
  _handleBotTypingIndicatorTimeout() {
    if (!(0, g.isBotReceiveEnabled)()) {
      return;
    }
    if (this.subtype === m.BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE) {
      const e = (0, m.getBotTypingIndicatorTimeout)();
      self.setTimeout(() => {
        this.delete();
      }, e);
      return void (0, E.default)({
        id: this.id.remote,
        type: "typing"
      });
    }
    const e = this.botEditType;
    if (e == null) {
      return;
    }
    const t = (0, m.getBotTypingIndicatorTimeout)();
    switch (e) {
      case h.BotMsgEditType.LAST:
      case h.BotMsgEditType.FULL:
        this.activeBotMsgStreamingInProgress = false;
        return void (this.botEditTimeoutID && self.clearTimeout(this.botEditTimeoutID));
      default:
        this.botEditTimeoutID = self.setTimeout(() => {
          this.activeBotMsgStreamingInProgress = false;
          this.botEditType = h.BotMsgEditType.LAST;
          (0, P.updateMessageTable)(this.id, {
            botEditType: h.BotMsgEditType.LAST
          });
        }, t);
    }
  }
  getRawLinks() {
    return this._links;
  }
  setRawLinks(e) {
    if (e.length > 0) {
      this._links = e;
    }
  }
  clearRawLinks() {
    this._links = [];
    this.linksIndexParsed = 0;
  }
  getRawPollOptionsToLinks() {
    return this._pollOptionsToLinks;
  }
  setRawPollOptionsToLinks(e) {
    this._pollOptionsToLinks = e;
  }
  getRawHeaderLinks() {
    return this._headerLinks;
  }
  setRawHeaderLinks(e) {
    if (e.length > 0) {
      this._headerLinks = e;
    }
  }
  getRawFooterLinks() {
    return this._footerLinks;
  }
  setRawFooterLinks(e) {
    if (e.length > 0) {
      this._footerLinks = e;
    }
  }
  getRawPhoneNumbers() {
    return this._phoneNumbers;
  }
  setRawPhoneNumbers(e) {
    if (e.length > 0) {
      this._phoneNumbers = e;
    }
  }
  clearRawPhoneNumbers() {
    this._phoneNumbers = [];
    this.phoneNumbersIndexParsed = 0;
  }
  getRawHeaderPhoneNumbers() {
    return this._headerPhoneNumbers;
  }
  setRawHeaderPhoneNumbers(e) {
    if (e.length > 0) {
      this._headerPhoneNumbers = e;
    }
  }
  getRawFooterPhoneNumbers() {
    return this._footerPhoneNumbers;
  }
  setRawFooterPhoneNumbers(e) {
    if (e.length > 0) {
      this._footerPhoneNumbers = e;
    }
  }
  _createMediaDataChild() {
    this.addChild("mediaData", new U.default());
  }
  mayFail() {
    return (0, j.getIsSentByMe)(this) && this.ack < d.ACK.SENT;
  }
  isUnsentPhoneMsg() {
    return !this.local && (0, j.getIsSentByMe)(this) && this.ack < d.ACK.SENT;
  }
  supportsStarWithKeepInChat() {
    return (0, j.getIsEphemeral)(this) && (this.star || this.isGif || (0, j.getIsStickerMsg)(this));
  }
  interactiveButtonsReleased() {
    return this.isFromTemplate || !(0, L.getHasTemplateButtons)(this) && this.type !== V.MSG_TYPE.TEMPLATE_BUTTON_REPLY;
  }
  getVcardWids() {
    if (this.type !== V.MSG_TYPE.VCARD) {
      return null;
    } else {
      return (0, X.vcardWids)((0, j.getVcard)(this));
    }
  }
  getLocObject() {
    const e = this.loc;
    if (e) {
      const [t, n = null] = e.split("\n");
      return {
        name: t,
        addr: n
      };
    }
    return null;
  }
  resumeRemoteUpload() {
    if ((0, j.getIsNewsletterMsg)(this)) {
      return G.resumeUploadMsg(this);
    } else {
      if (this.isUnsentPhoneMsg()) {
        (0, q.sendMsgRecord)(this);
      }
      return this.forceDownloadMediaEvenIfExpensive();
    }
  }
  forceRMR() {
    return Promise.reject((0, ae.default)("unimplemented forceRMR"));
  }
  isForcingRMR() {
    return false;
  }
  cancelDownload() {
    G.cancelDownloadMsg(this);
  }
  resumeUpload() {
    if (this.mediaData.mediaStage !== x.MEDIA_DATA_STAGE.NEED_UPLOAD) {
      __LOG__(4, undefined, new Error(), true)`resumeUpload called while state was ${this.mediaData.mediaStage}`;
      SEND_LOGS("resume-non-need-upload");
    }
    return G.resumeUploadMsg(this).then(e => e == null ? undefined : e.messageSendResult);
  }
  cancelUpload() {
    G.cancelUploadMsg(this);
  }
  waitForPhoneUpload() {
    var e = this;
    return (0, i.default)(function* () {
      if (!(Boolean(e.mediaData.filehash) && !e.isUnsentPhoneMsg())) {
        if (!e._waitForPhoneUploadPromise) {
          e._waitForPhoneUploadPromise = (0, D.default)(e.mediaData, "change:mediaStage change:filehash", () => Boolean(e.mediaData.filehash) && !e.isUnsentPhoneMsg());
        }
        yield e._waitForPhoneUploadPromise;
        e._waitForPhoneUploadPromise = null;
      }
    })();
  }
  forceDownloadMediaEvenIfExpensive() {
    return this.downloadMedia({
      downloadEvenIfExpensive: true,
      rmrReason: te.WEBC_RMR_REASON_CODE.MSG_CLICK,
      isUserInitiated: true
    });
  }
  downloadMedia(e) {
    var t;
    if ((0, L.getAsRevoked)(this)) {
      return Promise.resolve();
    }
    const {
      downloadEvenIfExpensive: n,
      rmrReason: r,
      isUserInitiated: i,
      isAutoDownload: a
    } = e;
    if (!i && !(0, K.isTrusted)(this)) {
      return Promise.resolve();
    }
    if (!(0, j.getIsStatusV3)(this) && (0, L.getChat)(this).isSuspendedOrTerminated() && (0, B.isGroupSuspendV2Enabled)()) {
      if (i) {
        F.ModalManager.open(se.default.createElement(J.default, null), {
          transition: "modal-flow"
        });
      }
      return Promise.resolve();
    }
    if (!(0, L.getAsMms)(this)) {
      __LOG__(4, undefined, new Error(), true)`id: ${this.id.toString()} type: ${this.type}`;
      SEND_LOGS("media-fault: downloadMedia msg is not mms type");
    }
    if (this.isUnsentPhoneMsg()) {
      let t = this._waitForPhoneUploadPromise;
      if (!t) {
        t = this._waitForPhoneUploadPromise = (0, D.default)(this.mediaData, "change:mediaStage change:filehash", () => !!this.mediaData.filehash && !this.isUnsentPhoneMsg()).then(() => {
          this._waitForPhoneUploadPromise = null;
        });
      }
      return t.then(() => this.downloadMedia(e));
    }
    return G.downloadMsg({
      msg: this,
      isUserClick: r === te.WEBC_RMR_REASON_CODE.MSG_CLICK,
      downloadEvenIfExpensive: n,
      rmrReason: r,
      rmrData: this._getRmrData(r),
      mode: i ? "manual" : "auto",
      isAutoDownload: a,
      chatWid: (t = (0, L.getMaybeChat)(this)) === null || t === undefined ? undefined : t.id
    });
  }
  _getRmrData(e) {
    const t = {
      webcRmrReason: e,
      webcMessageT: this.t
    };
    const n = (0, L.getMaybeChat)(this);
    if (n) {
      t.webcChatType = n.getWebcChatType();
      if (n.initialIndex != null) {
        t.webcChatPosition = n.initialIndex;
      }
      const {
        msgChunk: e
      } = this;
      if (e && e === n.msgs) {
        t.webcMessageIndex = e.length - e.indexOf(this) - 1;
      }
    }
    return t;
  }
  applyUpdate(e) {
    if (e.type && this.type !== e.type && W.typeIsMms(e)) {
      if (!(this.type === V.MSG_TYPE.CIPHERTEXT || (0, j.getIsFutureproof)(this))) {
        __LOG__(4, undefined, new Error(), true)`updated ${this.id.toString()} from ${this.type} to ${String(e.type)}`;
        SEND_LOGS("invalid-type-update");
      }
      this._createMediaDataChild();
      G.registerMsgEarly(this, e);
      return G.prepareMsg(this).then(() => {
        this.set(e);
      }).catch(e => {
        __LOG__(4, undefined, new Error(), true)`error = ${String(e)}`;
        SEND_LOGS("preregister-error");
      });
    } else {
      this.set(e);
      return Promise.resolve();
    }
  }
  waitForPrep() {
    var e = this;
    return (0, i.default)(function* () {
      var t;
      const n = e.requiresDirectConnection == null ? (0, O.genDirectConnectionMessageModifiers)(e.type, (t = e.list) === null || t === undefined ? undefined : t.listType, e.businessOwnerJid).then(t => e.set(t)) : Promise.resolve();
      const r = W.typeIsMms(e) ? G.prepareMsg(e) : Promise.resolve();
      yield n;
      return r;
    })();
  }
  delete(e) {
    super.delete();
    if (this.botEditTimeoutID) {
      self.clearTimeout(this.botEditTimeoutID);
    }
    require("./802703.js").AllStarredMsgsCollection.remove(this);
    require("./722091.js").PinInChatCollection.deleteByParentMessageKey(this.id);
    this.getCollection().remove(this.id);
    if (this.msgChunk) {
      this.msgChunk.remove(this.id, {}, Boolean(e == null ? undefined : e.skipUpdatingSortTime));
    }
    if (W.typeIsMms(this)) {
      G.deregisterMsg(this);
    }
    require("./856311.js").LabelCollection.removeAllLabelsMD(this);
    const t = this._getChatCollection().get(this.id.remote);
    if (t) {
      var r;
      if ((0, g.isBotReceiveEnabled)() && (this.id.remote.isBot() || ((r = t.contact.businessProfile) === null || r === undefined ? undefined : r.isBizBot3p) === true) && this.subtype === m.BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE && t.botInitialTypingIndicatorMsgId && t.botInitialTypingIndicatorMsgId.equals(this.id)) {
        t.set({
          botInitialTypingIndicatorMsgId: null
        }, {
          silent: true
        });
      }
      if (t.unreadMsgAnchor === this) {
        t.unreadMsgAnchor = undefined;
      }
      if ((!e || !e.doNotResetLastReceived) && t.lastReceivedKey === this.id) {
        let e;
        const n = (0, v.getLastReceivedMsg)(t);
        if (n) {
          e = n.id;
        }
        t.lastReceivedKey = e;
      }
      if (t.composeQuotedMsg === this) {
        t.composeQuotedMsg = null;
      }
    }
    (0, j.clearMsgGetterCacheFor)(this);
    (0, L.clearFrontendMsgGetterCacheFor)(this);
  }
  isLastMessage() {
    const e = (0, L.getChat)(this).msgs.last();
    return this.id.equals(e == null ? undefined : e.id);
  }
  msgContextInfo(e) {
    const t = (0, s.default)(this.toJSON(), ["id", "t", "notifyName", "from", "to", "author", "self", "ack", "invis", "isNewMsg", "star", "recvFresh", "recipients", "broadcast", "quotedMsg", "quotedStanzaID", "quotedRemoteJid", "quotedParticipant", "senderObj", "multicast", "replyButtons", "buttons", "latestEditMsgKey", "latestEditSenderTimestampMs"]);
    const n = this.id;
    let r = null;
    if (e && !n.remote.equals(e)) {
      r = n.remote;
    }
    return {
      quotedMsg: t,
      quotedParticipant: (0, j.getSender)(this),
      quotedStanzaID: n.id,
      quotedRemoteJid: r
    };
  }
  displayName() {
    var e;
    let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const {
      showShortName: n = false,
      showVerifiedName: r = false,
      withPushName: i = false,
      withPushNameOnly: a = false,
      newPushNameFormatting: o = false
    } = t;
    if (!(0, j.getSender)(this)) {
      return "";
    }
    if ((0, Q.isMeAccount)((0, j.getSender)(this))) {
      return oe.default._("You", null, {
        hk: "LtuSj"
      }).toString();
    }
    if ((0, j.getIsPSA)(this)) {
      return oe.default._("WhatsApp", null, {
        hk: "ZGQ0N"
      }).toString();
    }
    if (this.senderObj == null) {
      return "";
    }
    const s = this.senderObj;
    const l = n ? s.shortName : undefined;
    if (l) {
      return l;
    }
    if (s.name) {
      return s.name;
    }
    if (r && s.verifiedLevel === y.VERIFIED_LEVEL.HIGH && s.verifiedName) {
      return s.verifiedName;
    }
    const u = o ? (0, S.getFormattedNotifyName)(this.notifyName).toString() : `~${this.notifyName}`;
    const c = i && this.notifyName ? u : "";
    if (a && c) {
      return c;
    }
    return `${((e = (0, j.getSender)(this)) === null || e === undefined ? undefined : e.isLid()) ? (0, w.getUserDisplayNameForLid)(s) : (0, ie.widToFormattedUser)((0, j.getSender)(this))}${c ? " " : ""}${c}`;
  }
  isMentioned(e) {
    return !!this.mentionedJidList && this.mentionedJidList.findIndex(t => t.equals(e)) > -1;
  }
  mentionMap() {
    if (!this.mentionedJidList) {
      return null;
    }
    if (!this.mentionedJidList.length) {
      return null;
    }
    const e = {};
    this.mentionedJidList.forEach(t => {
      e[`@${re.default.user(t) || ""}`] = C.ContactCollection.gadd(t);
    });
    return e;
  }
  groupMentionMap() {
    var e;
    if (this.groupMentions && this.groupMentions.length) {
      if ((e = this.groupMentions) === null || e === undefined) {
        return undefined;
      } else {
        return e.reduce((e, t) => {
          e[`@${t.groupJid.toString()}`] = t.groupSubject;
          return e;
        }, {});
      }
    } else {
      return null;
    }
  }
  updateAck(e) {
    var t;
    let n = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    const r = this.ack;
    if (!(!(0, j.getIsStatusV3)(this) && ((t = (0, L.getMaybeChat)(this)) === null || t === undefined ? undefined : t.isGroup) && this.isMdHistoryMsg && e >= d.ACK.RECEIVED && this.id.fromMe)) {
      if ((0, c.isNumber)(e) && (r === undefined || e > r || e === d.ACK.FAILED)) {
        this.ack = e;
        if (!n) {
          this._pendingAckUpdate.enqueue(() => (0, P.updateMessageTable)(this.id, {
            ack: e
          }));
        }
      } else if (e === d.ACK.FAILED && this.ack === d.ACK.CLOCK) {
        this.ack = d.ACK.FAILED;
        this._pendingAckUpdate.enqueue(() => (0, P.updateMessageTable)(this.id, {
          ack: e
        }));
      }
    }
  }
  updateErrorCode(e) {
    this.errorCode = e;
    return (0, P.updateMessageTable)(this.id, {
      errorCode: e
    });
  }
  updateLastPlaybackProgress(e) {
    this.lastPlaybackProgress = e;
    this._saveLastPlaybackProgress(this.id, e);
  }
  avParams() {
    return G.mediaMetadata(this);
  }
  resend() {
    var e = this;
    if ((0, j.getIsFailed)(this)) {
      if ((0, j.getIsEdited)(this)) {
        return (0, z.resendLatestEdit)(this);
      }
      const t = {
        ack: d.ACK.CLOCK,
        isSendFailure: false
      };
      this._pendingAckUpdate.enqueue((0, i.default)(function* () {
        yield (0, P.updateMessageTable)(e.id, t);
        e.set(t);
      }));
      if ((0, j.getIsNewsletterMsg)(this)) {
        return require("./12074.js").resendNewsletterMsg(this);
      } else if ((0, L.getAsMms)(this)) {
        if ((0, j.getIsSentByMeFromWeb)(this)) {
          return this.resumeUpload();
        } else {
          return this.resumeRemoteUpload();
        }
      } else {
        return (0, q.sendMsgRecord)(this);
      }
    }
    return Promise.resolve();
  }
  _handleCiphertextDecrypted() {
    if ((0, j.getIsStatusV3)(this)) {
      return;
    }
    const e = (0, L.getChat)(this);
    const t = e.msgs.length;
    const n = e.msgs.indexOf(this);
    if (n !== -1 && t - n <= 10) {
      M.Cmd.alertNewMsg(this);
    }
  }
  _handleViewOnceMediaStatusChanged() {
    if (!this.isViewOnce) {
      return;
    }
    if (this.mediaData == null) {
      return;
    }
    const e = (0, j.getIsSentByMe)(this) && this.ack >= d.ACK.SENT && this.mediaData.mediaStage === x.MEDIA_DATA_STAGE.RESOLVED;
    const t = !(0, j.getIsSentByMe)(this) && this.ack >= d.ACK.PLAYED;
    if (e || t) {
      this.stopListening(this, "change:ack", this._handleViewOnceMediaStatusChanged);
      this.stopListening(this.mediaData, "change:mediaStage", this._handleViewOnceMediaStatusChanged);
      G.deregisterMsg(this);
    }
  }
  isReaction() {
    return (0, j.getIsReaction)(this);
  }
  isEditProtocolMsg() {
    return (0, j.getIsEditProtocolMsg)(this);
  }
  getWamDisappearingModeInitiator() {
    const e = this.disappearingModeInitiator;
    if (e == null) {
      return null;
    }
    switch (e) {
      case I.DisappearingModeInitiator.InitiatedByMe:
        return ee.DISAPPEARING_CHAT_INITIATOR_TYPE.INITIATED_BY_ME;
      case I.DisappearingModeInitiator.InitiatedByOther:
        return ee.DISAPPEARING_CHAT_INITIATOR_TYPE.INITIATED_BY_OTHER;
      case I.DisappearingModeInitiator.ChangedInChat:
        return ee.DISAPPEARING_CHAT_INITIATOR_TYPE.CHAT;
    }
  }
  getWamMessageType() {
    return (0, ne.getWamMessageType)(this);
  }
  getWamMediaType() {
    return (0, ne.getWamMediaType)(this);
  }
  getWamEditType() {
    return (0, j.getWamEditType)(this);
  }
  getForwardingScoreWhenForwarded() {
    const e = (0, j.getNumTimesForwarded)(this) + ((0, j.getShouldDisplayAsForwarded)(this) ? 1 : 0);
    if (e >= 5) {
      return b.default.FREQUENTLY_FORWARDED_SENTINEL;
    } else {
      return e;
    }
  }
  isExpired() {
    const e = (0, j.getEphemeralExpirationTimestamp)(this);
    return e != null && e <= (0, u.unixTime)();
  }
  isRealMessage() {
    return !(this.type === V.MSG_TYPE.GROUPS_V4_INVITE && this.from.equals((0, Q.getMaybeMeUser)()) || (0, j.getIsInitialE2ENotification)(this) || this.type === V.MSG_TYPE.CALL_LOG || (0, j.getIsBizNotification)(this) || ["change_number", "masked_thread_created"].includes(this.subtype) || (0, j.getIsDisappearingModeSystemMessage)(this));
  }
  isExpiredAndNotKept() {
    return this.isExpired() && !(0, j.getIsKept)(this);
  }
  timeUntilExpiration() {
    const e = (0, j.getEphemeralExpirationTimestamp)(this);
    if (e == null) {
      return null;
    } else if (this.isExpired()) {
      return 0;
    } else {
      return e - (0, u.unixTime)();
    }
  }
  _logStorageEstimate(e) {
    return (0, i.default)(function* () {
      const t = yield (0, N.default)();
      if (t) {
        e.webcBrowserStorageQuotaBytes = t.quota;
        e.webcBrowserStorageQuotaUsedBytes = t.usage;
      }
    })();
  }
  getCollection() {
    return require("./61113.js").MsgCollection;
  }
  _getChatCollection() {
    if ((0, j.getIsNewsletterMsg)(this)) {
      return (0, k.default)(require("./358533.js"));
    } else {
      return require("./351053.js").ChatCollection;
    }
  }
  safe() {
    return this;
  }
  unsafe() {
    return this;
  }
  meUserIsLastKICActor() {
    return re.default.equals((0, j.getKicSender)(this), (0, Q.getMaybeMeUser)());
  }
  keepIsLockedForMe() {
    return this.keepIsLockedByDmSettings();
  }
  keepIsLockedForMeSenderSuperpower() {
    const e = (0, j.getKicSender)(this);
    let t = re.default.equals(e, (0, j.getSender)(this));
    if ((0, $.isMatFullyEnabled)() && (0, L.getChat)(this).id.isUser() && !t && e != null) {
      const n = (0, p.getAlternateWid)(e);
      if (n != null) {
        t = re.default.equals(n, (0, j.getSender)(this));
      }
    }
    return (0, j.getIsUnkept)(this) && t && !this.meUserIsLastKICActor();
  }
  keepIsLockedByDmSettings() {
    var e;
    return !!(0, L.getChat)(this).isGroup && !((e = (0, L.getChat)(this).groupMetadata) === null || e === undefined ? undefined : e.canSetEphemeralSetting());
  }
  _isKICEnabled() {
    return !((0, L.getChat)(this).isCAG && !(0, R.isKeepInChatInCAGEnabled)()) && (0, j.getIsEphemeral)(this) && this.type !== V.MSG_TYPE.REVOKED && !this.isViewOnce;
  }
  canShowKeepOrUnkeepOption() {
    return this.canShowKeepOption() || this.canShowUnkeepOption();
  }
  canShowKeepOption() {
    var e;
    return this._isKICEnabled() && ((0, T.canSendToGroup)((0, L.getChat)(this)) || ((e = (0, L.getChat)(this).groupMetadata) === null || e === undefined ? undefined : e.pastParticipants.get((0, Q.assertGetMeUser)())) != null) && !this.keepIsLockedForMe() && !this.star && !this.isGif && !(0, j.getIsStickerMsg)(this);
  }
  canShowUnkeepOption() {
    return (0, j.getIsKept)(this) && this._isKICEnabled() && (this.canRevokeUnkeep() || this.canShowKeepOption() || this.isGif || (0, j.getIsStickerMsg)(this));
  }
  canRevokeUnkeep() {
    if ((0, j.getIsSentByMe)(this)) {
      var e;
      if ((0, L.getChat)(this).isGroup && ((e = (0, L.getChat)(this).groupMetadata) === null || e === undefined ? undefined : e.participants.iAmMember()) === true) {
        return true;
      }
      if ((0, L.getChat)(this).isUser && !(0, L.getChat)(this).contact.isContactBlocked) {
        return true;
      }
    }
    return false;
  }
  isPastUnkeepExpirationLimit() {
    const e = (0, j.getEphemeralExpirationTimestamp)(this);
    if (e != null) {
      const t = Math.trunc(+new Date() / 1000) - e;
      return (0, j.getIsKept)(this) && t > (0, R.getUndoKeepInChatExpiration)();
    }
    return false;
  }
  shouldShowNotificationPreview() {
    var e;
    return !((e = (0, L.getAsViewOnce)(this)) === null || e === undefined ? undefined : e.isViewOnce) && H.MuteCollection.getGlobalPreviews();
  }
  senderIsGroupParticipant() {
    const e = (0, L.getChat)(this).groupMetadata;
    if (e == null) {
      return false;
    }
    if (e.participants.get((0, j.getSender)(this)) != null) {
      return true;
    }
    if (!e.isIncognitoCag) {
      return false;
    }
    const t = (0, p.getCurrentLid)((0, j.getSender)(this));
    return t != null && e.participants.get(t) != null;
  }
}
ce.Proxy = "msg";
ce.idClass = Y.default;
const de = (0, f.defineModel)(ce);
exports.Msg = de;