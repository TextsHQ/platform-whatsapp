Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeNewsletterEditOrTextOrMediaPublishOrRevokeOrPollCreationMixinGroup = function (e, t) {
  if (t.newsletterEdit) {
    return (0, i.mergeNewsletterEditMixin)(e, t.newsletterEdit);
  }
  if (t.newsletterText) {
    return (0, l.mergeNewsletterTextMixin)(e, t.newsletterText);
  }
  if (t.newsletterMediaPublish) {
    return (0, a.mergeNewsletterMediaPublishMixin)(e, t.newsletterMediaPublish);
  }
  if (t.isNewsletterRevoke) {
    return (0, s.mergeNewsletterRevokeMixin)(e);
  }
  if (t.newsletterPollCreation) {
    return (0, o.mergeNewsletterPollCreationMixin)(e, t.newsletterPollCreation);
  }
  throw new r.SmaxMixinGroupExhaustiveError();
};
var r = require("./715626.js");
var i = require("./894678.js");
var a = require("./867325.js");
var o = require("./713313.js");
var s = require("./269537.js");
var l = require("./463750.js");