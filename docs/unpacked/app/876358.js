Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addUserDefinedPrimaryKey: n
  } = (0, a.columnBuilder)(e.config);
  e.add("newsletter-metadata").version((0, i.newsletterMetadataCreateTable)(), [n("id"), t("creationTime"), t("name"), t("nameUpdateTime"), t("description"), t("descriptionUpdateTime"), t("handle"), t("inviteCode"), t("size"), t("verified"), t("membershipType"), t("privacy"), t("website"), t("reactionCodesSetting"), t("suspended"), t("geosuspended"), t("terminated"), t("messageDeliveryUpdates"), t("geosuspendedCountries")]).view(e => e);
};
exports.getNewsletterMetadataTable = function () {
  return (0, r.getStorage)().table("newsletter-metadata");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");