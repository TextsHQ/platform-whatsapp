Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeQueryNewsletterJIDOrInviteParamsMixinGroup = function (e, t) {
  if (t.queryNewsletterJIDParams) {
    return (0, a.mergeQueryNewsletterJIDParamsMixin)(e, t.queryNewsletterJIDParams);
  }
  if (t.queryNewsletterInviteParams) {
    return (0, i.mergeQueryNewsletterInviteParamsMixin)(e, t.queryNewsletterInviteParams);
  }
  throw new r.SmaxMixinGroupExhaustiveError();
};
var r = require("./715626.js");
var i = require("./264938.js");
var a = require("./158996.js");