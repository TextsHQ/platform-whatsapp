Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSubGroupSuggestionsActionRequest = function (e) {
  const {
    approveArgs: t,
    rejectArgs: n,
    cancelArgs: l
  } = e;
  return (0, o.mergeBaseSetGroupMixin)((0, r.smax)("iq", null, (0, r.smax)("sub_group_suggestions_action", null, (0, a.OPTIONAL_CHILD)(s, t), (0, a.OPTIONAL_CHILD)(d, n), (0, a.OPTIONAL_CHILD)(p, l))), e);
};
exports.makeSubGroupSuggestionsActionRequestSubGroupSuggestionsActionApprove = s;
exports.makeSubGroupSuggestionsActionRequestSubGroupSuggestionsActionApproveSubGroupSuggestion = u;
exports.makeSubGroupSuggestionsActionRequestSubGroupSuggestionsActionCancel = p;
exports.makeSubGroupSuggestionsActionRequestSubGroupSuggestionsActionCancelSubGroupSuggestion = f;
exports.makeSubGroupSuggestionsActionRequestSubGroupSuggestionsActionReject = d;
exports.makeSubGroupSuggestionsActionRequestSubGroupSuggestionsActionRejectSubGroupSuggestion = c;
var a = require("../app/974339.js");
var r = require("../app/758616.js");
var o = require("../app/667149.js");
var l = require("./631414.js");
var i = require("./499934.js");
function u(e) {
  return (0, l.mergeSubGroupSuggestionMixin)((0, r.smax)("sub_group_suggestion", null), e);
}
function s(e) {
  const {
    subGroupSuggestionArgs: t
  } = e;
  return (0, r.smax)("approve", null, (0, a.REPEATED_CHILD)(u, t, 1, 1000));
}
function c(e) {
  return (0, l.mergeSubGroupSuggestionMixin)((0, r.smax)("sub_group_suggestion", null), e);
}
function d(e) {
  const {
    subGroupSuggestionArgs: t
  } = e;
  return (0, r.smax)("reject", null, (0, a.REPEATED_CHILD)(c, t, 1, 1000));
}
function f(e) {
  return (0, i.mergeSubGroupSuggestionWithoutCreatorMixin)((0, r.smax)("sub_group_suggestion", null), e);
}
function p(e) {
  const {
    subGroupSuggestionArgs: t
  } = e;
  return (0, r.smax)("cancel", null, (0, a.REPEATED_CHILD)(f, t, 1, 1000));
}