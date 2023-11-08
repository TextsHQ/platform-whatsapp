var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = (0, l.useOptionalModelValues)(e, ["membershipApprovalMode", "memberAddMode", "participants"]);
  const n = (0, r.default)();
  (0, o.useListener)(t == null ? undefined : t.participants, "bulk_add bulk_remove reset change:isAdmin", () => {
    n();
  });
  return [Boolean(t == null ? undefined : t.participants.canAdd()), Boolean(t == null ? undefined : t.isNonAdminAndACAGJREnabled())];
};
var r = a(require("../app/969651.js"));
var o = require("../app/808446.js");
var l = require("../app/655241.js");