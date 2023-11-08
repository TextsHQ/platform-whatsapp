var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WACallNotification = undefined;
exports.cancelCallNotification = function (e) {
  if (e) {
    u.WANotificationController.closeOrCancelNotification(e.toString());
  }
};
var i = require("./583759.js");
var a = require("./953213.js");
var o = require("./177938.js");
var s = require("./714574.js");
var l = require("./971804.js");
var u = require("./14346.js");
var c = r(require("./124928.js"));
var d = require("./931019.js");
var p = r(require("./286816.js"));
const f = require("./352026.js");
class _ extends i.WABaseNotification {
  constructor(e) {
    let {
      wid: t,
      msgId: n,
      isVideo: r,
      isGroup: i,
      isSilenced: a
    } = e;
    super();
    this.wid = t;
    this.msgId = n;
    this.isVideo = r;
    this.isGroup = i;
    this.isSilenced = a;
  }
  shouldMute() {
    return !(this.wid && this.msgId && !l.MuteCollection.globalMute().isMuted && !this.isSilenced);
  }
  buildKey() {
    return `call:${this.wid.toString()}`;
  }
  matchesChat(e) {
    return c.default.equals(this.wid, e);
  }
  getChatKind() {
    if (this.isGroup) {
      return a.ChatKindType.Group;
    } else {
      return a.ChatKindType.Chat;
    }
  }
  getDefaultIcon() {
    return f;
  }
  getBannerOptions() {
    const e = o.ContactCollection.get(this.wid);
    const t = e ? (0, s.getFormattedName)(e) : (0, d.widToFormattedUser)(this.wid);
    let n;
    n = this.isGroup ? this.isVideo ? p.default._("WhatsApp group video call from {name}", [p.default._param("name", t)], {
      hk: "2wlHfY"
    }).toString() : p.default._("WhatsApp group voice call from {name}", [p.default._param("name", t)], {
      hk: "3zOMo4"
    }).toString() : this.isVideo ? p.default._("WhatsApp video call from {name}", [p.default._param("name", t)], {
      hk: "1w2fWY"
    }).toString() : p.default._("WhatsApp voice call from {name}", [p.default._param("name", t)], {
      hk: "1lZ7xV"
    }).toString();
    const r = p.default._("Check your phone to answer", null, {
      hk: "4y9QjN"
    }).toString();
    return {
      wid: this.wid,
      msgId: this.msgId,
      tag: this.msgId,
      title: n,
      body: r
    };
  }
}
exports.WACallNotification = _;