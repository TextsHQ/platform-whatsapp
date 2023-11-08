Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeGetNewsletterRequest = function (e) {
  const {
    jidQueryOrDeprecatedInviteQueryOrInviteQueryIQPayloadMixinGroupArgs: t
  } = e;
  return (0, a.mergeSelfIQGetRequestMixin)((0, r.smax)("iq", null, (0, i.mergeJIDQueryOrDeprecatedInviteQueryOrInviteQueryIQPayloadMixinGroup)((0, r.smax)("query", null), t)));
};
var r = require("./758616.js");
var i = require("./91919.js");
var a = require("./738312.js");