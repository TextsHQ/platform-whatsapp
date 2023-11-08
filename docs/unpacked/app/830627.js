Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addUserDefinedPrimaryKey: n,
    removeColumn: o
  } = (0, a.columnBuilder)(e.config);
  e.add("verified-business-name").version((0, i.verifiedBusinessNameCreateTable)(), [n("id"), t("serial"), t("name"), t("isApi"), t("level"), t("actualActors"), t("hostStorage"), t("privacyModeTs")]).version((0, i.verifiedBusinessNameAddPrivacyMode)(), [t("privacyMode"), o("actualActors"), o("hostStorage"), o("privacyModeTs")]).version((0, i.verifiedBusinessNameAddSmbColumn)(), [t("isSmb")]).view(e => e);
};
exports.getVerifiedBusinessNameTable = function () {
  return (0, r.getStorage)().table("verified-business-name");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");