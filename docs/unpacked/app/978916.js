var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleCopyPhoneNumber = function (e, t, n) {
  (0, a.default)(e);
  c.ToastManager.open(_.default.createElement(u.Toast, {
    msg: f.fbt._("Copied to clipboard.", null, {
      hk: "3JjQpO"
    })
  }));
  new l.PsPhoneNumberHyperlinkWamEvent({
    phoneNumHyperlinkAction: p.PHONE_NUM_HYPERLINK_ACTION_TYPE.CLICK_COPY_PHONE_NUMBER,
    isPhoneNumHyperlinkOwner: n,
    phoneNumberStatusOnWa: Boolean(t)
  }).commit();
};
exports.handleOpenChat = function (e, t, n) {
  o.ModalManager.open(_.default.createElement(s.OpenChatFlow, {
    chatId: t,
    onSuccess: e => {
      !function (e, t) {
        if (!e) {
          return;
        }
        i.ComposeBoxActions.addMsgSendingLogAttributes(e, {
          handleOnce() {
            new l.PsPhoneNumberHyperlinkWamEvent({
              phoneNumHyperlinkAction: p.PHONE_NUM_HYPERLINK_ACTION_TYPE.MESSAGE_SENT,
              isPhoneNumHyperlinkOwner: t,
              phoneNumberStatusOnWa: true
            }).commit();
          }
        });
      }(e, n);
    },
    msgText: null
  }), {
    transition: "modal-flow"
  });
  new l.PsPhoneNumberHyperlinkWamEvent({
    phoneNumHyperlinkAction: p.PHONE_NUM_HYPERLINK_ACTION_TYPE.CLICK_MESSAGE_ON_WHATSAPP,
    isPhoneNumHyperlinkOwner: (0, d.isMeAccount)(t),
    phoneNumberStatusOnWa: true
  }).commit();
};
exports.logClickOnPhoneNumber = function (e, t) {
  new l.PsPhoneNumberHyperlinkWamEvent({
    phoneNumHyperlinkAction: p.PHONE_NUM_HYPERLINK_ACTION_TYPE.CLICK_PHONE_NUM_HYPERLINK,
    isPhoneNumHyperlinkOwner: t,
    phoneNumberStatusOnWa: Boolean(e)
  }).commit();
};
exports.logCloseDialog = function (e, t) {
  new l.PsPhoneNumberHyperlinkWamEvent({
    phoneNumHyperlinkAction: p.PHONE_NUM_HYPERLINK_ACTION_TYPE.CLOSE_DIALOG_BOX,
    isPhoneNumHyperlinkOwner: t,
    phoneNumberStatusOnWa: Boolean(e)
  }).commit();
};
var i = require("./877171.js");
var a = r(require("./719838.js"));
var o = require("./114850.js");
var s = require("./489891.js");
var l = require("./415066.js");
var u = require("./625786.js");
var c = require("./390737.js");
var d = require("./459857.js");
var p = require("./421778.js");
var f = require("../vendor/548360.js");
var _ = r(require("../vendor/667294.js"));