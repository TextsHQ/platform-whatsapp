var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WAWebNotificationsChatAssignmentNotification = undefined;
var i = r(require("../vendor/81109.js"));
var a = r(require("./670983.js"));
var o = require("./287461.js");
var s = require("./583759.js");
var l = require("./351053.js");
var u = require("./445729.js");
var c = require("./266162.js");
var d = require("./971804.js");
var p = require("./545413.js");
var f = require("./459857.js");
var _ = r(require("./124928.js"));
var g = require("../vendor/548360.js");
r(require("../vendor/667294.js"));
const m = require("./352026.js");
class h extends s.WABaseNotification {
  constructor(e) {
    var t;
    let {
      chats: n,
      assignmentTimestamps: r
    } = e;
    super();
    this._logBannerClick = () => {};
    this.chats = n.map(e => l.ChatCollection.get(e)).filter(e => e != null);
    this.primaryChat = (0, a.default)(this.chats[0], "this.chats[0]");
    this.assignmentTimestamps = r;
    this.businessName = (t = u.Conn.pushname) !== null && t !== undefined ? t : g.fbt._("Admin", null, {
      hk: "4bVr2w"
    }).toString();
  }
  shouldMute() {
    return !!((0, o.getABPropConfigValue)("web_abprop_mute_notifications_on_app_focus") ? (0, p.appIsActive)() : (0, p.chatIsActive)(this.primaryChat)) || this.chats.filter(e => e == null ? undefined : e.mute.isMuted).length === this.chats.length || this.chats.filter(e => e == null ? undefined : e.archive).length === this.chats.length || !!d.MuteCollection.globalMute().isMuted || !!(0, p.isOfflineResumeInProgress)();
  }
  buildKey() {
    return `chat_assignment:${this.chats.map(e => e == null ? undefined : e.id.toString()).join("-")}${this.assignmentTimestamps}`;
  }
  matchesChat(e) {
    return !(this.chats.length > 1) && _.default.equals(this.primaryChat.id, e);
  }
  getChatKind() {
    return this.primaryChat.kind;
  }
  performLogging() {}
  getDefaultIcon() {
    return m;
  }
  getBannerOptions() {
    const e = (0, c.getNotificationBody)((0, i.default)({}, function (e, t, n) {
      let r;
      r = n === 1 ? e.isGroup ? g.fbt._("{businessName} assigned you to chat with the group {chatName}", [g.fbt._param("businessName", t), g.fbt._param("chatName", e.formattedTitle)], {
        hk: "4d3p8w"
      }) : g.fbt._("{businessName} assigned you a chat with {chatName}", [g.fbt._param("businessName", t), g.fbt._param("chatName", e.formattedTitle)], {
        hk: "29p5Tv"
      }) : g.fbt._("{businessNme} assigned you {numberOfChats}", [g.fbt._param("businessNme", t), g.fbt._param("numberOfChats", n)], {
        hk: "2V3xI"
      });
      return {
        body: r.toString()
      };
    }(this.primaryChat, this.businessName, this.chats.length)));
    return {
      wid: this.primaryChat.id,
      title: this.businessName,
      body: e,
      onClick: this._logBannerClick,
      iconWid: (0, f.assertGetMeUser)()
    };
  }
}
exports.WAWebNotificationsChatAssignmentNotification = h;