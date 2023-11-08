Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genSagaInitSystemMsg = function (e) {
  return (0, r.genNotificationMsg)(e, {
    type: "notification_template",
    subtype: "saga_init",
    templateParams: []
  });
};
var r = require("./389293.js");