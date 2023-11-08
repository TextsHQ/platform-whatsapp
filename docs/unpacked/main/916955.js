var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.joinAnnouncementGroup = function (e, t) {
  return f(e, t, c.GroupType.LINKED_ANNOUNCEMENT_GROUP, false);
};
exports.joinSubgroup = function (e, t, n) {
  return f(e, t, c.GroupType.LINKED_SUBGROUP, n);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/122583.js");
var l = require("../app/984330.js");
var i = require("./183116.js");
var u = require("./733874.js");
var s = require("../app/853441.js");
var c = require("../app/862159.js");
var d = require("./510900.js");
function f() {
  return p.apply(this, arguments);
}
function p() {
  return (p = (0, r.default)(function* (e, t, n, a) {
    const r = self.performance.now();
    let c;
    let f = true;
    try {
      c = yield (0, u.joinSubgroup)(e, t, n, a);
    } catch (n) {
      f = false;
      return (0, o.filteredCatch)(l.ServerStatusCodeError, n => {
        if (n.status === 404 || n.status === 405) {
          (0, d.queryAndUpdateSubgroupsMetadata)(e);
        } else if (n.status === 409) {
          (0, s.sendQueryGroup)(t);
        }
        throw new l.ServerStatusCodeError(n.status);
      })(n);
    } finally {
      if (a) {
        const e = self.performance.now() - r;
        (0, i.logMembershipRequestCreate)({
          groupId: t,
          isSuccessful: f,
          responseTime: e
        });
      }
    }
    return c;
  })).apply(this, arguments);
}