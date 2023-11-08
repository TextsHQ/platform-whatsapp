Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseSubGroupSuggestionsApprovalErrors = function (e) {
  const t = (0, i.parseSubGroupSuggestionsActionSubGroupSuggestionNotFoundMixin)(e);
  if (t.success) {
    return (0, a.makeResult)({
      name: "SubGroupSuggestionsActionSubGroupSuggestionNotFound",
      value: t.value
    });
  }
  const n = (0, l.parseSubGroupSuggestionsActionSubGroupSuggestionConflictMixin)(e);
  if (n.success) {
    return (0, a.makeResult)({
      name: "SubGroupSuggestionsActionSubGroupSuggestionConflict",
      value: n.value
    });
  }
  const s = (0, o.parseSubGroupSuggestionsActionSubGroupResourceConstraintMixin)(e);
  if (s.success) {
    return (0, a.makeResult)({
      name: "SubGroupSuggestionsActionSubGroupResourceConstraint",
      value: s.value
    });
  }
  const c = (0, r.parseSubGroupSuggestionsActionSubGroupCreationInternalServerErrorMixin)(e);
  if (c.success) {
    return (0, a.makeResult)({
      name: "SubGroupSuggestionsActionSubGroupCreationInternalServerError",
      value: c.value
    });
  }
  return (0, u.errorMixinDisjunction)(e, ["SubGroupSuggestionNotFound", "SubGroupSuggestionConflict", "SubGroupResourceConstraint", "SubGroupCreationInternalServerError"], [t, n, s, c]);
};
var a = require("../app/135781.js");
var r = require("./161928.js");
var o = require("./119030.js");
var l = require("./643850.js");
var i = require("./607437.js");
var u = require("../app/686310.js");