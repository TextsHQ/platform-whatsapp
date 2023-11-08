var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    disabled: t
  } = e;
  const n = (0, i.useModelValues)(e.chat, ["unreadCount"]);
  const a = e.onMarkUnread.bind(null, !n.unreadCount);
  return l.default.createElement(r.DropdownItem, {
    testid: "mi-mark-as",
    action: a,
    key: "MarkUnreadMenuItem",
    disabled: t
  }, n.unreadCount ? o.fbt._("Mark as read", null, {
    hk: "45aT8u"
  }) : o.fbt._("Mark as unread", null, {
    hk: "WDk49"
  }));
};
var r = require("../app/675085.js");
var o = require("../vendor/548360.js");
var l = a(require("../vendor/667294.js"));
var i = require("../app/655241.js");