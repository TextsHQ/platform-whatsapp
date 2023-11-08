var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    onConfirm: t,
    chat: n
  } = e;
  return u.default.createElement(r.ConfirmPopup, {
    title: i.fbt._("Reset link", null, {
      hk: "37cdK4"
    }),
    onOK: () => {
      t();
      o.ModalManager.close();
    },
    okText: i.fbt._("Reset link", null, {
      hk: "37cdK4"
    }),
    onCancel: () => {
      o.ModalManager.close();
    },
    cancelText: i.fbt._("Cancel", null, {
      hk: "H0gNq"
    })
  }, u.default.createElement("div", {
    className: (0, s.default)(c, l.uiPadding.top4, l.uiPadding.bottom5, l.uiPadding.horiz0)
  }, i.fbt._("Are you sure you want to reset the invite link for \"{community}\"? If you reset the link, no one will be able to use it to join this community.", [i.fbt._param("community", n.contact.name)], {
    hk: "3bVdQP"
  })));
};
var r = require("../app/103440.js");
var o = require("../app/114850.js");
var l = require("../app/676345.js");
var i = require("../vendor/548360.js");
var u = a(require("../vendor/667294.js"));
var s = a(require("../app/156720.js"));
const c = {
  display: "f804f6gw",
  fontSize: "bze30y65",
  lineHeight: "r5qsrrlp",
  color: "tviruh8d"
};