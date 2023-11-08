Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addUserDefinedPrimaryKey: n
  } = (0, a.columnBuilder)(e.config);
  e.add("subscription").version((0, i.subscriptionCreateTable)(), [n("id"), t("isDeactivated"), t("isAutoRenewing"), t("expirationDate")]).view(e => e);
};
exports.getSubscriptionTable = function () {
  return (0, r.getStorage)().table("subscription");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");