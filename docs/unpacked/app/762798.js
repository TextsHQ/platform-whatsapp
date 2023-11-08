Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterReactionsModeOthersMixin = function (e) {
  const t = (0, a.assertTag)(e, "reactions");
  if (!t.success) {
    return t;
  }
  const n = (0, a.attrStringEnum)(e, "mode", i.ENUM_ALL_BASIC_NONE);
  if (!n.success) {
    return n;
  }
  return (0, r.makeResult)({
    mode: n.value
  });
};
var r = require("./135781.js");
var i = require("./684781.js");
var a = require("./686310.js");