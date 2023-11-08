Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addUserDefinedPrimaryKey: n
  } = (0, a.columnBuilder)(e.config);
  e.add("peer-message").version((0, i.peerMessageCreateTable)(), [n("id"), t("to"), t("type"), t("subtype"), t("appStateSyncKeyShare"), t("appStateSyncKeyRequest"), t("appStateFatalExceptionNotification"), t("peerDataOperationRequestMessage"), t("peerDataOperationRequestResponseMessage")]).view(e => e);
};
exports.getPeerMessageTable = function () {
  return (0, r.getStorage)().table("peer-message");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");