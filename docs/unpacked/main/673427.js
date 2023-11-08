var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCommunityParticipants = function () {
  return s.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("./424243.js");
var l = require("../app/984330.js");
var i = require("../app/669050.js");
var u = require("../app/574819.js");
function s() {
  return (s = (0, r.default)(function* (e) {
    const t = yield (0, o.sendGetLinkedGroupsParticipantsRPC)({
      iqTo: (0, u.widToGroupJid)(e)
    });
    switch (t.name) {
      case "GetLinkedGroupsParticipantsResponseSuccess":
        return t.value.linkedGroupsParticipantsParticipant.map(e => (0, i.createWid)(e.jid));
      case "GetLinkedGroupsParticipantsResponseClientError":
        {
          const e = t.value.errorGetLinkedGroupsParticipantsClientErrors.value;
          __LOG__(2)`getLinkedGroupsParticipants failed: ${e.code}:${e.text}`;
          return Promise.reject(new l.ServerStatusCodeError(Number(e.code), e.text));
        }
      case "GetLinkedGroupsParticipantsResponseServerError":
        {
          const e = t.value.errorServerErrors.value;
          __LOG__(2)`getLinkedGroupsParticipants failed: ${e.code}:${e.text}`;
          return Promise.reject(new l.ServerStatusCodeError(Number(e.code), e.text));
        }
    }
  })).apply(this, arguments);
}