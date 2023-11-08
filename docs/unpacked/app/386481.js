var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    contact: t,
    onClick: n,
    theme: r,
    selectable: p,
    lastMessage: f
  } = e;
  const [_, g, m] = (0, d.useContactValues)(e.contact.id, [o.getId, l.getDisplayName, o.getNotifyName]);
  let h;
  let y;
  if ((0, s.pushNameCanBeUsed)(t) && (0, i.getABPropConfigValue)("elevated_push_names_v2_m2_enabled")) {
    h = (0, a.getFormattedNotifyName)(m, false).toString();
    y = (0, a.getAccessibleNotifyName)(m).toString();
  } else {
    h = g;
  }
  return c.default.createElement(u.MentionBase, {
    text: h,
    jid: _.toString(),
    onClick: n,
    theme: r,
    selectable: p,
    ariaLabel: y,
    lastMessage: f
  });
};
var i = require("./287461.js");
var a = require("./642838.js");
var o = require("./660666.js");
var s = require("./235630.js");
var l = require("./714574.js");
var u = require("./868391.js");
var c = r(require("../vendor/667294.js"));
var d = require("./379811.js");