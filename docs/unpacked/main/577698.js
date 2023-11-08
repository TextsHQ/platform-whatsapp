Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseDeprecatedEditMixin = function (e) {
  const t = (0, o.attrStringEnum)(e, "edit", r.ENUM_0_1_7);
  if (!t.success) {
    return t;
  }
  return (0, a.makeResult)({
    edit: t.value
  });
};
var a = require("../app/135781.js");
var r = require("./882498.js");
var o = require("../app/686310.js");