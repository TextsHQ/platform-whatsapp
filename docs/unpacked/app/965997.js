Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeAcceptGroupAddRequest = function (e) {
  const {
    acceptCode: t,
    acceptExpiration: n,
    acceptAdmin: o
  } = e;
  return (0, i.mergeBaseSetGroupMixin)((0, r.smax)("iq", null, (0, r.smax)("accept", {
    code: (0, a.CUSTOM_STRING)(t),
    expiration: (0, a.INT)(n),
    admin: (0, a.USER_JID)(o)
  })), e);
};
var r = require("./758616.js");
var i = require("./667149.js");
var a = require("./716358.js");