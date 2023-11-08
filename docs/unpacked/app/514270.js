var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    messageProtobuf: t,
    baseMessage: n
  } = e;
  const {
    groupInviteMessage: r
  } = t;
  if (r == null) {
    return;
  }
  const {
    caption: o,
    inviteCode: s,
    inviteExpiration: l,
    groupJid: u,
    groupName: c,
    contextInfo: d
  } = r;
  return {
    msgData: (0, i.default)((0, i.default)({}, n), {}, {
      type: a.MSG_TYPE.GROUPS_V4_INVITE,
      comment: o,
      inviteCode: s,
      inviteCodeExp: l == null ? undefined : l.toString(),
      inviteGrp: u,
      inviteGrpName: c
    }),
    contextInfo: d
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./373070.js");