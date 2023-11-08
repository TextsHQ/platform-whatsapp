var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.leaveCommunities = g;
exports.leaveCommunity = function (e) {
  return g([e]).then(e => e[0]);
};
exports.leaveGroup = function (e) {
  return f([e]).then(e => e[0]);
};
exports.leaveGroups = f;
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./716358.js");
var s = require("./347387.js");
var l = require("./984330.js");
var u = require("./355813.js");
var c = require("./854379.js");
const d = new s.WapParser("leaveGroupsResultParser", e => {
  e.assertAttr("type", "result");
  return e.child("leave").mapChildren(e => ({
    id: (0, c.groupJidToWid)(e.attrGroupJid("id")),
    code: e.hasAttr("error") ? e.attrInt("error") : 200
  }));
});
const p = new s.WapParser("leaveCommunitiesResultParser", e => {
  e.assertAttr("type", "result");
  return e.child("leave").mapChildren(e => ({
    id: (0, c.groupJidToWid)(e.attrGroupJid("parent_group_jid")),
    code: e.hasAttr("error") ? e.attrInt("error") : 200
  }));
});
function f() {
  return _.apply(this, arguments);
}
function _() {
  return (_ = (0, i.default)(function* (e) {
    const t = e.map(e => (0, o.wap)("group", {
      id: (0, u.GROUP_JID)(e)
    }));
    const n = (0, o.wap)("iq", {
      to: o.G_US,
      type: "set",
      xmlns: "w:g2",
      id: (0, o.generateId)()
    }, (0, o.wap)("leave", null, t));
    const r = yield (0, a.deprecatedSendIq)(n, d);
    if (r.success) {
      return r.result;
    } else {
      return Promise.reject(new l.ServerStatusCodeError(r.errorCode, r.errorText));
    }
  })).apply(this, arguments);
}
function g() {
  return m.apply(this, arguments);
}
function m() {
  return (m = (0, i.default)(function* (e) {
    const t = e.map(e => (0, o.wap)("linked_groups", {
      parent_group_jid: (0, u.GROUP_JID)(e)
    }));
    const n = (0, o.wap)("iq", {
      to: o.G_US,
      type: "set",
      xmlns: "w:g2",
      id: (0, o.generateId)()
    }, (0, o.wap)("leave", null, t));
    const r = yield (0, a.deprecatedSendIq)(n, p);
    if (r.success) {
      return r.result;
    } else {
      return Promise.reject(new l.ServerStatusCodeError(r.errorCode, r.errorText));
    }
  })).apply(this, arguments);
}