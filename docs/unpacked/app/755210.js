var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  return l.default.createElement(i.ConfirmPopup, {
    cover: true,
    cancelText: s.fbt._("Log out", null, {
      hk: "1qOHlo"
    }),
    onCancel: o.Socket.logout.bind(o.Socket, true, a.LogoutReason.UserInitiated),
    okText: s.fbt._("Log in", null, {
      hk: "3by5Yi"
    })
  }, e.description, " ", e.children);
};
var i = require("./103440.js");
var a = require("./332108.js");
var o = require("./38878.js");
var s = require("../vendor/548360.js");
var l = r(require("../vendor/667294.js"));