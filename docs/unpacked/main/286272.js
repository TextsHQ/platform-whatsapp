var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleOpenDeviceSwitchCode = function (e) {
  const t = (0, i.getMeUser)();
  (0, l.showDeviceSwitchNotification)({
    wid: t,
    otpCode: e
  });
  o.ModalManager.open(u.default.createElement(r.default, {
    otpCode: e
  }));
};
var r = a(require("./969549.js"));
var o = require("../app/114850.js");
var l = require("../app/409244.js");
var i = require("../app/459857.js");
var u = a(require("../vendor/667294.js"));