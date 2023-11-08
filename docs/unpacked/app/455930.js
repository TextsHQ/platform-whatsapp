var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseMuteResponseSuccess = function (e, t) {
  const n = (0, c.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const r = (0, c.flattenedChildWithTag)(e, "mute");
  if (!r.success) {
    return r;
  }
  const s = (0, o.parseIQResultResponseMixin)(e, t);
  if (!s.success) {
    return s;
  }
  const l = (0, c.mapChildrenWithTag)(r.value, "newsletter", 0, 10000, d);
  if (!l.success) {
    return l;
  }
  return (0, a.makeResult)((0, i.default)((0, i.default)({}, s.value), {}, {
    muteNewsletter: l.value
  }));
};
exports.parseMuteResponseSuccessMuteNewsletter = d;
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./822591.js");
var s = require("./668802.js");
var l = require("./70975.js");
var u = require("./568113.js");
var c = require("./686310.js");
function d(e) {
  const t = (0, c.assertTag)(e, "newsletter");
  if (!t.success) {
    return t;
  }
  const n = (0, u.attrNewsletterJid)(e, "jid");
  if (!n.success) {
    return n;
  }
  const r = (0, l.parseSubscriberNotFoundMixin)(e);
  const i = (0, s.parseNewsletterSuspendedErrorMixin)(e);
  return (0, a.makeResult)({
    jid: n.value,
    subscriberNotFoundMixin: r.success ? r.value : null,
    newsletterSuspendedErrorMixin: i.success ? i.value : null
  });
}