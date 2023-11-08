var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processSubgroups = m;
exports.queryAndUpdateSubgroupsMetadata = f;
exports.querySubgroupInfo = function () {
  return g.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/122583.js");
var l = require("../app/984330.js");
var i = a(require("../app/667845.js"));
var u = require("./436319.js");
var s = require("../app/430599.js");
var c = a(require("../app/22368.js"));
var d = require("../app/39294.js");
function f() {
  return p.apply(this, arguments);
}
function p() {
  return (p = (0, r.default)(function* (e, t) {
    const n = yield (0, u.queryAllSubgroups)(e, (t == null ? undefined : t.length) ? t[0] : undefined);
    yield m(n, e);
  })).apply(this, arguments);
}
function m() {
  return h.apply(this, arguments);
}
function h() {
  return (h = (0, r.default)(function* (e, t) {
    const n = (0, d.getUnjoinedSubgroups)(e);
    const a = n.map(e => e.id);
    yield (0, s.updateUnjoinedSubgroupsJob)(n, t);
    yield (0, s.cleanUnjoinedSubgroupsJob)(a, t);
    (0, d.updateUnjoinedSubgroupsInCollection)(n, t);
    (0, d.cleanUnjoinedSubgroupsInCollection)(a, t);
  })).apply(this, arguments);
}
function g() {
  return (g = (0, r.default)(function* (e, t) {
    const n = i.default.get(t);
    let a;
    try {
      a = yield (0, u.querySubgroup)(e, t, (n == null ? undefined : n.joinedSubgroups.length) ? n.joinedSubgroups[0] : undefined);
    } catch (e) {
      return (0, o.filteredCatch)(l.ServerStatusCodeError, e => {
        if (!(e.status !== 404 && e.status !== 405)) {
          f(t);
        }
      })(e);
    }
    const r = c.default.get(e.toString());
    if (r != null) {
      r.set({
        subject: a.subject,
        participants: a.participants,
        desc: a.desc,
        creation: a.creation,
        owner: a.owner,
        size: a.size,
        adminRequestRequired: a.adminRequestRequired,
        membershipApprovalMode: a.membershipApprovalMode,
        membershipApprovalRequest: a.membershipApprovalRequest
      });
      return r;
    }
  })).apply(this, arguments);
}