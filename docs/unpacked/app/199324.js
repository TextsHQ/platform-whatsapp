Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeClientNewsletterOrNewsletterAndServerIDMixinGroup = function (e, t) {
  if (t.newsletterClientID) {
    return (0, a.mergeNewsletterClientIDMixin)(e, t.newsletterClientID);
  }
  if (t.newsletterClientAndServerID) {
    return (0, i.mergeNewsletterClientAndServerIDMixin)(e, t.newsletterClientAndServerID);
  }
  throw new r.SmaxMixinGroupExhaustiveError();
};
var r = require("./715626.js");
var i = require("./763993.js");
var a = require("./642150.js");