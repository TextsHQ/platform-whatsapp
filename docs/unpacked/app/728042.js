Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, a.getStorage)();
  const {
    addColumn: t,
    addCompositePrimaryKey: n,
    addIndex: u
  } = (0, s.columnBuilder)(e.config);
  e.add(l).version((0, o.addChatThreadLoggingTable)(), [n(["chatId", "startTs"]), u("chatId"), u("startTs"), t("msgsSent"), t("msgsReceived"), t("msgsRead"), t("viewOnceMsgsSent"), t("viewOnceMsgsReceived"), t("viewOnceMessagesOpened"), t("callOffersSent"), t("callOffersReceived"), t("totalCallDuration"), t("commerceMsgsSent"), t("commerceMsgsReceived"), t("pdpInquiriesSent"), t("reactionsSent"), t("reactionsReceived"), t("forwardMessagesSent"), t("forwardMessagesReceived"), t("editedMsgsSent"), t("botMessagesSent"), t("botMessagesReceived"), t("botMessagesEdited"), ...[...i.COUNT_FIELD_NAMES, ...r.FLAG_FIELD_NAMES].map(e => t(e))]).view(e => e);
};
exports.getChatThreadLoggingPendingEventsTable = function () {
  return (0, a.getStorage)().table(l);
};
var r = require("./742988.js");
var i = require("./244612.js");
var a = require("./732011.js");
var o = require("./612975.js");
var s = require("./322511.js");
const l = "chat-thread-logging-pending-events";