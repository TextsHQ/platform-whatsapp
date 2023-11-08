Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseFromGroupMixin = function (e) {
  const t = (0, a.assertTag)(e, "chatstate");
  if (!t.success) {
    return t;
  }
  const n = (0, i.attrGroupJid)(e, "from");
  if (!n.success) {
    return n;
  }
  const o = (0, i.attrUserJid)(e, "participant");
  if (!o.success) {
    return o;
  }
  const s = (0, a.optional)(i.attrUserJid, e, "participant_pn");
  if (!s.success) {
    return s;
  }
  return (0, r.makeResult)({
    from: n.value,
    participant: o.value,
    participantPn: s.value
  });
};
var r = require("./135781.js");
var i = require("./568113.js");
var a = require("./686310.js");