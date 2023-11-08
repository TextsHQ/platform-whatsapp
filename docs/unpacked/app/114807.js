Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addEncryptedColumn: n,
    addUserDefinedPrimaryKey: s,
    addIndex: l,
    addCompositeIndex: u
  } = (0, a.columnBuilder)(e.config);
  e.add("history-sync-notification").version((0, i.historySyncNotificationsCreateTable)(), [s("msgKey"), t("downloadOptions"), t("syncType"), n("chunkEncryptionKey", o.ENCRYPTED_VALUE_TYPE.STRING), t("chunkOrder"), t("processed"), l("syncType"), l("chunkOrder"), l("processed"), t("isReupload"), t("historySyncStepStartedTs"), t("historySyncPayloadSize"), t("reuploadPending")]).version((0, i.encryptHistorySyncDirectPath)(), [n("directPath", o.ENCRYPTED_VALUE_TYPE.STRING)]).version((0, i.encryptHistorySyncFilehash)(), [n("filehash", o.ENCRYPTED_VALUE_TYPE.STRING), n("encFilehash", o.ENCRYPTED_VALUE_TYPE.STRING)]).version((0, i.addInitialHistBootstrapInlinePayloadColumn)(), [n("initialHistBootstrapInlinePayload", o.ENCRYPTED_VALUE_TYPE.ARRAY_BUFFER)]).version((0, i.addPeerDataRequestSessionIdColumn)(), [t("peerDataRequestSessionId")]).version((0, i.addPeerDataRequestChatIdColumn)(), [t("peerDataRequestChatId")]).version((0, i.addProgressColumn)(), [t("progress")]).version((0, i.addProcessedAndSyncTypeCompositeIndex)(), [u(["processed", "syncType"])]).view(e => e).useDbMsgEncKeyForEncryptedCol(true);
};
exports.getHistorySyncNotificationTable = function () {
  return (0, r.getStorage)().table("history-sync-notification");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");
var o = require("./918720.js");