Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WADeviceSwitchNotification = undefined;
var r = require("./583759.js");
var i = require("./971804.js");
var a = require("./545413.js");
var o = require("../vendor/548360.js");
const s = require("./352026.js");
class l extends r.WABaseNotification {
  constructor(e) {
    let {
      wid: t,
      otpCode: n
    } = e;
    super();
    this.wid = t;
    this.otpCode = n;
  }
  shouldPlaySound() {
    return super.shouldPlaySound();
  }
  shouldMute() {
    return !!i.MuteCollection.globalMute().isMuted || !!(0, a.appIsActive)();
  }
  buildKey() {
    return `registration:${this.wid.toString()}`;
  }
  getChatKind() {
    return null;
  }
  getDefaultIcon() {
    return s;
  }
  getBannerOptions() {
    const e = o.fbt._("Do not share it with anyone. Your code is {otpCode}.", [o.fbt._param("otpCode", this.otpCode)], {
      hk: "Qi84H"
    }).toString();
    const t = o.fbt._("Code for new phone", null, {
      hk: "2dbcya"
    }).toString();
    return {
      wid: this.wid,
      title: t,
      body: e,
      canReply: false,
      canMarkAsRead: false,
      doNotOpenChat: true
    };
  }
}
exports.WADeviceSwitchNotification = l;