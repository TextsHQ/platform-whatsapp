Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusRowViewWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./552747.js");
var o = require("./122093.js");
const {
  INTEGER: l,
  STRING: i
} = a.TYPES;
const u = (0, a.defineEvents)({
  StatusRowView: [1656, {
    psaCampaigns: [8, i],
    statusRowEntryMethod: [5, r.STATUS_ROW_ENTRY_METHOD],
    statusRowIndex: [4, l],
    statusRowSection: [3, o.STATUS_ROW_SECTION],
    statusRowUnreadItemCount: [7, l],
    statusRowViewCount: [6, l],
    statusSessionId: [1, l],
    statusViewerSessionId: [2, l]
  }, [1, 1, 1], "regular"]
});
exports.StatusRowViewWamEvent = u;