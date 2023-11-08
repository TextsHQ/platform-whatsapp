Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDisplayType = function (e) {
  if (e == null) {
    return l.DISPLAY_TYPE.CONVERSATION;
  }
  const t = (0, i.getChat)(e);
  const n = (0, a.isBotReceiveEnabled)() && (0, u.getIsMetaBotInvokeResponse)(e);
  const c = (0, o.newCommunityAnnouncementBubbleEnabled)() && t != null && (0, r.isCommunityAnnouncementGroup)(t);
  const d = (0, s.isNewsletterEnabled)() && t != null && t.isNewsletter;
  if (n === true) {
    return l.DISPLAY_TYPE.BOT_INVOKE_RESPONSE;
  }
  if (c === true) {
    return l.DISPLAY_TYPE.ANNOUNCEMENT;
  }
  if (d === true) {
    return l.DISPLAY_TYPE.NEWSLETTER;
  }
  return l.DISPLAY_TYPE.CONVERSATION;
};
var a = require("../app/354458.js");
var r = require("../app/374660.js");
var o = require("../app/174834.js");
var l = require("../app/356097.js");
var i = require("../app/163755.js");
var u = require("../app/787742.js");
var s = require("../app/73225.js");