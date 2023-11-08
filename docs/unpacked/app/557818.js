Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeNewsletterMessageRequestIQPayloadMixin = function (e, t) {
  const n = function (e) {
    const {
      queryNewsletterParamsMixinArgs: t,
      newsletterMessageRequestPayloadMixinArgs: n
    } = e;
    return (0, s.mergeSelfIQGetRequestMixin)((0, r.smax)("iq", null, (0, a.mergeNewsletterMessageRequestPayloadMixin)((0, o.mergeQueryNewsletterParamsMixin)((0, r.smax)("messages", null), t), n)));
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./156037.js");
var o = require("./258442.js");
var s = require("./738312.js");