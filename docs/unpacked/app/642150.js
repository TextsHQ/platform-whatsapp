Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeNewsletterClientIDMixin = function (e, t) {
  const n = function (e) {
    const {
      messageId: t,
      newsletterEditOrTextOrMediaPublishOrRevokeOrPollCreationMixinGroupArgs: n
    } = e;
    return (0, a.mergeNewsletterEditOrTextOrMediaPublishOrRevokeOrPollCreationMixinGroup)((0, r.smax)("message", {
      id: (0, o.STANZA_ID)(t)
    }), n);
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./715884.js");
var o = require("./716358.js");