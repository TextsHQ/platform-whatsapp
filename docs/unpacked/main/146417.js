var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return u.default.createElement(r.ConfirmPopup, {
    title: i.fbt._("Can't Send Changed File", null, {
      hk: "ntbaL"
    }),
    onOK: () => {
      l.ModalManager.close();
    },
    okText: (0, o.default)("OK")
  }, i.fbt._("This document has changed since you tried to send it. Please try again.", null, {
    hk: "3fUbmQ"
  }));
};
var r = require("../app/103440.js");
var o = a(require("../app/395767.js"));
var l = require("../app/114850.js");
var i = require("../vendor/548360.js");
var u = a(require("../vendor/667294.js"));