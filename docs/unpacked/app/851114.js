Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterReactionsModeOthersOrBlocklistMixinGroup = function (e) {
  const t = (0, a.parseNewsletterReactionsModeOthersMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "NewsletterReactionsModeOthers",
      value: t.value
    });
  }
  const n = (0, i.parseNewsletterReactionsBlocklistMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "NewsletterReactionsBlocklist",
      value: n.value
    });
  }
  return (0, o.errorMixinDisjunction)(e, ["NewsletterReactionsModeOthers", "NewsletterReactionsBlocklist"], [t, n]);
};
var r = require("./135781.js");
var i = require("./959193.js");
var a = require("./762798.js");
var o = require("./686310.js");