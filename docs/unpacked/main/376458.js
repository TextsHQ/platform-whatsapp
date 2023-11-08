Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canOpenInfoDrawer = function (e) {
  if ((0, o.getIsNewsletterMsg)(e)) {
    return false;
  }
  if ((0, o.getIsSentByMe)(e) && !(0, r.getAsRevoked)(e) && !e.mayFail() && (!e.isMdHistoryMsg || (0, a.canUserSeeMessageAttribution)() && e.agentId != null)) {
    return true;
  }
  return false;
};
var a = require("../app/86417.js");
var r = require("../app/163755.js");
var o = require("../app/787742.js");