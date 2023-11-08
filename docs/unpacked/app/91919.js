Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeJIDQueryOrDeprecatedInviteQueryOrInviteQueryIQPayloadMixinGroup = function (e, t) {
  if (t.jidQueryIQPayload) {
    return (0, o.mergeJIDQueryIQPayloadMixin)(e, t.jidQueryIQPayload);
  }
  if (t.deprecatedInviteQueryIQPayload) {
    return (0, i.mergeDeprecatedInviteQueryIQPayloadMixin)(e, t.deprecatedInviteQueryIQPayload);
  }
  if (t.inviteQueryIQPayload) {
    return (0, a.mergeInviteQueryIQPayloadMixin)(e, t.inviteQueryIQPayload);
  }
  throw new r.SmaxMixinGroupExhaustiveError();
};
var r = require("./715626.js");
var i = require("./469461.js");
var a = require("./480395.js");
var o = require("./917980.js");