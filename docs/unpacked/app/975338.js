var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = require("./103440.js");
var a = require("./332108.js");
var o = require("./38878.js");
var s = require("../vendor/548360.js");
var l = r(require("../vendor/667294.js"));
exports.default = () => l.default.createElement(i.ConfirmPopup, {
  cover: true,
  cancelText: s.fbt._("Log out", null, {
    hk: "1qOHlo"
  }),
  onCancel: o.Socket.logout.bind(o.Socket, true, a.LogoutReason.UserInitiated),
  okText: s.fbt._("Log in", null, {
    hk: "3by5Yi"
  })
}, s.fbt._("The version of WhatsApp on your phone is too old. Please update to the latest version, then click \"LOG IN\" to continue using WhatsApp.", null, {
  hk: "2gorpJ"
}));