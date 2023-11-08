var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AttachMenuPopupItemQuickReplies = function (e) {
  let {
    chat: t
  } = e;
  return u.default.createElement(o.AttachMenuPopupItem, {
    testid: "mi-attach-quick-replies",
    action: e => {
      e.preventDefault();
      i.ComposeBoxActions.toggleQuickReplies();
      r.AttachmentMenuLogger.logAttachMenuClick(t, r.AttachmentMenuTarget.QUICK_REPLY);
      return true;
    },
    icon: u.default.createElement("svg", {
      height: "20",
      viewBox: "0 0 13 22",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, u.default.createElement("path", {
      d: "M4.48313 22C4.05536 22 3.72536 21.6211 3.78647 21.1933L4.88647 13.4444H0.608689C-0.466867 13.4444 0.205356 12.5278 0.2298 12.4911C1.7698 9.76556 4.0798 5.73222 7.13536 0.354444C7.25758 0.134444 7.50202 0 7.74647 0C8.17424 0 8.50424 0.378889 8.44313 0.806667L7.34313 8.55556H11.6331C12.122 8.55556 12.3909 8.78778 12.122 9.36222C8.10091 16.3778 5.76647 20.4722 5.09424 21.6456C4.97202 21.8656 4.7398 22 4.48313 22Z",
      fill: "var(--attachment-type-quick-replies-color)"
    })),
    text: (0, l.QuickRepliesText)()
  });
};
var r = require("./855637.js");
var o = require("./498236.js");
var l = require("./533388.js");
var i = require("../app/877171.js");
var u = a(require("../vendor/667294.js"));