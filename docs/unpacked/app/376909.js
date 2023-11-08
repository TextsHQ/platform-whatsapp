Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseSmbDataSharingSettingValueMixin = function (e) {
  const t = (0, a.attrStringEnum)(e, "value", i.ENUM_FALSE_NOTSET_TRUE);
  if (!t.success) {
    return t;
  }
  return (0, r.makeResult)({
    value: t.value
  });
};
var r = require("./135781.js");
var i = require("./887341.js");
var a = require("./686310.js");