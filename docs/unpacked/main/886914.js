var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    msg: t
  } = e;
  return u.default.createElement(r.ConfirmPopup, {
    onCancel: () => l.ModalManager.close(),
    onOK: () => {
      l.ModalManager.close();
      o.FileSaver.initDownload(t);
    },
    okText: i.fbt._("Download", null, {
      hk: "1g5Jix"
    }),
    cancelText: i.fbt._("Cancel", null, {
      hk: "H0gNq"
    }),
    title: i.fbt._("Download Unsupported File?", null, {
      hk: "Xh7Km"
    })
  }, i.fbt._("This file can't be opened in WhatsApp Web. Download it to open it with another app on your computer?", null, {
    hk: "1DOus2"
  }));
};
var r = require("../app/103440.js");
var o = require("./821130.js");
var l = require("../app/114850.js");
var i = require("../vendor/548360.js");
var u = a(require("../vendor/667294.js"));