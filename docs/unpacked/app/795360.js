var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processGroupInviteMessages = function () {
  return s.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./632157.js");
var o = require("./144818.js");
function s() {
  return (s = (0, i.default)(function* (e) {
    yield (0, o.persistGroupInviteV4Msgs)(e.map(e => ({
      id: e.id.toString(),
      from: e.from.toString(),
      to: e.to.toString(),
      groupId: e.inviteGrp,
      expiration: parseInt(e.inviteCodeExp, 10),
      expired: (0, a.unixTime)() >= parseInt(e.inviteCodeExp, 10)
    })));
  })).apply(this, arguments);
}