var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatMenuItem = function (e) {
  let {
    chat: t,
    onSelect: n
  } = e;
  return i.default.createElement(l.ActionMenuItem, (0, r.default)({}, (0, o.getChatCellContent)(t), {
    onSelect: n,
    optionId: `chat-${t.id.toString()}`
  }));
};
var r = a(require("../vendor/967154.js"));
var o = require("./83937.js");
var l = require("./752104.js");
var i = a(require("../vendor/667294.js"));