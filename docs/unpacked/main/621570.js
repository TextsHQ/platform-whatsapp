var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  return u.default.createElement(r.ConfirmPopup, {
    title: e.title,
    onOK: () => {},
    okText: e.okText,
    okDisabled: true,
    onCancel: () => i.ModalManager.close()
  }, u.default.createElement("div", {
    className: l.default.container
  }, u.default.createElement(o.default, {
    error: e.error
  })));
};
var r = require("../app/103440.js");
var o = a(require("./876486.js"));
var l = a(require("./46581.js"));
var i = require("../app/114850.js");
var u = a(require("../vendor/667294.js"));