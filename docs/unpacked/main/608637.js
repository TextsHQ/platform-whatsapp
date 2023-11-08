Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsletterAdminFunnelLogger = undefined;
var a = require("./68710.js");
var r = require("../app/927531.js");
var o = require("../app/73225.js");
var l = require("./825801.js");
var i = require("./269430.js");
exports.NewsletterAdminFunnelLogger = class {
  constructor(e) {
    this.sessionId = Math.round(Math.random() * 1000000000);
    this.eventSequence = 0;
    this.flowType = e;
  }
  _incrementEventSequence() {
    this.eventSequence += 1;
  }
  logImageSetEvent(e) {
    if (e != null) {
      switch (e) {
        case l.PhotoPickType.Camera:
          this.logEvent(i.CHANNEL_ADMIN_ACTION.CHANNEL_ICON_SET_CAMERA);
          break;
        case l.PhotoPickType.Emoji:
        case l.PhotoPickType.Sticker:
          this.logEvent(i.CHANNEL_ADMIN_ACTION.CHANNEL_ICON_SET_EMOJI_STICKER);
          break;
        case l.PhotoPickType.WebSearch:
          this.logEvent(i.CHANNEL_ADMIN_ACTION.CHANNEL_ICON_SET_WEB);
          break;
        case l.PhotoPickType.Gallery:
          this.logEvent(i.CHANNEL_ADMIN_ACTION.CHANNEL_ICON_SET_GALLERY);
      }
    } else {
      __LOG__(3)`[NewsletterAdminFunnelLogger][logImageSetEvent] picked photo type is null`;
    }
  }
  logReactionSetting(e) {
    switch (e) {
      case r.NewsletterReactionCodesSetting.Basic:
        this.logEvent(i.CHANNEL_ADMIN_ACTION.REACTIONS_SET_TO_DEFAULT_EMOJI);
        break;
      case r.NewsletterReactionCodesSetting.All:
        this.logEvent(i.CHANNEL_ADMIN_ACTION.REACTIONS_SET_TO_ANY_EMOJI);
        break;
      case r.NewsletterReactionCodesSetting.None:
        this.logEvent(i.CHANNEL_ADMIN_ACTION.REACTIONS_SET_TO_NONE_EMOJI);
    }
  }
  logEvent(e) {
    if ((0, o.isNewsletterCreationLoggingEnabled)()) {
      this._logAdminFunnelEvent({
        sessionId: this.sessionId,
        eventSequence: this.eventSequence,
        flowType: this.flowType,
        action: e
      });
      this._incrementEventSequence();
    }
  }
  _logAdminFunnelEvent(e) {
    let {
      sessionId: t,
      eventSequence: n,
      flowType: r,
      action: o
    } = e;
    new a.ChannelAdminWamEvent({
      channelAdminSessionId: t,
      adminFlowActionSequenceNumber: n,
      adminFlowType: r,
      channelAdminAction: o
    }).commit();
  }
};