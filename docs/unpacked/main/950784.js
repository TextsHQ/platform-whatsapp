var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CagPhoneNumberHiddenNux = function () {
  const e = d.fbt._("Added privacy for your phone number", null, {
    hk: "3PWF2K"
  });
  const t = d.fbt._("Your phone number is only visible to community admins, people who have saved you as a contact, or those who have your number from your other chats. All other participants will not see your full phone number in this chat.", null, {
    hk: "25XB8L"
  });
  return f.default.createElement(s.PhoneNumberPrivacyNux, {
    testid: "phone_number_not_shared_cag_non_admin",
    onOK: () => u.ModalManager.close(),
    okText: (0, i.default)("Ok"),
    onCancel: () => (0, o.openExternalLink)((0, l.getCagPhoneNumberHidingFaqUrl)()),
    cancelText: d.fbt._("Learn More", null, {
      hk: "17rhVd"
    }),
    displayName: (0, c.getMeDisplayName)(),
    title: e,
    subTitle: t
  });
};
exports.CagPhoneNumberSharedNux = function () {
  const e = d.fbt._("Your phone number is visible in this chat", null, {
    hk: "2QeU1V"
  });
  const t = d.fbt._("Participants can see your phone number because you are a community admin.", null, {
    hk: "wonCX"
  });
  return f.default.createElement(s.PhoneNumberPrivacyNux, {
    testid: "phone_number_shared_cag_admin",
    onOK: () => u.ModalManager.close(),
    okText: (0, i.default)("Ok"),
    onCancel: () => (0, o.openExternalLink)((0, l.getCagPhoneNumberHidingFaqUrl)()),
    cancelText: d.fbt._("Learn More", null, {
      hk: "17rhVd"
    }),
    displayName: (0, r.formatPhone)((0, c.getMeUser)().user),
    title: e,
    subTitle: t
  });
};
var r = require("../app/986120.js");
var o = require("../app/753233.js");
var l = require("../app/258105.js");
var i = a(require("../app/395767.js"));
var u = require("../app/114850.js");
var s = require("./14509.js");
var c = require("../app/459857.js");
var d = require("../vendor/548360.js");
var f = a(require("../vendor/667294.js"));