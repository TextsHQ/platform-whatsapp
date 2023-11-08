Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeGetInviteGroupInfoRequest = function (e) {
  const {
    inviteCode: t
  } = e;
  return (0, i.mergeBaseGetServerMixin)((0, r.smax)("iq", null, (0, r.smax)("invite", {
    code: (0, a.CUSTOM_STRING)(t)
  })));
};
var r = require("./758616.js");
var i = require("./822435.js");
var a = require("./716358.js");