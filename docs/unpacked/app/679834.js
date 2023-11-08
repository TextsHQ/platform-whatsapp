var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./517966.js");
var s = require("./293056.js");
var l = require("./73225.js");
var u = require("./552043.js");
var c = require("./14291.js");
var d = require("./108803.js");
function p() {
  return (p = (0, a.default)(function* (e) {
    const {
      makeSetMetadataNotificationResponseAck: t,
      parsedRequest: n
    } = (0, o.receiveSetMetadataNotificationRPC)(e);
    if (!(0, l.isNewsletterEnabled)()) {
      return t();
    }
    const r = (0, i.default)((0, i.default)({}, n.metadataCommonNewsletterMetadataMixin), {}, {
      idJid: n.from,
      newsletterCreationTimeMetadataMixin: null
    });
    const {
      chat: a,
      metadata: p,
      pic: f
    } = (0, c.mapNewsletterToModels)(r);
    try {
      yield (0, d.updateNewsletterChatRecords)([(0, s.createNewsletterObjectForStorage)(a)]);
      yield (0, u.updateNewsletterMetadataAndPic)(a, p, f);
    } catch (e) {
      __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter][metadata-notification] Failed to process metadata notification: ${e}`;
      SEND_LOGS("newsletter-metadata-notification-fail", 1, "newsletter");
    }
    return t();
  })).apply(this, arguments);
}