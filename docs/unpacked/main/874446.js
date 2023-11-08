var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatContextMenuItemArchive = function (e) {
  let {
    chat: t
  } = e;
  if (t.canArchive()) {
    return i.default.createElement(r.default, {
      key: "archive",
      onArchive: t.isPSA ? function (e) {
        if (e) {
          o.Cmd.archiveChatFromEntryPoint((0, l.unproxy)(t), e, 6);
        } else {
          o.Cmd.archiveChatFromEntryPoint((0, l.unproxy)(t), e, 8);
        }
      } : function (e) {
        o.Cmd.archiveChat((0, l.unproxy)(t), e);
      },
      chat: (0, l.unproxy)(t)
    });
  }
};
var r = a(require("./554468.js"));
var o = require("../app/780549.js");
var l = require("../app/163139.js");
var i = a(require("../vendor/667294.js"));