var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rejectMembershipApprovalRequest = exports.readMembershipApprovalRequestsFromDB = exports.cancelMembershipApprovalRequest = exports.approveMembershipApprovalRequest = exports.RequestError = exports.GroupError = undefined;
var r = a(require("../vendor/348926.js"));
var o = require("../app/477689.js");
var l = a(require("../app/670983.js"));
var i = require("../app/779423.js");
var u = require("../app/984330.js");
var s = require("./819141.js");
var c = require("./183116.js");
var d = require("./290542.js");
var f = require("../app/163139.js");
var p = require("../app/459857.js");
class m extends (0, o.customError)("GroupError") {
  constructor(e, t) {
    super(t);
    this.status = e;
  }
}
exports.GroupError = m;
class h extends (0, o.customError)("RequestError") {
  constructor(e, t) {
    super(t);
    this.status = e;
  }
}
exports.RequestError = h;
const g = function () {
  var e = (0, r.default)(function* (e) {
    const t = (0, f.unproxy)(e);
    const n = yield (0, i.getMembershipApprovalRequests)(t.id);
    (0, l.default)(t.groupMetadata, "chat.groupMetadata").membershipApprovalRequests.add(n, {
      merge: true
    });
  });
  return function () {
    return e.apply(this, arguments);
  };
}();
exports.readMembershipApprovalRequestsFromDB = g;
const E = function () {
  var e = (0, r.default)(function* (e, t, n) {
    const a = (0, f.unproxy)(e);
    try {
      const [e] = yield (0, d.membershipApprovalRequestAction)(a.id, [t.id], n);
      const {
        error: r
      } = e;
      if (r != null) {
        const {
          name: e,
          value: t
        } = r;
        throw new h(Number(t.error), e);
      }
    } catch (e) {
      if (e instanceof u.ServerStatusCodeError) {
        throw new m(e.status, e.message);
      }
      throw e;
    }
  });
  return function () {
    return e.apply(this, arguments);
  };
}();
const v = function () {
  var e = (0, r.default)(function* (e, t, n) {
    const a = self.performance.now();
    let r = true;
    try {
      yield E(e, t, d.MembershipApprovalRequestAction.Approve);
    } catch (e) {
      r = false;
      throw e;
    } finally {
      const t = self.performance.now() - a;
      (0, c.logMembershipRequestApprove)({
        groupId: e.id,
        isSuccessful: r,
        responseTime: t,
        groupsInCommon: n
      });
    }
  });
  return function () {
    return e.apply(this, arguments);
  };
}();
exports.approveMembershipApprovalRequest = v;
const _ = function () {
  var e = (0, r.default)(function* (e, t, n) {
    const a = self.performance.now();
    let r = true;
    try {
      yield E(e, t, d.MembershipApprovalRequestAction.Reject);
    } catch (e) {
      r = false;
      throw e;
    } finally {
      const t = self.performance.now() - a;
      (0, c.logMembershipRequestReject)({
        groupId: e.id,
        isSuccessful: r,
        responseTime: t,
        groupsInCommon: n
      });
    }
  });
  return function () {
    return e.apply(this, arguments);
  };
}();
exports.rejectMembershipApprovalRequest = _;
const y = function () {
  var e = (0, r.default)(function* (e) {
    const t = self.performance.now();
    let n = true;
    try {
      const [a] = yield (0, s.cancelMembershipApprovalRequestJob)(e, [(0, p.getMeUser)()]);
      const {
        error: r
      } = a;
      if (r != null) {
        const {
          name: e,
          value: t
        } = r;
        throw new h(Number(t.error), e);
      }
    } catch (e) {
      n = false;
      if (e instanceof u.ServerStatusCodeError) {
        throw new m(e.status, e.message);
      }
      throw e;
    } finally {
      const a = self.performance.now() - t;
      (0, c.logMembershipRequestCancel)({
        groupId: e,
        isSuccessful: n,
        responseTime: a
      });
    }
  });
  return function () {
    return e.apply(this, arguments);
  };
}();
exports.cancelMembershipApprovalRequest = y;