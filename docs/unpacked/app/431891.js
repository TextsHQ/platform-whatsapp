var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mexHandleNewsletterMetadataUpdate = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./418987.js");
var o = require("./35234.js");
var s = require("./854379.js");
var l = require("./849342.js");
var u = require("./552043.js");
var c = require("./14291.js");
var d = r(require("./556869.js"));
function p() {
  return (p = (0, i.default)(function* (e, t) {
    const n = t.xwa2_notify_newsletter_on_metadata_update;
    const r = n.id;
    if (r == null) {
      throw (0, d.default)("unexpected null id in xwa2_notify_newsletter_on_metadata_update");
    }
    const i = (0, a.toNewsletterJid)(r);
    const p = (0, s.newsletterJidToWid)(i);
    if ((yield (0, o.getChatRecord)(p)) == null) {
      return;
    }
    const f = (0, l.parseMexNewsletterResponse)(n);
    if (f == null) {
      throw (0, d.default)("Unexpected null metadata for newsletter update notification");
    }
    try {
      const {
        chat: e,
        metadata: t,
        pic: n
      } = (0, c.mapNewsletterToModels)(f);
      yield (0, u.updateNewsletterMetadataAndPic)(e, t, n);
    } catch (e) {
      __LOG__(4, undefined, new Error(), true, ["mex", "newsletter"])`[mex][newsletter][notification][metadata-update] Failed to update metadata change`;
      SEND_LOGS("mex-newsletter-notification-metadata-update-fail", 1, "mex", "newsletter");
    }
  })).apply(this, arguments);
}