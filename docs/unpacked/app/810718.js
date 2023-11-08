Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMetricHistorySyncPayloadType = function (e) {
  switch (e) {
    case 0:
      return r.MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE.INITIAL;
    case 1:
      return r.MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE.STATUS_V3;
    case 2:
      return r.MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE.FULL_HISTORY;
    case 3:
      return r.MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE.RECENT_HISTORY;
    case 4:
      return r.MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE.PUSHNAME;
    case 5:
      return r.MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE.NON_BLOCKING_DATA;
    case 6:
      return r.MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE.ON_DEMAND;
    default:
      return r.MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE.PUSHNAME;
  }
};
var r = require("./729360.js");