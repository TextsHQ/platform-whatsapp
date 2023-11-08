Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logRTAReportingEvent = function (e) {
  if (!(0, a.getABPropConfigValue)("report_to_admin_kill_switch")) {
    return;
  }
  const {
    reportToAdminInteraction: t,
    groupId: n
  } = e;
  new r.ReportToAdminEventsWamEvent({
    reportToAdminInteraction: t,
    rtaGroupId: n
  }).commit();
};
var a = require("../app/287461.js");
var r = require("./993298.js");