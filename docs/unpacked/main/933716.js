Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseAddParticipantsParticipantAddedResponseMixin = function (e) {
  const t = (0, i.assertTag)(e, "participant");
  if (!t.success) {
    return t;
  }
  const n = (0, l.attrUserJid)(e, "jid");
  if (!n.success) {
    return n;
  }
  const u = (0, o.parsePhoneNumberMixin)(e);
  const s = (0, r.parseAddParticipantsParticipantMixins)(e);
  return (0, a.makeResult)({
    jid: n.value,
    phoneNumberMixin: u.success ? u.value : null,
    addParticipantsParticipantMixins: s.success ? s.value : null
  });
};
var a = require("../app/135781.js");
var r = require("./783406.js");
var o = require("../app/202804.js");
var l = require("../app/568113.js");
var i = require("../app/686310.js");