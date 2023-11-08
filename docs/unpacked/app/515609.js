Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addUserDefinedPrimaryKey: n
  } = (0, a.columnBuilder)(e.config);
  e.add("direct-connection-keys").version((0, i.directConnectionKeysCreateTable)(), [n("id"), t("certificateChain"), t("cypher"), t("cypherExpirationTimestamp")]).version((0, i.directConnectionKeysAddPostcodeColumns)(), [t("cypherType"), t("postcode"), t("postcodeSetByUser"), t("postcodeLocationName")]).view(e => e);
};
exports.getDirectConnectionKeysTable = function () {
  return (0, r.getStorage)().table("direct-connection-keys");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");