var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrivacyUserAction = undefined;
exports.setPrivacy = function () {
  return f.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/250281.js");
var l = require("../app/716358.js");
var i = require("../app/347387.js");
var u = require("../app/984330.js");
var s = require("../app/355813.js");
const c = new i.WapParser("setPrivacyParser", e => e.child("privacy").mapChildrenWithTag("category", e => {
  if (e.attrString("value") === "error") {
    const t = e.child("error");
    return new u.ServerStatusCodeError(t.attrInt("code"), t.attrString("text"));
  }
  return {
    name: e.attrString("name"),
    value: e.attrString("value"),
    dhash: e.maybeAttrString("dhash")
  };
}));
const d = require("../vendor/76672.js")({
  Add: "add",
  Remove: "remove"
});
function f() {
  return (f = (0, r.default)(function* (e) {
    const t = e.map(e => {
      const {
        name: t,
        value: n,
        users: a,
        dhash: r
      } = e;
      return (0, l.wap)("category", {
        name: (0, l.CUSTOM_STRING)(t),
        value: (0, l.CUSTOM_STRING)(n),
        dhash: a == null ? l.DROP_ATTR : (0, l.CUSTOM_STRING)(r != null ? r : "none")
      }, a == null ? null : a.map(e => {
        let {
          action: t,
          wid: n
        } = e;
        return (0, l.wap)("user", {
          action: (0, l.CUSTOM_STRING)(t),
          jid: (0, s.JID)(n)
        });
      }));
    });
    const n = yield (0, o.deprecatedSendIq)((0, l.wap)("iq", {
      to: l.S_WHATSAPP_NET,
      type: "set",
      xmlns: "privacy",
      id: (0, l.generateId)()
    }, (0, l.wap)("privacy", null, t)), c);
    if (n.success === true) {
      return n.result;
    }
    throw new u.ServerStatusCodeError(n.errorCode, n.errorText);
  })).apply(this, arguments);
}
exports.PrivacyUserAction = d;