var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleInitialSyncMsgs = function () {
  return ne.apply(this, arguments);
};
exports.handleNonBlockingData = function () {
  return ae.apply(this, arguments);
};
exports.handleProgressiveHistorySyncMsgs = function () {
  return re.apply(this, arguments);
};
exports.handlePushName = function () {
  return oe.apply(this, arguments);
};
exports.handleStatusV3Messages = function () {
  return ie.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./122583.js");
var s = require("./418987.js");
var l = require("./229079.js");
var u = r(require("./670983.js"));
var c = require("./998667.js");
var d = require("./632157.js");
var p = require("./287461.js");
var f = require("./402994.js");
var _ = require("./317851.js");
var g = require("./652056.js");
var m = require("./34214.js");
var h = require("./160048.js");
var y = require("./359987.js");
var E = require("./984330.js");
var S = require("./37237.js");
var v = require("./735618.js");
var T = require("./621180.js");
var M = require("./780549.js");
var A = require("./177938.js");
var b = require("./389293.js");
var C = require("./403206.js");
var P = require("./463867.js");
var O = require("./448609.js");
var I = r(require("./221329.js"));
var R = require("./257845.js");
var N = require("./615263.js");
var D = require("./921698.js");
var w = require("./319169.js");
var L = require("./700846.js");
var k = require("./267420.js");
var G = require("./591800.js");
var U = require("./324720.js");
var x = require("./190274.js");
var B = require("./923544.js");
var F = require("./533494.js");
var j = require("./60370.js");
var Y = require("./601031.js");
var K = require("./756588.js");
var W = require("./691195.js");
var V = require("./999821.js");
var H = require("./76256.js");
var $ = r(require("./775410.js"));
var z = require("./129417.js");
var q = require("./819539.js");
var J = require("./157942.js");
var Q = require("./459857.js");
var X = require("./15321.js");
var Z = require("./117429.js");
var ee = r(require("./124928.js"));
var te = require("./669050.js");
function ne() {
  return (ne = (0, a.default)(function* (e, t, n, r, i, a, o, s) {
    __LOG__(2)`[history sync] starts hanlding initial sync msgs`;
    const u = {};
    const c = (0, Q.assertGetMe)();
    const d = (0, te.toUserWid)(c);
    const f = c.getDeviceId();
    const g = {};
    const y = {};
    const E = [];
    let T = 0;
    const A = [];
    if (e.aiWaitListState != null) {
      __LOG__(2)`[history sync][bot] setting bot waitlist state`;
      yield (0, q.setBotWaitlistState)(e.aiWaitListState);
      if (e.aiWaitListState === j.HistorySync$BotAIWaitListState.IN_WAITLIST) {
        __LOG__(2)`[history sync][bot] query waitlist state`;
        (0, Y.queryBotWaitlistState)(true);
      } else {
        __LOG__(2)`[history sync][bot] trigger waitlist state update`;
        M.Cmd.botWaitlistStateUpdated();
      }
    }
    for (const i of e.conversations) {
      var P;
      var R;
      var D;
      const e = (0, te.createWid)(i.id);
      if (e.isNewsletter()) {
        continue;
      }
      if (e.isLid() && !(0, x.lidHistorySyncEnabled)()) {
        return;
      }
      if (e.isUser()) {
        if (e.isLid()) {
          const {
            pnJid: t
          } = i;
          if (t != null) {
            r.push({
              lid: (0, te.toUserWid)(e),
              pn: (0, te.createUserWid)(t)
            });
          }
          const {
            displayName: a,
            shareOwnPn: o,
            username: l
          } = i;
          if (i.username != null && (0, z.usernameDisplayedEnabled)() && l != null) {
            s.push({
              userId: (0, te.toUserWid)(e),
              username: l
            });
          }
          if (a != null || o != null) {
            const t = {};
            if (a != null) {
              t.displayNameLID = a;
            }
            if (o != null) {
              t.shareOwnPn = o;
            }
            n.push({
              lid: (0, te.toUserWid)(e),
              data: t
            });
          }
        } else if (i.lidJid != null) {
          const t = (0, te.createWid)(i.lidJid);
          r.push({
            lid: (0, te.toUserWid)(t),
            pn: (0, te.toUserWid)(e)
          });
        }
      }
      let a = [];
      let o = [];
      let c = [];
      let h = [];
      T += i.messages.length;
      let M;
      let I = [];
      if (i.messages.length === 0) {
        u[i.id] = -1;
      }
      if (i.pHash) {
        y[i.id] = i.pHash;
      }
      i.messages.forEach((n, r) => {
        var s;
        var l;
        var d;
        var p;
        if (r === i.messages.length - 1) {
          u[i.id] = n.msgOrderId;
        }
        if ((n == null || (s = n.message) === null || s === undefined || (l = s.message) === null || l === undefined || (d = l.protocolMessage) === null || d === undefined ? undefined : d.type) === F.Message$ProtocolMessage$Type.REQUEST_WELCOME_MESSAGE) {
          return void __LOG__(2)`[history sync] Dropping request welcome message`;
        }
        const f = (0, N.parseWebMsgInfoAndReturnNullOnFailure)(e, t, n.message);
        var g;
        if (!(I.push(f), a = a.concat((0, K.parseWebMsgInfoReaction)(n.message, f)), (0, _.isUnifiedPinAddonInfraEnabled)())) {
          o = o.concat((0, B.parseWebMsgInfoPollUpdates)({
            webMsgInfo: n.message,
            parsedWebMsgInfo: f,
            isFromCag: (g = i.isDefaultSubgroup) !== null && g !== undefined && g
          }));
        }
        if (!(0, _.isUnifiedPinAddonInfraEnabled)()) {
          c = c.concat((0, U.parseWebMsgInfoPinInChat)(n.message, f));
        }
        h = h.concat((0, m.parseHistorySyncMsg)({
          webMsgInfo: n.message,
          parsedWebMsgInfo: f,
          isFromCag: (p = i.isDefaultSubgroup) !== null && p !== undefined && p
        }));
        if ((f == null ? undefined : f.subtype) === "biz_bot_1p_disclosure") {
          M = S.BizBotType.BIZ_1P;
        }
        if ((f == null ? undefined : f.subtype) === "biz_bot_3p_disclosure") {
          M = S.BizBotType.BIZ_3P;
        }
      });
      I = I.filter(Boolean).reverse();
      const w = i.contactPrimaryIdentityKey;
      if (w && ee.default.isUser(e)) {
        const t = (0, V.createSignalAddress)((0, te.toUserWid)(e)).toString();
        const n = (0, V.bufferToStr)((0, C.toSignalCurvePubKey)(w));
        if (e.equals((0, Q.getMeUser)())) {
          (0, N.checkSelfHistorySyncIdentity)(t, n);
        } else {
          A.push({
            identifier: t,
            identityKey: n
          });
        }
      }
      const L = (0, Z.getGlobalSecurityNotifications)() && !(0, p.getABPropConfigValue)("adv_v2_m6");
      if (!e.isStatusV3() && L) {
        const t = (0, b.genDeviceNotificationMsg)(e, d, [f], []);
        I.push(t);
      }
      let k;
      let G;
      let j;
      if (((P = i.disappearingMode) === null || P === undefined ? undefined : P.initiator) != null) {
        switch (i.disappearingMode.initiator) {
          case F.DisappearingMode$Initiator.CHANGED_IN_CHAT:
            k = O.DisappearingModeInitiator.ChangedInChat;
            G = O.DisappearingModeTrigger.ChatSettings;
            break;
          case F.DisappearingMode$Initiator.INITIATED_BY_ME:
            k = O.DisappearingModeInitiator.InitiatedByMe;
            G = O.DisappearingModeTrigger.AccountSettings;
            j = true;
            break;
          case F.DisappearingMode$Initiator.INITIATED_BY_OTHER:
            k = O.DisappearingModeInitiator.InitiatedByOther;
            G = O.DisappearingModeTrigger.AccountSettings;
            j = false;
        }
      }
      const Y = i.tcToken != null && i.tcTokenTimestamp != null;
      const W = {
        t: (0, l.maybeNumberOrThrowIfTooLarge)((R = i.conversationTimestamp) !== null && R !== undefined ? R : i.lastMsgTimestamp),
        id: e,
        unreadCount: i.unreadCount,
        ephemeralDuration: i.ephemeralExpiration,
        ephemeralSettingTimestamp: i.ephemeralSettingTimestamp,
        disappearingModeInitiator: k,
        disappearingModeTrigger: G,
        disappearingModeInitiatedByMe: j,
        endOfHistoryTransferType: (D = i.endOfHistoryTransferType) !== null && D !== undefined ? D : v.ConversationEndOfHistoryTransferModelPropType.INCOMPLETE,
        name: i.name,
        notSpam: i.notSpam,
        pendingInitialLoading: false,
        unreadMentionCount: i.unreadMentionCount,
        tcToken: Y ? i.tcToken : null,
        tcTokenTimestamp: Y ? i.tcTokenTimestamp : null,
        tcTokenSenderTimestamp: i.tcTokenSenderTimestamp,
        isDeprecated: i.pnhDuplicateLidThread,
        bizBotSystemMsgType: M
      };
      if (i.archived != null) {
        W.archive = i.archived;
      }
      try {
        (0, N.saveGroupMetadataForLeftGroup)(i, W.id);
      } catch (e) {
        __LOG__(3, undefined, undefined, undefined, ["history-sync"])`[history sync] history_sync_notification_handler: saveGroupMetadataForLeftGroup failed`;
      }
      E.push(W);
      g.hasOwnProperty(i.id);
      g[i.id] = {
        chatInfo: W,
        msgs: I,
        reactionMessages: a,
        pollVotes: o,
        pinInChatMessages: c,
        unifiedAddons: h
      };
    }
    i.mdBootstrapMessagesCount = T;
    i.mdBootstrapChatsCount = e.conversations.length;
    (0, N.commitHistoryDownloadedMetric)(i, t.historySyncStepStartedTs, true, o);
    $.default.markInitialHistorySyncCountDebugStats(T, E.length);
    yield (0, H.getPersistSignalProtocolStore)().bulkCreateIdentity(A);
    yield (0, I.default)(E) || Promise.resolve();
    yield se(g);
    yield (0, h.updateCurrentlyProcessed)(t.msgKey, t.syncType, t.chunkOrder);
    (0, N.commitHistoryDataAppliedMetric)(a, t.historySyncStepStartedTs, true, true);
    __LOG__(2)`[history sync] storing initial sync messages complete, ${(0, N.getHistorySyncLogDetailsString)(t, T, E.length)}`;
    __LOG__(2)`[history sync] set history initial sync boundary with length ${Object.keys(u).length}`;
    yield (0, N.handleChatThreadLoggingMetadata)(e);
    (0, J.setHistoryInitialSyncBoundary)(u);
    (0, X.setInitialGroupPhash)(y);
  })).apply(this, arguments);
}
function re() {
  return (re = (0, a.default)(function* (e, t, r, i, a, s, l, u, d) {
    __LOG__(2)`[history sync] starts handling recent/full/on-demand sync progressive history messages`;
    yield Promise.resolve();
    return (0, P.storeRecentAndFullHistSyncMessages)(e, t, true, true, u, d).then(() => {
      const n = t.map(e => e);
      const r = e.map(e => e.id.toString());
      (0, T.checkUpdateForOrphanReactions)(r);
      return (0, c.checkOrphanMutations)(r, n);
    }).then(() => (0, require("./189865.js").storeReactionMsgBulk)(r)).then(() => Promise.all(i).then(e => {
      const t = Array.prototype.concat(...e);
      return (0, require("./189865.js").storePollVotesBulk)(t);
    })).then(() => {
      if ((0, G.isPinnedMessagesM1ReceiverEnabled)()) {
        return (0, require("./183381.js").storePinInChatMsgBulk)(a);
      }
    }).then(() => Promise.all(s).then(e => (0, g.processHistoryMsgs)([].concat(...e)))).then(() => {
      const e = require("./351053.js").ChatCollection;
      l.forEach(t => {
        if (!t || !t.id || !t.id.remote) {
          return;
        }
        const n = t.id.remote;
        if (n.isNewsletter()) {
          return;
        }
        const r = e.get(n);
        if (r && r.msgs.length === 0 && !r.pendingInitialLoading) {
          (0, y.frontendFireAndForget)("processMultipleMessages", {
            chatId: n,
            msgObjs: [t],
            meta: {
              add: "last",
              isHistory: true
            },
            processMessagesOrigin: "historyMsgHandlerAction",
            chatMsgsCollection: null
          });
        }
      });
    }).catch((0, o.filteredCatch)(E.LogoutDrop, () => {})).catch(e => {
      __LOG__(4, undefined, new Error(), true)`[history sync] Error: ${e.name}, message: ${e.message}, stack: ${e.stack}`;
      SEND_LOGS("handleProgressiveHistorySyncMsgs: error storing/processing multiple messages");
    });
  })).apply(this, arguments);
}
function ie() {
  return (ie = (0, a.default)(function* (e, t, n, r, o) {
    __LOG__(2)`[history sync] start processing status V3`;
    n.mdBootstrapMessagesCount = e.statusV3Messages.length;
    (0, N.commitHistoryDownloadedMetric)(n, t.historySyncStepStartedTs, true, o);
    e.statusV3Messages.sort((e, t) => {
      let {
        messageTimestamp: n
      } = e;
      let {
        messageTimestamp: r
      } = t;
      return (0, d.castToUnixTime)(parseInt(n, 10)) - (0, d.castToUnixTime)(parseInt(r, 10));
    });
    yield Promise.all(e.statusV3Messages.map(function () {
      var e = (0, a.default)(function* (e) {
        let t = null;
        let n = [];
        if (e.key.fromMe === true) {
          t = (0, Q.getMeUser)();
          n = e.userReceipt.filter(e => e.readTimestamp != null && e.readTimestamp !== 0);
        } else {
          t = (0, te.createWid)((0, u.default)(e.participant, "msg.participant"));
          if (t.isLid() && !(0, x.lidHistorySyncEnabled)()) {
            return;
          }
        }
        const r = {
          type: R.MESSAGE_TYPE.OTHER_STATUS,
          externalId: (0, u.default)(e.key.id, "msg.key.id"),
          ts: (0, d.castToUnixTime)(parseInt(e.messageTimestamp, 10)),
          edit: -1,
          isHsm: false,
          count: null,
          chat: (0, te.createWid)(s.STATUS_JID),
          author: (0, u.default)(t, "author"),
          pushname: null,
          isDirect: false
        };
        const a = yield (0, k.parseMessage)({
          info: r,
          ciphertextType: "skmsg",
          msgProtobuf: (0, u.default)(e.message, "msg.message"),
          hsmInfo: null
        });
        const o = a.renderableMsgs && a.renderableMsgs;
        if (!o || o.length !== 1) {
          return Promise.resolve();
        }
        let c = o[0];
        if (e.participant === "0@s.whatsapp.net" && (!(0, p.getABPropConfigValue)("web_status_psa_history_sync") || c.staticUrl == null)) {
          return Promise.resolve();
        }
        if (e.ignore === true) {
          c = (0, i.default)((0, i.default)({}, c), {}, {
            invis: true,
            ack: f.ACK.READ
          });
        }
        yield (0, L.handleSingleMsg)(c.id.remote, c, "historyStatusV3Messages", R.MessageOverwriteOption.NO_OVERWRITE);
        n.forEach(e => {
          var t;
          const n = (0, l.numberOrThrowIfTooLarge)((t = e.readTimestamp) !== null && t !== undefined ? t : 0);
          const r = (0, te.createWid)(e.userJid);
          w.receiptBatcher.acceptOtherReceipt({
            ts: n,
            ack: f.ACK.READ,
            receiverId: r,
            msgKeys: [c.id.toString()]
          });
        });
        return true;
      });
      return function () {
        return e.apply(this, arguments);
      };
    }()));
    yield (0, h.updateCurrentlyProcessed)(t.msgKey, t.syncType, t.chunkOrder);
    (0, N.commitHistoryDataAppliedMetric)(r, t.historySyncStepStartedTs, true);
    __LOG__(2)`[history sync] storing Status V3 complete, ${(0, N.getHistorySyncLogDetailsString)(t, e.statusV3Messages.length)}`;
  })).apply(this, arguments);
}
function ae() {
  return (ae = (0, a.default)(function* (e, t) {
    __LOG__(2)`[history sync] processing history non blocking data`;
    if (e.pastParticipants != null && e.pastParticipants.length > 0) {
      yield (0, N.processPastParticipants)(e, t);
    }
    (0, D.processRecentStickers)(e, t);
  })).apply(this, arguments);
}
function oe() {
  return (oe = (0, a.default)(function* (e, t, n, r, i) {
    __LOG__(2)`[history sync] start processing initial pushname`;
    (0, N.commitHistoryDownloadedMetric)(n, t.historySyncStepStartedTs, true, i);
    const a = e.pushnames.map(e => ({
      id: e.id || "",
      pushname: e.pushname || ""
    }));
    yield (0, W.getContactTable)().bulkCreateOrMerge(a);
    yield (0, h.updateCurrentlyProcessed)(t.msgKey, t.syncType, t.chunkOrder);
    const o = e.pushnames.map(e => {
      const t = (0, te.createWid)(e.id || "");
      const n = A.ContactCollection.get(t);
      return {
        id: t,
        pushname: e.pushname || "",
        type: (n == null ? undefined : n.type) || "out",
        name: n == null ? undefined : n.name
      };
    });
    A.ContactCollection.add(o, {
      merge: true
    });
    (0, N.commitHistoryDataAppliedMetric)(r, t.historySyncStepStartedTs, true);
    __LOG__(2)`[history sync] storing initial pushname complete with ${e.pushnames.length} records`;
  })).apply(this, arguments);
}
function se(e) {
  const t = {
    add: "last",
    isHistory: true
  };
  const r = Object.keys(e).map(n => (0, y.frontendSendAndReceive)("processMultipleMessages", {
    chatId: (0, te.createWid)(n),
    msgObjs: e[n].msgs,
    meta: t,
    processMessagesOrigin: "historyMsgHandlerAction",
    chatMsgsCollection: null
  }));
  return Promise.all([...r, (0, P.storeInitialSyncMessages)(e)]).then(() => {
    const t = Array.prototype.concat(...Object.keys(e).map(t => e[t].msgs.map(e => e.id.toString())));
    (0, T.checkUpdateForOrphanReactions)(t);
    return (0, c.checkOrphanMutations)(t, Object.keys(e));
  }).then(() => {
    const t = Array.prototype.concat(...Object.keys(e).map(t => e[t].reactionMessages));
    return (0, require("./189865.js").storeReactionMsgBulk)(t);
  }).then(() => Promise.all(Array.prototype.concat(...Object.keys(e).map(t => e[t].pollVotes))).then(e => {
    const t = Array.prototype.concat(...e);
    return (0, require("./189865.js").storePollVotesBulk)(t);
  })).then(() => {
    if ((0, G.isPinnedMessagesM1ReceiverEnabled)()) {
      const t = Array.prototype.concat(...Object.keys(e).map(t => e[t].pinInChatMessages));
      return (0, require("./183381.js").storePinInChatMsgBulk)(t);
    }
  }).then(() => Promise.all(Array.prototype.concat(...Object.keys(e).map(t => e[t].unifiedAddons))).then(e => (0, g.processHistoryMsgs)([].concat(...e)))).catch((0, o.filteredCatch)(E.LogoutDrop, () => {})).catch(e => {
    __LOG__(4, undefined, new Error(), true)`[history sync] Error: ${e.name}, message: ${e.message}, stack: ${e.stack}`;
    SEND_LOGS("msg_handler for MD: error storing/processing multiple messages");
  });
}