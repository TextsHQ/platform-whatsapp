var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WarningUnkeepOwnMsgModal = function (e) {
  let {
    onConfirm: t,
    onCancel: n
  } = e;
  return i.default.createElement(r.ConfirmPopup, {
    onOK: () => {
      t();
      o.ModalManager.close();
    },
    onCancel: () => {
      if (!(n == null)) {
        n();
      }
      o.ModalManager.close();
    }
  }, l.fbt._("This is your message. If you choose to unkeep it, no one else can keep it again in the chat.", null, {
    hk: "4FOCyY"
  }));
};
var r = require("../app/103440.js");
var o = require("../app/114850.js");
var l = require("../vendor/548360.js");
var i = a(require("../vendor/667294.js"));