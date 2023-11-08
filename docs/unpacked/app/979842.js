Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMessageHistoryRequestMetrics = function (e) {
  var t;
  if (!(0, r.getABPropConfigValue)("channels_enable_msg_history_metrics")) {
    return;
  }
  const {
    batchSize: n,
    chat: o
  } = e;
  return new i.ChannelMessageHistoryRequestWamEvent({
    batchSize: n,
    cid: o.id.user,
    channelUserType: (t = (0, a.getChannelUserTypeFromMembershipType)(o.newsletterMetadata)) !== null && t !== undefined ? t : undefined
  });
};
var r = require("./287461.js");
var i = require("./878031.js");
var a = require("./455245.js");