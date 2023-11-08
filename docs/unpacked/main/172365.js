var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editNewsletterMetadataAction = function () {
  return c.apply(this, arguments);
};
var r = a(require("../vendor/81109.js"));
var o = a(require("../vendor/348926.js"));
var l = require("../app/418987.js");
var i = require("../app/787671.js");
var u = require("../app/14291.js");
var s = require("../app/126592.js");
function c() {
  return (c = (0, o.default)(function* (e, t, n) {
    if (!e.isNewsletter) {
      __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletters][editNewsletterMetadataAction] called with a non-newsletter chat`;
      return void SEND_LOGS("edit-metadata-action-not-a-newsletter", 1, "newsletter");
    }
    const a = (0, l.toNewsletterJid)(e.id.toJid());
    try {
      const e = yield (0, i.editNewsletterMetadata)(a, t, n);
      if (e == null) {
        return;
      }
      const {
        chat: o,
        metadata: l,
        pic: c
      } = (0, u.mapNewsletterToModels)((0, r.default)((0, r.default)({}, e), {}, {
        newsletterCreationTimeMetadataMixin: null
      }));
      yield (0, s.updateCollections)({
        chats: [o],
        metadata: [l],
        pics: [c]
      });
    } catch (e) {
      __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter][editNewsletterMetadataAction] Failed to edit newsletter metadata`;
      SEND_LOGS("edit-metadata-action-failed", 1, "newsletter");
      throw e;
    }
  })).apply(this, arguments);
}