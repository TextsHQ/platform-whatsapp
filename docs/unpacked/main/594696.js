var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  let e;
  let t;
  let n;
  (0, c.useListener)(o.Conn, "change:tos", d);
  switch (o.Conn.tos) {
    default:
    case 1:
      e = u.fbt._("WhatsApp is updating our Terms and Privacy Policy to reflect new features and comply with the new European Union data protection laws. Open WhatsApp on your phone to read our Terms and Privacy Policy and learn more about the choices you have.", null, {
        hk: "3LsIm"
      });
      t = u.fbt._("OK, got it", null, {
        hk: "2hEWOg"
      });
      n = () => l.ModalManager.close();
      break;
    case 2:
      e = u.fbt._("WhatsApp is updating our Terms and Privacy Policy to reflect new features and comply with the new European Union data protection laws. Open WhatsApp on your phone to read our Terms and Privacy Policy and learn more about the choices you have.", null, {
        hk: "3DBzW"
      });
      t = u.fbt._("Log out", null, {
        hk: "1qOHlo"
      });
      n = f;
  }
  return s.default.createElement(r.ConfirmPopup, {
    onOK: n,
    okText: t
  }, e);
};
var r = require("../app/103440.js");
var o = require("../app/445729.js");
var l = require("../app/114850.js");
var i = require("../app/38878.js");
var u = require("../vendor/548360.js");
var s = a(require("../vendor/667294.js"));
var c = require("../app/808446.js");
function d() {
  if (o.Conn.tos === 0) {
    l.ModalManager.close();
  }
}
function f() {
  l.ModalManager.close();
  i.Socket.logout();
}