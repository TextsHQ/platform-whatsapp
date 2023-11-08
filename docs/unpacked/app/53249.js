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
  e.add("message-info").version((0, i.messageInfoCreateTable)(), [n(["msgKey", "receiverUserJid"]), t("delivery"), t("read"), t("played"), t("deviceDelivered"), t("deviceNotDelivered"), o("msgKey")]).version((0, i.messageInfoAddDeliveryPrivacyMode)(), [t("deliveryPrivacyMode")]).view(e => e);
};
exports.getMessageInfoTable = function () {
  return (0, r.getStorage)().table("message-info");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");