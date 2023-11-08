Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addUserDefinedPrimaryKey: n,
    addArrayIndex: o
  } = (0, a.columnBuilder)(e.config);
  e.add("participant").version((0, i.participantCreateTable)(), [n("groupId"), t("senderKey"), t("participants"), t("pastParticipants"), t("admins"), t("rotateKey"), t("version"), o("participants"), t("deviceSyncComplete"), t("staleType")]).view(e => e);
};
exports.getParticipantTable = function () {
  return (0, r.getStorage)().table("participant");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");