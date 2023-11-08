var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maybeQueryAndUpdateSubgroupSuggestions = function () {
  return g.apply(this, arguments);
};
exports.queryAndUpdateSubgroupSuggestions = f;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./900890.js");
var s = require("./174834.js");
var l = require("./369461.js");
var u = require("./35665.js");
var c = require("./876890.js");
var d = r(require("./667845.js"));
var p = require("./459857.js");
function f() {
  return _.apply(this, arguments);
}
function _() {
  return (_ = (0, a.default)(function* (e, t) {
    const n = yield (0, c.querySubgroupSuggestions)(e, t);
    const r = (yield (0, o.getSubgroupSuggestions)(e)).filter(e => !n.some(t => t.id.equals(e.id) && t.owner.equals(e.owner)));
    yield (0, o.removeSubgroupSuggestions)(r.map(t => {
      let {
        id: n,
        owner: r
      } = t;
      return {
        parentGroupId: e,
        id: n,
        owner: r
      };
    }));
    yield (0, o.addSubgroupSuggestions)(e, n);
    d.default.gadd(e).subgroupSuggestions.set(n.map(e => (0, i.default)((0, i.default)({}, e), {}, {
      id: (0, l.getSubgroupSuggestionId)(e.id, e.owner),
      groupId: e.id
    })));
  })).apply(this, arguments);
}
function g() {
  return (g = (0, a.default)(function* (e) {
    if (e.isParentGroup === true && e.allowNonAdminSubGroupCreation === false && e.participants.some(e => (0, p.isMeAccount)(e.id) && e.isAdmin) && (0, s.memberSuggestedGroupsEnabled)()) {
      const t = yield (0, u.getJoinedSubgroups)(e.id);
      if (t.length) {
        return f(e.id, t[0]);
      }
    }
  })).apply(this, arguments);
}