Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGroupAddressingModeMixin = function (e) {
  const t = (0, a.attrStringEnum)(e, "addressing_mode", i.ENUM_LID_PN);
  if (!t.success) {
    return t;
  }
  return (0, r.makeResult)({
    addressingMode: t.value
  });
};
var r = require("./135781.js");
var i = require("./699342.js");
var a = require("./686310.js");