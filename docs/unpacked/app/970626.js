var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genPaymentInviteAccountSetupMsg = function (e, t) {
  return {
    id: new i.default({
      remote: e,
      fromMe: false,
      id: i.default.newId_DEPRECATED()
    }),
    from: e,
    recipients: [],
    self: "in",
    subtype: "payment_invite_account_set_up",
    t,
    type: a.MSG_TYPE.NOTIFICATION_TEMPLATE,
    templateParams: [e]
  };
};
var i = r(require("./565754.js"));
var a = require("./373070.js");