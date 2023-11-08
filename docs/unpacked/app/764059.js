var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return f.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./716358.js");
var s = require("./347387.js");
var l = require("./984330.js");
var u = r(require("./106819.js"));
var c = require("./355813.js");
var d = require("./854379.js");
const p = new s.WapParser("businessProfileResponse", e => {
  e.assertTag("iq");
  e.assertFromServer();
  const t = e.child("business_profile");
  const n = [];
  t.forEachChildWithTag("profile", e => {
    const t = (0, d.jidWithTypeToWid)(e.attrJidWithType("jid"));
    const r = e.attrString("tag");
    const i = (0, u.default)(e);
    if (Object.keys(i).length) {
      n.push({
        wid: t,
        tag: r,
        profile: i
      });
    } else {
      n.push({
        wid: t,
        tag: r
      });
    }
  });
  return n;
});
function f() {
  return (f = (0, i.default)(function* (e, t) {
    const n = (0, o.wap)("iq", {
      to: o.S_WHATSAPP_NET,
      xmlns: "w:biz",
      id: (0, o.generateId)(),
      type: "get"
    }, (0, o.wap)("business_profile", {
      v: (0, o.INT)(t)
    }, e.map(e => (0, o.wap)("profile", {
      jid: (0, c.USER_JID)(e.wid),
      tag: e.tag != null ? (0, o.INT)(e.tag) : o.DROP_ATTR
    }))));
    const r = yield (0, a.deprecatedSendIq)(n, p);
    if (r.success) {
      return r.result;
    }
    throw new l.ServerStatusCodeError(r.errorCode);
  })).apply(this, arguments);
}