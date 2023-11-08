var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOrUpdateChatEvents = function (e) {
  return p.enqueue((0, i.default)(function* () {
    const t = (yield (0, u.getChatThreadLoggingPendingEventsTable)().bulkGet(e.map(e => {
      let {
        chatId: t,
        startTs: n
      } = e;
      return [t, n];
    }))).map((t, n) => {
      const r = e[n];
      const i = function (e, t, n) {
        if (n == null) {
          return (0, a.default)({
            chatId: e,
            startTs: t
          }, d);
        }
        s.FLAG_FIELD_NAMES.forEach(e => {
          if (n[e] == null) {
            n[e] = d[e];
          }
        });
        l.COUNT_FIELD_NAMES.forEach(e => {
          if (n[e] == null) {
            n[e] = d[e];
          }
        });
        Object.keys(c).forEach(e => {
          if (n[e] == null) {
            n[e] = d[e];
          }
        });
        return n;
      }(r.chatId, r.startTs, t);
      l.COUNT_FIELD_NAMES.forEach(e => {
        i[e] += r[e];
      });
      s.FLAG_FIELD_NAMES.forEach(e => {
        i[e] = r[e];
      });
      i.msgsSent += r.addMsgsSent;
      i.msgsReceived += r.addMsgsReceived;
      i.msgsRead += r.addMsgsRead;
      i.viewOnceMsgsSent += r.addViewOnceMsgsSent;
      i.viewOnceMsgsReceived += r.addViewOnceMsgsReceived;
      i.viewOnceMessagesOpened += r.addViewOnceMsgsOpened;
      i.callOffersSent += r.addCallOffersSent;
      i.callOffersReceived += r.addCallOffersReceived;
      i.totalCallDuration += r.addTotalCallDuration;
      i.commerceMsgsSent += r.addCommerceMsgsSent;
      i.commerceMsgsReceived += r.addCommerceMsgsReceived;
      i.pdpInquiriesSent += r.addPdpInquiriesSent;
      i.reactionsSent += r.addReactionsSent;
      i.reactionsReceived += r.addReactionsReceived;
      i.forwardMessagesSent += r.addForwardMessagesSent;
      i.forwardMessagesReceived += r.addForwardMessagesReceived;
      i.editedMsgsSent += r.addEditedMsgsSent;
      i.botMessagesSent += r.addBotMessagesSent;
      i.botMessagesReceived += r.addBotMessagesReceived;
      i.botMessagesEdited += r.addBotMessagesEdited;
      return i;
    });
    return (0, u.getChatThreadLoggingPendingEventsTable)().bulkCreateOrReplace(t);
  }));
};
exports.deleteBeforeInclusive = function () {
  return f.apply(this, arguments);
};
exports.getBeforeInclusive = function (e) {
  return (0, u.getChatThreadLoggingPendingEventsTable)().lessThan(["startTs"], e, {
    inclusive: true
  });
};
exports.getChatEvent = function (e, t) {
  return (0, u.getChatThreadLoggingPendingEventsTable)().get([e, t]);
};
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/81109.js"));
var o = require("./652204.js");
var s = require("./742988.js");
var l = require("./244612.js");
var u = require("./728042.js");
const c = Object.freeze({
  msgsSent: 0,
  msgsReceived: 0,
  msgsRead: 0,
  viewOnceMsgsSent: 0,
  viewOnceMsgsReceived: 0,
  viewOnceMessagesOpened: 0,
  callOffersSent: 0,
  callOffersReceived: 0,
  totalCallDuration: 0,
  commerceMsgsSent: 0,
  commerceMsgsReceived: 0,
  pdpInquiriesSent: 0,
  reactionsSent: 0,
  reactionsReceived: 0,
  forwardMessagesSent: 0,
  forwardMessagesReceived: 0,
  editedMsgsSent: 0,
  botMessagesSent: 0,
  botMessagesReceived: 0,
  botMessagesEdited: 0
});
const d = Object.freeze((0, a.default)((0, a.default)((0, a.default)({}, l.COUNT_FIELDS), s.FLAG_FIELDS), c));
const p = new o.PromiseQueue();
function f() {
  return (f = (0, i.default)(function* (e) {
    return yield (0, u.getChatThreadLoggingPendingEventsTable)().bulkDeleteRange(["startTs"], 0, e + 1);
  })).apply(this, arguments);
}