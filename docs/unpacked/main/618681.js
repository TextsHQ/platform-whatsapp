var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatContextMenuItemMute = function (e) {
  let {
    chat: t
  } = e;
  if (t.mute.canMute() && !t.archive) {
    return u.default.createElement(o.default, {
      key: "mute",
      onMute: t.isPSA ? function (e) {
        r.Cmd.muteChatFromEntryPoint((0, i.unproxy)(t), e, 1);
      } : function (e) {
        r.Cmd.muteChat((0, i.unproxy)(t), e);
      },
      mute: t.mute,
      chat: t,
      settings: l.default
    });
  }
};
var r = require("../app/780549.js");
var o = a(require("./462034.js"));
var l = a(require("../app/634152.js"));
var i = require("../app/163139.js");
var u = a(require("../vendor/667294.js"));