var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatPaymentInviteMessageText = function (e) {
  const t = (0, i.default)(e.remote);
  if (e.fromMe) {
    return a.fbt._("You invited {otherUser} to use payments", [a.fbt._param("otherUser", t)], {
      hk: "2Lry24"
    });
  }
  return a.fbt._("{otherUser} invited you to use payments", [a.fbt._param("otherUser", t)], {
    hk: "1ZcfFR"
  });
};
var i = r(require("./151502.js"));
var a = require("../vendor/548360.js");