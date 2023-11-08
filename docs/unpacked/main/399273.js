Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusReportingEventsWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./865772.js");
const o = (0, a.defineEvents)({
  StatusReportingEvents: [3920, {
    statusReportInteraction: [1, r.STATUS_REPORT_INTERACTION]
  }, [1, 1, 1], "regular"]
});
exports.StatusReportingEventsWamEvent = o;