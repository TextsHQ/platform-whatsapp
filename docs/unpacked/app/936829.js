var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mexHandleNewsletterMutedChange = function () {
  return f.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./418987.js");
var s = require("./359987.js");
var l = require("./293056.js");
var u = require("./657987.js");
var c = require("./14291.js");
var d = require("./108803.js");
var p = r(require("./556869.js"));
function f() {
  return (f = (0, a.default)(function* (e, t) {
    const {
      id: n,
      mute: r
    } = t.xwa2_notify_newsletter_on_mute_change;
    if (n == null) {
      throw (0, p.default)("unexpected null id in xwa2_notify_newsletter_on_mute_change");
    }
    let a;
    switch (r) {
      case "ON":
        a = "on";
        break;
      case "OFF":
        a = "off";
        break;
      default:
        a = "undefined";
    }
    const f = (0, u.emptyNewsletterMetadataType)((0, o.toNewsletterJid)(n));
    const _ = (0, i.default)((0, i.default)({}, f), {}, {
      newsletterMutedMetadataMixin: {
        mutedState: a
      }
    });
    const {
      chat: g,
      metadata: m,
      pic: h
    } = (0, c.mapNewsletterToModels)(_);
    try {
      yield (0, d.updateNewsletterChatRecords)([(0, l.createNewsletterObjectForStorage)(g)]);
      yield (0, s.frontendSendAndReceive)("updateNewsletterMetadata", {
        metadata: m,
        newsletter: g,
        pic: h
      });
    } catch (e) {
      __LOG__(4, undefined, new Error(), true, ["mex", "newsletter"])`[mex][newsletter][notification][mute-unmute]`;
      SEND_LOGS("mex-newsletter-notification-mute-unmute-fail", 1, "mex", "newsletter");
    }
  })).apply(this, arguments);
}