Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterReactionSettingsMixin = function (e) {
  const t = (0, a.assertTag)(e, "settings");
  if (!t.success) {
    return t;
  }
  const n = (0, a.flattenedChildWithTag)(e, "reactions");
  if (!n.success) {
    return n;
  }
  const o = (0, i.parseNewsletterReactionsModeOthersOrBlocklistMixinGroup)(n.value);
  if (!o.success) {
    return o;
  }
  return (0, r.makeResult)({
    reactionsNewsletterReactionsModeOthersOrBlocklistMixinGroup: o.value
  });
};
var r = require("./135781.js");
var i = require("./851114.js");
var a = require("./686310.js");