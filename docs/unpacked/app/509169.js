var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsletterCoreEventLogger = undefined;
var i = require("./287461.js");
var a = require("./17570.js");
var o = require("./927531.js");
var s = require("./937069.js");
var l = r(require("./358533.js"));
var u = require("./492416.js");
const c = new class {
  setChannelEntryPoint(e) {
    this._lastEntryPoint = e;
  }
  setDirectorySessionId(e) {
    this._channelDirectorySessionId = e;
  }
  setDirectoryFilter(e) {
    if (e != null) {
      switch (e) {
        case s.NewsletterDirectoryFilterType.Recommended:
          return this._channelDirectoryFilter = "all";
        case s.NewsletterDirectoryFilterType.New:
          return this._channelDirectoryFilter = "new";
        case s.NewsletterDirectoryFilterType.Popular:
          return this._channelDirectoryFilter = "popular";
        case s.NewsletterDirectoryFilterType.Featured:
          return this._channelDirectoryFilter = "featured";
        case s.NewsletterDirectoryFilterType.Trending:
          return this._channelDirectoryFilter = "most_active";
        default:
          return this._channelDirectoryFilter = null;
      }
    } else {
      this._channelDirectoryFilter = null;
    }
  }
  log(e) {
    var t;
    var n;
    var r;
    let {
      cid: s,
      eventSurface: c,
      channelCoreEventType: d
    } = e;
    if (!(0, i.getABPropConfigValue)("channel_core_event_logging_enabled")) {
      return;
    }
    const p = JSON.stringify({
      has_followed_channels: l.default.some(e => {
        var t;
        return ((t = e.newsletterMetadata) === null || t === undefined ? undefined : t.membershipType) === o.NewsletterMembershipType.Subscriber;
      }) ? 1 : 0,
      pill_type: (t = this._channelDirectoryFilter) !== null && t !== undefined ? t : undefined
    });
    new a.ChannelCoreEventWamEvent({
      cid: s.user,
      eventSurface: c,
      channelCoreEventType: d,
      channelEntryPointApp: u.CHANNEL_ENTRY_POINT_APP.WHATSAPP,
      channelEntryPoint: (n = this._lastEntryPoint) !== null && n !== undefined ? n : undefined,
      channelDirectorySessionId: (r = this._channelDirectorySessionId) !== null && r !== undefined ? r : undefined,
      entryPointMetadata: p
    }).commit();
  }
}();
exports.NewsletterCoreEventLogger = c;