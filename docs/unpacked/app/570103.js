var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCustomUrlPaths = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./716358.js");
var s = require("./347387.js");
var l = require("./984330.js");
var u = require("./355813.js");
const c = new s.WapParser("customURLResponse", e => {
  e.assertTag("iq");
  e.assertFromServer();
  const t = e.child("custom_urls");
  const n = [];
  t.forEachChildWithTag("custom_url", e => {
    const t = e.maybeChild("path");
    if (t) {
      const e = t.contentString();
      if (e != null) {
        n.push(e);
      }
    }
  });
  return {
    paths: n
  };
});
function d() {
  return (d = (0, i.default)(function* (e) {
    const t = (0, o.wap)("iq", {
      smax_id: "78",
      xmlns: "fb:thrift_iq",
      type: "get",
      to: o.S_WHATSAPP_NET,
      id: (0, o.generateId)()
    }, (0, o.wap)("user", {
      jid: (0, u.JID)(e)
    }));
    const n = yield (0, a.deprecatedSendIq)(t, c);
    if (!n.success || !n.result) {
      throw new l.ServerStatusCodeError(n.errorCode, n.errorText);
    }
    return n.result;
  })).apply(this, arguments);
}