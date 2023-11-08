var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNonRegisteredWaUserParticipantErrorLidResponseMixin = function (e) {
  const t = (0, u.assertTag)(e, "participant");
  if (!t.success) {
    return t;
  }
  const n = (0, i.parsePhoneNumberMixin)(e);
  if (!n.success) {
    return n;
  }
  const a = (0, l.parseParticipantRequestCodeCanBeSentOrCannotBeCreatedForLegalConcernsMixinGroup)(e);
  if (!a.success) {
    return a;
  }
  return (0, o.makeResult)((0, r.default)((0, r.default)({}, n.value), {}, {
    participantRequestCodeCanBeSentOrCannotBeCreatedForLegalConcernsMixinGroup: a.value
  }));
};
var r = a(require("../vendor/73982.js"));
var o = require("../app/135781.js");
var l = require("./568065.js");
var i = require("../app/202804.js");
var u = require("../app/686310.js");