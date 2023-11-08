Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MEMBER_ADD_MODE = undefined;
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addUserDefinedPrimaryKey: n,
    addIndex: o,
    removeColumn: s
  } = (0, a.columnBuilder)(e.config);
  e.add("group-metadata").version((0, i.groupMetadataCreateTable)(), [n("id"), t("subject"), t("subjectTime"), t("creation"), t("owner"), t("desc"), t("descId"), t("descTime"), t("descOwner"), t("restrict"), t("announce"), t("a_v_id"), t("noFrequentlyForwarded"), t("ephemeralDuration"), t("membershipApprovalMode"), t("size"), t("support"), t("suspended"), t("terminated"), t("notAddedByContact"), t("addedBy"), t("parentGroup"), t("subgroups"), t("isParentGroup"), t("isParentGroupClosed"), t("defaultSubgroup"), t("generalSubgroup"), t("growthLockExpiration"), t("growthLockType"), t("lastActivityTimestamp"), t("lastSeenActivityTimestamp"), t("isLidAddressingMode"), t("reportToAdminMode"), t("lastReportToAdminTimestamp"), t("allowNonAdminSubGroupCreation"), t("memberAddMode"), t("generalChatAutoAddDisabled")]).version((0, i.migrateSubgroupsArray)(), [s("subgroups"), t("unjoinedSubgroups")]).version((0, i.removeUnjoinedSubgroups)(), [s("unjoinedSubgroups")]).version((0, i.removeSpamColumnsInGroupMetadata)(), [s("notAddedByContact"), s("addedBy")]).version((0, i.addCommunityAdminPromotionColumns)(), [t("displayCadminPromotion")]).version((0, i.renameCommunityAdminPromotionColumns)(), [s("displayCadminPromotion"), t("acknowledgedCadminPromotion")]).version((0, i.removeCommunityAdminPromotionColumns)(), [s("acknowledgedCadminPromotion")]).version((0, i.addIncognitoGroupMetadataColumn)(), [t("incognito")]).version((0, i.groupMetadataAddParentIndex)(), [o("parentGroup")]).view(e => e);
};
exports.getGroupMetadataTable = function () {
  return (0, r.getStorage)().table("group-metadata");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");
const o = require("../vendor/76672.js")({
  ADMIN_ADD: "admin_add",
  ALL_MEMBER_ADD: "all_member_add"
});
exports.MEMBER_ADD_MODE = o;