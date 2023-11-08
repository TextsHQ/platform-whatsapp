Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterTextOrMediaMixinGroup = function (e) {
  const t = (0, a.parseNewsletterTextMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "NewsletterText",
      value: t.value
    });
  }
  const n = (0, i.parseNewsletterMediaMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "NewsletterMedia",
      value: n.value
    });
  }
  return (0, o.errorMixinDisjunction)(e, ["NewsletterText", "NewsletterMedia"], [t, n]);
};
var r = require("./135781.js");
var i = require("./292100.js");
var a = require("./111394.js");
var o = require("./686310.js");