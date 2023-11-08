Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addEncryptedColumn: n,
    addIndex: s,
    addUserDefinedPrimaryKey: l
  } = (0, a.columnBuilder)(e.config);
  e.add("chat").version((0, i.chatCreateTable)(), [l("id"), t("t"), t("unreadCount"), t("unreadDividerOffset"), t("archive"), t("isReadOnly"), t("isAnnounceGrpRestrict"), t("modifyTag"), t("muteExpiration"), t("isAutoMuted"), t("name"), t("notSpam"), t("pin"), t("changeNumberOldJid"), t("changeNumberNewJid"), t("ephemeralDuration"), t("ephemeralSettingTimestamp"), t("unreadMsgAnchorId"), t("endOfHistoryTransferType"), t("lastReactionPreview"), t("chatlistPreview"), t("isDeprecated"), t("unreadEditTimestampMs"), n("chatRowOpaqueData", o.ENCRYPTED_VALUE_TYPE.ARRAY_BUFFER), t("ephemeralDisplayedExemptions"), t("disappearingModeTrigger"), t("disappearingModeInitiatedByMe"), t("hasOpened"), t("hasCreatedBotInvokeSystemMsg"), t("bizBotSystemMsgType"), t("lidOriginType"), t("hasRequestedWelcomeMsg")]).version((0, i.chatAddDisappearingModeInitiator)(), [t("disappearingModeInitiator")]).version((0, i.addUnreadMentionToChatTable)(), [t("unreadMentionsOfMe")]).version((0, i.addUnreadMentionCountToChatTable)(), [t("unreadMentionCount")]).version((0, i.addTcTokenToChatTable)(), [n("tcToken", o.ENCRYPTED_VALUE_TYPE.ARRAY_BUFFER)]).version((0, i.addTcTokenTimestampToChatTable)(), [t("tcTokenTimestamp"), s("tcTokenTimestamp")]).version((0, i.addArchiveAtMentionViewedInDrawer)(), [t("archiveAtMentionViewedInDrawer")]).version((0, i.addTcTokenSenderTimestampToChatTable)(), [t("tcTokenSenderTimestamp")]).view(e => e);
};
exports.getChatTable = function () {
  return (0, r.getStorage)().table("chat");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");
var o = require("./918720.js");