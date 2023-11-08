var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logMembershipRequestApprove = function (e) {
  i((0, r.default)((0, r.default)({}, e), {}, {
    action: l.GROUP_JOIN_REQUEST_ACTION_TYPE.MEMBERSHIP_REQUEST_APPROVE
  }));
};
exports.logMembershipRequestCancel = function (e) {
  i((0, r.default)((0, r.default)({}, e), {}, {
    action: l.GROUP_JOIN_REQUEST_ACTION_TYPE.MEMBERSHIP_REQUEST_CANCEL
  }));
};
exports.logMembershipRequestCreate = function (e) {
  i((0, r.default)((0, r.default)({}, e), {}, {
    action: l.GROUP_JOIN_REQUEST_ACTION_TYPE.MEMBERSHIP_REQUEST_CREATE
  }));
};
exports.logMembershipRequestReject = function (e) {
  i((0, r.default)((0, r.default)({}, e), {}, {
    action: l.GROUP_JOIN_REQUEST_ACTION_TYPE.MEMBERSHIP_REQUEST_REJECT
  }));
};
exports.logViewPendingParticipant = function (e) {
  i({
    groupId: e,
    action: l.GROUP_JOIN_REQUEST_ACTION_TYPE.VIEW_PENDING_PARTICIPANTS,
    responseTime: 0,
    isSuccessful: true
  });
};
var r = a(require("../vendor/81109.js"));
var o = require("./165655.js");
var l = require("./81430.js");
function i(e) {
  let {
    groupId: t,
    responseTime: n,
    isSuccessful: a,
    action: r,
    groupsInCommon: l
  } = e;
  new o.WaFsGroupJoinRequestActionWamEvent({
    groupJid: u(t),
    groupJoinRequestAction: r,
    groupJoinRequestGroupsInCommon: l,
    serverResponseTime: Math.round(n),
    isSuccessful: a
  }).commit();
}
function u(e) {
  var t;
  const n = (t = e == null ? undefined : e.toJid()) !== null && t !== undefined ? t : "";
  if (n.includes("-")) {
    return "";
  } else {
    return n;
  }
}