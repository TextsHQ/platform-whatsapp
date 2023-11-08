Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeNewsletterClientAndServerIDMixin = function (e, t) {
  const n = function (e) {
    const {
      messageId: t,
      messageServerId: n,
      newsletterReactionOrReactionRevokeOrPollVoteMixinGroupArgs: i
    } = e;
    return (0, a.mergeNewsletterReactionOrReactionRevokeOrPollVoteMixinGroup)((0, r.smax)("message", {
      id: (0, o.STANZA_ID)(t),
      server_id: (0, o.INT)(n)
    }), i);
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./738698.js");
var o = require("./716358.js");