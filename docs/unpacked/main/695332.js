Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeSuggestionForCreateSubGroupSuggestionNewGroupOrCreateSubGroupSuggestionExistingGroupsMixinGroup = function (e, t) {
  if (t.createSubGroupSuggestionSuggestionForNewGroup) {
    return (0, o.mergeCreateSubGroupSuggestionSuggestionForNewGroupMixin)(e, t.createSubGroupSuggestionSuggestionForNewGroup);
  }
  if (t.createSubGroupSuggestionSuggestionForExistingGroups) {
    return (0, r.mergeCreateSubGroupSuggestionSuggestionForExistingGroupsMixin)(e, t.createSubGroupSuggestionSuggestionForExistingGroups);
  }
  throw new a.SmaxMixinGroupExhaustiveError();
};
var a = require("../app/715626.js");
var r = require("./417249.js");
var o = require("./723755.js");