Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterEditOrTextOrMediaOrRevokeOrPollCreationMixinGroup = function (e) {
  const t = (0, i.parseNewsletterEditMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "NewsletterEdit",
      value: t.value
    });
  }
  const n = (0, l.parseNewsletterTextMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "NewsletterText",
      value: n.value
    });
  }
  const c = (0, a.parseNewsletterMediaMixin)(e);
  if (c.success) {
    return (0, r.makeResult)({
      name: "NewsletterMedia",
      value: c.value
    });
  }
  const d = (0, s.parseNewsletterRevokeMixin)(e);
  if (d.success) {
    return (0, r.makeResult)({
      name: "NewsletterRevoke",
      value: d.value
    });
  }
  const p = (0, o.parseNewsletterPollCreationMixin)(e);
  if (p.success) {
    return (0, r.makeResult)({
      name: "NewsletterPollCreation",
      value: p.value
    });
  }
  return (0, u.errorMixinDisjunction)(e, ["NewsletterEdit", "NewsletterText", "NewsletterMedia", "NewsletterRevoke", "NewsletterPollCreation"], [t, n, c, d, p]);
};
var r = require("./135781.js");
var i = require("./20250.js");
var a = require("./341296.js");
var o = require("./517527.js");
var s = require("./44990.js");
var l = require("./815509.js");
var u = require("./686310.js");