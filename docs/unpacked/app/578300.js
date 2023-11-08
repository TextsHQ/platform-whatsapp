var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryPrivacyDisallowedList = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./716358.js");
var s = require("./347387.js");
var l = require("./854379.js");
var u = r(require("./556869.js"));
const c = new s.WapParser("getPrivacyDisallowedListParser", e => {
  const t = e.child("privacy").maybeChild("list");
  if (t == null) {
    return {
      status: "match"
    };
  }
  return {
    status: "mismatch",
    users: t.mapChildren(e => (0, l.deviceJidToUserWid)(e.attrDeviceJid("jid"))),
    dhash: t.attrString("dhash")
  };
});
function d() {
  return (d = (0, i.default)(function* (e) {
    const t = (0, o.wap)("iq", {
      to: o.S_WHATSAPP_NET,
      type: "get",
      id: (0, o.generateId)(),
      xmlns: "privacy"
    }, (0, o.wap)("privacy", null, (0, o.wap)("list", {
      name: (0, o.CUSTOM_STRING)(e),
      value: (0, o.CUSTOM_STRING)("contact_blacklist")
    })));
    const n = yield (0, a.deprecatedSendIq)(t, c);
    if (n.success) {
      return n.result;
    }
    throw (0, u.default)("invalid response");
  })).apply(this, arguments);
}