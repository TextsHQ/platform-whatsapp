Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGetSubGroupSuggestionsFetchByViewMixin = function (e) {
  const t = (0, a.attrStringEnum)(e, "view", i.ENUM_ADMIN_CREATOR);
  if (!t.success) {
    return t;
  }
  return (0, r.makeResult)({
    view: t.value
  });
};
var r = require("./135781.js");
var i = require("./699342.js");
var a = require("./686310.js");