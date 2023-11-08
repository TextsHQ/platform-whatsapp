Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addUserDefinedPrimaryKey: n,
    addIndex: o
  } = (0, a.columnBuilder)(e.config);
  e.add("contact").version((0, i.contactCreateTable)(), [n("id"), t("name"), t("shortName"), t("pushname"), t("type"), t("verifiedName"), t("isBusiness"), t("isEnterprise"), t("verifiedLevel"), t("statusMute"), t("sectionHeader"), t("isAddressBookContact"), t("username"), o("isAddressBookContact"), t("isHosted")]).version((0, i.contactAddIsContactSyncCompleted)(), [t("isContactSyncCompleted"), o("isContactSyncCompleted")]).version((0, i.contactAddDisappearingModeProperties)(), [t("disappearingModeDuration"), t("disappearingModeSettingTimestamp")]).version((0, i.contactAddHash)(), [t("contactHash"), o("contactHash")]).version((0, i.contactAddLidProperties)(), [t("phoneNumber"), t("phoneNumberCreatedAt"), t("requestedPnTimestamp"), t("shareOwnPn"), t("displayNameLID"), o("phoneNumber")]).version((0, i.contactTextStatus)(), [t("textStatusString"), t("textStatusEmoji"), t("textStatusEphemeralDuration"), t("textStatusLastUpdateTime"), t("textStatusExpiryTs"), o("textStatusExpiryTs")]).view(e => e);
};
exports.getContactTable = function () {
  return (0, r.getStorage)().table("contact");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");