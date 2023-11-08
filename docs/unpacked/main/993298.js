Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportToAdminEventsWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./328340.js");
const {
  STRING: o
} = a.TYPES;
const l = (0, a.defineEvents)({
  ReportToAdminEvents: [4420, {
    reportToAdminInteraction: [1, r.REPORT_TO_ADMIN_INTERACTION],
    rtaGroupId: [2, o]
  }, [1, 1, 1], "regular"]
});
exports.ReportToAdminEventsWamEvent = l;