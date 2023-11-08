Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    json: t
  } = e;
  return {
    groupInviteMessage: {
      inviteCode: t.inviteCode,
      inviteExpiration: parseInt(t.inviteCodeExp, 10),
      groupJid: t.inviteGrp,
      groupName: t.inviteGrpName,
      caption: t.comment,
      jpegThumbnail: (0, r.encodeBytes)(t.inviteGrpJpegThum)
    }
  };
};
var r = require("./974637.js");