Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addCompositePrimaryKey: n,
    addIndex: o
  } = (0, a.columnBuilder)(e.config);
  e.add("pending-membership-approval-request").version((0, i.membershipApprovalRequestCreateTable)(), [n(["groupId", "id"]), o("groupId"), t("t"), t("addedBy"), t("requestMethod"), t("parentGroupId")]).view(e => e);
};
exports.getMembershipApprovalRequestTable = function () {
  return (0, r.getStorage)().table("pending-membership-approval-request");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");