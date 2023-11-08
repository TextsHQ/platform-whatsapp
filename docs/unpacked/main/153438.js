var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.joinGroupViaInvite = function () {
  return h.apply(this, arguments);
};
exports.queryGroupInviteCode = function (e) {
  return p((0, l.wap)("iq", {
    type: "get",
    xmlns: "w:g2",
    to: (0, s.GROUP_JID)(e),
    id: (0, l.generateId)()
  }, (0, l.wap)("invite", null)));
};
exports.resetGroupInviteCode = function (e) {
  return p((0, l.wap)("iq", {
    type: "set",
    xmlns: "w:g2",
    to: (0, s.GROUP_JID)(e),
    id: (0, l.generateId)()
  }, (0, l.wap)("invite", null)));
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/250281.js");
var l = require("../app/716358.js");
var i = require("../app/347387.js");
var u = require("../app/984330.js");
var s = require("../app/355813.js");
var c = require("./183116.js");
var d = require("../app/854379.js");
const f = new i.WapParser("queryGroupInviteCodeParser", e => ({
  code: e.child("invite").attrString("code")
}));
function p() {
  return m.apply(this, arguments);
}
function m() {
  return (m = (0, r.default)(function* (e) {
    const t = yield (0, o.deprecatedSendIq)(e, f);
    if (t.success) {
      return t.result;
    } else {
      __LOG__(2)`sendGroupInviteIq failed: ${t.errorCode} : ${t.errorType}`;
      return Promise.reject(new u.ServerStatusCodeError(t.errorCode, t.errorText));
    }
  })).apply(this, arguments);
}
function h() {
  return (h = (0, r.default)(function* (e, t) {
    const n = (0, l.wap)("iq", {
      type: "set",
      xmlns: "w:g2",
      to: l.G_US,
      id: (0, l.generateId)()
    }, (0, l.wap)("invite", {
      code: (0, l.CUSTOM_STRING)(e)
    }));
    const a = new i.WapParser("joinGroupViaInviteParser", e => {
      e.assertTag("iq");
      e.assertAttr("from", "g.us");
      e.assertAttr("type", "result");
      const n = e.maybeChild(t ? "membership_approval_request" : "group");
      if (!n) {
        const n = e.child(t ? "group" : "membership_approval_request");
        throw new u.UnexpectedJoinGroupViaInviteResponse((0, d.groupJidToWid)(n.attrGroupJid("jid")), !t);
      }
      return {
        gid: (0, d.groupJidToWid)(n.attrGroupJid("jid"))
      };
    });
    const r = self.performance.now();
    let s;
    let f = true;
    try {
      const e = yield (0, o.deprecatedSendIq)(n, a);
      if (!e.success) {
        __LOG__(2)`joinGroupInvite failed: ${e.errorCode}:${e.errorType}`;
        throw new u.ServerStatusCodeError(e.errorCode, e.errorText);
      }
      s = e.result.gid;
      return e.result;
    } catch (e) {
      f = false;
      throw e;
    } finally {
      if (t) {
        const e = self.performance.now() - r;
        (0, c.logMembershipRequestCreate)({
          groupId: s,
          isSuccessful: f,
          responseTime: e
        });
      }
    }
  })).apply(this, arguments);
}