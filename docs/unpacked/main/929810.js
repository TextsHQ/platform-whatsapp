var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let t;
  if (e.subtype === "invite" && e.msgKey) {
    t = (0, i.formatPaymentInviteMessageText)(e.msgKey);
  } else if (e.subtype === "send") {
    const n = p(e.receiverJid);
    if (n != null) {
      t = d.fbt._("Sent to {receiverName}", [d.fbt._param("receiverName", n)], {
        hk: "2mrlwP"
      });
    }
  } else if (e.subtype === "request") {
    const n = p(e.receiverJid);
    if (n != null) {
      t = d.fbt._("Requested from {receiverName}", [d.fbt._param("receiverName", n)], {
        hk: "2UvUy6"
      });
    }
  }
  if (t) {
    return f.default.createElement("span", {
      className: (0, r.classnamesConvertMeToStylexPlease)({
        [s.default.isQuoted]: e.isQuoted,
        [s.default.container]: true
      })
    }, t);
  } else {
    return null;
  }
};
var r = require("../app/396574.js");
var o = require("../app/177938.js");
var l = require("../app/660666.js");
var i = require("../app/498362.js");
var u = require("../app/21645.js");
var s = a(require("./692317.js"));
var c = require("../app/931019.js");
var d = require("../vendor/548360.js");
var f = a(require("../vendor/667294.js"));
function p(e) {
  if (!e) {
    return null;
  }
  const t = o.ContactCollection.get(e);
  return f.default.createElement("span", {
    className: s.default.name
  }, t ? (0, l.getIsMe)(t) ? d.fbt._("You", null, {
    hk: "3cspS5"
  }) : f.default.createElement(u.Name, {
    contact: t,
    showNotifyName: true
  }) : (0, c.widToFormattedUser)(e));
}