var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterMessageHistoryWithAddOnsMixin = function (e) {
  const t = (0, c.assertTag)(e, "message");
  if (!t.success) {
    return t;
  }
  const n = (0, o.parseNewsletterMessageHistoryMixin)(e);
  if (!n.success) {
    return n;
  }
  const r = (0, l.parseNewsletterReactionsMixin)(e);
  const d = (0, u.parseNewsletterViewsCountMixin)(e);
  const p = (0, s.parseNewsletterPollVotesMixin)(e);
  return (0, a.makeResult)((0, i.default)((0, i.default)({}, n.value), {}, {
    newsletterReactionsMixin: r.success ? r.value : null,
    newsletterViewsCountMixin: d.success ? d.value : null,
    newsletterPollVotesMixin: p.success ? p.value : null
  }));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./793301.js");
var s = require("./458244.js");
var l = require("./488861.js");
var u = require("./835597.js");
var c = require("./686310.js");