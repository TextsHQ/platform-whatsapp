var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AttachMenuPopupItemPolls = function (e) {
  let {
    chat: t,
    getComposeBoxEditorRef: n
  } = e;
  return d.default.createElement(o.AttachMenuPopupItem, {
    testid: "mi-attach-poll",
    action: e => {
      e.preventDefault();
      i.ModalManager.open(d.default.createElement(u.CreatePollModal, {
        chat: t,
        getComposeBoxEditorRef: n
      }), {
        blockClose: (0, s.isPollsCancelationPromptEnabled)()
      });
      (0, c.prepareChatForMessageSending)(t);
      r.AttachmentMenuLogger.logAttachMenuClick(t, r.AttachmentMenuTarget.POLL);
      return true;
    },
    icon: d.default.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, d.default.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0 2C0 0.895431 0.895431 0 2 0H11C12.1046 0 13 0.895431 13 2C13 3.10457 12.1046 4 11 4H2C0.89543 4 0 3.10457 0 2ZM0 8C0 6.89543 0.895431 6 2 6H14C15.1046 6 16 6.89543 16 8C16 9.10457 15.1046 10 14 10H2C0.895431 10 0 9.10457 0 8ZM2 12C0.895431 12 0 12.8954 0 14C0 15.1046 0.89543 16 2 16H8C9.10457 16 10 15.1046 10 14C10 12.8954 9.10457 12 8 12H2Z",
      fill: "var(--attachment-type-polls-color)"
    })),
    text: (0, l.PollText)()
  });
};
var r = require("./855637.js");
var o = require("./498236.js");
var l = require("./533388.js");
var i = require("../app/114850.js");
var u = require("./317726.js");
var s = require("../app/671598.js");
var c = require("./179268.js");
var d = a(require("../vendor/667294.js"));