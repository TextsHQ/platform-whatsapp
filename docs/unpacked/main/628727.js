var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    text: t,
    resend: n
  } = e;
  if (n == null) {
    return i.default.createElement(r.ConfirmPopup, {
      onOK: () => {
        o.ModalManager.close();
      }
    }, t);
  }
  return i.default.createElement(r.ConfirmPopup, {
    onOK: () => {
      n();
      o.ModalManager.close();
    },
    okText: l.fbt._("Try Again", null, {
      hk: "1UTnaS"
    }),
    cancelText: l.fbt._("Cancel", null, {
      hk: "H0gNq"
    }),
    onCancel: () => o.ModalManager.close()
  }, t);
};
var r = require("../app/103440.js");
var o = require("../app/114850.js");
var l = require("../vendor/548360.js");
var i = a(require("../vendor/667294.js"));