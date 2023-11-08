Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterMessageFanoutContent = function (e) {
  const t = (0, i.parseNewsletterEditMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "NewsletterEdit",
      value: t.value
    });
  }
  const n = (0, c.parseNewsletterRevokeMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "NewsletterRevoke",
      value: n.value
    });
  }
  const f = (0, d.parseNewsletterTextMixin)(e);
  if (f.success) {
    return (0, r.makeResult)({
      name: "NewsletterText",
      value: f.value
    });
  }
  const _ = (0, a.parseNewsletterMediaMixin)(e);
  if (_.success) {
    return (0, r.makeResult)({
      name: "NewsletterMedia",
      value: _.value
    });
  }
  const g = (0, l.parseNewsletterReactionMixin)(e);
  if (g.success) {
    return (0, r.makeResult)({
      name: "NewsletterReaction",
      value: g.value
    });
  }
  const m = (0, u.parseNewsletterReactionRevokeMixin)(e);
  if (m.success) {
    return (0, r.makeResult)({
      name: "NewsletterReactionRevoke",
      value: m.value
    });
  }
  const h = (0, o.parseNewsletterPollCreationMixin)(e);
  if (h.success) {
    return (0, r.makeResult)({
      name: "NewsletterPollCreation",
      value: h.value
    });
  }
  const y = (0, s.parseNewsletterPollVoteMixin)(e);
  if (y.success) {
    return (0, r.makeResult)({
      name: "NewsletterPollVote",
      value: y.value
    });
  }
  return (0, p.errorMixinDisjunction)(e, ["NewsletterEdit", "NewsletterRevoke", "NewsletterText", "NewsletterMedia", "NewsletterReaction", "NewsletterReactionRevoke", "NewsletterPollCreation", "NewsletterPollVote"], [t, n, f, _, g, m, h, y]);
};
var r = require("./135781.js");
var i = require("./386842.js");
var a = require("./292100.js");
var o = require("./545729.js");
var s = require("./510566.js");
var l = require("./171445.js");
var u = require("./589052.js");
var c = require("./592027.js");
var d = require("./111394.js");
var p = require("./686310.js");