var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryGroupInviteLinkProfilePic = function () {
  return f.apply(this, arguments);
};
exports.queryGroupInviteMessageProfilePic = function () {
  return p.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/250281.js");
var l = require("../app/716358.js");
var i = require("../app/347387.js");
var u = require("../app/984330.js");
var s = require("../app/355813.js");
var c = a(require("../app/556869.js"));
const d = new i.WapParser("queryGroupProfilePicParser", e => {
  if (!e.hasChild("picture")) {
    throw (0, c.default)("queryGroupProfilePicParser: invalid group profile response");
  }
  const t = e.child("picture");
  return {
    id: t.attrString("id"),
    type: t.attrString("type"),
    url: t.attrString("url"),
    direct_path: t.attrString("direct_path")
  };
});
function f() {
  return (f = (0, r.default)(function* (e) {
    const {
      groupWid: t,
      code: n,
      option: a
    } = e;
    const r = (0, l.wap)("iq", {
      to: (0, s.GROUP_JID)(t),
      type: "get",
      xmlns: "w:g2",
      id: (0, l.generateId)()
    }, (0, l.wap)("picture", {
      id: (a == null ? undefined : a.id) != null ? (0, l.CUSTOM_STRING)(a.id) : l.DROP_ATTR,
      type: (a == null ? undefined : a.type) || l.DROP_ATTR,
      query: (a == null ? undefined : a.query) || l.DROP_ATTR,
      invite: (0, l.CUSTOM_STRING)(n)
    }));
    const i = yield (0, o.deprecatedSendIq)(r, d);
    if (i.success) {
      return i.result;
    } else {
      __LOG__(2)`queryGroupInviteLinkProfilePic failed: ${i.errorCode}:${i.errorType}`;
      return Promise.reject(new u.ServerStatusCodeError(i.errorCode, i.errorText));
    }
  })).apply(this, arguments);
}
function p() {
  return (p = (0, r.default)(function* (e) {
    const {
      groupWid: t,
      code: n,
      expiration: a,
      adminWid: r,
      option: i
    } = e;
    const c = (0, l.wap)("iq", {
      to: l.S_WHATSAPP_NET,
      type: "get",
      target: (0, s.GROUP_JID)(t),
      xmlns: "w:profile:picture",
      id: (0, l.generateId)()
    }, (0, l.wap)("picture", {
      id: (i == null ? undefined : i.id) != null ? (0, l.CUSTOM_STRING)(i.id) : l.DROP_ATTR,
      type: (i == null ? undefined : i.type) || l.DROP_ATTR,
      query: (i == null ? undefined : i.query) || l.DROP_ATTR
    }, (0, l.wap)("add_request", {
      code: (0, l.CUSTOM_STRING)(n),
      expiration: (0, l.CUSTOM_STRING)(a),
      admin: (0, s.USER_JID)(r)
    })));
    const f = yield (0, o.deprecatedSendIq)(c, d);
    if (f.success) {
      return f.result;
    } else {
      __LOG__(2)`queryGroupInviteMessageProfilePic failed: ${f.errorCode}:${f.errorType}`;
      return Promise.reject(new u.ServerStatusCodeError(f.errorCode, f.errorText));
    }
  })).apply(this, arguments);
}