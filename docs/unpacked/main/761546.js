var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    contact: t
  } = e;
  const n = () => {
    if (!(0, i.shouldBlockByTos)(t)) {
      o.ModalManager.close();
    }
  };
  (0, c.useListener)(t, "change:privacyMode", n);
  (0, c.useListener)(l.TosManager, "change", n);
  const a = u.fbt._("WhatsApp recently updated its terms and privacy policy. This business uses a secure service from Meta to manage chats. Open WhatsApp on your phone to read our Terms and Privacy Policy and learn more about the choices you have.", null, {
    hk: "y3voo"
  });
  return s.default.createElement(r.ConfirmPopup, {
    onOK: () => o.ModalManager.close(),
    okText: u.fbt._("OK, got it", null, {
      hk: "2hEWOg"
    }),
    title: u.fbt._("WhatsApp's terms and privacy policy update", null, {
      hk: "1A5YW2"
    })
  }, a);
};
var r = require("../app/103440.js");
var o = require("../app/114850.js");
var l = require("../app/87429.js");
var i = require("../app/227834.js");
var u = require("../vendor/548360.js");
var s = a(require("../vendor/667294.js"));
var c = require("../app/808446.js");