var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    contact: t,
    onClick: n,
    theme: r,
    selectable: d,
    lastMessage: p
  } = e;
  const [f, _, g, m] = (0, u.useContactValues)(e.contact.id, [i.getId, a.getDisplayName, i.getShortName, i.getIsMyContact]);
  const h = (0, c.useModelValues)(e.groupMetadata, ["uniqueShortNameMap"]);
  const y = (0, s.isDropLastNameEnabled)() && h && h.hasUniqueShortNameMention(t) ? g : _;
  return l.default.createElement(o.MentionBase, {
    text: y,
    jid: f.toString(),
    theme: r,
    selectable: d,
    onClick: n,
    lastMessage: p
  });
};
var i = require("./660666.js");
var a = require("./714574.js");
var o = require("./868391.js");
var s = require("./97858.js");
var l = r(require("../vendor/667294.js"));
var u = require("./379811.js");
var c = require("./655241.js");