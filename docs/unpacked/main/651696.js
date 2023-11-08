var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.joinGroupViaInvite = function () {
  return c.apply(this, arguments);
};
exports.queryGroupInviteCode = function (e) {
  return function (e) {
    if (e.groupInviteCodePromise) {
      return e.groupInviteCodePromise;
    }
    return e.groupInviteCodePromise = (0, u.queryGroupInviteCode)(e.id).then(t => {
      e.inviteCode = t.code;
    }).finally(() => {
      e.groupInviteCodePromise = null;
    });
  }((0, s.unproxy)(e));
};
exports.revokeGroupInvite = function (e) {
  return function (e) {
    if (e.revokeGroupInvitePromise) {
      return e.revokeGroupInvitePromise;
    }
    return e.revokeGroupInvitePromise = (0, u.resetGroupInviteCode)(e.id).then(t => {
      e.inviteCode = t.code;
    }).catch((0, o.filteredCatch)(l.ServerStatusCodeError, e => {
      throw e;
    })).catch(() => {
      __LOG__(3)`models:groupMetadata:participantCollection:revokeGroupInvite dropped`;
    }).finally(() => {
      e.revokeGroupInvitePromise = null;
    });
  }((0, s.unproxy)(e));
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/122583.js");
var l = require("../app/984330.js");
var i = require("../app/581354.js");
var u = require("./153438.js");
var s = require("../app/163139.js");
function c() {
  return (c = (0, r.default)(function* (e, t) {
    const {
      gid: n
    } = yield (0, u.joinGroupViaInvite)(e, t);
    return (0, i.findChat)(n, "queryGroupInviteCode", {
      isGroupJoin: true
    });
  })).apply(this, arguments);
}