Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCreateSubGroupSuggestionSuggestionForNewGroupDescription = l;
exports.mergeCreateSubGroupSuggestionSuggestionForNewGroupMixin = function (e, t) {
  const n = function (e) {
    const {
      descriptionArgs: t,
      subjectElementValue: n
    } = e;
    return (0, r.smax)("sub_group_suggestion", null, (0, r.smax)("subject", null, n), (0, a.OPTIONAL_CHILD)(l, t));
  }(t);
  return (0, o.mergeStanzas)(e, n);
};
var a = require("../app/974339.js");
var r = require("../app/758616.js");
var o = require("../app/770006.js");
function l(e) {
  const {
    bodyElementValue: t
  } = e;
  return (0, r.smax)("description", null, (0, r.smax)("body", null, t));
}