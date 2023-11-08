var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WAKeepInChatNotification = undefined;
var r = a(require("../vendor/81109.js"));
var o = a(require("../app/670983.js"));
var l = require("../app/287461.js");
var i = require("../app/583759.js");
var u = require("../app/177938.js");
var s = require("../app/808716.js");
var c = require("../app/163755.js");
var d = require("../app/266162.js");
var f = require("../app/787742.js");
var p = require("../app/373070.js");
var m = require("../app/971804.js");
var h = require("../app/545413.js");
var g = require("./308685.js");
var E = require("../app/459857.js");
var v = a(require("../app/124928.js"));
var _ = require("../app/669050.js");
var y = require("../app/931019.js");
var C = require("../vendor/548360.js");
class b extends i.WABaseNotification {
  constructor(e) {
    let {
      keepInChatMessage: t,
      parentMessage: n,
      onClick: a
    } = e;
    super();
    this._handleKICStateChange = (e, t) => {
      if (!(0, s.isKept)(t)) {
        __LOG__(2)`WAKeepInChatNotification: kic state change, removing notification`;
        this.closeBanner();
      }
    };
    this._logBannerClick = () => {
      var e;
      (0, g.incrementNotificationDailyCount)(g.NotificationDailyCountKind.KIC_NOTIFICATION_TAP, (0, o.default)(this.getChatKind(), "this.getChatKind()"));
      if (!((e = this._handleClick) === null || e === undefined)) {
        e.call(this);
      }
    };
    this.keepInChatMessage = t;
    this.parentMessage = n;
    this._handleClick = a;
    __LOG__(2)`WAKeepInChatNotification: constructor`;
  }
  shouldMute() {
    var e;
    if ((0, l.getABPropConfigValue)("web_abprop_mute_notifications_on_app_focus") ? (0, h.appIsActive)() : (0, h.chatIsActive)((0, c.getChat)(this.parentMessage))) {
      return true;
    }
    if (this.parentMessage.kicNotified) {
      return true;
    }
    if (!(0, f.getIsEphemeral)(this.parentMessage)) {
      return true;
    }
    if (!(0, E.isMeAccount)((0, f.getSender)(this.parentMessage))) {
      return true;
    }
    const t = (0, _.toUserWid)(this.keepInChatMessage.author || this.keepInChatMessage.from);
    return !!(0, E.isMeAccount)(t) || !!(0, c.getChat)(this.parentMessage).mute.isMuted || !!(0, c.getChat)(this.parentMessage).archive || !(!(0, c.getChat)(this.parentMessage).isGroup || ((e = (0, c.getChat)(this.parentMessage).groupMetadata) === null || e === undefined ? undefined : e.hasJoined())) || !!m.MuteCollection.globalMute().isMuted || !!(0, h.isOfflineResumeInProgress)();
  }
  buildKey() {
    return `kic:${this.parentMessage.id.toString()}`;
  }
  matchesChat(e) {
    return v.default.equals((0, c.getChat)(this.parentMessage).id, e);
  }
  getChatKind() {
    return (0, c.getChat)(this.parentMessage).kind;
  }
  performLogging() {
    (0, g.incrementNotificationDailyCount)(g.NotificationDailyCountKind.KIC_NOTIFICATION, (0, o.default)(this.getChatKind(), "this.getChatKind()"));
  }
  getDefaultIcon() {
    return (0, h.getNotificationIcon)((0, c.getChat)(this.parentMessage));
  }
  getBannerOptions() {
    const e = (0, c.getChat)(this.parentMessage);
    const t = (0, d.getNotificationBody)((0, r.default)((0, r.default)({}, function (e, t) {
      let n;
      let a;
      let r;
      if ((0, f.getIsGroupMsg)(e)) {
        var o;
        const e = u.ContactCollection.gadd((0, f.getSender)(t));
        a = (o = e.name) !== null && o !== undefined ? o : (0, y.widToFormattedUser)(e.id);
      }
      if (e.type !== p.MSG_TYPE.CHAT || e.shouldShowNotificationPreview()) {
        n = (0, d.getNotificationMessageBody)(e);
        n = C.fbt._("\"{originalMessageBody}\"", [C.fbt._param("originalMessageBody", n)], {
          hk: "2D0IjP"
        });
        r = C.fbt._("Kept your message from disappearing:", null, {
          hk: "iAf2l"
        }).toString();
      } else {
        n = C.fbt._("Kept your message from disappearing", null, {
          hk: "uEtuO"
        });
      }
      return {
        body: n.toString(),
        author: a,
        action: r
      };
    }(this.parentMessage, this.keepInChatMessage)), {}, {
      msgDir: (0, c.getDir)(this.parentMessage)
    }));
    return {
      wid: e.id,
      msgId: this.parentMessage.id.toString(),
      title: (0, h.getNotificationTitle)(e),
      body: t,
      onClick: this._logBannerClick
    };
  }
  afterBannerShown(e) {
    this.parentMessage.set("kicNotified", true);
    this.parentMessage.on("change:kicState", this._handleKICStateChange);
    e.waitForClose().then(() => {
      __LOG__(2)`WAKeepInChatNotification: cleaning up kic notification`;
      this.parentMessage.off("change:kicState", this._handleKICStateChange);
    });
  }
}
exports.WAKeepInChatNotification = b;