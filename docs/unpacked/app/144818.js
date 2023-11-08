var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPendingParticipants = function (e) {
  var t;
  const n = (t = (0, l.getMaybeMeUser)()) === null || t === undefined ? undefined : t.toString();
  return (0, s.getGroupInviteV4Table)().equals(["from", "groupId"], [n, e.toString()]).then(e => e.filter(e => !e.expired && (0, o.unixTime)() <= e.expiration)).then(e => e.map(e => e.to));
};
exports.persistGroupInviteV4Msg = function (e, t) {
  return (0, s.getGroupInviteV4Table)().createOrMerge(e, t);
};
exports.persistGroupInviteV4Msgs = function (e) {
  return (0, s.getGroupInviteV4Table)().bulkCreateOrMerge(e);
};
exports.revokeGroupInvites = function () {
  return u.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./632157.js");
var s = require("./671450.js");
var l = require("./459857.js");
function u() {
  return (u = (0, a.default)(function* (e, t, n, r) {
    const a = yield (0, s.getGroupInviteV4Table)().equals(["from", "to", "groupId"], [e, t, n]).then(e => e.filter(e => !e.expired && e.expiration <= r));
    (0, s.getGroupInviteV4Table)().bulkCreateOrReplace(a.map(e => (0, i.default)((0, i.default)({}, e), {}, {
      expired: true
    })));
    return a;
  })).apply(this, arguments);
}