Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addUserDefinedPrimaryKey: n
  } = (0, a.columnBuilder)(e.config);
  e.add("orphan-payment-notification").version((0, i.orphanPaymentNotificationCreateTable)(), [n("msgKey"), t("receiver"), t("currency"), t("amount1000"), t("type"), t("status"), t("ts")]).view(e => e);
};
exports.getTable = function () {
  return (0, r.getStorage)().table("orphan-payment-notification");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");