var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/103440.js");
var o = a(require("../app/395767.js"));
var l = require("../app/114850.js");
var i = require("../vendor/548360.js");
var u = a(require("../vendor/667294.js"));
var s = function () {
  let {
    title: e = i.fbt._("WhatsApp Web can't show this message.", null, {
      hk: "1cx2RA"
    }),
    body: t = i.fbt._("Use WhatsApp on your mobile device to view it.", null, {
      hk: "3jYSKM"
    })
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  l.ModalManager.open(u.default.createElement(r.ConfirmPopup, {
    title: e,
    okText: (0, o.default)("OK"),
    onOK: () => l.ModalManager.close()
  }, t));
};
exports.default = s;