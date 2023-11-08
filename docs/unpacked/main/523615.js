var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseCreateSubGroupSuggestionResponseExistingGroupsSuggestionSuccess = function (e, t) {
  const n = (0, s.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const a = (0, s.flattenedChildWithTag)(e, "sub_group_suggestion");
  if (!a.success) {
    return a;
  }
  const i = (0, l.parseIQResultResponseMixin)(e, t);
  if (!i.success) {
    return i;
  }
  const u = (0, s.mapChildrenWithTag)(a.value, "group", 1, 1000, c);
  if (!u.success) {
    return u;
  }
  return (0, o.makeResult)((0, r.default)((0, r.default)({}, i.value), {}, {
    subGroupSuggestionGroup: u.value
  }));
};
exports.parseCreateSubGroupSuggestionResponseExistingGroupsSuggestionSuccessSubGroupSuggestionGroup = c;
var r = a(require("../vendor/73982.js"));
var o = require("../app/135781.js");
var l = require("../app/769758.js");
var i = require("./940593.js");
var u = require("../app/568113.js");
var s = require("../app/686310.js");
function c(e) {
  const t = (0, s.assertTag)(e, "group");
  if (!t.success) {
    return t;
  }
  const n = (0, u.attrGroupJid)(e, "jid");
  if (!n.success) {
    return n;
  }
  const a = (0, i.parseSubGroupNotAuthorizedOrNotExistOrConflictOrResourceLimitOrBadRequestOrServerErrorMixinGroup)(e);
  return (0, o.makeResult)({
    jid: n.value,
    subGroupNotAuthorizedOrNotExistOrConflictOrResourceLimitOrBadRequestOrServerErrorMixinGroup: a.success ? a.value : null
  });
}