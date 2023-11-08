var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chat = undefined;
var a = i(require("../vendor/348926.js"));
var o = i(require("../vendor/875472.js"));
var s = i(require("../vendor/766678.js"));
var l = i(require("../vendor/441609.js"));
var u = i(require("../vendor/23279.js"));
var c = require("./122583.js");
var d = i(require("./25385.js"));
var p = i(require("./670983.js"));
var f = require("./287461.js");
var _ = require("./402994.js");
var g = i(require("./164325.js"));
var m = require("./984330.js");
var h = require("./481173.js");
var y = require("./72696.js");
var E = require("./388536.js");
var S = require("./354458.js");
var v = require("./412380.js");
var T = require("./735618.js");
var M = i(require("./500089.js"));
var A = require("./738501.js");
var b = require("./953213.js");
var C = require("./374660.js");
var P = i(require("./614250.js"));
var O = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = Ne(t);
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
}(require("./743643.js"));
var I = require("./78810.js");
var R = i(require("./110820.js"));
var N = require("./713105.js");
var D = require("./859348.js");
var w = require("./760797.js");
var L = i(require("./453729.js"));
var k = require("./780212.js");
var G = require("./780549.js");
var U = require("./445729.js");
var x = i(require("./846870.js"));
var B = require("./177938.js");
var F = require("./660666.js");
var j = require("./212894.js");
var Y = require("./840089.js");
var K = require("./992462.js");
var W = require("./177594.js");
var V = i(require("./799132.js"));
var H = require("./163755.js");
var $ = i(require("./97359.js"));
var z = require("./862159.js");
var q = require("./188690.js");
var J = require("./468520.js");
var Q = require("./898298.js");
var X = i(require("./932325.js"));
var Z = require("./928563.js");
var ee = require("./644234.js");
var te = require("./678794.js");
var ne = require("./787742.js");
var re = require("./44118.js");
var ie = require("./430231.js");
require("./373070.js");
var ae = require("./971804.js");
var oe = require("./73225.js");
var se = i(require("./876319.js"));
var le = require("./575472.js");
var ue = require("./323829.js");
var ce = require("./639880.js");
var de = require("./434989.js");
var pe = require("./556740.js");
var fe = require("./592978.js");
var _e = require("./383296.js");
var ge = require("./2306.js");
var me = require("./453176.js");
var he = require("./802703.js");
var ye = i(require("./664496.js"));
var Ee = require("./87429.js");
var Se = require("./147034.js");
var ve = i(require("./128882.js"));
var Te = require("./744643.js");
var Me = require("./251444.js");
var Ae = require("./757453.js");
var be = require("./459857.js");
var Ce = require("./239870.js");
var Pe = require("./374224.js");
var Oe = require("./212376.js");
var Ie = i(require("./124928.js"));
var Re = require("../vendor/548360.js");
function Ne(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (Ne = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
class De extends ye.default {
  constructor() {
    super(...arguments);
    this.id = (0, h.prop)();
    this.t = (0, h.prop)();
    this.unreadCount = (0, h.prop)(0);
    this.unreadDividerOffset = (0, h.prop)(0);
    this.archive = (0, h.prop)();
    this.isReadOnly = (0, h.prop)();
    this.isAnnounceGrpRestrict = (0, h.prop)();
    this.modifyTag = (0, h.prop)();
    this.muteExpiration = (0, h.prop)(0);
    this.isAutoMuted = (0, h.prop)(false);
    this.name = (0, h.prop)();
    this.notSpam = (0, h.prop)();
    this.pin = (0, h.prop)();
    this.labels = (0, h.prop)();
    this.changeNumberOldJid = (0, h.prop)();
    this.changeNumberNewJid = (0, h.prop)();
    this.lastReceivedKey = (0, h.prop)();
    this.ephemeralDuration = (0, h.prop)();
    this.ephemeralSettingTimestamp = (0, h.prop)();
    this.disappearingModeInitiator = (0, h.prop)();
    this.disappearingModeTrigger = (0, h.prop)();
    this.disappearingModeInitiatedByMe = (0, h.prop)();
    this.createdLocally = (0, h.session)();
    this.pendingAction = (0, h.session)();
    this.formattedTitle = (0, h.session)();
    this.active = (0, h.session)();
    this.pausedTimerId = (0, h.session)();
    this.presenceResendTimerId = (0, h.session)();
    this.recording = (0, h.session)();
    this.typing = (0, h.session)();
    this.colors = (0, h.session)();
    this.composeContents = (0, h.session)(() => ({}));
    this.attachMediaContents = (0, h.session)();
    this.isComposingPoll = (0, h.session)(false);
    this.pttRecordingSession = (0, h.session)();
    this.squelch = (0, h.session)();
    this.reactionSquelch = (0, h.session)();
    this.pendingSeenCount = (0, h.session)(0);
    this.unreadMsgAnchor = (0, h.session)();
    this.markedUnread = (0, h.session)();
    this.trusted = (0, h.session)();
    this.canSend = (0, h.session)();
    this.showUnreadInTitle = (0, h.session)(false);
    this.activeUnreadCount = (0, h.session)();
    this.promises = (0, h.session)(() => ({}));
    this.ftsCache = (0, h.session)(() => ({}));
    this.composeQuotedMsg = (0, h.session)();
    this.composeQuotedMsgRemoteJid = (0, h.session)();
    this.quotedMsgAdminGroupJid = (0, h.session)();
    this.quotedMsgAdminGroupSubject = (0, h.session)();
    this.quotedMsgAdminParentGroupJid = (0, h.session)();
    this.groupMetadata = (0, h.session)();
    this.newsletterMetadata = (0, h.session)();
    this.presence = (0, h.session)();
    this.mute = (0, h.session)();
    this.contact = (0, h.session)();
    this.mediaCount = (0, h.session)(0);
    this.linkCount = (0, h.session)(0);
    this.docCount = (0, h.session)(0);
    this.productCount = (0, h.session)(0);
    this.pendingDeleteForMeCount = (0, h.session)(0);
    this.isParentGroup = (0, h.session)();
    this.unreadMentionsOfMe = (0, h.prop)();
    this.unreadMentionCount = (0, h.prop)();
    this.hasUnreadMention = (0, h.prop)(false);
    this.archiveAtMentionViewedInDrawer = (0, h.prop)(false);
    this.hasChatBeenOpened = (0, h.prop)(false);
    this.tcToken = (0, h.prop)();
    this.tcTokenTimestamp = (0, h.prop)();
    this.tcTokenSenderTimestamp = (0, h.prop)();
    this.isDeprecated = (0, h.prop)(false);
    this.msgUnsyncedButtonReplyMsgs = (0, h.prop)();
    this.endOfHistoryTransfer = (0, h.session)(false);
    this.endOfHistoryTransferType = (0, h.prop)();
    this.pendingInitialLoading = (0, h.prop)(false);
    this.lastReactionPreview = (0, h.prop)();
    this.chatlistPreview = (0, h.prop)();
    this.previewT = (0, h.prop)();
    this.unopenedByAssignedAgent = (0, h.session)(false);
    this.isAssignedToMe = (0, h.session)(false);
    this.assignedAgent = (0, h.session)();
    this.unreadEditTimestampMs = (0, h.prop)();
    this.celebrationAnimationLastPlayed = (0, h.prop)(0);
    this.animationCandidateData = (0, h.prop)();
    this.draftMessage = (0, h.prop)();
    this.draftMessageSortTs = (0, h.session)();
    this.ephemeralDisplayedExemptions = (0, h.prop)();
    this.hasOpened = (0, h.prop)();
    this.botInitialTypingIndicatorMsgId = (0, h.session)();
    this.hasCreatedBotInvokeSystemMsg = (0, h.prop)();
    this.bizBotSystemMsgType = (0, h.prop)();
    this.hasRequestedWelcomeMsg = (0, h.prop)(false);
    this.lidOriginType = (0, h.prop)();
    this.hasPreloaded = (0, h.session)(false);
    this.chatEntryPoint = (0, h.session)(null);
    this.kind = (0, h.derived)(function () {
      var e;
      if (Ie.default.isGroup(this.id)) {
        if (((e = this.groupMetadata) === null || e === undefined ? undefined : e.groupType) === z.GroupType.COMMUNITY) {
          return b.ChatKindType.Community;
        } else {
          return b.ChatKindType.Group;
        }
      } else if (Ie.default.isBroadcast(this.id)) {
        return b.ChatKindType.Broadcast;
      } else if (Ie.default.isUser(this.id)) {
        return b.ChatKindType.Chat;
      } else if (this.isNewsletter) {
        return b.ChatKindType.Newsletter;
      } else {
        return void __LOG__(2)`chat:unknown kind id:${this.id.toLogString()}`;
      }
    });
    this.isUser = (0, h.derived)(function () {
      return Ie.default.isUser(this.id);
    });
    this.isPSA = (0, h.derived)(function () {
      return Ie.default.isPSA(this.id);
    });
    this.isIAS = (0, h.derived)(function () {
      return Ie.default.isIAS(this.id);
    });
    this.isGroup = (0, h.derived)(function () {
      return Ie.default.isGroup(this.id);
    });
    this.isCAG = (0, h.derived)(function () {
      var e;
      return this.isGroup && ((e = this.groupMetadata) === null || e === undefined ? undefined : e.groupType) === z.GroupType.LINKED_ANNOUNCEMENT_GROUP;
    });
    this.isBroadcast = (0, h.derived)(function () {
      return Ie.default.isBroadcast(this.id);
    });
    this.isNewsletter = (0, h.derived)(function () {
      return Ie.default.isNewsletter(this.id);
    });
    this.isBusinessGroup = (0, h.derived)(function () {
      var e;
      const t = (e = this.groupMetadata) === null || e === undefined ? undefined : e.participants.getAdmins();
      if (!t) {
        return false;
      }
      for (const e of t) {
        const t = B.ContactCollection.get(e.id);
        if (t == null ? undefined : t.isBusiness) {
          return true;
        }
      }
      return false;
    });
    this.isEligibleForContactSync = (0, h.derived)(function () {
      return !this.isBroadcast && !this.isPSA;
    });
    this.canUnread = (0, h.derived)(function () {
      return !this.isBroadcast;
    });
    this.hasUnread = (0, h.derived)(function () {
      return this.unreadCount !== 0;
    }, ["unreadCount"]);
    this.optimisticUnreadCount = (0, h.derived)(function () {
      return (0, D.getOptimisticUnreadCount)(this);
    }, ["unreadCount", "pendingSeenCount"]);
    this.shouldShowUnreadDivider = (0, h.derived)(function () {
      if (this.unreadCount === 0) {
        return false;
      }
      if (this.unreadMsgAnchor) {
        const {
          msgChunk: e
        } = this.unreadMsgAnchor;
        const t = e ? e.getModelsArray() : [];
        return this.unreadMsgAnchor !== t.find(e => (0, ne.getIsUnreadType)(e));
      }
      if (this.msgs.msgLoadState.noEarlierMsgs) {
        return this.msgs.filter(e => (0, ne.getIsUnreadType)(e)).length !== this.unreadCount;
      }
      return true;
    }, ["unreadCount", "unreadMsgAnchor"]);
    this.shouldAppearInList = (0, h.derived)(function () {
      if (this.isBroadcast) {
        return this.id.user === "chat";
      }
      if (Ie.default.isStatusV3(this.id)) {
        return false;
      }
      if (this.endOfHistoryTransferType === T.ConversationEndOfHistoryTransferModelPropType.NOT_INCLUDED_IN_HIST_SYNC && this.msgs.length === 0) {
        return false;
      }
      if (this.isGroup && this.isParentGroup === true) {
        return false;
      }
      if (this._shouldAppearInListLatched) {
        return true;
      }
      const e = this.msgs.some(e => e.isRealMessage());
      this._shouldAppearInListLatched = !this.createdLocally || e;
      return this._shouldAppearInListLatched;
    }, ["createdLocally", "msgs", "msgsLength", "isParentGroup"]);
    this.previewMessage = (0, h.derived)(function () {
      for (let e = this.msgs.length - 1; e >= 0; e--) {
        const t = this.msgs.at(e);
        if (t && (0, D.isPreviewMessage)(t)) {
          return t;
        }
      }
      if (this.msgs.length > 0) {
        return this.msgs.last();
      }
    }, ["msgs", "msgsChanged", "pendingDeleteForMeCount"]);
    this.showChangeNumberNotification = (0, h.derived)(function () {
      const {
        changeNumberOldJid: e,
        changeNumberNewJid: t,
        id: n,
        isUser: r
      } = this;
      if (!r) {
        return false;
      }
      if (!e && !t) {
        return false;
      }
      const i = B.ContactCollection.get(t || n);
      return i == null || !(0, F.getIsMyContact)(i);
    }, ["changeNumberOldJid", "changeNumberNewJid", "id", "isUser"]);
    this.deleteSignal = (0, h.derived)(function () {
      return this._abortController.signal;
    });
    this.derivedLastAddOnPreview = (0, h.derived)(function () {
      if (this.chatlistPreview) {
        return this.chatlistPreview;
      }
      const {
        lastReactionPreview: e
      } = this;
      if (e) {
        return (0, Z.lastAddOnPreviewFromDeprecatedLastReactionPreview)(e);
      } else {
        return undefined;
      }
    }, ["chatlistPreview", "lastReactionPreview"]);
    this.hasDraftMessage = (0, h.derived)(function () {
      var e;
      var t;
      return !(!(0, W.draftMessageEnabled)() || ((e = this.draftMessage) === null || e === undefined || (t = e.text) === null || t === undefined ? undefined : t.trim()) === "");
    }, ["draftMessage"]);
  }
  initialize() {
    super.initialize();
    this.addQueue = new d.default();
    this.sendQueue = new d.default();
    this._ephemeralMessagesToDelete = new Set();
    this._ephemeralMessageTimerIds = new Map();
    this._abortController = new r();
    this._updateDraftMessageSortTs();
    this.msgs.msgLoadState.contextLoaded = true;
    this.addChild("presence", de.PresenceCollection.gadd(this.id));
    const e = ae.MuteCollection.get(this.id);
    if (e) {
      this.addChild("mute", e);
    } else {
      this.addChild("mute", ae.MuteCollection.gadd({
        id: this.id,
        expiration: this.muteExpiration,
        isAutoMuted: this.isAutoMuted
      }));
    }
    this.listenTo(this.mute, "change:expiration", () => (0, k.updateMuteExpiration)(this));
    this.listenTo(this.mute, "change:isAutoMuted", () => (0, k.updateMuteExpiration)(this));
    this.addChild("contact", B.ContactCollection.gadd(this.id));
    if (this.name && !this.contact.name) {
      const e = {
        name: this.name
      };
      if (this.isGroup || (0, oe.isNewsletterEnabled)() && this.isNewsletter) {
        this.contact.set(e);
      } else {
        (0, K.updateContactTable)(this.contact.id, e).then(() => {
          this.contact.set(e);
        });
      }
    }
    this.listenTo(this.contact, "change:name", () => (0, C.updateTitle)(this));
    this.listenTo(this.contact, "change:isContactBlocked", () => (0, C.updateCanSend)(this));
    this.listenTo(this, "change:isDeprecated", () => (0, C.updateCanSend)(this));
    this.listenTo(this, "change:isGroup change:archive change:optimisticUnreadCount change:muteExpiration", this.shouldShowUnreadInTitle);
    if (this.isGroup) {
      this.trusted = true;
    }
    this.listenTo(Ee.TosManager, "change", () => (0, C.updateCanSend)(this));
    this.listenTo(this.contact, "change:privacyMode", () => (0, C.updateCanSend)(this));
    if (this.isGroup || this.isBroadcast) {
      const e = this.getGroupMetadataCollection();
      let t;
      if (this.isBroadcast && !e.get(this.id)) {
        t = true;
      }
      const n = e.gadd(this.id);
      this.addChild("groupMetadata", n);
      this.listenTo(n, "change:stale change:announce", this._updateIsAnnounceGrpRestrict);
      this.listenTo(n, "change:groupType", this.shouldShowUnreadInTitle);
      this.listenTo(n.participants, "change:isAdmin bulk_add bulk_remove", this._updateIsAnnounceGrpRestrict);
      this.listenTo(n, "change:trusted change:stale", this.isTrusted);
      this.listenTo(n, "change:participants change:stale change:suspended change:terminated", () => {
        (0, C.updateReadOnly)(this);
      });
      this.listenTo(n.participants, "change:contact.formattedShortName", () => (0, C.updateTitle)(this));
      this._initializeUnreadMentions(n);
      this.listenTo(n.unreadMentionMetadata.unreadMentionCollection, "add remove reset", this._handleUnreadMention);
      this.listenTo(n.unreadMentionMetadata, "change:pendingUnreadMentionCount", this._handleUnreadMention);
      this._updateIsAnnounceGrpRestrict();
      (0, C.updateReadOnly)(this);
      const r = this.id;
      this.listenTo(this, "change:isAnnounceGrpRestrict", () => {
        (0, C.updateReadOnly)(this);
        (0, C.updateCanSend)(this);
      });
      this.listenTo(this, "change:archive", () => {
        if (this.archive === true && (0, ge.shouldEnableArchiveV2)()) {
          (0, me.setArchiveEnabledSetting)(true);
        }
      });
      this.listenTo(n, "change:isParentGroup", () => {
        this.isParentGroup = n.isParentGroup;
      });
      this.isParentGroup = n.isParentGroup;
      if (t) {
        e.update(r);
      }
    } else if ((0, oe.isNewsletterEnabled)() && this.isNewsletter) {
      const e = this.getNewsletterMetadataCollection();
      const t = e == null ? undefined : e.gadd(this.id);
      if (t != null) {
        this.addChild("newsletterMetadata", t);
      }
    } else {
      this.listenTo(this.presence, "change:isOnline", () => (0, ce.presenceOnlineChanged)(this));
    }
    this.listenTo(this, "change:isReadOnly", function () {
      if (this.isGroup || this.isNewsletter && (oe.isNewsletterEnabled === null || oe.isNewsletterEnabled === undefined ? undefined : (0, oe.isNewsletterEnabled)())) {
        this.isTrusted();
        (0, C.updateCanSend)(this);
      }
      if (this.isGroup) {
        this.getGroupMetadataCollection().update(this.id);
      }
    });
    const t = this.getCollection();
    if (t.notSpam[this.id] && !this.notSpam) {
      (0, _e.sendNotSpam)(this).catch(() => {});
    }
    t.notSpam[this.id] = !!this.notSpam;
    if (!this.notSpam) {
      this.listenTo(this, "change:notSpam", this._handleNotSpamChange);
    }
    (0, C.updateTitle)(this);
    this.isTrusted();
    (0, C.updateCanSend)(this);
    this.listenTo(this.contact, "change:name", this.isTrusted);
    this.listenTo(this.msgs, "add", e => {
      (0, J.handleNewMsgForChat)(this, e);
    });
    this.listenTo(this.msgs, "update_sort_time", () => (0, k.updateSortTime)(this));
    this.listenTo(this.msgs, "bulk_add", (e, t) => (0, I.addMediaMsgs)(this, e, t));
    this.listenTo(this.msgs, "add", this._deregisterExpiredViewOnceMessage);
    this.listenTo(this.msgs, "bulk_add", this.deregisterExpiredViewOnceBulkMessages);
    this.listenTo(this.msgs, "add remove change:ephemeralExpirationTimestamp change:kicState", this._resetEphemeralMessageExpirationTimer);
    this.listenTo(this.msgs, "bulk_add", e => {
      e.forEach(e => {
        this._resetEphemeralMessageExpirationTimer(e);
      });
    });
    this.listenTo(this.msgs, "change:kicState", e => {
      const t = this.keptMsgs;
      if (t) {
        if ((0, ne.getIsKept)(e)) {
          t.add(e);
        } else {
          t.remove(e);
        }
      }
    });
    this.listenTo(this, "change:msgs", () => (0, I.resetMediaMsgs)(this));
    this.saveAssignedColorsDebounced = (0, u.default)(() => (0, w.saveAssignedColors)(this), 1000);
    this.listenTo(this, "change:active", this._handleActiveUpdate);
    this.pendingAction = 0;
    this.listenTo(this, "change:t change:modifyTag", () => (0, N.clearFtsCache)(this));
    this.listenTo(X.default, "locale_change", () => {
      (0, C.updateTitle)(this);
    });
    if (U.Conn.isSMB) {
      (0, E.initializeLabels)(this);
      this._initializeChatAssignment();
    }
  }
  _initializeChatAssignment() {
    if ((0, y.chatAssignmentEnabled)()) {
      this.set("unopenedByAssignedAgent", v.ChatAssignmentCollection.getChatUnopenedStatus(this.id));
      const e = v.ChatAssignmentCollection.getAgentCollectionForChatId(this.id);
      this.set("isAssignedToMe", this._getIsAssignedToMe());
      this.set("assignedAgent", e.at(0));
      this.listenTo(e, "add remove change", () => {
        this.set("unopenedByAssignedAgent", v.ChatAssignmentCollection.getChatUnopenedStatus(this.id));
        this.set("isAssignedToMe", this._getIsAssignedToMe());
        this.set("assignedAgent", e.at(0));
      });
    }
  }
  _initializeUnreadMentions(e) {
    if (this.unreadMentionsOfMe) {
      const t = new Map(this.unreadMentionsOfMe.map(e => [String(e.id), e]));
      this.listenTo(this.msgs, "bulk_add", n => {
        for (const r of n) {
          const n = r.id.toString();
          const i = t.get(n);
          if (i && this.isUnreadMsg(r)) {
            e.unreadMentionMetadata.addUnreadMentions([new ve.default(i)], q.UnreadMessageType.PERSISTANCE_LOAD);
          }
        }
      });
    }
    if (this.unreadMentionCount != null) {
      e.unreadMentionMetadata.pendingUnreadMentionCount = this.unreadMentionCount;
    }
    this._handleUnreadMention();
  }
  _getIsAssignedToMe() {
    const e = (0, be.assertGetMe)().getDeviceId();
    return v.ChatAssignmentCollection.getAgentCollectionForChatId(this.id).getModelsArray().some(t => t.deviceId === e);
  }
  _handleUnreadMention() {
    if (this.isGroup && this.groupMetadata) {
      this.hasUnreadMention = this.groupMetadata.unreadMentionMetadata.getUnreadMentionCount() > 0;
    }
  }
  set(e, t, n) {
    if (typeof e == "string") {
      if (e === "muteExpiration" && this.mute) {
        this.mute.setMute(t);
      }
      if (e === "isAutoMuted" && this.mute) {
        this.mute.setAutoMuted(t);
      }
    } else if (e.hasOwnProperty("muteExpiration") && this.mute) {
      this.mute.setMute(e.muteExpiration, e.isAutoMuted);
    }
    return super.set(e, t, n);
  }
  addPendingAction(e) {
    const t = () => {
      this.decPending();
    };
    e.then(t, t);
    this.pendingAction++;
  }
  decPending() {
    if (this.pendingAction > 0) {
      this.pendingAction--;
    } else {
      __LOG__(2)`chat:onPendingActionUpdate pendingAction value is invalid`;
      this.pendingAction = 0;
    }
  }
  _updateDraftMessageSortTs() {
    var e;
    if (this.hasDraftMessage === true) {
      this.draftMessageSortTs = (e = this.draftMessage) === null || e === undefined ? undefined : e.timestamp;
    } else {
      this.draftMessageSortTs = null;
    }
  }
  _handleActiveUpdate() {
    if (this.isGroup && this.active) {
      this.squelch = x.default.SQUELCH_RESET_VALUE;
      this.reactionSquelch = x.default.SQUELCH_RESET_VALUE;
      this.hasChatBeenOpened = true;
    }
    this.presence.chatActive = this.active;
    if (!this.active) {
      if ((0, W.draftMessageEnabled)()) {
        this._updateDraftMessageSortTs();
        this.getCollection().sort();
      }
      this.msgs.filter(e => (0, Ce.isExpired)(e.safe())).forEach(ee.deregisterMsg);
      const e = Array.from(this._ephemeralMessagesToDelete);
      (0, j.removeExpiredMessagesFromHistory)(e).then(() => {
        const t = e.map(e => e.id.toString());
        if (t.length > 0) {
          (0, Me.deleteModelsForLastAddOnPreview)(t);
          (0, require("./628905.js").getJobManager)().waitUntilPersisted(ue.jobSerializers.deleteAddOns(this.id.toString(), t));
        }
      });
      this._ephemeralMessagesToDelete.forEach(e => {
        this._ephemeralMessagesToDelete.delete(e);
        e.delete({
          skipUpdatingSortTime: true,
          doNotResetLastReceived: true
        });
      });
    }
  }
  _handleNotSpamChange() {
    this.getCollection().notSpam[this.id] = this.notSpam;
    this.isTrusted();
    if (this.notSpam) {
      this.stopListening(this, "change:notSpam");
    }
  }
  senderMsgCount() {
    return this.getAllMsgs().filter(e => !(0, ne.getIsSentByMe)(e) && !(0, ne.getIsNotification)(e)).length;
  }
  hasMaybeSentMsgToChat() {
    return this.getAllMsgs().some(e => (0, ne.getIsSentByMe)(e));
  }
  isTrusted() {
    let e = false;
    var t;
    if (this.isGroup) {
      e = this.isReadOnly || this.notSpam || ((t = this.groupMetadata) === null || t === undefined ? undefined : t.isTrusted());
    } else if (this.isBroadcast || (0, oe.isNewsletterEnabled)() && this.isNewsletter) {
      e = true;
    } else if (this.isUser) {
      e = this.notSpam || (0, F.getIsMyContact)(this.contact);
    }
    if (!e && this.hasMaybeSentMsgToChat()) {
      e = true;
    }
    return this.trusted = Boolean(e);
  }
  isSuspendedOrTerminated() {
    var e;
    var t;
    if (this.isGroup) {
      return Boolean((e = this.groupMetadata) === null || e === undefined ? undefined : e.isSuspendedOrTerminated());
    } else {
      return !!this.isNewsletter && Boolean((t = this.newsletterMetadata) === null || t === undefined ? undefined : t.isSuspendedOrTerminated);
    }
  }
  canBlockFromNotification() {
    return (0, f.getABPropConfigValue)("block_from_notification") && this.isUser && !this.isTrusted();
  }
  title() {
    var e;
    if (this.isGroup) {
      if ((e = this.formattedTitle) !== null && e !== undefined) {
        return e;
      } else {
        return Re.fbt._("Unknown subject", null, {
          hk: "1SrFOZ"
        }).toString();
      }
    } else {
      return this.formattedTitle;
    }
  }
  getTcToken() {
    if (this.tcToken == null || this.tcTokenTimestamp == null || (0, Se.isTokenExpired)(this.tcTokenTimestamp, Se.TcTokenMode.Receiver)) {
      return null;
    } else {
      return this.tcToken;
    }
  }
  delete() {
    super.delete();
    this.getCollection().remove(this.id);
    this._abortController.abort();
    this.presence.delete();
    G.Cmd.closeChat(this);
    if (this.groupMetadata) {
      this.groupMetadata.delete();
    }
    if (this.mediaMsgs) {
      this.mediaMsgs.delete();
    }
    if (this.linkMsgs) {
      this.linkMsgs.delete();
    }
    if (this.docMsgs) {
      this.docMsgs.delete();
    }
    if (this.productMsgs) {
      this.productMsgs.delete();
    }
    const e = this.starredMsgs;
    if (e) {
      e.delete();
      e.stopListening();
      e.reset();
    }
    (0, Ae.deleteComposeContents)(this.id);
  }
  isDirty() {
    return this.unreadCount !== 0;
  }
  canPin() {
    var e;
    if (this.archive) {
      return false;
    }
    const t = (e = this.promises) === null || e === undefined ? undefined : e.setArchive;
    return !(t == null ? undefined : t.archive);
  }
  canArchive() {
    return !this.isBroadcast;
  }
  hasUnreadEdit() {
    return this.unreadEditTimestampMs != null;
  }
  setComposeContents(e) {
    if ((0, W.draftMessageEnabled)()) {
      var t;
      let r = e.text;
      var n;
      if (((t = e.text) === null || t === undefined ? undefined : t.trim()) === "") {
        r = (n = e.text) === null || n === undefined ? undefined : n.trim();
      }
      const i = {
        text: r,
        ctwaContext: e.ctwaContext,
        ctwaContextLinkData: e.ctwaContextLinkData,
        timestamp: e.timestamp,
        omittedUrl: e.omittedURL
      };
      (0, Te.updateDraftMessageChat)(this.id, i);
    } else {
      this.composeContents = e;
    }
  }
  getSessionPersistedComposeContents() {
    return (0, Ae.getComposeContents)(this.id);
  }
  getComposeContents() {
    if ((0, W.draftMessageEnabled)()) {
      if (!this.draftMessage) {
        return;
      }
      const e = {
        timestamp: this.draftMessage.timestamp,
        text: this.draftMessage.text
      };
      const {
        ctwaContext: t,
        ctwaContextLinkData: n,
        omittedUrl: r
      } = this.draftMessage;
      if (r != null) {
        e.omittedURL = r;
      }
      if (t != null) {
        e.ctwaContext = t;
      }
      if (n != null) {
        e.ctwaContextLinkData = n;
      }
      return e;
    }
    if ((0, l.default)(this.composeContents)) {
      return this.getSessionPersistedComposeContents() || {};
    } else {
      return this.composeContents;
    }
  }
  setAttachMediaContents(e) {
    this.attachMediaContents = e;
  }
  isComposing() {
    const {
      text: e
    } = this.composeContents;
    return Boolean(e) || this.isComposingPoll;
  }
  preload() {
    if (this.msgs.length === 1) {
      O.loadEarlierMsgs(this).catch((0, c.filteredCatch)(m.E404, () => {})).catch(e => {
        __LOG__(2)`chat:preload failed\n${e}`;
      });
    }
  }
  onEmptyMRM() {
    __LOG__(2)`models:Chat:removeMsg 0 messages left, querying...`;
    O.loadEarlierMsgs(this).catch((0, c.filteredCatch)(m.E404, () => {})).catch(e => {
      __LOG__(2)`chat:onEmptyMRM failed\n${e}`;
    });
  }
  deleteMsgs(e, t) {
    this.deleteMsgsBeforeMsgInclusive(undefined, !e, t);
  }
  deleteMsgsBeforeMsgInclusive(e) {
    let t;
    let n = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    let r = arguments.length > 2 ? arguments[2] : undefined;
    if (e) {
      if (!this.msgs.get(e.id)) {
        return;
      }
      t = this.msgs.indexOf(e);
    } else {
      t = this.msgs.length;
    }
    this.deleteMsgsPartial(function (e, i) {
      return r && !(0, ie.msgMatchesType)(e, r) || e.msgChunk === this.msgs && i > t || n && e.star || (0, ne.getIsInitialE2ENotification)(e) && n;
    }, true);
  }
  deleteMsgsPartial(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    const n = this.unreadCount;
    this.getAllCMCs().forEach(n => {
      const r = n.filter((t, n, r) => !e.apply(this, [t, n, r]));
      n.remove(r, undefined, t);
      r.forEach(e => {
        if ((0, ne.getIsAuthenticationMessage)(e)) {
          (0, le.logOTPMessageDeleted)((0, te.msgDataFromMsgModel)(e));
        }
        e.delete();
      });
    });
    (0, s.default)(this.msgChunks).forEach(e => {
      if (e.length === 0) {
        this.removeMsgsCollection(e);
      }
    });
    if (this.msgs.length > 0) {
      const e = n > this.msgs.length ? this.msgs.length : n;
      (0, Y.updateChatTable)(this.id, {
        unreadCount: e
      }).then(() => {
        this.unreadCount = e;
        this.msgs.msgLoadState.noEarlierMsgs = this.endOfHistoryTransferType !== T.ConversationEndOfHistoryTransferModelPropType.INCOMPLETE;
      });
    }
  }
  deleteMessages(e) {
    this.deleteMsgsPartial(t => !e.includes(t.id.toString()), true);
    if (this.getAllMsgs().length === 0) {
      O.loadEarlierMsgs(this);
    }
  }
  getLastMsgKeyForAction() {
    const e = this.msgs.last();
    let t;
    if (e) {
      t = !this.lastReceivedKey || e.id.fromMe && e.local && e.ack === _.ACK.CLOCK ? e.id : this.lastReceivedKey;
    }
    return t || undefined;
  }
  getWebcChatType() {
    const {
      kind: e
    } = this;
    if (e == null) {
      throw new TypeError(`Invalid Chat.kind ${String(this.kind)}`);
    }
    switch (e) {
      case b.ChatKindType.Chat:
        return Oe.WEBC_CHAT_TYPE.INDIVIDUAL;
      case b.ChatKindType.Group:
        return Oe.WEBC_CHAT_TYPE.GROUP;
      case b.ChatKindType.Broadcast:
        return Oe.WEBC_CHAT_TYPE.BROADCAST_LIST;
      case b.ChatKindType.Newsletter:
        return Oe.WEBC_CHAT_TYPE.NEWSLETTER;
      case b.ChatKindType.Community:
        return Oe.WEBC_CHAT_TYPE.COMMUNITY;
    }
  }
  getMdChatAssignmentChatType() {
    return (0, D.getMdChatAssignmentChatTypeFn)(this);
  }
  getChatAssignmentChatType() {
    const {
      kind: e
    } = this;
    if (e == null) {
      throw new TypeError(`Invalid Chat.kind ${String(this.kind)}`);
    }
    switch (e) {
      case b.ChatKindType.Chat:
        return Pe.CHAT_ASSIGNMENT_CHAT_TYPE.INDIVIDUAL;
      case b.ChatKindType.Group:
        return Pe.CHAT_ASSIGNMENT_CHAT_TYPE.GROUP;
      case b.ChatKindType.Broadcast:
      case b.ChatKindType.Community:
        return Pe.CHAT_ASSIGNMENT_CHAT_TYPE.COMMUNITY;
      case b.ChatKindType.Newsletter:
        return Pe.CHAT_ASSIGNMENT_CHAT_TYPE.CHANNEL;
    }
  }
  deregisterExpiredViewOnceBulkMessages(e) {
    e.forEach(this._deregisterExpiredViewOnceMessage);
  }
  _deregisterExpiredViewOnceMessage(e) {
    if ((0, Ce.isExpired)(e.safe())) {
      (0, ee.deregisterMsg)(e);
    }
  }
  _resetEphemeralMessageExpirationTimer(e) {
    var t = this;
    g.default.clearTimeout(this._ephemeralMessageTimerIds.get(e));
    this._ephemeralMessageTimerIds.delete(e);
    this._ephemeralMessagesToDelete.delete(e);
    const r = (0, ne.getEphemeralExpirationTimestamp)(e);
    if (r == null || !this.msgs.includes(e) || (0, ne.getIsKept)(e)) {
      return;
    }
    const i = function () {
      var r = (0, a.default)(function* () {
        t._ephemeralMessageTimerIds.delete(e);
        if (t.active) {
          t._ephemeralMessagesToDelete.add(e);
        } else {
          yield (0, j.removeExpiredMessagesFromHistory)([e]);
          (0, Me.deleteModelsForLastAddOnPreview)([e.id.toString()]);
          const r = require("./628905.js").getJobManager;
          yield r().waitUntilPersisted(ue.jobSerializers.deleteAddOns(t.id.toString(), [e.id.toString()]));
          e.delete({
            skipUpdatingSortTime: true,
            doNotResetLastReceived: true
          });
        }
      });
      return function () {
        return r.apply(this, arguments);
      };
    }();
    if (e.isExpired()) {
      i();
    } else {
      const t = g.default.setGlobalTimeout(i, r * 1000);
      this._ephemeralMessageTimerIds.set(e, t);
    }
  }
  sendProductMessage(e, t) {
    var n = this;
    return (0, a.default)(function* () {
      yield (0, pe.sendProductMessage)(n, e, t);
    })();
  }
  _isMediaMsg(e) {
    return Boolean((0, H.getAsMms)(e) && !e.ctwaContext);
  }
  isUnreadMsg(e) {
    const t = this.msgs.filter(e => (0, ne.getIsUnreadType)(e));
    return t.includes(e, t.length - this.unreadCount);
  }
  isActiveUnreadMsg(e) {
    const t = this.msgs.filter(e => (0, ne.getIsUnreadType)(e));
    return t.includes(e, t.length - this.activeUnreadCount);
  }
  setCelebrationAnimationLastPlayed() {
    if (this.animationCandidateData && this.celebrationAnimationLastPlayed < this.animationCandidateData.msgTimestampSeconds) {
      this.celebrationAnimationLastPlayed = this.animationCandidateData.msgTimestampSeconds;
    }
  }
  setAnimationCandidateData(e) {
    this.animationCandidateData = e;
  }
  _updateIsAnnounceGrpRestrict() {
    const e = this.groupMetadata;
    if (this.isGroup && e != null && !e.stale) {
      const t = !e.participants.iAmAdmin() && e.announce;
      if (this.isAnnounceGrpRestrict !== t) {
        __LOG__(2)`chat:_updateIsAnnounceGrpRestrict:old ${this.isAnnounceGrpRestrict}, new: ${t}`;
        (0, Y.updateChatTable)(this.id, {
          isAnnounceGrpRestrict: t
        }).then(() => this.isAnnounceGrpRestrict = t);
      }
    }
  }
  sortMsgs(e) {
    const t = e.map(e => {
      const t = (0, p.default)(e.msgChunk, "msg.msgChunk");
      return {
        msg: e,
        chunkT: (0, p.default)(t.at(0), "chunk.at(0)").t,
        index: t.indexOf(e)
      };
    });
    return (0, o.default)(t, ["chunkT", "index"]).map(e => e.msg);
  }
  waitForChatLoading() {
    let e = Promise.resolve();
    if (this.pendingInitialLoading) {
      e = (0, V.default)(this, "change:pendingInitialLoading", () => !this.pendingInitialLoading);
    }
    return e;
  }
  unstarAll() {
    const e = this.getAllMsgs();
    e.forEach(e => {
      if (e) {
        e.star = false;
      }
    });
    (0, he.removeStarredMsgs)(e);
  }
  shouldShowUnreadInTitle() {
    var e;
    const t = !!this.muteExpiration;
    if (this.archive) {
      return void (this.showUnreadInTitle = false);
    }
    if (this.optimisticUnreadCount <= 0) {
      return void (this.showUnreadInTitle = false);
    }
    if (!this.isGroup) {
      return void (this.showUnreadInTitle = !t);
    }
    if (((e = this.groupMetadata) === null || e === undefined ? undefined : e.groupType) === z.GroupType.COMMUNITY) {
      return void (this.showUnreadInTitle = false);
    }
    if (!t) {
      return void (this.showUnreadInTitle = true);
    }
    if (!this.msgs || this.msgs.length === 0) {
      return void (this.showUnreadInTitle = false);
    }
    let n = false;
    const r = this.msgs;
    const i = this.optimisticUnreadCount;
    let a = Math.max(0, r.length - i);
    for (; a < r.length; a++) {
      const e = this.msgs.at(a);
      if (!e) {
        continue;
      }
      const t = (0, be.getMaybeMeUser)();
      if (e.isMentioned(t) || (0, fe.isQuotedMsg)(e, t)) {
        const t = this.getCollection().get((0, ne.getSender)(e));
        if (!t || !t.muteExpiration) {
          n = true;
          break;
        }
      }
    }
    this.showUnreadInTitle = n;
  }
  removeFromCollection(e) {
    var t;
    if (e.star) {
      (0, he.removeStarredMsgs)([e]);
    }
    if ((0, ne.getIsMedia)(e) && this.mediaMsgs) {
      this.mediaMsgs.remove(e);
    } else if ((0, re.getLinksFromMsg)(e).length > 0 && this.linkMsgs) {
      this.linkMsgs.remove(e);
    } else if ((0, H.getAsDoc)(e) && this.docMsgs) {
      this.docMsgs.remove(e);
    } else if ((0, H.getAsProduct)(e) != null && this.productMsgs) {
      this.productMsgs.remove(e);
    }
    if ((0, ne.getIsKept)(e) && this.keptMsgs) {
      this.keptMsgs.remove(e);
    }
    if ((0, H.getChat)(e).isGroup) {
      if (!((t = (0, H.getChat)(e).groupMetadata) === null || t === undefined)) {
        t.unreadMentionMetadata.removeUnreadMentions(e.id.toString());
      }
    }
  }
  getMediaMsgs() {
    if (!this.mediaMsgs) {
      this.mediaMsgs = new R.default();
    }
    return this.mediaMsgs;
  }
  getLinkMsgs() {
    if (!this.linkMsgs) {
      this.linkMsgs = new P.default();
    }
    return this.linkMsgs;
  }
  getDocMsgs() {
    if (!this.docMsgs) {
      this.docMsgs = new M.default();
    }
    return this.docMsgs;
  }
  getParticipantCount() {
    var e;
    return ((e = this.groupMetadata) === null || e === undefined ? undefined : e.participants.length) || 1;
  }
  iAmAdmin() {
    return !!this.groupMetadata && this.groupMetadata.participants.iAmAdmin();
  }
  getProductMsgs() {
    if (!this.productMsgs) {
      this.productMsgs = new L.default();
    }
    return this.productMsgs;
  }
  getStarredMsgs() {
    let e = this.starredMsgs;
    if (!e) {
      this.starredMsgs = e = new he.StarredMsgCollection();
      this.starredMsgs.add(he.AllStarredMsgsCollection.filter(e => (0, H.getChat)(e) === this));
    }
    return e;
  }
  getKeptMsgs() {
    let e = this.keptMsgs;
    if (!e) {
      this.keptMsgs = e = new Q.KeptMsgCollection();
      this.keptMsgs.add(this.msgs.filter(e => (0, ne.getIsKept)(e)));
    }
    return e;
  }
  hasKeptMsgs() {
    return this.msgs.some(e => (0, ne.getIsKept)(e));
  }
  canSendPolls() {
    return (0, D.canSendPolls)(this);
  }
  canInvokeBot() {
    var e;
    var t;
    return !!(0, S.isBotEnabled)() && !(0, F.getIsMe)(this.contact) && !this.id.isBot() && !(0, A.isEphemeralSettingOn)(this) && ((e = this.contact.businessProfile) === null || e === undefined ? undefined : e.isBizBot3p) !== true && ((t = this.contact.businessProfile) === null || t === undefined ? undefined : t.isBizBot1p) !== true;
  }
  getAbortController() {
    return this._abortController;
  }
  getCollection() {
    if (this.isNewsletter) {
      return (0, $.default)(require("./358533.js"));
    } else {
      return require("./351053.js").ChatCollection;
    }
  }
  getGroupMetadataCollection() {
    return (0, $.default)(require("./667845.js"));
  }
  getNewsletterMetadataCollection() {
    return se.default;
  }
  updateBotInvokeSystemMsgCreated() {
    var e = this;
    return (0, a.default)(function* () {
      yield (0, Y.updateChatTable)(e.id, {
        hasCreatedBotInvokeSystemMsg: true
      });
      e.hasCreatedBotInvokeSystemMsg = true;
    })();
  }
  updateBizBotSysMsgCreated(e) {
    var t = this;
    return (0, a.default)(function* () {
      yield (0, Y.updateChatTable)(t.id, {
        bizBotSystemMsgType: e
      });
      t.bizBotSystemMsgType = e;
    })();
  }
}
De.Proxy = "chat";
De.idClass = Ie.default;
const we = (0, h.defineModel)(De);
exports.Chat = we;