var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const [t] = (0, c.useMsgValues)(e.msg.id, [i.getId]);
  const n = (0, l.getChat)(e.msg);
  const [a] = (0, s.useContactValues)(e.contact.id, [o.getFormattedShortName]);
  return u.default.createElement(r.Message, {
    msg: e.msg,
    chat: n,
    author: a,
    searchText: e.searchText,
    onClick: e.onClick,
    active: e.active,
    key: t.toString()
  });
};
var r = require("./250818.js");
var o = require("../app/714574.js");
var l = require("../app/163755.js");
var i = require("../app/787742.js");
var u = a(require("../vendor/667294.js"));
var s = require("../app/379811.js");
var c = require("./871210.js");