var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatPinInChatNotification = function (e) {
  var t;
  var n;
  const a = (0, r.default)((t = (n = e.templateParams) === null || n === undefined ? undefined : n[0]) !== null && t !== undefined ? t : (0, u.getSender)(e), "((msg.templateParams?.[0]: WAUnsafeAnyType): ?WID) ?? getSender(msg)");
  if (a.equals((0, s.getMaybeMeUser)())) {
    return c.fbt._("You pinned a message", null, {
      hk: "2sCYwx"
    });
  }
  const d = o.ContactCollection.gadd(a);
  const f = (0, l.getIsMyContact)(d) ? (0, i.getFormattedName)(d) : (0, i.getFormattedPhone)(d);
  return c.fbt._("{contact-name} pinned a message", [c.fbt._param("contact-name", f)], {
    hk: "10MCFS"
  });
};
var r = a(require("../app/670983.js"));
var o = require("../app/177938.js");
var l = require("../app/660666.js");
var i = require("../app/714574.js");
var u = require("../app/787742.js");
var s = require("../app/459857.js");
var c = require("../vendor/548360.js");
a(require("../vendor/667294.js"));