Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOrderEphemeralExemptionSystemMsg = function (e) {
  return (0, r.genNotificationMsg)(e, {
    type: "notification_template",
    subtype: "order_ephemeral_exemption",
    templateParams: []
  });
};
var r = require("./389293.js");