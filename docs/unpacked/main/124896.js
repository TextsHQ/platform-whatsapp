var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatContextMenuItemDelete = function (e) {
  let {
    chat: t
  } = e;
  return i.default.createElement(o.default, {
    key: "delete",
    onDeleteOrExit: () => r.Cmd.deleteOrExitChatFromEntryPoint((0, l.unproxy)(t), 11),
    chat: (0, l.unproxy)(t)
  });
};
var r = require("../app/780549.js");
var o = a(require("./819136.js"));
var l = require("../app/163139.js");
var i = a(require("../vendor/667294.js"));