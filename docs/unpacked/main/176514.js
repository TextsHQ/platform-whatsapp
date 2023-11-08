Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearLastReportTimestamp = function (e) {
  (0, a.persistGroupMetadata)(e.id, {
    lastReportToAdminTimestamp: null
  }).then(() => {
    var t;
    if (!((t = e.groupMetadata) === null || t === undefined)) {
      t.set("lastReportToAdminTimestamp", null);
    }
  });
};
var a = require("../app/185212.js");