var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InternetErrorModal = function () {
  return u.default.createElement(r.ConfirmPopup, {
    onOK: s,
    title: i.fbt._("Couldn't load this page", null, {
      hk: "2acGzu"
    }),
    okText: (0, o.default)("Try again"),
    cancelText: i.fbt._("Dismiss", null, {
      hk: "TCesR"
    }),
    onCancel: s
  }, i.fbt._("Check your internet connection and try again.", null, {
    hk: "3mR3vY"
  }));
};
exports.ServerErrorModal = function () {
  return u.default.createElement(r.ConfirmPopup, {
    onOK: s,
    title: i.fbt._("Couldn't load this page", null, {
      hk: "wv5AR"
    }),
    okText: (0, o.default)("Try again"),
    cancelText: i.fbt._("Dismiss", null, {
      hk: "TCesR"
    }),
    onCancel: s
  }, i.fbt._("Please try again later.", null, {
    hk: "416X44"
  }));
};
var r = require("../app/103440.js");
var o = a(require("../app/395767.js"));
var l = require("../app/114850.js");
var i = require("../vendor/548360.js");
var u = a(require("../vendor/667294.js"));
const s = () => {
  l.ModalManager.close();
};