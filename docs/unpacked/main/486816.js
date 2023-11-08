var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LeaveCommunityGeneralChatPopup = function (e) {
  const {
    isArchived: t,
    onArchive: n
  } = e;
  const a = u.fbt._("You cannot exit the general chat because you created the community it's in.", null, {
    hk: "3Pcac4"
  });
  return s.default.createElement(o.ConfirmPopup, (0, r.default)({
    testid: "leave-general-as-admin-popup",
    onOK: () => i.ModalManager.close(),
    okText: (0, l.default)("Cancel")
  }, !t && {
    onCancel: n,
    cancelText: (0, l.default)("Archive instead")
  }), a);
};
var r = a(require("../vendor/967154.js"));
var o = require("../app/103440.js");
var l = a(require("../app/395767.js"));
var i = require("../app/114850.js");
var u = require("../vendor/548360.js");
var s = a(require("../vendor/667294.js"));