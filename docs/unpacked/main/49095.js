var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  const e = s.fbt._("We are updating our WhatsApp Business Terms of Service. Agree to our new Terms on your phone to continue using WhatsApp Business.", null, {
    hk: "yakgm"
  });
  (0, d.useListener)(o.Conn, "change:smbTos", () => {
    if (!o.Conn.smbTos) {
      l.ModalManager.close();
    }
  });
  const t = s.fbt._("Log out", null, {
    hk: "1qOHlo"
  });
  return c.default.createElement(r.ConfirmPopup, {
    onOK: () => {
      __LOG__(2)`SMB: terms of service modal, user clicked logout`;
      l.ModalManager.close();
      u.Socket.logout();
    },
    okText: t
  }, e, " ", c.default.createElement(i.default, null));
};
var r = require("../app/103440.js");
var o = require("../app/445729.js");
var l = require("../app/114850.js");
var i = a(require("../app/76892.js"));
var u = require("../app/38878.js");
var s = require("../vendor/548360.js");
var c = a(require("../vendor/667294.js"));
var d = require("../app/808446.js");