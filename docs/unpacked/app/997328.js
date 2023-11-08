Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSetNewsletterMetadataRequest = function (e) {
  const {
    queryArgs: t,
    setNewsletterMetadataMixinMixinArgs: n
  } = e;
  return (0, o.mergeNewsletterIQSetRequestMixin)((0, i.smax)("iq", null, (0, i.smax)("set", null, (0, s.mergeSetNewsletterMetadataMixinMixin)((0, i.smax)("metadata", null), n), (0, r.OPTIONAL_CHILD)(l, t))), e);
};
exports.makeSetNewsletterMetadataRequestSetQuery = l;
var r = require("./974339.js");
var i = require("./758616.js");
var a = require("./978694.js");
var o = require("./861479.js");
var s = require("./258416.js");
function l(e) {
  return (0, i.smax)("query", null, (0, a.mergeAllNewsletterMetadataIQRequestPayloadMixin)((0, i.smax)("metadata", null), e));
}