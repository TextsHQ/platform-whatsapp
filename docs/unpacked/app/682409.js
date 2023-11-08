var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseParticipantWithJidContainingLidAndDisplayNameMixin = function (e) {
  const t = (0, l.assertTag)(e, "participant");
  if (!t.success) {
    return t;
  }
  const n = (0, s.attrUserJid)(e, "jid");
  if (!n.success) {
    return n;
  }
  const r = (0, o.parseDisplayNameMixin)(e);
  if (!r.success) {
    return r;
  }
  return (0, a.makeResult)((0, i.default)({
    jid: n.value
  }, r.value));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./243955.js");
var s = require("./568113.js");
var l = require("./686310.js");