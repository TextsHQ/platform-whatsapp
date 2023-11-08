var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChannelUserTypeFromMembershipType = f;
exports.logHistoryGap = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./287461.js");
var o = require("./359987.js");
var s = require("./784872.js");
var l = require("./927531.js");
var u = require("./341930.js");
var c = r(require("./124928.js"));
var d = require("./669050.js");
function p() {
  return (p = (0, i.default)(function* (e) {
    var t;
    if (!(0, a.getABPropConfigValue)("channels_enable_msg_history_metrics")) {
      return;
    }
    const n = e.newsletterJidOrWid instanceof c.default ? e.newsletterJidOrWid : (0, d.createWid)(e.newsletterJidOrWid);
    const r = yield (0, o.frontendSendAndReceive)("getActiveNewsletter");
    const i = yield (0, o.frontendSendAndReceive)("getNewsletterMetadata", {
      id: n
    });
    new s.ChannelGapDetectedWamEvent({
      cid: n.user,
      gapSize: e.gapSize,
      channelIsForeground: n.equals(r),
      channelUserType: (t = f(i)) !== null && t !== undefined ? t : undefined
    }).commit();
  })).apply(this, arguments);
}
function f(e) {
  const t = e == null ? undefined : e.membershipType;
  if (t == null) {
    return null;
  }
  switch (t) {
    case l.NewsletterMembershipType.Admin:
      return u.CHANNEL_USER_TYPE.ADMIN;
    case l.NewsletterMembershipType.Guest:
      return u.CHANNEL_USER_TYPE.GUEST;
    case l.NewsletterMembershipType.Owner:
      return u.CHANNEL_USER_TYPE.OWNER;
    case l.NewsletterMembershipType.Subscriber:
      return u.CHANNEL_USER_TYPE.FOLLOWER;
  }
}