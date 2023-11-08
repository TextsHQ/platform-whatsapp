Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addUserDefinedPrimaryKey: n,
    addCompositeIndex: o
  } = (0, a.columnBuilder)(e.config);
  e.add("group-invite-v4").version((0, i.groupInviteV4CreateTable)(), [n("id"), t("from"), t("to"), t("groupId"), t("expiration"), t("expired"), o(["from", "to", "groupId"])]).version((0, i.addGroupFromKeyToGroupInviteV4)(), [o(["from", "groupId"])]).view(e => e);
};
exports.getGroupInviteV4Table = function () {
  return (0, r.getStorage)().table("group-invite-v4");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");