var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.joinSubgroup = function () {
  return s.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("./233487.js");
var l = require("../app/984330.js");
var i = require("../app/862159.js");
var u = require("../app/574819.js");
function s() {
  return (s = (0, r.default)(function* (e, t, n, a) {
    const r = (0, u.widToGroupJid)(e);
    const s = (0, u.widToGroupJid)(t);
    const c = n === i.GroupType.LINKED_ANNOUNCEMENT_GROUP ? "default_sub_group" : "sub_group";
    const d = yield (0, o.sendJoinLinkedGroupRPC)({
      iqTo: r,
      joinLinkedGroupType: c,
      joinLinkedGroupJid: s
    });
    switch (d.name) {
      case "JoinLinkedGroupResponseSuccess":
        if (a) {
          throw new l.UnexpectedJoinSubgroupResponse(false);
        }
        return {
          gid: e,
          status: 200
        };
      case "JoinLinkedGroupResponseGroupJoinRequestSuccess":
        if (!a) {
          throw new l.UnexpectedJoinSubgroupResponse(true);
        }
        return {
          gid: e,
          status: 200
        };
      case "JoinLinkedGroupResponseClientError":
        {
          const e = d.value.errorJoinLinkedGroupClientErrors;
          __LOG__(2)`joinSubgroup failed: ${d.name}`;
          return Promise.reject(new l.ServerStatusCodeError(Number(e.value.code)));
        }
      default:
        {
          d.name;
          const e = d.value.errorServerErrors;
          __LOG__(2)`joinSubgroup failed: ${d.name}`;
          return Promise.reject(new l.ServerStatusCodeError(Number(e.value.code)));
        }
    }
  })).apply(this, arguments);
}