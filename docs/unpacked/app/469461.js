Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeDeprecatedInviteQueryIQPayloadMixin = function (e, t) {
  const n = function (e) {
    const {
      allNewsletterMetadataIQRequestPayloadMixinArgs: t
    } = e;
    return (0, o.mergeQueryNewsletterInviteParamsMixin)((0, r.smax)("query", null, (0, a.mergeAllNewsletterMetadataIQRequestPayloadMixin)((0, r.smax)("metadata", null), t)), e);
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./978694.js");
var o = require("./264938.js");