Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeGetAllSubscribedNewslettersRequest = function (e) {
  const {
    allNewsletterMetadataIQRequestPayloadMixinArgs: t
  } = e;
  return (0, a.mergeSelfIQGetRequestMixin)((0, r.smax)("iq", null, (0, r.smax)("query", {
    type: "subscribed"
  }, (0, i.mergeAllNewsletterMetadataIQRequestPayloadMixin)((0, r.smax)("metadata", null), t))));
};
var r = require("./758616.js");
var i = require("./978694.js");
var a = require("./738312.js");