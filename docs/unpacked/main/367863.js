var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadNewsletterPreviewChat = function () {
  return f.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/692544.js");
var l = require("../app/549142.js");
var i = a(require("../app/358533.js"));
var u = require("../app/751460.js");
var s = require("../app/14291.js");
var c = require("./218124.js");
var d = a(require("../app/556869.js"));
function f() {
  return (f = (0, r.default)(function* (e) {
    __LOG__(2)`[newsletters][loadNewsletterPreviewChat] Start`;
    try {
      var t;
      const n = (0, s.getRoleByIdentifier)(e);
      const {
        ids: a,
        newsletterMetadata: r,
        newsletterMessages: f,
        newsletterReactions: p,
        newsletterVotes: m
      } = yield (0, c.getNewsletterPreviewData)(e, n);
      if (r == null) {
        throw (0, d.default)("Did not receive newsletter preview data");
      }
      const h = i.default.get(r.idJid);
      if (h != null && ((0, u.iAmAdminOrOwner)(h.newsletterMetadata) || (0, u.iAmSubscriber)(h.newsletterMetadata))) {
        return h;
      }
      const g = (0, s.mapPreviewNewsletterToMetadata)(r);
      const E = (0, s.mapPreviewNewsletterToChat)(r);
      yield (0, c.persistPreviewNewsletterInfoInDb)(E, g, f);
      const v = r == null || (t = r.newsletterPictureMetadataMixin) === null || t === undefined ? undefined : t.picture;
      const _ = v != null ? (0, s.mapPicturesToProfilePicThumb)(r.idJid, v) : null;
      const y = f.map(o.msgModelFromMsgData);
      __LOG__(2)`[newsletters][loadNewsletterPreviewChat] Update local models and return instantiated chat model`;
      const C = l.NewsletterBridgeApi.loadNewsletterPreviewChat({
        metadata: g,
        pic: _,
        newsletter: E,
        messages: y
      });
      yield l.NewsletterBridgeApi.updateNewsletterMessages({
        ids: a,
        reactions: p,
        pollVotes: m
      });
      __LOG__(2)`[newsletters][loadNewsletterPreviewChat] End`;
      return C;
    } catch (e) {
      __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter][loadNewsletterPreviewChat] Failed to retrieve newsletter preview`;
      SEND_LOGS("newsletter-failed-to-retrieve-newsletter-preview-data", 1, "newsletter");
      throw e;
    }
  })).apply(this, arguments);
}