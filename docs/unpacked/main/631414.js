Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeSubGroupSuggestionMixin = function (e, t) {
  const n = function (e) {
    const {
      subGroupSuggestionCreator: t
    } = e;
    return (0, o.mergeSubGroupSuggestionWithoutCreatorMixin)((0, a.smax)("sub_group_suggestion", {
      creator: (0, l.USER_JID)(t)
    }), e);
  }(t);
  return (0, r.mergeStanzas)(e, n);
};
var a = require("../app/758616.js");
var r = require("../app/770006.js");
var o = require("./499934.js");
var l = require("../app/716358.js");