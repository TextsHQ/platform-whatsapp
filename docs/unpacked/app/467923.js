var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseSubGroupSuggestionMixin = function (e) {
  const t = (0, l.assertTag)(e, "sub_group_suggestion");
  if (!t.success) {
    return t;
  }
  const n = (0, s.attrUserJid)(e, "creator");
  if (!n.success) {
    return n;
  }
  const r = (0, o.parseSubGroupSuggestionWithoutCreatorMixin)(e);
  if (!r.success) {
    return r;
  }
  return (0, a.makeResult)((0, i.default)({
    creator: n.value
  }, r.value));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./479512.js");
var s = require("./568113.js");
var l = require("./686310.js");