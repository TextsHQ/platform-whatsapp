var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatContextMenuItemMarkUnread = function (e) {
  let {
    chat: t
  } = e;
  if (t.canUnread) {
    return i.default.createElement(o.default, {
      key: "mark_unread",
      onMarkUnread: function (e) {
        var n;
        r.Cmd.markChatUnread((0, l.unproxy)(t), e);
        if (!e) {
          if (t.isGroup) {
            if (!((n = t.groupMetadata) === null || n === undefined)) {
              n.unreadMentionMetadata.reset();
            }
          }
        }
      },
      chat: (0, l.unproxy)(t)
    });
  }
};
var r = require("../app/780549.js");
var o = a(require("./506450.js"));
var l = require("../app/163139.js");
var i = a(require("../vendor/667294.js"));