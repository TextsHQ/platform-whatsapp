Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterMessageMyAddOnsMixin = function (e) {
  const t = (0, o.assertTag)(e, "message");
  if (!t.success) {
    return t;
  }
  const n = (0, o.attrIntRange)(e, "server_id", 99, 2147476647);
  if (!n.success) {
    return n;
  }
  const s = (0, a.parseNewsletterMyReactionMixin)(e);
  const l = (0, i.parseNewsletterMyPollVoteMixin)(e);
  return (0, r.makeResult)({
    serverId: n.value,
    newsletterMyReactionMixin: s.success ? s.value : null,
    newsletterMyPollVoteMixin: l.success ? l.value : null
  });
};
var r = require("./135781.js");
var i = require("./420257.js");
var a = require("./515115.js");
var o = require("./686310.js");