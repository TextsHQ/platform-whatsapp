var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatContextMenuItemBlock = function (e) {
  let {
    chat: t
  } = e;
  if ((0, r.getABPropConfigValue)("block_from_chat_list") && t.isUser && !(0, u.getIsMe)(t.contact) && !t.contact.isEnterprise) {
    if (i.BlocklistCollection.get(t.id)) {
      return d.default.createElement(s.DropdownItem, {
        key: "UnBlock",
        action: () => (0, o.handleUnblock)(t.contact, t.isTrusted() ? l.BlockEntryPoint.ChatListBlock : l.BlockEntryPoint.ChatListNoInsubBlock),
        testid: "mi-unblock-contact"
      }, c.fbt._("Unblock", null, {
        hk: "3ZgKZU"
      }));
    } else {
      return d.default.createElement(s.DropdownItem, {
        key: "Block",
        action: () => (0, o.handleBlock)(t, t.isTrusted() ? l.BlockEntryPoint.ChatListBlock : l.BlockEntryPoint.ChatListNoInsubBlock),
        testid: "mi-block-contact"
      }, c.fbt._("Block", null, {
        hk: "3ZqbXj"
      }));
    }
  }
};
var r = require("../app/287461.js");
var o = require("./923092.js");
var l = require("../app/400436.js");
var i = require("../app/474596.js");
var u = require("../app/660666.js");
var s = require("../app/675085.js");
var c = require("../vendor/548360.js");
var d = a(require("../vendor/667294.js"));