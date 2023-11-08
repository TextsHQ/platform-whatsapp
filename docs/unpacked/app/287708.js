var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.revokeGroupInviteV4 = function () {
  return u.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./144818.js");
var o = require("./359987.js");
var s = require("./817690.js");
var l = require("./428261.js");
function u() {
  return (u = (0, i.default)(function* (e, t, n, r) {
    const i = yield (0, a.revokeGroupInvites)(e, t, n, r);
    const u = (i == null ? undefined : i.map(e => e.id)) || [];
    const c = yield (0, s.getMsgsByMsgKey)(u, e => {
      e.inviteCodeExp = "0";
    });
    for (const e of c) {
      (0, o.frontendFireAndForget)("expireGroupInviteV4", {
        inviteMsgId: e.id
      });
      (0, l.updateExistingMessages)([e], e.id.remote);
    }
  })).apply(this, arguments);
}