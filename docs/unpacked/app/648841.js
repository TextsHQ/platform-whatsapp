var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatThreadLoggingEventUploaderImpl = undefined;
var i = r(require("../vendor/348926.js"));
var a = r(require("./670983.js"));
var o = require("./632157.js");
var s = require("./287461.js");
var l = require("./354458.js");
var u = require("./37237.js");
var c = require("./887107.js");
var d = require("./742988.js");
var p = require("./244612.js");
var f = require("./257147.js");
var _ = require("./862159.js");
var g = require("./549636.js");
exports.ChatThreadLoggingEventUploaderImpl = class {
  constructor(e, t) {
    this.eventStore = t;
    this.metadataStore = e;
  }
  uploadEvents(e) {
    var t = this;
    return (0, i.default)(function* () {
      var n;
      var r;
      const m = (n = e == null ? undefined : e.purgeAfter) === null || n === undefined || n;
      const h = yield t.metadataStore.getOffset();
      if (h == null) {
        __LOG__(3)`ChatThreadLoggingBatchEventUploader: offset not in store!`;
        return -1;
      }
      const y = (r = e == null ? undefined : e.lastStartTs) !== null && r !== undefined ? r : (0, f.computeStartTs)(h, (0, o.unixTime)() - o.DAY_SECONDS);
      if (t.secret == null) {
        const e = yield t.metadataStore.getSecret();
        if (e == null) {
          __LOG__(3)`ChatThreadLoggingBatchEventUploader: secret not in store!`;
          return -1;
        }
        t.secret = e;
      }
      const E = yield t.eventStore.getBeforeInclusive(y);
      try {
        yield Promise.all(E.map(function () {
          var e = (0, i.default)(function* (e) {
            const n = (0, f.getThreadDs)(e.startTs);
            const r = e.contactInfo;
            const i = new c.ChatMessageCountsWamEvent({
              messagesSent: e.msgsSent,
              messagesReceived: e.msgsReceived,
              viewOnceMessagesSent: e.viewOnceMsgsSent,
              viewOnceMessagesReceived: e.viewOnceMsgsReceived,
              viewOnceMessagesOpened: e.viewOnceMessagesOpened,
              threadDs: n,
              threadId: yield (0, f.generateThreadID)((0, a.default)(t.secret, "_this.secret"), e.chatId, n),
              isAGroup: e.contactInfo.isAGroup,
              groupSize: r.isAGroup ? r.groupSize : undefined,
              isAContact: r.isAGroup ? undefined : r.isAContact,
              isArchived: e.isArchived,
              isPinned: e.isPinned,
              messagesStarred: e.messagesStarred,
              messagesRead: e.msgsRead,
              messagesUnread: e.messagesUnread,
              chatMuted: e.isMuted ? g.CHAT_MUTED_TYPE.MUTED_NO_NOTIFICATIONS : g.CHAT_MUTED_TYPE.NOT_MUTED,
              callOffersSent: e.callOffersSent,
              callOffersReceived: e.callOffersReceived,
              totalCallDuration: e.totalCallDuration,
              typeOfGroup: e.contactInfo.groupType != null ? (0, _.groupTypeToWamEnum)(e.contactInfo.groupType) : undefined,
              isPnhEnabledChat: e.isPnhEnabledChat,
              reactionsSent: e.reactionsSent,
              reactionsReceived: e.reactionsReceived,
              isMessageYourself: e.isMessageYourself,
              forwardMessagesSent: e.forwardMessagesSent,
              forwardMessagesReceived: e.forwardMessagesReceived,
              editedMsgsSent: e.editedMsgsSent,
              totalMessageToAgentCnt: e.botMessagesSent,
              totalMessageFromAgentCnt: e.botMessagesReceived,
              totalMessageEditsFromAgentCnt: e.botMessagesEdited,
              isUserAgent: e.isUserAgent
            });
            if ((0, s.getABPropConfigValue)("dm_initiator_trigger")) {
              if (e.ephemeralityTriggerAction != null) {
                i.ephemeralityTriggerAction = e.ephemeralityTriggerAction;
              }
              if (e.ephemeralityInitiator != null) {
                i.ephemeralityInitiator = e.ephemeralityInitiator;
              }
            }
            p.COUNT_FIELD_NAMES.forEach(t => {
              i[t] = e[t];
            });
            d.FLAG_FIELD_NAMES.forEach(t => {
              i[t] = e[t];
            });
            if (!r.isAGroup) {
              if ((0, l.isBizBot3pEnabled)()) {
                i.isUser3pBotChat = r.automatedType === u.BizBotAutomatedType.FULL_3P;
              }
              if ((0, l.isBizBot1pEnabled)()) {
                i.isUser1pBizBotChat = r.automatedType === u.BizBotAutomatedType.PARTIAL_1P;
              }
            }
            i.commit();
          });
          return function () {
            return e.apply(this, arguments);
          };
        }()));
      } catch (e) {
        __LOG__(4, undefined, new Error(), true)`chat_thread_logging: error uploading events: ${e.toString()}`;
        SEND_LOGS("thread-logging-upload-failure");
      }
      if (m) {
        const e = yield t.eventStore.deleteBeforeInclusive(y);
        if (e !== E.length) {
          __LOG__(4, undefined, new Error())`uploadEvents: uploaded ${E.length} events but only deleted ${e} (they should be the same!)`;
        }
      }
      yield t.metadataStore.setLastUploadedStartTs(y);
      return E.length;
    })();
  }
};