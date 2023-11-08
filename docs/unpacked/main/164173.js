var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AttachMenuPopupItemContacts = function (e) {
  let {
    chat: t,
    onMenuComplete: n
  } = e;
  return c.default.createElement(o.AttachMenuPopupItem, {
    testid: "mi-attach-contact",
    action: e => {
      e.preventDefault();
      u.ModalManager.open(c.default.createElement(i.AttachVcardsFlowLoadable, {
        chat: t,
        onCancel: () => {
          r.AttachmentMenuLogger.logAttachmentCancel(t, r.AttachmentMenuTarget.CONTACT);
        },
        onContactsSent: () => {
          if (!(n == null)) {
            n(true, {
              initCaptionUsed: false
            });
          }
          r.AttachmentMenuLogger.logAttachmentSend(t, r.AttachmentMenuTarget.CONTACT);
        }
      }));
      (0, s.prepareChatForMessageSending)(t);
      r.AttachmentMenuLogger.logAttachMenuClick(t, r.AttachmentMenuTarget.CONTACT);
      return true;
    },
    icon: c.default.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, c.default.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 4C12 6.21 10.21 8 8 8C5.79 8 4 6.21 4 4C4 1.79 5.79 0 8 0C10.21 0 12 1.79 12 4ZM0 14C0 11.34 5.33 10 8 10C10.67 10 16 11.34 16 14V15C16 15.55 15.55 16 15 16H1C0.45 16 0 15.55 0 15V14Z",
      fill: "var(--attachment-type-contacts-color)"
    })),
    text: (0, l.ContactText)()
  });
};
var r = require("./855637.js");
var o = require("./498236.js");
var l = require("./533388.js");
var i = require("./951664.js");
var u = require("../app/114850.js");
var s = require("./179268.js");
var c = a(require("../vendor/667294.js"));