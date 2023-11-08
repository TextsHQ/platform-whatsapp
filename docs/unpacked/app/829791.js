Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterIDMetadataMixin = function (e) {
  const t = (0, a.assertTag)(e, "metadata");
  if (!t.success) {
    return t;
  }
  const n = (0, a.flattenedChildWithTag)(e, "id");
  if (!n.success) {
    return n;
  }
  const o = (0, i.attrNewsletterJid)(n.value, "jid");
  if (!o.success) {
    return o;
  }
  return (0, r.makeResult)({
    idJid: o.value
  });
};
var r = require("./135781.js");
var i = require("./568113.js");
var a = require("./686310.js");