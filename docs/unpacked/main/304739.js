Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logStatusReportingEvent = function (e) {
  if (!(0, a.getABPropConfigValue)("enable_status_reporting")) {
    return;
  }
  const {
    statusReportingInteraction: t
  } = e;
  new r.StatusReportingEventsWamEvent({
    statusReportInteraction: t
  }).commit();
};
var a = require("../app/287461.js");
var r = require("./399273.js");