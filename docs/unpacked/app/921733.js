var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./716358.js");
var s = require("./347387.js");
var l = require("./984330.js");
var u = require("./355813.js");
var c = r(require("./124928.js"));
const d = new s.WapParser("photoResponseParser", e => {
  e.assertAttr("type", "result");
  if (e.hasChild("picture")) {
    return {
      id: e.child("picture").attrInt("id")
    };
  }
  return {
    id: null
  };
});
function p() {
  return (p = (0, i.default)(function* (e, t) {
    const n = yield (0, a.deprecatedSendIq)((0, o.wap)("iq", {
      to: o.S_WHATSAPP_NET,
      target: c.default.isGroup(e) ? (0, u.CHAT_JID)(e) : o.DROP_ATTR,
      type: "set",
      xmlns: "w:profile:picture",
      id: (0, o.generateId)()
    }, t ? (0, o.wap)("picture", {
      type: "image"
    }, t) : null), d);
    if (n.success) {
      return {
        id: n.result.id
      };
    } else {
      return Promise.reject(new l.ServerStatusCodeError(n.errorCode, n.errorText));
    }
  })).apply(this, arguments);
}