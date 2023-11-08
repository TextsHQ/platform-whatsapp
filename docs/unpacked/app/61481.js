var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PollVoteNotification = undefined;
var i = r(require("../vendor/81109.js"));
var a = require("./287461.js");
var o = require("./583759.js");
var s = require("./163755.js");
var l = require("./266162.js");
var u = require("./971804.js");
var c = require("./14346.js");
var d = require("./545413.js");
var p = require("./344400.js");
var f = r(require("./124928.js"));
var _ = require("../vendor/548360.js");
class g extends o.WABaseNotification {
  constructor(e) {
    let {
      creationMsg: t
    } = e;
    super();
    this._closeWhenNoUpdates = () => {
      if (this._groupedPollVoteCollection.getUnreadCount() === 0) {
        this.closeBanner();
      }
    };
    this._creationMsg = t;
    this._groupedPollVoteCollection = p.PollVoteCollection.getForParent([t.id])[0];
    this.bodyText = function (e) {
      let {
        unreadCount: t,
        pollName: n
      } = e;
      return _.fbt._({
        "*": "{number_of_votes} new votes: 📊 {pollName}",
        _1: "1 new vote: 📊 {pollName}"
      }, [_.fbt._plural(t, "number_of_votes"), _.fbt._param("pollName", n)], {
        hk: "1ChvCA"
      }).toString();
    }({
      unreadCount: this._groupedPollVoteCollection.getUnreadCount(),
      pollName: this._creationMsg.pollName
    });
  }
  shouldPlaySound() {
    const e = (0, s.getChat)(this._creationMsg.unsafe());
    return super.shouldPlaySound() && !(0, d.shouldSquelch)(e, false);
  }
  shouldMute() {
    const e = (0, s.getChat)(this._creationMsg.unsafe());
    return !!u.MuteCollection.globalMute().isMuted || !!((0, a.getABPropConfigValue)("web_abprop_mute_notifications_on_app_focus") ? (0, d.appIsActive)() : (0, d.chatIsActive)(e)) || !!(0, d.isMutedAndNotMentioned)(this._creationMsg.unsafe()) || !!(0, d.isArchivedAndNotMentioned)(this._creationMsg.unsafe()) || !!(0, d.isOfflineResumeInProgress)();
  }
  shouldSquelch() {
    if (c.WANotificationController.notificationExists(this.buildKey())) {
      return false;
    }
    const e = (0, s.getChat)(this._creationMsg.unsafe());
    return !!(0, d.shouldSquelch)(e, false);
  }
  afterBannerShown(e) {
    this._groupedPollVoteCollection.on("change add remove reset", this._closeWhenNoUpdates);
    e.waitForClose().then(() => {
      this._groupedPollVoteCollection.off("change add remove reset", this._closeWhenNoUpdates);
    });
  }
  buildKey() {
    return `vote:${this._creationMsg.id.toString()}`;
  }
  matchesChat(e) {
    return f.default.equals((0, s.getChat)(this._creationMsg.unsafe()).id, e);
  }
  getChatKind() {
    return (0, s.getChat)(this._creationMsg.unsafe()).kind;
  }
  getDefaultIcon() {
    return (0, d.getNotificationIcon)((0, s.getChat)(this._creationMsg.unsafe()));
  }
  getBannerOptions() {
    const e = this._creationMsg;
    const t = (0, s.getChat)(e.unsafe());
    return {
      wid: t.id,
      msgId: e.id.toString(),
      tag: this.buildKey(),
      title: (0, d.getNotificationTitle)(t),
      body: (0, l.getNotificationBody)((0, i.default)((0, i.default)({}, this._getNotificationParts()), {}, {
        msgDir: (0, s.getDir)(e)
      })),
      canReply: false,
      canMarkAsRead: false
    };
  }
  _getNotificationParts() {
    return {
      body: this.bodyText
    };
  }
}
exports.PollVoteNotification = g;