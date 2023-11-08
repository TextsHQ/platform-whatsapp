Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeNewsletterTextOrMediaMixinGroup = function (e, t) {
  if (t.newsletterText) {
    return (0, a.mergeNewsletterTextMixin)(e, t.newsletterText);
  }
  if (t.newsletterMedia) {
    return (0, i.mergeNewsletterMediaMixin)(e, t.newsletterMedia);
  }
  throw new r.SmaxMixinGroupExhaustiveError();
};
var r = require("./715626.js");
var i = require("./55782.js");
var a = require("./463750.js");