var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseLinkSubGroupsResponseSuccess = function (e, t) {
  const n = (0, s.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const a = (0, s.flattenedChildWithTag)(e, "links");
  if (!a.success) {
    return a;
  }
  const i = (0, s.flattenedChildWithTag)(a.value, "link");
  if (!i.success) {
    return i;
  }
  const u = (0, s.literal)(s.attrString, i.value, "link_type", "sub_group");
  if (!u.success) {
    return u;
  }
  const c = (0, l.parseIQResultResponseMixin)(e, t);
  if (!c.success) {
    return c;
  }
  const f = (0, s.mapChildrenWithTag)(i.value, "group", 1, 1000, d);
  if (!f.success) {
    return f;
  }
  return (0, o.makeResult)((0, r.default)((0, r.default)({
    linksLinkLinkType: u.value
  }, c.value), {}, {
    linksLinkGroup: f.value
  }));
};
exports.parseLinkSubGroupsResponseSuccessLinksLinkGroup = d;
exports.parseLinkSubGroupsResponseSuccessLinksLinkGroupParticipant = c;
var r = a(require("../vendor/73982.js"));
var o = require("../app/135781.js");
var l = require("../app/769758.js");
var i = require("./200176.js");
var u = require("../app/568113.js");
var s = require("../app/686310.js");
function c(e) {
  const t = (0, s.assertTag)(e, "participant");
  if (!t.success) {
    return t;
  }
  const n = (0, u.attrUserJid)(e, "jid");
  if (!n.success) {
    return n;
  }
  const a = (0, s.literal)(s.attrString, e, "error", "403");
  if (a.success) {
    return (0, o.makeResult)({
      jid: n.value,
      error: a.value
    });
  } else {
    return a;
  }
}
function d(e) {
  const t = (0, s.assertTag)(e, "group");
  if (!t.success) {
    return t;
  }
  const n = (0, u.attrGroupJid)(e, "jid");
  if (!n.success) {
    return n;
  }
  const a = (0, i.parseSubGroupNotAuthorizedOrForbiddenOrNotExistOrNotAcceptableOrConflictOrResourceLimitOrServerErrorMixinGroup)(e);
  const r = (0, s.mapChildrenWithTag)(e, "participant", 0, 19999, c);
  if (r.success) {
    return (0, o.makeResult)({
      jid: n.value,
      subGroupNotAuthorizedOrForbiddenOrNotExistOrNotAcceptableOrConflictOrResourceLimitOrServerErrorMixinGroup: a.success ? a.value : null,
      participant: r.value
    });
  } else {
    return r;
  }
}