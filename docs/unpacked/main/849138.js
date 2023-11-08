var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useNewsletterOpenMetrics = function (e, t) {
  (0, d.useEffect)(() => {
    if (!e.isNewsletter) {
      return;
    }
    const n = e.newsletterMetadata;
    if (n != null) {
      try {
        const a = Math.round(Math.random() * 1000000000);
        const d = function (e) {
          switch (e) {
            case o.ChatEntryPoint.NewsletterChatlist:
            case o.ChatEntryPoint.NewsletterCreationFlow:
            case o.ChatEntryPoint.NewsletterIntegrity:
              return u.CHANNEL_ENTRY_POINT.UPDATES_TAB;
            case o.ChatEntryPoint.NewsletterDirectory:
              return u.CHANNEL_ENTRY_POINT.DIRECTORY;
            case o.ChatEntryPoint.NewsletterDirectorySearch:
              return u.CHANNEL_ENTRY_POINT.DIRECTORY_SEARCH;
            case o.ChatEntryPoint.NewsLetterRecommendation:
              return u.CHANNEL_ENTRY_POINT.RECOMMENDED_LIST;
            case o.ChatEntryPoint.ForwardedNewsletterMessage:
              return u.CHANNEL_ENTRY_POINT.FORWARDED_MESSAGE;
            case o.ChatEntryPoint.Link:
              return u.CHANNEL_ENTRY_POINT.LINK;
            case o.ChatEntryPoint.Deeplink:
              return u.CHANNEL_ENTRY_POINT.DEEPLINK;
            default:
              throw (0, c.default)("Unexpected origin");
          }
        }(t);
        i.NewsletterCoreEventLogger.setChannelEntryPoint(d);
        const f = function (e) {
          switch (e) {
            case l.NewsletterMembershipType.Owner:
              return s.CHANNEL_USER_TYPE.OWNER;
            case l.NewsletterMembershipType.Admin:
              return s.CHANNEL_USER_TYPE.ADMIN;
            case l.NewsletterMembershipType.Subscriber:
              return s.CHANNEL_USER_TYPE.FOLLOWER;
            case l.NewsletterMembershipType.Guest:
              return s.CHANNEL_USER_TYPE.GUEST;
          }
        }(n.membershipType);
        new r.ChannelOpenWamEvent({
          channelSessionId: a,
          channelEntryPoint: d,
          channelUserType: f,
          cid: e.id.user,
          unreadMessages: e.unreadCount
        }).commit();
      } catch (e) {
        __LOG__(3, undefined, undefined, true, ["newsletter-logging"])`Encountered unexpected entry point: ${t}`;
        SEND_LOGS("Unexpected entry point in newsletter open logging", 1, "newsletter-logging");
      }
    }
  }, []);
};
var r = require("./924637.js");
var o = require("../app/338042.js");
var l = require("../app/927531.js");
var i = require("../app/509169.js");
var u = require("../app/118816.js");
var s = require("../app/341930.js");
var c = a(require("../app/556869.js"));
var d = require("../vendor/667294.js");